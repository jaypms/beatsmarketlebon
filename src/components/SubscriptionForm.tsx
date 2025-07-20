import React, { useState } from "react"

interface Plan {
  name: string
  price: string
}

interface SubscriptionFormProps {
  plans: Plan[]
  onSubscribe: (planName: string) => void
}

export default function SubscriptionForm({ plans, onSubscribe }: SubscriptionFormProps) {
  const [selectedPlan, setSelectedPlan] = useState(plans[0]?.name || "")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedPlan) {
      onSubscribe(selectedPlan)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gray-900 p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4 text-white text-center">Choisissez un plan</h2>

      <div className="flex flex-col space-y-4 mb-6">
        {plans.map((plan) => (
          <label key={plan.name} className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="plan"
              value={plan.name}
              checked={selectedPlan === plan.name}
              onChange={() => setSelectedPlan(plan.name)}
              className="mr-3"
            />
            <span className="text-white">{plan.name} - {plan.price}</span>
          </label>
        ))}
      </div>

      <button
        type="submit"
        className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded transition"
      >
        Souscrire
      </button>
    </form>
  )
}
