<script setup lang="ts">
import {onMounted, ref} from "vue";
import type IMovieType from "@/types/IMovieType";
import MovieCard from "@/components/movies/MovieCard.vue";
import {MoviesService} from "@/services/movies.service";
import CLoading from "@/components/CLoading.vue";
import AnimateComponent from "@/components/AnimateComponent.vue";

const upcomingMovies = ref<IMovieType[]>([]);
const loading = ref<boolean>(true);
const movieService = new MoviesService();

const getUpcomingMovies = async () => {
    try {
        loading.value = true;
        upcomingMovies.value = await movieService.upcomingMovies();
    } catch (e: any) {
        console.error(e);
    } finally {
        loading.value = false;
    }
}

onMounted(async () => {
    await getUpcomingMovies();
})
const show = ref(false);
</script>

<template>
    <div class="flex flex-col justify-center relative">
        <CLoading v-if="loading" />
        <AnimateComponent>
            <template v-slot:toAnimate>
                <div v-if="!loading">
                    <h2 class="text-3xl font-semibold mb-10">Selection du mois</h2>
                    <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-7 gap-8">
                        <div
                            v-for="upcoming in upcomingMovies"
                            :key="upcoming.id"
                            class="group relative items-center justify-center overflow-hidden cursor-pointer">
                            <MovieCard :id="upcoming.id" :title="upcoming.title"  :image="upcoming.img"/>
                        </div>
                    </div>
                </div>
            </template>
        </AnimateComponent>
    </div>
</template>

<style scoped>

</style>
