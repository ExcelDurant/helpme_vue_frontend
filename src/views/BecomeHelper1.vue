<template>
  <div class="become-helper-page">
    <div class="page form-page">
      <basic-loader v-if="showLoader"></basic-loader>
      <div class="form-container">
        <h2 class="title">personal information</h2>
        <form action="" class="helper-form" @submit.prevent="nextPage()">
          <div class="form-floating mb-3">
            <input
              type="date"
              class="form-control"
              id="floatingInput"
              v-model="user.birthday"
              required
            />
            <label for="floatingInput">date of birth</label>
          </div>
          <div class="form-floating">
            <select
              class="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
              v-model="user.country"
              required
            >
              <option selected>Select Country</option>
              <option value="Cameroon">Cameroon</option>
            </select>
            <label for="floatingSelect">Country</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInputCity"
              placeholder="Douala"
              v-model="user.city"
              required
            />
            <label for="floatingInputCity">City</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInputStreet"
              placeholder="Logpom"
              v-model="user.street"
              required
            />
            <label for="floatingInputStreet">Street</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="tel"
              class="form-control"
              id="floatingInputSecondPhone"
              placeholder="656000000"
              v-model="user.sec_phone_number"
            />
            <label for="floatingInputSecondPhone">Second Phone Number</label>
          </div>
          <button class="save-btn">Save & Continue</button>
        </form>
      </div>
    </div>
    <div class="page timeline-page flex-center">
      <div class="timeline-container flex-center">
        <div class="step-box step_1 flex-center">
          <h4 class="step-count">1</h4>
        </div>
        <div class="line-box"></div>
        <div class="step-box step_2 flex-center">
          <h4 class="step-count">2</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { navbarState } from "@/services/navbar";
import { userState } from "@/services/user";
import { defineComponent, toRefs } from "vue";
import BasicLoader from "@/components/BasicLoader.vue";
import { tokenState } from "@/services/token";

export default defineComponent({
  components: { BasicLoader },
  mounted() {
    navbarState.changeTitle(" - Become a Helper");
    navbarState.changeAuth(false);
    // this.getHelpers();
  },
  setup() {
    let { user } = toRefs(userState.state);
    return {
      user,
    };
  },
  data() {
    return {
      showLoader: false,
      tokenState: tokenState.state,
    };
  },
  methods: {
    nextPage() {
      this.showLoader = true;
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.tokenState.token}`,
        },
        body: JSON.stringify(this.user),
      };
      fetch(
        "https://pure-archive-330723.uc.r.appspot.com/users/update/profile",
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          this.showLoader = false;
          console.log(data);
          userState.setUser(data);
          this.$router.push("/become-helper-final");
        })
        .catch((err) => {
          this.showLoader = false;
          console.error(err);
        });
    },
  },
});
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
    background-color: $blue;
    .step-count {
      color: white;
    }
  }
}

@include mqx(900px) {
  .become-helper-page {
    width: 95%;
  }
  .form-page {
    width: 100%;
  }
  .timeline-page {
    display: none;
  }
}
</style>
