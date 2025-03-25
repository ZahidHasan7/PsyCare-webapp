import { CheckIcon } from "@heroicons/react/24/solid";

export default function PricingCard({ plan }) {
  return (
    <div className={`p-8 rounded-xl ${
      plan.highlight ? "border-4 border-blue-600" : "border-2 border-gray-200"
    }`}>
      <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
      <div className="text-4xl font-bold mb-6">
        {plan.price}<span className="text-lg text-gray-600">/month</span>
      </div>
      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <CheckIcon className="w-5 h-5 text-green-600 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 rounded-lg ${
        plan.highlight
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
      }`}>
        {plan.cta}
      </button>
    </div>
  );
}