<template>
  <div>
    <!-- Navbar Section -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-success">
      <div class="container">
        <!-- Search Bar -->
        <form class="d-flex me-auto">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-light" type="submit">Search</button>
        </form>

        <!-- Shoe Categories -->
        <div class="navbar-nav ms-auto">
          <button class="btn btn-link text-light" @click="showAllProducts">
            <i class="bi bi-globe"></i> All Products
          </button>
          <button class="btn btn-link text-light" @click="showMenProducts">
            <i class="bi bi-person-fill"></i> Men
          </button>
          <button class="btn btn-link text-light" @click="showLadiesProducts">
            <i class="bi bi-person-fill"></i> Ladies
          </button>
          <button class="btn btn-link text-light" @click="showKidsProducts">
            <i class="bi bi-person-fill"></i> Kids
          </button>
        </div>
      </div>
    </nav>

    <!-- Header Section -->
    <header class="jumbotron text-center bg-light p-2">
      <h1 class="display-4 mb-4 fw-bold">Our Products</h1>
    </header>

    <!-- Main Content Section -->
    <div class="container">
      <div class="row">
        <!-- Product Cards Section -->
        <div class="col-lg-4 mb-4" v-for="product in displayedProducts" :key="product.id">
          <div class="card">
            <img :src="product.image" class="card-img-top" :alt="product.name">
            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">{{ product.description }}</p>
              <p class="card-text">Price: ${{ product.price }}</p>
              <button class="btn btn-primary">View Details</button>
              <p class="card-text mt-3">Product Code: {{ product.code }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductPage',
  data() {
    return {
      products: [
        { id: 1, name: 'Product 1', description: 'Description of Product 1', price: 50, image: require('@/assets/img1.jpg'), code: '001' },
        { id: 2, name: 'Product 2', description: 'Description of Product 2', price: 70, image: require('@/assets/img2.jpg'), code: '002' },
        { id: 3, name: 'Product 3', description: 'Description of Product 3', price: 60, image: require('@/assets/img3.jpg'), code: '003' },
        { id: 4, name: 'Product 4', description: 'Description of Product 4', price: 55, image: require('@/assets/img4.jpg'), code: '004' },
        { id: 5, name: 'Product 5', description: 'Description of Product 5', price: 75, image: require('@/assets/img5.jpg'), code: '005' },
        { id: 6, name: 'Product 6', description: 'Description of Product 6', price: 65, image: require('@/assets/img6.jpg'), code: '006' },
        { id: 7, name: 'Product 7', description: 'Description of Product 7', price: 45, image: require('@/assets/img7.jpg'), code: '007' },
        { id: 8, name: 'Product 8', description: 'Description of Product 8', price: 80, image: require('@/assets/img8.jpg'), code: '008' },
      ],
      displayedProducts: []
    };
  },
  methods: {
    showAllProducts() {
      this.displayedProducts = this.products;
    },
    showMenProducts() {
      this.displayedProducts = this.products.filter(product => product.id >= 1 && product.id <= 3);
    },
    showLadiesProducts() {
      this.displayedProducts = this.products.filter(product => product.id >= 4 && product.id <= 6);
    },
    showKidsProducts() {
      this.displayedProducts = this.products.filter(product => product.id >= 7 && product.id <= 8);
    }
  },
  created() {
    // By default, show all products
    this.showAllProducts();
  }
};
</script>

<style scoped>
/* Custom Styles */
</style>
