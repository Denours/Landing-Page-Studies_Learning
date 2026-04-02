<template>
  <section class="agriculture section">
    <div class="container">
      <div class="content-grid">
        <div class="visual-side" data-aos="fade-right">
          <img src="../images/agri.jpg" alt="agric" class="agric" />
        </div>

        <div class="text-side" data-aos="fade-left">
          <h2 class="section-quote">
            J'enseigne plusieurs techniques<br />
            agropastorales en ligne.
          </h2>

          <p class="description">
            J'ai choisi de rejoindre la communauté de formateurs sur Studies Learning pour
            transmettre tous mes savoirs sans limites en Afrique et au-delà. Ingénieur agronome,
            chef d'entreprise et enseignant universitaire, je propose plusieurs formations en
            agriculture que vous retrouverez dans la catégorie agriculture;
          </p>

          <div class="author-info">
            <div class="author-avatar">
              <img
                src="../images/fabrice.jpg"
                alt="Fabrice Djekoung"
              />
            </div>
            <div class="author-details">
              <p class="author-name">Fabrice Djelakoung, Formateur catégorie agriculture.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.agriculture {
  background: linear-gradient(135deg, #1e293b 0%, #893BF6 100%);
  padding: 6rem 0;
  color: white;
}
.agric {
  width: 100%;
}
.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 0 20px rgba(255, 255, 255, 0);
  }
}

.category-list {
  margin-top: 2rem;
}

.category-list h4 {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  letter-spacing: 1px;
}

.category-list ul {
  list-style: none;
  padding: 0;
}

.category-list li {
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
  opacity: 0.95;
}

.text-side {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.section-quote {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  line-height: 1.4;
  font-style: italic;
  position: relative;
  padding-left: 2rem;
}

.section-quote::before {
  content: '"';
  position: absolute;
  left: 0;
  top: -20px;
  font-size: 5rem;
  color: var(--primary-purple);
  line-height: 1;
}
.section-quote::after {
  content: '"';
  position: absolute;
  left: 72%;
  top: 36%;
  font-size: 5rem;
  color: var(--primary-purple);
  line-height: 1;
}

.description {
  font-size: 1.05rem;
  line-height: 1.8;
  opacity: 0.95;
  text-align: justify;
}

.author-info {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1rem;
}

.author-avatar {
  flex-shrink: 0;
}

.author-avatar img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 3px solid white;
  object-fit: cover;
}

.author-name {
  font-size: 0.95rem;
  font-weight: 600;
  opacity: 0.9;
  margin: 0;
}

@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .section-quote {
    padding-left: 1rem;
  }
}
</style>
