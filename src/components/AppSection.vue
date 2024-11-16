<script setup lang="ts">
defineProps<{ title: string }>()
</script>
<template>
  <section>
    <h2 class="mb-2 font-medium">{{ title }}</h2>
    <slot />
  </section>
</template>
