import React, { useContext } from 'react';
import { LevelContext } from '../context/LevelContext';
import { sectionProps } from '../types/Section';

export const Section = ({ children, className = '' } : sectionProps) : JSX.Element => {
    const level = useContext(LevelContext);
    return (
        <section className={`section-container ${className}`}>
            <LevelContext.Provider value={ level + 1 }>
                {children}
            </LevelContext.Provider>
        </section>
    );
};