<script setup lang="ts">
defineProps<{ title: string }>()
</script>
<template>
  <section>
    <h2 class="mb-1 font-medium">{{ title }}</h2>
    <slot />
  </section>
</template>
