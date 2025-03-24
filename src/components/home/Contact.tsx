
import { Phone, Send, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-taxi-blue/5 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Contactez-nous</h2>
          <p className="section-subtitle mx-auto">
            Besoin d'un transport sanitaire ? Contactez-nous pour une réservation ou plus d'informations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-border">
            <h3 className="text-2xl font-semibold mb-6">Réservez votre transport</h3>
            
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2.5 border border-input rounded-lg focus:ring-2 focus:ring-taxi-blue/20 focus:border-taxi-blue outline-none transition"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2.5 border border-input rounded-lg focus:ring-2 focus:ring-taxi-blue/20 focus:border-taxi-blue outline-none transition"
                    placeholder="Votre téléphone"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2.5 border border-input rounded-lg focus:ring-2 focus:ring-taxi-blue/20 focus:border-taxi-blue outline-none transition"
                  placeholder="Votre email"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2.5 border border-input rounded-lg focus:ring-2 focus:ring-taxi-blue/20 focus:border-taxi-blue outline-none transition resize-none"
                  placeholder="Décrivez votre besoin de transport..."
                ></textarea>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-taxi-blue hover:bg-taxi-darkBlue"
              >
                <Send size={16} className="mr-2" />
                Envoyer ma demande
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col h-full">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-border mb-6 flex-grow">
              <h3 className="text-2xl font-semibold mb-6">Informations de contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-taxi-blue/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-taxi-blue" />
                  </div>
                  <div>
                    <p className="font-medium">Téléphone</p>
                    <a href="tel:+33600000000" className="text-taxi-blue hover:underline">
                      06 00 00 00 00
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Disponible 7j/7, 24h/24
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-taxi-blue/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-taxi-blue" />
                  </div>
                  <div>
                    <p className="font-medium">Adresse</p>
                    <p>12 rue des Taxis</p>
                    <p>75000 Paris</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-border">
                <h4 className="font-medium mb-3">Zones desservies</h4>
                <p className="text-muted-foreground">
                  Nous couvrons toute la région parisienne et proposons également des trajets longue distance sur demande.
                </p>
              </div>
            </div>
            
            <div className="bg-taxi-blue text-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Transport médical urgent ?</h3>
              <p className="mb-4">
                Pour toute demande urgente, contactez-nous directement par téléphone pour une prise en charge immédiate.
              </p>
              <Button 
                asChild
                variant="outline" 
                className="w-full bg-white text-taxi-blue hover:bg-white/90 border-0"
              >
                <a href="tel:+33600000000" className="flex items-center justify-center gap-2">
                  <Phone size={16} />
                  <span>Appelez-nous maintenant</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
