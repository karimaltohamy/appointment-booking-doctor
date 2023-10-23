<template>
  <main>
    <header-vue />
    <hero-section />
  </main>
  <how-it-works />
  <about-section />
  <services-section />
  <feature-section />
  <doctors-section />
  <faq-section />
  <testimonial-section />
</template>

<script>
import HeroSection from "@/components/HeroSection.vue";
import HeaderVue from "@/components/Header.vue";
import HowItWorks from "@/components/HowItWorks.vue";
import AboutSection from "@/components/AboutSection.vue";
import ServicesSection from "@/components/ServicesSection.vue";
import FeatureSection from "@/components/FeatureSection.vue";
import DoctorsSection from "@/components/Doctors/DoctorsSection.vue";
import FaqSection from "@/components/faq/FaqSection.vue";
import TestimonialSection from "@/components/TestimonialSection.vue";

export default {
  name: "HomeView",
  components: {
    HeroSection,
    HeaderVue,
    HowItWorks,
    AboutSection,
    ServicesSection,
    FeatureSection,
    DoctorsSection,
    FaqSection,
    TestimonialSection
  },
};
</script>

<style>
main {
  background-image: url(../assets/images/Blur.png);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
