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
        <div class="tasks-container">
            <task-card></task-card>
        </div>
    </section>
</template>

<script lang="ts">
import { navbarState } from '@/services/navbar';
import { defineComponent } from 'vue';
import TaskCard from '@/components/TaskCard.vue';

export default defineComponent({
    components: {TaskCard},
    mounted() {
    navbarState.changeTitle(" - Offer Help");
    navbarState.changeAuth(false);
    // this.getHelpers();
  },
    setup() {
        
    },
})
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

.language-select-container {
  width: 200px;
}
</style>
