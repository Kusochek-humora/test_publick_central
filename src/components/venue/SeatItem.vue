<template>
  <g
    :transform="`translate(${seat.offsetX}, ${seat.offsetY})`"
    :style="{ cursor: isClickable ? 'pointer' : 'not-allowed' }"
    @click="handleClick"
  >
    <circle
      r="14"
      :fill="fill"
      :stroke="stroke"
      stroke-width="2"
      class="transition-all duration-150"
      :opacity="isOccupied ? 0.5 : 1"
    />
    <text
      text-anchor="middle"
      dominant-baseline="central"
      font-size="9"
      font-weight="600"
      :fill="isOccupied ? '#64748b' : '#fff'"
      font-family="system-ui, sans-serif"
      style="pointer-events: none"
    >
      {{ seat.seatNumber }}
    </text>

    <!-- tooltip on hover via title -->
    <title>{{ tooltipText }}</title>
  </g>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Seat, EventSeat } from '@/types'

const props = defineProps<{
  seat: Seat
  eventSeat?: EventSeat
  zoneColor: string
  isSelected: boolean
}>()

const emit = defineEmits<{
  click: []
}>()

const isOccupied = computed(() =>
  props.eventSeat?.status === 'reserved' || props.eventSeat?.status === 'sold',
)

const isClickable = computed(() =>
  !isOccupied.value,
)

const fill = computed(() => {
  if (isOccupied.value) return '#334155'
  if (props.isSelected) return '#facc15'
  return props.seat.priceZone?.color ?? props.zoneColor
})

const stroke = computed(() => {
  if (props.isSelected) return '#fbbf24'
  if (isOccupied.value) return '#475569'
  return 'transparent'
})

const tooltipText = computed(() => {
  const status = props.eventSeat?.status
  if (status === 'reserved') return `Место ${props.seat.seatNumber} — забронировано`
  if (status === 'sold') return `Место ${props.seat.seatNumber} — продано`
  return `Место ${props.seat.seatNumber}`
})

function handleClick() {
  if (!isClickable.value) return
  emit('click')
}
</script>
