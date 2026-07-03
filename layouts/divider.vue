<script setup lang="ts">
import { handleBackground } from '../layoutHelper'
import { computed, ComputedRef } from 'vue'

export type Props = {
  variant: 'center' | 'left',
  image?: string,
}

const { variant = 'center', image } = defineProps<Props>()

const style = computed(() => handleBackground(image))

const classes = [
  'slidev-layout',
  'logo',
  'divider',
  `divider--${variant}`,
]
</script>

<template>
  <div :style="style">
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style lang="css">
.slidev-layout.divider {
  background-color: var(--slidev-theme-background--primary);
  color: var(--slidev-theme-text--inverse);
}
.slidev-layout.cover h1 {
  color: inherit;
}
</style>
