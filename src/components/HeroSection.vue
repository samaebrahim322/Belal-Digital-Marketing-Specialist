<!-- <script setup lang="ts">
import avatarImage from '../assets/WhatsApp Image 2026-05-04 at 6.36.29 PM.jpeg'
</script>

<template>
  <section class="hero-section">
    <div class="hero-bg">
      <div class="hero-bg-shape shape-1"></div>
      <div class="hero-bg-shape shape-2"></div>
    </div>
    <div class="hero-content">
      <div class="hero-avatar">
        <img :src="avatarImage" alt="Belal" class="avatar-image">
      </div>
      <h1 class="hero-title">
        Hi, I'm <span class="hero-highlight">Belal</span>
      </h1>
      <h2 class="hero-subtitle">
        Digital Marketing Specialist
      </h2>
      <p class="hero-description">
        Passionate about creating impactful digital strategies that drive results.
        Specializing in social media marketing, SEO, and content creation.
      </p>
      <div class="hero-buttons">
        <a href="#projects" class="btn btn-primary">View My Work</a>
        <a href="/cv.pdf" download class="btn btn-secondary">Download CV</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(236, 72, 153, 0.1));
}

.hero-bg-shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  animation: pulse 3s ease-in-out infinite;
}

.shape-1 {
  top: 5rem;
  left: 2.5rem;
  width: 8rem;
  height: 8rem;
  background: rgba(99, 102, 241, 0.2);
}

.shape-2 {
  bottom: 5rem;
  right: 2.5rem;
  width: 6rem;
  height: 6rem;
  background: rgba(236, 72, 153, 0.2);
  animation-delay: 1s;
}

.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 56rem;
  margin: 0 auto;
  padding: 0 1rem;
}

.hero-avatar {
  margin-bottom: 2rem;
}

.avatar-image {
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  border: 4px solid rgba(99, 102, 241, 0.3);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  animation: float 3s ease-in-out infinite;
}

.hero-title {
  font-size: 3rem;
  font-weight: bold;
  color: var(--text-heading);
  margin-bottom: 1rem;
  animation: fade-in 1s ease-out forwards;
  opacity: 0;
}

.hero-highlight {
  color: var(--accent);
}

.hero-subtitle {
  font-size: 1.875rem;
  color: var(--text-para);
  margin-bottom: 2rem;
  animation: fade-in 1s ease-out 0.3s forwards;
  opacity: 0;
}

.hero-description {
  font-size: 1.125rem;
  color: var(--text-para);
  margin-bottom: 3rem;
  max-width: 32rem;
  margin-left: auto;
  margin-right: auto;
  animation: fade-in 1s ease-out 0.6s forwards;
  opacity: 0;
}

.hero-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  animation: fade-in 1s ease-out 0.9s forwards;
  opacity: 0;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes pulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 4.5rem;
  }

  .hero-subtitle {
    font-size: 2rem;
  }

  .hero-buttons {
    flex-direction: row;
  }

  .btn {
    width: auto;
  }
}
</style> -->


<script setup lang="ts">
import avatarImage from '../assets/belal.png'
</script>

