import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignUp from "../views/SignUp.vue";
import Login from "../views/Login.vue";
import Contact from "../views/Contact.vue";
import Services from "../views/Services.vue";
import SuccessFull from "../views/SuccessFull.vue";
import CanslePage from "../views/CanslePage.vue";
import Doctors from "../views/doctors/Doctors.vue";
import DoctorDetails from "../views/doctors/DoctorDetails.vue";
import AccountUser from "../views/accountUser/AccountUser.vue";
import AccountDoctor from "../views/acoountDoctor/AccountDoctor.vue";
import store from "@/store";


const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/services",
    name: "services",
    component: Services,
  },
  {
    path: "/doctors",
    name: "doctors",
    component: Doctors,
  },
  {
    path: "/doctorDetails/:id",
    name: "doctorDetails",
    component: DoctorDetails,
  },
  {
    path: "/success",
    name: "success",
    component: SuccessFull,
  },
  {
    path: "/canslePage",
    name: "canslePage",
    component: CanslePage,
  },
  {
    path: "/users/profile/me",
    name: "profileUser",
    component: AccountUser,
    beforeEnter: (to, form, next) => {
      if (store.state.user == null) {
        next("/login");
      }
      next();
    },
  },
  {
    path: "/doctors/profile/me",
    name: "profileDoctor",
    component: AccountDoctor,
    beforeEnter: (to, form, next) => {
      if (store.state.user !== null) {
        next();
      } else {
        next("/login");
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  strict: true,
});

router.beforeEach((to, form, next) => {
  if (to.name == "login" && store.state.user !== null) {
    next("/");
  }

  if (to.name == "signup" && store.state.user !== null) {
    next("/");
  }

  next();
});

export default router;
