import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Users, ChefHat } from 'lucide-react';
import { Recipe } from '@/data/recipes';

interface RecipeCardProps {
  recipe: Recipe;
  index?: number;
}

const RecipeCard = ({ recipe, index = 0 }: RecipeCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link
        to={`/resep/${recipe.id}`}
        className="group block bg-card rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
      >
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          
          {/* Region Badge */}
          {recipe.region && (
            <span className="absolute top-3 left-3 px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
              {recipe.region}
            </span>
          )}
          
          {/* Difficulty Badge */}
          <span className={`absolute top-3 right-3 px-3 py-1 text-xs font-medium rounded-full ${
            recipe.difficulty === 'Mudah' 
              ? 'bg-accent/90 text-accent-foreground' 
              : recipe.difficulty === 'Sedang'
              ? 'bg-primary/90 text-primary-foreground'
              : 'bg-destructive/90 text-destructive-foreground'
          }`}>
            {recipe.difficulty}
          </span>
        </div>

        {/* Content */}
        <div className="p-4 md:p-5">
          <h3 className="font-display text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
            {recipe.title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
            {recipe.description}
          </p>

          {/* Meta */}
          <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock size={14} className="text-primary" />
              <span>{recipe.cookTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users size={14} className="text-primary" />
              <span>{recipe.servings} porsi</span>
            </div>
            <div className="flex items-center gap-1">
              <ChefHat size={14} className="text-primary" />
              <span>{recipe.difficulty}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default RecipeCard;
