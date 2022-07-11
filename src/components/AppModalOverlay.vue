<script setup>
defineProps({
  active: { type: Boolean, default: false },
});

defineEmits(["close"]);
</script>
<template>
  <div v-if="active" class="modal-overlay">
    <div class="modal-overlay-bg" @click="$emit('close')"></div>
    <div class="modal-overlay-content">
      <span class="close" @click="$emit('close')">
        <fa icon="window-close" class="text-gray-700" />
      </span>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="pcss" scoped>
.close {
  position: absolute;
  top: 2rem;
  right: 2rem;
}
.modal-overlay-bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: grey;
  opacity: 80;
}
.modal-overlay-content {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  background: white;
  padding: 10rem;
  width: 60%;
  border-radius: 15px;
}

.app-modal {
  background: url("https://i.pinimg.com/originals/89/f5/ee/89f5ee2c48c63c6e4fb127b7ecd9cd60.gif");
}
@media (min-width: 800px) {
  .modal-overlay-content {
    width: 600px !important;
  }
}
</style>
