import React, { useEffect, useRef, useState } from 'react';

interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
}

export const RevealSection: React.FC<RevealSectionProps> = ({ children, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-section ${visible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
};
