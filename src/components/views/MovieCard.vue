<script setup lang="ts">

defineProps<{
    image: string,
    title: string,
}>();
</script>

<template>
    <div>
        <div class="">
            <img
                :src="image"
                alt="project 1" class="object-cover w-full rounded-xl h-96 md:h-auto md:w-48">
        </div>
        <span>{{ title }}</span>
    </div>
</template>

<style scoped>

</style>
