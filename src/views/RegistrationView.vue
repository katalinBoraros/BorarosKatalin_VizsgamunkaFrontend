<template>
    <div class="container">
        <form class="row g-3" @submit.prevent="onsubmit">
            <div class="col-md-12">
                <label for="inputEmail4" class="form-label">Name</label>
                <input v-model="name" required type="name" class="form-control" id="name"
                    placeholder="Kérlek add meg a neved!">
            </div>

            <div class="col-md-12">
                <label for="inputEmail4" class="form-label">Email</label>
                <input v-model="email" required type="email" class="form-control" id="inputEmail4"
                    placeholder="Kérlek add meg az e-mail címed!">
            </div>
            <div class="col-md-12">
                <label for="inputPassword4" class="form-label">Password</label>
                <input @keyup="check" v-model="password" required type="password" class="form-control"
                    id="inputPassword4" placeholder="Kérlek add meg a jelszavad!">
                <div class="col-auto">
                    <span id="passwordHelpInline" class="form-text">
                        Must be 8-20 characters long.
                    </span>
                </div>
            </div>

            <div class="col-12">
                <button :disabled="dis1" type="submit" class="btn btn-dark">Sign in</button>
            </div>
        </form>
        <div>
            {{ error }}
        </div>
    </div>

</template>

<script setup>

import { ref } from 'vue';
import axios, { Axios } from 'axios';
import { useRouter } from 'vue-router';
import dataservice from '../services/dataservice';


const name = ref("");
const email = ref("");
const password = ref("");
const error = ref("");
const dis1 = ref(false);

const check = () => {

    if (password.value.length < 8) {

        error.value = "A jelszónak 8 karakter hosszúnak kell lennie"
        dis1.value = true;
    }
    else {
        error.value = ""
        dis1.value = false;
    }
}
const router = useRouter();
const onsubmit = async () => {
    const response = await axios.post(
        "http://127.0.0.1:8000/api/register",
        {
            username: name.value,
            email: email.value,
            password: password.value,
        },
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    ).then(response => {

        return response.data;

    }).catch(error => {
        errorMessage.value = "Username or the email is wrong!";
    });
    const responseID = response.id;
    await updateData(responseID);
    router.push({name: 'Home'})
}
const updateData = async (updatedID) => {
    await axios.put(
        "http://127.0.0.1:8000/api/data/1",
        {
            current_user_id: updatedID
        }
    ).then(response => {

        return response.data;
    }).catch(error => {
        console.log("error");
    });

}
</script>