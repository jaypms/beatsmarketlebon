import { PricingPlans } from "@/components/pricing/Plans";
import { Licenses } from "@/components/pricing/Licenses";
import { Services } from "@/components/pricing/Services";

export default function PricingPage() {
  return (
    <main className="bg-[#111] min-h-screen pb-16">
      <h1 className="text-center text-5xl font-extrabold text-white pt-12 pb-8">
        Tarifs et Offres
      </h1>

      <PricingPlans />
      <Licenses />
      <Services />
    </main>
  );
}
