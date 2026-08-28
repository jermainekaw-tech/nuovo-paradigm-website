import React, { useState, useEffect } from 'react';
import { PageId, OtherServiceItem } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ServiceModal } from './components/ServiceModal';
import { ApplicationModal } from './components/ApplicationModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { OtherServicesPage } from './pages/OtherServicesPage';
import { EliteWealthCoachPage } from './pages/EliteWealthCoachPage';
import { EliteWealthManagerPage } from './pages/EliteWealthManagerPage';
import { MilestonePage } from './pages/MilestonePage';
import { ContactPage } from './pages/ContactPage';
import { CDCPage } from './pages/CDCPage';
import { PaymentPage } from './pages/PaymentPage';
import { ClientServicePage } from './pages/ClientServicePage';
import { EventRegistrationPage } from './pages/EventRegistrationPage';
import { AgentFeedbackPage } from './pages/AgentFeedbackPage';
import { NotFoundPage } from './pages/NotFoundPage';

import { Phone, MessageCircle, ArrowUp, Shield } from 'lucide-react';
import { CONTACT_INFO } from './data/siteData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedService, setSelectedService] = useState<OtherServiceItem | null>(null);
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Sync with browser URL / history for deep linking
  useEffect(() => {
    const parsePathToPage = (): PageId => {
      const path = window.location.pathname.replace(/^\//, '').replace(/\.html$/, '');
      const hash = window.location.hash.replace(/^#\/?/, '').replace(/\.html$/, '');
      
      const target = hash || path;
      if (!target || target === 'index' || target === 'home') return 'home';
      if (target === 'about' || target === 'about-us') return 'about-us';
      if (target === 'services') return 'services';
      if (target === 'other-services') return 'other-services';
      if (target === 'elite-wealth-coach') return 'elite-wealth-coach';
      if (target === 'elite-wealth-manager') return 'elite-wealth-manager';
      if (target === 'milestone' || target === 'milestones') return 'milestone';
      if (target === 'contact' || target === 'contact-us') return 'contact';
      if (target === 'cdc2' || target === 'cdc') return 'cdc2';
      if (target === 'psp' || target === 'payment') return 'psp';
      if (target === 'clsc') return 'clsc';
      if (target === 'clse') return 'clse';
      if (target === 'eventregistration' || target === 'events') return 'eventregistration';
      if (target === 'agent-feedback') return 'agent-feedback';
      return 'home';
    };

    setCurrentPage(parsePathToPage());

    const handlePopState = () => {
      setCurrentPage(parsePathToPage());
    };

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.history.pushState(null, '', `#${page}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onNavigate={navigateTo}
            onOpenApplyModal={() => setApplyModalOpen(true)}
          />
        );
      case 'about-us':
        return <AboutPage onNavigate={navigateTo} />;
      case 'services':
        return (
          <ServicesPage
            onNavigate={navigateTo}
            onOpenApplyModal={() => setApplyModalOpen(true)}
          />
        );
      case 'other-services':
        return (
          <OtherServicesPage
            onNavigate={navigateTo}
            onSelectService={(srv) => setSelectedService(srv)}
          />
        );
      case 'elite-wealth-coach':
        return <EliteWealthCoachPage onNavigate={navigateTo} />;
      case 'elite-wealth-manager':
        return (
          <EliteWealthManagerPage
            onNavigate={navigateTo}
            onOpenApplyModal={() => setApplyModalOpen(true)}
          />
        );
      case 'milestone':
        return (
          <MilestonePage
            onNavigate={navigateTo}
            onOpenApplyModal={() => setApplyModalOpen(true)}
          />
        );
      case 'contact':
        return <ContactPage onNavigate={navigateTo} />;
      case 'cdc2':
        return <CDCPage onNavigate={navigateTo} />;
      case 'psp':
        return <PaymentPage onNavigate={navigateTo} />;
      case 'clsc':
        return <ClientServicePage initialTab="change" onNavigate={navigateTo} />;
      case 'clse':
        return <ClientServicePage initialTab="existing" onNavigate={navigateTo} />;
      case 'eventregistration':
        return <EventRegistrationPage onNavigate={navigateTo} />;
      case 'agent-feedback':
        return <AgentFeedbackPage onNavigate={navigateTo} />;
      default:
        return <NotFoundPage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900 selection:bg-[#27bac4] selection:text-white">
      {/* Navigation Header */}
      <Header
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenApplyModal={() => setApplyModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full">{renderPage()}</main>

      {/* Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Interactive Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onNavigateToContact={() => {
          setSelectedService(null);
          navigateTo('contact');
        }}
      />

      {/* Quick Application Modal */}
      <ApplicationModal
        isOpen={applyModalOpen}
        onClose={() => setApplyModalOpen(false)}
      />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end space-y-2.5">
        {/* Quick Call */}
        <a
          href={`tel:${CONTACT_INFO.phone}`}
          className="w-11 h-11 rounded-full bg-slate-900 hover:bg-slate-800 text-white shadow-lg flex items-center justify-center transition-transform hover:scale-105"
          title={`Call ${CONTACT_INFO.phone}`}
          aria-label="Direct Phone Call"
        >
          <Phone className="w-5 h-5 text-[#27bac4]" />
        </a>

        {/* Quick CDC Insurance Portal */}
        <button
          onClick={() => navigateTo('cdc2')}
          className="px-3.5 py-2 rounded-full bg-[#27bac4] hover:bg-[#2f9abc] text-white font-bold text-xs shadow-lg flex items-center space-x-1.5 transition-transform hover:scale-105"
          title="Comprehensive Dive Coverage"
        >
          <Shield className="w-4 h-4 text-white" />
          <span className="hidden sm:inline">Dive &amp; Travel Plan</span>
          <span className="sm:hidden">CDC</span>
        </button>

        {/* Back to top button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-[#2c72af] hover:bg-[#2f9abc] text-white shadow-lg flex items-center justify-center transition-all animate-in fade-in"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
