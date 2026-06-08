import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/templates/HomeView.vue";
import AboutUs from "@/templates/AboutUs.vue";
import SolutionsView from "@/templates/SolutionsView.vue";
import ContactsView from "@/templates/ContactsView.vue";


const routes = [
  
    {path: '/', name: 'home', component: HomeView},
    {path: '/aboutus', name: 'aboutus', component: AboutUs},
    {path: '/solutions', name: 'solutions', component: SolutionsView},
    {path: '/contacts', name: 'contacts', component: ContactsView},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router