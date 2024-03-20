<template>
  <canvas-box />
  <main class="sandbox__chat">
    <form v-if="!state.user.isInTheRoom" @submit.prevent="joinRoom()">
      <input v-model="state.user.pseudo" placeholder="Votre Pseudonyme" />
      <button type="submit">Rejoindre</button>
    </form>
    <form v-if="state.user.isInTheRoom" @submit.prevent="sendData()">
      <input v-model="state.currentMessage" placeholder="Votre Message" />
      <button type="submit">Envoyer</button>
    </form>
    <div>
      <div v-for="(message, index) in state.messages" :key="index">
        <strong :style="message.color">{{ message.pseudo }}</strong>
        :
        {{ message.content }}
      </div>
    </div>
  </main>
</template>
<script setup>
import { useWebSocket } from "@vueuse/core";

let status, data, send, open, closed;

const generatePastelColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};

const state = reactive({
  messages: [],
  user: {
    pseudo: "",
    color: `color:${generatePastelColor()};`,
    isInTheRoom: false,
  },
  currentMessage: "",
});

const joinRoom = () => {
  if (!state.user.pseudo) return;
  const {
    status: wsStatus,
    data: wsData,
    send: wsSend,
    open: wsOpen,
    closed: wsClosed,
  } = useWebSocket(`ws://${location.host}/api/ws`);

  status = wsStatus;
  data = wsData;
  send = wsSend;
  open = wsOpen;
  closed = wsClosed;

  watch(data, (newData) => {
    console.log(newData);
    state.messages.push(JSON.parse(newData));
    console.log(JSON.parse(newData));
    console.log(state.messages);
  });

  send({ pseudo: state.user.pseudo });
  state.user.isInTheRoom = true;
  state.messages.push({
    pseudo: "System",
    content: `Welcome ${state.user.pseudo}`,
    color: state.user.color,
  });
};

const sendData = () => {
  if (!state.currentMessage) return;
  const dataToSend = {
    pseudo: state.user.pseudo,
    content: state.currentMessage,
    color: state.user.color,
  };
  state.messages.push(dataToSend);
  send(JSON.stringify(dataToSend));
  state.currentMessage = "";
};
</script>
<style scoped>
.sandbox__chat {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
}

.sandbox__chat form {
  order: 1;
}
</style>
