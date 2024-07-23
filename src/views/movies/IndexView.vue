<script setup lang="ts">
import AllMovieCard from "@/components/movies/AllMovieCard.vue";
import {MoviesService} from "@/services/movies.service";
import type IMovieCategoryType from "@/types/IMovieCategoryType";
import {onMounted, ref} from "vue";

const movieService = new MoviesService();
const categories = movieService.movieCategories;
const moviesByCategory = ref<IMovieCategoryType>({});
const getMovies = async () => moviesByCategory.value = await movieService.movieByAllCategories();

onMounted(async () => await getMovies());
</script>

<template>
    <div class="pb-16">

        <div class="container mx-auto px-4 md:px-0">
            <div v-for="(category, index) in categories" :key="category.name" class="">
                <AllMovieCard :categoryId="category.id" :card-title="category.name" :data="moviesByCategory[category.name]"/>
                <hr v-if="index < categories.length - 1" class="border border-white/10 mt-16">
            </div>
        </div>

    </div>
</template>

<style scoped>

</style>
