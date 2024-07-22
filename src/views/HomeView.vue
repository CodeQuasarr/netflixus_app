<script setup>

</script>

<template>
    <div>
        <h1>Home</h1>
        <p>Home page content</p>
        {{ import.meta.env.VITE_TMDB_ACCESS_API_KEY as string }}
    </div>
</template>

<style scoped>

</style>
