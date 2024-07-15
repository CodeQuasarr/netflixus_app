<script setup lang="ts">
import fetchTmdbWithApiKey from "../../../services/fetchTmdbWithApiKey.ts";
import {onMounted, ref} from "vue";
import MovieCard from "../../../components/views/MovieCard.vue";
import {SwiperSlide} from "swiper/vue";

const upcomingMovies = ref<{ id: number, title: string, img: string }[]>([]);
const getUpcomingMovies = async () => {
    try {
        const response = await fetchTmdbWithApiKey('https://api.themoviedb.org/3/movie/upcoming?language=fr-FR&page=1');
        const data = await response.json();
        upcomingMovies.value = data.results.slice(0, 7).map((movie: any) => ({
            id: movie.id,
            title: movie.original_title,
            img: `https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`
        })) as { id: number, title: string, img: string }[];
    } catch (e: any) {

    }
}

onMounted(async () => {
    await getUpcomingMovies();
})

</script>

<template>
    <div>
        <h2 class="text-3xl font-semibold mb-10"><span class="uppercase">Top</span> Films</h2>
        <div class="grid grid-cols-4 xl:grid-cols-7 gap-8">
            <SwiperSlide
                v-for="upcoming in upcomingMovies"
                :key="upcoming.id"
                class="group relative items-center justify-center overflow-hidden cursor-pointer">
                <MovieCard :title="upcoming.title"  :image="upcoming.img"/>
            </SwiperSlide>
        </div>

        <div class="flex justify-center">
            <button class="mt-16 rounded-2xl px-8 py-4 border-2 border-orange-500 text-gray-100 hover:bg-orange-600 hover:text-orange-100 duration-300">
                Afficher plus de vidéos
            </button>
        </div>
    </div>
</template>

<style scoped>

</style>
