<script setup lang="ts">
import twitterText from 'twitter-text'
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

  const parsed = twitterText.parseTweet(text)

  return { errors, parsed, text }
})
</script>

<template>
  <div class="form-control">
    <textarea
      class="textarea textarea-bordered resize-none bg-base-200"
      readonly
      :value="result.text.trim()"
      @dblclick="($event.target as HTMLTextAreaElement).select()"
    />
    <div class="label py-px">
      <ErrorMessage class="label-text">
        {{ result.errors.join(' ') }}
      </ErrorMessage>
      <span
        class="label-text-alt"
        :class="{ 'text-error': !result.parsed.valid }"
      >
        {{ result.parsed.weightedLength }}/280
      </span>
    </div>
  </div>
</template>
