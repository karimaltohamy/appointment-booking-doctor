import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignUp from "../views/SignUp.vue";
import Login from "../views/Login.vue";
import Contact from "../views/Contact.vue";
import Services from "../views/Services.vue";
import Doctors from "../views/doctors/Doctors.vue";
import DoctorDetails from "../views/doctors/DoctorDetails.vue";
import AccountUser from "../views/accountUser/AccountUser.vue";
import AccountDoctor from "../views/acoountDoctor/AccountDoctor.vue";

// user form local storage
const user = JSON.parse(localStorage.getItem("user"));

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
    path: "/users/profile/me",
    name: "profileUser",
    component: AccountUser,
    beforeEnter: (to, form, next) => {
      if (user) {
        next();
      } else {
        next("/login");
      }
    },
  },
  {
    path: "/doctors/profile/me",
    name: "profileDoctor",
    component: AccountDoctor,
    beforeEnter: (to, form, next) => {
      if (user) {
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
  if (to.name == "login" && user !== null) {
    next("/");
  }

  if (to.name == "signup" && user !== null) {
    next("/");
  }

  next();
});

export default router;
