import { createStore } from "vuex";
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
  },
  getters: {
  },
  mutations: {
    openModal(state){
        state.isOpenModal=true;
    }
  },
  actions: {},
  modules: {},
});
// http://hh.autodrive-agency.ru/test-tasks/front/task-7/
