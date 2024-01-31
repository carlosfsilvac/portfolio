<template>
  <button
    v-show="isVisible"
    class="fixed bottom-4 right-4 md:bottom-8 md:right-16 text-zinc-500 md:hover:text-primary"
    @click="scrollToTop"
  >
    <UIcon
      class="w-8 h-8 md:w-10 md:h-10"
      name="i-heroicons-chevron-double-up-solid"
    />
  </button>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.checkScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.checkScroll);
  },
  methods: {
    checkScroll() {
      this.isVisible = window.scrollY > 200;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
