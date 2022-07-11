<script setup>
defineProps({
  all: { type: Object },
});
</script>


<template>
  <div class="swiffy-slider" v-show="checkedNames === 'all'">
    <ul class="slider-container">
      <li v-for="product in all" :key="product.name">
        <ProductCard
          class="wrapi"
          :product="product"
          @addToCart="cartStore.addItems($event, product)"
        />
      </li>
    </ul>

    <button type="button" class="slider-nav my-arrow"></button>
    <button type="button" class="slider-nav slider-nav-next my-arrow"></button>

    <div class="slider-indicators">
      <button class="active"></button>
      <button></button>
      <button></button>
    </div>
  </div>
</template>



<style>
</style>