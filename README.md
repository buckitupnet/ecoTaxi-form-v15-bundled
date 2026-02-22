# EcoTaxi Form V15 - Bundled Production Build

**Production-ready bundled version** of the EcoTaxi order form with file upload functionality.

## 🚀 Features

- ✅ File upload to `eco-taxi.one` via GraphQL mutations
- ✅ WebAuthn-based user registration (automatic vault creation)
- ✅ Monday.com integration disabled (V15)
- ✅ Simplified form UI (comment field only)
- ✅ ReCAPTCHA removed for testing
- ✅ Built with Vite (optimized bundle)

## 📦 What's Included

This is the **bundled/compiled** version ready for deployment:

- `index.html` - Main form page
- `assets/` - Compiled JS/CSS bundles
- `js/walc-external-bundle.js` - Cryptographic libraries (Sodium, WebAuthn)
- `img/` - Static images

## 🛠️ Tech Stack

- **Original Source**: [ecoTaxi-form](https://github.com/Buckitup-chat/ecoTaxi-form)
- **Build Tool**: Vite 5.4.21
- **CSS Framework**: Tailwind CSS v3
- **Crypto**: @lo-fi/local-vault, libsodium-wrappers

## 🔧 Deployment

### Option 1: Static Hosting (GitHub Pages, Cloudflare Pages, etc.)

1. Upload all files to your hosting provider
2. Ensure `index.html` is served as the root
3. Configure CORS if needed for `eco-taxi.one` API

### Option 2: Local Testing

```bash
# Serve with any static file server
npx serve .
# or
python3 -m http.server 8000
```

## 🔗 API Endpoints

- **GraphQL API**: `https://eco-taxi.one/naive_api`
- **GraphiQL Console**: `https://eco-taxi.one/naive_api_console`
- **File Upload**: `PUT https://eco-taxi.one/upload_chunk/:key`

## ⚠️ Known Issues

- `uploadKey` mutation returns `500 Internal Server Error` (server-side issue)
- This is a persistent issue documented in the original project
- Test page included: `test-uploadkey.html` for debugging

## 📄 License

Based on [ecoTaxi-form](https://github.com/Buckitup-chat/ecoTaxi-form) project.

---

**Build Date**: February 22, 2026  
**Version**: V15 - Bundled
