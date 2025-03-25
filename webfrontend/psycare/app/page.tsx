// frontend/src/app/page.jsx
import FeatureCard from "../components/FeatureCard";
import ConsultantCard from "../components/ConsultantCard";
import PricingCard from "../components/PricingCard";
import { consultants } from "../data/consultants";
import { pricingPlans } from "../data/pricingPlans";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-50 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Your Mental Health Matters to Us
          </h1>
          <p className="mt-4 text-gray-700">Your Mental Health Matters to Us</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon="anonymous"
              title="Anonymous Support"
              description="Share your concerns without revealing your identity."
            />
            <FeatureCard
              icon="ai"
              title="AI-Powered Insights"
              description="Get instant AI-generated suggestions."
            />
            <FeatureCard
              icon="video"
              title="Video Consultations"
              description="Connect with therapists securely."
            />
          </div>
        </div>
      </section>

      {/* Consultants Section */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Expert Consultants</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {consultants.map((consultant) => (
              <ConsultantCard key={consultant.id} consultant={consultant} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Support Level</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}