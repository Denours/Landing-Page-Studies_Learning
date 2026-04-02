<template>
  <section class="voir-plus section">
    <div class="container">
      <div class="content-wrapper">
        <div class="visual-side" data-aos="fade-right">
            <img src="../images/cap.jpg" alt="voir-plus" />
        </div>

        <div class="text-side" data-aos="fade-left">
          <p class="description">
            Les formations en ligne sur Studies Learning sont accessibles partout dans le monde
            24h/24, 7j/7. Rejoignez plus de 60 000 cours dont plus de 80 catégories inédits pour
            vous donner les clés de la réussite. Vous recherchez la formation adaptée à votre projet
            ? Consultez la liste des cours répertoriés par catégorie ici.
          </p>
          <button class="btn-voir-plus">VOIR PLUS DE COURS</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.voir-plus {
  background: white;
  padding: 0rem 0;
  margin-bottom: 7%;
}

.content-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.visual-side {
  display: flex;
  justify-content: center;
}

.promo-image {
  width: 100%;
  max-width: 450px;
  aspect-ratio: 1;
  border-radius: 30px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.gradient-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #3b82f6 100%);
  opacity: 0.9;
}

.promo-content {
  position: relative;
  z-index: 1;
  padding: 3rem;
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.promo-content h3 {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  line-height: 1;
  margin-bottom: 1rem;
  letter-spacing: 2px;
}

.subtitle {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.features {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  font-size: 1rem;
}

.features li {
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.cta-text {
  margin-top: 1.5rem;
  font-size: 0.95rem;
  line-height: 1.6;
  opacity: 0.95;
}

.text-side {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.description {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--gray-800);
  text-align: justify;
}

.btn-voir-plus {
  background: var(--gradient-purple);
  color: white;
  border: none;
  padding: 1.2rem 2.5rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
  align-self: flex-start;
  letter-spacing: 1px;
}

.btn-voir-plus:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(139, 92, 246, 0.4);
}

@media (max-width: 768px) {
  .content-wrapper {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .promo-image {
    max-width: 100%;
  }

  .btn-voir-plus {
    align-self: stretch;
  }
}
</style>
