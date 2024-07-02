<script setup lang="ts">
import {Dialog, DialogPanel} from '@headlessui/vue'
import {Bars3Icon, XMarkIcon} from '@heroicons/vue/24/outline'
import {ref} from "vue";


const navigation = [
    {name: 'Product', href: '#'},
    {name: 'Features', href: '#'},
    {name: 'Marketplace', href: '#'},
    {name: 'Company', href: '#'},
]

const mobileMenuOpen = ref(false)
</script>

<template>
    <div>
        <header class="absolute inset-x-0 top-0 z-50">
            <nav aria-label="Global" class="flex items-center justify-between p-6 lg:px-8">
                <div class="flex lg:flex-1">
                    <a class="-m-1.5 p-1.5" href="#">
                        <span class="sr-only">Your Company</span>
                        <img alt="" class="h-8 w-auto"
                             src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"/>
                    </a>
                </div>
                <div class="flex lg:hidden">
                    <button class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
                            type="button"
                            @click="mobileMenuOpen = true">
                        <span class="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" class="h-6 w-6"/>
                    </button>
                </div>
                <div class="hidden lg:flex lg:gap-x-12">
                    <a v-for="item in navigation" :key="item.name" :href="item.href"
                       class="text-sm font-semibold leading-6 text-gray-200">{{ item.name }}</a>
                </div>
                <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a class="text-sm font-semibold leading-6 text-gray-200" href="#">Log in <span aria-hidden="true">&rarr;</span></a>
                </div>
            </nav>
            <Dialog :open="mobileMenuOpen" class="lg:hidden" @close="mobileMenuOpen = false">
                <div class="fixed inset-0 z-50"/>
                <DialogPanel
                    class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div class="flex items-center justify-between">
                        <a class="-m-1.5 p-1.5" href="#">
                            <span class="sr-only">Your Company</span>
                            <img alt=""
                                 class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"/>
                        </a>
                        <button class="-m-2.5 rounded-md p-2.5 text-gray-700" type="button"
                                @click="mobileMenuOpen = false">
                            <span class="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" class="h-6 w-6"/>
                        </button>
                    </div>
                    <div class="mt-6 flow-root">
                        <div class="-my-6 divide-y divide-gray-500/10">
                            <div class="space-y-2 py-6">
                                <a v-for="item in navigation" :key="item.name" :href="item.href"
                                   class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{
                                        item.name
                                    }}</a>
                            </div>
                            <div class="py-6">
                                <a class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                   href="#">Log
                                    in</a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>

        <div class="relative isolate px-6 pt-14 lg:px-8">
            <RouterView/>
        </div>
    </div>
</template>

<style scoped>

</style>
