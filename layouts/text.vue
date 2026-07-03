<script setup lang="ts">
export type Props = {
  logo?: boolean,
  columns?: 1 | 2 | 3,
}

const { logo = false, columns = 1 } = defineProps<Props>()
</script>

<template>
  <div :class="['slidev-layout', 'text', `text--${columns}-col`]">
    <div class="content">
      <slot />
    </div>
  </div>
</template>
