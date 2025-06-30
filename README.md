# MemeJPG Website

**Handle all your image editing needs**

A modern, responsive website built with Vue 3, TypeScript, and Vuetify that serves as the hub for all MemeJPG image editing tools.

## 🚀 Features

- **Modern Tech Stack**: Vue 3, TypeScript, Vite, Vuetify, Tailwind CSS
- **Responsive Design**: Optimized for all devices and screen sizes
- **Material Design**: Beautiful UI components with Vuetify
- **Fast Performance**: Optimized with Vite for lightning-fast development and builds
- **SEO Friendly**: Proper meta tags and structure for search engines

## 🛠️ Tools Showcase

The website showcases our powerful image editing tools:

- **[Background Remover](https://removebg.memejpg.com/)** - Remove backgrounds from images in batches automatically
- **[Font Compressor](https://fontcompressor.memejpg.com/)** - Compress font package sizes for better web performance
- **[Image Renamer](https://rename.memejpg.com/)** - Rename multiple images in batches efficiently
- **[Image Resizer & Cropper](https://resize.memejpg.com/)** - Resize and crop images in batches to specific dimensions
- **[Image Compressor](https://compress.memejpg.com/)** - Compress image file sizes in batches without losing quality
- **[ICO Converter](https://ico.memejpg.com/)** - Convert images to ICO format for favicon creation
- **[Image Beautifier](https://beauty.memejpg.com/)** - Enhance and beautify multiple images with AI filters

## 🏗️ Development Setup

### Prerequisites

- Node.js (v20.11.1 or later)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd memejpg-website

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# The site will be available at http://localhost:5174
```

### Building for Production

```bash
# Type-check, compile and minify for production
npm run build

# Preview the production build
npm run preview
```

### Code Quality

```bash
# Lint with ESLint
npm run lint

# Format code with Prettier
npm run format

# Type check
npm run type-check
```

## 📁 Project Structure

```
src/
├── components/     # Reusable Vue components
├── views/         # Page components (Home, About)
├── router/        # Vue Router configuration
├── stores/        # Pinia state management
├── assets/        # Static assets (CSS, images)
├── plugins/       # Plugin configurations (Vuetify)
└── main.ts        # Application entry point
```

## 🎨 Design System

- **Primary Color**: Material Blue (#1976D2)
- **Typography**: Roboto font family
- **Components**: Vuetify Material Design components
- **Responsive**: Mobile-first responsive design
- **Icons**: Material Design Icons

## 🚀 Deployment

### Cloudflare Pages

1. Connect your GitHub repository to Cloudflare Pages
2. Set build command: `npm run build`
3. Set build output directory: `dist`
4. Deploy automatically on push to main branch

### GitHub Pages

```bash
# Build the project
npm run build

# Deploy to GitHub Pages (if configured)
npm run deploy
```

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- Website: [MemeJPG](https://memejpg.com)
- Email: contact@memejpg.com
- GitHub: [Your GitHub](https://github.com)

---

Built with ❤️ using Vue 3 and TypeScript