<template>
  <div>
    <div class="container mx-auto max-w-2xl px-6 md:px-0">
      <header>
        <nav
          class="flex flex-col md:space-y-0 space-y-4 md:flex-row md:justify-between border-b-zinc-150 dark:border-b-zinc-800 border-b py-6"
        >
          <router-link
            class="font-black text-4xl italic md:text-xl md:text-left text-center text-gradient hover:opacity-90"
            to="/"
            >Carlos Silva</router-link
          >
          <div
            class="space-x-4 text-zinc-600 flex md:justify-end items-center justify-center"
          >
            <HeaderLink title="About" url="/" />
            <HeaderLink title="Blog" url="/blog" />
            <HeaderLink title="Projects" url="/projects" />
            <HeaderLink title="Contact" url="/contact" />
            <ClientOnly>
              <UButton
                :icon="
                  isDark
                    ? 'i-heroicons-moon-20-solid'
                    : 'i-heroicons-sun-20-solid'
                "
                variant="ghost"
                aria-label="Theme"
                @click="isDark = !isDark"
              />
              <template #fallback>
                <div class="w-8 h-8"></div>
              </template>
            </ClientOnly>
          </div>
        </nav>
      </header>
      <main class="pt-8 pb-16">
        <router-view></router-view>
      </main>
    </div>
    <ScrollToTop />
  </div>
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
  font-family: "Poppins" sans-serif;
}

.dark body {
  background: #171717;
}

.article-publish-date-text {
  font-size: 14px;
  color: #484848;
  font-style: italic;
  padding: 0;
  margin: 0;
}

.dark .article-publish-date-text {
  color: #d4d4d8;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-bottom: 8px;
  margin-top: 24px;
  font-style: italic;
}

h1 {
  font-size: 32px;
  line-height: 48px;
}

h2 {
  font-size: 24px;
  line-height: 40px;
}

h3 {
  font-size: 20px;
  line-height: 36px;
}

ul {
  list-style: disc;
  list-style-type: circle;
  padding-left: 1rem;
}

ul li {
  padding: 0.75rem 0;
  font-size: 18px;
  color: #484848;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #484848;
  font-style: italic;
}

.dark h1,
.dark h2,
.dark h3,
.dark h4,
.dark h5,
.dark h6 {
  color: #d4d4d8;
}

p {
  font-size: 18px;
  color: #484848;
  line-height: 32px;
}

p a {
  border-bottom: 2px solid #35eb9a;
}

p a:hover {
  border-bottom: 2px solid #4fb2bc;
}

.dark p {
  color: #d4d4d8;
}

.active-route {
  font-weight: bold;
}

.article-cover-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}

pre {
  background-color: #262626;
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
  margin-bottom: 1rem;
  margin-top: 4px;
  font-size: 1rem;
  font-family: "Space Mono", monospace;
}

ol {
  list-style: decimal;
  padding-left: 1rem;
}

ol li {
  padding: 1rem 0;
  font-size: 1.25rem;
}

.dark li {
  color: #d4d4d8;
}

.text-gradient {
  background: linear-gradient(to right, #35eb9a, #4fb2bc);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
