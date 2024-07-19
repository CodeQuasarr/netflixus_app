<script lang="ts" setup>
import 'swiper/css';
import {onMounted, ref} from "vue";
import {movieCategories} from "@/helpers/StaticMovieCategory";
import {IMovieCategoryType} from "@/types/movies/IMovieType";
import CLoading from "@/components/CLoading.vue";
import {fetchMoviesByAllCategories} from "@/services/fetchMovies";
import CTopMovies from "@/components/views/home/CTopMovies.vue";

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

const categories = movieCategories
const moviesByCategory = ref<IMovieCategoryType>({});
const getMovies = async () => moviesByCategory.value = await fetchMoviesByAllCategories();

onMounted(() => getMovies());

</script>

<template>
    <div class="pb-16">
        <CLoading
            v-if="Object.keys(moviesByCategory).length === 0"
        />

        <div v-else class="container mx-auto px-4 md:px-0">
            <div v-for="(category, index) in categories" :key="category.name" class="">
                <CTopMovies :card-title="category.name" :data="moviesByCategory[category.name]"/>
                <hr v-if="index < categories.length - 1" class="border border-white/10 mt-16">
            </div>
        </div>

    </div>
</template>

<style scoped>

</style>
