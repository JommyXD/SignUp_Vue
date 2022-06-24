<template>
  <div class="container">
    <div class="login-text">Login</div>
    <div class="my-box">
      <atom-input
        type="text"
        placeholder="username"
        v-model="input.username"
      ></atom-input>
      <atom-input
        type="password"
        placeholder="password"
        v-model="input.password"
      ></atom-input>
    </div>
    <div class="my-login">
      <atom-button :callBack="login">Login</atom-button>
    </div>
    <div class="sign-up">
      Don't have on account? <a href="/signup">Sign Up</a>
    </div>
  </div>
</template>

<script>
import AtomButton from "../atoms/AtomButton.vue";
import AtomInput from "../atoms/AtomInput.vue";

export default {
  name: "OrganismsLogin",
  components: {
    AtomInput,
    AtomButton,
  },
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
      console.log("Login");
      if (this.input.username != "" || this.input.password != "") {
        let index = this.$store.state.users.findIndex((item) => {
          return item.username == this.input.username;
        });
        if (index == -1) {
          alert("The username or password is not correct");
        } else {
          if (
            this.input.username == this.$store.state.users[index].username &&
            this.input.password == this.$store.state.users[index].password
          ) {
            this.$store.state.myuser = index + 1;
            this.$store.commit("setAuthenticated", true);
            this.$router.replace({ name: "user" });
          } else {
            alert("The username or password is not correct");
          }
        }
      } else {
        alert("Please fill out");
      }
    },
  },
};
</script>

<style scoped>
.container {
  height: 420px;
  width: 350px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 2px 2px 8px 4px rgba(0, 0, 0, 0.1);
  margin: auto;
  margin-top: 150px;
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

.sign-up {
  margin-top: 80px;
  font-size: 12px;
  font-weight: 100;
  text-align: center;
}

a {
  color: #2c3e50;
}
</style>
