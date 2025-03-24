
import { ArrowRight, Phone, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CompanyInfo } from '../shared/CompanyInfo';

const Cta = () => {
  return (
    <section className="bg-taxi-blue text-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Besoin d'un transport sanitaire conventionné ?
          </h2>
          
          <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Nous assurons vos déplacements médicaux avec professionnalisme et confort. Appelez-nous pour réserver votre transport.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5">
              <CheckCircle className="w-8 h-8 text-white mb-3 mx-auto" />
              <h3 className="font-semibold mb-2">Prise en charge</h3>
              <p className="text-sm opacity-80">
                Par l'Assurance Maladie sur prescription
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5">
              <CheckCircle className="w-8 h-8 text-white mb-3 mx-auto" />
              <h3 className="font-semibold mb-2">Service rapide</h3>
              <p className="text-sm opacity-80">
                Réservation simple et transport ponctuel
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5">
              <CheckCircle className="w-8 h-8 text-white mb-3 mx-auto" />
              <h3 className="font-semibold mb-2">Confort optimal</h3>
              <p className="text-sm opacity-80">
                Véhicules adaptés à votre état de santé
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              asChild
              size="lg" 
              className="bg-white text-taxi-blue hover:bg-white/90"
            >
              <a href={`tel:${CompanyInfo.phone}`} className="flex items-center gap-2 px-8">
                <Phone size={18} />
                <span>07 67 45 40 45</span>
              </a>
            </Button>
            
            <Button 
              asChild
              size="lg" 
              className="bg-white text-taxi-blue hover:bg-white/90"
            >
              
              <Link to="/contact" className="flex items-center gap-2">
                <span>Demande de devis</span>
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
