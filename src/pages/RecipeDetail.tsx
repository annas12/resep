import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Users, ChefHat, Printer, Share2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getRecipeById, categories } from '@/data/recipes';

const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const recipe = id ? getRecipeById(id) : undefined;

  if (!recipe) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">
              Resep Tidak Ditemukan
            </h1>
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowLeft size={20} />
              Kembali ke Beranda
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const category = categories.find(c => c.id === recipe.category);

  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: recipe.title,
          text: recipe.description,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Image */}
        <div className="relative h-64 md:h-96 lg:h-[500px]">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
          
          {/* Back Button */}
          <div className="absolute top-4 left-4">
            <Link 
              to={`/kategori/${recipe.category}`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-background/90 backdrop-blur-sm rounded-full text-sm font-medium text-foreground hover:bg-background transition-colors"
            >
              <ArrowLeft size={18} />
              Kembali
            </Link>
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <div className="container mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {category && (
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary rounded-full text-sm font-medium text-primary-foreground mb-4">
                    {category.icon} {category.title}
                  </span>
                )}
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
                  {recipe.title}
                </h1>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-4xl mx-auto">
            {/* Meta Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap items-center gap-4 md:gap-6 mb-8 pb-8 border-b border-border"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg">
                <Clock size={18} className="text-primary" />
                <span className="text-sm font-medium">{recipe.cookTime}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg">
                <Users size={18} className="text-primary" />
                <span className="text-sm font-medium">{recipe.servings} Porsi</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg">
                <ChefHat size={18} className="text-primary" />
                <span className="text-sm font-medium">{recipe.difficulty}</span>
              </div>
              {recipe.region && (
                <div className="flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg">
                  <span className="text-sm font-medium">📍 {recipe.region}</span>
                </div>
              )}
              
              {/* Action Buttons */}
              <div className="flex items-center gap-2 ml-auto">
                <button
                  onClick={handlePrint}
                  className="p-2 rounded-lg bg-secondary hover:bg-muted transition-colors"
                  aria-label="Print recipe"
                >
                  <Printer size={20} />
                </button>
                <button
                  onClick={handleShare}
                  className="p-2 rounded-lg bg-secondary hover:bg-muted transition-colors"
                  aria-label="Share recipe"
                >
                  <Share2 size={20} />
                </button>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-10"
            >
              {recipe.description}
            </motion.p>

            {/* Grid Layout for Ingredients and Instructions */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Ingredients */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="lg:col-span-1"
              >
                <div className="bg-card rounded-2xl p-6 shadow-card sticky top-24">
                  <h2 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-sm">
                      🥗
                    </span>
                    Bahan-bahan
                  </h2>
                  <ul className="space-y-3">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="w-2 h-2 rounded-full bg-primary" />
                        </span>
                        <span className="text-foreground">{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Instructions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="lg:col-span-2"
              >
                <h2 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-sm">
                    📝
                  </span>
                  Cara Memasak
                </h2>
                <ol className="space-y-6">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex gap-4">
                      <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                        {index + 1}
                      </span>
                      <div className="flex-1 pt-1">
                        <p className="text-foreground leading-relaxed">{instruction}</p>
                      </div>
                    </li>
                  ))}
                </ol>

                {/* Tips */}
                <div className="mt-10 p-6 bg-accent/20 rounded-2xl border border-accent/30">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    💡 Tips
                  </h3>
                  <p className="text-muted-foreground">
                    Untuk hasil terbaik, gunakan bahan-bahan segar dan ikuti langkah-langkah dengan teliti. 
                    Jangan ragu untuk menyesuaikan bumbu sesuai selera Anda.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RecipeDetail;
