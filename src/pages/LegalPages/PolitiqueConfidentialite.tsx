
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
            <h2>1. Introduction</h2>
            <p>
              Chez Taxi VSL, nous prenons très au sérieux la protection de vos données personnelles. Cette politique de confidentialité vous explique comment nous collectons, utilisons, partageons et protégeons vos informations personnelles lorsque vous utilisez notre site web ou nos services.
            </p>

            <h2>2. Collecte des données personnelles</h2>
            <p>
              Nous collectons les informations que vous nous fournissez directement lorsque vous :
            </p>
            <ul>
              <li>Remplissez un formulaire de contact sur notre site</li>
              <li>Nous appelez pour réserver un transport</li>
              <li>Utilisez nos services de transport</li>
            </ul>
            <p>
              Les types d'informations que nous pouvons collecter incluent :
            </p>
            <ul>
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Adresses de prise en charge et de destination</li>
              <li>Informations relatives à votre état de santé (uniquement celles nécessaires à la bonne exécution du service de transport sanitaire)</li>
              <li>Informations de prise en charge (numéro de sécurité sociale, mutuelle, etc.)</li>
            </ul>
            
            <h2>3. Utilisation des données</h2>
            <p>
              Nous utilisons vos données personnelles pour :
            </p>
            <ul>
              <li>Vous fournir nos services de transport</li>
              <li>Traiter vos demandes de contact ou de réservation</li>
              <li>Établir les documents nécessaires à la facturation et à la prise en charge par l'assurance maladie</li>
              <li>Améliorer nos services et votre expérience utilisateur</li>
              <li>Respecter nos obligations légales et réglementaires</li>
            </ul>
            
            <h2>4. Partage des données</h2>
            <p>
              Nous ne vendons ni ne louons vos données personnelles à des tiers. Nous pouvons partager vos informations avec :
            </p>
            <ul>
              <li>Les organismes d'assurance maladie et complémentaires dans le cadre de la prise en charge de vos transports</li>
              <li>Les autorités compétentes si la loi nous y oblige</li>
              <li>Nos prestataires de services informatiques qui nous aident à gérer notre activité (sous contrat de confidentialité strict)</li>
            </ul>
            
            <h2>5. Sécurité des données</h2>
            <p>
              Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données personnelles contre toute perte, accès non autorisé, divulgation, altération ou destruction.
            </p>
            
            <h2>6. Durée de conservation</h2>
            <p>
              Nous conservons vos données personnelles aussi longtemps que nécessaire pour fournir nos services et respecter nos obligations légales, notamment en matière de facturation et de comptabilité.
            </p>
            
            <h2>7. Vos droits</h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants concernant vos données personnelles :
            </p>
            <ul>
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification de vos données</li>
              <li>Droit à l'effacement (droit à l'oubli)</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité des données</li>
              <li>Droit d'opposition au traitement</li>
            </ul>
            <p>
              Pour exercer ces droits, veuillez nous contacter à l'adresse email suivante : Zak.nemm@gmail.com ou par courrier à : Taxi VSL, 13 rue des pruniers, 55000 Longeville en barrois.
            </p>
            
            <h2>8. Cookies</h2>
            <p>
              Notre site peut utiliser des cookies pour améliorer votre expérience de navigation. Vous pouvez configurer votre navigateur pour refuser tous les cookies ou pour être averti lorsqu'un cookie est envoyé.
            </p>
            
            <h2>9. Modifications de la politique de confidentialité</h2>
            <p>
              Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. La version la plus récente sera toujours disponible sur notre site web avec la date de dernière mise à jour.
            </p>
            
            <h2>10. Contact</h2>
            <p>
              Si vous avez des questions concernant cette politique de confidentialité ou nos pratiques en matière de protection des données, veuillez nous contacter à l'adresse suivante :
            </p>
            <p>
              Taxi VSL<br />
              13 rue des pruniers<br />
              55000 Longeville en barrois<br />
              Email : Zak.nemm@gmail.com<br />
              Téléphone : 07 67 45 40 45
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PolitiqueConfidentialite;
