<script setup lang="ts">
import Favorite from '../../assets/svg/favories.svg';
import {onMounted, ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";
import fetchTmdbWithApiKey from "@/services/fetchTmdbWithApiKey";
import {IMovieDetailsType, IMovieType} from "@/types/movies/IMovieType";
import MovieCard from "@/components/views/MovieCard.vue";

const route = useRoute();
const router = useRouter();
const movie = ref<IMovieDetailsType>({
    genres: "",
    id: "",
    img: "",
    production_companies: "",
    release_date: "",
    synopsis: "",
    title: ""
});
const similarMovies = ref<IMovieType[]>([]);


const getMovieDetails = async (movieId: string) => {
    if (!movieId) {
        await router.push({name: 'Error404'});
        return;
    }

    const detail = await fetchTmdbWithApiKey(`https://api.themoviedb.org/3/movie/${movieId}?language=fr-FR`);
    const detailData = await detail.json();

    if (detailData.success === false) {
        await router.push({name: 'Error404'});
        return;
    }

    movie.value = {
        id: detailData.id,
        title: detailData.original_title ?? detailData.original_name,
        img: `https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${detailData.backdrop_path}`,
        genres: detailData.genres.map((genre: any) => genre.name).join(', '),
        release_date: detailData.release_date,
        synopsis: detailData.overview,
        production_companies: detailData.production_companies.map((company: any) => company.name).join(', ')
    } as IMovieDetailsType;


    const similar = await fetchTmdbWithApiKey(`https://api.themoviedb.org/3/movie/${movieId}/similar?language=fr-FR&page=1`);
    const similarData = await similar.json();
    similarMovies.value = similarData.results.slice(0, 7).map((movie: any) => ({
        id: movie.id,
        title: movie.original_title ?? movie.original_name,
        img: `https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`
    })) as IMovieType[];
}

watch(() => route.params.id, async (newId) => {
    if (newId) {
        await getMovieDetails(newId as string);
    }
});

onMounted(() => {
    getMovieDetails(<string>route.params.id);
})
</script>

<template>
    <div class="">
        <div class="relative h-[650px]">
            <div class="absolute z-[-30] w-full h-full">
                <div class="absolute bg-custom-gradient w-full h-full top-0 right-0"></div>
                <div>
                    <img
                        :src="movie.img"
                        alt="project 1" class="object-cover h-[650px] w-full">
                </div>
            </div>
            <div class="absolute inset-0 grid grid-cols-5 w-full h-full  top-0 right-0">
                <div class="col-span-3 h-full bg-accent flex flex-col gap-6 justify-center px-16 ">
                    <div>
                        <h1 class="text-7xl font-bold uppercase mb-2"> {{ movie.title }}</h1>
                        <p> {{ movie.genres }}</p>
                    </div>
                    <div>
                        <button class="flex items-center hover:bg-blue-700 text-white p-3 font-bold border border-gray-100 rounded-full">
                            <Favorite fill="white" class="h-5 w-5" />
                        </button>
                    </div>
                    <div>
                        <h2 class="text-3xl font-semibold mb-2">Synopsis</h2>
                        <p> {{ movie.synopsis }} </p>
                    </div>
                </div>
                <div class="col-span-2 h-full bg-custom-gradient relative">
                    <!-- Faire une liste : date de sortie etc etc -->
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

        <div class="container mx-auto">
            <div class="grid grid-cols-4 xl:grid-cols-7 gap-8">
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

<style scoped>
</style>
