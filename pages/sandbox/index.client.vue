<template>
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
      <strong :style="`color${message.color};`">{{ message.pseudo }}</strong> :
      {{ message.content }}
    </div>
  </div>
</template>
<script setup>
import { useWebSocket } from "@vueuse/core";

let status, data, send, open, closed;

const state = reactive({
  messages: [],
  user: {
    pseudo: "",
    color: "",
    isInTheRoom: false,
  },
  currentMessage: "",
});

const randomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const joinRoom = () => {
  const { status: wsStatus, data: wsData, send: wsSend, open: wsOpen, closed: wsClosed } = useWebSocket(
    `ws://${location.host}/api/ws`
  );

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
    color: randomColor(),
  });
};

const sendData = () => {
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