<template>
  <footer class="footer">
    <!-- Section CTA finale -->
    <div class="cta-section">
      <div class="container">
        <div class="cta-grid" data-aos="fade-up">
          <div class="cta-card">
            <div class="card-icon">📚</div>
            <h3>Tutos et cours gratuits</h3>
            <p>
              Studies Learning rassemble une communauté de formateurs engagés à vous donner les clés
              de la réussite. Ateliers, tutos, cours, MOOCS(R), de nombreux supports sont mis à
              votre disposition.
            </p>
          </div>

          <div class="cta-card">
            <div class="card-icon">🎁</div>
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

    <!-- Footer principal -->
    <div class="footer-main">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col">
            <div class="footer-logo">
              <img
                src="https://via.placeholder.com/150x40/8B5CF6/ffffff?text=Studies+Learning"
                alt="Studies Learning"
              />
            </div>
            <p class="footer-tagline">La première plateforme d'enseignement en ligne en Afrique.</p>
            <div class="social-links">
              <a href="#" class="social-icon">f</a>
              <a href="#" class="social-icon">t</a>
              <a href="#" class="social-icon">in</a>
              <a href="#" class="social-icon">📷</a>
            </div>
          </div>

          <div class="footer-col">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#accueil">Accueil</a></li>
              <li><a href="#formations">Cours & Formations</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Ressources</h4>
            <ul>
              <li><a href="#">Devenir Formateur</a></li>
              <li><a href="#">Aide & Support</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Conditions d'utilisation</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>📧 contact@studieslearning.com</li>
              <li>📱 +237 XXX XXX XXX</li>
              <li>📍 Douala, Cameroun</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="footer-bottom">
      <div class="container">
        <p>
          &copy; {{ currentYear }} Studies Learning. Tous droits réservés. |
          <a href="#">Politique de confidentialité</a> | <a href="#">Conditions d'utilisation</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer {
  background: var(--dark-blue);
  color: white;
}

.cta-section {
  background: white;
  padding: 4rem 0;
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

.card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
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

.footer-main {
  padding: 4rem 0 2rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
}

.footer-logo img {
  height: 40px;
  margin-bottom: 1rem;
}

.footer-tagline {
  font-size: 0.95rem;
  line-height: 1.6;
  opacity: 0.8;
  margin-bottom: 1.5rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background: var(--primary-purple);
  transform: translateY(-3px);
}

.footer-col h4 {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.footer-col ul {
  list-style: none;
  padding: 0;
}

.footer-col ul li {
  margin-bottom: 0.75rem;
}

.footer-col ul li a {
  color: white;
  text-decoration: none;
  opacity: 0.8;
  transition: all 0.3s ease;
  font-size: 0.95rem;
}

.footer-col ul li a:hover {
  opacity: 1;
  color: var(--primary-purple);
  padding-left: 5px;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem 0;
  text-align: center;
}

.footer-bottom p {
  font-size: 0.9rem;
  opacity: 0.7;
}

.footer-bottom a {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-bottom a:hover {
  color: var(--primary-purple);
}

@media (max-width: 768px) {
  .cta-grid {
    grid-template-columns: 1fr;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
