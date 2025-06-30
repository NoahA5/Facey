import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { 
  Header, 
  HeroSection, 
  ServicesSection, 
  AboutSection, 
  ContactSection, 
  Footer 
} from './components';

function App() {
  return (
    <div className="App min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <main>
                <HeroSection />
                <ServicesSection />
                <AboutSection />
                <ContactSection />
              </main>
              <Footer />
            </>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;