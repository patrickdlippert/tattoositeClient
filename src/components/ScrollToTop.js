import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// This function refreshes the page to the top when called in the router navigation changes
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}