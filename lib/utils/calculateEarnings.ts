interface CalculateEarningsOptions {
  priceTTC: number
  promoPercentage?: number // entre 0 et 100, ex: 20 pour -20%
}

export function calculateEarnings({
  priceTTC,
  promoPercentage = 0,
}: CalculateEarningsOptions): number {
  const tvaRate = 0.2 // TVA 20%
  const commissionRate = 0.15 // Commission BeatsMarket 15%
  const stripeFixedFee = 0.25 // Stripe fixe
  const stripePercentFee = 0.017 // Stripe 1.7%

  // Application de la promo éventuelle
  const discountedPrice = priceTTC * (1 - promoPercentage / 100)

  const priceHT = discountedPrice / (1 + tvaRate)
  const commission = priceHT * commissionRate
  const stripeFees = stripeFixedFee + discountedPrice * stripePercentFee
  const earnings = priceHT - commission - stripeFees

  return Math.max(0, Math.round(earnings * 100) / 100)
}
