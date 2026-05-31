export interface PriceZone {
  id: number
  venueId: number
  name: string
  color: string
  price: number
  order: number
}

export interface Seat {
  id: number
  groupId: number
  venueId: number
  seatNumber: number
  offsetX: number
  offsetY: number
  priceZoneId: number | null
  priceZone: PriceZone | null
  group?: SeatGroup
}

export interface SeatGroup {
  id: number
  venueId: number
  type: string
  label: string
  cx: number
  cy: number
  rotation: number
  priceZoneId: number | null
  priceZone?: PriceZone | null
  seats: Seat[]
}

export interface Venue {
  id: number
  name: string
  description: string
  svgBackground: string | null
  width: number
  height: number
  createdAt: string
  updatedAt: string
}

export interface TicketEvent {
  id: number
  venueId: number
  title: string
  description: string
  date: string
  time: string
  status: 'draft' | 'published' | 'cancelled'
  createdAt: string
  updatedAt: string
}

export type SeatStatus = 'free' | 'reserved' | 'sold'

export interface EventSeat {
  id: number
  eventId: number
  seatId: number
  status: SeatStatus
  reservedUntil: string | null
  priceOverride: number | null
  orderId: number | null
  seat: Seat
}

export interface OrderRequest {
  eventId: number
  seatIds: number[]
  customerName: string
  customerEmail: string
  customerPhone: string
}

export interface OrderResponse {
  orderId: number
  totalAmount: number
  reservedUntil: string
  status: string
}

export interface ScanResult {
  valid: boolean
  alreadyScanned: boolean
  scannedAt: string
  eventId: number
  seatId: number
  price: number
}
