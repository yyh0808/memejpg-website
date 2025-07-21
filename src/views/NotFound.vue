<template>
  <v-container fluid class="text-center">
    <v-row>
      <v-col>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <v-btn color="primary" @click="$router.push('/')">Go to Homepage</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
// No additional scripts needed for this simple 404 page.
</script>

<style scoped>
/* Custom styles for 404 page */
</style>

