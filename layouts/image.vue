<script setup lang="ts">
import { computed } from 'vue';
import { handleBackground } from '../layoutHelper';

export type Props = {
  logo?: boolean,
  image: string,
  variant: 'bottom' | 'left' | 'right',
}

const { logo = false, image } = defineProps<Props>();

const style = computed(() => handleBackground(image))
</script>

<template>
  <div :class="['slidev-layout', 'logo', 'image', `image--${variant}`]" :style="style">
    <div class="content">
      <slot />
    </div>
  </div>
</template>
