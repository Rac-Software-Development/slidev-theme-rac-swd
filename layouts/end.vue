<template>
  <div :class="['slidev-layout', 'logo', 'end']">
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style lang="css">
.slidev-layout.end {
  background-color: var(--slidev-theme-background--primary);
  color: var(--slidev-theme-text--inverse);
}
.slidev-layout.end h1 {
  color: inherit;
}
</style>
