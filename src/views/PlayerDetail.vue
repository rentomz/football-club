.
<template>
  <section id="player-detail">
    <!-- loading -->
    <loader v-if="isLoading" style="min-height: 80vh;"/>
    <!-- item -->
    <div v-else>
      <!-- Detail  -->
      <div
        class="py-4 px-8 justify-center flex flex-wrap items-center border-b-2 bg-player-detail"
      >
        <div class="mx-8 text-center">
          <h1 class="text-2xl font-semibold my-2 "> Name Player : {{ detail.name }}</h1>
          <h1 class="text-2xl font-semibold my-2 "> Position : {{ detail.position }}</h1>
          <h1 class="text-2xl font-semibold my-2 "> Country Birth : {{ detail.countryOfBirth }}</h1>
          <h1 class="text-2xl font-semibold my-2 "> Nationality : {{ detail.nationality }}</h1>
          <h1 class="text-2xl font-semibold my-2"> Date Of Birth : {{ detail.dateOfBirth }}</h1>
        </div>
        <div></div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import Loader from "../components/Loader.vue";
const instance = axios.create();
export default {
  components: { Loader },
  data() {
    return {
      id: this.$route.params.id,
      detail: {},
      isLoading: true,
    };
  },
  methods: {

    async getData() {
      this.isLoading = true;
      await axios({
        method: "get",
        url: '/players/' + this.id,
      })
        .then((response) => {
          console.log(response);
          this.detail = response.data;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          console.log("finish");
          this.isLoading = false;
        });
    },

    
    goToDetail(id) {
      // id = this.slug(id);
      this.$router.push({
        name: "Player Detail",
        params: {
          id: id,
        },
      });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style>
.bg-player-detail {
  min-height: 80vh;
    /* background: rgb(0,7,75);
background: linear-gradient(90deg, rgba(0,7,75,1) 0%, rgba(3,28,124,1) 51%, rgba(63,82,192,1) 100%); */
}


</style>
