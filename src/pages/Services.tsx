
import { useEffect } from 'react';
import { Check, Shield, Clock, AlertCircle, FileText, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  useEffect(() => {
    document.title = "Nos services de transport conventionné - Taxi VSL";
  }, []);

  return (
    <main>
      <section className="pt-32 pb-20 bg-gradient-to-b from-taxi-blue/10 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Transport sanitaire et conventionné
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Des solutions de transport adaptées à vos besoins médicaux
            </p>
          </div>
        </div>
      </section>
      
      {/* Services listing */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {/* VSL Service */}
            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-taxi-blue/10 rounded-full flex items-center justify-center mb-6">
                <Shield className="text-taxi-blue" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">VSL - Véhicule Sanitaire Léger</h3>
              <p className="text-muted-foreground mb-6">
                Transport adapté pour les patients nécessitant une assistance légère, pris en charge par votre assurance maladie sur prescription médicale.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                  <span>Transport assis pour raisons médicales</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                  <span>Prise en charge par la Sécurité Sociale</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                  <span>Conducteur formé aux premiers secours</span>
                </li>
              </ul>
            </div>
            
            {/* Transport Conventionné */}
            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-taxi-blue/10 rounded-full flex items-center justify-center mb-6">
                <FileText className="text-taxi-blue" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Transport Conventionné</h3>
              <p className="text-muted-foreground mb-6">
                Service de taxi conventionné avec l'Assurance Maladie pour le transport de patients selon prescription médicale.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                  <span>Tiers payant (pas d'avance de frais)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                  <span>Véhicules confortables et adaptés</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                  <span>Service personnalisé et ponctuel</span>
                </li>
              </ul>
            </div>
            
            {/* Transport Hospitalier */}
            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-taxi-blue/10 rounded-full flex items-center justify-center mb-6">
                <Truck className="text-taxi-blue" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Transport Sanitaire Hospitalier</h3>
              <p className="text-muted-foreground mb-6">
                Transport spécialisé pour vos rendez-vous médicaux, entrées et sorties d'hospitalisation.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                  <span>Entrées et sorties d'hôpital</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                  <span>Consultations et examens médicaux</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                  <span>Chimiothérapie, radiothérapie, dialyse</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* How it works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">Comment ça marche ?</h2>
            <p className="text-lg text-muted-foreground">
              Obtenir votre transport médical en 3 étapes simples
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-taxi-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="text-taxi-blue" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">1. Prescription médicale</h3>
              <p className="text-muted-foreground">
                Demandez à votre médecin une prescription pour un transport médical adapté à votre état de santé.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-taxi-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-taxi-blue" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">2. Réservation</h3>
              <p className="text-muted-foreground">
                Contactez-nous par téléphone avec votre prescription et les détails de votre rendez-vous médical.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-taxi-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="text-taxi-blue" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">3. Transport</h3>
              <p className="text-muted-foreground">
                Nous venons vous chercher à l'heure convenue et vous accompagnons à votre rendez-vous médical.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">
              Questions fréquentes
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">Qui peut bénéficier d'un transport conventionné ?</h3>
                <p className="text-muted-foreground">
                  Toute personne ayant une prescription médicale de transport délivrée par un médecin peut bénéficier d'un transport conventionné, sous réserve des conditions définies par l'Assurance Maladie.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">Comment fonctionne la prise en charge ?</h3>
                <p className="text-muted-foreground">
                  Avec une prescription médicale valide, l'Assurance Maladie prend en charge une partie ou la totalité du coût du transport selon votre situation. Nous pratiquons le tiers payant : vous n'avancez pas les frais.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">Puis-je être accompagné pendant mon transport ?</h3>
                <p className="text-muted-foreground">
                  Oui, un accompagnateur peut vous suivre si cela est mentionné sur la prescription médicale ou si le patient est mineur. Contactez-nous pour plus de détails.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">Combien de temps à l'avance faut-il réserver ?</h3>
                <p className="text-muted-foreground">
                  Nous recommandons de réserver dès que vous avez connaissance de votre rendez-vous médical, idéalement 48h à l'avance. Pour les situations urgentes, nous ferons notre possible pour vous accommoder.
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-lg font-medium mb-6">
                Une autre question ? N'hésitez pas à nous contacter.
              </p>
              <Button 
                asChild 
                className="bg-taxi-blue hover:bg-taxi-darkBlue"
                size="lg"
              >
                <a href="tel:+33767454045" className="flex items-center gap-2">
                  Appelez-nous au 07 67 45 40 45
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
