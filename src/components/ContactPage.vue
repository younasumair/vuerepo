<template>
  <div>
    <!-- Header Section -->
    <header class="jumbotron text-center bg-light p-2">
      <h1 class="display-4 mb-4 fw-bold">Contact Us</h1>
      <p class="lead">Get in Touch with Us</p>
      <hr class="my-4">
      <p>Have questions or want to learn more about our shoes? Contact us, and we'll be happy to assist you.</p>
    </header>

    <!-- Main Content Section -->
    <div class="container">
      <div class="row">
        <!-- Contact Information Section -->
        <div class="col-lg-6">
          <h2 class="mb-4">Contact Information</h2>
          <ul class="list-unstyled mb-4">
            <li><i class="bi bi-geo-alt-fill me-2"></i> 123 Plaza, Mansehra, KPK, Pakistan</li>
            <li><i class="bi bi-envelope-fill me-2"></i> umair.ciitatd@gmail.com</li>
            <li><i class="bi bi-telephone-fill me-2"></i> +905353884636</li>
          </ul>

          <h2 class="mb-4">Send Us a Message</h2>
          <form @submit.prevent="submitForm">
            <div class="mb-3">
              <label for="name" class="form-label">Your Name</label>
              <input type="text" class="form-control" id="name" v-model="formData.name" placeholder="Your Name" required>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Your Email</label>
              <input type="email" class="form-control" id="email" v-model="formData.email" placeholder="Your Email" required>
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Your Message</label>
              <textarea class="form-control" id="message" v-model="formData.message" rows="4" placeholder="Type your message here..." required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit Response</button>
          </form>
        </div>

        <!-- Map and Contact Section -->
        <div class="col-lg-6">
          <h2 class="mb-4 text-center">Visit Our Store</h2>
          <div class="ratio ratio-16x9 mb-4">
            <!-- Google Map Embedded -->
            <iframe class="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4130.199793572896!2d73.13969318973807!3d34.33180608031889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38da1d378f2099d7%3A0x7eac2b43f450c785!2sMansehra%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1648446215609!5m2!1sen!2sus" allowfullscreen></iframe>
          </div>

          <!-- Contact Links -->
          <div class="text-center">
            <a href="https://wa.me/+905353884636" class="btn btn-success mb-2" target="_blank">
              <i class="bi bi-whatsapp me-2"></i>
              Contact at WhatsApp
            </a>
            <br>
            <a href="https://www.facebook.com/p/Kamran-Shoes-100083493363474/" class="btn btn-primary mb-2" target="_blank">
              <i class="bi bi-facebook me-2"></i>
              Follow us on Facebook
            </a>
            <br>
            <a href="https://www.facebook.com/p/Kamran-Shoes-100083493363474/" class="btn btn-danger mb-2" target="_blank">
              <i class="bi bi-instagram me-2"></i>
              Follow us on Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ContactPage',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      axios.post('http://localhost:3000/api/contact', this.formData)
        .then(response => {
          console.log(response.data);
          alert('Your message has been sent successfully. We will get back to you shortly.');
          this.clearForm();
        })
        .catch(error => {
          console.error('Error:', error);
          alert('There was an error sending your message. Please try again later.');
        });
    },
    clearForm() {
      this.formData.name = '';
      this.formData.email = '';
      this.formData.message = '';
    }
  }
};
</script>

<style scoped>
/* Custom Styles */
.jumbotron {
  background-color: #f8f9fa; /* Light gray background color */
}

.list-unstyled li {
  margin-bottom: 1rem;
}
</style>