<template>
  <form class="flex flex-col gap-4" @submit.prevent="submit">
    <div class="bg-slate-800 rounded-lg p-3 flex justify-between text-sm mb-1">
      <span class="text-slate-400">Мест: {{ seatIds.length }}</span>
      <span class="text-white font-semibold">{{ totalAmount.toLocaleString('ru') }} ₽</span>
    </div>

    <div class="flex flex-col gap-1">
      <label class="text-xs text-slate-400">Имя *</label>
      <InputText
        v-model="form.customerName"
        placeholder="Иван Петров"
        :class="{ 'p-invalid': errors.customerName }"
        class="w-full"
      />
      <small v-if="errors.customerName" class="text-red-400">{{ errors.customerName }}</small>
    </div>

    <div class="flex flex-col gap-1">
      <label class="text-xs text-slate-400">Email *</label>
      <InputText
        v-model="form.customerEmail"
        type="email"
        placeholder="ivan@example.com"
        :class="{ 'p-invalid': errors.customerEmail }"
        class="w-full"
      />
      <small v-if="errors.customerEmail" class="text-red-400">{{ errors.customerEmail }}</small>
    </div>

    <div class="flex flex-col gap-1">
      <label class="text-xs text-slate-400">Телефон *</label>
      <InputText
        v-model="form.customerPhone"
        placeholder="+79001234567"
        :class="{ 'p-invalid': errors.customerPhone }"
        class="w-full"
      />
      <small v-if="errors.customerPhone" class="text-red-400">{{ errors.customerPhone }}</small>
    </div>

    <Message v-if="apiError" severity="error" class="mt-1">{{ apiError }}</Message>

    <div class="flex gap-3 mt-2">
      <Button
        label="Отмена"
        severity="secondary"
        class="flex-1"
        type="button"
        @click="emit('cancel')"
      />
      <Button
        label="Оплатить"
        icon="pi pi-credit-card"
        class="flex-1"
        type="submit"
        :loading="isPending"
      />
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Message from 'primevue/message'
import { useCreateOrder, getPaymentUrl } from '@/api/orders'
import type { OrderResponse } from '@/types'

const props = defineProps<{
  eventId: number
  seatIds: number[]
  totalAmount: number
}>()

const emit = defineEmits<{
  success: [order: OrderResponse]
  cancel: []
}>()

const form = reactive({
  customerName: '',
  customerEmail: '',
  customerPhone: '',
})

const errors = reactive({
  customerName: '',
  customerEmail: '',
  customerPhone: '',
})

const apiError = ref('')
const { mutateAsync, isPending } = useCreateOrder()

function validate() {
  errors.customerName = form.customerName.trim() ? '' : 'Укажите имя'
  errors.customerEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.customerEmail) ? '' : 'Укажите корректный email'
  errors.customerPhone = form.customerPhone.trim() ? '' : 'Укажите телефон'
  return !errors.customerName && !errors.customerEmail && !errors.customerPhone
}

async function submit() {
  if (!validate()) return
  apiError.value = ''
  try {
    const order = await mutateAsync({
      eventId: props.eventId,
      seatIds: props.seatIds,
      customerName: form.customerName,
      customerEmail: form.customerEmail,
      customerPhone: form.customerPhone,
    })
    const win = window.open('', '_blank')
    const { paymentUrl } = await getPaymentUrl(order.orderId)
    console.log('[payment-url]', paymentUrl)
    if (win) win.location.href = paymentUrl
  } catch (e: any) {
    if (e.status === 409 && e.data?.unavailableSeats) {
      apiError.value = `Некоторые места уже заняты: ${e.data.unavailableSeats.join(', ')}`
    } else {
      apiError.value = e.message ?? 'Ошибка при оформлении заказа'
    }
  }
}
</script>
