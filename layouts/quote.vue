<script setup lang="ts">
import { computed } from 'vue';
import TextImage from './image.vue';
import { handleBackground } from '../layoutHelper';

export type Props = {
  logo?: boolean,
  image: string,
}

const { logo = false, image } = defineProps<Props>();

const style = computed(() => handleBackground(image))
</script>

<template>
  <TextImage :image="image" :logo="true" variant="left">
    <slot />
  </TextImage>
</template>
