import { BeatmakerPlan } from "./constants"

const commissionRates: Record<BeatmakerPlan, number> = {
  FREE: 0.4,
  BRONZE: 0.35,
  GOLD: 0.3,
  DIAMOND: 0.2,
  DIAMOND_PLUS: 0.1,
}

export function calculateNetRevenue({
  price,
  plan,
  promoPercent,
}: {
  price: number
  plan: BeatmakerPlan
  promoPercent: number
}) {
  const priceAfterPromo = price * (1 - promoPercent / 100)
  const priceExclVAT = priceAfterPromo / 1.2 // TVA = 20%

  const stripeFee = priceExclVAT * 0.025 + 0.25
  const beatsmarketFee = priceExclVAT * commissionRates[plan]

  const net = priceExclVAT - stripeFee - beatsmarketFee
  return Math.max(0, net)
}
