<script lang="ts" setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import {onMounted, ref} from "vue";
import MovieCard from "@/components/views/MovieCard.vue";
import {IMovieType} from "@/types/movies/IMovieType";
import {Navigation} from 'swiper/modules';
import {fetchBannerMovies} from "@/services/fetchBannerMovies";


const theSwiper = ref<any>(null);

const onSwiper = (swiper: any) => {
    theSwiper.value = swiper;
}
const slideNext = () => {
    theSwiper.value.slideNext();
}
const slidePrev = () => {
    theSwiper.value.slidePrev();
}

const movies = ref<IMovieType[]>([]);
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
    }
});

const hideMovieUrl = props.movieUrl === undefined;

const getMovies = async () => {
    try {
        if (props.urlPath) {
            movies.value = await fetchBannerMovies(props.urlPath);
        }
    } catch (e: any) {
        console.error(e);
    }
}

onMounted(() => {
    if (props.data) {
        movies.value = props.data as IMovieType[];
    } else {
        getMovies();
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
                            <RouterLink to="/movies?" class="ms-1 text-2xl font-medium text-orange-500 hover:text-orange-600 md:ms-2">Voir plus</RouterLink>
                        </div>
                    </li>
                </ol>
            </div>
            <div v-if="hideMovieUrl" class="flex items-center justify-center">
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

        <div v-if="!hideMovieUrl" class="flex justify-center">
            <div class="mt-16 flex items-center justify-center">
                <button class="border-2 border-orange-500 text-gray-100 hover:bg-orange-600 hover:text-orange-100 duration-300 rounded-2xl p-2 mx-1 cursor-pointer" @click="slidePrev">
                    <svg fill="white" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                        <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>
                </button>

                <RouterLink
                    :to="props.movieUrl"
                    class="mx-3 rounded-2xl px-8 py-2 border-2 border-orange-500 text-gray-100 hover:bg-orange-600 hover:text-orange-100 duration-300">
                    Afficher plus de vidéos
                </RouterLink>

                <button class="border-2 border-orange-500 text-gray-100 hover:bg-orange-600 hover:text-orange-100 duration-300 rounded-2xl p-2 mx-1 cursor-pointer" @click="slideNext">
                    <svg fill="white" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
