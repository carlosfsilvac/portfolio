<template>
  <main>
    <div class="relative group mb-8 w-fit">
      <a
        class="text-sm font-medium text-zinc-600 flex items-center space-x-2 dark:text-zinc-200"
        href="/blog"
      >
        <div class="h-full flex-1">
          <UIcon name="i-heroicons-arrow-left-20-solid" class="mr-1 h-4 w-4" />
        </div>
        Voltar
      </a>
      <div
        class="h-[2px] from-primary to-secondary bg-gradient-to-r absolute bottom-0 left-0 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
      ></div>
    </div>
    <ContentDoc />
  </main>
</template>
