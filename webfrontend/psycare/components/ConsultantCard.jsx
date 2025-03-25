import { StarIcon } from "@heroicons/react/24/solid";

export default function ConsultantCard({ consultant }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img 
        src={consultant.image} 
        alt={consultant.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold">{consultant.name}</h3>
        <p className="text-gray-600 mb-2">{consultant.specialty}</p>
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
          ))}
          <span className="ml-2 text-gray-600">({consultant.reviews} reviews)</span>
        </div>
        <p className="text-gray-700 mb-4">{consultant.description}</p>
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Book Consultation
        </button>
      </div>
    </div>
  );
}