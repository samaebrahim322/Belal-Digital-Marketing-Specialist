<template>
  <!-- <section id="contact" class="py-20 bg-secondary-bg">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-text-heading mb-4">Get In Touch</h2>
        <p class="text-lg text-text-para max-w-2xl mx-auto">
          Let's discuss how we can work together to achieve your digital marketing goals
        </p>
      </div>
      <div class="grid md:grid-cols-2 gap-12">
        <div>
          <form class="space-y-6">
            <div>
              <input 
                type="text" 
                placeholder="Your Name" 
                class="w-full px-6 py-4 bg-primary-bg border border-accent/30 rounded-2xl text-text-heading placeholder-text-para focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
              >
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Your Email" 
                class="w-full px-6 py-4 bg-primary-bg border border-accent/30 rounded-2xl text-text-heading placeholder-text-para focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
              >
            </div>
            <div>
              <textarea 
                rows="5" 
                placeholder="Your Message" 
                class="w-full px-6 py-4 bg-primary-bg border border-accent/30 rounded-2xl text-text-heading placeholder-text-para focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 resize-none"
              ></textarea>
            </div>
            <button 
              type="submit" 
              class="w-full bg-accent hover:bg-accent/80 text-white py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-accent/25"
            >
              Send Message
            </button>
          </form>
        </div>
        <div class="flex flex-col justify-center">
          <div class="space-y-6">
            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-text-heading">Email</h3>
                <p class="text-text-para">belal@example.com</p>
              </div>
            </div>
            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 bg-accent2/20 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-accent2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-text-heading">Phone</h3>
                <p class="text-text-para">+1 (555) 123-4567</p>
              </div>
            </div>
            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-text-heading">Location</h3>
                <p class="text-text-para">New York, NY</p>
              </div>
            </div>
          </div>
          <div class="mt-8">
            <h3 class="text-lg font-semibold text-text-heading mb-4">Follow Me</h3>
            <div class="flex space-x-4">
              <a href="#" class="w-12 h-12 bg-accent/20 hover:bg-accent rounded-xl flex items-center justify-center transition-colors duration-300">
                <svg class="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" class="w-12 h-12 bg-accent2/20 hover:bg-accent2 rounded-xl flex items-center justify-center transition-colors duration-300">
                <svg class="w-6 h-6 text-accent2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.749.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.747-1.378 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.012.017z"/>
                </svg>
              </a>
              <a href="#" class="w-12 h-12 bg-accent/20 hover:bg-accent rounded-xl flex items-center justify-center transition-colors duration-300">
                <svg class="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> -->
</template>

<script setup lang="ts">
// Component logic if needed
</script>