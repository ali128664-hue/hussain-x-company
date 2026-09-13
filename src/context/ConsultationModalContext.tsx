import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ConsultationModalContextType {
  isOpen: boolean;
  selectedService: string;
  openModal: (serviceName?: string) => void;
  closeModal: () => void;
}

const ConsultationModalContext = createContext<ConsultationModalContextType | undefined>(undefined);

export const ConsultationModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const openModal = (serviceName: string = '') => {
    setSelectedService(serviceName);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ConsultationModalContext.Provider value={{ isOpen, selectedService, openModal, closeModal }}>
      {children}
    </ConsultationModalContext.Provider>
  );
};

export const useConsultationModal = () => {
  const context = useContext(ConsultationModalContext);
  if (!context) {
    throw new Error('useConsultationModal must be used within a ConsultationModalProvider');
  }
  return context;
};
