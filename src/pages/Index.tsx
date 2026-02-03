import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CategoryCard from '@/components/CategoryCard';
import RecipeCard from '@/components/RecipeCard';
import Footer from '@/components/Footer';
import { categories, recipes } from '@/data/recipes';

const categoryImages: Record<string, string> = {
  'umum': 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800',
  'daerah': 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
  'lebaran': 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=800',
  'kue-lebaran': 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800'
};

const Index = () => {
  const getRecipeCount = (categoryId: string) => {
    return recipes.filter(r => r.category === categoryId).length;
  };

  const featuredRecipes = recipes.slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        <Hero />

        {/* Categories Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Jelajahi Kategori
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Pilih kategori yang Anda inginkan dan temukan resep-resep lezat di dalamnya
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <CategoryCard
                  key={category.id}
                  id={category.id}
                  title={category.title}
                  description={category.description}
                  icon={category.icon}
                  recipeCount={getRecipeCount(category.id)}
                  image={categoryImages[category.id]}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Recipes Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Resep Populer
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Resep-resep favorit yang paling banyak dicari
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredRecipes.map((recipe, index) => (
                <RecipeCard key={recipe.id} recipe={recipe} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
                Mulai Memasak Hari Ini!
              </h2>
              <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto">
                Jelajahi semua kategori dan temukan resep yang sempurna untuk keluarga Anda
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                  <a
                    key={category.id}
                    href={`/kategori/${category.id}`}
                    className="px-6 py-3 bg-primary-foreground text-primary rounded-full font-medium hover:bg-primary-foreground/90 transition-colors"
                  >
                    {category.icon} {category.title}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
