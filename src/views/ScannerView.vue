<template>
  <div class="max-w-lg mx-auto px-6 py-8">
    <h1 class="text-3xl font-bold text-white mb-2">Сканер билетов</h1>
    <p class="text-slate-400 mb-8">Введите UUID билета для проверки</p>

    <div class="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-6">
      <div class="flex gap-3">
        <InputText
          v-model="input"
          placeholder="UUID билета..."
          class="flex-1"
          @keydown.enter="scan"
        />
        <Button
          label="Проверить"
          icon="pi pi-search"
          :loading="isFetching"
          :disabled="!input.trim()"
          @click="scan"
        />
      </div>
    </div>

    <!-- result -->
    <Transition name="fade">
      <div v-if="result" class="rounded-xl border p-6 flex flex-col items-center gap-4 text-center"
        :class="resultClass">
        <i :class="['pi text-5xl', resultIcon]" />
        <div>
          <p class="text-xl font-bold mb-1" :class="resultTextClass">{{ resultTitle }}</p>
          <p class="text-slate-400 text-sm">{{ resultSubtitle }}</p>
        </div>

        <div v-if="result.valid" class="w-full bg-black/20 rounded-lg p-4 text-left grid grid-cols-2 gap-2 text-sm">
          <span class="text-slate-400">Мероприятие</span>
          <span class="text-white font-medium">#{{ result.eventId }}</span>
          <span class="text-slate-400">Место</span>
          <span class="text-white font-medium">#{{ result.seatId }}</span>
          <span class="text-slate-400">Цена</span>
          <span class="text-white font-medium">{{ result.price.toLocaleString('ru') }} ₽</span>
          <span class="text-slate-400">Время скан.</span>
          <span class="text-white font-medium">{{ formatTime(result.scannedAt) }}</span>
        </div>

        <Button label="Сканировать ещё" severity="secondary" class="w-full" @click="reset" />
      </div>

      <div v-else-if="isError" class="rounded-xl border border-red-800 bg-red-950/30 p-6 text-center">
        <i class="pi pi-exclamation-triangle text-4xl text-red-400 mb-3 block" />
        <p class="text-red-300 font-semibold">Билет не найден или произошла ошибка</p>
        <Button label="Попробовать снова" severity="secondary" class="mt-4" @click="reset" />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import { useScanTicket } from '@/api/tickets'

const input = ref('')
const uuid = ref('')

const { data: result, isFetching, isError, refetch } = useScanTicket(uuid)

function scan() {
  if (!input.value.trim()) return
  uuid.value = input.value.trim()
  refetch()
}

function reset() {
  uuid.value = ''
  input.value = ''
}

const resultClass = computed(() => {
  if (!result.value) return ''
  if (result.value.alreadyScanned) return 'border-yellow-700 bg-yellow-950/30'
  if (result.value.valid) return 'border-green-700 bg-green-950/30'
  return 'border-red-700 bg-red-950/30'
})

const resultIcon = computed(() => {
  if (!result.value) return ''
  if (result.value.alreadyScanned) return 'pi-exclamation-triangle text-yellow-400'
  if (result.value.valid) return 'pi-check-circle text-green-400'
  return 'pi-times-circle text-red-400'
})

const resultTextClass = computed(() => {
  if (!result.value) return ''
  if (result.value.alreadyScanned) return 'text-yellow-300'
  if (result.value.valid) return 'text-green-300'
  return 'text-red-300'
})

const resultTitle = computed(() => {
  if (!result.value) return ''
  if (result.value.alreadyScanned) return 'Билет уже был использован'
  if (result.value.valid) return 'Билет действителен'
  return 'Недействительный билет'
})

const resultSubtitle = computed(() => {
  if (!result.value) return ''
  if (result.value.alreadyScanned) return `Отсканирован: ${formatTime(result.value.scannedAt)}`
  if (result.value.valid) return 'Пропустить!'
  return 'Билет не найден в системе'
})

function formatTime(iso: string) {
  return new Date(iso).toLocaleString('ru-RU')
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s, transform 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(8px); }
</style>
