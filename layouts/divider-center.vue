<script setup lang="ts">
import DividerLayout, { Props } from "./divider.vue"

const props = defineProps<Props>();
</script>

<template>
  <DividerLayout v-bind="props" variant="center" >
    <slot />
  </DividerLayout>
</template>
