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
        <p
          class="proposal"
          v-for="(prop, index) in proposals"
          :key="index"
          @click="sendMessage(prop.message, 1)"
        >
          {{ prop.content }}
        </p>
        <hr />
        <!-- <article class="gpt">
          <p class=""><small>Assistant</small></p>
          Bonjour, je suis ton assistant personnel. Comment puis-je t'aider ?
        </article> -->
        <article
          v-for="(mess, index) in messages"
          :key="index"
          :class="mess.from == 0 ? 'gpt' : 'user'"
          :ref="
            (el) => {
              if (el) state.messagesEl[index] = el;
            }
          "
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
  <button
    :class="['chatbot__open', { active: active, 'full-screen': fullScreen }]"
    @click="handleChatbotActive()"
  >
    <img src="../assets/img/chatbot-face.svg" alt="" />
    <div>
      <svg
        clip-rule="evenodd"
        fill-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"
        />
      </svg>
    </div>
  </button>
</template>
<script setup>
const proposals = ref([
  {
    content: "Informations sur le média",
    message:
      "J'aimerais que tu me donnes des informations sur le média Hesbia, s'il te plaît !",
  },
  {
    content: "Besoin d'aide ?",
    message: "J'ai besoin d'aide, peux-tu m'aider s'il te plaît ?",
  },
  {
    content: "Nous rejoindre !",
    message: "Comment puis-je rejoindre l'équipe de Hesbia ?",
  },
]);

/**
 * Bool pour toogle le chatbot
 * @type {ref<boolean>}
 */
const active = ref(false);

/**
 * Bool pour toogle le chatbot en plein écran
 * @type {ref<boolean>}
 */
const fullScreen = ref(false);

/**
 * Tableau des messages
 * @type {ref<Array>}
 */
const messages = ref([
  {
    content: "Comment puis-je t'aider ?",
    from: 0,
  },
]);

/**
 * Etat du chatbot
 * @type {ref<object>}
 */
const state = reactive({
  waitingForResponse: false,
  messagesEl: [],
});

/**
 * Message de l'utilisateur (input)
 * @type {ref<string>}
 */
const inputMess = ref("");

const handleChatbotActive = () => {
  active.value = !active.value;

  scrollToBottom('auto');
};

/**
 * Ajoute un message à la liste des messages
 * et envoie le message à l'API si from = 1
 * Require : message non vide et state.waitingForResponse = false
 * @param {string} mess
 * @param {number} from
 */
const sendMessage = (mess, from) => {
  if (!mess) return;
  if (state.waitingForResponse && from === 1) return;
  mess = mess.trim();
  messages.value.push({ content: mess, from: from });

  /**
   * Scroll jusqu'au dernier message
   */
  scrollToBottom("smooth");

  inputMess.value = "";
  console.log(messages.value);

  from === 1
    ? (state.waitingForResponse = true)
    : (state.waitingForResponse = false);
  from === 1 ? sendToGpt(mess) : null;
};

const scrollToBottom = (behavior) => {
  nextTick(() => {
    const lastChild = state.messagesEl[state.messagesEl.length - 1];
    lastChild.scrollIntoView({ behavior: behavior });
  });
};

/**
 * Envoie le message à l'API
 * @param {string} prompt
 */
const sendToGpt = async (prompt) => {
  const res = await $fetch("/api/chatbot/response", {
    method: "POST",
    body: {
      message: prompt,
      history: messages.value,
    },
  });
  sendMessage(res.content, res.from);
  state.waitingForResponse = false;
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
  font-size: 0.85rem;
}

aside.active.full-screen {
  width: 80vw;
  height: 80vh;
  font-size: 1.1rem;
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

.chatbot .proposal {
  padding: 10px;
  margin: 5px;
  background: var(--bg-color-secondary);
  border-radius: 5px;
  cursor: pointer;
}

.chatbot hr {
  width: 80%;
  margin: 10px;
  margin-left: 10%;
  height: 4px;
  border-radius: 10px;
  background: var(--color-orange-dark);
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
  position: fixed;

  z-index: 20;
  background: #d9d9d9;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 3%;
  right: 3%;
  border-radius: 50%;
  width: 50px;
  height: 50px;
}

button.chatbot__open img,
button.chatbot__open div {
  position: absolute;
  width: 30px;
  height: 30px;
  transition: 0.4s ease;
  filter: blur(0px);
  will-change: transform, filter;
}

button.chatbot__open div {
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  width: 100%;
  height: 100%;
  position: relative;
  filter: blur(5px);
}

button.chatbot__open div span {
  position: absolute;
  will-change: transform;
}

button.chatbot__open.active img {
  filter: blur(5px);
  transform: rotate(180deg);
  opacity: 0;
}

button.chatbot__open.active div {
  opacity: 1;
  transform: rotate(90deg);
  filter: blur(0px);
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

article:last-child {
  margin-bottom: 15px;
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