<template>
  <section class="hero-section">

    <!-- Background shapes -->
    <div class="bg-shapes" aria-hidden="true">
      <div class="shape-ring ring-1"></div>
      <div class="shape-ring ring-2"></div>
      <div class="dot-grid"></div>
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
      <div class="accent-line line-1"></div>
      <div class="accent-line line-2"></div>
    </div>

    <div class="hero-container">

      <!-- Left: text -->
      <div class="hero-text">

        <div class="badge anim" style="--d:0s">
          <span class="pulse-dot"></span>
          Open to opportunities
        </div>

        <h1 class="hero-title anim" style="--d:0.15s">
          Hi, I'm <span class="grad-text">Belal</span>
        </h1>

        <h2 class="hero-role anim" style="--d:0.3s">
          Digital Marketing
          <span class="role-outline">Specialist</span>
        </h2>

        <p class="hero-desc anim" style="--d:0.45s">
          I craft data-driven campaigns that connect brands with their audience —
          blending creativity with analytics to drive real, measurable growth.
        </p>

        <div class="skill-pills anim" style="--d:0.55s">
          <span class="pill">SEO / SEM</span>
          <span class="pill">Social Media</span>
          <span class="pill">Content Strategy</span>
          <span class="pill">Analytics</span>
        </div>

        <div class="hero-actions anim" style="--d:0.65s">
          <a href="#projects" class="btn btn-primary">View My Work</a>
          <a href="/cv.pdf" download class="btn btn-outline">Download CV</a>
        </div>

        <div class="stats-row anim" style="--d:0.75s">
          <div class="stat-item">
            <span class="stat-num">3+</span>
            <span class="stat-lbl">Years</span>
          </div>
          <div class="stat-sep"></div>
          <div class="stat-item">
            <span class="stat-num">40+</span>
            <span class="stat-lbl">Campaigns</span>
          </div>
          <div class="stat-sep"></div>
          <div class="stat-item">
            <span class="stat-num">15+</span>
            <span class="stat-lbl">Clients</span>
          </div>
        </div>
      </div>

      <!-- Right: photo -->
      <div class="hero-visual anim-scale" style="--d:0.2s">

        <!-- Floating metric cards -->
        <div class="deco-card card-top">
          <div class="deco-icon icon-accent">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6366F1" stroke-width="2.5">
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
              <polyline points="16 7 22 7 22 13"/>
            </svg>
          </div>
          <div>
            <div class="deco-val">+127%</div>
            <div class="deco-sub">Avg. growth</div>
          </div>
        </div>

        <div class="deco-card card-bottom">
          <div class="deco-icon icon-accent2">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#EC4899" stroke-width="2.5">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 00-3-3.87"/>
              <path d="M16 3.13a4 4 0 010 7.75"/>
            </svg>
          </div>
          <div>
            <div class="deco-val">2.4M+</div>
            <div class="deco-sub">Reach generated</div>
          </div>
        </div>

        <!-- Photo with morphing border -->
        <div class="photo-wrapper">
          <div class="morph-ring ring-a"></div>
          <div class="morph-ring ring-b"></div>
          <div class="photo-clip">
            <img :src="avatarImage" alt="Belal — Digital Marketing Specialist" class="hero-photo" />
          </div>
          <div class="glow-dot dot-tl"></div>
          <div class="glow-dot dot-br"></div>
        </div>

      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="scroll-hint" aria-hidden="true">
      <div class="scroll-line"></div>
      <span>scroll</span>
    </div>

  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');

/* Variables — matching your brand */
:root {
  --primary-bg:  #0B1120;
  --secondary-bg:#111827;
  --accent:      #6366F1;
  --accent2:     #EC4899;
  --text-heading:#F9FAFB;
  --text-para:   #94A3B8;
  --card-bg:     rgba(17,24,39,0.85);
}

* { box-sizing: border-box; margin: 0; padding: 0; }

/* ── Section ── */
.hero-section {
  min-height: 100vh;
  background: var(--primary-bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  font-family: 'Plus Jakarta Sans', sans-serif;
  padding: 6rem 2rem 4rem;
}

/* ── Background shapes ── */
.bg-shapes { position: absolute; inset: 0; pointer-events: none; z-index: 0; }

.shape-ring {
  position: absolute;
  top: 50%; left: 50%;
  border-radius: 50%;
  border: 1px solid rgba(99,102,241,0.07);
  transform: translate(-50%,-50%);
  animation: spin 40s linear infinite;
}
.ring-1 { width: 720px; height: 720px; }
.ring-2 {
  width: 520px; height: 520px;
  border-color: rgba(236,72,153,0.06);
  border-style: dashed;
  animation-direction: reverse;
  animation-duration: 28s;
}

.dot-grid {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(99,102,241,0.11) 1px, transparent 1px);
  background-size: 36px 36px;
  mask-image: radial-gradient(ellipse 65% 65% at 50% 50%, black, transparent);
}

.blob {
  position: absolute;
  border-radius: 50%;
}
.blob-1 {
  top: -12%; left: -8%;
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(99,102,241,0.11), transparent 65%);
  animation: drift 9s ease-in-out infinite;
}
.blob-2 {
  bottom: -12%; right: -8%;
  width: 420px; height: 420px;
  background: radial-gradient(circle, rgba(236,72,153,0.09), transparent 65%);
  animation: drift 12s ease-in-out infinite reverse;
}

.accent-line {
  position: absolute;
  width: 1px;
  height: 220px;
  background: linear-gradient(to bottom, transparent, rgba(99,102,241,0.18), transparent);
}
.line-1 { top: 8%; left: 14%; transform: rotate(25deg); }
.line-2 { bottom: 8%; right: 14%; transform: rotate(-25deg); background: linear-gradient(to bottom, transparent, rgba(236,72,153,0.15), transparent); }

