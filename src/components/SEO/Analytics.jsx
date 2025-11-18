import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Google Analytics 4
    if (window.gtag) {
      window.gtag('config', 'G-089WGBBMK2', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname
      });
    }
  }, [location]);

  return (
    <>
      {/* Google Analytics 4 */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-089WGBBMK2"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-089WGBBMK2', {
              page_title: document.title,
              page_location: window.location.href
            });
          `
        }}
      />
      
      {/* Google Search Console Verification */}
      <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
    </>
  );
};

export default Analytics;