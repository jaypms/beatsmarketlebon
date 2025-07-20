import { Metadata } from "next";
import { PricingPlans } from "@/components/pricing/plans";
import { Features } from "@/components/pricing/features";
import { Licenses } from "@/components/pricing/licenses";
import { Addons } from "@/components/pricing/addons";

export const metadata: Metadata = {
  title: "Tarifs | BeatsMarket",
  description:
    "Découvrez nos plans d'abonnement pour les beatmakers ainsi que les options de licences musicales pour les artistes.",
};

export default function PricingPage() {
  return (
    <main className="flex flex-col gap-16 px-4 py-12 sm:px-8 md:px-16 xl:px-32 2xl:px-64">
      <PricingPlans />
      <Features />
      <Addons />
      <Licenses />
    </main>
  );
}
