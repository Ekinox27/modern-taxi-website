
import { useEffect } from 'react';
import { Star, MessageSquare, Quote } from 'lucide-react';

const Testimonials = () => {
  useEffect(() => {
    document.title = "Témoignages - Taxi VSL";
    window.scrollTo(0, 0);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Marie Dupont",
      location: "Paris",
      service: "Transport VSL hebdomadaire",
      rating: 5,
      text: "Service exceptionnel ! Le chauffeur était ponctuel et très attentionné durant tout mon transport médical. La prise en charge administrative a été réalisée sans effort de ma part. Je recommande vivement pour les déplacements sanitaires.",
      date: "15 mars 2023"
    },
    {
      id: 2,
      name: "Jean Martin",
      location: "Lyon",
      service: "Transport conventionné",
      rating: 5,
      text: "Excellente prise en charge pour mes rendez-vous médicaux hebdomadaires. Véhicule impeccable et confortable, chauffeur professionnel, démarches administratives simplifiées. Je n'ai plus à me soucier de mes déplacements médicaux grâce à ce service.",
      date: "22 avril 2023"
    },
    {
      id: 3,
      name: "Sophie Leclerc",
      location: "Marseille",
      service: "Transport hospitalier",
      rating: 5,
      text: "Je suis très satisfaite de la qualité du service. Le transport est toujours ponctuel et le chauffeur est d'une grande aide pour mes déplacements à l'hôpital. Les véhicules sont propres et confortables, ce qui rend le trajet agréable malgré mon état de santé.",
      date: "7 mai 2023"
    },
    {
      id: 4,
      name: "Robert Petit",
      location: "Toulouse",
      service: "VSL pour dialyse",
      rating: 4,
      text: "Service fiable et ponctuel pour mes dialyses hebdomadaires. L'équipe est professionnelle et la prise en charge administrative est un vrai plus. Le seul bémol est parfois le temps d'attente après mes soins, mais dans l'ensemble je suis satisfait.",
      date: "19 juin 2023"
    },
    {
      id: 5,
      name: "Françoise Dubois",
      location: "Nantes",
      service: "Transport PMR",
      rating: 5,
      text: "Étant en fauteuil roulant, je craignais les déplacements médicaux. Ce service a transformé mon expérience ! Le véhicule adapté, l'aide à l'installation et la gentillesse du chauffeur font toute la différence. Je me sens en sécurité et respectée.",
      date: "3 juillet 2023"
    },
    {
      id: 6,
      name: "Philippe Moreau",
      location: "Bordeaux",
      service: "Transport longue distance",
      rating: 5,
      text: "J'ai dû me rendre dans un centre spécialisé à 200km de chez moi. Le service de transport longue distance a été impeccable. Le chauffeur était attentif à mon confort durant tout le trajet et s'est occupé de toutes les formalités administratives.",
      date: "11 août 2023"
    },
    {
      id: 7,
      name: "Claire Girard",
      location: "Lille",
      service: "Transport conventionné régulier",
      rating: 5,
      text: "Je dois suivre des soins réguliers et ce service de transport a véritablement amélioré ma qualité de vie. Plus besoin de conduire ou de demander de l'aide à mes proches. La réservation est simple et les chauffeurs sont tous très professionnels.",
      date: "28 septembre 2023"
    },
    {
      id: 8,
      name: "Michel Bernard",
      location: "Strasbourg",
      service: "Transport sanitaire",
      rating: 4,
      text: "Service de qualité avec des chauffeurs formés et attentionnés. Les véhicules sont adaptés à mes besoins médicaux. J'apprécie particulièrement la ponctualité et l'assistance lors des déplacements entre le véhicule et le cabinet médical.",
      date: "14 octobre 2023"
    },
  ];

  const topTestimonial = testimonials[0];
  const restTestimonials = testimonials.slice(1);

  return (
    <main className="pt-24 pb-20">
      <section className="container mx-auto px-4 md:px-6">
        <div className="mb-16 max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ce que disent nos clients
          </h1>
          <p className="text-xl text-muted-foreground">
            Découvrez les témoignages de nos clients qui font confiance à notre service de transport médical au quotidien.
          </p>
        </div>
        
        {/* Testimonial en vedette */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative bg-white rounded-xl p-8 shadow-md border border-border">
            <div className="absolute -top-4 -right-4 bg-taxi-blue text-white px-4 py-2 rounded-lg text-sm font-medium">
              Témoignage en vedette
            </div>
            
            <div className="mb-6 flex items-center space-x-1">
              {[...Array(topTestimonial.rating)].map((_, i) => (
                <Star 
                  key={i} 
                  size={20} 
                  className="fill-yellow-400 text-yellow-400" 
                />
              ))}
            </div>
            
            <div className="mb-6 relative">
              <Quote className="absolute -top-2 -left-2 h-8 w-8 text-taxi-blue/10" />
              <p className="text-lg italic relative z-10 pl-6">
                "{topTestimonial.text}"
              </p>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-lg">{topTestimonial.name}</p>
                <p className="text-muted-foreground">{topTestimonial.location}</p>
                <p className="text-taxi-blue text-sm mt-1">{topTestimonial.service}</p>
              </div>
              <p className="text-sm text-muted-foreground">{topTestimonial.date}</p>
            </div>
          </div>
        </div>
        
        {/* Grille de témoignages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restTestimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all hover:border-taxi-blue/20"
            >
              <div className="mb-4 flex items-center space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className="fill-yellow-400 text-yellow-400" 
                  />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
              
              <div className="border-t border-border pt-4 mt-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  <p className="text-sm text-taxi-blue mt-1">{testimonial.service}</p>
                </div>
                <p className="text-xs text-muted-foreground">{testimonial.date}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Section pour laisser un avis */}
        <div className="mt-20 max-w-3xl mx-auto text-center">
          <div className="bg-taxi-blue/5 rounded-xl p-8 border border-taxi-blue/20">
            <h2 className="text-2xl font-display font-semibold mb-4">
              Partagez votre expérience
            </h2>
            <p className="text-muted-foreground mb-6">
              Votre avis est important pour nous et aide d'autres personnes à choisir un service de transport médical de qualité.
            </p>
            <div className="flex justify-center">
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 bg-taxi-blue hover:bg-taxi-darkBlue text-white px-6 py-3 rounded-lg transition-colors duration-200"
              >
                <MessageSquare size={18} />
                <span>Laisser un témoignage</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Testimonials;
