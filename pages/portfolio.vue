<template>
  <div class="space-y-8">
    <h1>
      <a
        class="hover:underline"
        href="https://ideclatra.com.br/"
        target="_blank"
      >
        iDeclatra
      </a>
    </h1>
    <p>
      Projeto construído por mim de ponta a ponta enquanto atuava na empresa
      Matilha Estúdio. Trata-se de um headless CMS criado com Prismic e Next.js,
      hospedado na Vercel.
    </p>
    <div class="flex items-center space-x-4 text-zinc-500">
      <LazyIconPrismic />
      <LazyIconNextJs />
      <LazyIconTailwind />
      <LazyIconTypeScript />
      <LazyIconReact />
    </div>
    <UCarousel
      v-slot="{ item }"
      :items="ideclatraPictures"
      :ui="{ item: 'basis-full' }"
      class="overflow-hidden"
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
