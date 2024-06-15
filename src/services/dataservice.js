import Axios from "axios";
Axios.defaults.baseURL = "http://127.0.0.1:8000/api";

export default {
  getAllCurrentServices()
  {
    return Axios.get("/current")
      .then((response)=>{
        return response.data;
      })
      .catch((error)=>{
        return Promise.reject(error);
      })
  },
  getCurrentServicesByID(id)
  {
    return Axios.get(`/current/${id}`)
      .then((response)=>{
        return response.data;
      })
      .catch((error)=>{
        return Promise.reject(error);
      })
  },
  deleteCurrentService(id)
  {
    return Axios.delete(`/current/${id}`)
      .then((response)=>{
        return response.data;
      })
      .catch((error)=>{
        return Promise.reject(error);
      })
  },
  getAllData()
  {
    return Axios.get("/data")
      .then((response)=>{
        return response.data;
      })
      .catch((error)=>{
        return Promise.reject(error);
      })
  },
};
