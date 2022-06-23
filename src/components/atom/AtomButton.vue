<template>
  <div>
    <hr />
    <div class="login-button"><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: "AtomButton",
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
  border-radius: 15px;
  width: 100px;
}
.login-button:hover {
  background-color: #e37200;
}
</style>
