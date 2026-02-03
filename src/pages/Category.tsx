import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import RecipeCard from '@/components/RecipeCard';
import Footer from '@/components/Footer';
import { categories, getRecipesByCategory } from '@/data/recipes';

const Category = () => {
  const { id } = useParams<{ id: string }>();
  const category = categories.find(c => c.id === id);
  const recipes = id ? getRecipesByCategory(id) : [];

  if (!category) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">
              Kategori Tidak Ditemukan
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

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-warm py-12 md:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link 
                to="/"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
              >
                <ArrowLeft size={20} />
                Kembali ke Beranda
              </Link>

              <div className="flex items-center gap-4 mb-4">
                <span className="text-5xl md:text-6xl">{category.icon}</span>
                <div>
                  <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                    {category.title}
                  </h1>
                  <p className="mt-2 text-lg text-muted-foreground">
                    {recipes.length} Resep Tersedia
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground max-w-2xl">
                {category.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Recipe Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            {recipes.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {recipes.map((recipe, index) => (
                  <RecipeCard key={recipe.id} recipe={recipe} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  Belum ada resep dalam kategori ini.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Category;
