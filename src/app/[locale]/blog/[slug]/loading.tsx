// src/app/[locale]/blog/[slug]/loading.tsx
'use client';

/**
 * Blog Post Loading State
 *
 * Shown while individual blog post is loading
 */
export default function Loading() {
  return (
    <article className="blog-post-page">
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '64px 16px' }}>
        {/* Category badge skeleton */}
        <div style={{
          width: '120px',
          height: '32px',
          background: '#f0f0f0',
          borderRadius: '6px',
          marginBottom: '16px',
          animation: 'pulse 1.5s ease-in-out infinite'
        }} />

        {/* Title skeleton */}
        <div style={{
          height: '56px',
          width: '90%',
          background: '#f0f0f0',
          borderRadius: '8px',
          marginBottom: '8px',
          animation: 'pulse 1.5s ease-in-out infinite'
        }} />
        <div style={{
          height: '56px',
          width: '60%',
          background: '#f0f0f0',
          borderRadius: '8px',
          marginBottom: '16px',
          animation: 'pulse 1.5s ease-in-out infinite'
        }} />

        {/* Meta info skeleton */}
        <div style={{
          display: 'flex',
          gap: '24px',
          marginBottom: '24px'
        }}>
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              style={{
                width: '80px',
                height: '20px',
                background: '#f0f0f0',
                borderRadius: '4px',
                animation: 'pulse 1.5s ease-in-out infinite',
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>

        {/* Image skeleton */}
        <div style={{
          width: '100%',
          height: '400px',
          background: '#f0f0f0',
          borderRadius: '12px',
          marginBottom: '32px',
          animation: 'pulse 1.5s ease-in-out infinite'
        }} />

        {/* Content skeleton */}
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            style={{
              height: '24px',
              width: i === 5 ? '70%' : '100%',
              background: '#f0f0f0',
              borderRadius: '4px',
              marginBottom: '16px',
              animation: 'pulse 1.5s ease-in-out infinite',
              animationDelay: `${i * 0.05}s`
            }}
          />
        ))}
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
    </article>
  );
}
