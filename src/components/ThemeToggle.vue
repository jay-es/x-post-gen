<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
import { computed } from 'vue'

const mode = useColorMode()
const isLight = computed(() => mode.value === 'light')
</script>

<template>
  <div class="absolute right-4 size-6">
    <button
      :title="`switch to ${isLight ? 'dark' : 'light'} theme`"
      @click="mode = mode === 'dark' ? 'light' : 'dark'"
    >
      <UIcon
        class="size-6 p-[3px] opacity-40 hover:opacity-75"
        :name="isLight ? 'i-lucide-moon' : 'i-lucide-sun'"
      />
    </button>
  </div>
</template>
