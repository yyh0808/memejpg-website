<template>
  <div class="min-h-screen bg-background pt-24 pb-16">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">
          <div class="bg-surface rounded-xl shadow-sm pa-8 pa-md-12">
            <h1 class="text-h3 font-weight-bold mb-8 text-high-emphasis font-modern">Privacy Policy</h1>
            
            <div class="text-body-1 text-medium-emphasis content-space">
              <p class="mb-6">Last updated: {{ new Date().toLocaleDateString() }}</p>

              <section class="mb-8">
                <h2 class="text-h5 font-weight-bold mb-4 text-primary">1. Information We Collect</h2>
                <p>We believe in privacy by design. Most of our tools process your images locally in your browser, meaning your files are never uploaded to our servers.</p>
                <p>For services that require server-side processing (like the Mac App download or specific API-based tools), we only collect basic usage data such as IP addresses for security and analytics purposes.</p>
              </section>

              <section class="mb-8">
                <h2 class="text-h5 font-weight-bold mb-4 text-primary">2. How We Use Your Information</h2>
                <ul class="ml-6 mb-4">
                  <li>To provide and maintain our Service</li>
                  <li>To monitor the usage of our Service</li>
                  <li>To detect, prevent and address technical issues</li>
                </ul>
              </section>

              <section class="mb-8">
                <h2 class="text-h5 font-weight-bold mb-4 text-primary">3. Local Processing</h2>
                <p>MemeJPG specializes in client-side technology. When you use features like Image Resizing, Conversion, or Compression, the processing happens on your device. Your photos do not leave your computer.</p>
              </section>

              <section class="mb-8">
                <h2 class="text-h5 font-weight-bold mb-4 text-primary">4. Cookies</h2>
                <p>We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
              </section>

              <section>
                <h2 class="text-h5 font-weight-bold mb-4 text-primary">5. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at support@memejpg.com.</p>
              </section>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.content-space p, .content-space ul {
  line-height: 1.8;
}
</style>
