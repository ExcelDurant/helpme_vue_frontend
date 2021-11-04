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
    <div class="language-select-container">
      <select class="form-select language-select select" aria-label="Default select example">
        <option selected>select language</option>
        <option value="1">English</option>
        <option value="2">French</option>
      </select>
    </div>
  </div>
  <section class="helpers-sec">
    <h2 class="title">helpers found:</h2>
    <div class="helpers-container">
      <div class="helper-card">
        <div class="img-container">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVLqfekg_kitC_QJ5kgBUTh2tt5EIcxEnQDQ&usqp=CAU" alt="" class="full-img">
        </div>
        <div class="info-container">
          <h4 class="name">John Doe</h4>
          <h6 class="reviews"><i class="fas fa-star"></i>4.1/5 (20 reviews)</h6>
          <h5 class="location"><i class="fas fa-map-marker"></i>Logpom, Douala, Cameroon</h5>
          <h5 class="lang"><i class="fas fa-language"></i>English, French</h5>
          <a href="#" class="details">view details</a>
        </div>
        <div class="actions-container">
          <div class="verified-container">
            <h6 class="verified-txt"><i class="fas fa-check-circle"></i>verified</h6>
          </div>
          <button class="select-btn">
            select helper
          </button>

        </div>
      </div>
       <div class="helper-card">
        <div class="img-container">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVLqfekg_kitC_QJ5kgBUTh2tt5EIcxEnQDQ&usqp=CAU" alt="" class="full-img">
        </div>
        <div class="info-container">
          <h4 class="name">John Doe</h4>
          <h6 class="reviews"><i class="fas fa-star"></i>4.1/5 (20 reviews)</h6>
          <h5 class="location"><i class="fas fa-map-marker"></i>Logpom, Douala, Cameroon</h5>
          <h5 class="lang"><i class="fas fa-language"></i>English, French</h5>
          <a href="#" class="details">view details</a>
        </div>
        <div class="actions-container">
          <div class="verified-container">
            <h6 class="verified-txt"><i class="fas fa-check-circle"></i>verified</h6>
          </div>
          <button class="select-btn">
            select helper
          </button>
        </div>
      </div>
       <div class="helper-card">
        <div class="img-container">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVLqfekg_kitC_QJ5kgBUTh2tt5EIcxEnQDQ&usqp=CAU" alt="" class="full-img">
        </div>
        <div class="info-container">
          <h4 class="name">John Doe</h4>
          <h6 class="reviews"><i class="fas fa-star"></i>4.1/5 (20 reviews)</h6>
          <h5 class="location"><i class="fas fa-map-marker"></i>Logpom, Douala, Cameroon</h5>
          <h5 class="lang"><i class="fas fa-language"></i>English, French</h5>
          <a href="#" class="details">view details</a>
        </div>
        <div class="actions-container">
          <div class="verified-container">
            <h6 class="verified-txt"><i class="fas fa-check-circle"></i>verified</h6>
          </div>
          <button class="select-btn">
            select helper
          </button>
        </div>
      </div>
       <div class="helper-card">
        <div class="img-container">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVLqfekg_kitC_QJ5kgBUTh2tt5EIcxEnQDQ&usqp=CAU" alt="" class="full-img">
        </div>
        <div class="info-container">
          <h4 class="name">John Doe</h4>
          <h6 class="reviews"><i class="fas fa-star"></i>4.1/5 (20 reviews)</h6>
          <h5 class="location"><i class="fas fa-map-marker"></i>Logpom, Douala, Cameroon</h5>
          <h5 class="lang"><i class="fas fa-language"></i>English, French</h5>
          <a href="#" class="details">view details</a>
        </div>
        <div class="actions-container">
          <div class="verified-container">
            <h6 class="verified-txt"><i class="fas fa-check-circle"></i>verified</h6>
          </div>
          <button class="select-btn">
            select helper
          </button>
        </div>
      </div>
    </div>
  </section>
  <floating-buttons></floating-buttons>
</template>

<script lang="ts">
import { navbarState } from "@/services/navbar";
import { User } from "interfaces/user.interface";
import { defineComponent } from "vue";
import { Options, Vue } from "vue-class-component";
import FloatingButtons from "@/components/FloatingButtons.vue"; 

export default defineComponent({
  components: { FloatingButtons },
  mounted() {
    navbarState.changeTitle(" - Find a Helper");
    navbarState.changeAuth(false);
    // this.getHelpers();
  },
  setup() {},
  data() {
    return {
      helpers: [] as User[],
    };
  },
  methods: {
    getHelpers() {
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };
      fetch("http://localhost:3000/users/helpers", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (data.statusCode > 299) {
            window.alert("wrong credentials");
            console.log(data);
          } else {
            this.helpers = data;
            console.log(data);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
});
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

.helpers-sec {
  width: 90%;
  margin: 0 auto;

  .title {
    font-size: 28px;
    text-align: start;
    margin-bottom: 15px;
  }
}

.helpers-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.helper-card {
  width: 45%;
  box-shadow: 0px 4px 10px 1px rgb(207, 207, 207);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  padding: 8px 15px;
  margin-bottom: 30px;
  .img-container {
    width: 85px;
    height: 85px;
    border-radius: 50%;
    overflow: hidden;
  }
  .info-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    i {
      margin-right: 5px;
    }
    .name {
      font-weight: 700;
      font-size: 18px;
    }
    .reviews {
      font-weight: 300;
      color: $gray;
      i {
        color: $yellow;
      }
    }
    .location {
      font-weight: 500;
      font-size: 16px;
      i {
        color: $blue;
      }
    }
    .lang {
      font-weight: 300;
      font-size: 16px;
    }
  }
  .actions-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    .verified-container {
      background-color: #3057b846;
      color: $blue;
      width: 100px;
      height: 30px;
      border-radius: 5px;
      padding-top: 5px;
      margin-bottom: 20px;
      .verified-txt {
        font-weight: 500;
        i {
          color: $blue;
          margin-right: 5px;
        }
      }
    }
    .select-btn {
      background-color: $green;
      border-radius: 15px;
      color: white;
      border: none;
      padding: 3px 10px;
      font-size: 15px;
    }
  }
}
</style>
