<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="collapse navbar-collapse">
    <div class="navbar-nav">
      <!-- <router-link class="nav-item nav-link" to="/">Home</router-link> -->
    
      <!-- <router-link class="nav-item nav-link" :to="'/cars'">Cars</router-link> -->
      <router-link tag="li" exact to="/" active-class="active">
        <a class="nav-item nav-link">Home</a>
      </router-link>
      <router-link tag="li" to="/cars" active-class="active">
        <a class="nav-item nav-link">Cars</a>
      </router-link>
      <router-link tag="li" exact to="/car/3" active-class="active">
        <a class="nav-item nav-link">Car 3</a>
      </router-link>
      <router-link tag="li" to="/car/4" active-class="active">
        <a class="nav-item nav-link">Car 4</a>
      </router-link>
    </div>
  </div>
</nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>
