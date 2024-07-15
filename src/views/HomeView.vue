<script lang="ts" setup>
    import BannerComponent from "../components/views/home/BannerComponent.vue";
    import CTopUpcoming from "../components/views/home/CTopUpcoming.vue";
    import CTopMovies from "../components/views/home/CTopMovies.vue";
</script>

<template>
    <div class="py-5">
        <BannerComponent />
        <div class="px-3 container mx-auto my-10">
            <CTopUpcoming class="min-h-[600px]" />
            <CTopMovies cardTitle="Films" url-path="https://api.themoviedb.org/3/trending/movie/day?language=fr-FR" class="min-h-[700px]" />
            <CTopMovies cardTitle="Series" url-path="https://api.themoviedb.org/3/tv/top_rated?language=fr-FR&page=1" class="min-h-[700px]" />

        </div>
    </div>
</template>

<style scoped>

</style>
