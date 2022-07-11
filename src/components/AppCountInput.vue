<script setup>
defineProps({
  modelValue: { type: [Number, String], default: 0 },
});

const emit = defineEmits(["update:modelValue", "input"]);
const updateValue = (value) => {
  if (value !== "") {
    emit("update:modelValue", value);
  }
};
</script>
<template>
  <span>
    <button
      class="bg-cyan-700 w-10 br-10 rounded-full hover:scale-110"
      @click="updateValue(modelValue > 0 ? modelValue - 1 : null)"
    >
      -
    </button>
    <input
      :value="modelValue"
      type="number"
      min="0"
      @input="updateValue($event.target.value)"
      class="text-center text-cyan-700 w-8 ml-5 mr-5 mb-3 rounded-full"
    />
    <button
      class="
        bg-cyan-700
        dark:bg-cyan-700
        w-10
        br-10
        rounded-full
        hover:scale-110
      "
      @click="updateValue(modelValue + 1)"
    >
      +
    </button>
  </span>
</template>

<style scoped>
input[type="number"] {
  appearance: none;
  -moz-appearance: textfield;
}
</style>
