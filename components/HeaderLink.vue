<template>
  <div class="relative group w-fit">
    <router-link
      exact-active-class="active-route"
      class="dark:text-zinc-200"
      :to="url"
    >
      {{ title }}
      <div
        class="h-[2px] from-primary to-secondary bg-gradient-to-r absolute bottom-0 left-0 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
      ></div>
    </router-link>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});
</script>

<style scoped></style>
