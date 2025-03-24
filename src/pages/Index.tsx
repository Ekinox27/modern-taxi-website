
import { useEffect } from 'react';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Process from '@/components/home/Process';
import Testimonials from '@/components/home/Testimonials';
import Contact from '@/components/home/Contact';
import Cta from '@/components/home/Cta';

const Index = () => {
  useEffect(() => {
    document.title = "Taxi Nemmassi - Transport conventionné et sanitaire";
  }, []);

  return (
    <main>
      <Hero />
      <Services />
      <Process />
      <Testimonials />
      <Contact />
      <Cta />
    </main>
  );
};

export default Index;
