<script setup lang="ts">
import { computed } from 'vue'
import ErrorMessage from './ErrorMessage.vue'

const { post, template } = defineProps<{
  post: Record<string, unknown>
  template: string
}>()

const result = computed(() => {
  const matches = template.matchAll(/{{\s*(\w+)\s*}}/g)
  const errors: string[] = []
  let text = template

  for (const [brace, prop] of matches) {
    if (!(prop in post)) {
      errors.push(`Property "${prop}" is missing.`)
    }

    text = text.replace(brace, String(post[prop] ?? ''))
  }

  return { errors, text }
})
</script>

<template>
  <div class="form-control">
    <textarea
      class="textarea textarea-bordered resize-none bg-neutral-50"
      readonly
      :value="result.text.trim()"
    />
    <div class="label py-0.5">
      <ErrorMessage v-if="result.errors.length > 0" class="label-text-alt">
        {{ result.errors.join(' ') }}
      </ErrorMessage>
      <!-- TODO: 文字数カウント -->
    </div>
  </div>
</template>
