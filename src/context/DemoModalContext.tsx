import React, { createContext, useContext, useState } from 'react';

interface DemoModalContextType {
  isOpen: boolean;
  selectedCourse: string;
  openDemoModal: (courseName?: string) => void;
  closeDemoModal: () => void;
}

const DemoModalContext = createContext<DemoModalContextType | undefined>(undefined);

export const DemoModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('Generative AI & Agentic AI');

  const openDemoModal = (courseName?: string) => {
    const courseTitle = courseName || selectedCourse || 'IT Training Course';
    setSelectedCourse(courseTitle);
    const message = `Hi Kundhana Sai Technologies, I would like to attend the Free 4-Day Demo Session for *${courseTitle}*. Please share the schedule and demo link.`;
    const whatsappUrl = `https://wa.me/918123077723?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const closeDemoModal = () => {
    // No-op since there are no popup modal forms
  };

  return (
    <DemoModalContext.Provider value={{ isOpen: false, selectedCourse, openDemoModal, closeDemoModal }}>
      {children}
    </DemoModalContext.Provider>
  );
};

export const useDemoModal = () => {
  const context = useContext(DemoModalContext);
  if (!context) {
    throw new Error('useDemoModal must be used within a DemoModalProvider');
  }
  return context;
};
