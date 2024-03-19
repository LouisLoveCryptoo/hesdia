<template>
  <aside :class="{ active: active, 'full-screen': fullScreen }">
    <div class="chatbot">
      <div class="chatbot__top">
        <h3>Assistant</h3>
        <button @click="fullScreen = !fullScreen">
          <svg
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m16.843 13.789c.108.141.157.3.157.456 0 .389-.306.755-.749.755h-8.501c-.445 0-.75-.367-.75-.755 0-.157.05-.316.159-.457 1.203-1.554 3.252-4.199 4.258-5.498.142-.184.36-.29.592-.29.23 0 .449.107.591.291zm-7.564-.289h5.446l-2.718-3.522z"
              fill-rule="nonzero"
            />
          </svg>
        </button>
      </div>
      <div class="chatbot__content">
        <!-- <article class="gpt">
          <p class=""><small>Assistant</small></p>
          Bonjour, je suis ton assistant personnel. Comment puis-je t'aider ?
        </article> -->
        <article
          v-for="(mess, index) in messages"
          :key="index"
          :class="mess.from == 0 ? 'gpt' : 'user'"
        >
          <p class="article__top">
            <small>{{ mess.from == 0 ? "Assistant" : "Moi" }}</small>
          </p>
          <p>{{ mess.content }}</p>
        </article>
        <div class="animation-wrapper" v-if="state.waitingForResponse">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="chatbot__bottom">
        <input
          type="text"
          v-model="inputMess"
          @keyup.enter="sendMessage(inputMess, 1)"
        />
        <button @click="sendMessage(inputMess, 1)">Envoyer</button>
      </div>
    </div>
  </aside>
  <button class="chatbot__open" @click="active = !active"></button>
</template>
<script setup>
/**
 * Bool pour toogle le chatbot
 * @type {boolean}
 */
const active = ref(false);
const fullScreen = ref(false);
const messages = ref([
  {
    content:
      "Bonjour, je suis ton assistant personnel. Comment puis-je t'aider ?",
    from: 0,
  },
]);

const state = reactive({
  waitingForResponse: false,
});

const inputMess = ref("");

const sendMessage = (mess, from) => {
  if (!mess) return;
  mess = mess.trim();
  messages.value.push({ content: mess, from: from });
  inputMess.value = "";
  console.log(messages.value);

  from === 1
    ? (state.waitingForResponse = true)
    : (state.waitingForResponse = false);
  from === 1 ? sendToGpt(mess) : null;
};

const sendToGpt = async (prompt) => {
  const res = await $fetch("/api/chatbot/response", {
    method: "POST",
    body: {
      message: prompt,
      history: messages.value,
    },
  });

  console.log(res);
  sendMessage(res.content, res.from);
};
</script>
<style setup>
aside {
  position: fixed;
  bottom: 5%;
  right: 5%;
  z-index: 10;
  background: var(--color-orange-dark);
  transform: scale(0);
  transform-origin: bottom right;
  will-change: transform;
  font-size: .85rem;
}

aside.active.full-screen {
  width: 80vw;
  height: 80vh;
  font-size: 1.2rem;
}

aside.active {
  width: 30vw;
  height: 50vh;
  transform: scale(1);
}

aside.active,
aside.active.full-screen {
  transition: 0.3s ease;
}

@media screen and (max-width: 800px) {
  aside.active {
    width: 90vw;
    height: 70vh;
  }
  aside.active.full-screen {
    width: 90vw;
    height: 90vh;
  }
}

aside.active.full-screen svg {
  transform: rotate(180deg);
}

.chatbot {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.chatbot__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chatbot__top button {
  width: 30px;
  height: 30px;
}

button.chatbot__open {
  background: var(--color-orange-dark);
  padding: 8px 10px;
  position: absolute;
  bottom: 3%;
  right: 3%;
}

.chatbot__content {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  background: var(--bg-color-main);
  overflow-y: auto;
}

article {
  margin: 5px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  text-align: left;
  background: var(--bg-color-secondary);
  border-radius: 5px;
  width: 70%;
}

article.user {
  align-self: flex-end;
}

.animation-wrapper {
  margin: 5px;
  padding: 10px;
  display: flex;
  text-align: left;
  background: var(--bg-color-secondary);
  border-radius: 5px;
  width: min-content;
}

.animation-wrapper > span {
  background: var(--color-orange-dark);
  height: 0.5em;
  width: 0.5em;
  margin: 0.2em;
  margin-top: 0.3rem;
  transform: translateY(0);
  border-radius: 3em;
  animation: bounce 600ms infinite alternate;
  will-change: transform;
}

.animation-wrapper > span:nth-of-type(2) {
  animation-delay: 250ms;
}

.animation-wrapper > span:nth-of-type(3) {
  animation-delay: 350ms;
}

@keyframes bounce {
  to {
    transform: translateY(-0.2em);
  }
}
</style>
