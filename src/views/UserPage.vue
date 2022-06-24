<template>
  <div>
    <h1>Welcome {{ $store.getters.fullName(this.num) }}</h1>
    <hr />
    <br />
    <div class="my-button">
      <atom-button :callBack="back">Back</atom-button>
    </div>
  </div>
</template>

<script>
import AtomButton from "@/components/atoms/AtomButton.vue";
export default {
  components: { AtomButton },
  name: "UserPage",
  data() {
    return {
      num: this.$store.state.myuser,
    };
  },
  methods: {
    back() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  color: white;
}
.my-button {
  width: 100px;
  margin: auto;
}
</style>
