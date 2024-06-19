<template>
  <div class="container my-5">
    <h2 class="text-center mb-4">Érdekelt szolgáltatások</h2>
    <div v-if="myServiceData.length === 0" class="text-center">
      <p>Jelenleg nem érdeklődsz egyetlen szolgáltatás iránt sem.</p>
    </div>
    <div v-else class="list-group">
      <div
        v-for="service in myServiceData"
        :key="service.id"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <div>
          <h5 class="mb-1">{{ service.service_name }}</h5>
          <p class="mb-0">{{ service.price }} Ft</p>
        </div>
        <button class="btn btn-hot-pink" @click="deleteService(service.id)">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
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

    return {
      myServiceData,
      deleteService,
    };
  },
};
</script>

<style scoped>
.list-group-item {
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.list-group-item:hover {
  transform: translateY(-2px);
}
.btn-hot-pink {
  color: #fff;
  background-color: #ff69b4;
  border-color: #ff69b4;
}

.btn-hot-pink:hover {
  background-color: #ff51a9;
  border-color: #ff3d9f;
}
</style>


