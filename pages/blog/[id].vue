<template>
  <article v-if="article">
    <img :src="article.img" alt="" />
    <div class="article__top">
      <h1>{{ article.title }}</h1>
      <div class="article__top-info">
        <p>{{ article.author }}</p>
        <p>|</p>
        <p>{{ article.date }}</p>
      </div>
    </div>
    <div class="article__audio" v-if="article.audio">
      <audio :src="article.audio">
        Your browser does not support the
        <code>audio</code> element.
      </audio>
      <p v-if="article.transcript">
        <small
          >Transcription : <br />
          {{ article.transcript }}
        </small>
      </p>
    </div>
    <div class="article__content">
      <div v-for="(content, index) in article.content" :key="index">
        <p class="content" v-if="content.type === 'text'">
          {{ content.content }}
        </p>
        <img
          class="content"
          v-else-if="content.type === 'img'"
          :src="content.src"
          :alt="content.alt"
        />
        <h3 class="content" v-else-if="content.type === 'subtitle'">
          {{ content.content }}
        </h3>
      </div>
    </div>
  </article>
</template>
<script setup>
const route = useRoute();

const id = ref(route.params.id);
const { data: blog } = await useFetch("/api/blog/", {
  transform: (res) => res.data,
});
const article = blog.value.filter((blg) => blg.id == id.value)[0];
console.log(article);
console.log(blog.value);
</script>
<style scoped>
article {
  padding: 150px var(--sides-padding);
  margin: 0 auto;
}

article img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  margin-bottom: 40px;
}

.article__top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.article__top-info {
  display: flex;
  gap: 20px;
}

.article__content {
  display: flex;
  flex-direction: column;
}

.article__content .content {
  margin-bottom: 10px;
}

.article__content .content:first-child {
  margin-top: 10px;
}

.article__content p {
    text-align: justify;
}

.article__content h3 {
    font-weight: 600;
}
</style>
