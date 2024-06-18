<template>
  <div>
    <h2>My Services</h2>
    <ol class="list-group list-group-numbered">
      <li
        v-for="service in myServiceData"
        :key="service.id"
        class="list-group-item d-flex justify-content-between align-items-start"
      >
        <div class="ms-2 me-auto">
          <div class="fw-bold">{{ service.service_name }}</div>
          {{ service.price }} Ft
        </div>
        <button class="btn btn-danger" @click="deleteService(service.id)">
          Delete
        </button>
      </li>
      <li v-if="myServiceData.length === 0" class="list-group-item">
        No services found.
      </li>
    </ol>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const myServiceData = ref([]);

async function getMyServicesByID(id) {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/api/myServices/${id}`);
    console.log('Response data:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching services:', error);
    return Promise.reject(error);
  }
}

async function deleteService(serviceId) {
  try {
    await axios.delete(`http://127.0.0.1:8000/api/current/${serviceId}`);
    myServiceData.value = myServiceData.value.filter(service => service.id !== serviceId);
  } catch (error) {
    console.error('Error deleting service:', error);
  }
}

onMounted(async () => {
  const userId = await getUserId();
  console.log('User ID:', userId);

  if (userId) {
    const services = await getMyServicesByID(userId);
    console.log('Fetched services:', services.services);
    myServiceData.value = services.services;
  } else {
    console.error('Failed to get user ID');
  }
});

async function getUserId() {
  try {
    const response = await axios.get('/data');
    console.log('User data:', response.data);
    return response.data.data.current_user_id;
  } catch (error) {
    console.error('Error fetching user data:', error);
    return Promise.reject(error);
  }
}
</script>

<style scoped></style>
