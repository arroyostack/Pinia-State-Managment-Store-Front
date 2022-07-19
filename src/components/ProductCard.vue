<script setup>
// imports
import { ref } from "vue";
import AppCountInput from "./AppCountInput.vue";

// props
const props = defineProps({
  product: Object,
});

// emits
defineEmits(["addToCart"]);

// data
const count = ref(0);
</script>
<template>
  <!-- ------------- -->
  <div class="bg-white dark:bg-black text-center w-full h-auto pt-5">
    <div class="flex justify-center">
      <img :src="`${product.image}`" class="rotate-90 max-h-72" />
    </div>
    <li>
      <div class="dark:text-white text-xl md:text-2xl pt-5">
        <div class="font-semibold text-4xl dark:text-white dark:cyan-700">
          {{ product.name }} -{{ product.price }}$
        </div>
        <div
          class="
            font-extralight
            text-base
            pt-3
            pl-40
            pr-40
            sm:text-sm sm:pl-0 sm:pr-0
          "
        >
          <p class="dark:text-gray-300 text-black text-center">
            {{ product.description }}
          </p>
        </div>

        <div class="mt-3">
          <AppCountInput v-model="count" class="appearance-none bg-cyan-500" />
        </div>
        <AppButton
          class="
            border-2 border-cyan-700
            p-3
            m-7
            rounded-lg
            text-sm
            hover:bg-green-300
            mb-10
          "
          @click="$emit('addToCart', count), (count = 0)"
          >Add to Cart
        </AppButton>
      </div>
    </li>
  </div>
</template>

<style scoped>
</style>
