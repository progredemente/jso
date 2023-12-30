<template>
  <div class="main-board">
    <img
      class="art-piece"
      src="https://omnesmag.com/wp-content/uploads/2016/05/vangogh.jpg"
      alt=""
    />
    <div class="main-board-content">
      <main-board-square
        v-for="(square, index) in squareCount"
        :key="index"
        :index="index"
        :color="squareColor"
        :size="squareSize"
      />
    </div>
  </div>
</template>

<script setup>
import MainBoardSquare from "./main-board-square.vue";
import { useRandomColor } from "../../composables";
import { ref, computed } from "vue";
// import { configStore } from "../../stores/configStore.js";

// const config = configStore();

const props = defineProps({
  cols: { type: [Number, String], default: 30 },
  rows: { type: [Number, String], default: 18 },
});

const squareSize = computed(() => 30);
const squareColor = useRandomColor();
const completed = ref(false);

const cols = computed(() => Number(props.cols));
const rows = computed(() => Number(props.rows));
const boardWidth = computed(() => `${squareSize.value * cols.value}px`);
const boardHeight = computed(() => `${squareSize.value * rows.value}px`);
const squareCount = computed(() => cols.value * rows.value);

console.log("BOARD", squareSize.value);

const gridTemplateColumns = computed(() => `repeat(${cols.value}, 1fr)`);
const gridTemplateRows = computed(() => `repeat(${rows.value}, 1fr)`);
</script>

<style scoped>
.main-board {
  position: relative;
}
.art-piece {
  position: absolute;
  /* z-index: 0; */
}
.main-board-content {
  position: absolute;
  display: grid;
  width: v-bind("boardWidth");
  grid-template-columns: v-bind("gridTemplateColumns");
  grid-template-rows: v-bind("gridTemplateRows");
  /* z-index: 50; */
}
</style>
