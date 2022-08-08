<template>
  <div class="modal" @click="$store.commit('closeModal')">
    <div class="modal-content" @click.stop>
      <div class="modal-form">
        <slot> </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    closeModal1() {
      this.$store.state.isOpenModal = false;
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(107, 114, 128, 0.75);
  width: 100%;
  height: 100%;
}
.modal-content {
  background: #ffffff;
  box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.1),
    0px 10px 10px -5px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  width: 793px;
  padding: 24px;
}
</style>
