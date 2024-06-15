<template>
    <div class="container">
        <form class="row g-3" @submit.prevent="onsubmit">
            <div class="col-md-12">
                <label for="inputEmail4" class="form-label">Email</label>
                <input v-model="email" required type="username" class="form-control" id="email" placeholder="Kérlek add meg az e-mail címedet!">
            </div>

            <div class="col-md-12">
                <label for="inputPassword4" class="form-label">Password</label>
                <input @keyup = "check" v-model="password" required type="password" class="form-control" id="inputPassword4"
                    placeholder="Kérlek add meg a jelszavad!">
                <div class="col-auto">
                    <span id="passwordHelpInline" class="form-text">
                        Must be 8-20 characters long.
                    </span>
                </div>
            </div>
            <div class="col-12">
                <button type="submit" class="btn btn-dark">Login</button>
            </div>
            {{ error }}
        </form>
    </div>

</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';


const email = ref("");
const password = ref("");
const error = ref("");
const dis1 = ref(false);
const router = useRouter();


const check = () => {

    if (password.value.length < 6) {

        error.value = "A jelszonak 6 karakter hosszunak kell lennie"
        dis1.value = true;
    }
    else {
        error.value = ""
        dis1.value = false;
    }


}

const onsubmit = async () => {
    const response = await axios.post(
        "http://127.0.0.1:8000/api/login",
        {
            email: email.value,
            password: password.value,
        },
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    )
        .then(response => {

            return response.data;
        })
        .catch(err => {
            console.log(err);
        });
        console.log(response);
    if (response != 402) {
        await updateData(response);
        router.push({ name: 'Home' });
    }
    else {
        error.value = "Wrong email or password";
    }

};
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

<style></style>