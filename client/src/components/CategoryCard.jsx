import { Link } from 'react-router-dom';

export default function CategoryCard({ category }) {
  return (
    <Link
      to="/browse-jobs"
      className="group block h-full"
    >
      <div className="h-full relative overflow-hidden rounded-2xl cursor-pointer">
        {/* Gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-100 group-hover:opacity-110 transition-opacity duration-300`}></div>
        
        {/* Animated overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Content */}
        <div className="relative p-8 flex flex-col items-center justify-center h-full space-y-4 text-center group-hover:-translate-y-1 transition-transform duration-300">
          {/* Icon */}
          <div className="text-6xl group-hover:scale-125 transition-transform duration-300 inline-block">
            {category.icon}
          </div>
          
          {/* Title */}
          <h3 className="font-bold text-gray-900 text-lg leading-tight">{category.name}</h3>
          
          {/* Description */}
          <p className="text-sm text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
            Browse {category.name} jobs
          </p>
          
          {/* Arrow indicator */}
          <div className="mt-4 flex items-center justify-center w-10 h-10 bg-white/30 rounded-full group-hover:bg-white/60 transition-all duration-300 group-hover:scale-110">
            <span className="text-gray-900 font-bold group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
