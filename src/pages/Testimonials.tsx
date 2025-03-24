
import { useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  useEffect(() => {
    document.title = "Témoignages de nos clients - Taxi VSL";
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Marie Dubois",
      location: "Paris",
      rating: 5,
      text: "Un service impeccable. Le chauffeur est toujours ponctuel et m'aide à monter et descendre du véhicule. Je recommande vivement pour les transports médicaux.",
      date: "15 février 2023"
    },
    {
      id: 2,
      name: "Jean Martin",
      location: "Boulogne-Billancourt",
      rating: 5,
      text: "Excellente expérience avec Taxi VSL pour mes transports hebdomadaires à l'hôpital. Personnel courtois et attentionné. La prise en charge administrative est parfaitement gérée.",
      date: "3 mars 2023"
    },
    {
      id: 3,
      name: "Sophie Laurent",
      location: "Neuilly-sur-Seine",
      rating: 4,
      text: "Très satisfaite des services de Taxi VSL. J'apprécie particulièrement la ponctualité et la gentillesse des chauffeurs. Le véhicule est toujours propre et confortable.",
      date: "27 avril 2023"
    },
    {
      id: 4,
      name: "Philippe Bernard",
      location: "Versailles",
      rating: 5,
      text: "Je fais régulièrement appel à Taxi VSL pour me rendre à mes séances de dialyse. Le chauffeur est toujours là à l'heure, même très tôt le matin. Service fiable et professionnel.",
      date: "11 mai 2023"
    },
    {
      id: 5,
      name: "Nathalie Petit",
      location: "Saint-Cloud",
      rating: 5,
      text: "Ma mère utilise Taxi VSL depuis plusieurs mois pour ses consultations médicales. Nous sommes très satisfaits du service. L'équipe est patiente et comprend bien les besoins des personnes âgées.",
      date: "8 juin 2023"
    },
    {
      id: 6,
      name: "Robert Garcia",
      location: "Levallois-Perret",
      rating: 4,
      text: "Service très professionnel. Les démarches administratives sont simplifiées au maximum et la facturation est transparente. Je recommande pour tous vos transports médicaux.",
      date: "19 juillet 2023"
    },
    {
      id: 7,
      name: "Isabelle Moreau",
      location: "Issy-les-Moulineaux",
      rating: 5,
      text: "Taxi VSL m'a été recommandé par mon médecin et je ne regrette pas ! Chauffeurs professionnels, véhicules adaptés et service client réactif. Parfait pour mes rendez-vous médicaux.",
      date: "24 août 2023"
    },
    {
      id: 8,
      name: "Michel Leroy",
      location: "Clichy",
      rating: 5,
      text: "Je suis client depuis plus d'un an et je suis toujours aussi satisfait. Merci pour votre disponibilité et votre professionnalisme. Le transport en VSL avec vous est un vrai soulagement.",
      date: "12 septembre 2023"
    }
  ];

  return (
    <main>
      <section className="pt-32 pb-16 bg-gradient-to-b from-taxi-blue/10 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Ce que nos clients disent de nous
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Découvrez les témoignages de nos clients satisfaits par nos services de transport conventionné et sanitaire
            </p>
            <div className="flex justify-center items-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="fill-yellow-400 text-yellow-400" size={24} />
              ))}
            </div>
            <p className="text-lg font-medium">
              Note moyenne de 4.9/5 basée sur 150+ avis
            </p>
          </div>
        </div>
      </section>
      
      {/* Testimonials grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-6 relative">
                <Quote className="absolute top-4 right-4 text-taxi-blue/10" size={32} />
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-taxi-blue/20 flex items-center justify-center mr-3">
                    <span className="text-taxi-blue font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'}`} 
                      size={16} 
                    />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">{testimonial.date}</span>
                </div>
                <p className="text-muted-foreground">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-taxi-blue text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-6">
              Prêt à expérimenter notre service ?
            </h2>
            <p className="text-xl mb-8 text-white/80">
              Réservez votre transport conventionné ou sanitaire dès maintenant
            </p>
            <Button 
              asChild 
              size="lg"
              className="bg-white text-taxi-blue hover:bg-gray-100"
            >
              <a href="tel:+33600000000" className="text-lg">
                Appelez-nous au 06 00 00 00 00
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Testimonials;
