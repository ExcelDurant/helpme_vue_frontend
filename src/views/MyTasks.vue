<template>
<basic-loader v-if="showLoader"></basic-loader>
    <section class="tasks-sec"> 
        <div v-if="!showLoader" class="tasks-container">
            <my-task v-for="task in myTasks" :key="task.id" :task="task"></my-task>
        </div>
    </section>
</template>

<script lang="ts">
import { navbarState } from '@/services/navbar';
import { defineComponent } from 'vue'
import MyTask from '@/components/MyTask.vue';
import { tokenState } from '@/services/token';
import BasicLoader from "@/components/BasicLoader.vue";
import { Task } from '../../interfaces/task.interface';

export default defineComponent({
    components: { MyTask,BasicLoader },
     mounted() {
    navbarState.changeTitle(" - My Tasks");
    navbarState.changeAuth(false);
    this.getTasks();
  },
    setup() {
        
    },
    data() {
        return {
            tokenState:tokenState.state,
            showLoader:false,
            myTasks:[] as Task[]
        }
    },
    methods:{
        getTasks() {
            this.showLoader = true;
      const requestOptions = {
        method: "GET",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${this.tokenState.token}`
         },
      };
      fetch("https://pure-archive-330723.uc.r.appspot.com/tasks/mine", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (data.statusCode > 299) {
            this.showLoader = false;
            window.alert("wrong credentials");
            console.log(data)
          } else {
            this.showLoader = false;
            this.myTasks = data;
            console.log(data);
          }
        })
        .catch((err) => {
          this.showLoader = false;
          console.error(err);
        });
    },
    }
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
