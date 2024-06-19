<template>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card shadow-lg rounded-lg">
            <div class="card-body">
              <h2 class="card-title text-center mb-4" style="font-family: 'Playfair Display', serif;">Registration</h2>
              <form @submit.prevent="onsubmit">
                <div class="form-group">
                  <label for="inputName" class="form-label text-muted" style="font-family: 'Montserrat', sans-serif;">Name</label>
                  <input
                    v-model="name"
                    required
                    type="text"
                    class="form-control form-control-lg"
                    id="inputName"
                    placeholder="Enter your name"
                    style="font-family: 'Montserrat', sans-serif;"
                  />
                </div>
  
                <div class="form-group">
                  <label for="inputEmail" class="form-label text-muted" style="font-family: 'Montserrat', sans-serif;">Email</label>
                  <input
                    v-model="email"
                    required
                    type="email"
                    class="form-control form-control-lg"
                    id="inputEmail"
                    placeholder="Enter your email"
                    style="font-family: 'Montserrat', sans-serif;"
                  />
                </div>
  
                <div class="form-group">
                  <label for="inputPassword" class="form-label text-muted" style="font-family: 'Montserrat', sans-serif;">Password</label>
                  <input
                    @keyup="check"
                    v-model="password"
                    required
                    type="password"
                    class="form-control form-control-lg"
                    id="inputPassword"
                    placeholder="Enter your password"
                    style="font-family: 'Montserrat', sans-serif;"
                  />
                  <small id="passwordHelpInline" class="form-text text-muted" style="font-family: 'Montserrat', sans-serif;">
                    Must be at least 8 characters long.
                  </small>
                </div>
  
                <button type="submit" class="btn btn-lg btn-block btn-dark mt-4" style="font-family: 'Montserrat', sans-serif;">
                  Register
                </button>
              </form>
              <div class="text-center mt-3">
                <small class="text-danger" style="font-family: 'Montserrat', sans-serif;">{{ error }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  
  const name = ref("");
  const email = ref("");
  const password = ref("");
  const error = ref("");
  const dis1 = ref(false);
  const router = useRouter();
  
  const check = () => {
    if (password.value.length < 8) {
      error.value = "Password must be at least 8 characters long";
      dis1.value = true;
    } else {
      error.value = "";
      dis1.value = false;
    }
  };
  
  const onsubmit = async () => {
    const response = await axios
      .post(
        "http://127.0.0.1:8000/api/register",
        {
          name: name.value,
          email: email.value,
          password: password.value,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(response);
    if (response.status === "success") {
      router.push({ name: 'LoginView' });
    } else {
      error.value = response.message;
    }
  };
  </script>
  
  <style scoped>
  .card {
    background-color: #f8f8f8;
    border: none;
  }
  
  .card-title {
    color: #333;
  }
  
  .form-control {
    background-color: #fff;
    border: 1px solid #ddd;
    color: #333;
  }
  
  .form-control:focus {
    border-color: #ff69b4;
    box-shadow: 0 0 0 0.2rem rgba(255, 105, 180, 0.25);
  }
  
  .btn-dark {
    background-color: #333;
    border-color: #333;
  }
  
  .btn-dark:hover {
    background-color: #222;
    border-color: #222;
  }
  
  .text-danger {
    color: #ff69b4;
  }
  </style>
  