/* ── Grid layout ── */
.hero-container {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 5rem;
  max-width: 1100px;
  width: 100%;
}

/* ── Animations ── */
.anim {
  opacity: 0;
  animation: fade-up 0.7s cubic-bezier(0.22,1,0.36,1) forwards;
  animation-delay: var(--d, 0s);
}
.anim-scale {
  opacity: 0;
  animation: fade-scale 0.9s cubic-bezier(0.22,1,0.36,1) forwards;
  animation-delay: var(--d, 0s);
}

/* ── Badge ── */
.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background: rgba(99,102,241,0.1);
  border: 1px solid rgba(99,102,241,0.22);
  color: #a5b4fc;
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  padding: 0.33rem 0.85rem;
  border-radius: 100px;
  margin-bottom: 1.5rem;
}
.pulse-dot {
  width: 7px; height: 7px;
  background: var(--accent);
  border-radius: 50%;
  animation: pulse 2.2s ease-in-out infinite;
}

/* ── Title ── */
.hero-title {
  font-size: clamp(2.6rem, 4.5vw, 3.8rem);
  font-weight: 700;
  color: var(--text-heading);
  line-height: 1.1;
  margin-bottom: 0.4rem;
}
.grad-text {
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ── Role ── */
.hero-role {
  font-size: clamp(1.4rem, 2.8vw, 2.1rem);
  font-weight: 600;
  color: var(--text-heading);
  margin-bottom: 1.25rem;
  line-height: 1.25;
}
.role-outline {
  -webkit-text-stroke: 1.5px rgba(99,102,241,0.55);
  color: transparent;
}

/* ── Description ── */
.hero-desc {
  font-size: 0.98rem;
  color: var(--text-para);
  line-height: 1.85;
  max-width: 420px;
  margin-bottom: 1.5rem;
}

/* ── Skill pills ── */
.skill-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-bottom: 2rem;
}
.pill {
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: var(--text-para);
  border: 1px solid rgba(255,255,255,0.07);
  padding: 0.3rem 0.8rem;
  border-radius: 100px;
  background: rgba(255,255,255,0.03);
  transition: all 0.2s ease;
  cursor: default;
}
.pill:hover {
  border-color: rgba(99,102,241,0.4);
  color: #a5b4fc;
  background: rgba(99,102,241,0.07);
}

