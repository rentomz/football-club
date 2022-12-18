.<template>
  <!-- loading -->
  <loader v-if="isLoading" style="min-height: 80vh;"/>
    <!-- item -->
    <div v-else>
      <div class="club py-8 px-8">
        <h1 class="text-center text-4xl mb-8">Club</h1>
        <div class="flex flex-wrap justify-center" v-if="clubs.length > 0">
          <div class="item" v-for="(item, index) in clubs" :key="index">
            <div class="w-72 max-w-xs m-3 overflow-hidden relative shadow-md">
              <a @click="goToDetail(item.id)" class="cursor-pointer">
                <div class="img-bg">
                  <img
                    src="https://images.unsplash.com/photo-1559579313-021b6ec9f6d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                    alt="Stadium"
                  />
                </div>
                <div class="img-badge">
                  <!-- image not null -->
                  <img
                    class="mx-auto mt-4 w-16 h-16"
                    v-if="item.crestUrl != null"
                    :src="item.crestUrl"
                    alt="Flag"
                  />
                  <!-- image null -->
                  <img
                    class="mx-auto mt-4 w-16 h-16"
                    v-else
                    src="https://upload.wikimedia.org/wikipedia/commons/0/09/Dummy_flag.png"
                    alt="Flag"
                  />
                </div>

                <div class="pt-10 pb-6" style="background-color: #f5f5f5">
                  <div class="content text-center">
                    <h1 class="font-bold text-xl my-2">
                      {{ item.name }}
                    </h1>
                    <h2 class="vanue text-md" v-if="item.venue != null">
                      {{ item.venue }}
                    </h2>
                    <h2 class="vanue text-sm" v-else>-</h2>
                    <h2 class="vanue text-md hover:font-semibold mt-6">
                      Club Profile
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

    getDataClub() {
      this.isLoading = true;
      axios({
        method: "get",
        url: "/teams",
      })
        .then((response) => {
          this.clubs = response.data.teams;
          console.log(response.data.teams);
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
        name: "Clubs Detail",
        params: {
          id: id,
        },
      });
    },
  },
  mounted() {
    this.$emit("scrollToTop", true);
    this.getDataClub();
  },
};
</script>


<style>

</style>