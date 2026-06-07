import { useCallback } from "react";

export function useScrollTo() {
  return useCallback((id) => {
    const element = document.getElementById(id);

    if (!element) {
      return;
    }

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);
}
