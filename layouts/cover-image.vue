<script setup lang="ts">
import CoverLayout, { Props } from "./cover.vue"

const props = defineProps<Props>();
</script>

<template>
  <CoverLayout v-bind="props" variant="image" >
    <slot />
  </CoverLayout>
</template>
