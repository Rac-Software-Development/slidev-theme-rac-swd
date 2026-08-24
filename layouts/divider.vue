<script setup lang="ts">
import { handleBackground } from '../layoutHelper'
import { computed, ComputedRef } from 'vue'

export type Props = {
  variant: 'center' | 'left',
  image?: string,
}

const { variant = 'center', image } = defineProps<Props>()

const style = computed(() => handleBackground(image, true))

const classes = [
  'slidev-layout',
  'divider',
  `divider--${variant}`,
]
</script>

<template>
  <div :style="style" :class="classes">
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style lang="css">
.slidev-layout.divider {
  display: grid;
  background-color: var(--slidev-theme-background--primary);
  color: var(--slidev-theme-text--inverse);

  h1 {
    font-size: var(--title-xl);
    line-height: var(--line-height-xl);
    color: inherit;
  }

  .content {
    margin: auto;
    width: 100%;
  }
}
.slidev-layout.divider--left .content {
  text-align: left;
}
.slidev-layout.divider--center .content {
  text-align: center;
}
</style>
