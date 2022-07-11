<script setup>
defineProps({
  product: { type: Object, required: true },
  count: { type: Number, required: true },
});

defineEmits(["updateCount", "clear"]);
</script>
<template>
  <li>
    <span class="text-lg">{{ product.name }}</span>
    <br />
    <span class="">
      <br />
      <AppCountInput
        :model-value="count"
        @update:modelValue="$emit('updateCount', $event)"
      />
      <!-- <span class="">${{ count * product.price }}</span> -->
      <span class="" @click="$emit('clear')">
        <fa icon="" />
      </span>
    </span>
  </li>
</template>
