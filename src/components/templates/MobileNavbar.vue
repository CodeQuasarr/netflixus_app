<script setup lang="ts">

//@ts-ignore
import {Dialog, DialogPanel} from '@headlessui/vue'
import {XMarkIcon} from "@heroicons/vue/24/solid";

const props = defineProps({
    mobileMenuOpen: Boolean
});

const emit = defineEmits(['update:mobileMenuOpen']);
</script>

<template>
    <Dialog :open="props.mobileMenuOpen" class="lg:hidden" @close="emit('update:mobileMenuOpen', false)">
        <div class="fixed inset-0 z-50"/>
        <DialogPanel
            class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div class="flex items-center justify-between">
                <RouterLink class="-m-1.5 p-1.5" to="/">
                    <span class="sr-only">Netflixus</span>
                    <img alt="" class="h-10 w-auto" src="@/assets/images/logo/logo.png"/>
                </RouterLink>
                <button class="-m-2.5 rounded-md p-2.5 text-gray-200" type="button" @click="emit('update:mobileMenuOpen', false)">
                    <span class="sr-only">Fermer</span>
                    <XMarkIcon aria-hidden="true" class="h-6 w-6"/>
                </button>
            </div>
            <div class="mt-6 flow-root">
                <div class="-my-6 divide-y divide-gray-500/10">
                    <div class="space-y-2 py-6 ">
                        <slot name="navigation" />
                    </div>
                    <!--                <div class="py-6">-->
                    <!--                    <slot name="login" />-->
                    <!--                </div>-->
                </div>
            </div>
        </DialogPanel>
    </Dialog>
</template>

<style scoped>

</style>
