<script lang="ts" setup>
import { Bars3Icon } from '@heroicons/vue/24/solid'

const emit = defineEmits(['update:mobileMenuOpen']);

</script>

<template>
    <nav aria-label="Global" class="flex items-center justify-between p-6 lg:px-8">
        <div class="flex lg:flex-1">
            <RouterLink class="-m-1.5 p-1.5" to="/">
                <span class="sr-only">Netflixus</span>
                <img alt="" class="h-10 w-auto" src="@/assets/images/logo/logo.png"/>
            </RouterLink>
        </div>
        <div class="flex lg:hidden">
            <button class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
                    type="button"
                    @click="emit('update:mobileMenuOpen', true)">
                <span class="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" class="h-6 w-6"/>
            </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
            <slot name="navigation"/>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
            <!--            <slot name="login"/>-->
        </div>
    </nav>
</template>

<style scoped>

</style>
