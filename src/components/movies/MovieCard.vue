<script setup lang="ts">

import {onMounted, ref, watch} from "vue";

const props = defineProps({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

const trimmedTitle = ref<string>('');
const titleRef = ref<HTMLElement | null>(null);

const truncateTitle = (title: string, maxLength: number) => {
    if (title.trim().length <= maxLength) {
        return title;
    }
    return title.slice(0, maxLength) + '...';
};
const updateTrimmedTitle = () => {
    if (titleRef.value) {
        const element = titleRef.value;
        const maxLength = Math.floor(element.clientWidth / 10);
        trimmedTitle.value = truncateTitle(props.title, maxLength);
    }
};

onMounted(() => {
    updateTrimmedTitle();
    window.addEventListener('resize', updateTrimmedTitle);
});

watch(() => props.title, () => {
    updateTrimmedTitle();
});

watch(titleRef, () => {
    updateTrimmedTitle();
});
</script>

<template>
    <div>
        <router-link :to="'/movie/' + props.id" href="">
            <div class="">
                <img
                    :src="props.image"
                    alt="project 1" class="object-cover w-full rounded-xl h-96 md:h-auto md:w-48 opacity-90 transition-all duration-300 hover:opacity-10">
            </div>
            <span ref="titleRef" class="block overflow-hidden whitespace-normal text-ellipsis">{{ trimmedTitle }}</span>
        </router-link>
    </div>
</template>

<style scoped>

</style>
