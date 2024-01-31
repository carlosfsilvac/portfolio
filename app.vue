<template>
  <div class="container mx-auto max-w-2xl px-6 md:px-0">
    <nav
      class="flex flex-col md:space-y-0 space-y-4 md:flex-row md:justify-between border-b-zinc-150 dark:border-b-zinc-800 border-b py-6"
    >
      <router-link
        class="font-bold text-3xl md:text-xl md:text-left text-center text-gradient hover:opacity-90"
        to="/"
        >Carlos Silva</router-link
      >
      <div
        class="space-x-4 text-zinc-600 flex md:justify-end items-center justify-center"
      >
        <router-link
          exact-active-class="active-route"
          class="hover:border-b-2 dark:hover:border-zinc-700 dark:text-zinc-200"
          to="/"
          >Sobre mim</router-link
        >
        <router-link
          exact-active-class="active-route"
          class="hover:border-b-2 dark:hover:border-zinc-700 dark:text-zinc-200"
          to="/articles"
          >Artigos</router-link
        >
        <router-link
          exact-active-class="active-route"
          class="hover:border-b-2 dark:hover:border-zinc-700 dark:text-zinc-200"
          to="/portfolio"
          >Portfólio</router-link
        >
        <router-link
          exact-active-class="active-route"
          class="hover:border-b-2 dark:hover:border-zinc-700 dark:text-zinc-200"
          to="/contact"
          >Contato</router-link
        >
        <ClientOnly>
          <UButton
            :icon="
              isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'
            "
            variant="ghost"
            aria-label="Theme"
            @click="isDark = !isDark"
          />
          <template #fallback>
            <div class="w-8 h-8" />
          </template>
        </ClientOnly>
      </div>
    </nav>
    <main class="pt-8 pb-16">
      <router-view></router-view>
    </main>
  </div>
  <ScrollToTop />
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});
</script>

<style>
body {
  background: #f7f7f7;
  font-family: Georgia, Palatino, "Palatino Linotype", Times, " Times New Roman",
    serif;
}

.dark body {
  background: #171717;
}

h1 {
  font-size: 32px;
  color: #484848;
  line-height: 48px;
  font-style: italic;
}

.dark h1 {
  color: #d4d4d8;
}

p {
  font-size: 18px;
  color: #484848;
  line-height: 32px;
}

.dark p {
  color: #d4d4d8;
}

.active-route {
  border-bottom: 2px solid #35eb9a;
}

.text-gradient {
  background: linear-gradient(to right, #35eb9a, #4fb2bc);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
