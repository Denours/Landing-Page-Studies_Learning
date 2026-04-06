<template>
  <header class="header" :class="{ scrolled: isScrolled }">
    <div class="container">
      <nav class="nav">
        <div class="logo">
          <a href="#"
            ><img src="../images/logostud.png" alt="Studies Learning" class="logo-img"
          /></a>
        </div>

        <ul class="nav-links" :class="{ open: mobileMenuOpen }">
          <li><a href="#accueil" @click="mobileMenuOpen = false">Accueil</a></li>
          <li><a href="#formations" @click="mobileMenuOpen = false">Cours & Formations</a></li>
          <li>
            <a href="#devenir-formateur" @click="mobileMenuOpen = false">Devenir Formateur</a>
          </li>
          <li><a href="#blog" @click="mobileMenuOpen = false">Le Blog</a></li>
          <li><a href="#contact" @click="mobileMenuOpen = false">Contact</a></li>
        </ul>

        <div class="nav-actions">
          <a href="#" class="user-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
            </svg>
          </a>
          <a href="#" class="cart-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path
                d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
              />
            </svg>
          </a>
        </div>
        <div class="search-div">
          <input type="text" class="search" placeholder="Recherchez un mot-clé" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            style="cursor: pointer"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>

        <button class="mobile-menu-btn" @click="toggleMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  border-bottom: 1px solid transparent;
}

.header.scrolled {
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  border-bottom-color: var(--gray-200);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  position: relative;
  flex-wrap: wrap;
}

.logo {
  flex-shrink: 0;
}

.logo-img {
  height: 60px;
  width: auto;
  object-fit: contain;
  padding-left: 10px;
  margin-top: 20%;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
  margin-left: 8%;
}

.nav-links.open {
  display: flex;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1.5rem;
  margin: 0;
  background: rgba(255, 255, 255, 0.98);
  border-bottom: 1px solid var(--gray-200);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
  z-index: 999;
}

.nav-links.open li {
  width: 100%;
}

.nav-links a {
  color: var(--gray-light);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  position: relative;
  transition: color 0.3s ease;
}

.nav-links a[href='#formations'],
.nav-links a[href='#devenir-formateur'] {
  word-spacing: 1px;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--gradient-purple);
  transition: width 0.3s ease;
}

.nav-links a:hover {
  color: var(--primary-purple);
}

.nav-links a:hover::after {
  width: 100%;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.user-icon,
.cart-icon {
  color: var(--gray-800);
  transition: all 0.3s ease;
  cursor: pointer;
}

.user-icon:hover,
.cart-icon:hover {
  color: var(--primary-purple);
  transform: scale(1.1);
}

.search-div {
  display: flex;
  gap: 0.5rem;
}
.search {
  border: 1px solid var(--gray-200);
  border-radius: 10px;
  padding: 6px;
}

.search::placeholder {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: lightgray;
}
.mobile-menu-btn {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.mobile-menu-btn span {
  width: 25px;
  height: 3px;
  background: var(--gray-800);
  border-radius: 2px;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
    width: 100%;
    margin-left: 0;
  }

  /* .nav-actions,
  .search-div {
    display: none;
  } */

  .mobile-menu-btn {
    display: flex;
  }
}
</style>
