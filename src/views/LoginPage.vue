<template>
  <div>
    <h2>Login</h2>
    <input
      type="text"
      name="username"
      v-model="input.username"
      placeholder="username"
    />
    <input
      type="password"
      name="password"
      v-model="input.password"
      placeholder="password"
    />
    <button type="button" v-on:click="login()">Login</button>
    <login-button>Login</login-button>
    <input-box :type="'text'" :placeholder="'username'"></input-box>
    <input-box :type="'password'" :placeholder="'password'"></input-box>
  </div>
</template>
<script>
import LoginButton from "@/components/atom/AtomButton.vue";
import InputBox from "@/components/atom/AtomInput.vue";
export default {
  components: { LoginButton, InputBox },
  name: "LoginPage",
  data() {
    return {
      input: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      if (this.input.username == "admin" && this.input.password == "1234") {
        this.$store.commit("setAuthenticated", true);
        this.$router.replace({ name: "user" });
      } else {
        alert("The username or password is not correct");
      }
    },
  },
};
</script>
<style scope></style>
