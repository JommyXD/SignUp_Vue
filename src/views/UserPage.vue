<template>
  <div>
    <h1>Welcome {{ $store.getters.fullName(this.num) }}</h1>
    <hr />
  </div>
</template>

<script>
export default {
  name: "UserPage",
  data() {
    return {
      num: this.$store.state.myuser,
    };
  },
};
</script>

<style scope>
h1 {
  text-align: center;
  color: white;
}
</style>
