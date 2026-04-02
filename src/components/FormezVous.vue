<template>
  <section class="formez-vous section">
    <div class="container">
      <div class="content-grid">
        <div class="visual-side" data-aos="fade-right">
          <img src="../images/certifications.jpg" alt="certif" class="img-certif">
        </div>
        
        <div class="text-side" data-aos="fade-left">
          <h2 class="section-title">
            <span class="purple-text">FORMEZ-VOUS</span><br>
            <span class="purple-text">POUR RÉUSSIR</span>
          </h2>
          
          <p class="question">Alors, quelle formation allez-vous choisir ?</p>
          
          <p class="description">
            Afin que vous ayez toujours de nouvelles opportunités pour devenir une meilleure version de vous-même, nous définissons des formations actuelles, modernes et accessibles à tous. Deux vous enseignent de nouvelles compétences et vous encouragent à les mettre rapidement en pratique. Peu plus des vidéos stimulantes, faites un saut de vie avec un échantillon avec un expert imprimé. Nous menons rapidement au cœur du processus pour enseigner. Car nous sommes conscients que la méthode pour apprendre dans l'éducation peut être un changement. Apprenez ce que vous voulez, quand et comme bon vous semble. Envie de tester vos connaissances ?
          </p>
          
          <button class="btn-formation">
            DÉMARREZ VOTRE FORMATION ICI
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.formez-vous {
  background: white;
  padding: 0rem 0;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.img-certif{
  width: 100%;
}
.certification-card {
  background: linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%);
  border-radius: 30px;
  padding: 3rem;
  box-shadow: 0 20px 60px rgba(139, 92, 246, 0.3);
  text-align: center;
}

.card-header h3 {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 2rem;
}

.highlight {
  color: #FCD34D;
  font-size: 1.1em;
}

.card-visual {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}

.certificate-icon {
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cert-badge {
  position: absolute;
  top: -10px;
  right: -10px;
  z-index: 2;
  animation: float 3s ease-in-out infinite;
}

.cert-document {
  background: white;
  width: 140px;
  height: 180px;
  border-radius: 15px;
  padding: 1.5rem 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  position: relative;
}

.doc-header {
  width: 60px;
  height: 8px;
  background: var(--primary-purple);
  border-radius: 4px;
  margin: 0 auto 1rem;
}

.doc-lines {
  width: 100%;
  height: 6px;
  background: var(--gray-200);
  border-radius: 3px;
  margin-bottom: 0.75rem;
}

.card-footer {
  font-size: 0.95rem;
  opacity: 0.95;
  line-height: 1.6;
}

.text-side {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.2;
}

.purple-text {
  color: var(--primary-purple);
}

.question {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--dark-blue);
}

.description {
  font-size: 1rem;
  line-height: 1.8;
  color: var(--gray-800);
  text-align: justify;
}

.btn-formation {
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
  letter-spacing: 0.5px;
}

.btn-formation:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(139, 92, 246, 0.4);
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-15px) rotate(5deg);
  }
}

@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .btn-formation {
    align-self: stretch;
  }
}
</style>