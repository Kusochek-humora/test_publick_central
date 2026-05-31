import { useQuery } from '@tanstack/vue-query'
import { computed, toValue, type MaybeRefOrGetter } from 'vue'
import { apiFetch } from './index'
import type { ScanResult } from '@/types'

export function useScanTicket(uuid: MaybeRefOrGetter<string>) {
  return useQuery({
    queryKey: computed(() => ['tickets', 'scan', toValue(uuid)]),
    queryFn: () => apiFetch<ScanResult>(`/tickets/scan/${toValue(uuid)}`),
    enabled: computed(() => !!toValue(uuid)),
    retry: false,
  })
}
