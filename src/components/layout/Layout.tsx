
import { ReactNode, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CallButton from './CallButton';
import { useLocation } from 'react-router-dom';
import { CompanyInfo } from '../shared/CompanyInfo';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  
  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
    
    // Set default title if not set by page component
    if (!document.title.includes(CompanyInfo.name)) {
      document.title = `${CompanyInfo.name} - Transport conventionné et sanitaire`;
    }
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        {children}
      </div>
      <Footer />
      <CallButton />
    </div>
  );
};

export default Layout;
