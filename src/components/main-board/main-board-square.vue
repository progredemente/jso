<template>
  <div class="main-board-square-container">
    <div class="main-board-square" @hover="touch"></div>
  </div>
  <!-- <div class="main-board-square">Hola square</div> -->
</template>

<script setup>
import { computed, ref } from "vue";

const emit = defineEmits(["touched"]);
const props = defineProps({
  size: { type: [Number, String], required: true },
  index: { type: Number, required: true },
  color: { type: String, default: "#99ff55" },
  borderColor: { type: String, default: "#ff5510" },
});

const touched = ref(false);
const size = computed(() => `${props.size}px`);
const color = computed(() => props.color);
const borderColor = computed(() => props.borderColor);

function touch() {
  emit("touched", props.index);
}
</script>

<style scoped>
.main-board-square-container {
  display: grid;
  place-content: center;
  width: v-bind("size");
  height: v-bind("size");
  /* background-color: v-bind("color"); */
  /* border: solid;
  border-color: v-bind("borderColor");
  border-width: 2px; */
  box-sizing: border-box;
  cursor: pointer;
}

.main-board-square {
  background-color: orange;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: solid black;
  opacity: 50%;
}
</style>
