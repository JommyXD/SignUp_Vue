<template>
  <div>
    <organism-login></organism-login>
  </div>
</template>
<script>
import OrganismLogin from "@/components/organisms/OrganismLogin.vue";

export default {
  components: { OrganismLogin },
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
