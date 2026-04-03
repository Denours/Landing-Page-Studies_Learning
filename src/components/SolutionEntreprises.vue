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
          <img src="../images/prem-platform.jpg" alt="prem-plat" class="first-platf" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.solution-entreprises {
  background: var(--gray-50);
  padding: 10rem 0;
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

.description-box p {
  font-size: 0.95rem;
  line-height: 1.8;
  color: var(--gray-800);
  text-align: justify;
}

.first-platf {
  width: 100%;
}

.platform-preview {
  margin: 2rem 0;
  display: flex;
  justify-content: center;
}

@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
