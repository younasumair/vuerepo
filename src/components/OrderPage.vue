<template>
  <div>
    <!-- Header Section -->
    <header class="jumbotron text-center bg-light p-2">
      <h1 class="display-4 mb-4 fw-bold">Place Order</h1>
    </header>

    <!-- Main Content Section -->
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <!-- Order Form -->
          <form @submit.prevent="submitOrder">
            <!-- Form Fields -->
            <div class="mb-3">
              <label for="name" class="form-label">Your Name</label>
              <input type="text" class="form-control" id="name" v-model="order.name" required>
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label">Your Phone Number</label>
              <input type="tel" class="form-control" id="phone" v-model="order.phone" required>
            </div>
            <div class="mb-3">
              <label for="gender" class="form-label">Your Gender</label>
              <select class="form-select" id="gender" v-model="order.gender" required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="category" class="form-label">Product Category</label>
              <select class="form-select" id="category" v-model="order.category" required>
                <option value="">Select Category</option>
                <option value="Men">Men</option>
                <option value="Ladies">Ladies</option>
                <option value="Kids">Kids</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="size" class="form-label">Shoe Size</label>
              <select class="form-select" id="size" v-model="order.size" required>
                <option value="">Select Size</option>
                <option v-for="size in shoeSizes" :key="size" :value="size">{{ size }}</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="productCode" class="form-label">Product Code</label>
              <input type="text" class="form-control" id="productCode" v-model="order.productCode" required>
            </div>
            <div class="mb-3">
              <label for="color" class="form-label">Shoe Color</label>
              <input type="text" class="form-control" id="color" v-model="order.color" required>
            </div>
            <div class="mb-3">
              <label for="quantity" class="form-label">Quantity</label>
              <input type="number" class="form-control" id="quantity" v-model="order.quantity" required>
            </div>
            <div class="mb-3">
              <label for="address" class="form-label">Your Address</label>
              <textarea class="form-control" id="address" rows="3" v-model="order.address" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Place Order</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'OrderPage',
  data() {
    return {
      order: {
        name: '',
        phone: '',
        gender: '',
        category: '',
        size: '',
        productCode: '',
        color: '',
        quantity: '',
        address: ''
      },
      shoeSizes: Array.from({ length: 31 }, (_, i) => 10 + i)
    };
  },
  methods: {
    submitOrder() {
      axios.post('http://localhost:3000/api/orders', this.order)
        .then(response => {
          console.log(response.data);
          alert('Your order has been placed successfully. We will contact you shortly.');
          this.clearForm();
        })
        .catch(error => {
          console.error('Error:', error);
          alert('There was an error processing your order. Please try again later.');
        });
    },
    clearForm() {
      this.order = {
        name: '',
        phone: '',
        gender: '',
        category: '',
        size: '',
        productCode: '',
        color: '',
        quantity: '',
        address: ''
      };
    }
  }
};
</script>

<style scoped>
/* Custom Styles */
</style>