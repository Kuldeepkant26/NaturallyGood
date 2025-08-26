import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { setNavigateFunction, navigateToProducts, scrollToProductsSection } from '../utils/navigation';

/**
 * Custom hook for navigation utilities
 * This hook ensures the global navigate function is always available
 */
export const useAppNavigation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setNavigateFunction(navigate);
  }, [navigate]);

  return {
    navigateToProducts,
    scrollToProductsSection,
    navigate
  };
};
