<script lang="ts" setup>

</script>

<template>
    <Transition>
        <slot name="toAnimate"/>
    </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
