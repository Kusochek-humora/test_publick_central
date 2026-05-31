<template>
  <div class="max-w-7xl mx-auto px-6 py-8">
    <!-- back -->
    <RouterLink to="/events" class="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-6 transition-colors">
      <i class="pi pi-arrow-left" /> Назад к мероприятиям
    </RouterLink>

    <!-- loading -->
    <div v-if="eventPending || seatsPending || groupsPending" class="space-y-4">
      <Skeleton height="3rem" width="20rem" />
      <Skeleton height="60vh" class="rounded-xl" />
    </div>

    <!-- error -->
    <div v-else-if="eventError" class="flex flex-col items-center py-20 gap-4">
      <i class="pi pi-exclamation-triangle text-4xl text-red-400" />
      <p class="text-slate-400">Мероприятие не найдено</p>
    </div>

    <template v-else-if="event">
      <!-- header -->
      <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
        <div>
          <div class="flex items-center gap-3 mb-1">
            <h1 class="text-3xl font-bold text-white">{{ event.title }}</h1>
            <Tag :severity="statusSeverity(event.status)" :value="statusLabel(event.status)" />
          </div>
          <p class="text-slate-400 mb-2">{{ event.description }}</p>
          <div class="flex items-center gap-4 text-sm text-slate-500">
            <span class="flex items-center gap-1.5"><i class="pi pi-calendar" />{{ formatDate(event.date) }}</span>
            <span class="flex items-center gap-1.5"><i class="pi pi-clock" />{{ event.time }}</span>
          </div>
        </div>

        <!-- selection summary -->
        <div v-if="selectedSeatIds.length" class="flex-shrink-0 bg-slate-800 border border-slate-700 rounded-xl p-4 min-w-52">
          <p class="text-xs text-slate-400 mb-1">Выбрано мест</p>
          <p class="text-2xl font-bold text-white mb-1">{{ selectedSeatIds.length }}</p>
          <p class="text-violet-400 font-semibold mb-3">{{ totalAmount.toLocaleString('ru') }} ₽</p>
          <Button
            label="Оформить заказ"
            icon="pi pi-shopping-cart"
            class="w-full"
            @click="showOrderDialog = true"
          />
        </div>
      </div>

      <!-- map + zones row -->
      <div class="grid grid-cols-1 xl:grid-cols-4 gap-6">
        <div class="xl:col-span-3">
          <VenueMap
            v-if="venue && seatGroups && priceZones && eventSeats"
            :venue="venue"
            :seat-groups="seatGroups"
            :price-zones="priceZones"
            :event-seats="eventSeats"
            :selected-seat-ids="selectedSeatIds"
            @seat-click="toggleSeat"
          />
        </div>

        <!-- right panel: price zones + selected seats -->
        <div class="flex flex-col gap-4">
          <!-- price zones -->
          <div class="bg-slate-800 border border-slate-700 rounded-xl p-4">
            <h3 class="text-sm font-semibold text-slate-300 mb-3">Ценовые зоны</h3>
            <div class="flex flex-col gap-2">
              <div v-for="zone in priceZones" :key="zone.id" class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="w-3 h-3 rounded-full" :style="{ background: zone.color }" />
                  <span class="text-sm text-slate-300">{{ zone.name }}</span>
                </div>
                <span class="text-sm font-medium text-white">{{ zone.price.toLocaleString('ru') }} ₽</span>
              </div>
            </div>
          </div>

          <!-- selected seats list -->
          <div v-if="selectedSeatIds.length" class="bg-slate-800 border border-slate-700 rounded-xl p-4">
            <h3 class="text-sm font-semibold text-slate-300 mb-3">Выбранные места</h3>
            <div class="flex flex-col gap-1.5 max-h-48 overflow-y-auto">
              <div
                v-for="seatId in selectedSeatIds"
                :key="seatId"
                class="flex items-center justify-between text-sm"
              >
                <span class="text-slate-300">{{ seatLabel(seatId) }}</span>
                <div class="flex items-center gap-2">
                  <span class="text-white">{{ seatPrice(seatId).toLocaleString('ru') }} ₽</span>
                  <button class="text-slate-500 hover:text-red-400 transition-colors" @click="toggleSeat(seatId)">
                    <i class="pi pi-times text-xs" />
                  </button>
                </div>
              </div>
            </div>
            <div class="border-t border-slate-700 mt-3 pt-3 flex justify-between text-sm font-semibold">
              <span class="text-slate-400">Итого</span>
              <span class="text-white">{{ totalAmount.toLocaleString('ru') }} ₽</span>
            </div>
          </div>

          <div v-else class="bg-slate-800/50 border border-slate-700 border-dashed rounded-xl p-4 text-center">
            <i class="pi pi-hand-pointer text-2xl text-slate-600 mb-2 block" />
            <p class="text-sm text-slate-500">Нажмите на свободное место, чтобы выбрать</p>
          </div>
        </div>
      </div>
    </template>

    <!-- order dialog -->
    <Dialog
      v-model:visible="showOrderDialog"
      header="Оформление заказа"
      :style="{ width: '26rem' }"
      modal
      class="!bg-slate-900"
    >
      <OrderForm
        :event-id="props.id"
        :seat-ids="selectedSeatIds"
        :total-amount="totalAmount"
        @success="onOrderSuccess"
        @cancel="showOrderDialog = false"
      />
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Skeleton from 'primevue/skeleton'
import Button from 'primevue/button'
import Tag from 'primevue/tag'
import Dialog from 'primevue/dialog'
import { useToast } from 'primevue/usetoast'
import { useEvent, useEventSeats } from '@/api/events'
import { useVenue, usePriceZones, useSeatGroups } from '@/api/venues'
import VenueMap from '@/components/venue/VenueMap.vue'
import OrderForm from '@/components/OrderForm.vue'
import type { OrderResponse } from '@/types'

