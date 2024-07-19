<script setup lang="ts">

const apiKey = import.meta.env.VITE_VUE_APP_API_KEY;
const baseUrl = import.meta.env.VITE_VUE_APP_BASE_URL;
</script>

<template>
  <div>
      <h1 class="text-3xl font-bold underline bg-red-600">
          Hello world! {{ apiKey }} {{ baseUrl }}
      </h1>
  </div>
</template>

<style scoped>

</style>
