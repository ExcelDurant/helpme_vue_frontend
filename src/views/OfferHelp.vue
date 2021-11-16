<template>
 <div class="filters-container">
    <div class="filter-txt-container">
      <h3 class="filter">filter by:</h3>
    </div>
    <div class="category-select-container">
      <select class="form-select category-select select" aria-label="Default select example">
        <option selected>select category</option>
        <option value="1">driver</option>
        <option value="2">dress washer</option>
        <option value="3">engineer</option>
        <option value="3">electrician</option>
        <option value="3">engineer</option>
        <option value="3">engineer</option>
      </select>
    </div>
    <div class="location-select-container">
      <select class="form-select location-select select" aria-label="Default select example">
        <option selected>select location</option>
        <option value="1">Douala</option>
        <option value="2">Yaounde</option>
        <option value="3">Bafoussam</option>
        <option value="3">Bamenda</option>
        <option value="3">Buea</option>
        <option value="3">Kribi</option>
      </select>
    </div>
  </div>
    <section class="tasks-sec">
      <basic-loader v-if="showLoader"></basic-loader>
        <div class="tasks-container">
            <task-card v-for="task in tasks" :key="task._id" :task="task"></task-card>
        </div>
    </section>
</template>

<script lang="ts">
import { navbarState } from '@/services/navbar';
import { defineComponent, toRefs } from 'vue';
import TaskCard from '@/components/TaskCard.vue';
import { userState } from '@/services/user';
import { tokenState } from '@/services/token';
import { Task } from '../../interfaces/task.interface';
import BasicLoader from "@/components/BasicLoader.vue";

export default defineComponent({
    components: {TaskCard,BasicLoader},
    mounted() {
    navbarState.changeTitle(" - Offer Help");
    navbarState.changeAuth(false);
    this.getTasks();
  },
    setup() {
      let { user } = toRefs(userState.state);
      return {
          user
      }
  },
  data() {
        return {
            tokenState:tokenState.state,
            showLoader:false,
            tasks:[] as Task[]
        }
    },
  methods: {
    getTasks() {
            this.showLoader = true;
      const requestOptions = {
        method: "GET",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${this.tokenState.token}`
         },
      };
      fetch("https://pure-archive-330723.uc.r.appspot.com/tasks/retrieve", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (data.statusCode > 299) {
            this.showLoader = false;
            window.alert("wrong credentials");
            console.log(data)
          } else {
            this.showLoader = false;
            this.tasks = data;
            console.log(data);
          }
        })
        .catch((err) => {
          this.showLoader = false;
          console.error(err);
        });
    },
    },
  },
)
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.filters-container {
  width: 90%;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.filter-txt-container {
  .filter {
    font-weight: 300;
    font-size: 15px;
  }
}

.select {
  width: 100%;
    border-radius: 15px;
    box-shadow: 0px 4px 8px 1px rgb(221, 221, 221);
}
.category-select-container {
  width: 350px;
  .category-select {
    width: 100%;
    border-radius: 15px;
  }
}

.location-select-container {
  width: 200px;
  .location-select {
    width: 100%;
    border-radius: 15px;
  }
} 

.tasks-sec {
    width: 90%;
    margin: 0 auto;
}

.tasks-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}

@include mqx(800px) {
.tasks-container {
    align-items: center;
}
}
</style>
