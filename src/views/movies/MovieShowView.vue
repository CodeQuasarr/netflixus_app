<script setup lang="ts">
import MovieCard from "@/components/movies/MovieCard.vue";
import {MoviesService} from "@/services/movies.service";
import {type RouteParamValue, useRoute, useRouter} from "vue-router";
import {onMounted, ref, watch} from "vue";
import type IMovieDetailsType from "@/types/IMovieDetailsType";
import type IMovieType from "@/types/IMovieType";
import {Navigation} from "swiper/modules";
import CLoading from "@/components/CLoading.vue";
import AnimateComponent from "@/components/AnimateComponent.vue";

const route = useRoute();
const router = useRouter();
const movie = ref<IMovieDetailsType | null>(null);
const similarMovies = ref<IMovieType[]>([]);
const movieService = new MoviesService();
const loading = ref(false);

const movieDetails = async (movieId: string | RouteParamValue[]) => {
    try {
        loading.value = true;
        if (!movieId) {
            await router.push({name: 'Error404'});
            return;
        }
        movie.value = await movieService.moviesDetails(movieId);
        similarMovies.value = await movieService.similarMovies(movieId);
    } catch (e) {
        console.error(e);
    } finally {
        loading.value = false;
    }

};

onMounted(() => {
    movieDetails(route.params.id);
})

watch(() => route.params.id, async (newId) => {
    if (newId) {
        await movieDetails(newId);
    }
});

</script>

<template>
    <div class="relative pb-16">
        <CLoading v-if="loading" />
        <AnimateComponent>
            <template v-slot:toAnimate>
                <div v-if="!loading" class="flex flex-col gap-10">
                    <div class="relative min-h-[650px]">
                        <div class="absolute z-[-30] w-full h-full">
                            <div class="absolute bg-custom-gradient w-full h-full top-0 right-0"></div>
                            <div>
                                <img
                                    :src="movie?.img"
                                    alt="project 1" class="object-cover h-[650px] w-full">
                            </div>
                        </div>
                        <div class="absolute inset-0 grid grid-cols-5 w-full h-full  top-0 right-0">
                            <div class="col-span-full md:col-span-3 h-full bg-accent flex flex-col gap-6 justify-center px-3 py-8 xl:py-0 xl:px-16 ">
                                <div>
                                    <!-- mettre un bouton retour -->
                                    <div>
                                        <button @click="router.go(-1)" class="flex items-center hover:bg-blue-700 text-white p-3 font-bold border border-gray-100 rounded-full">
                                            <svg fill="white" class="h-5 w-5" xmlns="http://www.w3.org/2000/svg"
                                                 viewBox="0 0 20 20">
                                                <path fill-rule="evenodd"
                                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-1a7 7 0 100-14 7 7 0 000 14zm-1-4a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1z"
                                                      clip-rule="evenodd"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <h1 class="text-6xl md:text-7xl font-bold uppercase mb-2"> {{ movie?.title }}</h1>
                                    <p> {{ movie?.genres }}</p>
                                </div>
                                <div>
                                    <button class="flex items-center hover:bg-blue-700 text-white p-3 font-bold border border-gray-100 rounded-full">
                                        <svg fill="white" class="h-5 w-5" xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                                            <path  d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
                                        </svg>
                                    </button>
                                </div>
                                <div>
                                    <h2 class="text-3xl font-semibold mb-2">Synopsis</h2>
                                    <p> {{ movie?.synopsis }} </p>
                                </div>
                            </div>
                            <div class="col-span-2 h-full bg-custom-gradient relative">
                                <div class="absolute bottom-0 right-0">
                                    <!--                        <ul class="list-disc">-->
                                    <!--                            <li> <span>Date de sortie:</span> 15/07/2022 </li>-->
                                    <!--                            <li> <span>Genre:</span> Action, Crime, Thriller, Comédie </li>-->
                                    <!--                            <li> <span>Langue:</span> Français </li>-->
                                    <!--                            <li> <span>Production:</span> Columbia Pictures, 2.0 Entertainment, Don Simpson/Jerry Bruckheimer Films, Columbia Pictures Corporation, Columbia Pictures Industries, Columbia Pictures </li>-->
                                    <!--                        </ul>-->
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container mx-auto px-3 mt-16">
                        <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-7 gap-8">
                            <div
                                v-for="similar in similarMovies"
                                :key="similar.id"
                                class="group relative items-center justify-center overflow-hidden cursor-pointer">
                                <MovieCard :id="similar.id" :title="similar.title"  :image="similar.img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </AnimateComponent>
    </div>
</template>

<style scoped>

</style>
