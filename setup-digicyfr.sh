#!/bin/bash

# Digicyfr Website Development Setup Script
# This script creates a complete Next.js website structure for Digicyfr

echo "🚀 Setting up Digicyfr Website Development Environment..."
echo "=================================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✓${NC} $1"
}

print_info() {
    echo -e "${BLUE}ℹ${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed. Please install npm first."
    exit 1
fi

print_info "Node.js version: $(node --version)"
print_info "npm version: $(npm --version)"

# Remove existing my-app directory if it exists
if [ -d "my-app" ]; then
    print_warning "Removing existing my-app directory..."
    rm -rf my-app
fi

# Create Next.js project
print_info "Creating Next.js project with TypeScript and Tailwind CSS..."
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm

# Install additional dependencies
print_info "Installing additional dependencies..."
npm install lucide-react framer-motion @types/node

# Create directory structure
print_info "Creating directory structure..."

# Create components directory
mkdir -p src/components

# Create page directories
mkdir -p src/app/about
mkdir -p src/app/services
mkdir -p src/app/portfolio
mkdir -p src/app/contact
mkdir -p src/app/blog

# Create basic page files
print_info "Creating basic page files..."

# About page
cat > src/app/about/page.tsx << 'EOF'
export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">About Digicyfr</h1>
      <p className="text-lg text-gray-600">
        Learn more about our company, mission, and team.
      </p>
    </div>
  );
}
EOF

# Services page
cat > src/app/services/page.tsx << 'EOF'
export default function Services() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Our Services</h1>
      <p className="text-lg text-gray-600">
        Discover our digital marketing and web development services.
      </p>
    </div>
  );
}
EOF

# Portfolio page
cat > src/app/portfolio/page.tsx << 'EOF'
export default function Portfolio() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Our Portfolio</h1>
      <p className="text-lg text-gray-600">
        Check out our latest projects and client success stories.
      </p>
    </div>
  );
}
EOF

# Contact page
cat > src/app/contact/page.tsx << 'EOF'
export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg text-gray-600">
        Get in touch with the Digicyfr team.
      </p>
    </div>
  );
}
EOF

# Blog page
cat > src/app/blog/page.tsx << 'EOF'
export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <p className="text-lg text-gray-600">
        Read our latest insights and industry updates.
      </p>
    </div>
  );
}
EOF

# Create Header component
cat > src/components/Header.tsx << 'EOF'
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Digicyfr
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/about" className="hover:text-blue-600">About</Link>
            <Link href="/services" className="hover:text-blue-600">Services</Link>
            <Link href="/portfolio" className="hover:text-blue-600">Portfolio</Link>
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
EOF

# Create Footer component
cat > src/components/Footer.tsx << 'EOF'
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Digicyfr</h3>
            <p className="text-gray-400">
              Your trusted partner for digital solutions and web development.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/services" className="hover:text-white">Services</a></li>
              <li><a href="/portfolio" className="hover:text-white">Portfolio</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <p className="text-gray-400">
              Email: info@digicyfr.com<br />
              Phone: +1 (555) 123-4567
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Digicyfr. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
EOF

# Update layout.tsx to include Header and Footer
cat > src/app/layout.tsx << 'EOF'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Digicyfr - Digital Solutions & Web Development',
  description: 'Professional digital marketing and web development services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
EOF

# Update homepage
cat > src/app/page.tsx << 'EOF'
export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to Digicyfr
          </h1>
          <p className="text-xl mb-8">
            Your trusted partner for digital solutions and web development
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Web Development</h3>
              <p className="text-gray-600">Modern, responsive websites built with the latest technologies.</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Digital Marketing</h3>
              <p className="text-gray-600">Comprehensive digital marketing strategies to grow your business.</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">SEO Optimization</h3>
              <p className="text-gray-600">Improve your search rankings and online visibility.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
EOF

# Create development scripts
print_info "Creating development scripts..."

# Create start script
cat > start-dev.sh << 'EOF'
#!/bin/bash
echo "🚀 Starting Digicyfr development server..."
npm run dev
EOF

# Create build script
cat > build-site.sh << 'EOF'
#!/bin/bash
echo "🔨 Building Digicyfr website for production..."
npm run build
EOF

# Make scripts executable
chmod +x start-dev.sh
chmod +x build-site.sh

# Create .env.local for environment variables
cat > .env.local << 'EOF'
# Digicyfr Environment Variables
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_COMPANY_NAME=Digicyfr
NEXT_PUBLIC_COMPANY_EMAIL=info@digicyfr.com
NEXT_PUBLIC_COMPANY_PHONE=+1 (555) 123-4567
EOF

# Create README for the project
cat > README.md << 'EOF'
# Digicyfr Website

A modern, responsive website for Digicyfr built with Next.js, TypeScript, and Tailwind CSS.

## Getting Started

### Development
```bash
# Start development server
npm run dev
# or use the script
./start-dev.sh
```

### Build for Production
```bash
# Build the project
npm run build
# or use the script
./build-site.sh
```

## Project Structure
```
src/
├── app/
│   ├── about/
│   ├── services/
│   ├── portfolio/
│   ├── contact/
│   ├── blog/
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── Header.tsx
    └── Footer.tsx
```

## Features
- ✅ Responsive design
- ✅ TypeScript support
- ✅ Tailwind CSS styling
- ✅ SEO optimized
- ✅ Modern Next.js App Router

## Deployment
This project can be deployed on Vercel, Netlify, or any Node.js hosting platform.
EOF

print_status "Directory structure created successfully!"
print_status "Page files created (About, Services, Portfolio, Contact, Blog)"
print_status "Components created (Header, Footer)"
print_status "Development scripts created"
print_status "Environment file created"

echo ""
echo "🎉 Digicyfr website setup complete!"
echo "=================================================="
print_info "To start development:"
echo "  npm run dev  (or ./start-dev.sh)"
echo ""
print_info "To build for production:"
echo "  npm run build  (or ./build-site.sh)"
echo ""
print_info "Your website will be available at: http://localhost:3000"
echo ""
print_warning "Don't forget to:"
echo "  1. Update content in each page file"
echo "  2. Add your company logo and images"
echo "  3. Customize colors and styling"
echo "  4. Set up analytics and SEO"
echo "  5. Configure your domain for production"
echo ""
print_status "Happy coding! 🚀"