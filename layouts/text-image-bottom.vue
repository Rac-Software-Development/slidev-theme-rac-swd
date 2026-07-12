<script setup lang="ts">
import TextImageLayout, { Props } from "./text-image.vue"

const props = defineProps<Props>();
</script>

<template>
  <TextImageLayout v-bind="props" variant="bottom">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData" />
    </template>
  </TextImageLayout>
</template>
