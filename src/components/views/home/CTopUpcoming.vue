<script setup lang="ts">
import {onMounted, ref} from "vue";
import MovieCard from "../../../components/views/MovieCard.vue";
import {SwiperSlide} from "swiper/vue"
import {IMovieType} from "@/types/movies/IMovieType";
import {fetchUpcomingMovies} from "@/services/fetchBannerMovies";

const upcomingMovies = ref<IMovieType[]>([]);
const loading = ref<boolean>(true);
const emit = defineEmits(['loading']);

const getUpcomingMovies = async () => {
    try {
        loading.value = true;
        upcomingMovies.value = await fetchUpcomingMovies();
    } catch (e: any) {
        console.error(e);
    } finally {
        emit('loading', false);
    }
}

onMounted(async () => {
    await getUpcomingMovies();
})

</script>

<template>
    <div class="flex flex-col justify-center">
        <h2 class="text-3xl font-semibold mb-10"><span class="uppercase">Top</span> Films</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-7 gap-8">
            <SwiperSlide
                v-for="upcoming in upcomingMovies"
                :key="upcoming.id"
                class="group relative items-center justify-center overflow-hidden cursor-pointer">
                <MovieCard :id="upcoming.id" :title="upcoming.title"  :image="upcoming.img"/>
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
