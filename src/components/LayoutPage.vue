<template>
  <div class="layout d-flex flex-column min-vh-100">
    <nav class="navbar navbar-expand navbar-dark bg-success">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">
          <i class="bi bi-house"></i> Home
        </router-link>
        <div class="navbar-nav ms-auto">
          <router-link to="/products" class="nav-link">
            <i class="bi bi-bag"></i> Products
          </router-link>
          <router-link to="/order" class="nav-link">
            <i class="bi bi-cart"></i> Place Order
          </router-link>
          <router-link to="/contact" class="nav-link">
            <i class="bi bi-telephone"></i> Contact
          </router-link>
        </div>
      </div>
    </nav>

    <main class="flex-grow-1">
      <router-view></router-view>
    </main>

    <footer class="bg-light py-3">
      <div class="container">
        <p class="text-center mb-0">&copy; All rights reserved</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'LayoutPage'
}
</script>

<style scoped>
/* Add your component-specific styles here */
</style>