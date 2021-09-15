import { createRouter, createWebHistory } from "vue-router"
import Profilo from "../views/Profilo.vue"
import NotFound from "../views/NotFound.vue"

const routes = [
  {
    path: "/",
    name: "Profilo",
    component: Profilo,
    meta: {
      title: "Profilo"
    }
  },
  {
    path: "/:catchAll(.*)",
    name: "notFound",
    component: NotFound,
    meta: {
      title: "Pagina non trovata"
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `Dreamworld | ${to.meta.title}`
  next()
})

export default router 
