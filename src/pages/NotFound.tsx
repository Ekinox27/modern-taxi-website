
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Page non trouvée - Taxi VSL";
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-taxi-blue/5 to-white px-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 rounded-full bg-taxi-blue/10 flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl font-bold text-taxi-blue">404</span>
        </div>
        <h1 className="text-3xl font-display font-bold mb-4">Page non trouvée</h1>
        <p className="text-muted-foreground mb-8">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            asChild
            className="bg-taxi-blue hover:bg-taxi-darkBlue"
          >
            <Link to="/" className="flex items-center gap-2">
              <Home size={16} />
              <span>Retour à l'accueil</span>
            </Link>
          </Button>
          
          <Button 
            asChild
            variant="outline" 
            className="border-taxi-blue/20 text-taxi-blue hover:bg-taxi-blue/5"
          >
            <Link to="/contact" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              <span>Contactez-nous</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
