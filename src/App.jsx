import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AlbumGrid from './components/AlbumGrid';
import DemosSection from './components/DemosSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AlbumGrid />
        <DemosSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
