
import { Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { CompanyInfo } from '../shared/CompanyInfo';

const CallButton = () => {
  const [visible, setVisible] = useState(false);
  const [pulsing, setPulsing] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Pulse effect every 3 seconds
    const pulseInterval = setInterval(() => {
      setPulsing(true);
      setTimeout(() => setPulsing(false), 1000);
    }, 5000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(pulseInterval);
    };
  }, []);

  return (
    <a
      href={`tel:${CompanyInfo.phone}`}
      className={`call-button ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'} ${
        pulsing ? 'scale-110' : ''
      }`}
      aria-label="Appeler maintenant"
    >
      <div className="relative">
        <Phone size={24} className="animate-pulse-slow" />
        {pulsing && (
          <span className="absolute inset-0 rounded-full bg-white/30 animate-ping" />
        )}
      </div>
    </a>
  );
};

export default CallButton;
