<script lang="ts" setup>
import {onMounted} from 'vue'
import {initFlowbite} from 'flowbite'


// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>


<template>
    <div class="h-screen text-white bg-black">
        <RouterView />
    </div>
</template>

<style scoped>

</style>
