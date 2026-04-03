<template>
  <div
    class="formation-card"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    :class="{ 'is-hovered': isHovered }"
  >
    <!-- Effet de brillance au survol -->
    <div class="card-shine"></div>

    <!-- Image avec overlay gradient -->
    <div class="card-image">
      <img :src="image" :alt="title" />
      <div class="image-overlay"></div>
    </div>

    <!-- Contenu -->
    <div class="card-content">
      <h3>{{ title }}</h3>

      <!-- Badges catégorie (optionnel) -->
      <div class="card-meta" v-if="category">
        <span class="badge">{{ category }}</span>
      </div>
    </div>

    <!-- Bouton avec effet ripple -->
    <button class="btn-voir" @click="handleClick" @mousedown="createRipple">
      <span>VOIR</span>
      <svg class="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path
          d="M5 12h14M12 5l7 7-7 7"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['click'])

const isHovered = ref(false)

function handleClick() {
  emit('click')
}

function createRipple(event) {
  const button = event.currentTarget
  const ripple = document.createElement('span')
  const rect = button.getBoundingClientRect()
  const size = Math.max(rect.width, rect.height)
  const x = event.clientX - rect.left - size / 2
  const y = event.clientY - rect.top - size / 2

  ripple.style.width = ripple.style.height = size + 'px'
  ripple.style.left = x + 'px'
  ripple.style.top = y + 'px'
  ripple.classList.add('ripple')

  button.appendChild(ripple)

  setTimeout(() => ripple.remove(), 600)
}
</script>

<style scoped>
.formation-card {
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow:
    0 4px 20px rgba(0, 0, 0, 0.06),
    0 0 1px rgba(0, 0, 0, 0.04);
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  cursor: pointer;
  position: relative;
  transform-style: preserve-3d;
  min-height: 420px;
  display: flex;
  flex-direction: column;
}

/* Effet de brillance au survol */
.card-shine {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent 30%,
    rgba(255, 255, 255, 0.3) 50%,
    transparent 70%
  );
  transform: translateX(-100%) translateY(-100%) rotate(45deg);
  transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
  pointer-events: none;
  z-index: 10;
}

.formation-card:hover .card-shine {
  transform: translateX(100%) translateY(100%) rotate(45deg);
}

/* Hover state */
.formation-card:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow:
    0 20px 60px rgba(139, 92, 246, 0.25),
    0 0 1px rgba(139, 92, 246, 0.1);
}

/* Image container */
.card-image {
  width: 100%;
  height: 220px;
  overflow: hidden;
  position: relative;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.formation-card:hover .card-image img {
  transform: scale(1.15) rotate(2deg);
}

/* Overlay gradient sur image */
.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(139, 92, 246, 0) 0%, rgba(139, 92, 246, 0.1) 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.formation-card:hover .image-overlay {
  opacity: 1;
}

/* Contenu */
.card-content {
  padding: 1.75rem;
  min-height: 110px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex-grow: 1;
}

.card-content h3 {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--dark-blue);
  line-height: 1.4;
  transition: color 0.3s ease;
}

.formation-card:hover .card-content h3 {
  color: var(--primary-purple);
}

/* Badge catégorie */
.card-meta {
  display: flex;
  gap: 0.5rem;
}

.badge {
  display: inline-block;
  padding: 0.35rem 0.75rem;
  background: rgba(139, 92, 246, 0.1);
  color: var(--primary-purple);
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

/* Bouton VOIR */
.btn-voir {
  width: 100%;
  padding: 1.15rem;
  background: var(--gradient-purple);
  color: white;
  border: none;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  letter-spacing: 1.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.btn-voir:hover {
  background: linear-gradient(135deg, #7c3aed 0%, #9333ea 100%);
  gap: 0.75rem;
  letter-spacing: 2px;
}

/* Icône flèche */
.arrow-icon {
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.btn-voir:hover .arrow-icon {
  transform: translateX(4px);
}

/* Effet ripple au clic */
.ripple {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.6);
  transform: scale(0);
  animation: ripple-animation 0.6s ease-out;
  pointer-events: none;
}

@keyframes ripple-animation {
  to {
    transform: scale(4);
    opacity: 0;
  }
}

/* Animation d'entrée */
@keyframes card-enter {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.formation-card {
  animation: card-enter 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) backwards;
}

/* Responsive */
@media (max-width: 768px) {
  .card-content {
    padding: 1.25rem;
    min-height: 90px;
  }

  .card-content h3 {
    font-size: 1rem;
  }
}
</style>
