<template>
    <div ref="bar" class="app">
    </div>
</template>

<script setup>
import { appsBarForVue } from 'components/appsBarForVue';
import { onMounted, ref, createApp } from 'vue';
import Main from './Main.vue';

const bar = ref();

onMounted(() => {
    appsBarForVue(bar.value, 'jso', (element) => {
        createApp(Main).mount(element);
    });
})
</script>

<style>
.app {
    height: 100%;
}
</style>