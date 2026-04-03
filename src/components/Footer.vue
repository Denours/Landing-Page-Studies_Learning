<template>
  <footer class="footer">
    <!-- Footer principal -->
    <div class="footer-main">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col">
            <div class="footer-logo">
              <img src="../images/logostud.png" alt="Studies Learning" />
            </div>
            <p class="footer-tagline">La première plateforme d'enseignement en ligne en Afrique.</p>
            <div class="social-links">
              <a href="#" class="social-icon">
                <PhFacebookLogo :size="24" />
              </a>
              <a href="#" class="social-icon">
                <PhWhatsappLogo :size="24" />
              </a>
              <a href="#" class="social-icon">
                <PhLinkedinLogo :size="24" />
              </a>
              <a href="#" class="social-icon">
                <PhInstagramLogo :size="24" />
              </a>
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
              <li>
                <PhEnvelope :size="18" />
                contact@studieslearning.com
              </li>
              <li>
                <PhPhone />
                +237 692 618 299
              </li>
              <li>
                <PhMapPin />
                Douala - Bonamoussadi, Cameroun
              </li>
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
import {
  PhEnvelope,
  PhFacebookLogo,
  PhInstagramLogo,
  PhLinkedinLogo,
  PhMapPin,
  PhPhone,
  PhWhatsappLogo,
} from '@phosphor-icons/vue'
const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer {
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../images/footer-studies.jpg');
  background-size: cover;
  opacity: 0.5;
  z-index: -1;
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
  height: 100px;
  width: 140px;
}

.footer-tagline {
  font-size: 0.95rem;
  line-height: 1.6;
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
  color: black;
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
  color: black;
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
  text-decoration: none;
  transition: color 0.3s ease;
  color: black;
}

.footer-bottom a:hover {
  color: var(--primary-purple);
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
