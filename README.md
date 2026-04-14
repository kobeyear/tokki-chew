# Tokki Chew - Korean Collagen Gummies

> **"Korean collagen gummies that melt into your glow"**

## 🚀 Quick Start

**Live Site:** https://tokkichew.com  
**Status:** Pre-launch with waitlist active

```bash
# Local development
python3 -m http.server 8090
open http://localhost:8090
```

## 📋 Project Overview

Premium Korean beauty supplement brand targeting Gen Z with mobile-first design and Shopify headless commerce integration.

### Key Features
- ✅ **24 Professional Images** - Korean beauty aesthetic
- ✅ **Mobile-Optimized** - 70%+ mobile traffic focus  
- ✅ **Shopify Integration** - Ready to flip from waitlist to live checkout
- ✅ **Rose Gold Brand** - Premium Korean beauty positioning
- ✅ **Waitlist System** - Pre-launch email capture

## 🛠️ Tech Stack

- **Frontend:** Pure HTML/CSS/JS (mobile-first)
- **Backend:** Shopify Storefront API (GraphQL)
- **Hosting:** Vercel with GitHub auto-deploy
- **Domain:** tokkichew.com (Namecheap → Vercel)

## 📁 Quick File Reference

```
index.html          # Main landing page (9 sections)
css/main.css         # Master stylesheet with Korean aesthetics
js/shopify.js        # Shopify API integration & waitlist
assets/             # 24 images (customer, ingredients, lifestyle)
vercel.json         # Deployment configuration
```

## 🎯 Current Status

**✅ Completed:**
- Website design and development
- Shopify backend setup
- Domain and deployment
- Waitlist functionality

**🔄 Ready to Activate:**
- Live checkout (1-line code change)
- Payment processing 
- Order fulfillment

## 📚 Full Documentation

**For complete technical details, debugging guide, and future improvements:**  
→ See `TOKKI-CHEW-FULL-DOCUMENTATION.md`

## 🛒 Shopify Configuration

```javascript
// API Access
domain: 'tokki-chew.myshopify.com'
token: 'YOUR_SHOPIFY_STOREFRONT_TOKEN'
endpoint: '/api/2026-04/graphql.json'
```

## 🎨 Brand Colors

```css
--primary-color: #B76E79;    /* Rose Gold */
--secondary-color: #F5E6E0;  /* Blush Pink */  
--accent-color: #FFF9F7;     /* Warm White */
```

## 🔧 Quick Debugging

**Test buttons work:**
```javascript
// All 4 pricing buttons should trigger email prompt
// Check console for: "🎯 Join waitlist button clicked!"
```

**Test Shopify API:**
```javascript
// Console should show: "✅ Shopify API Connected"
```

---

**Project Documentation:** `TOKKI-CHEW-FULL-DOCUMENTATION.md`  
**Last Updated:** April 13, 2026