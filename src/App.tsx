import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PortfolioGrid } from './components/PortfolioGrid';
import { CustomCursor } from './components/CustomCursor';
import { ProjectDetail } from './components/ProjectDetail';
import { About } from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function HomePage() {
  return (
    <div className="min-h-screen bg-[#ffffff] font-['Helvetica_Neue',_'Helvetica',_'Arial',_sans-serif] text-[13px] antialiased">
      <CustomCursor />
      <Header />
      
      <main className="pt-24 pb-24">
        <PortfolioGrid />
      </main>
      
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}