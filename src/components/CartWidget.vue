<script setup>
// imports
import { onMounted, onUpdated, ref } from "vue";
import CartItem from "./CartItem.vue";
import { useCartStore } from "@/stores/CartStore";
const cartStore = useCartStore();

const handleCheckout = async () => {
  cartStore.checkout();
  cartStore.$reset();
};

// data
let active = ref(false);
const emit = defineEmits(["cartOn", "val"]);

//emit
const myEmit = () => {
  active.value = true;
  emit("cartOn", active.value);
};

const myEmitClosed = () => {
  emit("cartOff");
  active.value = false;
};
</script>
<template>

  <div>
    <span class="" @click="myEmit">
      <p>
        <strong
          ><i class="fa-solid fa-cart-shopping-fast"></i
          >&#128722 {{ cartStore.count }}</strong
        >
      </p>
      <div class=""></div>
    </span>
    <!-- Modal Overlay only shows when cart is clicked on -->
    <AppModalOverlay :active="active" @close="myEmitClosed">
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="px-4 md:px-8 mx-auto">
          <div
            class="
              flex flex-col
              sm:flex-row
              justify-between
              items-center
              bg-gray-100
              rounded-lg
              gap-4
              p-4
              md:p-8
            "
          >
            <div>
              <div v-if="!cartStore.isEmpty">
                <ul class="">
                  <CartItem
                    v-for="(items, name) in cartStore.grouped"
                    :key="name"
                    :product="items[0]"
                    :count="cartStore.groupCount(name)"
                    @updateCount="cartStore.setItemCount(items[0], $event)"
                    @clear="cartStore.clearItem(name)"
                  />
                </ul>
                <div class="">
                  Total: <strong>total: {{ cartStore.total }}$</strong>
                </div>

                <AppButton class="" @click="cartStore.$reset()"
                  >Clear Cart</AppButton
                >
                <br />
                <a
                  href="#"
                  @click="handleCheckout"
                  class="
                    inline-block
                    bg-cyan-700 
                    hover:bg-green-400
                    text-white text-sm
                    md:text-base
                    font-semibold
                    text-center
                    rounded-lg
                    outline-none
                    px-8
                    py-3
                    block
                    mt-3
                  "
                  >Checkout</a
                >
              </div>

              <!-- Uncomment and use condition to show when cart is empty -->
              <div v-else><em>Cart is Empty</em></div>
            </div>
          </div>
        </div>
      </div>
    </AppModalOverlay>
  </div>
</template>
<style lang="pcss" scoped>
.items-in-cart {
  @apply mb-5;
}
.items-in-cart li {
  @apply flex justify-between p-2;
}
.items-in-cart li:nth-of-type(even) {
  @apply bg-gray-300;
}
</style>
