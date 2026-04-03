<template>
  <div id="app">
    <Header />
    <Hero />
    <FormationsUne />
    <VoirPlusCours />
    <CommunauteFormateurs />
    <NosMembres />
    <FormezVous />
    <SolutionEntreprises />
    <Agriculture />
    <FAQ />
    <CtaCards />
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useScrollAnimation } from './composables/useScrollAnimation'
import Agriculture from './components/Agriculture.vue'
import CommunauteFormateurs from './components/CommunauteFormateurs.vue'
import CtaCards from './components/CtaCards.vue'
import FAQ from './components/FAQ.vue'
import Footer from './components/Footer.vue'
import FormationsUne from './components/FormationsUne.vue'
import FormezVous from './components/FormezVous.vue'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import NosMembres from './components/NosMembres.vue'
import SolutionEntreprises from './components/SolutionEntreprises.vue'
import VoirPlusCours from './components/VoirPlusCours.vue'

useScrollAnimation()
</script>

<style>
#app {
  width: 100%;
  min-height: 100vh;
}
</style>
