//NOTE// "swiffy-slider" library bug -1: when loading slider based on a conditinal ternary operator result && "v-if"; the slider controls disable. Temp-fix: create new instances of slider with diferent 'v-for' values and apply v-show directive

//NOTE// When resizing browser manually the slider gets stuck between photos. Temp-fix: pass to next picture

<script setup>
import TheHeader from "@/components/TheHeader.vue";
import ProductCard from "@/components/ProductCard.vue";
import { useProductStore } from "@/stores/ProductStore";
import { useCartStore } from "@/stores/CartStore";
import Trial from "./assets/trial.json";
import {
  computed,
  onBeforeUpdate,
  onMounted,
  onUpdated,
  ref,
} from "@vue/runtime-core";
//variables
const productStore = useProductStore();
const cartStore = useCartStore();
const checkedNames = ref("all");
const isCartOn = ref(false);

// const texana = ref(null);

cartStore.$onAction(({ name, store, args, after, onError }) => {
  if (name === "addItems") {
    after(() => {
      console.log(args[0]);
    });
    onError((error) => {
      console.log("Hello error: ", " error.message");
    });
  }
});

productStore.fill();
// computed filtered product variables
const element = computed(() => {
  return productStore.products.filter((item) => item.category === "element");
});
const protip = computed(() => {
  return productStore.products.filter((item) => item.category === "protip");
});
const jump = computed(() => {
  return productStore.products.filter((item) => item.category === "jump");
});

const isCart = (e) => {
  isCartOn.value = true;
};

let isDark = ref(false);

const toogleDark = () => {
  isDark.value = !isDark.value;
};
</script>

<template>
  <div :class="isDark === true ? 'dark' : ''">
    <button
      @click="toogleDark"
      class="
        bg-black
        dark:bg-white
        text-white
        dark:text-black
        py-2
        px-4
        rounded-full
        fixed
        top-3
        left-3
      "
    >
      <p v-show="isDark === false">Dark</p>
      <p v-show="isDark === true">Light</p>
    </button>
    <!-- HEADER -->
    <TheHeader class="" @cartOn="isCart" @cartOff="isCartOn = false" />
    <!-- ----- -->
    <div class="bg-cyan-700 dark:bg-red-400 flex justify-center text-hero">
      <div>
        <input
          class="m-4"
          type="radio"
          id="element"
          value="element"
          v-model="checkedNames"
        />
        <label for="jack" class="font-bold tracking-wide">Element</label>

        <input
          class="m-4 text-bold"
          type="radio"
          id="protip"
          value="protip"
          v-model="checkedNames"
        />
        <label for="john" class="font-bold tracking-wide">Protip</label>

        <input
          class="m-4 text-bold"
          type="radio"
          id="all"
          value="all"
          v-model="checkedNames"
          checked
        />
        <label for="mike" class="font-bold tracking-wide">All</label>
      </div>
    </div>
    <!-- ---------------------------- -->

    <!-- DYNAMIC CAROUSEL -->
    <!-- ------------------------ -->
    <div
      class="swiffy-slider"
      v-show="checkedNames === 'all' && isCartOn === false"
    >
      <ul class="slider-container">
        <li v-for="product in productStore.products" :key="product.name">
          <ProductCard
            class="wrapi"
            :product="product"
            @addToCart="cartStore.addItems($event, product)"
          />
        </li>
      </ul>

      <button type="button" class="slider-nav my-arrow"></button>
      <button
        type="button"
        class="slider-nav slider-nav-next my-arrow"
      ></button>

      <div class="slider-indicators">
        <button class="active"></button>
        <button></button>
        <button></button>
      </div>
    </div>

    <div
      class="swiffy-slider"
      v-show="checkedNames === 'element' && isCartOn === false"
    >
      <ul class="slider-container">
        <li v-for="product in element" :key="product.name">
          <ProductCard
            class="wrapi"
            :product="product"
            @addToCart="cartStore.addItems($event, product)"
          />
        </li>
      </ul>

      <button type="button" class="slider-nav my-arrow"></button>
      <button
        type="button"
        class="slider-nav slider-nav-next my-arrow"
      ></button>

      <div class="slider-indicators">
        <button class="active"></button>
        <button></button>
        <button></button>
      </div>
    </div>

    <div
      class="swiffy-slider"
      v-show="checkedNames === 'protip' && isCartOn === false"
    >
      <ul class="slider-container">
        <li v-for="product in protip" :key="product.name">
          <ProductCard
            class="wrapi"
            :product="product"
            @addToCart="cartStore.addItems($event, product)"
          />
        </li>
      </ul>

      <button type="button" class="slider-nav my-arrow"></button>
      <button
        type="button"
        class="slider-nav slider-nav-next my-arrow"
      ></button>

      <div class="slider-indicators">
        <button class="active"></button>
        <button></button>
        <button></button>
      </div>
    </div>
  </div>
</template>


<style scoped>
/* FONTS */
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Shadows+Into+Light&display=swap");
.my-arrow {
  background: #ffffff52;
}

.text-hero {
  font-family: "Shadows Into Light", cursive;
}

img {
  max-height: 30%;
}
</style>