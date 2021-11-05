<template>
  <section class="procedure-sec">
    <div class="procedures-container">
      <div class="procedure-container">
        <div class="icon-container flex-center">
          <i class="fas fa-clipboard-list"></i>
        </div>
        <h3 class="title">Fill out an application</h3>
        <p class="detail">
          enter the details related to your task. Be as precise as possible
        </p>
      </div>
      <i class="fas fa-arrow-right"></i>
      <div class="procedure-container">
        <div class="icon-container flex-center">
          <i class="fas fa-briefcase"></i>
        </div>
        <h3 class="title">Get offers</h3>
        <p class="detail">
          helpers from around with required skills will be able to see you task
          and offer their help
        </p>
      </div>
      <i class="fas fa-arrow-right"></i>
      <div class="procedure-container">
        <div class="icon-container flex-center">
          <i class="fas fa-handshake"></i>
        </div>
        <h3 class="title">Choose a Helper</h3>
        <p class="detail">
          choose from the multiple helpers postulating for your task
        </p>
      </div>
    </div>
  </section>
  <section class="form-sec">
    <div class="form-container">
      <h2 class="title">Create a new task</h2>
      <form action="" class="task-form">
        <label for="name">task name</label>
        <input
          type="text"
          name="name"
          id=""
          class="in name-in"
          placeholder="Repair my television"
          required
        />
        <label for="description">description</label>
        <textarea
          type="text"
          name="description"
          id=""
          class="in desc-in"
          placeholder="describe your task here..."
          required
        ></textarea>
        <label for="category">select task category</label>
        <select
          class="form-select category-select select"
          name="category"
          aria-label="Default select example"
          required
        >
          <option selected>engineer</option>
          <option value="1">driver</option>
          <option value="2">dress washer</option>
          <option value="3">engineer</option>
          <option value="4">electrician</option>
          <option value="5">engineer</option>
        </select>
        <label for="country">address</label>
        <input
          type="text"
          name="country"
          id=""
          class="in country-in"
          placeholder="Country"
          value="Cameroon"
          required
        />
        <input
          type="text"
          name="city"
          id=""
          class="in city-in"
          placeholder="City"
          required
        />
        <input
          type="text"
          name="street"
          id=""
          class="in street-in"
          placeholder="Street"
          required
        />
        <div class="input-group in">
          <input
            type="text"
            class="form-control in"
            name="coordinates"
            placeholder="Coordinates"
            aria-label="Coordinates"
            aria-describedby="basic-addon2"
            readonly
          />
          <span class="input-group-text" id="basic-addon2"
            >locate me<i class="fas fa-location-arrow"></i
          ></span>
        </div>
        <label for="datetime">date and time</label>
        <input
          type="datetime-local"
          name="datetime"
          id=""
          class="in date-in"
          title="this task should be done on"
        />
        <label for="reward">reward</label>
        <div class="input-group in">
          <input
            type="text"
            class="form-control in"
            name="reward"
            placeholder="20000"
            aria-label="reward"
            aria-describedby="basic-addon3"
          />
          <span class="input-group-text" id="basic-addon3">FCFA</span>
        </div>
        <div class="task-in-container">
          <!-- <div class="task-img-container flex-center">
            <i class="fas fa-file-upload"></i>
          </div> -->
          <div class="in-button-container">
            <h4 class="in-title">Add pictures</h4>
            <label class="custom-file-upload">
              <input type="file" accept="image/*" multiple />
              <p class="txt">choose files</p>
            </label>
          </div>
        </div>
        <button type="submit" class="submit-btn">Create Task</button>
      </form>
    </div>
  </section>
</template>

<script lang="ts">
import { navbarState } from "@/services/navbar";
import { defineComponent } from "vue";

export default defineComponent({
  mounted() {
    navbarState.changeTitle(" - Create a task");
    navbarState.changeAuth(false);
    // this.getHelpers();
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.procedure-sec {
  width: 80%;
  margin: 0 auto;
}

.procedures-container {
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  i {
    color: black;
    font-size: 25px;
  }
}

.procedure-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  height: 165px;

  .icon-container {
    width: 50px;
    height: 50px;
    background-color: $blue;
    border-radius: 50%;
    margin-bottom: 10px;
    i {
      font-size: 25px;
      color: white;
    }
  }
  .title {
    font-size: 18px;
  }
  .detail {
    font-size: 12px;
    font-weight: 300;
    color: $gray;
  }
}

.form-sec {
  width: 100%;
}

.form-container {
  width: 50%;
  text-align: left;
  margin: 30px auto;
  .title {
    font-size: 25px;
    margin-bottom: 20px;
  }
}

.task-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  label {
    margin-bottom: 8px;
  }
  .in,
  select {
    margin-bottom: 15px;
    background-color: #d1edf598;
  }
  .in {
    height: 40px;
    border: none;
    padding-left: 5px;
  }
  .desc-in {
    height: 80px;
  }
  #basic-addon2 {
    background-color: $blue;
    color: white;
    cursor: pointer;
    font-weight: 600;
    height: 70%;
    margin-top: 5px;
    border-radius: 10px;
    margin-right: 5px;
    font-size: 12px;
    i {
      color: white;
      margin-left: 8px;
      font-size: 12px;
    }
  }
  #basic-addon3 {
    background-color: #d1edf598;
    border: none;
    height: 100%;
  }

  .task-in-container {
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    .task-img-container {
      width: 100px;
      height: 100px;
      border: 1px solid gray;
      margin-right: 10px;
      i {
        font-size: 50px;
        color: $gray;
      }
    }
    input[type="file"] {
      display: none;
    }
    .in-button-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .custom-file-upload {
      display: inline-block;
      height: 40px;
      padding: 8px 10px;
      background-color: $lightGray;
      border-radius: 5px;
      cursor: pointer;
      .txt {
        color: $blue;
        font-size: 13px;
      }
    }
  }
    .submit-btn {
      background-color: $blue;
      border: none;
      border-radius: 8px;
      color: white;
      padding: 5px 0;
      width: 180px;
      align-self: center;
  }
}
</style>
