import { createRouter, createWebHistory } from "vue-router"
import Profilo from "../views/Profilo.vue"
import NotFound from "../views/NotFound.vue"
import NeverJoinedServer from "../views/NeverJoinedServer.vue"
import NotLoggedIn from "../views/NotLoggedIn.vue"

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
    path: "/notloggedin",
    name: "NotLoggedIn",
    component: NotLoggedIn,
    meta: {
      title: "Accedi a Steam"
    }
  },
  {
    path: "/neverjoined",
    name: "NeverJoinedServer",
    component: NeverJoinedServer,
    meta: {
      title: "Accedi al server"
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
