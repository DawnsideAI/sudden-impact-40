
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 bg-background">
      <div className="text-center max-w-md w-full">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-white">404</h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-4 sm:mb-6">Oops! Page not found</p>
        <a 
          href="/" 
          className="inline-block px-6 py-3 text-white bg-agency-vibrantPurple hover:bg-agency-vibrantPurple/90 rounded-lg transition-colors text-sm sm:text-base"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
