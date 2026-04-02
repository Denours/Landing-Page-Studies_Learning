<template>
  <section class="faq section">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">
        <span class="title-orange">FOIRE AUX QUESTIONS</span>
      </h2>

      <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">
        Comment ça marche ? La rubrique FAQ répond à toutes vos interrogations
      </p>

      <div class="faq-container" data-aos="fade-up" data-aos-delay="200">
        <div
          v-for="(item, index) in faqItems"
          :key="index"
          class="faq-item"
          :class="{ active: activeIndex === index }"
        >
          <button class="faq-question" @click="toggleFaq(index)">
            <span>{{ item.question }}</span>
            <svg
              class="faq-icon"
              :class="{ rotated: activeIndex === index }"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19 9L12 16L5 9"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </button>

          <div class="faq-answer" :class="{ open: activeIndex === index }">
            <div class="faq-answer-content">
              <p>{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref(0)

const faqItems = [
  {
    question: 'Quelle est la définition du e-Learning ?',
    answer:
      "C'est l'utilisation des nouvelles technologies multimédias et de l'Internet pour améliorer la qualité de l'apprentissage en facilitant l'accès à des ressources et des services, ainsi que les échanges et la collaboration à distance. Les avantages du e-learning résident dans la diversité des contenus en ligne que ce soit l'élimination de textes, le coût et le gain de temps en éliminant les déplacements liés à la location de salles de classe, au matériel et aux déplacements, salles pression et échéances. Accessibilité - Rend l'éducation accessible aux régions éloignées et aux communautés défavorisées.",
  },
  {
    question: 'Quels sont les principaux avantages du e-Learning ?',
    answer:
      "Le e-learning offre une flexibilité totale : apprenez à votre rythme, n'importe où et n'importe quand. Il permet également de réduire les coûts de formation, d'accéder à un contenu toujours actualisé et de suivre précisément sa progression.",
  },
  {
    question: 'Comment se connecter et accéder à votre compte ?',
    answer:
      "Pour vous connecter, cliquez sur l'icône utilisateur en haut à droite, saisissez vos identifiants (email et mot de passe), et accédez immédiatement à votre espace personnel avec tous vos cours et certifications.",
  },
  {
    question: 'Comment visionner vos formations en ligne ?',
    answer:
      "Une fois connecté, rendez-vous dans 'Mes Cours', sélectionnez la formation souhaitée, et cliquez sur 'Commencer'. Vous pouvez regarder les vidéos, télécharger les ressources et suivre votre progression en temps réel.",
  },
  {
    question: 'Comment charger de mot de passe ?',
    answer:
      "Cliquez sur 'Mot de passe oublié' sur la page de connexion, entrez votre adresse email, et vous recevrez un lien de réinitialisation. Suivez les instructions pour créer un nouveau mot de passe sécurisé.",
  },
]

const toggleFaq = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<style scoped>
.faq {
  background: var(--gray-50);
  padding: 6rem 0;
}

.section-title {
  text-align: center;
  margin-bottom: 1rem;
}

.title-orange {
  color: var(--orange);
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
}

.section-subtitle {
  text-align: center;
  color: var(--gray-800);
  font-size: 1rem;
  margin-bottom: 4rem;
  opacity: 0.8;
}

.faq-container {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.faq-item {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.faq-item.active {
  box-shadow: 0 8px 30px rgba(139, 92, 246, 0.15);
}

.faq-question {
  width: 100%;
  padding: 1.5rem 2rem;
  background: transparent;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--dark-blue);
  text-align: left;
  transition: all 0.3s ease;
}

.faq-question:hover {
  color: var(--primary-purple);
}

.faq-icon {
  flex-shrink: 0;
  color: var(--primary-purple);
  transition: transform 0.3s ease;
}

.faq-icon.rotated {
  transform: rotate(180deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.faq-answer.open {
  max-height: 500px;
}

.faq-answer-content {
  padding: 0 2rem 1.5rem 2rem;
}

.faq-answer-content p {
  font-size: 0.95rem;
  line-height: 1.8;
  color: var(--gray-800);
  margin: 0;
  text-align: justify;
}

@media (max-width: 768px) {
  .faq-question {
    padding: 1.25rem 1.5rem;
    font-size: 0.95rem;
  }

  .faq-answer-content {
    padding: 0 1.5rem 1.25rem 1.5rem;
  }
}
</style>
