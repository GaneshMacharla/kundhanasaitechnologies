import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ConsultationContextType {
  isOpen: boolean;
  preselectedService: string;
  openConsultation: (serviceTitle?: string) => void;
  closeConsultation: () => void;
}

const ConsultationContext = createContext<ConsultationContextType | undefined>(undefined);

export const ConsultationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');

  const openConsultation = (serviceTitle?: string) => {
    if (serviceTitle) {
      setPreselectedService(serviceTitle);
    } else {
      setPreselectedService('');
    }
    setIsOpen(true);
  };

  const closeConsultation = () => {
    setIsOpen(false);
  };

  return (
    <ConsultationContext.Provider value={{ isOpen, preselectedService, openConsultation, closeConsultation }}>
      {children}
    </ConsultationContext.Provider>
  );
};

export const useConsultation = (): ConsultationContextType => {
  const context = useContext(ConsultationContext);
  if (!context) {
    throw new Error('useConsultation must be used within a ConsultationProvider');
  }
  return context;
};