const props = defineProps<{ id: number }>()
const toast = useToast()

const { data: event, isPending: eventPending, isError: eventError } = useEvent(props.id)
const { data: eventSeats, isPending: seatsPending, refetch: refetchSeats } = useEventSeats(props.id)
const venueId = computed(() => event.value?.venueId ?? 0)
const { data: venue } = useVenue(venueId)
const { data: priceZones } = usePriceZones(venueId)
const { data: seatGroups, isPending: groupsPending } = useSeatGroups(venueId)

const selectedSeatIds = ref<number[]>([])
const showOrderDialog = ref(false)

function toggleSeat(seatId: number) {
  const idx = selectedSeatIds.value.indexOf(seatId)
  if (idx === -1) selectedSeatIds.value.push(seatId)
  else selectedSeatIds.value.splice(idx, 1)
}

function getSeatEventData(seatId: number) {
  return eventSeats.value?.find(es => es.seatId === seatId)
}

function seatPrice(seatId: number): number {
  const es = getSeatEventData(seatId)
  if (es?.priceOverride != null) return es.priceOverride
  const seat = es?.seat
  const priceZoneId = seat?.priceZoneId ?? seat?.group?.priceZoneId
  const zone = priceZones.value?.find(z => z.id === priceZoneId)
    ?? seat?.priceZone
    ?? seat?.group?.priceZone
  return zone?.price ?? 0
}

function seatLabel(seatId: number): string {
  const es = getSeatEventData(seatId)
  const seat = es?.seat
  return `${seat?.group?.label ?? '—'}, место ${seat?.seatNumber ?? seatId}`
}

const totalAmount = computed(() =>
  selectedSeatIds.value.reduce((sum, id) => sum + seatPrice(id), 0),
)

function onOrderSuccess(order: OrderResponse) {
  showOrderDialog.value = false
  selectedSeatIds.value = []
  refetchSeats()
  toast.add({
    severity: 'success',
    summary: 'Заказ оформлен',
    detail: `Заказ #${order.orderId} на сумму ${order.totalAmount.toLocaleString('ru')} ₽`,
    life: 5000,
  })
}

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
