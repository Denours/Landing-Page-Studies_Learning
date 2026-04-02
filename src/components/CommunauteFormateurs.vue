<template>
  <section class="communaute-formateurs section">
    <div class="container">
      <div class="content-grid">
        <div class="form-side" data-aos="fade-right">
          <h2 class="section-title">
            REJOIGNEZ LA<br />
            <span class="text-gradient">COMMUNAUTÉ DE<br />FORMATEURS</span>
          </h2>

          <p class="section-description">
            Vous êtes un indépendant, un organisme de formation, une université, une entreprise et
            vous souhaitez partager vos cours en ligne ? Demandez dès maintenant la démo de la
            plateforme de cours en nous contactant via le formulaire ci-dessous.
          </p>

          <form class="contact-form" @submit.prevent="handleSubmit">
            <div class="form-row">
              <input type="text" placeholder="Nom" class="form-input" required />
              <input type="email" placeholder="Adresse e-mail" class="form-input" required />
            </div>

            <textarea placeholder="Message" class="form-textarea" rows="5" required></textarea>

            <div class="captcha-row">
              <span class="captcha-text">6 + 8 =</span>
              <input type="text" class="captcha-input" placeholder="" required />
              <button type="submit" class="btn-submit">ENVOI</button>
            </div>

            <p class="privacy-text">
              En cliquant sur « Envoi », j'accepte que mes informations soient traitées par la
              charte des données personnelles.
            </p>
          </form>
        </div>

        <div class="visual-side" data-aos="fade-left">
          <img src="../images/commuform.jpg" alt="commu-form" class="img-commu" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const handleSubmit = () => {
  alert('Formulaire envoyé ! (Demo)')
}
</script>

<style scoped>
.communaute-formateurs {
  background: linear-gradient(135deg, #e0b32b 0%, #e479bd 100%);
  padding: 6rem 0;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.form-side {
  color: var(--dark-blue);
}

.section-title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

.text-gradient {
  background: var(--gradient-purple);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-description {
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  opacity: 0.9;
  text-align: justify;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-input,
.form-textarea {
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 15px;
  font-size: 0.95rem;
  background: white;
  transition: all 0.3s ease;
}

.form-textarea::placeholder {
  font-family: Arial, Helvetica, sans-serif;
}
.form-input:focus,
.form-textarea:focus {
  outline: 3px solid var(--primary-purple);
  transform: translateY(-2px);
}

.captcha-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: end;
}

.captcha-text {
  font-weight: 700;
  font-size: 1.2rem;
}

.captcha-input {
  width: 80px;
  padding: 0.75rem;
  border: none;
  border-radius: 10px;
  text-align: center;
  font-size: 1rem;
  font-weight: 700;
}

.btn-submit {
  background: var(--gradient-purple);
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 50px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
}

.btn-submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(139, 92, 246, 0.4);
}

.privacy-text {
  font-size: 0.85rem;
  opacity: 0.8;
  line-height: 1.6;
}

.visual-side {
  display: flex;
  justify-content: center;
}

.img-commu {
  width: 100%;
}

.promo-card {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  border-radius: 30px;
  padding: 2.5rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  width: 100%;
}

.promo-logo {
  height: 30px;
  margin-bottom: 0.5rem;
}

.promo-subtitle {
  font-size: 0.85rem;
  opacity: 0.95;
  margin-bottom: 2rem;
}

.promo-title {
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

.highlight {
  color: #fcd34d;
  font-style: italic;
}

.promo-description {
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  opacity: 0.95;
}

.flags {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.languages-badge {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

.badge-text {
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1.4;
}

.contact-info {
  font-size: 0.9rem;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .captcha-row {
    flex-wrap: wrap;
  }
}
</style>
