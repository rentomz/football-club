.
<template>
  <section id="club-detail">
    <!-- loading -->
    <loader v-if="isLoading" />
    <!-- item -->
    <div v-else>
      <!-- Detail  -->
      <div
        class="py-4 px-8 justify-center md:justify-start flex flex-wrap items-center border-b-2 bg-top"
      >
        <div class="img-badge-club mb-6">
          <img
            class="w-auto p-5"
            v-if="detail.crestUrl != null"
            :src="detail.crestUrl"
            alt="badge"
          />
          <!-- image null -->
          <img
            class="w-auto p-5"
            v-else
            src="https://upload.wikimedia.org/wikipedia/commons/0/09/Dummy_flag.png"
            alt="badge"
          />
        </div>
        <div class="mx-8">
          <h1 class="text-2xl font-semibold my-2">{{ detail.name }}</h1>
          <h5 class="text-sm my-2">
            {{ detail.venue != null ? detail.venue : "-" }}
          </h5>
          <h5 class="text-sm my-2">
            Offical website :
            <a :href="detail.website" class="font-semibold">{{
              detail.website != null ? detail.website : "-"
            }}</a>
          </h5>
          <h5 class="text-sm my-2">
            address :
            {{ detail.address != null ? detail.address : "-" }}
          </h5>
          <h5 class="text-sm my-2">
            phone :
            {{ detail.phone != null ? detail.phone : "-" }}
          </h5>
        </div>
        <div></div>
      </div>
      <!-- Squad -->
      <div class="club py-8 px-8">
        <h1 class="text-center text-4xl mb-8">Squad</h1>
        <div
          class="flex flex-wrap justify-center"
          v-if="detail.squad.length > 0"
        >
          <div class="item" v-for="(item, index) in detail.squad" :key="index">
            <div class="w-72 max-w-xs m-3 overflow-hidden relative shadow-md">
              <a @click="goToDetail(item.id)" class="cursor-pointer">
                <div class="gradient-bg-white py-4 px-4">
                    <div class="content">
                      <h1 class="font-bold text-xl">
                        {{ item.name }}r
                      </h1>
                      <h2 class="vanue text-md">
                        {{ item.position}}
                      </h2>
                      <h2 class="vanue text-sm">
                        {{ item.nationality}}
                      </h2>
                  </div>
                </div>

                <div class="py-4 px-4 bg-white">
                  <div class="content text-right">
                    <h2 class="vanue text-md hover:font-semibold">
                      Profile Player
                    </h2>
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
      id: this.$route.params.id,
      detail: {},
      clubs: [],
      isLoading: true,
    };
  },
  methods: {
    getData() {
      this.isLoading = true;
      axios({
        method: "get",
        url: "/teams/" + this.id,
      })
        .then((response) => {
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
#club-detail {
  min-height: 80vh;
}
.bg-top {
  /* background-image: url("https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  background-position:right bottom;
  height: 300px; */
  background-color: #f5f5f5;
}
.img-badge-club {
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 25%);
  width: 180px;
  height: 180px;
  top: 8rem;
  left: 50%;
  border-radius: 100%;
  background: #fff;
}
.gradient-bg-white {
  background: rgb(182, 182, 182);
  background: linear-gradient(
    90deg,
    rgba(182, 182, 182, 1) 0%,
    rgba(232, 232, 232, 1) 38%,
    rgba(255, 255, 255, 1) 100%
  );
}
</style>
