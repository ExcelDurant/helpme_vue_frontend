<template>
    <div class="task-container">
        <div class="info">
            <h3 class="title">
                {{ task.name }}
            </h3>
            <p class="description">
                {{ task.description }}
            </p>
            <div class="middle">
                <h5 class="location">
                <i class="fas fa-map-marker"></i>{{task.address.country}}, {{task.address.city}}, {{task.address.street}}
            </h5>
            <div class="reward-container flex-center">
                <h4 class="reward">{{task.reward}} FCFA</h4>
            </div>
            </div>
            <h5 class="date"><i class="fas fa-calendar-week"></i>{{task.start_date}}</h5>
        </div>
        <div class="imgs-container">
            <div class="img-container no-overflow" v-for="(img, index) in task.pictures" :key="index">
                <img :src="img" :alt="task.name" class="full-img">
            </div>
        </div>
        <div class="actions-container">
            <div class="buttons-container">
                <button class="edit-btn btn">edit<i class="fas fa-edit"></i></button>
            <button class="delete-btn btn">delete<i class="fas fa-trash-alt"></i></button>
            </div>
            <router-link to="/proposals" class="proposals-container flex-center">
                <h5 class="proposals-txt">view proposals</h5>
                <h6 class="proposals-num">{{ task.proposals }}</h6>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { Task } from 'interfaces/task.interface';
import { defineComponent } from 'vue';

export default defineComponent({
    props:{
        task:{}
    },
    setup() {
        
    },
    data() {
        return {
            task:this.task as Task
        }
    }
})
</script>


<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.task-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 4px 5px 1px rgb(224, 224, 224);
    padding: 15px;
    margin-bottom: 40px;
}

.info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    .title {
        font-size: 28px;
        margin-bottom: 15px;
    }
    .description {
        font-size: 15px;
        font-weight: 300;
    }
    .middle {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        .location {
            font-size: 15px;
            font-weight: 600;
            i {
                color: $blue;
                margin-right: 5px;
            }
        }
        .reward-container {
            background-color: #3057b8b9;
            color: white;
            padding: 0 20px;
            height: 30px;
            border-radius: 10px;
            .reward {
                font-size: 15px;
                margin: 0;
                padding: 0;
            }
        }
    }
    .date {
        font-size: 15px;
            font-weight: 600;
            i {
                color: $blue;
                margin-right: 5px;
            }
    }
}

.imgs-container {
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 10px;
    row-gap: 10px;
    margin: 0 20px;
    .img-container {
        height: 100px;
        width: 120px;
    }
}

.actions-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    .buttons-container {
        .btn {
            background-color: $darkgray;
            width: 120px;
            margin-bottom: 10px;
            color: black;
            font-weight: 600;
            font-size: 15px;
            i {
                margin-left: 5px;
            }
        }
    }
    .proposals-container {
        width: 150px;
        background-color: $blue;
        padding: 5px 0;
        border-radius: 20px;

        .proposals-txt,.proposals-num {
            margin: 0;
            padding: 0;
            font-size: 12px;
        }
        .proposals-txt {
            color: white;
        }
        .proposals-num {
            background-color: white;
            color: $blue;
            border-radius: 50%;
            padding: 1px 5px;
            margin-left: 5px;
        }
    }
}

</style>
