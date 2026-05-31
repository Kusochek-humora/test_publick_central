<template>
  <g :transform="`translate(${group.cx}, ${group.cy}) rotate(${group.rotation})`">
    <!-- group label -->
    <text
      y="-30"
      text-anchor="middle"
      font-size="12"
      fill="#94a3b8"
      font-family="system-ui, sans-serif"
    >{{ group.label }}</text>

    <!-- table shape for table types -->
    <template v-if="isTable">
      <rect
        :x="-tableW / 2"
        :y="-tableH / 2"
        :width="tableW"
        :height="tableH"
        rx="8"
        fill="#1e293b"
        stroke="#334155"
        stroke-width="2"
      />
    </template>

    <!-- sofa shape -->
    <template v-else-if="isSofa">
      <rect
        :x="-sofaW / 2"
        :y="-sofaH / 2"
        :width="sofaW"
        :height="sofaH"
        rx="12"
        fill="#1e293b"
        stroke="#334155"
        stroke-width="2"
      />
    </template>

    <!-- seats -->
    <SeatItem
      v-for="seat in group.seats"
      :key="seat.id"
      :seat="seat"
      :event-seat="eventSeats.get(seat.id)"
      :zone-color="zoneColor"
      :is-selected="selectedIds.includes(seat.id)"
      @click="emit('seatClick', seat.id)"
    />
  </g>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { SeatGroup, EventSeat, PriceZone } from '@/types'
import SeatItem from './SeatItem.vue'

const props = defineProps<{
  group: SeatGroup
  eventSeats: Map<number, EventSeat>
  selectedIds: number[]
  priceZones: PriceZone[]
}>()

const emit = defineEmits<{
  seatClick: [seatId: number]
}>()

const isTable = computed(() => props.group.type.startsWith('table'))
const isSofa = computed(() => props.group.type.startsWith('sofa'))

const seatCount = computed(() => {
  const match = props.group.type.match(/\d+/)
  return match ? parseInt(match[0]) : props.group.seats.length
})

const tableW = computed(() => Math.min(seatCount.value * 40, 200))
const tableH = computed(() => 60)
const sofaW = computed(() => seatCount.value * 35 + 20)
const sofaH = computed(() => 50)

const zoneColor = computed(() => {
  const zoneId = props.group.priceZoneId
  return props.priceZones.find(z => z.id === zoneId)?.color
    ?? props.group.priceZone?.color
    ?? '#64748b'
})
</script>
