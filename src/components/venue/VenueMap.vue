<template>
  <div class="relative w-full overflow-hidden rounded-xl bg-slate-900 border border-slate-700 select-none">
    <!-- zoom controls -->
    <div class="absolute top-3 right-3 z-10 flex flex-col gap-1">
      <button
        class="w-8 h-8 rounded bg-slate-800 border border-slate-600 text-white flex items-center justify-center hover:bg-slate-700 transition-colors"
        @click="zoom(0.15)"
      >
        <i class="pi pi-plus text-xs" />
      </button>
      <button
        class="w-8 h-8 rounded bg-slate-800 border border-slate-600 text-white flex items-center justify-center hover:bg-slate-700 transition-colors"
        @click="zoom(-0.15)"
      >
        <i class="pi pi-minus text-xs" />
      </button>
      <button
        class="w-8 h-8 rounded bg-slate-800 border border-slate-600 text-white flex items-center justify-center hover:bg-slate-700 transition-colors"
        @click="resetView"
      >
        <i class="pi pi-expand text-xs" />
      </button>
    </div>

    <svg
      ref="svgRef"
      :viewBox="`0 0 ${venue.width} ${venue.height}`"
      class="w-full"
      :style="{ aspectRatio: `${venue.width} / ${venue.height}` }"
      @wheel.prevent="onWheel"
      @mousedown="onPanStart"
      @mousemove="onPanMove"
      @mouseup="onPanEnd"
      @mouseleave="onPanEnd"
    >
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e293b" stroke-width="1" />
        </pattern>
      </defs>

      <g :transform="`translate(${pan.x}, ${pan.y}) scale(${scale})`">
        <!-- grid bg -->
        <rect width="100%" height="100%" fill="url(#grid)" />

        <!-- svg background if provided -->
        <image v-if="venue.svgBackground" :href="venue.svgBackground" x="0" y="0" :width="venue.width" :height="venue.height" />

        <!-- seat groups -->
        <SeatGroupItem
          v-for="group in seatGroups"
          :key="group.id"
          :group="group"
          :event-seats="eventSeatsMap"
          :selected-ids="selectedSeatIds"
          @seat-click="onSeatClick"
        />
      </g>
    </svg>

    <!-- legend -->
    <div class="absolute bottom-3 left-3 flex flex-col gap-1.5 bg-slate-900/80 backdrop-blur rounded-lg p-2 border border-slate-700">
      <div v-for="zone in priceZones" :key="zone.id" class="flex items-center gap-2 text-xs">
        <span class="w-3 h-3 rounded-full flex-shrink-0" :style="{ background: zone.color }" />
        <span class="text-slate-300">{{ zone.name }}</span>
        <span class="text-slate-500 ml-1">{{ zone.price.toLocaleString('ru') }} ₽</span>
      </div>
      <div class="border-t border-slate-700 mt-1 pt-1 flex flex-col gap-1">
        <div class="flex items-center gap-2 text-xs">
          <span class="w-3 h-3 rounded-full bg-slate-600 flex-shrink-0" />
          <span class="text-slate-400">Занято</span>
        </div>
        <div class="flex items-center gap-2 text-xs">
          <span class="w-3 h-3 rounded-full bg-yellow-400 flex-shrink-0" />
          <span class="text-slate-400">Выбрано</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { Venue, SeatGroup, PriceZone, EventSeat } from '@/types'
import SeatGroupItem from './SeatGroupItem.vue'

const props = defineProps<{
  venue: Venue
  seatGroups: SeatGroup[]
  priceZones: PriceZone[]
  eventSeats: EventSeat[]
  selectedSeatIds: number[]
}>()

const emit = defineEmits<{
  seatClick: [seatId: number]
}>()

const scale = ref(1)
const pan = ref({ x: 0, y: 0 })
const isPanning = ref(false)
const panStart = ref({ x: 0, y: 0 })

const eventSeatsMap = ref<Map<number, EventSeat>>(new Map())

watch(
  () => props.eventSeats,
  (seats) => {
    eventSeatsMap.value = new Map(seats.map(s => [s.seatId, s]))
  },
  { immediate: true },
)

function zoom(delta: number) {
  scale.value = Math.max(0.3, Math.min(4, scale.value + delta))
}

function onWheel(e: WheelEvent) {
  zoom(e.deltaY < 0 ? 0.1 : -0.1)
}

function resetView() {
  scale.value = 1
  pan.value = { x: 0, y: 0 }
}

function onPanStart(e: MouseEvent) {
  isPanning.value = true
  panStart.value = { x: e.clientX - pan.value.x, y: e.clientY - pan.value.y }
}

function onPanMove(e: MouseEvent) {
  if (!isPanning.value) return
  pan.value = { x: e.clientX - panStart.value.x, y: e.clientY - panStart.value.y }
}

function onPanEnd() {
  isPanning.value = false
}

function onSeatClick(seatId: number) {
  emit('seatClick', seatId)
}
</script>
