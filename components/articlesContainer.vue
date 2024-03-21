<template>
  <div class="articlesContainer">
    <div class="title">
      <h2>On a beaucoup de chose à dire</h2>
      <p>Articles tout fraîchement sortis</p>
    </div>

    <div class="articles">
      <ArticlePhoto />
      <ArticleText />
      <ArticlePhotoLeft />
    </div>

    <div class="buttonDeMort">
      <button-phone path="/blog" :phone="false" :dark="true">
        Voir plus
      </button-phone>
    </div>
  </div>
</template>

<style scoped>
.articlesContainer {
  height: 90vh;
  padding: 6rem var(--sides-padding);
  background-color: var(--color-orange-dark);
}

h2 {
  color: var(--bg-color-secondary);
}

p {
  margin-top: 1rem;
  color: var(--bg-color-secondary);
}

.articles {
  display: flex;
  flex-direction: row;
  gap: 50px;
  margin-top: 2rem;
}

.articles p {
  font-size: var(--fs-ptitext);
  color: var(--color-text);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.articles h3 {
  font-weight: 700;
}

.buttonDeMort {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  margin-top: 1rem;
}

@media screen and (max-width: 1200px) {
  .articlesContainer {
    height: auto;
  }
  .articles {
    flex-direction: column;
  }
}
@media screen and (max-width: 800px) {
  .articlesContainer {
    height: auto;
  }
  .articles {
    flex-direction: column;
  }
}
</style>
