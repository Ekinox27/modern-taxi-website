
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Témoignages', path: '/temoignages' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 font-display font-bold text-2xl text-taxi-blue"
          >
            <span className="text-taxi-blue">Taxi</span>
            <span className="text-taxi-darkBlue">VSL</span>
          </Link>

          {/* Navigation menu - desktop */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
            <Button 
              asChild 
              className="ml-4 bg-taxi-blue hover:bg-taxi-darkBlue"
            >
              <a href="tel:+33600000000" className="flex items-center gap-2">
                <Phone size={16} />
                <span className="hidden sm:inline">Appelez-nous</span>
              </a>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-4">
            <Button 
              asChild 
              size="sm"
              variant="outline"
              className="rounded-full bg-taxi-blue text-white border-none hover:bg-taxi-darkBlue"
            >
              <a href="tel:+33600000000">
                <Phone size={18} />
              </a>
            </Button>
            <button
              className="p-2 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out pt-20 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col items-center space-y-6 p-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-lg font-medium ${
                isActive(link.path) ? 'text-taxi-blue' : 'text-foreground'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button 
            asChild 
            className="w-full mt-4 bg-taxi-blue hover:bg-taxi-darkBlue"
          >
            <a href="tel:+33600000000" className="flex items-center justify-center gap-2">
              <Phone size={16} />
              <span>Appelez-nous</span>
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
