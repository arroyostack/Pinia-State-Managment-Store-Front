<script>
// imports
import { useAuthUserStore } from "@/stores/AuthUserStore";
import { mapState, mapActions } from "pinia";
import CartWidget from "./CartWidget.vue";
import { onUpdated } from "@vue/runtime-core";
export default {
  components: { CartWidget },
  computed: {
    ...mapState(useAuthUserStore, {
      user: "username",
    }),
  },
  methods: {
    ...mapActions(useAuthUserStore, {
      toTwitter: "visitTwitterProfile",
    }),
  },
};
</script>
<script setup>
const emit = defineEmits(["cartOn", "val"]);
const passActive = (e) => {
  emit("cartOn", e);
  console.log("passed", e);
};
const passOff = () => {
  emit("cartOff");
  console.log("passed");
};
</script>


<template>
  <header class="" style="">
    <div class="bg-slate-50 text-black dark:bg-black dark:text-white">
      <div class="h-24 flex flex-col justify-center items-center">
        <h1 class="font-thin">
          <span
            class="
              hero-text
              text-4xl
              sm:text-3xl
              block
              font-medium
              dark:font-light
              tracking-widest
              border-cyan-700
              dark:border-red-600
              border-2 border-solid border-t-0 border-r-red
              p-4
              text-center
              rounded-b-lg rounded-l-lg
            "
            >The Skate Shop</span
          >
        </h1>
      </div>
      <div class="tracking-widest text-5xl sm:text-xl md:text-3xl pt-10">
        <span class="my-title block text-left ml-16"
          >Home for
          <span class="dark:text-red-400 text-cyan-700"> Skate</span>
          Lovers</span
        >
        <div class="flex justify-center">
          <lottie-player
            src="https://assets7.lottiefiles.com/packages/lf20_Cqp4Yg/satetraveling.json"
            background="transparent"
            speed="1"
            style="width: 200px; height: 200px"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div>
          <span class="block text-right my-title mr-16 pt-2 pb-5"
            ><span class="text-cyan-700 dark:text-red-400">custom made</span>
            for everyone</span
          >
        </div>
      </div>
    </div>
  </header>

  <!-- ---------------------------------------------- -->

  <div
    class="
      h-19
      flex
      justify-center
      items-center
      dark:bg-red-400
      bg-cyan-700
      pt-5
      pb-7 pb-0
      pl-5
    "
  >
    <h1 class="">
      <span class="text-2xl block tracking-wider flex pt-1 hero-text text-black"
        >El Hadj Arroyo's <span>&nbspcart</span></span
      >
    </h1>
    <button
      class="
        h-8
        px-4
        m-2
        text-sm text-black
        transition-colors
        duration-150
        rounded-lg
        focus:shadow-outline
        bg-white
        hover:bg-green-300
        border-2
      "
    >
      <CartWidget @cartOff="passOff" @cartOn="passActive" />
    </button>
  </div>
</template>

<style>
.my-title {
  font-family: "Bebas Neue", cursive;
}

.hero-text {
  font-family: "Shadows Into Light", cursive;
}
</style>
