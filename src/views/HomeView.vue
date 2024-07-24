<script setup lang="ts">

import Banner from "@/components/templates/Banner.vue";
import CTopUpcoming from "@/components/CTopUpcoming.vue";
import AllMovieCard from "@/components/movies/AllMovieCard.vue";
</script>

<template>
  <div class="py-5 mt-3 relative">
      <Banner class="w-full h-[500px] " />

      <div class="container mx-auto px-3 xl:px-0">
          <CTopUpcoming
              class="min-h-[500px]"
          />
          <hr class="border border-white/10 mt-16">
          <AllMovieCard
              cardTitle="Films"
              class="min-h-[600px]"
          />
      </div>
  </div>
</template>