/* ── Buttons ── */
.hero-actions {
  display: flex;
  gap: 0.85rem;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
}
.btn {
  padding: 0.7rem 1.75rem;
  font-family: inherit;
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all 0.25s ease;
  display: inline-flex;
  align-items: center;
}
.btn-primary {
  background: linear-gradient(135deg, #6366F1, #8B5CF6);
  color: #fff;
  box-shadow: 0 0 30px rgba(99,102,241,0.3);
}
.btn-primary:hover {
  box-shadow: 0 0 44px rgba(99,102,241,0.5);
  transform: translateY(-2px);
}
.btn-outline {
  background: transparent;
  color: var(--text-heading);
  border: 1px solid rgba(255,255,255,0.1);
}
.btn-outline:hover {
  border-color: rgba(99,102,241,0.45);
  color: #a5b4fc;
  transform: translateY(-2px);
}

/* ── Stats ── */
.stats-row { display: flex; align-items: center; gap: 1.5rem; }
.stat-item  { display: flex; flex-direction: column; gap: 3px; }
.stat-num {
  font-size: 1.55rem;
  font-weight: 700;
  line-height: 1;
  background: linear-gradient(135deg, var(--accent), var(--accent2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.stat-lbl {
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-para);
}
.stat-sep {
  width: 1px;
  height: 2.5rem;
  background: rgba(255,255,255,0.07);
}

/* ── Photo visual ── */
.hero-visual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.photo-wrapper {
  position: relative;
  width: 300px;
  height: 300px;
}

/* Morphing border rings */
.morph-ring {
  position: absolute;
  border-radius: 38% 62% 57% 43% / 43% 37% 63% 57%;
}
.ring-a {
  inset: -20px;
  border: 1px solid rgba(99,102,241,0.22);
  animation: morph 8s ease-in-out infinite;
}
.ring-b {
  inset: -38px;
  border: 1px solid rgba(236,72,153,0.12);
  animation: morph 11s ease-in-out infinite reverse;
}

/* Photo clip — same morphing shape */
.photo-clip {
  position: absolute;
  inset: 0;
  border-radius: 38% 62% 57% 43% / 43% 37% 63% 57%;
  overflow: hidden;
  animation: morph 8s ease-in-out infinite;
  border: 2px solid rgba(99,102,241,0.28);
  z-index: 1;
}
.hero-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
  transition: transform 0.6s ease;
}
.photo-clip:hover .hero-photo { transform: scale(1.05); }

/* Glowing corner dots */
.glow-dot {
  position: absolute;
  width: 11px; height: 11px;
  border-radius: 50%;
  z-index: 2;
}
.dot-tl {
  top: -5px; left: -5px;
  background: var(--accent);
  box-shadow: 0 0 14px rgba(99,102,241,0.8);
}
.dot-br {
  bottom: -5px; right: -5px;
  background: var(--accent2);
  box-shadow: 0 0 14px rgba(236,72,153,0.8);
}

/* ── Floating metric cards ── */
.deco-card {
  position: absolute;
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: var(--card-bg);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 12px;
  padding: 0.6rem 0.95rem;
  min-width: 148px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.35);
}
.card-top  { top: -0.75rem; right: -2rem; animation: float 4s ease-in-out infinite; }
.card-bottom { bottom: -0.75rem; left: -2.5rem; animation: float 5s ease-in-out infinite 0.7s; }
.deco-icon {
  width: 32px; height: 32px;
  border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.icon-accent  { background: rgba(99,102,241,0.15); }
.icon-accent2 { background: rgba(236,72,153,0.12); }
.deco-val {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-heading);
  line-height: 1;
}
.deco-sub {
  font-size: 0.6rem;
  color: var(--text-para);
  margin-top: 2px;
}

/* ── Scroll hint ── */
.scroll-hint {
  position: absolute;
  bottom: 1.75rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
}
.scroll-line {
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, rgba(99,102,241,0.6), transparent);
  animation: scroll-drop 1.8s ease-in-out infinite;
}
.scroll-hint span {
  font-size: 0.58rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(148,163,184,0.45);
}

/* ── Keyframes ── */
@keyframes fade-up {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fade-scale {
  from { opacity: 0; transform: scale(0.92); }
  to   { opacity: 1; transform: scale(1); }
}
@keyframes spin { to { transform: translate(-50%,-50%) rotate(360deg); } }
@keyframes drift {
  0%,100% { transform: translate(0,0) scale(1); }
  50%      { transform: translate(28px,-18px) scale(1.05); }
}
@keyframes morph {
  0%,100% { border-radius: 38% 62% 57% 43% / 43% 37% 63% 57%; }
  25%      { border-radius: 50% 50% 35% 65% / 60% 40% 60% 40%; }
  50%      { border-radius: 60% 40% 53% 47% / 35% 60% 40% 65%; }
  75%      { border-radius: 45% 55% 63% 37% / 50% 45% 55% 50%; }
}
@keyframes pulse {
  0%,100% { opacity:1; box-shadow: 0 0 0 0 rgba(99,102,241,0.5); }
  50%      { opacity:0.7; box-shadow: 0 0 0 5px rgba(99,102,241,0); }
}
@keyframes float {
  0%,100% { transform: translateY(0); }
  50%      { transform: translateY(-8px); }
}
@keyframes scroll-drop {
  0%   { transform: scaleY(0); transform-origin: top; }
  50%  { transform: scaleY(1); transform-origin: top; }
  51%  { transform: scaleY(1); transform-origin: bottom; }
  100% { transform: scaleY(0); transform-origin: bottom; }
}

/* ── Responsive ── */
@media (max-width: 900px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
  }
  .hero-visual { order: -1; }
  .hero-desc  { margin-inline: auto; }
  .skill-pills, .hero-actions, .stats-row { justify-content: center; }
  .photo-wrapper { width: 240px; height: 240px; }
  .card-top    { top: -0.5rem; right: -0.5rem; }
  .card-bottom { bottom: -0.5rem; left: -0.5rem; }
}

@media (max-width: 480px) {
  .hero-section { padding: 5rem 1rem 3rem; }
  .photo-wrapper { width: 200px; height: 200px; }
  .deco-card { min-width: 130px; padding: 0.5rem 0.75rem; }
  .hero-actions { flex-direction: column; align-items: center; }
  .btn { width: 200px; justify-content: center; }
}
</style>