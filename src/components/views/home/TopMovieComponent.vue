<script setup lang="ts">
import {SwiperSlide} from "swiper/vue";

</script>

<template>
    <div>
        <h2 class="text-3xl font-semibold"><span class="uppercase">Top</span> Films</h2>

        <SwiperSlide
            v-for="movie in moviesByCategory[category.name]"
            :key="movie.id"
            class="group relative items-center justify-center overflow-hidden cursor-pointer">
            <div class="">
                <img
                    :src="movie.img"
                    alt="project 1" class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg">
            </div>
        </SwiperSlide>
    </div>
</template>

<style scoped>

</style>
