import { useMutation } from '@tanstack/vue-query'
import { apiFetch } from './index'
import type { OrderRequest, OrderResponse } from '@/types'

export function useCreateOrder() {
  return useMutation({
    mutationFn: (body: OrderRequest) =>
      apiFetch<OrderResponse>('/orders', {
        method: 'POST',
        body: JSON.stringify(body),
      }),
  })
}
