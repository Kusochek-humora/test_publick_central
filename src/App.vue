<template>
  <div class="min-h-screen bg-slate-950 text-slate-100">
    <AppHeader />
    <main class="pt-16">
      <RouterView />
    </main>
    <Toast position="bottom-right" />
  </div>
</template>

<script setup lang="ts">
import Toast from 'primevue/toast'
import AppHeader from '@/components/layout/AppHeader.vue'
</script>
