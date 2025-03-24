
import { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Marie Dupont",
      location: "Paris",
      rating: 5,
      text: "Service exceptionnel ! Le chauffeur était ponctuel et très attentionné durant tout mon transport médical. Je recommande vivement pour les déplacements sanitaires.",
    },
    {
      id: 2,
      name: "Jean Martin",
      location: "Lyon",
      rating: 5,
      text: "Excellente prise en charge pour mes rendez-vous médicaux hebdomadaires. Véhicule impeccable et confortable, chauffeur professionnel, démarches administratives simplifiées.",
    },
    {
      id: 3,
      name: "Sophie Leclerc",
      location: "Marseille",
      rating: 5,
      text: "Je suis très satisfaite de la qualité du service. Le transport est toujours ponctuel et le chauffeur est d'une grande aide pour mes déplacements à l'hôpital.",
    },
    {
      id: 4,
      name: "Robert Petit",
      location: "Toulouse",
      rating: 4,
      text: "Service fiable et ponctuel pour mes dialyses hebdomadaires. L'équipe est professionnelle et la prise en charge administrative est un vrai plus.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleTestimonials = 3; // Nombre de témoignages visibles à la fois

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - visibleTestimonials : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - visibleTestimonials ? 0 : prevIndex + 1
    );
  };

  // Créer un tableau circulaire pour l'affichage
  const displayTestimonials = [...testimonials, ...testimonials].slice(
    currentIndex,
    currentIndex + visibleTestimonials
  );

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Ce que disent nos clients</h2>
          <p className="section-subtitle mx-auto">
            Découvrez les expériences de nos clients avec notre service de transport sanitaire
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {displayTestimonials.map((testimonial, index) => (
              <div 
                key={`${testimonial.id}-${index}`}
                className="testimonial-card h-full flex flex-col"
              >
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
                    />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-4 flex-grow">"{testimonial.text}"</p>
                
                <div className="mt-auto">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-10 space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevious}
              className="rounded-full hover:bg-taxi-blue/10 hover:text-taxi-blue"
            >
              <ArrowLeft size={20} />
              <span className="sr-only">Précédent</span>
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="rounded-full hover:bg-taxi-blue/10 hover:text-taxi-blue"
            >
              <ArrowRight size={20} />
              <span className="sr-only">Suivant</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
