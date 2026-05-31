<template>
  <div class="max-w-5xl mx-auto px-6 py-8">
    <h1 class="text-3xl font-bold text-white mb-2">Мероприятия</h1>
    <p class="text-slate-400 mb-8">Выберите мероприятие для покупки билетов</p>

    <!-- loading -->
    <div v-if="isPending" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <Skeleton v-for="n in 3" :key="n" height="10rem" class="rounded-xl" />
    </div>

    <!-- error -->
    <div v-else-if="isError" class="flex flex-col items-center py-20 gap-4">
      <i class="pi pi-exclamation-triangle text-4xl text-red-400" />
      <p class="text-slate-400">Не удалось загрузить мероприятия</p>
      <Button label="Повторить" icon="pi pi-refresh" severity="secondary" @click="() => refetch()" />
    </div>

    <!-- empty -->
    <div v-else-if="!events?.length" class="flex flex-col items-center py-20 gap-4">
      <i class="pi pi-calendar text-4xl text-slate-600" />
      <p class="text-slate-400">Мероприятий пока нет</p>
    </div>

    <!-- events grid -->
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <RouterLink
        v-for="event in events"
        :key="event.id"
        :to="`/events/${event.id}`"
        target="_blank"
        class="group block rounded-xl bg-slate-800 border border-slate-700 hover:border-violet-500 transition-all hover:shadow-lg hover:shadow-violet-500/10 overflow-hidden"
      >
        <!-- header gradient -->
        <div class="h-24 bg-gradient-to-br from-violet-900/60 to-slate-800 flex items-center justify-center">
          <i class="pi pi-music text-3xl text-violet-400" />
        </div>

        <div class="p-4">
          <div class="flex items-start justify-between gap-2 mb-2">
            <h2 class="text-lg font-semibold text-white group-hover:text-violet-300 transition-colors line-clamp-1">
              {{ event.title }}
            </h2>
            <Tag :severity="statusSeverity(event.status)" :value="statusLabel(event.status)" class="flex-shrink-0 text-xs" />
          </div>

          <p class="text-slate-400 text-sm line-clamp-2 mb-3">{{ event.description }}</p>

          <div class="flex items-center gap-3 text-xs text-slate-500">
            <span class="flex items-center gap-1">
              <i class="pi pi-calendar" />
              {{ formatDate(event.date) }}
            </span>
            <span class="flex items-center gap-1">
              <i class="pi pi-clock" />
              {{ event.time }}
            </span>
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watchEffect } from 'vue'
import Skeleton from 'primevue/skeleton'
import Button from 'primevue/button'
import Tag from 'primevue/tag'
import { useEvents } from '@/api/events'

const { data: events, isPending, isError, refetch } = useEvents()
watchEffect(() => { if (events.value?.length) console.log('[events]', events.value[0]) })

function statusLabel(status: string) {
  return { published: 'Открыта продажа', draft: 'Черновик', cancelled: 'Отменено' }[status] ?? status
}

function statusSeverity(status: string) {
  return { published: 'success', draft: 'secondary', cancelled: 'danger' }[status] ?? 'secondary'
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })
}
</script>
