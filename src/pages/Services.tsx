
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  useEffect(() => {
    document.title = "Nos Services - Taxi VSL";
    window.scrollTo(0, 0);
  }, []);

  const servicesDetails = [
    {
      id: "vsl",
      title: "VSL - Véhicule Sanitaire Léger",
      description: "Le Véhicule Sanitaire Léger est spécialement conçu pour le transport assis de personnes malades ou blessées qui peuvent voyager en position assise et ne nécessitent pas de surveillance médicale constante.",
      features: [
        "Transport assis de patients",
        "Accessible sur prescription médicale",
        "Prise en charge par l'Assurance Maladie",
        "Chauffeur formé aux premiers secours",
        "Équipement adapté au transport médical",
        "Accompagnement du patient",
      ],
      image: "https://images.unsplash.com/photo-1619642208848-08d469c5819d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: "conventionné",
      title: "Transport Conventionné",
      description: "Le transport conventionné est un service de taxi qui bénéficie d'une convention avec l'Assurance Maladie. Il permet aux patients de se déplacer pour leurs soins médicaux avec une prise en charge des frais selon les conditions définies.",
      features: [
        "Transport assis professionnalisé",
        "Prise en charge administrative des formulaires",
        "Remboursement selon les barèmes de la Sécurité Sociale",
        "Facturation directe à l'Assurance Maladie (tiers payant)",
        "Transport pour consultations et hospitalisations",
        "Service disponible sur prescription médicale",
      ],
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    },
    {
      id: "sanitaire",
      title: "Transport Sanitaire Hospitalier",
      description: "Le transport sanitaire hospitalier assure les déplacements des patients entre établissements de santé ou vers leur domicile après hospitalisation, dans des conditions de sécurité et de confort optimales.",
      features: [
        "Transport inter-établissements",
        "Sortie d'hospitalisation vers le domicile",
        "Admission en établissement de soins",
        "Transport pour examens et consultations",
        "Prise en charge totale ou partielle par l'Assurance Maladie",
        "Accompagnement personnalisé du patient",
      ],
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
    },
    {
      id: "pmr",
      title: "Transport PMR",
      description: "Notre service de transport pour Personnes à Mobilité Réduite (PMR) est spécialement conçu pour répondre aux besoins spécifiques des personnes en situation de handicap ou ayant des difficultés à se déplacer.",
      features: [
        "Véhicules adaptés avec rampe d'accès",
        "Transport de fauteuils roulants",
        "Chauffeurs formés à l'accompagnement PMR",
        "Aide à l'installation et à la sortie du véhicule",
        "Fixations sécurisées pour les fauteuils",
        "Service disponible 7j/7 sur réservation",
      ],
      image: "https://images.unsplash.com/photo-1594608661623-aa0bd3a69799?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80",
    },
  ];

  return (
    <main className="pt-24 pb-20">
      <section className="container mx-auto px-4 md:px-6">
        <div className="mb-16 max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Nos Services de Transport Sanitaire
          </h1>
          <p className="text-xl text-muted-foreground">
            Des solutions de transport médical adaptées à vos besoins, avec prise en charge par l'Assurance Maladie sur prescription.
          </p>
        </div>

        <div className="space-y-20">
          {servicesDetails.map((service, index) => (
            <div 
              key={service.id}
              id={service.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-10 items-center`}
            >
              <div className="lg:w-1/2">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="rounded-xl shadow-md object-cover w-full h-[300px] lg:h-[400px]"
                  loading="lazy"
                />
              </div>
              
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-display font-semibold mb-4">
                  {service.title}
                </h2>
                
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-taxi-blue flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    asChild
                    className="bg-taxi-blue hover:bg-taxi-darkBlue"
                  >
                    <a href="tel:+33600000000" className="flex items-center gap-2">
                      <Phone size={16} />
                      <span>Réserver maintenant</span>
                    </a>
                  </Button>
                  
                  <Button 
                    asChild
                    variant="outline"
                    className="border-taxi-blue/20 text-taxi-blue hover:bg-taxi-blue/5"
                  >
                    <Link to="/contact" className="flex items-center gap-2">
                      <span>Demander un devis</span>
                      <ArrowRight size={16} />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Section conditions de prise en charge */}
      <section className="py-20 bg-taxi-blue/5 mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-semibold mb-8 text-center">
              Conditions de prise en charge
            </h2>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border border-border">
              <p className="mb-6">
                Pour bénéficier d'une prise en charge de vos frais de transport par l'Assurance Maladie, vous devez remplir certaines conditions :
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-taxi-blue/10 flex items-center justify-center text-taxi-blue font-semibold">
                    1
                  </span>
                  <div>
                    <strong className="block mb-1">Prescription médicale obligatoire</strong>
                    <p className="text-muted-foreground">
                      Le transport doit être prescrit par un médecin qui établit un bon de transport spécifiant le mode de transport adapté à votre état de santé.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-taxi-blue/10 flex items-center justify-center text-taxi-blue font-semibold">
                    2
                  </span>
                  <div>
                    <strong className="block mb-1">Motifs de prise en charge</strong>
                    <p className="text-muted-foreground">
                      Les transports liés à une hospitalisation, des soins en rapport avec une ALD, des soins en rapport avec un accident du travail ou une maladie professionnelle.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-taxi-blue/10 flex items-center justify-center text-taxi-blue font-semibold">
                    3
                  </span>
                  <div>
                    <strong className="block mb-1">Entente préalable</strong>
                    <p className="text-muted-foreground">
                      Pour certains transports (longue distance, transports en série), une demande d'entente préalable doit être adressée à votre caisse d'Assurance Maladie.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-taxi-blue/10 flex items-center justify-center text-taxi-blue font-semibold">
                    4
                  </span>
                  <div>
                    <strong className="block mb-1">Modalités de remboursement</strong>
                    <p className="text-muted-foreground">
                      Le remboursement se fait sur la base de 65% du tarif conventionné, sauf cas particuliers (ALD, accident du travail, etc.) où la prise en charge peut être de 100%.
                    </p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-center">
                  Pour toute question concernant la prise en charge de vos transports, 
                  notre équipe se tient à votre disposition.
                </p>
                <div className="flex justify-center mt-6">
                  <Button 
                    asChild
                    className="bg-taxi-blue hover:bg-taxi-darkBlue"
                  >
                    <a href="tel:+33600000000" className="flex items-center gap-2">
                      <Phone size={16} />
                      <span>Contactez-nous</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
