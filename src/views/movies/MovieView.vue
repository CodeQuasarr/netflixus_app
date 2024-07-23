<script setup lang="ts">

import {MoviesService} from "@/services/movies.service";
import {useRoute, useRouter} from "vue-router";
import {onMounted, ref, watch} from "vue";
import type IMovieType from "@/types/IMovieType";
import MovieCard from "@/components/movies/MovieCard.vue";

const movieService = new MoviesService();
const loading = ref<boolean>(true);
const route = useRoute();
const router = useRouter();
const page = ref<number>(parseInt(route.query.page as string) || 1);
const genre = ref<number | null>(parseInt(route.query.genre as string) || null);
const totalPages = ref<number>(10);
const movies = ref<IMovieType[]>([]);

/**
 * Get movies from the API
 */
const getMovies = async () => {
    try {
        loading.value = true;
        movies.value = await movieService.movies(page.value, genre.value);
    } catch (e: any) {
        console.error(e);
    } finally {
        loading.value = false;
    }
}

/**
 * Go to a specific page
 * @param newPage
 */
const goToPage = async (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages.value) {
        page.value = newPage;
        await getMovies();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        await router.push({query: {...route.query, page: newPage.toString()}});
    }
}

onMounted(async () => {
    page.value = page.value > 10 ? 10 : page.value;
    if (route.query.genre) {
        genre.value = parseInt(route.query.genre as string);
    }
    await getMovies();
})

watch(() => route.query, async (newQuery) => {
    page.value = parseInt(newQuery.page as string) || 1;
    genre.value = parseInt(newQuery.genre as string) || null;
    await getMovies();
});

</script>

<template>
    <div class=" px-4 md:px-0">

        <!-- list of categories -->
        <div class="flex flex-wrap justify-center gap-4 mt-10">
            <button
                v-for="category in movieService.movieCategories"
                :key="category.id"
                @click="router.push({query: {...route.query, genre: category.id.toString()}})"
                :class="['px-3 py-2 rounded-2xl border-2 border-orange-500 text-gray-100 hover:bg-orange-500 hover:text-white duration-300', genre === category.id ? 'bg-orange-500 text-white': 'text-orange-500']"
            >
                {{ category.name }}
            </button>
        </div>
        <div class="container mx-auto flex flex-col justify-center">
            <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-7 gap-8 mt-16">
                <div
                    v-for="movie in movies"
                    :key="movie.id"
                    class="group relative items-center justify-center overflow-hidden cursor-pointer">
                    <MovieCard :id="movie.id" :title="movie.title"  :image="movie.img"/>
                </div>
            </div>

            <div class="w-full flex flex-wrap gap-3 justify-center mt-8 mb-28">
                <button
                    v-for="p in totalPages"
                    :key="p"
                    @click="goToPage(p)"
                    :disabled="loading"
                    :class="['rounded-2xl px-3 py-2 border-2 border-orange-500 text-gray-100 hover:bg-orange-600 duration-300', p === page ? 'bg-orange-500 text-white': 'text-orange-500']"
                >
                    {{ p }}
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
