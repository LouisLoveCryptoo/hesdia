<template>
  <aside :class="{ active: active, 'full-screen': fullScreen }">
    <div class="chatbot">
      <div class="chatbot__top">
        <div>
          <svg
            class="logo"
            width="41"
            height="41"
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20.5" cy="20.5" r="20.5" fill="#FFA750" />
            <path
              d="M31.027 12.8289V31.0046C31.027 31.5172 30.3971 31.774 30.0287 31.4114L25.5213 26.9765C25.3019 26.7607 25.0044 26.6394 24.6942 26.6394H12.3123C11.0203 26.6394 9.97299 25.6089 9.97299 24.3377V12.8289C9.97299 11.5576 11.0203 10.5271 12.3123 10.5271H28.6877C29.9797 10.5271 31.027 11.5576 31.027 12.8289Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.1757 19.3918C18.0616 19.7367 19.2255 19.9459 20.5 19.9459C21.7746 19.9459 22.9384 19.7367 23.8243 19.3918"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>
            <span><strong>Salut, je suis ChatBot! </strong></span>
            <span>Pose moi une question, je serai là pour y répondre</span>
          </p>
        </div>
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
        <!-- <p
          class="proposal"
          v-for="(prop, index) in proposals"
          :key="index"
          @click="sendMessage(prop.message, 1)"
        >
          {{ prop.content }}
        </p>
        <hr /> -->
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
          <svg
            v-if="mess.from === 0"
            class="article__top"
            width="41"
            height="41"
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20.5" cy="20.5" r="20.5" fill="#FFA750" />
            <path
              d="M31.027 12.8289V31.0046C31.027 31.5172 30.3971 31.774 30.0287 31.4114L25.5213 26.9765C25.3019 26.7607 25.0044 26.6394 24.6942 26.6394H12.3123C11.0203 26.6394 9.97299 25.6089 9.97299 24.3377V12.8289C9.97299 11.5576 11.0203 10.5271 12.3123 10.5271H28.6877C29.9797 10.5271 31.027 11.5576 31.027 12.8289Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.1757 19.3918C18.0616 19.7367 19.2255 19.9459 20.5 19.9459C21.7746 19.9459 22.9384 19.7367 23.8243 19.3918"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

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
          placeholder="Pose ta question"
        />
        <button @click="sendMessage(inputMess, 1)">
          <svg
            width="26"
            height="19"
            viewBox="0 0 26 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.2091 0.0959075L14.0929 18.8423L8.44166 10.1077L17.7217 4.50272L6.25024 8.50525L0.0479935 5.05657L25.2091 0.0959075ZM7.15476 11.6435L5.29246 18.3991L9.41978 15.144L7.15476 11.6435Z"
              fill="#949595"
            />
          </svg>
        </button>
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
<style scoped>
aside {
  border: 2px solid var(--chatbot-color-grey);
  overflow: hidden;
  position: fixed;
  bottom: calc(var(--sides-padding) + 60px);
  right: var(--sides-padding);
  z-index: 10;
  transform: scale(0);
  background-color: var(--chatbot-color-grey);
  transform-origin: bottom right;
  will-change: transform;
  font-size: var(--chatbot-fs);
  font-weight: 500;

  border-radius: 1.4rem;
}

aside * {
  color: var(--chatbot-color-text);
}

aside.active.full-screen {
  width: 80vw;
  height: 80vh;
  font-size: 1.1rem;
}

aside.active {
  min-width: 300px;
  width: 25vw;
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

aside.active.full-screen svg:not(.article__top):not(.logo) {
  transform: rotate(180deg);
}

.chatbot {
  border-radius: 1rem;
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
  padding: 20px var(--chatbot-padding-sides);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--chatbot-color-grey);
}

.chatbot__top div {
  display: flex;
  align-items: center;
  gap: 15px;
  width: 60%;
}

.chatbot__top div p {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.chatbot__top div svg {
  min-width: 70px;
  min-height: 70px;
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
  bottom: var(--sides-padding);
  right: var(--sides-padding);
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
  background: var(--chatbot-color-white);
  overflow-y: auto;
  overflow-x: hidden;
}

article {
  padding: 0 calc(var(--chatbot-padding-sides) / 2.5);
  display: flex;
  gap: 10px;
  align-items: flex-end;
  position: relative;
}
article svg.article__top {
  transform: translateY(-2px);
}

article.user p::after,
article.gpt p::after {
  content: "";
  position: absolute;

  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-radius: 20px;
}

article.gpt p::after {
  border-top: 20px solid var(--chatbot-color-blue);
  transform: rotate(47deg);
  bottom: 0px;
  left: 63px;
}

article.user p::after {
  border-top: 20px solid var(--chatbot-color-grey);
  transform: rotate(-47deg);
  bottom: 0px;
  right: 10px;
}

article p {
  margin: 7px;
  padding: 7px;

  display: flex;
  flex-direction: column;
  text-align: left;
  background: var(--chatbot-color-blue);
  border-radius: 5px;
}

article.gpt p {
  max-width: 70%;
}

article.user {
  max-width: 70%;
  align-self: flex-end;
}

article:last-child {
  margin-bottom: 15px;
}
article:first-child {
  margin-top: 15px;
}

article.user p {
  background: var(--chatbot-color-grey);
}

.chatbot__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px var(--chatbot-padding-sides);
  background: var(--chatbot-color-grey);
}

.chatbot__bottom svg{
  transform: translateY(2px);
}

input::placeholder {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
}

input:focus {
  outline: none;
  border: none;
}

.chatbot__bottom input {
  width: 80%;
  border-radius: 5px;
  border: none;
  background-color: transparent;
}

.animation-wrapper {
  margin: 5px;
  padding: 10px;
  display: flex;
  text-align: left;
  background: var(--chatbot-color-blue);
  border-radius: 5px;
  width: min-content;
}

.animation-wrapper > span {
  background: var(--chatbot-color-text);
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

  scrollToBottom("auto");
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
