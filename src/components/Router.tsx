import React from 'react';
import App from '../App';
import EyeExamsPage from '../pages/EyeExamsPage';
import EyewearPage from '../pages/EyewearPage';
import ContactLensesPage from '../pages/ContactLensesPage';
import EyeCareProductsPage from '../pages/EyeCareProductsPage';
import Header from './Header';
import Footer from './Footer';

const Router: React.FC = () => {
  const [currentPath, setCurrentPath] = React.useState(window.location.pathname);

  React.useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  const renderPage = () => {
    switch (currentPath) {
      case '/eye-exams-pickering-oshawa':
        return (
          <>
            <Header />
            <EyeExamsPage />
            <Footer />
          </>
        );
      case '/eyeglasses-frames-pickering-oshawa':
        return (
          <>
            <Header />
            <EyewearPage />
            <Footer />
          </>
        );
      case '/contact-lenses-pickering-oshawa':
        return (
          <>
            <Header />
            <ContactLensesPage />
            <Footer />
          </>
        );
      case '/eye-care-products-pickering-oshawa':
        return (
          <>
            <Header />
            <EyeCareProductsPage />
            <Footer />
          </>
        );
      default:
        return <App />;
    }
  };

  return <div>{renderPage()}</div>;
};

export default Router;