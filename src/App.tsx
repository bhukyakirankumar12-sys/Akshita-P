import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BciNoticeModal } from './components/BciNoticeModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PracticePage } from './pages/PracticePage';
import { FaqsPage } from './pages/FaqsPage';
import { ContactPage } from './pages/ContactPage';
import { TermsPage, DisclaimerPage } from './pages/LegalPages';

const BCI_ACK_KEY = 'vaklegal_bci_acknowledged_v1';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
};

export const App: React.FC = () => {
  const [noticeOpen, setNoticeOpen] = useState(false);

  useEffect(() => {
    try {
      const ack = sessionStorage.getItem(BCI_ACK_KEY);
      if (!ack) {
        setNoticeOpen(true);
      }
    } catch {
      setNoticeOpen(true);
    }
  }, []);

  const handleAcceptNotice = () => {
    try {
      sessionStorage.setItem(BCI_ACK_KEY, 'true');
    } catch {
      // ignore storage errors
    }
    setNoticeOpen(false);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-ivory text-ink">
        <Navbar onOpenNotice={() => setNoticeOpen(true)} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/practice" element={<PracticePage />} />
            <Route path="/faqs" element={<FaqsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>

      <BciNoticeModal isOpen={noticeOpen} onAccept={handleAcceptNotice} />
    </BrowserRouter>
  );
};

export default App;
