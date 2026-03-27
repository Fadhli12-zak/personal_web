"use client";

import { useEffect } from "react";

export function ThemeSwitcher() {
  useEffect(() => {
    // The intersection observer watches for the `#dark-zone` element.
    // When the top of `#dark-zone` hits 30% from the bottom of the screen, it triggers!
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Enter the dark zone
            document.documentElement.classList.add("dark");
          } else {
            // Leaving the dark zone: we only remove dark mode if we scroll back UP.
            // If boundingClientRect.top > 0, the zone is pushed down (scrolling up to light zone)
            if (entry.boundingClientRect.top > 0) {
              document.documentElement.classList.remove("dark");
            }
          }
        });
      },
      {
        // Triggers exactly when the border hits the 30% mark of the screen (top or bottom margins)
        rootMargin: "-30% 0px -30% 0px",
      }
    );

    const darkZone = document.getElementById("dark-zone");
    if (darkZone) {
      observer.observe(darkZone);
    }

    // Cleanup and default safety
    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
