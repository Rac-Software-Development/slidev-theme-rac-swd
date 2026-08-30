<script setup lang="ts">
import { handleBackground } from '../layoutHelper'
import { computed } from 'vue'

export type Props = {
  logo?: boolean,
  image?: string;
  variant?: 'bottom' | 'left' | 'right',
  size?: 'cover' | 'contain';
}

const { logo = true, variant = 'right', image, size } = defineProps<Props>()

const bestGuessBackgroundSize = (image?: string) => {
  const pictureDefault = 'cover' as const
  const figureDefault = 'contain' as const
  if (!image) return pictureDefault

  if (image.startsWith('data:image/svg+xml')) return figureDefault

  const path = new URL(image).pathname
  if (path.endsWith('.svg')) return figureDefault

  return pictureDefault
}

const imageStyle = computed(() =>
  handleBackground(image, false, size || bestGuessBackgroundSize(image))
);

const classes = [
  'slidev-layout',
  'text-image',
  `text-image--${variant}`,
  ...variant !== 'bottom' && logo ? ['logo'] : [],
]
</script>

<template>
  <div :class="classes">
    <div class="content">
      <slot />
    </div>
    <div class="image" :style="imageStyle">
      <slot name="image" />
    </div>
  </div>
</template>

<style lang="css">
.slidev-layout.text-image {
  position: absolute;

  h1 {
    margin-bottom: 1.75rem;
  }

  &.text-image--bottom {
    .image {
      place-content: center;
      text-align: center;
      position: absolute;
      right: 0;
      left: 0;
      top: 58%;
      bottom: 0;
    }
  }

  &:not(.text-image--bottom) {
    .image {
      place-content: center;
      text-align: center;
      position: absolute;
      right: 0;
      top: 4rem;
      bottom: 5rem;
      width: 36.25%;
    }

    &.text-image--right {
      .content {
        margin-right: 38.75%;
      }
      .image {
        right: 0;
      }
    }
    &.text-image--left {
      .content {
        margin-left: 38.75%;
      }

      .image {
        left: 0;
      }
    }
  }
}
</style>
