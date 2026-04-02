<template>
  <section class="solution-entreprises section">
    <div class="container">
      <div class="content-grid">
        <div class="text-side" data-aos="fade-right">
          <h2 class="section-title">
            LA SOLUTION POUR<br />
            <span class="purple-text">LES ENTREPRISES</span>
          </h2>

          <p class="subtitle">Vos collaborateurs vont adorer développer leurs Soft Skills</p>

          <div class="description-box">
            <p>
              Reconduire l'envie d'apprendre à vos collaborateurs nos formations ciblées. Le
              développement des compétences nouvelles déjà acquis durant ce parcours employés se
              lancent dans l'apprentissage et s'en font de temps. Améliorez leurs compétences
              digitales grâce aux formations ciblées. Cultivez l'esprit créatif dans les formations
              référencées en management et travail d'équipe. Ou libérez simplement vos
              collaborateurs de votre rythme talents grâce à une formation avec sur la
              communication, la productivité ou le leadership inspirationnel.
            </p>
          </div>
        </div>

        <div class="visual-side" data-aos="fade-left">
          <img src="../images/prem-platform.jpg" alt="prem-plat" class="first-platf">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.solution-entreprises {
  background: var(--gray-50);
  padding: 6rem 0;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.text-side {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.section-title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  line-height: 1.2;
  color: var(--dark-blue);
}

.purple-text {
  color: var(--primary-purple);
}

.subtitle {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--dark-blue);
}

.description-box {
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.description-box p {
  font-size: 0.95rem;
  line-height: 1.8;
  color: var(--gray-800);
  text-align: justify;
}

.first-platf{
  width: 100%;
}
.promo-card {
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.card-gradient {
  background: linear-gradient(135deg, #f59e0b 0%, #ec4899 50%, #8b5cf6 100%);
  padding: 3rem 2.5rem;
}

.card-title {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 1.5rem;
}

.card-subtitle {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.highlight {
  font-weight: 900;
  font-size: 1.1em;
}

.platform-preview {
  margin: 2rem 0;
  display: flex;
  justify-content: center;
}

.preview-screen {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 1rem;
  width: 100%;
  max-width: 300px;
}

.screen-header {
  background: rgba(255, 255, 255, 0.3);
  height: 30px;
  border-radius: 10px;
  margin-bottom: 1rem;
}

.screen-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.content-block {
  background: rgba(255, 255, 255, 0.3);
  height: 60px;
  border-radius: 10px;
}

.features-badges {
  margin: 2rem 0;
}

.badge {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.badge span {
  font-size: 2rem;
}

.badge p {
  font-size: 0.85rem;
  line-height: 1.5;
  margin: 0;
}

.social-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.social-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background: white;
  color: var(--primary-purple);
  transform: translateY(-3px);
}

@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
