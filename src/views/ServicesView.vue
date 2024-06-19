<template>
  <div class="container-fluid" style="background-color: #ffedf6; padding: 1rem;">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      <div class="col">
        <div class="card h-100">
          <div class="card-img-top-wrapper">
            <img src="/src/pics/s.JPG" class="card-img-top" alt="S-es köröm">
          </div>
          <div class="card-body d-flex flex-column">
            <div class="card-content" style="background-color: black; color: white; padding: 1rem;">
              <h5 class="card-title">Műköröm S-es méret</h5>
              <p class="card-text flex-grow-1">Majd ide leírom mennyibe kerül és nagyjából mit takar</p>
            </div>
            <div class="mt-auto text-center">
              <a @click="click(1)" class="btn btn-dark btn-stylish">Érdekel</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <div class="card-img-top-wrapper">
            <img src="/src/pics/m.JPG" class="card-img-top" alt="M-es köröm">
          </div>
          <div class="card-body d-flex flex-column">
            <div class="card-content" style="background-color: black; color: white; padding: 1rem;">
              <h5 class="card-title">Műköröm M-es méret</h5>
              <p class="card-text flex-grow-1">Majd ide leírom mennyibe kerül és nagyjából mit takar</p>
            </div>
            <div class="mt-auto text-center">
              <a @click="click(2)" class="btn btn-dark btn-stylish">Érdekel</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <div class="card-img-top-wrapper">
            <img src="/src/pics/l.JPG" class="card-img-top" alt="L-es köröm">
          </div>
          <div class="card-body d-flex flex-column">
            <div class="card-content" style="background-color: black; color: white; padding: 1rem;">
              <h5 class="card-title">Műköröm L-es méret</h5>
              <p class="card-text flex-grow-1">Majd ide leírom mennyibe kerül és nagyjából mit takar</p>
            </div>
            <div class="mt-auto text-center">
              <a @click="click(3)" class="btn btn-dark btn-stylish">Érdekel</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <div class="card-img-top-wrapper">
            <img src="/src/pics/xl.JPG" class="card-img-top" alt="Xl-es köröm">
          </div>
          <div class="card-body d-flex flex-column">
            <div class="card-content" style="background-color: black; color: white; padding: 1rem;">
              <h5 class="card-title">Műköröm XL-es méret</h5>
              <p class="card-text flex-grow-1">Majd ide leírom mennyibe kerül és nagyjából mit takar</p>
            </div>
            <div class="mt-auto text-center">
              <a @click="click(4)" class="btn btn-dark btn-stylish">Érdekel</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <div class="card-img-top-wrapper">
            <img src="/src/pics/reteges.JPG" class="card-img-top" alt="Acrylicgel körmök">
          </div>
          <div class="card-body d-flex flex-column">
            <div class="card-content" style="background-color: black; color: white; padding: 1rem;">
              <h5 class="card-title">Acrylicgel körmök</h5>
              <p class="card-text flex-grow-1">Majd ide leírom mennyibe kerül és nagyjából mit takar</p>
            </div>
            <div class="mt-auto text-center">
              <a @click="click(5)" class="btn btn-dark btn-stylish">Érdekel</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <div class="card-img-top-wrapper">
            <img src="/src/pics/festes.JPG" class="card-img-top" alt="Festés">
          </div>
          <div class="card-body d-flex flex-column">
            <div class="card-content" style="background-color: black; color: white; padding: 1rem;">
              <h5 class="card-title">Egyedi festés</h5>
              <p class="card-text flex-grow-1">Majd ide leírom mennyibe kerül és nagyjából mit takar</p>
            </div>
            <div class="mt-auto text-center">
              <a  @click="click(6)" class="btn btn-dark btn-stylish">Érdekel</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <div class="card-img-top-wrapper">
            <img src="..." class="card-img-top" alt="Francia körmök">
          </div>
          <div class="card-body d-flex flex-column">
            <div class="card-content" style=" color: black; padding: 1rem;">
              <h5 class="card-title">Francia körmök</h5>
              <p class="card-text flex-grow-1">12.000 Ft </p>
            </div>
            <div class="mt-auto text-center">
              <a  @click="click(7)" class="btn btn-dark btn-stylish">Érdekel</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <div class="card-img-top-wrapper">
            <img src="..." class="card-img-top" alt="Egyedi kövezés">
          </div>
          <div class="card-body d-flex flex-column">
            <div class="card-content" style="background-color: black; color: white; padding: 1rem;">
              <h5 class="card-title">Kövezett körmök</h5>
              <p class="card-text flex-grow-1">Majd ide leírom mennyibe kerül és nagyjából mit takar</p>
            </div>
            <div class="mt-auto text-center">
              <a  @click="click(8)" class="btn btn-dark btn-stylish">Érdekel</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <div class="card-img-top-wrapper">
            <img src="/src/pics/gellakk.JPG" class="card-img-top" alt="Sima géllakk">
          </div>
          <div class="card-body d-flex flex-column">
            <div class="card-content" style="background-color: black; color: white; padding: 1rem;">
              <h5 class="card-title">Sima géllakkozás</h5>
              <p class="card-text flex-grow-1">Majd ide leírom mennyibe kerül és nagyjából mit takar</p>
            </div>
            <div class="mt-auto text-center">
              <a  @click="click(9)" class="btn btn-dark btn-stylish">Érdekel</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import dataservice from '../services/dataservice.js';

const serviceName = ref("");
const servicePrice = ref(0);

const click = async (id) => {
  console.log("szia");
  const response = await axios.get(`http://127.0.0.1:8000/api/service/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return Promise.reject(error);
    })
  serviceName.value = response.service.name;
  servicePrice.value = response.service.price;
  console.log(serviceName.value, servicePrice.value);
  const posted = await axios.post("http://127.0.0.1:8000/api/current",
    {
      user_id: user_id.value,
      service_name: serviceName.value,
      price: servicePrice.value
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then(response => {
    return response.data;
  }).catch(error => {
    console.log("error");
  });
  console.log(posted);
}

async function getUserId() {
  try {
    const response = await axios.get("/data");
    console.log(response.data.data.current_user_id);
    return response.data.data.current_user_id;
  } catch (error) {
    return Promise.reject(error);
  }
}
const user_id = ref();
onMounted(async () => {
  const userId = await getUserId();
  user_id.value = userId;
});
</script>

<style scoped>
.card {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
}

.card:hover {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  transform: translateY(-5px);
}

.card-img-top-wrapper {
  height: 200px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-img-top {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.card-body {
  padding: 1rem;
}

.card-content {
  margin-bottom: 1rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.card-text {
  margin-bottom: 0;
}

.btn-stylish {
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
}

.btn-stylish:hover {
  transform: translateY(-2px);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
}
</style>
