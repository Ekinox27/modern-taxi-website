
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-taxi-blue/5 to-white pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,rgba(30,95,140,0.1),transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-taxi-blue/10 text-taxi-blue font-medium px-4 py-1.5 rounded-full mb-6 stagger-animate-1">
            Transport sanitaire conventionné
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 stagger-animate-2">
            Votre transport médical <span className="text-taxi-blue">conventionné</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto stagger-animate-3">
            Transport sanitaire et taxi conventionné pour vos rendez-vous médicaux. Prise en charge assurance maladie et confort optimal.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 stagger-animate-3">
            <Button 
              asChild
              size="lg" 
              className="bg-taxi-blue hover:bg-taxi-darkBlue text-white font-medium px-8"
            >
              <a href="tel:+33767454045" className="flex items-center gap-2">
                <Phone size={18} />
                <span>Appelez-nous</span>
              </a>
            </Button>
            
            <Button 
              asChild
              size="lg" 
              variant="outline" 
              className="bg-white/80 border-taxi-blue/20 text-taxi-blue hover:bg-taxi-blue/5"
            >
              <Link to="/services" className="flex items-center gap-2">
                <span>Nos services</span>
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto stagger-animate-3">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all hover:border-taxi-blue/20">
            <div className="w-12 h-12 rounded-full bg-taxi-blue/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-taxi-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">Transport conventionné</h3>
            <p className="text-muted-foreground">Prise en charge par l'Assurance Maladie selon prescription</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all hover:border-taxi-blue/20">
            <div className="w-12 h-12 rounded-full bg-taxi-blue/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-taxi-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">Disponible 24h/24</h3>
            <p className="text-muted-foreground">Service de transport médical disponible à tout moment</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all hover:border-taxi-blue/20">
            <div className="w-12 h-12 rounded-full bg-taxi-blue/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-taxi-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">Confort et sécurité</h3>
            <p className="text-muted-foreground">Véhicules adaptés pour un transport en toute sécurité</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
