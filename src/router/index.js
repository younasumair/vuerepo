import { createRouter, createWebHistory } from 'vue-router';
import LayoutPage from '../components/LayoutPage.vue';
import HomePage from '../components/HomePage.vue';
import ProductsPage from '../components/ProductsPage.vue';
import ContactPage from '../components/ContactPage.vue';
import OrderPage from '../components/OrderPage.vue';

const routes = [
  {
    path: '/',
    component: LayoutPage,
    children: [
      { path: '/', component: HomePage, name: 'home' },
      { path: '/products', component: ProductsPage, name: 'products' },
      { path: '/contact', component: ContactPage, name: 'contact' },
      { path: '/order', component: OrderPage, name: 'order' }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;