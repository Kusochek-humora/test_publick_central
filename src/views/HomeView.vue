<template>
  <div class="flex flex-col items-center justify-center min-h-[70vh] gap-6 px-6 text-center">
    <i class="pi pi-ticket text-6xl text-violet-400" />
    <h1 class="text-4xl font-bold text-white">TicketApp</h1>
    <p class="text-slate-400 text-lg max-w-md">Покупайте билеты на мероприятия онлайн</p>
    <RouterLink
      to="/events"
      class="px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-xl transition-colors"
    >
      Смотреть мероприятия
    </RouterLink>
  </div>
</template>
