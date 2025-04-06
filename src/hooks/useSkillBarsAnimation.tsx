
import { useEffect } from 'react';

export const useSkillBarsAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const progressBar = entry.target as HTMLElement;
            const width = progressBar.getAttribute('data-width');
            if (width) {
              progressBar.style.width = width;
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => observer.observe(bar));

    return () => {
      skillBars.forEach(bar => observer.unobserve(bar));
    };
  }, []);
};
