.
<template>
  <section id="area">
    <div class="px-4 py-8">
      <h1 class="text-4xl font-bold text-center mb-8">Area</h1>
      <!-- loading -->
      <loader v-if="isLoading" />

      <!-- item -->
      <div v-else>
        <!-- Item -->
        <div class="flex flex-wrap justify-center" v-if="areas.length > 0">
          <div class="item" v-for="index in 15" :key="index">
            <div
              class="w-60 max-w-xs m-3 px-4 py-4 rounded overflow-hidden shadow-md"
            >
              <a @click="goToDetail(areas[index].id)" class="cursor-pointer">
                <!-- image not null -->
                <img
                  class="mx-auto w-16 h-16"
                  v-if="areas[index].ensignUrl != null"
                  :src="areas[index].ensignUrl"
                  alt="Flag"
                />
                <!-- image null -->
                <img
                  class="mx-auto w-16 h-16"
                  v-else
                  src="https://upload.wikimedia.org/wikipedia/commons/0/09/Dummy_flag.png"
                  alt="Flag"
                />

                <div class="pt-2">
                  <div class="font-bold text-xl mb-2 text-center">
                    {{ areas[index].name }}
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div v-else>
          <h1 class="text-2xl text-red-400 text-center py-4">Data Not Found</h1>
        </div>

        <div class="my-4 mx-4 text-center">
          <router-link
            class="bg-slate-800 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded content-center"
            to="/area"
          >
            See The Area
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import Loader from "./Loader.vue";
const clientToken = "9e0ffbeece7244ad9cf02f3e6e613fe5";

export default {
  components: { Loader },
  data() {
    return {
      areas: [],
      isLoading: true,
      errorMessage: "",
    };
  },
  methods: {
    getData() {
      axios({
        method: "get",
        url: "/areas",
        // config,
        // headers: {
        //   "X-Auth-Token": clientToken,
        // },
      })
        .then((response) => {
          this.areas = response.data.areas;
          console.log(this.areas);
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
        name: "Areas Detail",
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

<style></style>
