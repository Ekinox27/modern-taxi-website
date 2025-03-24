
import { useEffect } from 'react';

const MentionsLegales = () => {
  useEffect(() => {
    document.title = "Mentions légales - Taxi VSL";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24 pb-20">
      <section className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-8">
            Mentions légales
          </h1>

          <div className="prose prose-lg max-w-none">
            <h2>1. Informations légales</h2>
            <p>
              Raison sociale : Taxi VSL<br />
              Forme juridique : [FORME JURIDIQUE]<br />
              Capital social : [MONTANT] euros<br />
              SIRET : [NUMÉRO SIRET]<br />
              Siège social : 13 rue des pruniers, 55000 Longeville en barrois<br />
              Téléphone : 07 67 45 40 45<br />
              Email : Zak.nemm@gmail.com
            </p>

            <h2>2. Directeur de la publication</h2>
            <p>
              [NOM DU DIRECTEUR DE PUBLICATION]<br />
              Adresse : 13 rue des pruniers, 55000 Longeville en barrois<br />
              Téléphone : 07 67 45 40 45<br />
              Email : Zak.nemm@gmail.com
            </p>

            <h2>3. Hébergement du site</h2>
            <p>
              Le site www.taxivsl.fr est hébergé par [NOM DE L'HÉBERGEUR]<br />
              Adresse : [ADRESSE DE L'HÉBERGEUR]<br />
              Téléphone : [TÉLÉPHONE DE L'HÉBERGEUR]
            </p>

            <h2>4. Propriété intellectuelle</h2>
            <p>
              L'ensemble des éléments constituant le site www.taxivsl.fr (textes, graphismes, logiciels, photographies, images, vidéos, sons, plans, logos, marques, etc.) est la propriété exclusive de Taxi VSL ou de ses partenaires.
            </p>
            <p>
              Toute représentation totale ou partielle de ce site par quelque procédé que ce soit, sans l'autorisation expresse de l'exploitant du site Internet est interdite et constituerait une contrefaçon sanctionnée par les articles L 335-2 et suivants du Code de la propriété intellectuelle.
            </p>

            <h2>5. Données personnelles</h2>
            <p>
              Les informations recueillies sur ce site font l'objet d'un traitement informatique destiné à la gestion de notre clientèle et à des fins statistiques. Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée en 2004, vous bénéficiez d'un droit d'accès et de rectification aux informations qui vous concernent, que vous pouvez exercer en vous adressant à Taxi VSL, 13 rue des pruniers, 55000 Longeville en barrois.
            </p>

            <h2>6. Cookies</h2>
            <p>
              Le site www.taxivsl.fr peut utiliser des cookies. Un cookie est un petit fichier texte déposé sur votre disque dur par le serveur du site que vous visitez. Il contient des informations sur votre navigation sur ce site. Ces cookies ne sont utilisés que pour améliorer votre expérience utilisateur et ne collectent aucune information personnelle.
            </p>
            
            <h2>7. Limitations de responsabilité</h2>
            <p>
              Taxi VSL ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l'utilisateur, lors de l'accès au site www.taxivsl.fr, et résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications techniques requises, soit de l'apparition d'un bug ou d'une incompatibilité.
            </p>
            <p>
              Taxi VSL ne pourra également être tenu responsable des dommages indirects consécutifs à l'utilisation du site www.taxivsl.fr.
            </p>
            
            <h2>8. Droit applicable et juridiction compétente</h2>
            <p>
              Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MentionsLegales;
