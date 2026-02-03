import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  recipeCount: number;
  image: string;
  index?: number;
}

const CategoryCard = ({ id, title, description, icon, recipeCount, image, index = 0 }: CategoryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <Link
        to={`/kategori/${id}`}
        className="group relative block h-64 md:h-80 rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300"
      >
        {/* Background Image */}
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{icon}</span>
            <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
              {recipeCount} Resep
            </span>
          </div>
          <h3 className="font-display text-xl md:text-2xl font-bold text-primary-foreground">
            {title}
          </h3>
          <p className="mt-2 text-sm text-primary-foreground/80 line-clamp-2">
            {description}
          </p>
          <div className="mt-4 flex items-center gap-2 text-primary-foreground font-medium text-sm group-hover:gap-3 transition-all">
            <span>Lihat Resep</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;
