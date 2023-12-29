<template>
  <div>
    <div class="main-board-content">
      <main-board-square
        v-for="(square, index) in squareCount"
        :key="index"
        :index="index"
        :size="squareSize"
      />
    </div>
  </div>
</template>

<script setup>
import MainBoardSquare from "./main-board-square.vue";
import { ref, computed } from "vue";

const props = defineProps({
  cols: { type: [Number, String], default: 10 },
  rows: { type: [Number, String], default: 10 },
});

const squareSize = computed(() => 60);
const cols = computed(() => Number(props.cols));
const rows = computed(() => Number(props.rows));
const boardWidth = computed(() => `${squareSize.value * cols.value}px`);
const boardHeight = computed(() => `${squareSize.value * rows.value}px`);
const squareCount = computed(() => cols.value * rows.value);

console.log("BOARD", squareSize.value);

const gridTemplateColumns = computed(() => `repeat(${cols.value}, 1fr)`);
const gridTemplateRows = computed(() => `repeat(${rows.value}, 1fr)`);

const completed = ref(false);
</script>

<style scoped>
.main-board-content {
  display: grid;
  width: v-bind("boardWidth");
  grid-template-columns: v-bind("gridTemplateColumns");
  grid-template-rows: v-bind("gridTemplateRows");
}
</style>
