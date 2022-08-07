<template>
  <div class="form-input">
    <label>{{ label }}</label>
    <select value="1">
      <option
        v-for="option in options"
        :value="option.value"
        :key="option.value"
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
    },
    options: {
      type: Array,
    },
  },
};
</script>

<style scoped>
.form-input {
  box-sizing: border-box;
}
.form-input label {
  color: #374151;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  margin-bottom: 4px;
}
.form-input select {
  padding: 9px 13px;
  background: #ffffff;
  border: 1px solid #d1d5db;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  width: 100%;
  display: block;
  box-sizing: border-box;
}
</style>
