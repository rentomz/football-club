.
<template>
<section id="area"> 
  <div class="px-4 py-8">
    <h1 class="text-4xl font-bold text-center">Area</h1>
    <!-- Item -->
    <div v-if="data.length > 0">
      <div class="item" v-for="item in data" :key="item.id">
        <h1>{{item.name}}</h1>
      </div>
    </div>
    <div v-else>
      <h1 class="text-2xl text-red-400 text-center py-4">Data Kosong</h1>
    </div>
  </div>
</section>
  
</template>

<script>
import axios from "axios";
const clientToken = "9e0ffbeece7244ad9cf02f3e6e613fe5";
export default {
  data() {
    return {
      data: [],
      error: false,
      errorMessage: "",
    };
  },
  methods: {
    getData() {
      axios({
        method: "get",
        url: "v4/areas/",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "X-Auth-Token": clientToken,
        },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          console.log("finish");
        });
    },
  },

  async mounted() {
    await this.getData();
  },
};
</script>

<style></style>
