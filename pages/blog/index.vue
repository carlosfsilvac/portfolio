<template>
  <div>
    <ContentList v-slot="{ list }" path="/blog">
      <a
        v-for="article in list"
        :key="article._id"
        class="group"
        :href="article._path"
      >
        <div class="h-40 w-full">
          <img
            class="object-cover w-full h-full rounded-lg filter grayscale-[100%] group-hover:grayscale-[0%] transition duration-500"
            :src="article.image"
            :alt="article.title"
          />
        </div>
        <h2 class="group-hover:text-primary transition duration-500">
          {{ article.title }}
        </h2>
        <p class="truncate">{{ article.description }}</p>
        <div class="pt-4 text-zinc-500 dark:text-zinc-200">
          <small>{{ article.author }}, {{ article.date }}</small>
        </div>
      </a>
    </ContentList>
  </div>
</template>
