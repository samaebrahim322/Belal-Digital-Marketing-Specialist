<!-- <template>
  <section id="about" class="section about-section" ref="element" :class="{ 'animate-reveal': isVisible }">
    <div class="container">
      <div class="section-title">
        <h2>About Me</h2>
        <p class="section-subtitle">
          Get to know the person behind the digital strategies
        </p>
      </div>
      <div class="about-content">
        <div class="about-text">
          <p class="about-paragraph">
            I'm a passionate digital marketing specialist with over 5 years of experience
            helping businesses grow their online presence. I specialize in creating data-driven
            marketing strategies that deliver measurable results.
          </p>
          <p class="about-paragraph">
            My expertise spans across social media marketing, SEO optimization, content creation,
            and digital advertising. I believe in the power of authentic storytelling and
            building genuine connections with audiences.
          </p>
        </div>
        <div class="about-stats">
          <div class="stat-card">
            <div class="stat-number">5+</div>
            <div class="stat-label">Years Experience</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">50+</div>
            <div class="stat-label">Happy Clients</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">100+</div>
            <div class="stat-label">Projects Completed</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">95%</div>
            <div class="stat-label">Client Satisfaction</div>
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
.about-section {
  background: var(--secondary-bg);
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

.about-content {
  display: grid;
  gap: 3rem;
  align-items: center;
}

.about-text {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.about-paragraph {
  font-size: 1.125rem;
  color: var(--text-para);
  line-height: 1.7;
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.stat-card {
  background: var(--primary-bg);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  text-align: center;
  box-shadow: var(--shadow);
  transition: var(--transition);
}

.stat-card:hover {
  box-shadow: 0 20px 25px -5px rgba(99, 102, 241, 0.1);
}

.stat-number {
  font-size: 2rem;
  font-weight: bold;
  color: var(--accent);
  margin-bottom: 0.5rem;
}

.stat-label {
  color: var(--text-para);
  font-size: 0.875rem;
}

@media (min-width: 768px) {
  .about-content {
    grid-template-columns: 1fr 1fr;
  }

  .about-stats {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>

<style scoped>
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
</style> -->


<template>
  <section id="about" class="section about-section" ref="element" :class="{ 'animate-reveal': isVisible }">
    <div class="container">
      <div class="tag-line">
        <div class="tag-dot"></div>
        <span class="tag-text">About Me</span>
      </div>
      <h2 class="main-heading">
        The person behind the<br>
        <span class="gradient-text">digital strategies</span>
      </h2>
      <div class="accent-line"></div>

      <div class="about-layout">
        <div class="divider-v"></div>

        <div class="about-left">
          <p class="para">
            I'm a results-driven Digital Marketing Specialist with solid experience managing
            and scaling campaigns across different industries and markets. I help businesses
            grow through effective strategies and measurable results.
          </p>
          <p class="para">
            My work combines social media management, paid advertising, content creation, and
            performance marketing — fuelled by data, continuous testing, and a focus on maximizing ROI.
          </p>
          <div class="skills-wrap">
            <div class="skills-label">Core expertise</div>
            <div class="skills-list">
              <span v-for="skill in skills" :key="skill" class="skill-tag">{{ skill }}</span>
            </div>
          </div>
        </div>

        <div class="about-right">
          <div
            v-for="stat in stats"
            :key="stat.lbl"
            class="stat-card"
            :class="{ pink: stat.pink }"
          >
            <div class="stat-num">{{ stat.num }}</div>
            <div class="stat-lbl">{{ stat.lbl }}</div>
          </div>
        </div>
      </div>

      <div class="bottom-bar">
        <div class="avail">
          <div class="avail-dot"></div>
          <span class="avail-text"><strong>Available</strong> for new projects</span>
        </div>
        <a href="#contact" class="cta-btn">Work with me →</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useScrollReveal } from '../composables/useScrollReveal'

const reveal = useScrollReveal()

const skills = ['Social Media', 'Paid Ads', 'Content Creation', 'Performance Marketing', 'SEO', 'Analytics', 'A/B Testing']

const stats = [
  { num: '5+',   lbl: 'Years Experience',     pink: false },
  { num: '40+',  lbl: 'Projects Completed',   pink: true  },
  { num: 'Multi',lbl: 'International Markets', pink: false },
  { num: 'High', lbl: 'Client Satisfaction',  pink: true  },
]
</script>

<style scoped>
.about-section {

  position: relative;
  overflow: hidden;
}

.about-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
}

.about-section::after {
  content: '';
  position: absolute;
  top: -80px; right: -80px;
  width: 340px; height: 340px;
  background: radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 65%);
  pointer-events: none;
}

/* Tag */
.tag-line { display: flex; align-items: center; gap: 10px; margin-bottom: 0.75rem; }
.tag-dot { width: 8px; height: 8px; border-radius: 50%; background: linear-gradient(135deg, var(--accent), var(--accent2)); }
.tag-text { color: var(--accent); font-size: 11px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; }

/* Heading */
.main-heading { font-size: clamp(1.5rem, 3vw, 2rem); font-weight: 500; color: var(--text-heading); line-height: 1.25; margin: 0 0 0.25rem; }
.gradient-text {
  background: linear-gradient(90deg, #818CF8, #EC4899, #818CF8);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shimmer 4s linear infinite;
}

.accent-line {
  height: 2px; width: 60px;
  background: linear-gradient(90deg, var(--accent), var(--accent2));
  border-radius: 2px;
  margin: 0.75rem 0 2rem;
  transform-origin: left;
  animation: lineGrow 0.8s 0.3s cubic-bezier(0.4,0,0.2,1) both;
}

/* Layout */
.about-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-items: start;
  position: relative;
}

.divider-v {
  position: absolute;
  left: 50%; top: 0; bottom: 0;
  width: 1px;
  background: linear-gradient(to bottom, transparent, rgba(99,102,241,0.2) 30%, rgba(99,102,241,0.2) 70%, transparent);
}

/* Left */
.para { color: var(--text-para); font-size: 1rem; line-height: 1.8; margin: 0 0 1rem; }
.skills-wrap { margin-top: 1.5rem; }
.skills-label { color: #6B7280; font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 10px; }
.skills-list { display: flex; flex-wrap: wrap; gap: 7px; }
.skill-tag {
  border: 1px solid rgba(99,102,241,0.2);
  color: #A5B4FC;
  font-size: 11px;
  padding: 4px 11px;
  border-radius: 20px;
  transition: var(--transition);
  cursor: default;
}
.skill-tag:hover { background: rgba(99,102,241,0.18); border-color: rgba(99,102,241,0.5); transform: translateY(-2px); }

/* Right — Stats */
.about-right {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.stat-card {
  background: var(--primary-bg);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: var(--border-radius);
  padding: 1.4rem 1rem 1.2rem;
  text-align: center;
  cursor: default;
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}
.stat-card::after {
  content: '';
  position: absolute; inset: 0;
  border-radius: var(--border-radius);
  background: radial-gradient(circle at 50% -20%, rgba(99,102,241,0.15), transparent 60%);
  opacity: 0;
  transition: opacity 0.3s;
}
.stat-card:hover { transform: translateY(-4px); border-color: rgba(99,102,241,0.4); }
.stat-card:hover::after { opacity: 1; }

.stat-card.pink:hover { border-color: rgba(236,72,153,0.4); }
.stat-card.pink::after { background: radial-gradient(circle at 50% -20%, rgba(236,72,153,0.15), transparent 60%); }
.stat-card.pink .stat-num {
  background: linear-gradient(135deg, #F472B6, #EC4899);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}

.stat-num {
  font-size: 2.2rem; font-weight: 500;
  background: linear-gradient(135deg, #818CF8, #6366F1);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  line-height: 1; margin-bottom: 5px;
}
.stat-lbl { color: #6B7280; font-size: 10.5px; text-transform: uppercase; letter-spacing: 0.06em; }

/* Bottom bar */
.bottom-bar {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255,255,255,0.05);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.avail { display: flex; align-items: center; gap: 8px; }
.avail-dot { width: 7px; height: 7px; border-radius: 50%; background: #10B981; box-shadow: 0 0 8px rgba(16,185,129,0.6); }
.avail-text { color: #6B7280; font-size: 12px; }
.avail-text strong { color: #D1D5DB; font-weight: 500; }
.cta-btn {
  background: linear-gradient(135deg, var(--accent), var(--accent2));
  color: #fff;
  font-size: 12px; font-weight: 500;
  padding: 8px 20px;
  border-radius: 20px;
  text-decoration: none;
  transition: var(--transition);
}
.cta-btn:hover { opacity: 0.9; transform: translateY(-2px); box-shadow: 0 8px 20px rgba(99,102,241,0.3); }

/* Responsive */
@media (max-width: 768px) {
  .about-layout { grid-template-columns: 1fr; }
  .divider-v { display: none; }
}

/* Animations */
@keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
@keyframes lineGrow { from{transform:scaleX(0)} to{transform:scaleX(1)} }

.animate-reveal { animation: reveal 0.9s ease-out; }
@keyframes reveal { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
</style>