import { useEffect, useState } from "react";

interface AnchorSection {
  id: string;
}

interface UseAnchorNavigationOptions {
  rootMargin?: string;
  threshold?: number[];
}

export function useAnchorNavigation<T extends AnchorSection>(
  sections: readonly T[],
  options: UseAnchorNavigationOptions = {}
) {
  const { rootMargin = "-20% 0px -55% 0px", threshold = [0.2, 0.4, 0.6] } = options;
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const sectionElements = sections
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section instanceof HTMLElement);

    if (!sectionElements.length) return;

    const validSectionIds = new Set(sections.map(({ id }) => id));

    const syncFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && validSectionIds.has(hash)) {
        setActiveSection(hash);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections[0]) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin,
        threshold,
      }
    );

    sectionElements.forEach((section) => observer.observe(section));
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", syncFromHash);
    };
  }, [rootMargin, sections, threshold]);

  return { activeSection, setActiveSection };
}
