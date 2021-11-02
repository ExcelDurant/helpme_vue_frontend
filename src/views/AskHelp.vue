<template>
    <div>
        <h1>find a helper</h1>
        <div v-for="helper in helpers" :key="helper._id" class="helper-card">
            <div class="profile-img-container"><img :src="helper.photoUrl" alt="" srcset="" class="full-img"></div>
            <h5>first name: {{ helper.first_name }}</h5>
            <h5>last name: {{ helper.last_name }}</h5>
            <h5>email: {{ helper.email }}</h5>
            <h5>street: {{ helper.street }}</h5>
            <h5>city: {{ helper.city }}</h5>
            <h5>country: {{ helper.country }}</h5>
        </div>
    </div>
</template>

<script lang="ts">
import { navbarState } from '@/services/navbar';
import { User } from 'interfaces/user.interface';
import { defineComponent } from 'vue'

export default defineComponent({
    mounted() {
    navbarState.changeTitle(" - Find a Helper");
    this.getHelpers();
  },
    setup() {
        
    },
    data() {
        return {
            helpers:[] as User[]
        }
    },
    methods:{
        getHelpers() {
            const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };
      fetch("http://localhost:3000/users/helpers", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (data.statusCode > 299) {
            window.alert("wrong credentials");
            console.log(data)
          } else {
              this.helpers = data;
            console.log(data);
          }
        })
        .catch((err) => {
          console.error(err);
        });
        }
    }
})
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.helper-card {
    box-shadow: 2px 2px 2px 2px gray;
    margin-bottom: 20px;

    .profile-img-container {
        width: 100px;
        height: 100px;
        margin: 0 auto;
    }
}
</style>
