<template>
  <h1 class="title">Registration</h1>
  <basic-loader v-if="showLoader"></basic-loader>
  <div class="form-container">
    <form action="" class="signup-form" @submit.prevent="signup">
      <input
        type="text"
        name="first_name"
        id=""
        placeholder="first name"
        class="in"
        v-model="first_name"
        required
      />
      <input
        type="text"
        name="last_name"
        id=""
        placeholder="last name"
        v-model="last_name"
        class="in"
      />
      <input
        type="email"
        name="email"
        id=""
        placeholder="email"
        class="in"
        v-model="email"
        required
      />
      <input
        type="tel"
        name="phone"
        id=""
        placeholder="phone number"
        class="in"
        v-model="phone_number"
        required
      />
      <input
        type="password"
        name="password"
        id=""
        placeholder="password"
        class="in"
        v-model="password"
        required
      />
      <input
        type="password"
        name="confirm_password"
        id=""
        placeholder="confirm password"
        class="in"
        v-model="confirm_password"
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
      <input type="submit" value="register" class="signup-btn" />
      <p class="login-txt">
        already have an account?
        <router-link to="/login" class="link">login</router-link> instead
      </p>
    </form>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { defineComponent } from "vue";
import { navbarState } from "@/services/navbar";
import { userState } from "@/services/user";
import {tokenState } from "@/services/token";
import BasicLoader from "@/components/BasicLoader.vue";

export default defineComponent({
  components:{BasicLoader},
  mounted() {
    navbarState.changeAuth(false);
    navbarState.changeTitle(" - Sign Up");
  },

  data() {
    return {
      first_name: "Excel",
      last_name: "",
      email: "",
      phone_number: "",
      password: "",
      confirm_password: "",
      showLoader:false
    };
  },
  methods: {
    signup() {
      if(this.confirm_password == this.password) {
        this.showLoader = true;
        const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          phone_number: this.phone_number,
          password: this.password,
          confirm_password: this.confirm_password,
        }),
      };
      fetch("https://pure-archive-330723.uc.r.appspot.com/auth/signup", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          this.showLoader = false;
          userState.setUser(data.user);
          userState.setAuth(true);
          tokenState.setToken(data.access_token);
          this.$router.push('/welcome');
        })
        .catch((err) => {
          this.showLoader = false;
          console.error(err);
        })
      } else {
        window.alert('passwords do not match')
      }
      
    },
  },
});
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

@include mqx(800px) {
   .form-container {
     width: 90%;
   }
}
</style>