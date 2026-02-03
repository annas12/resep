import { Link } from 'react-router-dom';
import { categories } from '@/data/recipes';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl">🍽️</span>
              <span className="font-display text-xl font-bold text-foreground">
                Resep<span className="text-primary">Nusantara</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-md">
              Koleksi resep masakan Indonesia terlengkap. Dari masakan sehari-hari 
              hingga hidangan spesial Lebaran, temukan resep favorit Anda di sini.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Kategori</h4>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/kategori/${category.id}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {category.icon} {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Lainnya</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  Tentang Kami
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  Kontak
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} ResepNusantara. Dibuat dengan ❤️ di Indonesia.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
