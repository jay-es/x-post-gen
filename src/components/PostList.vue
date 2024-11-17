<script setup lang="ts">
import { computed } from 'vue'
import PostListItem from './PostListItem.vue'
import ErrorMessage from './ErrorMessage.vue'

const { data, template } = defineProps<{
  data: string
  template: string
}>()

const posts = computed(() => {
  try {
    return JSON.parse(data)
  } catch {
    return null
  }
})

function hasProperty(value: unknown): value is Record<string, unknown> {
  return value != null
}
</script>

<template>
  <ErrorMessage v-if="posts === null">Could not parse data.</ErrorMessage>
  <ErrorMessage v-else-if="!Array.isArray(posts)">
    Data must be an array.
  </ErrorMessage>
  <ul v-else class="space-y-3">
    <li v-for="post in posts" :key="JSON.stringify(post)">
      <PostListItem
        v-if="hasProperty(post)"
        :post="post"
        :template="template"
      />
      <ErrorMessage v-else>Post is null.</ErrorMessage>
    </li>
  </ul>
</template>
