import React from 'react';
import { DemoModalProvider } from './context/DemoModalContext';
import { LandingPage } from './pages/LandingPage';
import { FloatingActions } from './components/FloatingActions';

export const App: React.FC = () => {
  return (
    <DemoModalProvider>
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
        <LandingPage />
        <FloatingActions />
      </div>
    </DemoModalProvider>
  );
};

export default App;
