<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 60
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled, 'transparent': !isScrolled }" id="navbar" role="navigation" aria-label="Navegação principal">
    <div class="navbar-inner">
      <a href="#" class="navbar-logo" aria-label="Cíntia Mendes Advocacia - Página inicial">
        <div class="navbar-logo-text">
          Cíntia Mendes
          <span>Advocacia e Consultoria Jurídica</span>
        </div>
      </a>

      <div class="navbar-links" :class="{ 'active': isMenuOpen }" id="nav-links">
        <a href="#servicos" @click="closeMenu">Serviços</a>
        <a href="#problemas" @click="closeMenu">Como Ajudamos</a>
        <a href="#sobre" @click="closeMenu">Sobre Nós</a>
        <a href="#faq" @click="closeMenu">Dúvidas</a>
        <a href="#contato" @click="closeMenu">Contato</a>
      </div>

      <div class="navbar-cta">
        <a href="https://wa.me/5531984394524?text=Ol%C3%A1%2C%20preciso%20de%20orienta%C3%A7%C3%A3o%20jur%C3%ADdica." class="btn btn-whatsapp btn-sm" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>
          Falar Agora
        </a>
      </div>

      <button class="menu-toggle" :class="{ 'active': isMenuOpen }" @click="toggleMenu" aria-label="Abrir menu" :aria-expanded="isMenuOpen">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>
</template>
