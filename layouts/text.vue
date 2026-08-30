<script setup lang="ts">
export type Props = {
  logo?: boolean,
  columns?: 1 | 2 | 3,
  columnBackground?: 'primary' | 'secondary';
  image?: string;
}

const { logo = true, columns = 1, columnBackground } = defineProps<Props>()

const classes = [
  'slidev-layout',
  'text',
  `text--${columns}-col`,
  ...columnBackground ? [`text-col--${columnBackground}`] : [],
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
.slidev-layout.text {
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

  &.text--2-col {
    .content {
      grid-template-columns: 1fr 1fr;
    }
  }

  &.text--3-col {
    .content {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
}
.slidev-layout.text-col--primary,
.slidev-layout.text-col--secondary {
  .content > p
  .content{
    margin-top: .375rem;
    padding-top: 1.5rem;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 0;
    background-color: var(--slidev-theme-background--secondary);
    height: 100%;
  }
}
.slidev-layout.text-col--primary {
  .content > p {
    color: var(--slidev-theme-text--inverse);
    background-color: var(--slidev-theme-background--primary);
  }
}

</style>
