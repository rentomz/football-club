.
<template>
  <section id="area">
    <div class="px-4 py-8 w">
      <h1 class="text-4xl font-bold text-center mb-8">Area</h1>
      <!-- loading -->
      <loader v-if="isLoading" />

      <!-- item -->
      <div v-else>
        <!-- Item -->
        <div class="flex flex-wrap justify-center" v-if="areas.length > 0">
          <div class="item" v-for="(item, index) in areas" :key="index">
            <div
              class="w-60 max-w-xs m-3 px-4 py-4 rounded overflow-hidden shadow-md"
            >
              <a @click="goToDetail(item.id)" class="cursor-pointer">
                <!-- image not null -->
                <img
                  class="mx-auto w-16 h-16"
                  v-if="item.ensignUrl != null"
                  :src="item.ensignUrl"
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
                    {{ item.name }}
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div v-else>
          <h1 class="text-2xl text-red-400 text-center py-4">Data Not Found</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import Loader from "../components/Loader.vue";

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
    this.$emit("scrollToTop", true);
    this.getData();
  },
};
</script>

<style>
  #area {
    min-height: 100vh;
}</style>
