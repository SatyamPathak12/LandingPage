
import Header from './components/Header';
import Hero from './components/Hero';
import WhatIsRev from './components/WhatIsRev';
import Pillars from './components/Pillars';
import WhyExists from './components/WhyExists';
import Testimonials from './components/Testimonials';
import Events from './components/Events';
import LearningOverview from './components/LearningOverview';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-light">
      <Header />
      <main>
        <Hero />
        <WhatIsRev />
        <Pillars />
        <WhyExists />
        <Testimonials />
        <Events />
        <LearningOverview />
      </main>
      <Footer />
    </div>
  );
}

export default App;
