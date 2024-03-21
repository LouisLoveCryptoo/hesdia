<template>
  <main>
    <h1>Les articles :</h1>
    <div class="article__container">
      <article v-for="(art, index) in blog" :key="index">
        <img :src="'http://localhost:3000' + art.img" alt="" />
        <div class="article__top">
          <h4>
            {{ art.title }}
          </h4>
          <p>{{ art.date }}</p>
          <button-phone class="blog-link" :path="'/blog/' + art.id">Voir</button-phone>
        </div>
      </article>
    </div>
  </main>
</template>
<script setup>
const { data: blog } = await useFetch("/api/blog/", {
  transform: (res) => res.data,
});
</script>
<style scoped>
main {
  padding: 0 var(--sides-padding);
  padding-top: 150px;
}

h1 {
  font-size: 2rem;
  text-decoration: underline var(--color-orange-dark);
}

.article__container {
  padding-top: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

article {
  width: clamp(300px, 40vw, 500px);
  height: auto;
  display:flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 30px;
  border: 2px solid var(--color-orange-dark);
}

article .article__top {
  padding: 20px;
}

.article__top {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

article img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.blog-link {
  margin-top: 10px
}
</style>
