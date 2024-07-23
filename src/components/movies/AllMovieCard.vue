<script setup lang="ts">

import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import {onMounted, ref} from "vue";
import type IMovieType from "@/types/IMovieType";
import {Navigation} from "swiper/modules";
import {MoviesService} from "@/services/movies.service";
import MovieCard from "@/components/movies/MovieCard.vue";

const props = defineProps({
    urlPath: {
        type: String,
        required: false
    },
    cardTitle: {
        type: String,
        required: true
    },
    movieUrl: {
        type: String,
        required: false
    },
    data:{
        type: Object,
        required: false
    },
    categoryId: {
        type: Number,
        required: false
    }
});

const theSwiper = ref<any>(null);
const movies = ref<IMovieType[]>([]);
const queryCategory = ref('');
const movieService = new MoviesService();

const onSwiper = (swiper: any) => {
    console.log('swiper', swiper);
    theSwiper.value = swiper;
}
const slideNext = () => {
    console.log('slideNext');
    theSwiper.value.slideNext();
}
const slidePrev = () => {
    console.log('slidePrev');
    theSwiper.value.slidePrev();
}
const getMovies = async () => {
    try {
        if (props.urlPath) {

            //movies.value = await movieService.getMovies(queryCategory.value);
        } else {
            movies.value = await movieService.popularMovies();
        }
    } catch (e: any) {
        console.error(e);
    }
}

onMounted(async () => {
    queryCategory.value = props.categoryId ? `genre=${props.categoryId}` : '';
    if (props.data) {
        movies.value = props.data as IMovieType[];
    } else {
        await getMovies();
    }
})


</script>

<template>
    <div class="flex flex-col justify-center">
        <div class=" mb-5 mt-16 flex items-center justify-between">
            <div class="flex flex-row items-center justify-center">
                <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li class="inline-flex items-center">
                        <h2 class="inline-flex items-center text-2xl font-medium text-white">
                            {{ props.cardTitle }}
                        </h2>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                            </svg>
                            <RouterLink :to="`/movies?${queryCategory}`" class="ms-1 text-2xl font-medium text-orange-500 hover:text-orange-600 md:ms-2">Voir plus</RouterLink>
                        </div>
                    </li>
                </ol>
            </div>
            <div class="flex items-center justify-center">
                <button class="border-2 border-orange-500 text-gray-100 hover:bg-orange-600 hover:text-orange-100 duration-300 rounded-2xl p-2 mx-1 cursor-pointer" @click="slidePrev">
                    <svg fill="white" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                        <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>
                </button>

                <button class="border-2 border-orange-500 text-gray-100 hover:bg-orange-600 hover:text-orange-100 duration-300 rounded-2xl p-2 mx-1 cursor-pointer" @click="slideNext">
                    <svg fill="white" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
                    </svg>
                </button>
            </div>
        </div>
        <div class="relative">
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
                :modules="[Navigation]"
                class="rounded-lg shadow"
                @swiper="onSwiper"
            >
                <SwiperSlide
                    v-for="movie in movies"
                    :key="movie.id"
                    class="group relative items-center justify-center overflow-hidden cursor-pointer">
                    <MovieCard :id="movie.id" :image="movie.img" :title="movie.title"/>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</template>

<style scoped>

</style>
