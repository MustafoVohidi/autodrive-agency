<template>
  <div class="app">
    <div class="button-group">
      <AppButton :className="$store.state.blue" @click="$store.commit('openModalMoscow')">
        Заказать в Москву
      </AppButton>
      <AppButton :className="$store.state.green" @click="$store.commit('openModalSPB')">
        Заказать в Санкт-Петербурге
      </AppButton>
    </div>
    <AppModal v-if="$store.state.isOpenModal">
      <form>
        <h3 class="header-form">Заказать звонок</h3>
        <div class="input-group">
          <div
            class="input-group-item"
            v-for="input in $store.state.inputGroup"
            :key="input.name"
          >
            <AppInput
              :label="input.label"
              :type="input.type"
              :placeholder="input.placeholder"
              :value="input.value"
              :name="input.name"
            />
          </div>
          <div class="input-group-item">
            <AppSelect
              :label="$store.state.selectCity.label"
              :options="$store.state.selectCity.options"
            />
          </div>
        </div>
        <div class="button-close-modal">
          <div class="button-item">
            <AppButton :className="$store.state.green1" @click="sendData">
              Отправить
            </AppButton>
          </div>
        </div>
      </form>
    </AppModal>
  </div>
</template>

<script>
import AppButton from "@/components/AppButton.vue";
import AppModal from "@/components/AppModal.vue";
import AppInput from "@/components/AppInput.vue";
import AppSelect from "@/components/AppSelect.vue";
export default {
  name: "App",
  components: {
    AppButton,
    AppModal,
    AppInput,
    AppSelect,
  },
  data() {
    return {
      isOpenModal: false,
    };
  },
  methods: {
    sendData() {
      this.$store.state.isOpenModal = false;
    },
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
.app {
}
.button-group {
  display: flex;
  margin: 20px 0;
}
.header-form {
  margin: 0;
  margin-bottom: 23px;
  font-size: 24px;
  line-height: 1;
  color: #111827;
}
.input-group {
  display: flex;
  align-items: end;
  justify-content: space-between;
  flex-wrap: wrap;
}
.input-group-item {
  width: 25%;
  box-sizing: border-box;
  padding: 0 0.5rem;
}
.button-close-modal {
  display: flex;
  justify-content: flex-end;
  margin-top: 18px;
}
.button-item {
  width: 25%;
  box-sizing: border-box;
  padding: 0 0.5rem;
}
.button-item button {
  margin: 0;
  width: 100%;
}
</style>
