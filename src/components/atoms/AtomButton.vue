<template>
  <div>
    <button class="login-button" type="button" @click="callBack()">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "AtomButton",
  props: {
    callBack: Function,
  },
};
</script>

<style scope>
.login-button {
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 18px;
  font-weight: 600;
  background-color: #ffae10;
  color: white;
  border: hidden;
  border-radius: 15px;
  width: 100px;
  text-align: center;
}
.login-button:hover {
  background-color: #e37200;
}
</style>
