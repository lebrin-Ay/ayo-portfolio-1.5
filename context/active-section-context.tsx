"use client";

import React, { useState, createContext, useContext } from 'react';
import type { SectionName } from '@/lib/types';


type ActiveSectionContextProviderProps = {
    children: React.ReactNode;
};

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({ children }: ActiveSectionContextProviderProps) {
    // active states for nav links
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  // to keep track of the last click to disable the observer temporarily when user clicks on a link
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick }}>
    {children}
  </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);

    if (context === null) {
        throw new Error (
            "useActiveSectionContext must be used within an ActiveSectionContextProvider");
    }
    return context;
}
