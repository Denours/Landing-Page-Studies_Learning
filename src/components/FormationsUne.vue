<template>
  <section class="formations-une section">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">
        <span class="title-orange">FORMATIONS À LA UNE</span>
      </h2>

      <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">
        Découvrez nos top formations à la une en cliquant sur chaque bloc.
      </p>

      <div class="formations-grid">
        <div class="formation-card" data-aos="fade-up" data-aos-delay="0">
          <div class="card-image">
            <img src="../images/arh.jpg" alt="Formation Archicad 24" />
          </div>
          <div class="card-content">
            <h3>Formation Archicad 24: Les nouveautés</h3>
          </div>
          <button class="btn-voir">VOIR</button>
        </div>

        <div class="formation-card" data-aos="fade-up" data-aos-delay="100">
          <div class="card-image">
            <img src="../images/pont.png" alt="Approvisionnement" />
          </div>
          <div class="card-content">
            <h3>La réalisation du suivi des approvisionnements et du stock</h3>
          </div>
          <button class="btn-voir">VOIR</button>
        </div>

        <div class="formation-card" data-aos="fade-up" data-aos-delay="200">
          <div class="card-image">
            <img src="../images/windev.png" alt="WinDev" />
          </div>
          <div class="card-content">
            <h3>Développement d'applications robustes avec WinDev</h3>
          </div>
          <button class="btn-voir">VOIR</button>
        </div>

        <div class="formation-card" data-aos="fade-up" data-aos-delay="0">
          <div class="card-image">
            <img src="../images/charc.jpg" alt="Charcuterie" />
          </div>
          <div class="card-content">
            <h3>Formation métier en charcuterie cuite</h3>
          </div>
          <button class="btn-voir">VOIR</button>
        </div>

        <div class="formation-card" data-aos="fade-up" data-aos-delay="100">
          <div class="card-image">
            <img src="../images/init.png" alt="Monétique" />
          </div>
          <div class="card-content">
            <h3>Formation Initiation Métier Monétique</h3>
          </div>
          <button class="btn-voir">VOIR</button>
        </div>

        <div class="formation-card" data-aos="fade-up" data-aos-delay="200">
          <div class="card-image">
            <img src="../images/fraises.PNG" alt="Agriculture" />
          </div>
          <div class="card-content">
            <h3>Formation Agricole Culture Fraises</h3>
          </div>
          <button class="btn-voir">VOIR</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.formations-une {
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

.formations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 5%;
}

.formation-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
}

.formation-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(139, 92, 246, 0.2);
}

.card-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.formation-card:hover .card-image img {
  transform: scale(1.1);
}

.card-content {
  padding: 1.5rem;
  min-height: 90px;
}

.card-content h3 {
  font-size: 1.1rem;
  color: var(--dark-blue);
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 1rem;
}

.card-logo {
  margin-top: 0.5rem;
}

.logo-text {
  font-weight: 700;
  color: var(--primary-purple);
  font-size: 0.9rem;
}

.btn-voir {
  width: 100%;
  padding: 1rem;
  background: var(--gradient-purple);
  color: white;
  border: none;
  font-weight: 700;
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 1px;
}

.btn-voir:hover {
  background: linear-gradient(135deg, #7c3aed 0%, #9333ea 100%);
  transform: scale(1.02);
}

@media (max-width: 768px) {
  .formations-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
