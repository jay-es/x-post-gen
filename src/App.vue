<script setup lang="ts">
import { ref } from 'vue'
import AppSection from './components/AppSection.vue'
import PostList from './components/PostList.vue'
import * as defaultValues from './default-values'
import HowToUse from './components/HowToUse.vue'
import ThemeToggle from './components/ThemeToggle.vue'

const template = ref(defaultValues.template)
const data = ref(defaultValues.data)
</script>

<template>
  <main class="grid grid-cols-3 gap-x-6">
    <AppSection title="1. Template">
      <UTextarea v-model="template" autoresize class="w-full" />
      <HowToUse />
    </AppSection>
    <AppSection title="2. Data">
      <UTextarea v-model="data" autoresize class="w-full font-mono break-all" />
    </AppSection>
    <AppSection title="3. Output">
      <PostList :data="data" :template="template" />
    </AppSection>
  </main>

  <footer class="space-x-1 text-center">
    <h1 class="inline">X Post Generator</h1>
    <a
      href="https://github.com/jay-es/x-post-gen"
      rel="noopener noreferrer"
      target="_blank"
    >
      &copy;<span class="underline">jay-es</span>
    </a>
  </footer>

  <ThemeToggle />
</template>
