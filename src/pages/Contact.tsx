
import { useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Car, Shield, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  useEffect(() => {
    document.title = "Contact - Taxi VSL";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24 pb-20">
      <section className="container mx-auto px-4 md:px-6">
        <div className="mb-16 max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Contactez-nous
          </h1>
          <p className="text-xl text-muted-foreground">
            Besoin d'un transport médical ? Notre équipe est à votre disposition pour toute demande de réservation ou d'information.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-border hover:border-taxi-blue/20 transition-all text-center">
            <div className="w-16 h-16 rounded-full bg-taxi-blue/10 flex items-center justify-center mx-auto mb-6">
              <Phone className="h-8 w-8 text-taxi-blue" />
            </div>
            <h2 className="text-xl font-semibold mb-3">Par téléphone</h2>
            <p className="text-muted-foreground mb-4">
              Notre standard téléphonique est disponible 7j/7, pour toute réservation ou information.
            </p>
            <a 
              href="tel:+33600000000" 
              className="text-xl font-bold text-taxi-blue hover:underline"
            >
              06 00 00 00 00
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Disponible 24h/24, 7j/7
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-sm border border-border hover:border-taxi-blue/20 transition-all text-center">
            <div className="w-16 h-16 rounded-full bg-taxi-blue/10 flex items-center justify-center mx-auto mb-6">
              <Mail className="h-8 w-8 text-taxi-blue" />
            </div>
            <h2 className="text-xl font-semibold mb-3">Par email</h2>
            <p className="text-muted-foreground mb-4">
              Envoyez-nous un email pour une demande de devis ou toute question concernant nos services.
            </p>
            <a 
              href="mailto:contact@taxivsl.fr" 
              className="text-xl font-medium text-taxi-blue hover:underline"
            >
              contact@taxivsl.fr
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Réponse sous 24h ouvrées
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-sm border border-border hover:border-taxi-blue/20 transition-all text-center">
            <div className="w-16 h-16 rounded-full bg-taxi-blue/10 flex items-center justify-center mx-auto mb-6">
              <MapPin className="h-8 w-8 text-taxi-blue" />
            </div>
            <h2 className="text-xl font-semibold mb-3">Notre adresse</h2>
            <p className="text-muted-foreground mb-4">
              Retrouvez-nous à notre bureau pour discuter de vos besoins en transport.
            </p>
            <p className="text-lg font-medium">
              12 rue des Taxis<br />
              75000 Paris
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Du lundi au vendredi, 9h-18h
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-border">
            <h2 className="text-2xl font-semibold mb-6">Formulaire de contact</h2>
            
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
                <label htmlFor="service" className="block text-sm font-medium">
                  Service concerné
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-2.5 border border-input rounded-lg focus:ring-2 focus:ring-taxi-blue/20 focus:border-taxi-blue outline-none transition"
                >
                  <option value="">Sélectionnez un service</option>
                  <option value="vsl">VSL - Véhicule Sanitaire Léger</option>
                  <option value="conventionné">Transport Conventionné</option>
                  <option value="sanitaire">Transport Sanitaire Hospitalier</option>
                  <option value="pmr">Transport PMR</option>
                  <option value="autre">Autre demande</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2.5 border border-input rounded-lg focus:ring-2 focus:ring-taxi-blue/20 focus:border-taxi-blue outline-none transition resize-none"
                  placeholder="Précisez votre demande..."
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
          
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-border">
              <h3 className="text-xl font-semibold mb-6">Horaires</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Clock className="h-5 w-5 text-taxi-blue mt-0.5" />
                  <div>
                    <p className="font-medium">Réservations téléphoniques</p>
                    <p className="text-muted-foreground">24h/24, 7j/7</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="h-5 w-5 text-taxi-blue mt-0.5" />
                  <div>
                    <p className="font-medium">Bureau administratif</p>
                    <p className="text-muted-foreground">Lundi au vendredi : 9h à 18h</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="h-5 w-5 text-taxi-blue mt-0.5" />
                  <div>
                    <p className="font-medium">Service de transport</p>
                    <p className="text-muted-foreground">Disponible 7j/7, y compris jours fériés</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border border-border flex-grow">
              <h3 className="text-xl font-semibold mb-6">Documents utiles</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 border border-border rounded-lg hover:border-taxi-blue/20 transition-colors">
                  <FileText className="h-6 w-6 text-taxi-blue flex-shrink-0" />
                  <div>
                    <p className="font-medium">Fiche de transport</p>
                    <p className="text-sm text-muted-foreground mb-2">Formulaire à remplir pour les transports conventionnés</p>
                    <a href="#" className="text-taxi-blue text-sm hover:underline">Télécharger (PDF)</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 border border-border rounded-lg hover:border-taxi-blue/20 transition-colors">
                  <Car className="h-6 w-6 text-taxi-blue flex-shrink-0" />
                  <div>
                    <p className="font-medium">Services et tarifs</p>
                    <p className="text-sm text-muted-foreground mb-2">Détail des services proposés et grille tarifaire</p>
                    <a href="#" className="text-taxi-blue text-sm hover:underline">Télécharger (PDF)</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 border border-border rounded-lg hover:border-taxi-blue/20 transition-colors">
                  <Shield className="h-6 w-6 text-taxi-blue flex-shrink-0" />
                  <div>
                    <p className="font-medium">Conditions de prise en charge</p>
                    <p className="text-sm text-muted-foreground mb-2">Informations sur la prise en charge par l'Assurance Maladie</p>
                    <a href="#" className="text-taxi-blue text-sm hover:underline">Télécharger (PDF)</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-semibold mb-10 text-center">
            Questions fréquentes
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
              <h3 className="text-lg font-semibold mb-3">
                Comment réserver un transport médical ?
              </h3>
              <p className="text-muted-foreground">
                Pour réserver un transport médical, il vous suffit de nous appeler au 06 00 00 00 00. 
                Nous vous demanderons quelques informations comme la date, l'heure et le lieu de prise en charge, 
                ainsi que la destination et tout besoin spécifique.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
              <h3 className="text-lg font-semibold mb-3">
                Quels documents faut-il pour bénéficier d'un transport conventionné ?
              </h3>
              <p className="text-muted-foreground">
                Pour bénéficier d'un transport conventionné, vous aurez besoin d'une prescription médicale de transport 
                (établie par votre médecin), de votre carte Vitale et d'une pièce d'identité. 
                Nous nous occupons de toutes les démarches administratives avec l'Assurance Maladie.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
              <h3 className="text-lg font-semibold mb-3">
                Combien de temps à l'avance faut-il réserver ?
              </h3>
              <p className="text-muted-foreground">
                Nous recommandons de réserver votre transport 24 à 48 heures à l'avance pour garantir la disponibilité. 
                Cependant, nous comprenons que des besoins urgents peuvent survenir et nous faisons notre possible 
                pour répondre aux demandes de dernière minute.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
              <h3 className="text-lg font-semibold mb-3">
                Les transports sont-ils accessibles aux personnes en fauteuil roulant ?
              </h3>
              <p className="text-muted-foreground">
                Oui, notre flotte comprend des véhicules adaptés aux personnes à mobilité réduite, 
                équipés de rampes d'accès et de systèmes de fixation pour les fauteuils roulants. 
                Précisez simplement vos besoins lors de la réservation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
