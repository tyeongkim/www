import { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { type Section, sectionOrder } from '@/lib/app';

const debounceDelay = 5;
const topThreshold = 100;
const bottomThreshold = 50;
const sectionStartOffset = -200;

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<Section>('hero');

  const findActiveSection = useDebouncedCallback(() => {
    const { scrollY } = window;
    const { scrollHeight, clientHeight } = document.documentElement;

    if (scrollY < topThreshold) {
      setActiveSection('hero');
      return;
    }

    if (scrollY + clientHeight >= scrollHeight - bottomThreshold) {
      setActiveSection('contacts');
      return;
    }

    let currentActiveSection: Section = 'hero';

    for (const id of sectionOrder) {
      const element = document.getElementById(id);
      if (!element) continue;

      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + scrollY;

      if (elementTop + sectionStartOffset <= scrollY) {
        currentActiveSection = id;
      } else {
        break;
      }
    }

    setActiveSection(currentActiveSection);
  }, debounceDelay);

  useEffect(() => {
    findActiveSection();

    window.addEventListener('scroll', findActiveSection, { passive: true });

    return () => {
      window.removeEventListener('scroll', findActiveSection);
      findActiveSection.cancel();
    };
  }, [findActiveSection]);

  return activeSection;
}
