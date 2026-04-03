<template>
  <!-- Section CTA finale -->
    <div class="cta-section">
      <div class="container">
        <div class="cta-grid" data-aos="fade-up">
          <div class="cta-card">
            <img src="../images/tutos.jpg" alt="tutos" />
            <h3>Tutos et cours gratuits</h3>
            <p>
              Studies Learning rassemble une communauté de formateurs engagés à vous donner les clés
              de la réussite. Ateliers, tutos, cours, MOOCS(R), de nombreux supports sont mis à
              votre disposition.
            </p>
          </div>

          <div class="cta-card">
            <img src="../images/promos.png" alt="promos" class="img-prom" />
            <h3>Ne manquez pas les promos!</h3>
            <p>
              Bons plans, Promo? Budget réduit ou Formateur par vous pouvez le trouver à nos Vos
              projets sont notre priorité! Rejoignez notre infolettre à prix évolutionnaire au Promo
              sur l'infolettre à jour!
            </p>
          </div>
        </div>

        <div class="cta-actions" data-aos="fade-up" data-aos-delay="200">
          <h2>PRÊT(E) À DÉMARRER?</h2>
          <p>Contactez-nous ou créez votre compte.</p>
          <div class="cta-buttons">
            <button class="btn btn-primary">CRÉEZ VOTRE COMPTE</button>
            <button class="btn btn-secondary">CONTACTEZ-NOUS</button>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>
.cta-section {
  /* background: white; */
}

.cta-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
}

.cta-card {
  background: var(--gray-50);
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.cta-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(139, 92, 246, 0.15);
}

.img-prom {
  height: 60%;
}

.cta-card h3 {
  font-size: 1.3rem;
  color: var(--dark-blue);
  margin-bottom: 1rem;
}

.cta-card p {
  color: var(--gray-800);
  line-height: 1.6;
  font-size: 0.95rem;
}

.cta-actions {
  text-align: center;
  padding: 3rem 0;
}

.cta-actions h2 {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  color: var(--dark-blue);
  margin-bottom: 1rem;
}

.cta-actions p {
  font-size: 1.1rem;
  color: var(--gray-800);
  margin-bottom: 2rem;
}

.cta-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 1rem 2.5rem;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.btn-primary {
  background: var(--gradient-purple);
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(139, 92, 246, 0.4);
}

.btn-secondary {
  background: transparent;
  color: var(--primary-purple);
  border: 2px solid var(--primary-purple);
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: var(--primary-purple);
  color: white;
}

@media (max-width: 768px) {
  .cta-grid {
    grid-template-columns: 1fr;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>