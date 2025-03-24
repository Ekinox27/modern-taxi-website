import { useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CompanyInfo } from '@/components/shared/CompanyInfo';

const Contact = () => {
  useEffect(() => {
    document.title = `Contactez-nous - ${CompanyInfo.name}`;
  }, []);

  return (
    <main>
      <section className="pt-32 pb-16 bg-gradient-to-b from-taxi-blue/10 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Besoin d'un transport médical ou d'informations supplémentaires sur nos services ? Nous sommes là pour vous aider.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-display font-bold mb-6">
                Nos coordonnées
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-taxi-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-taxi-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Téléphone</h3>
                    <p className="text-muted-foreground mb-2">
                      Disponible 7j/7 pour vos réservations
                    </p>
                    <a 
                      href={`tel:${CompanyInfo.phone}`}
                      className="text-taxi-blue hover:underline font-bold text-xl"
                    >
                      07 67 45 40 45
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-taxi-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-taxi-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Email</h3>
                    <p className="text-muted-foreground mb-2">
                      Pour vos demandes de renseignements
                    </p>
                    <a 
                      href="mailto:contact@taxivsl.fr" 
                      className="text-taxi-blue hover:underline"
                    >
                      contact@taxivsl.fr
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-taxi-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-taxi-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Adresse</h3>
                    <p className="text-muted-foreground mb-2">
                      Notre bureau principal
                    </p>
                    <address className="not-italic">
                      12 rue des Taxis<br />
                      75000 Paris
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-taxi-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-taxi-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Horaires</h3>
                    <p className="text-muted-foreground mb-2">
                      Service de transport
                    </p>
                    <p>
                      7j/7 - 24h/24<br />
                      Toujours disponible pour vos besoins de transport sanitaire
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-display font-bold mb-6">
                Envoyez-nous un message
              </h2>
              
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-taxi-blue"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-taxi-blue"
                      placeholder="Votre téléphone"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-taxi-blue"
                    placeholder="Votre email"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Sujet
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-taxi-blue"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="reservation">Réservation de transport</option>
                    <option value="information">Demande d'information</option>
                    <option value="devis">Demande de devis</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-taxi-blue"
                    placeholder="Votre message"
                  ></textarea>
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-taxi-blue hover:bg-taxi-darkBlue"
                >
                  <Send className="mr-2" size={16} />
                  Envoyer le message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
