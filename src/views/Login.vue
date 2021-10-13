<template>
    <h1>Login page</h1>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import{ navbarState }from "@/store/modules/navbar"

export default class Login extends Vue {
    mounted() {
        console.log('mounted');
        navbarState.changeAuth(false);
        navbarState.changeTitle(' - Login');
    }

}
</script>