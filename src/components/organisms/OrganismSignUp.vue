<template>
  <div class="container">
    <div class="login-text">Sign Up</div>
    <div class="my-box">
      <atom-input
        type="text"
        placeholder="username"
        v-model="input.username"
      ></atom-input>
      <atom-input
        type="text"
        placeholder="firstname"
        v-model="input.firstname"
      ></atom-input>
      <atom-input
        type="text"
        placeholder="lastname"
        v-model="input.lastname"
      ></atom-input>
      <atom-input
        type="password"
        placeholder="password"
        v-model="input.password"
      ></atom-input>
      <atom-input
        type="password"
        placeholder="confrim password"
        v-model="input.confrimpassword"
      ></atom-input>
    </div>
    <div class="my-login">
      <atom-button :callBack="signUp">Sign Up</atom-button>
    </div>
    <div class="log-in">I have account <a href="/login">Log in</a></div>
  </div>
</template>

<script>
import AtomButton from "../atoms/AtomButton.vue";
import AtomInput from "../atoms/AtomInput.vue";
export default {
  components: { AtomInput, AtomButton },
  name: "OrganismSignUp",
  data() {
    return {
      input: {
        username: "",
        firstname: "",
        lastname: "",
        password: "",
        confrimpassword: "",
      },
    };
  },
  methods: {
    signUp() {
      console.log(this.input);
    },
  },
};
</script>

<style scoped>
.container {
  height: 550px;
  width: 350px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 2px 2px 8px 4px rgba(0, 0, 0, 0.1);
  margin: auto;
  margin-top: 100px;
}

.login-text {
  font-size: 24px;
  font-weight: 900;
  text-align: center;
  padding-top: 40px;
  padding-bottom: 70px;
}

.my-box {
  padding-left: 30px;
  margin-bottom: 20px;
}

.my-login {
  width: 100px;
  margin: auto;
}

.log-in {
  margin-top: 50px;
  font-size: 12px;
  font-weight: 100;
  text-align: center;
}

a {
  color: #2c3e50;
}
</style>
