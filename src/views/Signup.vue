<template>
  <h1 class="title">Registration</h1>
  <div class="form-container">
    <form action="" class="signup-form">
      <input
        type="text"
        name="first_name"
        id=""
        placeholder="first name"
        class="in"
        required
      />
      <input
        type="text"
        name="last_name"
        id=""
        placeholder="last name"
        class="in"
      />
      <input type="email" name="email" id="" placeholder="email" class="in" />
      <input
        type="tel"
        name="phone"
        id=""
        placeholder="phone number"
        class="in"
        required
      />
      <input
        type="password"
        name="password"
        id=""
        placeholder="password"
        class="in"
        required
      />
      <input
        type="password"
        name="confirm_password"
        id=""
        placeholder="confirm password"
        class="in"
        required
      />
      <div class="profile-in-container">
        <div class="profile-img-container flex-center">
            <i class="fas fa-user-alt"></i>
        </div>
        <div class="in-button-container">
          <h4 class="in-title">Add a profile picture</h4>
          <label class="custom-file-upload">
            <input type="file" accept="image/*" />
            <p class="txt">choose file</p>
          </label>
        </div>
      </div>
      <input type="submit" value="register" class="signup-btn">
      <p class="login-txt">already have an account? <router-link to="/login" class="link">login</router-link> instead</p>
    </form>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { navbarState } from "@/services/navbar";

export default class Signup extends Vue {
  mounted() {
    navbarState.changeAuth(false);
    navbarState.changeTitle(" - Sign Up");
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
.profile-in-container {
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  .profile-img-container {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 1px solid gray;
    margin-right: 10px;
    i {
        font-size: 50px;
        color: $gray;
    }
  }
  input[type="file"] {
    display: none;
}
.in-button-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.custom-file-upload {
    display: inline-block;
    padding: 4px 10px;
    background-color: $lightGray;
    border-radius: 5px;
    cursor: pointer;
    .txt {
        color: $blue;
        font-size: 13px;
    }
}
}

.signup-btn {
    text-transform: uppercase;
    width: 35%;
    border-radius: 20px;
    border: none;
    padding: 8px 0;
    background-color: $blue;
    color: white;
    font-weight: 600;
    margin-bottom: 5px;
    cursor: pointer;
    &:hover {
        background-color: $slightBlue;
    }
}
.login-txt {
    margin-bottom: 5px;
}
</style>