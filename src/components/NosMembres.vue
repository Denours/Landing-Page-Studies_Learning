<template>
  <section class="nos-membres section">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">
        <span class="title-orange">NOS MEMBRES</span>
      </h2>

      <div class="carousel-wrapper" data-aos="fade-up" data-aos-delay="200">
        <button class="carousel-btn prev" @click="prevSlide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>

        <div class="carousel-container">
          <div
            class="carousel-track"
            :style="{ transform: `translateX(-${currentSlide * slideWidth}%)` }"
          >
            <div v-for="(member, index) in members" :key="index" class="member-card">
              <div class="member-image">
                <img :src="member.image" :alt="member.name" />
              </div>
              <div class="member-info">
                <h3>{{ member.name }}</h3>
                <p>{{ member.location }}</p>
              </div>
            </div>
          </div>
        </div>

        <button class="carousel-btn next" @click="nextSlide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>

      <div class="carousel-dots">
        <span
          v-for="(dot, index) in totalSlides"
          :key="index"
          class="dot"
          :class="{ active: currentSlide === index }"
          @click="goToSlide(index)"
        ></span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import memb1 from '../images/memb1.jpg'
import memb2 from '../images/memb2.jpg'
import memb3 from '../images/memb3.jpg'
import memb4 from '../images/memb4.jpg'
import memb5 from '../images/memb5.jpeg'
import memb6 from '../images/memb6.jpg'
import memb7 from '../images/memb7.jpg'
import memb8 from '../images/memb8.jpg'
import memb9 from '../images/memb9.jpg'
import memb10 from '../images/memb10.jpg'
import memb11 from '../images/memb11.jpeg'
import memb12 from '../images/memb12.jpg'

const currentSlide = ref(0)
const slideWidth = ref(25) // 4 cards visible

const members = [
  {
    name: 'NDOUMIN JOSEPH',
    location: 'CAMEROUN',
    image: memb1,
  },
  {
    name: 'SOPHIE TCHOUAPE',
    location: 'CAMEROUN',
    image: memb2,
  },
  {
    name: 'ASSAN YAP',
    location: 'FRANCE',
    image: memb3,
  },
  {
    name: 'OSCAR ADIMI',
    location: 'BÉNIN',
    image: memb4,
  },
  {
    name: 'NEYER MEMMI',
    location: 'TUNISIE',
    image: memb5,
  },
  {
    name: 'SAMIRA AMADOU',
    location: 'NIGER',
    image: memb6,
  },
  {
    name: 'OUM INACK MAX',
    location: 'CAMEROUN',
    image: memb7,
  },
  {
    name: 'WILLY KAROL NKOUMBIA',
    location: 'CAMEROUN',
    image: memb8,
  },
  {
    name: 'DJAMAL AYEVA',
    location: 'TOGO',
    image: memb9,
  },
  {
    name: 'EUCLIDES PEREIRA E SILVA',
    location: 'BRESIL',
    image: memb10,
  },
  {
    name: 'FREDERIC TESSIER',
    location: 'FRANCE',
    image: memb11,
  },
  {
    name: 'HONORE GOMIS',
    location: 'CAMEROUN',
    image: memb12,
  },
]

const totalSlides = computed(() => Math.ceil(members.length / 1.5))

const nextSlide = () => {
  if (currentSlide.value < totalSlides.value) {
    currentSlide.value++
  } else {
    currentSlide.value = 0
  }
}

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  } else {
    currentSlide.value = totalSlides.value - 1
  }
}

const goToSlide = (index) => {
  currentSlide.value = index
}

let autoplayInterval

onMounted(() => {
  autoplayInterval = setInterval(nextSlide, 5000)
})

onUnmounted(() => {
  clearInterval(autoplayInterval)
})
</script>

<style scoped>
.nos-membres {
  background: white;
  padding: 6rem 0;
}

.section-title {
  text-align: center;
  margin-bottom: 3rem;
}

.title-orange {
  color: var(--orange);
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
}

.carousel-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.carousel-container {
  flex: 1;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.member-card {
  flex: 0 0 25%;
  padding: 0 1rem;
  box-sizing: border-box;
}

.member-image {
  width: 100%;
  aspect-ratio: 4/5;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.member-card:hover .member-image {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(139, 92, 246, 0.2);
}

.member-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.member-card:hover .member-image img {
  transform: scale(1.05);
}

.member-info {
  text-align: center;
}

.member-info h3 {
  font-size: 1rem;
  font-weight: 700;
  color: var(--dark-blue);
  margin-bottom: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.member-info p {
  font-size: 0.9rem;
  color: var(--gray-800);
  opacity: 0.7;
}

.carousel-btn {
  background: var(--primary-purple);
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
  flex-shrink: 0;
}

.carousel-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 25px rgba(139, 92, 246, 0.4);
}

.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--gray-200);
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  background: var(--primary-purple);
  width: 30px;
  border-radius: 5px;
}

@media (max-width: 1024px) {
  .member-card {
    flex: 0 0 33.333%;
  }
}

@media (max-width: 768px) {
  .member-card {
    flex: 0 0 50%;
  }

  .carousel-btn {
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 480px) {
  .member-card {
    flex: 0 0 100%;
  }
}
</style>
