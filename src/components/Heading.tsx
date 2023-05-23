import React from 'react';
import { useContext } from 'react';
import { LevelContext } from '../context/LevelContext';

interface HeadingProps {
    children?: React.ReactNode,
    className?: string,
}

export const Heading = ({ children, className = '' } : HeadingProps) : JSX.Element | null  => {
    const level = useContext(LevelContext);
    const headingText = children ? children : `I'm a ${level} heading`;
    const classNameHeading = `heading-${level} ${className}`;
    switch(level) {
        case 1:
            return <h1 className={classNameHeading}>{headingText}</h1>;
        case 2:
            return <h2 className={classNameHeading}>{headingText}</h2>;
        case 3:
            return <h3 className={classNameHeading}>{headingText}</h3>;
        case 4:
            return <h4 className={classNameHeading}>{headingText}</h4>;
        case 5:
            return <h5 className={classNameHeading}>{headingText}</h5>;
        case 6:
            return <h6 className={classNameHeading}>{headingText}</h6>;
        default:
            return null;
    }
};