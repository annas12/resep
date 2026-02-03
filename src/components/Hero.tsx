import { motion } from 'framer-motion';
import { ChefHat, Utensils, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-warm">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-6xl">🍛</div>
        <div className="absolute top-20 right-20 text-5xl">🥘</div>
        <div className="absolute bottom-20 left-1/4 text-4xl">🍜</div>
        <div className="absolute bottom-10 right-1/3 text-5xl">🍪</div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <ChefHat size={16} />
              Koleksi Resep Terlengkap
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
          >
            Cita Rasa{' '}
            <span className="text-gradient">Nusantara</span>{' '}
            di Dapur Anda
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Temukan ratusan resep masakan Indonesia, dari hidangan sehari-hari 
            hingga sajian spesial Lebaran. Mudah diikuti dan dijamin lezat!
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-8 md:gap-12"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Utensils className="text-primary" size={24} />
              </div>
              <div className="text-left">
                <p className="font-display text-2xl font-bold text-foreground">24+</p>
                <p className="text-sm text-muted-foreground">Resep</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="text-xl">🏝️</span>
              </div>
              <div className="text-left">
                <p className="font-display text-2xl font-bold text-foreground">4</p>
                <p className="text-sm text-muted-foreground">Kategori</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Heart className="text-primary" size={24} />
              </div>
              <div className="text-left">
                <p className="font-display text-2xl font-bold text-foreground">100%</p>
                <p className="text-sm text-muted-foreground">Teruji</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 80V40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
