<template>
  <div class="space-y-6">
    <h1 class="p-0 m-0">
      <a href="https://ideclatra.com.br/" target="_blank"> iDeclatra </a>
    </h1>
    <p>
      Projeto construído por mim de ponta a ponta enquanto atuava na empresa
      Matilha Estúdio. Trata-se de um site institucional com blog, no modelo
      headless CMS criado com Prismic e Next.js, hospedado na Vercel.
    </p>
    <div class="flex items-center space-x-4 text-zinc-500">
      <LazyIconPrismicCMS />
      <LazyIconNextJs />
      <LazyIconTailwindCss />
      <LazyIconTypeScript />
      <LazyIconReactJs />
    </div>
    <UCarousel
      v-slot="{ item }"
      :items="ideclatraPictures"
      :ui="{ item: 'basis-full' }"
      class="overflow-hidden rounded-lg"
      arrows
    >
      <img :src="item" />
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
