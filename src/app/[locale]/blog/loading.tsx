// src/app/[locale]/blog/loading.tsx
'use client';

/**
 * Blog Listing Loading State
 *
 * Shown while blog page is loading
 */
export default function Loading() {
  return (
    <main className="blog-page">
      <div style={{ padding: '64px 16px', textAlign: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Title skeleton */}
        <div style={{
          height: '56px',
          width: '60%',
          background: '#f0f0f0',
          borderRadius: '8px',
          margin: '0 auto 16px',
          animation: 'pulse 1.5s ease-in-out infinite'
        }} />

        {/* Subtitle skeleton */}
        <div style={{
          height: '24px',
          width: '40%',
          background: '#f0f0f0',
          borderRadius: '8px',
          margin: '0 auto',
          animation: 'pulse 1.5s ease-in-out infinite'
        }} />
      </div>

      <div style={{ padding: '48px 16px', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Grid skeleton */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '32px' }}>
          {[1, 2, 3].map((i) => (
            <div key={i} style={{
              height: '400px',
              background: '#f0f0f0',
              borderRadius: '12px',
              animation: 'pulse 1.5s ease-in-out infinite',
              animationDelay: `${i * 0.1}s`
            }} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </main>
  );
}
