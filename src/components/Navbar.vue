<template>
  <div
    class="w-full bg-white border-t border-gray-300 py-2 font-sans hidden sm:block"
  >
    <div class="container flex justify-center mx-auto">
      <div class="w-40"><NavbarCity /></div>
      <div class="w-40"><NavbarExplore /></div>
      <div class="w-40"><NavbarStay /></div>
      <div class="w-40"><NavbarDontWander /></div>
    </div>
  </div>
</template>

<script>
import NavbarCity from './NavbarElement/NavbarCity'
import NavbarExplore from './NavbarElement/NavbarExplore'
import NavbarStay from './NavbarElement/NavbarStay'
import NavbarDontWander from './NavbarElement/NavbarDontWander'
export default {
  components: {
    NavbarCity,
    NavbarExplore,
    NavbarStay,
    NavbarDontWander
  }
}
</script>

<style></style>
