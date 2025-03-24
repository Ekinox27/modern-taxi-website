
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { CompanyInfo } from '../shared/CompanyInfo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-taxi-darkBlue text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-6">{CompanyInfo.name}</h3>
            <p className="text-gray-300 mb-4">
              Transport sanitaire et taxi conventionné à votre service 7j/7. Nous assurons vos déplacements médicaux avec professionnalisme et confort.
            </p>
            <div className="flex items-center mt-6">
              {/* Social media icons would go here */}
              <span className="text-sm text-gray-400">Suivez-nous</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Transport conventionné
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  VSL - Véhicule Sanitaire Léger
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Transport sanitaire hospitalier
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Trajet longue distance
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Transport de personnes à mobilité réduite
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 flex-shrink-0 text-taxi-lightBlue" />
                <a href={`tel:${CompanyInfo.phone}`} className="text-gray-300 hover:text-white transition-colors">
                  07 67 45 40 45
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 flex-shrink-0 text-taxi-lightBlue" />
                <a href="mailto:contact@taxivsl.fr" className="text-gray-300 hover:text-white transition-colors">
                  contact@taxivsl.fr
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-taxi-lightBlue" />
                <span className="text-gray-300">
                  {CompanyInfo.address}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="mt-0.5 flex-shrink-0 text-taxi-lightBlue" />
                <span className="text-gray-300">
                  Disponible 7j/7 - 24h/24
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} {CompanyInfo.name}. Tous droits réservés.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            <Link to="/mentions-legales" className="hover:text-white transition-colors">
              Mentions légales
            </Link>
            <Link to="/politique-confidentialite" className="hover:text-white transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
