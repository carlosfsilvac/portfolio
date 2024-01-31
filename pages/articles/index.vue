<template>
  <div>
    <ContentList v-slot="{ list }" path="/articles">
      <div v-for="article in list" :key="article._path">
        <h2>{{ article.title }}</h2>
        <p>{{ article.description }}</p>
      </div>
    </ContentList>
  </div>
</template>
