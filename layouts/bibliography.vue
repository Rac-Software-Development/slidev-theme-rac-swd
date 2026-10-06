<script setup lang="ts">
export type Props = {
  logo?: boolean,
}

const { logo = true } = defineProps<Props>()

const classes = [
  'slidev-layout',
  'bibliography',
  ...logo ? ['logo'] : [],
]
</script>

<template>
  <div :class="classes">
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style lang="css">
.slidev-layout.bibliography {
  .content {
    display: grid;
    column-gap: 1.75rem;
    grid-auto-rows: min-content;
    height: 100%;
  }

  h1 {
    grid-column: 1 / -1;
    margin-bottom: 1.75rem;
  }

  .content > p {
    font-size: small;
    margin-block: calc(var(--block-margin)/2);
  }
}

</style>
