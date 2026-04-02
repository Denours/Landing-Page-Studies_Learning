# landing-page

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

# 🎓 Studies Learning V2 - Landing Page

## 🚀 Test Technique - Développeur Web Frontend

Projet de refonte de la landing page de Studies Learning avec Vue.js 3, animations GSAP et AOS.

---

## ✨ Fonctionnalités Implémentées

### 📱 Sections de la Landing Page

1. **Header** - Navigation fixe avec effet de scroll
2. **Hero** - Section d'accueil avec animations GSAP et cartes flottantes
3. **Formations à la Une** - Grid responsive de formations
4. **Voir Plus de Cours** - Section promo avec visuel gradient
5. **Communauté de Formateurs** - Formulaire de contact interactif
6. **Nos Membres** - Carousel automatique avec navigation
7. **Formez-Vous pour Réussir** - Section certifications
8. **Solution pour les Entreprises** - Offre B2B
9. **Agriculture** - Témoignage formateur
10. **FAQ** - Accordéon interactif
11. **Footer** - Pied de page complet avec CTA

### Animations & Interactions

- Animations GSAP (orbes flottants, cartes)
- Animations AOS (scroll reveal)
- Hover effects sophistiqués
- Transitions fluides
- Carousel automatique
- Accordéon FAQ
- Formulaire interactif

---

## 📦 Technologies Utilisées

- **Vue.js 3** - Framework JavaScript progressif
- **Vite** - Build tool ultra-rapide
- **GSAP** - Animations avancées
- **AOS** - Animations au scroll
- **CSS3** - Styles modernes avec variables CSS

---

## 🛠️ Installation & Lancement

### Prérequis

- Node.js (v16 ou supérieur)
- npm ou yarn

### Étapes d'installation

```bash
# 1. Décompresser l'archive
tar -xzf studies-learning-v2.tar.gz
cd studies-learning-v2

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev

# 4. Ouvrir dans le navigateur
# Le serveur démarre sur http://localhost:5173
```

### Build pour production

```bash
# Créer le build de production
npm run build

# Prévisualiser le build
npm run preview
```

---

## 📁 Structure du Projet

```
studies-learning-v2/
├── public/
│   └── images/           # Images de la landing page
├── src/
│   ├── components/
│   │   ├── Header.vue
│   │   ├── Hero.vue
│   │   ├── FormationsUne.vue
│   │   ├── VoirPlusCours.vue
│   │   ├── CommunauteFormateurs.vue
│   │   ├── NosMembres.vue
│   │   ├── FormezVous.vue
│   │   ├── SolutionEntreprises.vue
│   │   ├── Agriculture.vue
│   │   ├── FAQ.vue
│   │   └── Footer.vue
│   ├── App.vue           # Composant principal
│   ├── main.js           # Point d'entrée
│   └── style.css         # Styles globaux
├── package.json
└── vite.config.js
```

---

## 🎯 Spécifications Techniques Respectées

### Direction Artistique
- Esthétique épurée et moderne
- Palette de couleurs Studies Learning (violet, orange, bleu)
- Gradients et effets visuels avancés

### Interactivité
- Prototype vivant avec animations fluides
- Smart Animate avec GSAP
- Micro-interactions sur hover

### Stack Moderne
- Vue.js 3 (Composition API)
- Architecture modulaire
- Code propre et commenté

### Animations
- Performance optimisée
- Fluidité 60fps
- Responsive design

---

## Palette de Couleurs

```css
--primary-purple: #8B5CF6
--secondary-purple: #A78BFA
--dark-blue: #1E293B
--light-blue: #3B82F6
--orange: #F59E0B
--yellow: #FCD34D
--pink: #EC4899
```

---

## 📱 Responsive Design

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

---

## ⚡ Performance

- Lazy loading des composants
- Animations optimisées avec GSAP
- CSS avec variables pour le theming
- Build optimisé avec Vite

---

## 👨‍💻 Développé pour

**Studies Holding** - Test Technique Développeur Web  
Date: Avril 2026

---

## 📄 Licence

Projet de test technique - Tous droits réservés Studies Holding

---

## 🙏 Remerciements

Merci pour l'opportunité de travailler sur ce projet passionnant !

---

**Bon test ! 🚀**