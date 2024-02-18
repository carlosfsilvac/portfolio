// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxt/content",
    "@nuxtjs/eslint-module",
    "@vueuse/nuxt",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Roboto: "200..900",
          SpaceMono: "400..700",
        },
      },
    ],
  ],
  ui: {
    icons: ["vscode-icons", "heroicons", "mdi"],
  },
  content: {
    highlight: {
      theme: "dracula-soft",
    },
  },
});
