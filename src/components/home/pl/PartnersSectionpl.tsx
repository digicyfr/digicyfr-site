'use client';
import Image from 'next/image';

const clients = [
  { 
    name: "Kwiaciarnia Miłość", 
    logo: "/partners/kwiaciarnia-milosc.png",    
    emoji: "🌸",
    industry: "Kwiaciarnia",
    website: "https://kwiaciarniamilosc.pl"
  },
  { 
    name: "Kebab SuperKing", 
    logo: "/partners/kebab-superking.png", 
    emoji: "🥙",
    industry: "Restauracja",
    website: "www.kebabsuperking.com"
  },
  { 
    name: "Kebab Gold", 
    logo: "/partners/kebab-gold.png", 
    emoji: "👑",
    industry: "Restauracja",
    website: "https://kebabsuperking.com/kebab-gold"
  },
  { 
    name: "Kebab Saad", 
    logo: "/partners/kebab-saad.png", 
    emoji: "🍖",
    industry: "Restauracja",
    website: "https://kebabsuperking.com/kebab-saad"
  },
  { 
    name: "Art Kebab", 
    logo: "/partners/art-kebab.jpg", 
    emoji: "🍖",
    industry: "Restauracja",
    website: "https://kebabsuperking.com/art-kebab"
  },
  { 
    name: "OceanPro", 
    logo: "/partners/oceanpro.png", 
    emoji: "🌊",
    industry: "Usługi importu i eksportu",
    website: "https://www.theoceanpro.com/"
  }
];

const stats = [
  { number: "5+", label: "Zadowoleni klienci" },
  { number: "24/7", label: "Wsparcie" },
  { number: "20+", label: "Rozwiązania biznesowe" },
  { number: "100%", label: "Wskaźnik sukcesu" },
  { number: "50%", label: "Lepsze ceny" }
];

export default function PartnersSectionPl() {
  return (
    <section 
      id="partners" 
      style={{
        padding: '5rem 0',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '1rem',
            background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Nasi zaufani klienci
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#6b7280',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Firmy, które zaufały Digicyfr w zwiększaniu swojej obecności online i sprzedaży
          </p>
        </div>
        
        {/* Partners Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {clients.map((client, index) => (
            <div 
              key={index} 
              style={{
                background: 'white',
                borderRadius: '1rem',
                padding: '2rem',
                textAlign: 'center',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                border: '1px solid #e5e7eb',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
              }}
            >
              {/* Logo Container */}
              <div style={{
                width: '100px',
                height: '80px',
                margin: '0 auto 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#f9fafb',
                borderRadius: '0.5rem',
                border: '2px solid #e5e7eb'
              }}>
                {/* Try to show image first */}
                <Image 
                  src={client.logo}
                  width={90}
                  height={70}
                  alt={`${client.name} logo`}
                  style={{
                    maxWidth: '90px',
                    maxHeight: '70px',
                    objectFit: 'contain',
                    width: 'auto',
                    height: 'auto',
                    display: 'block'
                  }}
                  onError={(e) => {
                    // Hide image and show emoji fallback
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'block';
                  }}
                />
                {/* Emoji fallback */}
                <div style={{
                  fontSize: '3rem',
                  display: 'none'
                }}>
                  {client.emoji}
                </div>
              </div>
              
              {/* Client Info */}
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: '600',
                color: '#1f2937',
                marginBottom: '0.5rem'
              }}>
                {client.name}
              </h3>
              <p style={{
                color: '#6b7280',
                fontSize: '0.9rem',
                fontWeight: '500'
              }}>
                {client.industry}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div style={{
          background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
          borderRadius: '1.5rem',
          padding: '3rem 2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          textAlign: 'center',
          color: 'white'
        }}>
          {stats.map((stat, index) => (
            <div key={index}>
              <div style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                marginBottom: '0.5rem',
                color: '#fbbf24'
              }}>
                {stat.number}
              </div>
              <div style={{
                fontSize: '1.1rem',
                opacity: 0.9
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}