import { useState, useEffect, Suspense, lazy } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Preloader from './layouts/Preloader';
import Navbar from './layouts/Navbar';
import Hero from './components/sections/Hero';
import { ErrorBoundary } from './components/ui/ErrorBoundary';

// Lazy loading of off-screen components
const Credo = lazy(() => import('./components/sections/Credo'));
const About = lazy(() => import('./components/sections/About'));
const Methodology = lazy(() => import('./components/sections/Methodology'));
const Stats = lazy(() => import('./components/sections/Stats'));
const Testimonials = lazy(() => import('./components/sections/Testimonials'));
const TeamAndCommunity = lazy(() => import('./components/sections/TeamAndCommunity'));
const Media = lazy(() => import('./components/sections/Media'));
const Tariffs = lazy(() => import('./components/sections/Tariffs'));
const ApplicationForm = lazy(() => import('./components/sections/ApplicationForm'));
const Footer = lazy(() => import('./layouts/Footer'));

export default function App() {
  const [loading, setLoading] = useState(true);

  // Smooth scroll handler for selection entry
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Scroll Reveal Intersection Observer trigger
    const revealElements = document.querySelectorAll('.reveal-element');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#070708] overflow-x-hidden relative">
      {/* SVG Path Preloader overlaying the page for instant FCP/LCP and SEO indexing */}
      <AnimatePresence>
        {loading && (
          <div className="absolute inset-0 z-50">
            <Preloader onComplete={() => setLoading(false)} />
          </div>
        )}
      </AnimatePresence>

      {/* Main Content always rendered in the DOM for search engines */}
      <div className="w-full relative min-h-screen bg-bg">
        {/* Nav top fixed */}
        <Navbar
          onCandidatureClick={() => scrollToSection('candidature-form-section')}
        />

        {/* Hero is above the fold, kept sync */}
        <ErrorBoundary>
          <Hero 
            onScrollDown={() => scrollToSection('credo-section')} 
          />
        </ErrorBoundary>

        {/* Global Suspense for off-screen components */}
        <Suspense fallback={null}>
          <ErrorBoundary>
            <Credo />
          </ErrorBoundary>

          <ErrorBoundary>
            <About />
          </ErrorBoundary>

          <ErrorBoundary>
            <Methodology />
          </ErrorBoundary>

          <ErrorBoundary>
            <Testimonials />
          </ErrorBoundary>

          <ErrorBoundary>
            <TeamAndCommunity />
          </ErrorBoundary>

          <ErrorBoundary>
            <Stats />
          </ErrorBoundary>

          <ErrorBoundary>
            <Media />
          </ErrorBoundary>

          <ErrorBoundary>
            <Tariffs 
              onApplyClick={() => scrollToSection('candidature-form-section')} 
            />
          </ErrorBoundary>

          <ErrorBoundary>
            <ApplicationForm />
          </ErrorBoundary>

          <Footer />
        </Suspense>
      </div>
    </div>
  );
}
