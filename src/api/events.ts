import { useQuery } from '@tanstack/vue-query'
import { computed, toValue, type MaybeRefOrGetter } from 'vue'
import { apiFetch } from './index'
import type { TicketEvent, EventSeat } from '@/types'

export const eventKeys = {
  all: ['events'] as const,
  detail: (id: number) => ['events', id] as const,
  seats: (id: number) => ['events', id, 'seats'] as const,
}

export function useEvents() {
  return useQuery({
    queryKey: eventKeys.all,
    queryFn: () => apiFetch<TicketEvent[]>('/ticket-events'),
  })
}

export function useEvent(id: MaybeRefOrGetter<number>) {
  return useQuery({
    queryKey: computed(() => eventKeys.detail(toValue(id))),
    queryFn: () => apiFetch<TicketEvent>(`/ticket-events/${toValue(id)}`),
  })
}

export function useEventSeats(eventId: MaybeRefOrGetter<number>) {
  return useQuery({
    queryKey: computed(() => eventKeys.seats(toValue(eventId))),
    queryFn: () => apiFetch<EventSeat[]>(`/ticket-events/${toValue(eventId)}/seats`),
    refetchInterval: 15000,
  })
}
