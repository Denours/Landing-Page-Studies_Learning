<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content" data-aos="fade-up">
        <h1 class="hero-title">
          Apprendre et réussir <span class="text-gradient">en ligne</span><br />
          avec Studies Learning
        </h1>

        <p class="hero-subtitle" data-aos="fade-up" data-aos-delay="100">
          À chaque passion, la formation disponible 24h/24, 7j/7. Faites l'expérience<br />
          de l'enseignement à distance avec Studies Learning, la première<br />
          plateforme de formation en ligne en Afrique.
        </p>

        <div class="hero-cta" data-aos="fade-up" data-aos-delay="200">
          <button class="btn btn-primary">INSCRIVEZ-VOUS »</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding-top: 80px;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../images/learning-stud.jpg');
  background-size: cover;
  opacity: 0.5;
  z-index: -1;
}

.container {
  position: relative;
  z-index: 1;
}

.hero-content {
  max-width: 1600px;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: var(--dark-blue);
  text-align: center;
}

.text-gradient {
  background: var(--gradient-purple);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--gray-800);
  margin-bottom: 2.5rem;
  opacity: 0.9;
  text-align: center;
}

.hero-cta {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 1rem 2.5rem;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  display: block;
  margin: auto;
}

.mouse {
  width: 28px;
  height: 45px;
  border: 2px solid var(--primary-purple);
  border-radius: 20px;
  position: relative;
}

.wheel {
  width: 4px;
  height: 8px;
  background: var(--primary-purple);
  border-radius: 2px;
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  animation: scroll 1.5s ease-in-out infinite;
}

@keyframes scroll {
  0%,
  100% {
    top: 8px;
    opacity: 1;
  }
  50% {
    top: 20px;
    opacity: 0.5;
  }
}

@media (max-width: 768px) {
  .hero {
    padding-top: 100px;
    min-height: auto;
    padding-bottom: 3rem;
  }

  .container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .hero-content {
    text-align: center;
  }

  .hero-cta {
    justify-content: center;
  }
}
</style>
