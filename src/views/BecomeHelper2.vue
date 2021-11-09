<template>
    <div class="become-helper-page">
      <div class="page form-page">
        <div class="form-container">
          <h2 class="title">personal information</h2>
          <form action="" class="helper-form">
            <div class="form-floating">
  <input type="text" class="form-control" id="floatingInput">
  <label for="floatingInput">final education level</label>
</div>
<div class="form-floating">
  <input type="text" class="form-control" id="floatingInputJob">
  <label for="floatingInputJob">current job position</label>
</div>
<div class="form-floating">
  <textarea class="form-control" placeholder="" id="floatingTextarea2" style="height: 100px"></textarea>
  <label for="floatingTextarea2">brief summary on your education and professional life</label>
</div>
<div class="form-floating">
  <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
    <option selected>Select Job category</option>
    <option value="1">engineer</option>
    <option value="1">driver</option>
    <option value="1">washer</option>
    <option value="1">cleaner</option>
    <option value="1">electrician</option>
  </select>
  <label for="floatingSelect">Choose job category</label>
</div>
<div class="form-floating">
  <select class="form-select" id="floatingSelectLanguage1" aria-label="Floating label select example">
    <option selected>Select Primary Language</option>
    <option value="1">english</option>
    <option value="1">french</option>
  </select>
  <label for="floatingSelectLanguage1">Primary language</label>
</div>
<div class="form-floating">
  <select class="form-select" id="floatingSelectLanguage2" aria-label="Floating label select example">
    <option selected>Select Secondary Language</option>
    <option value="1">english</option>
    <option value="1">french</option>
  </select>
  <label for="floatingSelectLanguage2">Secondary language</label>
</div>

<button @click="nextPage()" class="save-btn">Save</button>
          </form>
        </div>
      </div>
      <div class="page timeline-page flex-center">
        <div class="timeline-container flex-center">
          <div class="step-box step_1 flex-center"><h4 class="step-count"><i class="fas fa-check"></i></h4></div>
          <div class="line-box"></div>
          <div class="step-box step_2 flex-center"><h4 class="step-count">2</h4></div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { navbarState } from '@/services/navbar';
import { defineComponent } from 'vue'

export default defineComponent({
    mounted() {
    navbarState.changeTitle(" - Become a Helper");
    navbarState.changeAuth(false);
    // this.getHelpers();
  },
    setup() {
        
    },
    methods: {
      async nextPage() {
        console.log('navigating');
       let page = await this.$router.resolve('/become-helper-final');
      //  this.$router.push(page.fullPath);
      console.log(page);
      }
    }
})
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.become-helper-page {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.page {
  margin-top: 20px;
}

.form-page {
  width: 60%;
}

.form-container {
  width: 100%;
  .title {
    font-size: 25px;
    font-weight: 500;
    text-align: left;
    margin-bottom: 20px;
    text-transform: capitalize;
  }
}

.helper-form {
  display: flex;
  flex-direction: column;
  .form-floating {
    margin-bottom: 10px;
  }

  .save-btn {
    align-self: center;
    width: 200px;
    padding: 5px 0;
    background-color: $blue;
    border-radius: 20px;
    color: white;
    font-weight: 500;
    margin-bottom: 20px;
  }
}

.timeline-page {
  width: 38%;
}

.timeline-container {
  width: 100%;
  flex-direction: column;

  .step-box {
    width: 60px;
    height: 60px;
    border: 6px solid $blue;
    .step-count {
      margin: 0;
      padding: 0;
      font-weight: 600;
      color: $blue;
    }
  }
  .line-box {
    width: 6px;
    height: 100px;
    background-color: $blue;
  }
  .step_1 {
    // background-color: $blue;
    .step-count {
      color: $blue;
      font-size: 35px;
    }
  }
  .step_2{
    background-color: $blue;
    .step-count {
      color: white;
      font-size: 30px;
      font-weight: 600;
    }
  }
}
</style>
