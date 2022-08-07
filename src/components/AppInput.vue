<template>
  <div class="form-input">
    <label>{{ label }}</label>
    <input
      :type="type"
      :placeholder="placeholder"
      :value="value"
      :name="name"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
    },
    type: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    value: {
      type: String,
    },
    name: {
      type: String,
    },
  },
};
</script>

<style scoped>
.form-input {
}
.form-input label {
  color: #374151;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  margin-bottom:4px;
}
.form-input input {
  padding: 9px 13px;
  background: #ffffff;
  border: 1px solid #d1d5db;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  box-sizing: border-box;
  width: 100%;
}
</style>
