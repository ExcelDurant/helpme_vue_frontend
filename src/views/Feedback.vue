<template>
    <div class="feedback-page">
      <div class="feedback-container">
        <h2 class="title">Give Feedback/Review</h2>
        <p class="txt">
          Your task has been successfully completed. Leave a review about the helper and the workdone
        </p>
        <div class="stars-container">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
        <div class="form-container">
          <form action="" class="feedback-form">
            <div class="form-floating">
  <textarea class="form-control" placeholder="Leave a review here" id="floatingTextarea2" style="height: 200px"></textarea>
  <label for="floatingTextarea2">Review</label>
</div>
<button type="submit" class="submit-btn">Give Feedback</button>
          </form>
        </div>
      </div>
    </div>
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

.feedback-container {
  width: 600px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
}

.stars-container {
  margin-bottom: 20px;
  i {
    color: $yellow;
    font-size: 25px;
    margin-right: 10px;
  }
}

.form-floating {
  margin-bottom: 20px;
}

.submit-btn {
  padding: 5px 20px;
  background-color: $blue;
  color: white;
  font-size: 15px;
  font-weight: 600;
  border-radius: 10px;
}
</style>