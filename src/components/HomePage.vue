<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero bg-dark text-light py-5 text-center">
      <h1 class="animate__animated animate__bounceInLeft">Welcome to Kamran Shoes</h1>
      <p class="animate__animated animate__fadeInUp">Find the perfect pair of shoes for any occasion.</p>
      <button class="btn btn-primary animate__animated animate__pulse animate__infinite">Shop Now</button>
    </section>

    <!-- Featured Products Section -->
    <section class="featured-products py-5">
      <div class="container">
        <h2 class="text-center animate__animated animate__fadeInDown">Featured Products</h2>
        <div class="row justify-content-center">
          <div class="col-lg-3 col-md-4 col-sm-6 mb-4" v-for="product in featuredProducts" :key="product.id">
            <div class="card animate__animated animate__zoomIn">
              <img :src="require(`@/assets/${product.image}`)" :alt="product.name" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">{{ product.name }}</h5>
                <p class="card-text">{{ product.price }}</p>
                <button class="btn btn-primary animate__animated animate__pulse animate__infinite">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Shop by Category Section -->
    <section class="categories bg-light py-5">
      <div class="container">
        <h2 class="text-center animate__animated animate__fadeInUp">Shop by Category</h2>
        <div class="row justify-content-center">
          <div class="col-lg-3 col-md-4 col-sm-6 mb-4" v-for="category in categories" :key="category.id">
            <div class="card animate__animated animate__zoomIn">
              <img :src="require(`@/assets/${category.image}`)" :alt="category.name" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">{{ category.name }}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Blinking Images Section -->
    <section class="blinking-images py-5">
      <div class="container">
        <h2 class="text-center animate__animated animate__fadeInDown">Blinking Images</h2>
        <div class="row justify-content-center">
          <div class="col-lg-3 col-md-4 col-sm-6 mb-4" v-for="(image, index) in blinkingImages" :key="index">
            <div class="image-container animate__animated animate__flash animate__infinite animate__slower">
              <img :src="require(`@/assets/${image}`)" :alt="`Image ${index + 1}`" class="img-fluid">
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      featuredProducts: [
        {
          id: 1,
          name: 'Running Shoes',
          price: '$99.99',
          image: 'img1.jpg'
        },
        {
          id: 2,
          name: 'Dress Shoes',
          price: '$129.99',
          image: 'img2.jpg'
        },
        // Add more featured products here
      ],
      categories: [
        {
          id: 1,
          name: 'Men',
          image: 'img3.jpg'
        },
        {
          id: 2,
          name: 'Women',
          image: 'img4.jpg'
        },
        {
          id: 3,
          name: 'Kids',
          image: 'img5.jpg'
        },
        // Add more categories here
      ],
      blinkingImages: ['img6.jpg', 'img7.jpg', 'img8.jpg']
    }
  }
}
</script>

<style scoped>
/* Custom Styles */
.hero {
  background-color: #343a40;
}

.featured-products {
  background-color: #f8f9fa;
}

.categories {
  background-color: #e9ecef;
}

.blinking-images {
  background-color: #f8f9fa;
}

.card {
  border: none;
  transition: transform 0.3s ease-in-out;
}

.card:hover {
  transform: translateY(-5px);
}

.card-title {
  height: 3rem;
  overflow: hidden;
}
</style>
