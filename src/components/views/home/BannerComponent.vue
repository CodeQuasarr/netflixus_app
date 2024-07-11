<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const search = ref('');

const handleSearch = () => {
    if (search.value) {
        router.push({ name: 'search', query: { q: search.value } });
    }
};


</script>

<template>
    <div class="w-full h-[500px] bg-cover bg-[url('assets/images/background/banner-hero.webp')] relative">
        <div class="w-full h-full flex flex-col gap-10 items-center justify-center">
            <h1 class="max-w-xl text-4xl text-center text-gray-100 font-bold">
                Film Streaming Gratuit en Stream Complet
                <span class="text-orange-500">Films</span> et
                <span class="text-orange-500">Séries</span>
            </h1>

            <form class="w-1/2 mx-auto mb-16">
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input
                        v-model="search"
                        @keydown.enter="handleSearch"
                        type="search"
                        id="default-search"
                        name="search"
                        placeholder="Entrez le titre du film ou de la série."
                        class="block w-full p-4 ps-10 text-sm text-gray-50 border border-orange-500 rounded-3xl bg-accent focus:ring-orange-500 focus:border-orange-500"
                        required
                    />
                    <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Search</button>
                </div>
            </form>

        </div>
    </div>
</template>

<style scoped>

</style>
