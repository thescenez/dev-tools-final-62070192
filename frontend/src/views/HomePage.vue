<template>
    <div>
        <h1>home</h1>
        <h1>{{rooms.length}}</h1>
        <h1>{{user}}</h1>
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