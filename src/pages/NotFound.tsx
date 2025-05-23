
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import StyleProvider from "@/components/design/StyleProvider";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 bg-white">
      <StyleProvider className="text-center max-w-md w-full">
        <h1 className="text-5xl sm:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-br from-brand-pink via-brand-purple to-brand-aqua bg-clip-text text-transparent">404</h1>
        <p className="text-lg sm:text-xl text-brand-gray mb-2">Oops! Page not found</p>
        <p className="text-sm text-gray-600 mb-4 sm:mb-6">Path: {location.pathname}</p>
        <Link to="/">
          <Button 
            className="px-6 py-3 text-white bg-gradient-to-r from-brand-pink to-brand-aqua hover:opacity-90 rounded-lg transition-colors text-sm sm:text-base"
          >
            Return to Home
          </Button>
        </Link>
      </StyleProvider>
    </div>
  );
};

export default NotFound;
