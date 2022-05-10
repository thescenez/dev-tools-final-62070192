<template>
  <div class="" style="background-color:">
    <div class="container-fluid p-0" style="height: 60vh">
        <img class="w-100" src="../assets/banner.jpg" style="object-fit: contain"
        />
    </div>
    <h1 style="font-size: 4rem">เชื่อมต่อ ช่วยเหลือ เพื่อคนไทยสู้ภัยโควิด<br>Connecting All Thais in the Fight Agianst COVID</h1>
    <router-link to="/reserve-vaccine" type="button" class="btn btn-danger mt-5" style="width: 450px; font-size: 2rem">ลงทะเบียนจองคิว - Register</router-link>
  </div>
</template>

<script>
import axios from "../plugins/axios";
export default {
  data() {
    return {
      rooms: [],
      user: "scene"
    };
  },
  methods: {
  },
  created() {
    axios
      .get("/rooms")
      .then((response) => {
        console.log(response.data);
        this.rooms = response.data;
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }
};
</script>