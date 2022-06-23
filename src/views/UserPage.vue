<template>
  <div>
    <h1>Welcome {{ $store.getters.fullName }}</h1>
    <hr />
  </div>
</template>

<script>
export default {
  name: "UserPage",
};
</script>

<style scope>
h1 {
  text-align: center;
  color: white;
}
</style>
