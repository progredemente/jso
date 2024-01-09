<template>
    <div ref="bar" class="app">
        hello
    </div>
</template>

<script setup lang="ts">
import { appsBarForVue } from 'components/appsBarForVue';
import { onMounted, ref, createApp } from 'vue';
import Main from './Main.vue';

const bar = ref();

onMounted(() => {
    appsBarForVue(bar.value, 'jso', (element: HTMLElement) => {
        createApp(Main).mount(element);
    });
})
</script>

<style>
.app {
    height: 100%;
}
</style>