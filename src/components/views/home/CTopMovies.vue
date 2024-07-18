<script lang="ts" setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import {onMounted, ref} from "vue";
import fetchTmdbWithApiKey from "@/services/fetchTmdbWithApiKey";
import MovieCard from "@/components/views/MovieCard.vue";
import {IMovieType} from "@/types/movies/IMovieType";
import { Navigation } from 'swiper/modules';
const onSwiper = (swiper: any) => {
    console.log(swiper);
}

const movies = ref<IMovieType[]>([]);

const props = defineProps<{
    urlPath: string
    cardTitle: string
}>();

const getMovies = async () => {
    const response = await fetchTmdbWithApiKey(props.urlPath);
    const data = await response.json();

    console.log(data.results)

    movies.value = data.results.map((movie: any) => ({
        id: movie.id,
        title: movie.original_title ?? movie.original_name,
        img: `https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`
    })) as IMovieType[];
}


onMounted(() => {
    getMovies();
})

</script>

<template>
    <div class="pb-16">
        <h2 class="text-3xl font-semibold mb-10">{{ props.cardTitle }}</h2>
        <Swiper
            :breakpoints="{
                0: {  // xs screen size (below 640px)
                    slidesPerView: 2,
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
                    slidesPerView: 7,
                    spaceBetween: 30
                }
            }"
            :navigation="true"
            :modules="[Navigation]"
            class="rounded-lg shadow"
            @swiper="onSwiper"
        >
            <SwiperSlide
                v-for="movie in movies"
                :key="movie.id"
                class="group relative items-center justify-center overflow-hidden cursor-pointer">
                <MovieCard :id="movie.id" :title="movie.title" :image="movie.img"/>
            </SwiperSlide>
        </Swiper>

        <div class="flex justify-center">
            <button class="mt-16 rounded-2xl px-8 py-4 border-2 border-orange-500 text-gray-100 hover:bg-orange-600 hover:text-orange-100 duration-300">
                Afficher plus de vidéos
            </button>
        </div>
    </div>
</template>

<style scoped>

</style>
