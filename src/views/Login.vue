<template>
  <h1 class="title">Login</h1>
  <div class="form-container">
    <form action="" class="login-form">
      <input type="email" name="email" id="" placeholder="email" class="in" />
      <input
        type="password"
        name="password"
        id=""
        placeholder="password"
        class="in"
      />
      <input type="submit" value="login" class="login-btn" />
      <p class="login-txt">do not have an account? <router-link to="/signup" class="link">signup</router-link></p>
    </form>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { navbarState } from "@/services/navbar";

export default class Login extends Vue {
  mounted() {
    console.log("mounted");
    navbarState.changeAuth(false);
    navbarState.changeTitle(" - Login");
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.title {
  margin-top: 15px;
  font-weight: 500;
  margin-bottom: 20px;
}

.form-container {
  width: 40%;
  margin: 0 auto;
}
.signup-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.in {
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  padding-left: 10px;
  box-shadow: inset 0px 1px 8px rgba(59, 40, 40, 0.2);
  border: 1px solid transparent;
  color: $gray;
  font-size: 16px;
  background-color: #d1edf559;
  &:focus {
    background-color: #143ca00e;
    box-shadow: inset 0px 1px 8px rgba(41, 43, 151, 0.541);
  }
}
.login-btn {
  text-transform: uppercase;
  width: 35%;
  border-radius: 20px;
  border: none;
  padding: 8px 0;
  background-color: $blue;
  color: white;
  font-weight: 600;
  margin-top: 15px;
  margin-bottom: 15px;
  cursor: pointer;
  &:hover {
    background-color: $slightBlue;
  }
}
</style>