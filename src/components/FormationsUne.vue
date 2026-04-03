<template>
  <section class="formations-une section">
    <div class="container">
      <!-- Titre avec animation gradient -->
      <h2 class="section-title" data-aos="fade-up">
        <span class="title-gradient">FORMATIONS À LA UNE</span>
      </h2>

      <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">
        Découvrez nos top formations à la une en cliquant sur chaque bloc.
      </p>

      <!-- Grid avec composant réutilisable -->
      <div class="formations-grid">
        <FormationCard
          v-for="(formation, index) in formations"
          :key="index"
          :image="formation.image"
          :title="formation.title"
          :category="formation.category"
          :style="{ animationDelay: `${index * 0.1}s` }"
          @click="handleFormationClick(formation)"
        />
      </div>
    </div>
    
    <!-- Décoration de fond -->
    <div class="bg-decoration"></div>
  </section>
</template>

<script setup>
import FormationCard from './FormationCard.vue'

const formations = [
  {
    image: new URL('../images/arh.jpg', import.meta.url).href,
    title: 'Formation Archicad 24: Les nouveautés',
    category: 'Architecture'
  },
  {
    image: new URL('../images/pont.png', import.meta.url).href,
    title: 'La réalisation du suivi des approvisionnements et du stock',
    category: 'Logistique'
  },
  {
    image: new URL('../images/windev.png', import.meta.url).href,
    title: 'Développement d\'applications robustes avec WinDev',
    category: 'Développement'
  },
  {
    image: new URL('../images/charc.jpg', import.meta.url).href,
    title: 'Formation métier en charcuterie cuite',
    category: 'Métiers'
  },
  {
    image: new URL('../images/init.png', import.meta.url).href,
    title: 'Formation Initiation Métier Monétique',
    category: 'Finance'
  },
  {
    image: new URL('../images/fraises.PNG', import.meta.url).href,
    title: 'Formation Agricole Culture Fraises',
    category: 'Agriculture'
  }
]

function handleFormationClick(formation) {
  console.log('Formation cliquée:', formation.title)
  // Ajoute ta logique de navigation ici
}
</script>

<style scoped>
.formations-une {
  background: linear-gradient(
    to bottom,
    var(--gray-50) 0%,
    white 50%,
    var(--gray-50) 100%
  );
  padding: 8rem 0;
  position: relative;
  overflow: hidden;
}

/* Décoration de fond */
.bg-decoration {
  position: absolute;
  top: 10%;
  right: -10%;
  width: 600px;
  height: 600px;
  background: radial-gradient(
    circle,
    rgba(139, 92, 246, 0.08) 0%,
    transparent 70%
  );
  border-radius: 50%;
  pointer-events: none;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) translateX(0px); }
  50% { transform: translateY(-30px) translateX(20px); }
}

/* Titre avec gradient animé */
.section-title {
  text-align: center;
  margin-bottom: 1.5rem;
}

.title-gradient {
  background: linear-gradient(
    135deg,
    var(--orange) 0%,
    var(--pink) 50%,
    var(--primary-purple) 100%
  );
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 800;
  letter-spacing: -0.5px;
  animation: gradient-shift 5s ease infinite;
}

@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* Sous-titre */
.section-subtitle {
  text-align: center;
  color: var(--gray-800);
  font-size: 1.1rem;
  margin-bottom: 5rem;
  opacity: 0.75;
  font-weight: 400;
}

/* Grid responsive */
.formations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (max-width: 768px) {
  .formations-une {
    padding: 5rem 0;
  }
  
  .formations-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .section-subtitle {
    margin-bottom: 3rem;
  }
}
</style>