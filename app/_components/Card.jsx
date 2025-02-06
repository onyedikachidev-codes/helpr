import Link from "next/link";

function Card({ icon, title, description, buttonText, buttonLink }) {
  return (
    <div className="bg-gray-100 flex flex-col items-center text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Icon */}
      <div className="text-4xl mb-4 text-blue-500">{icon}</div>

      {/* Title */}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 mb-4">{description}</p>

      {/* Button */}
      <Link
        href={buttonLink}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
      >
        {buttonText}
      </Link>
    </div>
  );
}

export default Card;
