<template>
  <header class="w-full items-center" style="background-color: #11181F;">
    <nav class="p-5 shadow-lg md:flex md:items-center md:justify-between">
      <div class="flex justify-between items-center">
        <span class="text-2xl font-semibold text-white cursor-pointer">
          Foot Ball Club
        </span>

        <!-- Mobile View -->
        <button
          class="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-gray-200 group"
          @click="switchButton()"
        >
          <div class="w-5 h-1 bg-gray-600 mb-1"></div>
          <div class="w-5 h-1 bg-gray-600 mb-1"></div>
          <div class="w-5 h-1 bg-gray-600 mb-1"></div>
        </button>
      </div>
      <!-- Content Mobile View -->
      <div v-if="isButton" class="absolute top-0 -right-0 h-screen w-8/12 bg-white border opacity-100 transition-all duration-300">
          <button
          class="block py-3 px-4 mx-2 rounded focus:outline-none -right-0 hover:bg-gray-200"
          @click="switchButton()"
        >
        <div class="close"></div>
        
        </button>
            <ul class="flex flex-col items-center w-full text-base cursor-pointer pt-10">
              <li class="hover:bg-gray-200 py-4 px-6 w-full">Home</li>
              <li class="hover:bg-gray-200 py-4 px-6 w-full">Area</li>
              <li class="hover:bg-gray-200 py-4 px-6 w-full">Team</li>
            </ul>
          </div>

      <!-- Web View -->
      <ul
        class="md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500"
      >
        <li class="mx-6 my-6 md:my-0">
          <!-- <a href="#" class="text-xl text-white hover:text-sky-800 duration-500">Home</a> -->
          <RouterLink
            to="/"
            class="text-xl text-indigo-50 hover:text-white duration-500"
            >Home</RouterLink
          >
        </li>
        <li class="mx-6 my-6 md:my-0">
          <RouterLink
            to="/about"
            class="text-xl text-indigo-50 hover:text-white duration-500"
            >Area</RouterLink
          >
        </li>
        <li class="mx-6 my-6 md:my-0">
          <RouterLink
            to="/"
            class="text-xl text-indigo-50 hover:text-white duration-500"
            >Team</RouterLink
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isButton: false,
    }
  },
  methods: {
    switchButton() {
      this.isButton = !this.isButton;
      console.log(this.isButton);
    }
  },

};
</script>

<style>
.close {
  position: absolute;
  right: 40px;
  top: 28px;
  width: 28px;
  height: 28px;
  opacity: 0.5;
}

.close:before, .close:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 33px;
  width: 2px;
  background-color: #333;
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}</style>
