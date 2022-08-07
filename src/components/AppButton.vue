<template>
  <button :class="className">
    <slot> </slot>
  </button>
</template>

<script>
export default {
    props:{
        className:{
            type:String,
        }
    }
};
</script>

<style scoped>
button {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  color: #ffffff;
  padding: 9px 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px 17px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  border:0;
  cursor:pointer;
  margin: 0 10px;
}
.blue {
  background: #3b82f6;
}
.green {
  background: #0d9488;
}
.green1{
    background: #16A34A;
}
</style>
