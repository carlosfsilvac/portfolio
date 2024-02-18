<template>
  <div class="space-y-6">
    <h1 class="p-0 m-0">
      <a
        href="https://ideclatra.com.br/"
        class="hover:border-b-2 hover:border-b-primary"
        target="_blank"
      >
        iDeclatra
      </a>
    </h1>
    <p>
      Project built by me from start to finish while working at Matilha Estúdio.
      It is an institutional website with a blog, using the headless CMS model
      created with Prismic and Nuxt.js, hosted on Vercel.
    </p>
    <div class="flex items-center space-x-4 text-zinc-500">
      <UIcon name="i-mdi-vuejs" />
      <UIcon name="i-mdi-nuxt" />
    </div>
    <UCarousel
      v-slot="{ item }"
      :items="ideclatraPictures"
      :ui="{ item: 'basis-full' }"
      class="overflow-hidden rounded-lg shadow-xl"
      arrows
      indicators
    >
      <img :src="item" alt="projeto ideclatra" />
    </UCarousel>
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    return {
      ideclatraPictures: [
        "/img/ideclatra-1.png",
        "/img/ideclatra-2.png",
        "/img/ideclatra-3.png",
      ],
    };
  },
};
</script>
