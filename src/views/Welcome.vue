<template>
  <div class="welcome-page">
    <section class="top-sec">
      <div class="top-row">
        <div class="img-sec">
          <div class="profile-img-container no-overflow">
            <img :src="user.photoUrl" alt="" class="full-img">
          </div>
        </div>
        <div class="basic-info-container">
          <h2 class="username">{{user.first_name}} {{user.last_name}}</h2>
          <h4 class="email">{{user.email}}</h4>
          <div class="upload-img-container flex-center">
            <label class="custom-file-upload flex-center">
            <input type="file" accept="image/*" />
            <p class="txt">upload profile image</p>
          </label>
          </div>
        </div>
      </div>
    </section>
    <section class="info-sec">
      <h3 class="title">Account</h3>
      <div class="info-container">
        <div class="info-row">
          <h5 class="label">first name</h5>
          <input type="text" name="" id="" class="info-in" v-model="user.first_name">
        </div>
        <div class="info-row">
          <h5 class="label">last name</h5>
          <input type="text" name="" id="" class="info-in" v-model="user.last_name">
        </div>
        <div class="info-row">
          <h5 class="label">email</h5>
          <input type="email" name="" id="" class="info-in" v-model="user.email">
        </div>
        <div class="info-row">
          <h5 class="label">status</h5>
          <input v-if="user.is_helper" type="text" name="" id="" value="Helper" class="status-in" readonly>
          <input v-if="!user.is_helper" type="text" name="" id="" value="User" class="status-in" readonly>
        </div>
        <div class="info-row">
          <h5 class="label">phone number</h5>
          <input type="tel" name="" id="" class="info-in" v-model="user.phone_number">
        </div>
        <div class="info-row">
          <h5 class="label">secondary phone number</h5>
          <input type="tel" name="" id="" class="info-in" v-model="user.sec_phone_number">
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { navbarState } from "@/services/navbar";
import { tokenState } from "@/services/token";
import { userState } from "@/services/user";
import { User } from "interfaces/user.interface";
import { defineComponent, toRefs } from "vue";

export default defineComponent({
  mounted() {
    navbarState.changeAuth(false);
    navbarState.changeTitle(" - Profile");
    this.getUser();
  },

  setup() {
      let { user } = toRefs(userState.state);
      return {
          user
      }
  },

  data() {
    return {
    //   user: toRefs(userState.state.user),
    };
  },
  methods: {
    async getUser() {
      await userState.fetchUser();
      if(!this.user.is_helper) {
        window.alert("you are not a helper")
    }
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.top-sec {
  width: 90%;
  margin: 20px auto;
  margin-bottom: 40px;
}

.top-row {
  width: 100%;
  display: flex;

  .img-sec {
    width: 300px;
    .profile-img-container {
      width: 300px;
      height: 300px;
      border-radius: 50%;
    }
  }

  .basic-info-container {
    margin-left: 100px;
    text-align: left;

    .username {
      font-size: 40px;
      font-weight: 300;
    }

    .email {
      font-size: 20px;
      font-weight: 200;
      color: $slightBlue;
      margin-bottom: 20px;
    }

    .upload-img-container {
      display: inline-block;
      border: 1px dashed black;
      .custom-file-upload {
        padding: 8px 15px;
        cursor: pointer;
        text-align: center;
      }
    }
  }
}

.info-sec {
  width: 90%;
  margin: 0 auto;
  margin-bottom: 20px;
  .title {
    text-align: left;
    margin-bottom: 10px;
  }
}
.info-container {
  width: 100%;
  .info-row {
    width: 80%;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    text-align: left;
    .label {
      color: $gray;
      font-weight: 400;
      font-size: 18px;
    }
    .info-in {
      padding: 5px 5px;
      width: 60%;
      color: rgb(63, 63, 63);
    }
    .status-in {
      border: none;
      color: $blue;
      width: 60%;
    }
  }
}
</style>

