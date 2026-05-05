<template>
  <div id="app">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <ProjectsSection />
    <CVSection />
    <ContactSection />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import CVSection from './components/CVSection.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/Footer.vue'
</script>
