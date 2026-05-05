<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-content">
        <div class="navbar-brand">Belal</div>
        <div class="navbar-links">
          <a href="#about" class="navbar-link">About</a>
          <a href="#experience" class="navbar-link">Experience</a>
          <a href="#projects" class="navbar-link">Projects</a>
          <a href="#contact" class="navbar-link">Contact</a>
        </div>
        <div class="navbar-mobile-toggle">
          <button @click="toggleMenu" class="navbar-toggle-btn">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      <div v-if="isMenuOpen" class="navbar-mobile-menu">
        <div class="navbar-mobile-links">
          <a href="#about" class="navbar-mobile-link">About</a>
          <a href="#experience" class="navbar-mobile-link">Experience</a>
          <a href="#projects" class="navbar-mobile-link">Projects</a>
          <a href="#contact" class="navbar-mobile-link">Contact</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(17, 24, 39, 0.8);
  backdrop-filter: blur(10px);
  z-index: 50;
  transition: all 0.3s ease;
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--accent);
}

.navbar-links {
  display: flex;
  gap: 2rem;
}

.navbar-link {
  color: var(--text-para);
  text-decoration: none;
  transition: color 0.3s ease;
}

.navbar-link:hover {
  color: var(--accent);
}

.navbar-mobile-toggle {
  display: none;
}

.navbar-toggle-btn {
  background: none;
  border: none;
  color: var(--text-para);
  cursor: pointer;
  transition: color 0.3s ease;
}

.navbar-toggle-btn:hover {
  color: var(--accent);
}

.navbar-mobile-menu {
  background: rgba(17, 24, 39, 0.95);
  backdrop-filter: blur(10px);
}

.navbar-mobile-links {
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.navbar-mobile-link {
  display: block;
  padding: 0.75rem 1rem;
  color: var(--text-para);
  text-decoration: none;
  transition: color 0.3s ease;
}

.navbar-mobile-link:hover {
  color: var(--accent);
}

@media (max-width: 768px) {
  .navbar-links {
    display: none;
  }

  .navbar-mobile-toggle {
    display: block;
  }
}
</style>