<template>
  <h1>welcome new user {{ user.first_name }}</h1>
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

</style>

