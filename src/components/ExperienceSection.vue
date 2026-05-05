<template>
 <section id="experience" class="section experience-section" ref="element" :class="{ 'animate-reveal': isVisible }">
  <div class="container">
    
    <!-- Section Title -->
    <div class="section-title">
      <h2  >Experience & Education</h2>
      <p class="section-subtitle gradient-text">
        My journey in digital marketing and continuous learning
      </p>
    </div>

<!-- <div class="professional-summary">
  <p class="summary-text">
    Digital Marketing Specialist focused on building effective campaigns that drive growth and engagement.
  </p>
</div> -->

    <!-- Timeline -->
    <div class="timeline">
      <div class="timeline-line"></div>

      <div class="timeline-items">

        <!-- somion -->
        <div class="timeline-item timeline-item-left">
          <div class="timeline-content">
            <h3 class="timeline-title">Senior Digital Marketing Specialist</h3>
            <p class="timeline-company">somion (On-site, Egypt) | 3 Years</p>
            <ul class="timeline-description">
              <li>Led and executed comprehensive digital marketing strategies.</li>
              <li>Managed advertising campaigns and maximized ROI.</li>
              <li>Built and optimized sales funnels to increase leads.</li>
              <li>Managed social media accounts and content creation.</li>
              <li>Conducted A/B testing to improve performance.</li>
            </ul>
          </div>
          <div class="timeline-dot"></div>
        </div>

        <!-- Ryefal -->
        <div class="timeline-item timeline-item-right">
          <div class="timeline-dot timeline-dot-alt"></div>
          <div class="timeline-content">
            <h3 class="timeline-title">Digital Marketing Specialist</h3>
            <p class="timeline-company timeline-company-alt">Ryefal (Remote, KSA) | 6 Months</p>
            <ul class="timeline-description">
              <li>Executed full digital marketing strategies.</li>
              <li>Optimized campaigns for better cost efficiency.</li>
              <li>Targeted audience and analyzed user behavior.</li>
              <li>Provided marketing consultations.</li>
            </ul>
          </div>
        </div>

        <!-- Goldpferd -->
        <div class="timeline-item timeline-item-left">
          <div class="timeline-content">
            <h3 class="timeline-title">Performance Marketing Specialist</h3>
            <p class="timeline-company">Goldpferd (Remote, USA) | 1 Year</p>
            <ul class="timeline-description">
              <li>Managed performance-driven campaigns.</li>
              <li>Analyzed data for strategic decisions.</li>
              <li>Improved ROAS through data-driven strategies.</li>
              <li>Scaled successful campaigns.</li>
            </ul>
          </div>
          <div class="timeline-dot"></div>
        </div>

        <!-- Farhat -->
        <div class="timeline-item timeline-item-right">
          <div class="timeline-dot timeline-dot-alt"></div>
          <div class="timeline-content">
            <h3 class="timeline-title">Content & Marketing Specialist</h3>
            <p class="timeline-company timeline-company-alt">Farhat Group (On-site, Egypt) | 1 Year</p>
            <ul class="timeline-description">
              <li>Created marketing content and campaigns.</li>
              <li>Wrote high-converting ad copy.</li>
              <li>Aligned content with marketing goals.</li>
              <li>Collaborated with marketing team.</li>
            </ul>
          </div>
        </div>

        <!-- Education -->
        <div class="timeline-item timeline-item-left">
          <div class="timeline-content">
            <h3 class="timeline-title">Bachelor's Degree in Physical Education</h3>
            <p class="timeline-company">Al-Azhar University, Cairo, Egypt | 2011 - 2023</p>
          </div>
          <div class="timeline-dot"></div>
        </div>

      </div>
    </div>
  </div>
</section>
</template>

<script setup lang="ts">
import { useScrollReveal } from '../composables/useScrollReveal'

const { element, isVisible } = useScrollReveal()
</script>

<style scoped>
.experience-section {
  background: var(--primary-bg);
}

.section-title h2 {
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--text-para);
  max-width: 32rem;
  margin: 0 auto;
}

.timeline {
  position: relative;
}

.timeline-line {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: linear-gradient(to bottom, var(--accent), var(--accent2));
}

.timeline-items {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.timeline-item {
  display: flex;
  align-items: center;
  position: relative;
}

.timeline-item-left {
  justify-content: flex-end;
  padding-right: 2rem;
}

.timeline-item-right {
  justify-content: flex-start;
  padding-left: 2rem;
}

.timeline-content {
  background: var(--secondary-bg);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  max-width: 28rem;
}

.timeline-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: var(--text-heading);
  margin-bottom: 0.5rem;
}

.timeline-company {
  color: var(--accent);
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.timeline-company-alt {
  color: var(--accent2);
}

.timeline-description {
  color: var(--text-para);
  line-height: 1.6;
}

.timeline-dot {
  width: 1rem;
  height: 1rem;
  background: var(--accent);
  border-radius: 50%;
  border: 4px solid var(--primary-bg);
  position: relative;
  z-index: 1;
}

.timeline-dot-alt {
  background: var(--accent2);
}

.animate-reveal {
  animation: reveal 1s ease-out;
}

@keyframes reveal {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .timeline-line {
    left: 1rem;
  }

  .timeline-item {
    flex-direction: column;
    align-items: flex-start;
    padding-left: 2rem;
  }

  .timeline-item-left,
  .timeline-item-right {
    justify-content: flex-start;
    padding-left: 2rem;
    padding-right: 0;
  }

  .timeline-dot {
    position: absolute;
    left: -0.5rem;
    top: 1.5rem;
  }

  .timeline-dot-alt {
    position: absolute;
    left: -0.5rem;
    top: 1.5rem;
  }
}
</style>