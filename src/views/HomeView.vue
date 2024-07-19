<script lang="ts" setup>
    import BannerComponent from "../components/views/home/BannerComponent.vue";
    import CTopUpcoming from "../components/views/home/CTopUpcoming.vue";
    import CTopMovies from "../components/views/home/CTopMovies.vue";
    import CLoading from "@/components/CLoading.vue";
    import {ref} from "vue";

    const loading = ref<boolean>(true);
</script>

<template>
    <div class="py-5 relative">
        <CLoading
            v-if="loading"
        />
        <div>
            <BannerComponent  />
            <div :class="[ loading? 'transition-opacity duration-1000 opacity-100': '', 'px-3 container mx-auto my-10']">

                <CTopUpcoming
                    @loading="loading = $event"
                    class="min-h-[700px]"
                />
                <CTopMovies
                    movieUrl="/movies"
                    cardTitle="Films"
                    url-path="https://api.themoviedb.org/3/trending/movie/day?language=fr-FR"
                    class="min-h-[700px]"
                />
                <CTopMovies
                    movieUrl="/series"
                    cardTitle="Series"
                    url-path="https://api.themoviedb.org/3/tv/top_rated?language=fr-FR&page=1"
                    class="min-h-[700px]"
                />

            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
