<template>
  <canvas
    ref="canvas"
    @mousedown="startPainting"
    @mouseup="finishedPainting"
    @mousemove="draw"
  ></canvas>
  <div class="color__container">
    <span
      v-for="(color, index) in state.colors"
      :key="index"
      @click="changeColor(index)"
      :style="'background-color:' + color"
    >
    </span>
    <button @click="clearCanvas">Clear</button>
    <input
      type="range"
      min="3"
      max="10"
      v-model="state.lineWidth"
      @input="changeWidth()"
    />
  </div>
</template>

<script setup>
import { useWebSocket } from "@vueuse/core";
const canvas = ref(null);
const { status, data, send, open, closed } = useWebSocket(
  `ws://${location.host}/api/ws/canvas`
);

let lastPoint = null;

const state = reactive({
  ctx: null,
  colors: ["#2185C5", "#7ECEFD", "#FFF6E5", "#FF7F66"],
  painting: false,
  lineWidth: 5,
});

const drawFromData = (data) => {
  const [point1, point2] = data.points;

  state.ctx.strokeStyle = point1.color;
  state.ctx.lineWidth = point1.width;
  state.ctx.beginPath();
  state.ctx.moveTo(point1.x, point1.y);
  state.ctx.lineTo(point2.x, point2.y);
  state.ctx.stroke();
};

watch(data, (newData) => {
  console.log(newData); // Ajoutez cette ligne
  const parsedData = JSON.parse(newData);
  drawFromData(parsedData);
});

watch(data, (newData) => {
  console.log(newData); // Ajoutez cette ligne
  const parsedData = JSON.parse(newData);
  drawFromData(parsedData);
});
const changeWidth = () => {
  state.ctx.lineWidth = state.lineWidth;
};
const startPainting = (e) => {
  state.painting = true;
  currentId++;
  draw(e);
};

const changeColor = (i) => {
  state.ctx.strokeStyle = state.colors[i];
};

const clearCanvas = () => {
  state.ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);
};

const finishedPainting = () => {
  state.painting = false;
  state.ctx.beginPath();
  lastPoint = null;
};
let currentId = 0;
const draw = (e) => {
  if (!state.painting) return;
  state.ctx.lineWidth = state.lineWidth;
  state.ctx.lineCap = "round";

  const currentPoint = {
    x: e.offsetX - canvas.value.offsetLeft,
    y: e.offsetY - canvas.value.offsetTop,
    color: state.ctx.strokeStyle,
    width: state.ctx.lineWidth,
  };

  if (lastPoint) {
    // Dessinez une ligne entre le dernier point et le point actuel
    state.ctx.beginPath();
    state.ctx.moveTo(lastPoint.x, lastPoint.y);
    state.ctx.lineTo(currentPoint.x, currentPoint.y);
    state.ctx.stroke();

    send(
      JSON.stringify({
        id: currentId,
        points: [lastPoint, currentPoint],
      })
    );
  }

  lastPoint = currentPoint;
};

onMounted(() => {
  state.ctx = canvas.value.getContext("2d");

  state.ctx.strokeStyle = state.colors[0];

  canvas.value.height = window.innerHeight;
  canvas.value.width = window.innerWidth;

  window.addEventListener("resize", () => {
    canvas.value.height = window.innerHeight;
    canvas.value.width = window.innerWidth;
  });

  canvas.value.addEventListener("mouseup", finishedPainting);
  canvas.value.addEventListener("mousemove", draw);
});
</script>

<style scoped>
canvas {
  position: fixed;
  top: 0;
  left: 0;
  background-color: #ecf0f1;
  z-index: 0;
}

.color__container {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  padding: 10px;
}

.color__container span {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 0 10px;
  cursor: pointer;
}
</style>
