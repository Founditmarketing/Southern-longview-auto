import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingContactMenu from './components/FloatingContactMenu';

import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ReviewsPage from './pages/ReviewsPage';
import ServicePage from './pages/ServicePage';
import TeamPage from './pages/TeamPage';
import LeaveReviewPage from './pages/LeaveReviewPage';
import FinancingPage from './pages/FinancingPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function GlobalInterface({ isReady }: { isReady: boolean }) {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home isReady={isReady} />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/financing" element={<FinancingPage />} />
        <Route path="/services/:id" element={<ServicePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/leave-review" element={<LeaveReviewPage />} />
      </Routes>
      <Footer />
      {!isContactPage && <FloatingContactMenu />}
    </>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <div className="bg-brand-black min-h-screen text-white selection:bg-brand-yellow selection:text-black">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
        
        <div className="opacity-100">
          <GlobalInterface isReady={!loading} />
        </div>
      </div>
    </Router>
  );
}
