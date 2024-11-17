<script setup lang="ts">
import { Moon, Sun } from 'lucide-vue-next'
import { ref, watchEffect } from 'vue'

const isLight = ref(true)

watchEffect(() => {
  document.documentElement.setAttribute(
    'data-theme',
    isLight.value ? 'light' : 'dark',
  )
})
</script>

<template>
  <div class="absolute right-4 size-6">
    <button
      :title="`switch to ${isLight ? 'dark' : 'light'} theme`"
      @click="isLight = !isLight"
    >
      <Component
        :is="isLight ? Moon : Sun"
        class="p-[3px] opacity-40 hover:opacity-75"
      />
    </button>
  </div>
</template>
