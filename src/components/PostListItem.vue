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
  <div>
    <UTextarea
      autoresize
      class="w-full"
      readonly
      :rows="null"
      :value="result.text.trim()"
      variant="subtle"
      @dblclick="($event.target as HTMLTextAreaElement).select()"
    />
    <div class="flex justify-between px-1 py-px">
      <ErrorMessage class="text-sm">
        {{ result.errors.join(' ') }}
      </ErrorMessage>
      <span
        class="text-xs"
        :class="
          !result.parsed.valid ? 'text-(--ui-error)' : 'text-(--ui-text)/85'
        "
      >
        {{ result.parsed.weightedLength }}/280
      </span>
    </div>
  </div>
</template>
