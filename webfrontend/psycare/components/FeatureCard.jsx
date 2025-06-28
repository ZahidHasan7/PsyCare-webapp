import { FiUser, FiSmile, FiVideo } from "react-icons/fi";

export default function FeatureCard({ icon, title, description }) {
  const getIcon = () => {
    switch (icon) {
      case "anonymous":
        return <FiUser className="w-12 h-12 text-blue-600" />;
      case "ai":
        return <FiSmile className="w-12 h-12 text-blue-600" />;
      case "video":
        return <FiVideo className="w-12 h-12 text-blue-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="mb-4">{getIcon()}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}