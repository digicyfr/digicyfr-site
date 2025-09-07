# Digicyfr Website Deployment Guide

## 🚀 Quick Deployment Options

### Option 1: Vercel (Recommended)
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "New Project" and import your repository
3. Add environment variables (see below)
4. Deploy!

### Option 2: Netlify
1. Go to [netlify.com](https://netlify.com) and sign in
2. Click "New site from Git" and select your repository
3. Add environment variables (see below)
4. Deploy!

## 🔧 Required Environment Variables

Add these to your hosting platform's environment variables section:

```env
# Company Contact Information
NEXT_PUBLIC_COMPANY_EMAIL=contact@digicyfr.com
NEXT_PUBLIC_COMPANY_PHONE=+48 695 016 33
NEXT_PUBLIC_COMPANY_ADDRESS=Warsaw, Poland
NEXT_PUBLIC_COMPANY_WEBSITE=https://digicyfr.com

# Business Details
NEXT_PUBLIC_COMPANY_NAME=Digicyfr
NEXT_PUBLIC_COMPANY_TAGLINE=Your Digital Solutions Partner

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://digicyfr.com

# EmailJS Configuration (for contact form)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📧 EmailJS Setup (Contact Form)

To enable the contact form:

1. **Create EmailJS Account**
   - Go to [emailjs.com](https://www.emailjs.com/)
   - Sign up for a free account

2. **Create Email Service**
   - Add your email service (Gmail, Outlook, etc.)
   - Note the Service ID

3. **Create Email Template**
   - Create a new template with these variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{message}}` - Message content
     - `{{to_email}}` - Your company email
   - Note the Template ID

4. **Get Public Key**
   - Go to Account settings
   - Copy your Public Key

5. **Update Environment Variables**
   - Add the Service ID, Template ID, and Public Key to your hosting platform

## 🌐 Domain Setup

1. **Custom Domain** (Optional)
   - Purchase domain from your preferred registrar
   - Update DNS settings to point to your hosting platform
   - Update `NEXT_PUBLIC_SITE_URL` environment variable

## ✅ Pre-Deployment Checklist

- [ ] All environment variables set
- [ ] EmailJS configured and tested
- [ ] Contact information updated
- [ ] Build process tested locally (`npm run build`)
- [ ] All changes committed to Git

## 🔍 Testing

After deployment:
- [ ] Website loads correctly
- [ ] All pages work (Home, Services, Contact, etc.)
- [ ] Language switcher functions
- [ ] Contact form sends emails
- [ ] Mobile responsiveness works
- [ ] Hero carousel displays correctly

## 🆘 Troubleshooting

### Contact Form Not Working
- Check EmailJS configuration
- Verify environment variables are set correctly
- Check browser console for errors

### Images Not Loading
- Ensure images are in the correct `/public/images/` directory
- Check image paths in components

### Build Errors
- Run `npm run build` locally to debug
- Check for TypeScript errors
- Verify all dependencies are installed

## 📞 Support

For deployment issues, contact: contact@digicyfr.com

---

**Ready to deploy?** Choose your platform and follow the steps above!