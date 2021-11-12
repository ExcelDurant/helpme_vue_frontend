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
      <form action="" class="task-form" @submit.prevent="createTask">
        <label for="name">task name</label>
        <input
          type="text"
          name="name"
          id=""
          class="in name-in"
          placeholder="Repair my television"
          v-model="name"
          required
        />
        <label for="description">description</label>
        <textarea
          type="text"
          name="description"
          id=""
          class="in desc-in"
          placeholder="describe your task here..."
          v-model="description"
          required
        ></textarea>
        <label for="category">select task category</label>
        <select
          class="form-select category-select select"
          name="category"
          aria-label="Default select example"
          v-model="category[0]"
          required
        >
          <option selected>engineer</option>
          <option value="driver">driver</option>
          <option value="dress washer">dress washer</option>
          <option value="engineer">engineer</option>
          <option value="electrician">electrician</option>
          <option value="engineer">engineer</option>
        </select>
        <div class="add-label-container">
          <label for="country">Address</label>
          <button @click="findCoordinates" class="locate-btn">locate me<i class="fas fa-location-arrow"></i
          ></button>
          <div v-if="mapLoader" class="lds-hourglass"></div>
        </div>
        <input
          type="text"
          name="country"
          id=""
          class="in country-in"
          placeholder="Country"
          v-model="address.country"
          required
        />
        <input
          type="text"
          name="city"
          id=""
          class="in city-in"
          placeholder="City"
          v-model="address.city"
          required
        />
        <input
          type="text"
          name="street"
          id=""
          class="in street-in"
          placeholder="Street"
          v-model="address.street"
          required
        />
        <div v-if="showCoords" class="input-group in">
          <input
            type="text"
            class="form-control in"
            name="coordinates"
            placeholder="Coordinates"
            aria-label="Coordinates"
            aria-describedby="basic-addon2"
            :value="'latitude: '+location.latitude + ', longitude: '+ location.longitude"
            readonly
          />
        </div>
        <label for="datetime">date and time</label>
        <input
          type="datetime-local"
          name="datetime"
          id=""
          class="in date-in"
          title="this task should be done on"
          v-model="start_date"
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
            v-model="reward"
            required
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
import { tokenState } from "@/services/token";
import { defineComponent } from "vue";

export default defineComponent({
  mounted() {
    navbarState.changeTitle(" - Create a task");
    navbarState.changeAuth(false);
    // this.getHelpers();
  },
  setup() {},
  data() {
      return {
        mapLoader:false,
        showCoords:false,
        name:'',
        description:'',
        category:[],
        start_date:'',
        reward:0,
          location: {
              latitude:0,
              longitude:0
          },
          address: {
            city:'',
          street:'',
          country:'',
          },
          pictures:[
            "https://images.unsplash.com/photo-1634227555537-dfedab448cf3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=492&q=80",
            "https://images.unsplash.com/photo-1614356192561-8f97735e56fb?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8Ul9GeW4tR3d0bHd8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1616971348557-9ea6dcc14a4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80",
            "https://images.unsplash.com/photo-1616971485739-595f5a46f299?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80"
          ],
          tokenState:tokenState.state
      }
  },
  methods: {
    findCoordinates() {
      this.mapLoader = true;
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
      }
    },
    showPosition(position:any) {
        this.location.latitude = position.coords.latitude;
        this.location.longitude = position.coords.longitude;
        this.locateTask(position.coords.latitude, position.coords.longitude);
    },
    locateTask(latitude:string, longitude:string) {
      const requestOptions = {
        method: "GET",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${this.tokenState.token}`
         },
        // body: JSON.stringify({
        //   email: this.email,
        //   password: this.password,
        // }),
      };
      fetch("https://pure-archive-330723.uc.r.appspot.com/tasks/locate?"+ new URLSearchParams([['latitude', `${latitude}`], ['longitude', `${longitude}`]]), requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (data.statusCode > 299) {
            this.mapLoader = false;
            window.alert("wrong credentials");
            console.log(data)
          } else {
            this.mapLoader = false;
            this.showCoords = true;
           this.address.street = data.street;
           this.address.country = data.country;
           this.address.city = data.city;
            console.log(data);
          }
        })
        .catch((err) => {
          this.mapLoader = false;
          console.error(err);
        });
    },
    createTask() {
      const requestOptions = {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${this.tokenState.token}`
         },
        body: JSON.stringify({
          name:this.name,
          description:this.description,
          category:this.category,
          address:this.address,
          location:this.location,
          start_date:this.start_date,
          reward:this.reward,
          pictures:this.pictures
        }),
      };
      fetch("https://pure-archive-330723.uc.r.appspot.com/tasks/create", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (data.statusCode > 299) {
            this.mapLoader = false;
            window.alert("wrong credentials");
            console.log(data)
          } else {
            this.mapLoader = false;
            this.$router.push("/my-tasks")
            console.log(data);
          }
        })
        .catch((err) => {
          this.mapLoader = false;
          console.error(err);
          window.alert("something happened");
        });
    }
  },
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

  .add-label-container {
    display: flex;
    align-items: center;
      .locate-btn {
    margin-left: 10px;
    background-color: $blue;
    color: white;
    font-size: 12px;
    border-radius: 10px;
    padding: 3px 10px;
    i {
      margin-left: 5px;
    }
  }
.lds-hourglass {
  display: inline-block;
  position: relative;
  width: 30px;
  height: 30px;
  margin-bottom: -4px;
  margin-left: 10px;
}
.lds-hourglass:after {
  content: " ";
  display: inline-block;
  border-radius: 50%;
  width: 0;
  height: 0;
  margin: 0px;
  box-sizing: border-box;
  border: 12px solid $blue;
  border-color: $blue transparent $blue transparent;
  animation: lds-hourglass 1.2s infinite;
}
@keyframes lds-hourglass {
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
}
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
