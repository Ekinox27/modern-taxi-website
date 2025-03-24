
import { Check } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Prescription médicale",
      description: "Votre médecin établit une prescription de transport pour votre rendez-vous médical.",
    },
    {
      number: "02",
      title: "Réservation",
      description: "Contactez-nous pour réserver votre transport sanitaire, communiquez vos besoins spécifiques.",
    },
    {
      number: "03",
      title: "Transport",
      description: "Nous vous transportons à votre rendez-vous dans des conditions optimales de confort et sécurité.",
    },
    {
      number: "04",
      title: "Prise en charge",
      description: "Nous nous occupons de la gestion administrative et de la prise en charge par l'Assurance Maladie.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-taxi-blue/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Comment ça fonctionne</h2>
          <p className="section-subtitle mx-auto">
            Un processus simple et efficace pour vos transports médicaux conventionnés
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative bg-white p-6 rounded-xl shadow-sm border border-border group hover:border-taxi-blue/20 hover:shadow-md transition-all"
            >
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-taxi-blue flex items-center justify-center text-white font-bold z-10">
                {step.number}
              </div>
              
              {index < steps.length - 1 && (
                <div className="absolute top-6 left-full w-full h-0.5 bg-border transform -translate-x-1/2 hidden lg:block" />
              )}
              
              <h3 className="text-xl font-semibold mb-3 mt-6">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl p-8 shadow-sm border border-border max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-6 text-center">Ce que vous devez savoir</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 mt-1">
                <Check className="h-5 w-5 text-green-500" />
              </span>
              <p className="text-muted-foreground">Prescription médicale obligatoire pour la prise en charge</p>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 mt-1">
                <Check className="h-5 w-5 text-green-500" />
              </span>
              <p className="text-muted-foreground">Accompagnement personnalisé de porte à porte</p>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 mt-1">
                <Check className="h-5 w-5 text-green-500" />
              </span>
              <p className="text-muted-foreground">Prise en charge administrative complète</p>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 mt-1">
                <Check className="h-5 w-5 text-green-500" />
              </span>
              <p className="text-muted-foreground">Véhicules adaptés à tous types de mobilité</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
