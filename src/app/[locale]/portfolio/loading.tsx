// src/app/[locale]/portfolio/loading.tsx
export default function PortfolioLoading() {
  return (
    <div className="portfolio-loading">
      <div style={{ 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
        <div className="loading-spinner"></div>
      </div>
    </div>
  );
}