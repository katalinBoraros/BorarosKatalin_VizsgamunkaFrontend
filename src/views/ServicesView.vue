<template>
  <div class="card-group">
    <div class="card">
      <img src="/src/pics/s.JPG" class="card-img-top" alt="S-es köröm">
      <div class="card-body">
        <h5 class="card-title">Műköröm S-es méret</h5>
        <p class="card-text">Majd ide leírom mennyibe kerül és nagyjából mit takar</p>
      </div>
      <div class="card-footer">
        <a @click="click(1)" class="btn btn-dark">Érdekel</a>
      </div>
    </div>
    <div class="card">
      <img src="/src/pics/m.JPG" class="card-img-top" alt="M-es köröm">
      <div class="card-body">
        <h5 class="card-title">Műköröm M-es méret</h5>
        <p class="card-text">Majd ide leírom mennyibe kerül és nagyjából mit takar</p>
      </div>
      <div class="card-footer">
        <a @click="click(2)" class="btn btn-dark">Érdekel</a>
      </div>
    </div>
    <div class="card">
      <img src="/src/pics/l.JPG" class="card-img-top" alt="L-es köröm">
      <div class="card-body">
        <h5 class="card-title">Műköröm L-es méret</h5>
        <p class="card-text">Majd ide leírom mennyibe kerül és nagyjából mit takar</p>
      </div>
      <div class="card-footer">
        <a href="#" class="btn btn-dark">Érdekel</a>
      </div>
    </div>
  </div>
  <div class="card-group">
    <div class="card">
      <img src="/src/pics/xl.JPG" class="card-img-top" alt="Xl-es köröm">
      <div class="card-body">
        <h5 class="card-title">Műköröm XL-es méret</h5>
        <p class="card-text">Majd ide leírom mennyibe kerül és nagyjából mit takar</p>
      </div>
      <div class="card-footer">
        <a href="#" class="btn btn-dark">Érdekel</a>
      </div>
    </div>
    <div class="card">
      <img src="..." class="card-img-top" alt="Férfi manikűr">
      <div class="card-body">
        <h5 class="card-title">Férfi manikűr</h5>
        <p class="card-text">Majd ide leírom mennyibe kerül és nagyjából mit takar</p>
      </div>
      <div class="card-footer">
        <a href="#" class="btn btn-dark">Érdekel</a>
      </div>
    </div>
    <div class="card">
      <img src="/src/pics/festes.JPG" class="card-img-top" alt="Festés">
      <div class="card-body">
        <h5 class="card-title">Egyedi festés</h5>
        <p class="card-text">Majd ide leírom mennyibe kerül és nagyjából mit takar</p>
      </div>
      <div class="card-footer">
        <a href="#" class="btn btn-dark">Érdekel</a>
      </div>
    </div>
  </div>
  <div class="card-group">
    <div class="card">
      <img src="..." class="card-img-top" alt="Francia körmök">
      <div class="card-body">
        <h5 class="card-title">Francia körmök</h5>
        <p class="card-text">Majd ide leírom mennyibe kerül és nagyjából mit takar</p>
      </div>
      <div class="card-footer">
        <a href="#" class="btn btn-dark">Érdekel</a>
      </div>
    </div>
    <div class="card">
      <img src="..." class="card-img-top" alt="Egyedi kövezés">
      <div class="card-body">
        <h5 class="card-title">Kövezett körmök</h5>
        <p class="card-text">Majd ide leírom mennyibe kerül és nagyjából mit takar</p>
      </div>
      <div class="card-footer">
        <a href="#" class="btn btn-dark">Érdekel</a>
      </div>
    </div>
    <div class="card">
      <img src="/src/pics/gellakk.JPG" class="card-img-top" alt="Sima géllakk">
      <div class="card-body">
        <h5 class="card-title">Sima géllakkozás</h5>
        <p class="card-text">Majd ide leírom mennyibe kerül és nagyjából mit takar</p>
      </div>
      <div class="card-footer">
        <a href="#" class="btn btn-dark">Érdekel</a>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref, onMounted } from 'vue';
import axios, { Axios } from 'axios';
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

<style scoped></style>
