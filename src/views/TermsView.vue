<template>
  <div class="min-h-screen bg-background pt-24 pb-16">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">
          <div class="bg-surface rounded-xl shadow-sm pa-8 pa-md-12">
            <h1 class="text-h3 font-weight-bold mb-8 text-high-emphasis font-modern">Terms of Service</h1>
            
            <div class="text-body-1 text-medium-emphasis content-space">
              <p class="mb-6">Last updated: {{ new Date().toLocaleDateString() }}</p>

              <section class="mb-8">
                <h2 class="text-h5 font-weight-bold mb-4 text-primary">1. Acceptance of Terms</h2>
                <p>By accessing and using MemeJPG ("the Service"), you accept and agree to be bound by the terms and provision of this agreement.</p>
              </section>

              <section class="mb-8">
                <h2 class="text-h5 font-weight-bold mb-4 text-primary">2. Use License</h2>
                <p>Permission is granted to temporarily download one copy of the materials (information or software) on MemeJPG's website for personal, non-commercial transitory viewing only.</p>
                <p>This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                <ul class="ml-6 mb-4">
                  <li>modify or copy the materials;</li>
                  <li>use the materials for any commercial purpose, or for any public display;</li>
                  <li>attempt to decompile or reverse engineer any software contained on MemeJPG's website;</li>
                </ul>
              </section>

              <section class="mb-8">
                <h2 class="text-h5 font-weight-bold mb-4 text-primary">3. Disclaimer</h2>
                <p>The materials on MemeJPG's website are provided on an 'as is' basis. MemeJPG makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
              </section>

              <section class="mb-8">
                <h2 class="text-h5 font-weight-bold mb-4 text-primary">4. Limitations</h2>
                <p>In no event shall MemeJPG or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on MemeJPG's website.</p>
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
