<template>
    <h1>give a feedback</h1>
</template>

<script lang="ts">
import { navbarState } from '@/services/navbar';
import { defineComponent } from 'vue'

export default defineComponent({
    mounted() {
    navbarState.changeTitle(" - Give a feedback");
    navbarState.changeAuth(false);
    // this.getHelpers();
  },
    setup() {
        
    },
})
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

</style>