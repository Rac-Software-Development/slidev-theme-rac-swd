<script setup lang="ts">
import { handleBackground } from '../layoutHelper'
import { computed, ComputedRef } from 'vue'

export type Props = {
  variant?: 'image' | 'bar' | 'text',
  image?: string,
}

const { variant = 'text', image } = defineProps<Props>()

const resolvedVariant: ComputedRef<Props['variant']> = computed(() => {
  if (!image && variant === 'image') {
    return 'text';
  }
  return variant;
})

const style = computed(() => handleBackground(image))

const classes = [
  'slidev-layout',
  ...variant !== 'text' ? ['logo', 'logo--inverse'] : [],
  'cover',
  `cover--${resolvedVariant.value}`,
]
</script>

<template>
  <div :class="classes" :style="style">
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style lang="css">
.slidev-layout.cover {
  background-color: var(--slidev-theme-background--primary);
  color: var(--slidev-theme-text--inverse);
  display: grid;
  padding-left: 2.2rem;
  padding-right: 2.2rem;
  padding-top: 2.1rem;
  padding-bottom: 2.1rem;

  h1 {
    color: inherit;
  }

  p {
    font-size: var(--subtitle);
  }
}

.slidev-layout.cover--text .content {
  margin: auto;
  width: 59%;
  height: 40%;

  h1 {
    font-size: var(--title-xl);
    line-height: var(--line-height-xl);
    color: inherit;
  }
}

.slidev-layout.cover--bar {
  background-color: var(--slidev-theme-background);

  .content {
    margin-top: 44%;
    height: 15%;
    width: 100%;

    h1 {
      font-size: var(--title-m);
    }

    &::before {
      content: '';
      position: absolute;
      background-color: var(--slidev-theme-background--primary);
      top: 75%;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
    }
  }
}

.slidev-layout.cover--image {
  z-index: -1;

  &.logo::before {
    height: 7.5rem;
  }

  &::after {
    content: '';
    position: fixed;
    top: 50%;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(0, 0, 0, 0.5)
    );
  }
  .content {
    margin-top: 29%;
    height: 40%;
    width: 100%;

    h1 {
      font-size: var(--title-l);
      line-height:  var(--line-height-l);
    }
  }
}

</style>
