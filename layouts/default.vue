<script setup lang="ts">
// Customize which layout to treat as default by importing it here
import TextLayout, { Props } from "./text.vue"

const props = defineProps<Props>();
</script>

<template>
  <TextLayout v-bind="props">
    <slot />
  </TextLayout>
</template>
