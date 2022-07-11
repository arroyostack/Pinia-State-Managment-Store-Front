<template>
  <button class="">
    <slot></slot>
  </button>
</template>
<style scoped>
.primary {
  @apply bg-green-500 border-2 border-green-600;
}
.secondary {
  @apply bg-gray-500 border-2 border-gray-600;
}
</style>
