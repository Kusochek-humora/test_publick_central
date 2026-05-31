import { useQuery } from '@tanstack/vue-query'
import { computed, toValue, type MaybeRefOrGetter } from 'vue'
import { apiFetch } from './index'
import type { Venue, PriceZone, SeatGroup } from '@/types'

export const venueKeys = {
  all: ['venues'] as const,
  detail: (id: number) => ['venues', id] as const,
  priceZones: (id: number) => ['venues', id, 'price-zones'] as const,
  seatGroups: (id: number) => ['venues', id, 'seat-groups'] as const,
}

export function useVenues() {
  return useQuery({
    queryKey: venueKeys.all,
    queryFn: () => apiFetch<Venue[]>('/venues'),
  })
}

export function useVenue(id: MaybeRefOrGetter<number>) {
  return useQuery({
    queryKey: computed(() => venueKeys.detail(toValue(id))),
    queryFn: () => apiFetch<Venue>(`/venues/${toValue(id)}`),
    enabled: computed(() => toValue(id) > 0),
  })
}

export function usePriceZones(venueId: MaybeRefOrGetter<number>) {
  return useQuery({
    queryKey: computed(() => venueKeys.priceZones(toValue(venueId))),
    queryFn: () => apiFetch<PriceZone[]>(`/venues/${toValue(venueId)}/price-zones`),
    enabled: computed(() => toValue(venueId) > 0),
  })
}

export function useSeatGroups(venueId: MaybeRefOrGetter<number>) {
  return useQuery({
    queryKey: computed(() => venueKeys.seatGroups(toValue(venueId))),
    queryFn: () => apiFetch<SeatGroup[]>(`/venues/${toValue(venueId)}/seat-groups`),
    enabled: computed(() => toValue(venueId) > 0),
  })
}
