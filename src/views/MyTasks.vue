<template>
    <section class="tasks-sec">
        <div class="tasks-container">
            <my-task></my-task>
            <my-task></my-task>
            <my-task></my-task>
            <my-task></my-task>
        </div>
    </section>
</template>

<script lang="ts">
import { navbarState } from '@/services/navbar';
import { defineComponent } from 'vue'
import MyTask from '@/components/MyTask.vue';

export default defineComponent({
    components: { MyTask },
     mounted() {
    navbarState.changeTitle(" - My Tasks");
    navbarState.changeAuth(false);
    // this.getHelpers();
  },
    setup() {
        
    },
})
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
.tasks-sec {
    width: 100%;
}
.tasks-container {
    width: 90%;
    margin: 20px auto;
}
</style>
