import React, { useEffect, useState } from 'react';

type children = {
    children: React.ReactNode,
};

export const PostLayout = ({ children } : children) => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const scrollListener = () => {
            const newPercentage = Math.floor(document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100);
            if (newPercentage !== progress) {
                setProgress(newPercentage);
            }
        }
        window.addEventListener('scroll', scrollListener, false);
        return () => {
            window.removeEventListener('scroll', scrollListener, false);
          }
    }, []);

    return (
        <>
            <span>progress: {progress.toFixed()}%</span>
            {children}
        </>
    )
}