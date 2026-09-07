interface CardProps {
  title: string;
  description: string;
  image?: string;
  children?: React.ReactNode;
}
 function Card({ title, description, image, children }: CardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      {image && (
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {children && (
          <div className="border-t border-gray-200 pt-4 mt-4">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
export default Card;