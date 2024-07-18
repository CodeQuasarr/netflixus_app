<script setup lang="ts">
import {ref} from "vue";
import Navbar from "../components/templates/Navbar.vue";
import MobileMenu from "../components/templates/MobileMenu.vue";
import Logo from '../../assets/svg/logo/logo.svg';

const navigation = [
    {name: 'Accueil', href: '/'},
    {name: 'Films', href: '/movies'},
    {name: 'Series', href: '/series'},
]

const mobileMenuOpen = ref(false)
</script>

<template>
    <div>
        <header class="absolute inset-x-0 top-0 z-50">
            <Navbar :mobileMenuOpen="mobileMenuOpen" @update:mobileMenuOpen="mobileMenuOpen = $event">
                <template #navigation>
                    <router-link
                        v-for="item in navigation" :key="item.name"
                        :to="item.href" class="text-sm font-semibold leading-6 text-gray-200"
                    >
                        {{ item.name }}
                    </router-link>
                </template>
                <template #login>
                    <router-link class="text-sm font-semibold leading-6 text-gray-200" to="#">Log in <span aria-hidden="true">&rarr;</span></router-link>
                </template>
            </Navbar>

            <MobileMenu :mobileMenuOpen="mobileMenuOpen" @update:mobileMenuOpen="mobileMenuOpen = $event">
                <template #navigation>
                    <a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-900">
                        {{ item.name }}
                    </a>
                </template>
                <template #login>
                    <a class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-900" href="#">
                        Log in
                    </a>
                </template>
            </MobileMenu>

        </header>

        <div class="relative isolate pt-14">
            <RouterView/>
        </div>
    </div>
</template>

<style scoped>

</style>
