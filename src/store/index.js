import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    postData: {
      name: "",
      phone: "",
      email: "",
      city_id: "",
    },
    blue: "blue",
    green: "green",
    green1: "green1",
    isOpenModal: false,
    isOpenPoppup: false,
    selectCity: {
      label: "Город*",
      options: [
        { name: "Москва", value: "1" },
        { name: "Санкт-Петербург", value: "2" },
        { name: "Казань", value: "3" },
      ],
    },
    inputGroup: [
      {
        label: "Имя*",
        type: "text",
        placeholder: "Иван Иванов",
        value: "",
        name: "name",
      },
      {
        label: "Телефон*",
        type: "tel",
        placeholder: "+7 (___) ___-__-__",
        value: "",
        name: "phone",
      },
      {
        label: "Email*",
        type: "email",
        placeholder: "you@example.com",
        value: "",
        name: "email",
      },
    ],
    setSelect: 1,
  },
  getters: {},
  mutations: {
    openModalKZN(state) {
      state.isOpenModal = true;
      state.setSelect = 3;
    },
    openModalMoscow(state) {
      state.isOpenModal = true;
      state.setSelect = 1;
    },
    openModalSPB(state) {
      state.isOpenModal = true;
      state.setSelect = 2;
    },
    sendData(state) {
      axios
        .post(
          "http://hh.autodrive-agency.ru/test-tasks/front/task-7/",
          state.postData
        )
        .then(function (response) {
            state.isOpenModal = false;
            state.isOpenPoppup = true;
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        }).finally(()=>{
            state.isOpenModal = false;
            state.isOpenPoppup = true;
        });
    },
    closeModal(state) {
      state.isOpenPoppup = false;
      state.isOpenModal = false;
    },
  },
  actions: {},
  modules: {},
});
// http://hh.autodrive-agency.ru/test-tasks/front/task-7/
