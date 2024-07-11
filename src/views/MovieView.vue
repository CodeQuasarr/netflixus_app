<script lang="ts" setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import {onMounted, ref} from "vue";
import {movieCategories} from "../helpers/StaticMovieCategory.ts";

const onSwiper = (swiper: any) => {
    console.log(swiper);
}

const categories = movieCategories
const movies = ref<{ id: number, img: string }[]>([]);
const moviesByCategory = ref<{ [key: string]: { id: number, img: string }[] }>({});

const getMovies = async () => {

    for (const category of categories) {
        const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=9e8b4196eddf67b48ce0377712f95acc&with_genres=' + category.id);
        const data = await response.json();
        moviesByCategory.value[category.name] = data.results.map((movie: any) => ({
            id: movie.id,
            img: `https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`
        })) as { id: number, img: string }[];
    }
    console.log(moviesByCategory.value);


    const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=9e8b4196eddf67b48ce0377712f95acc');
    const data = await response.json();
    movies.value = data.results.map((movie: any) => ({
        id: movie.id,
        img: `https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`
    })) as { id: number, img: string }[];
}

onMounted(() => {
    getMovies();
})

</script>

<template>
    <div class="pb-16">
        <div class="container mx-auto bg-[#0E0E0E] p-8">
            <div v-for="category in categories" :key="category.name" class="">
                <h2 class="text-2xl font-bold mb-4">{{ category.name }}</h2>
                <Swiper
                    :breakpoints="{
                0: {  // xs screen size (below 640px)
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                640: {  // sm screen size (640px and above)
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                768: {  // md screen size (768px and above)
                    slidesPerView: 4,
                    spaceBetween: 30
                },
                1024: {  // lg screen size (1024px and above)
                    slidesPerView: 8,
                    spaceBetween: 30
                }
            }"
                    class="rounded-lg shadow"
                    @swiper="onSwiper"
                >
                    <SwiperSlide
                        v-for="movie in moviesByCategory[category.name]"
                        :key="movie.id"
                        class="group relative items-center justify-center overflow-hidden cursor-pointer">
                        <div class="">
                            <img
                                :src="movie.img"
                                alt="project 1" class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg">
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
