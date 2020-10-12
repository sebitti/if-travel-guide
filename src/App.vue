<template>
  <div id="app">
    <div class="">
      <Header />
      <Navbar />
    </div>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Navbar,
    Footer
    // About,
  }
}
</script>

<style></style>
