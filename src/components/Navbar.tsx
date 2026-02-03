import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { categories } from '@/data/recipes';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">🍽️</span>
            <span className="font-display text-xl md:text-2xl font-bold text-foreground">
              Resep<span className="text-primary">Nusantara</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Beranda
            </Link>
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/kategori/${category.id}`}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(`/kategori/${category.id}`) ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {category.title}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive('/') ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'
                  }`}
                >
                  Beranda
                </Link>
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    to={`/kategori/${category.id}`}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive(`/kategori/${category.id}`)
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-secondary'
                    }`}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.title}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
