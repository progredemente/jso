<template>
  <div class="main-board">
    <h1 v-if="!complete">{{ progress }}%</h1>
    <h1 v-else>¡Complete!</h1>
    <h2>{{ squaresTouched }}: {{ squareCount }}</h2>
    <img class="art-piece" :src="src" alt="" />
    <div class="main-board-content">
      <main-board-square
        v-for="(square, index) in squareCount"
        :key="index"
        :index="index"
        :color="squareColor"
        :size="squareSize"
        :block="complete"
        @touched="squaresTouched++"
      />
    </div>
  </div>
</template>

<script setup>
import MainBoardSquare from "./main-board-square.vue";
import { useRandomColor } from "../../composables";
import { ref, computed, watch } from "vue";
// import { configStore } from "../../stores/configStore.js";

// const config = configStore();
const emit = defineEmits(["board-completed"]);

const props = defineProps({
  cols: { type: [Number, String], default: 30 },
  rows: { type: [Number, String], default: 18 },
  src: { type: String },
  victory: { type: Number, default: 15 },
});

const squareColor = useRandomColor();
const squaresTouched = ref(0);
const completed = ref(false);

const squareSize = computed(() => 30);
const cols = computed(() => Number(props.cols));
const rows = computed(() => Number(props.rows));
const boardWidth = computed(() => `${squareSize.value * cols.value}px`);
const boardHeight = computed(() => `${squareSize.value * rows.value}px`);
const squareCount = computed(() => cols.value * rows.value);
const progress = computed(() => {
  const prog = (squaresTouched.value / squareCount.value) * 100;
  return prog.toFixed(1);
});
const complete = computed(() => progress.value >= props.victory);

console.log("BOARD", squareSize.value);

const gridTemplateColumns = computed(() => `repeat(${cols.value}, 1fr)`);
const gridTemplateRows = computed(() => `repeat(${rows.value}, 1fr)`);

watch(squaresTouched, () => {
  if (complete.value) {
    emit("complete");
  }
});
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
