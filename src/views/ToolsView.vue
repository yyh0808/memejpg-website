<template>
  <v-container class="py-16">
    <v-row class="mb-8">
      <v-col cols="12" class="text-center">
        <h1 class="text-h3 font-weight-bold text-grey-darken-3 font-modern mb-4">
          Online Tools
        </h1>
        <p class="text-h6 text-grey-darken-1 font-weight-regular max-w-lg mx-auto">
          Explore our complete suite of free online image utilities.
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="tool in tools" :key="tool.id" cols="12" sm="6" md="4" lg="3">
        <a :href="tool.url" target="_blank" class="text-decoration-none">
          <v-card class="glass-card h-100 pa-4" variant="flat">
            <div class="d-flex align-center mb-4">
              <div class="rounded-lg pa-3 bg-indigo-lighten-5 text-primary mr-4">
                <v-icon size="28">{{ tool.icon }}</v-icon>
              </div>
            </div>
            
            <h3 class="text-h6 font-weight-bold text-grey-darken-3 mb-2 font-modern">
                {{ $t(tool.nameKey) }}
            </h3>

            <p class="text-body-2 text-grey-darken-1 mb-4 line-clamp-2">
              {{ $t(tool.descriptionKey) }}
            </p>
            
            <div class="d-flex align-center text-primary text-caption font-weight-bold">
               <span class="mr-1">{{ tool.available ? 'Launch Tool' : 'Coming Soon' }}</span>
               <v-icon size="small" icon="mdi-arrow-right"></v-icon>
            </div>
          </v-card>
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { tools } from '../data/tools'
</script>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  transition: transform 0.2s, box-shadow 0.2s;
}

.glass-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.1);
}
</style>
