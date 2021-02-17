<template>
  <div id="app">
    <!-- Navbar -->
    <Navbar/>
    <!-- Home page banner -->
    <Banner/>
    <!-- How it works Section -->
    <How/>
    <!-- Back Desgin -->
    <div class="back-pattern1">
      <div class="back1">
          <div class="inner"></div>
      </div>
      <div class="back3"></div>
    </div>
    <!-- Threapist page -->
    <Therapist/>
    <!-- Payemnt Section home page -->
    <Payment/>
    <!-- Footer section -->
    <Footer/>
    <!-- Footer Bottom -->
    <Bottom/>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue';  
import Banner from './components/Banner.vue';  
import How from './components/How.vue';  
import Therapist from './components/Therapist.vue';  
import Payment from './components/Payment.vue';  
import Footer from './components/Footer.vue';  
import Bottom from './components/Footer-bottom.vue';  
 
export default {
  name: 'App',
  components: {
    Navbar,
    Banner,
    How,
    Therapist,
    Payment,
    Footer,
    Bottom
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
