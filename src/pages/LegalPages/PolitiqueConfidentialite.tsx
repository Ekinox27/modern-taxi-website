
import { useEffect } from 'react';

const PolitiqueConfidentialite = () => {
  useEffect(() => {
    document.title = "Politique de confidentialité - Taxi VSL";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24 pb-20">
      <section className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-8">
            Politique de confidentialité
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="lead">
              Dernière mise à jour : [DATE]
            </p>
            
            <p>
              La présente politique de confidentialité décrit comment Taxi VSL collecte, utilise et partage vos informations personnelles lorsque vous utilisez notre site web et nos services de transport sanitaire.
            </p>

            <h2>1. Informations collectées</h2>
            <p>
              <strong>Informations que vous nous fournissez :</strong> Lorsque vous utilisez notre site web ou nos services, nous pouvons collecter les informations suivantes :
            </p>
            <ul>
              <li>Informations d'identification (nom, prénom)</li>
              <li>Coordonnées (adresse, numéro de téléphone, email)</li>
              <li>Informations médicales nécessaires pour le transport sanitaire (uniquement celles requises pour assurer votre sécurité et confort)</li>
              <li>Informations relatives à votre assurance maladie (pour les transports conventionnés)</li>
              <li>Détails du rendez-vous médical (date, heure, lieu)</li>
            </ul>
            
            <p>
              <strong>Informations collectées automatiquement :</strong> Lorsque vous naviguez sur notre site, nous pouvons collecter automatiquement certaines informations techniques, notamment :
            </p>
            <ul>
              <li>Adresse IP</li>
              <li>Type et version de navigateur</li>
              <li>Appareil utilisé</li>
              <li>Pages visitées et temps passé sur ces pages</li>
              <li>Données de localisation (si vous l'autorisez)</li>
            </ul>

            <h2>2. Utilisation des informations</h2>
            <p>
              Nous utilisons les informations collectées pour :
            </p>
            <ul>
              <li>Fournir, maintenir et améliorer nos services de transport sanitaire</li>
              <li>Traiter vos réservations et demandes</li>
              <li>Gérer les démarches administratives avec l'Assurance Maladie</li>
              <li>Vous contacter concernant votre réservation ou nos services</li>
              <li>Personnaliser votre expérience utilisateur</li>
              <li>Améliorer notre site web et nos services</li>
              <li>Respecter nos obligations légales et réglementaires</li>
            </ul>

            <h2>3. Partage des informations</h2>
            <p>
              Nous pouvons partager vos informations personnelles avec :
            </p>
            <ul>
              <li>Nos chauffeurs et personnel (uniquement les informations nécessaires pour assurer votre transport)</li>
              <li>Les organismes d'assurance maladie (pour les transports conventionnés)</li>
              <li>Les établissements de santé concernés par votre transport</li>
              <li>Des prestataires de services tiers qui nous aident à exploiter notre site et nos services</li>
              <li>Les autorités publiques lorsque la loi l'exige</li>
            </ul>
            <p>
              Nous ne vendons pas vos données personnelles à des tiers.
            </p>

            <h2>4. Conservation des données</h2>
            <p>
              Nous conservons vos informations personnelles aussi longtemps que nécessaire pour fournir nos services et respecter nos obligations légales et réglementaires, notamment en matière de facturation, de comptabilité et de suivi médical.
            </p>

            <h2>5. Sécurité des données</h2>
            <p>
              Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos informations personnelles contre tout accès, modification, divulgation ou destruction non autorisés.
            </p>

            <h2>6. Vos droits</h2>
            <p>
              Conformément à la réglementation applicable en matière de protection des données personnelles, vous disposez des droits suivants :
            </p>
            <ul>
              <li>Droit d'accès à vos données personnelles</li>
              <li>Droit de rectification des données inexactes</li>
              <li>Droit à l'effacement de vos données (droit à l'oubli)</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité de vos données</li>
              <li>Droit d'opposition au traitement</li>
              <li>Droit de ne pas faire l'objet d'une décision fondée exclusivement sur un traitement automatisé</li>
            </ul>
            <p>
              Pour exercer ces droits, veuillez nous contacter à l'adresse : contact@taxivsl.fr
            </p>

            <h2>7. Cookies</h2>
            <p>
              Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez paramétrer votre navigateur pour refuser tous les cookies ou pour être averti lorsqu'un cookie est envoyé. Cependant, certaines fonctionnalités du site peuvent ne pas fonctionner correctement sans cookies.
            </p>

            <h2>8. Modifications de la politique de confidentialité</h2>
            <p>
              Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. La version la plus récente sera toujours disponible sur notre site web avec la date de dernière mise à jour.
            </p>

            <h2>9. Contact</h2>
            <p>
              Pour toute question concernant cette politique de confidentialité ou nos pratiques en matière de protection des données, veuillez nous contacter à :
            </p>
            <p>
              Taxi VSL<br />
              12 rue des Taxis<br />
              75000 Paris<br />
              Email : contact@taxivsl.fr<br />
              Téléphone : 06 00 00 00 00
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PolitiqueConfidentialite;
