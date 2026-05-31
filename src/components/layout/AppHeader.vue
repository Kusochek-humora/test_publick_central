<template>
  <header class="fixed top-0 inset-x-0 z-50 h-16 bg-slate-900/90 backdrop-blur border-b border-slate-800 flex items-center px-6 gap-6">
    <RouterLink to="/events" class="text-lg font-bold text-white tracking-tight flex items-center gap-2">
      <i class="pi pi-ticket text-violet-400" />
      TicketApp
    </RouterLink>

    <span class="text-xs text-green-400 ml-auto">✓ payment-url v2</span>

    <nav class="flex items-center gap-1 ml-2">
      <RouterLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="px-3 py-1.5 rounded-md text-sm font-medium transition-colors"
        :class="isActive(link.to)
          ? 'bg-violet-600 text-white'
          : 'text-slate-400 hover:text-white hover:bg-slate-800'"
      >
        <i :class="['pi', link.icon, 'mr-1.5']" />
        {{ link.label }}
      </RouterLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

const links = [
  { to: '/events', label: 'Мероприятия', icon: 'pi-calendar' },
  { to: '/scanner', label: 'Сканер', icon: 'pi-qrcode' },
]

function isActive(path: string) {
  return route.path.startsWith(path)
}
</script>
