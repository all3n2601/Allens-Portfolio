# 🚀 M A Allen Febi's Portfolio

> **A Modern, Interactive Portfolio Built with Cutting-Edge Technologies**

A stunning, responsive portfolio website showcasing professional projects, skills, and achievements. Built with the latest web technologies and featuring immersive 3D graphics, smooth animations, and a modern dark theme.

## 🌟 Live Demo

🔗 **[Visit Portfolio](https://your-vercel-url.vercel.app)** *(Replace with your actual Vercel URL)*

## ✨ Key Features

- **🎨 Modern Dark Theme** - Sleek violet and slate color scheme with glassmorphism effects
- **🎭 Interactive 3D Graphics** - Powered by Three.js and Threlte for immersive experiences
- **📱 Fully Responsive** - Optimized for all devices from mobile to desktop
- **⚡ Lightning Fast** - Built with SvelteKit for optimal performance
- **🎯 Smooth Animations** - Custom scroll-triggered animations and hover effects
- **🎪 Particle Effects** - Dynamic background particles with mouse interaction
- **📄 Resume Download** - Direct PDF download functionality
- **📧 Contact Form** - Interactive contact form with validation
- **🔍 Project Filtering** - Advanced search and category filtering
- **♿ Accessibility** - WCAG compliant with proper ARIA labels

## 🛠️ Tech Stack

### **Frontend Framework**
- **[SvelteKit](https://kit.svelte.dev/)** - The fastest way to build web applications
- **[Svelte 5](https://svelte.dev/)** - Latest version with runes and improved reactivity
- **[Vite](https://vitejs.dev/)** - Next generation frontend tooling

### **Styling & UI**
- **[TailwindCSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[PostCSS](https://postcss.org/)** - CSS processing with autoprefixer
- **Custom CSS Animations** - Hand-crafted 3D card effects and transitions
- **Glassmorphism Design** - Modern backdrop blur effects

### **3D Graphics & Animation**
- **[Three.js](https://threejs.org/)** - JavaScript 3D library
- **[Threlte](https://threlte.xyz/)** - Svelte components for Three.js
- **Particles.js** - Interactive particle system
- **Intersection Observer API** - Scroll-triggered animations

### **Development Tools**
- **TypeScript Support** - Type safety and better development experience
- **ESLint & Prettier** - Code quality and formatting
- **Hot Module Replacement** - Instant development feedback

### **Deployment & Hosting**
- **[Vercel](https://vercel.com/)** - Serverless deployment platform
- **Node.js 20.x** - Latest LTS runtime
- **Static Site Generation** - Optimized for performance and SEO

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── lib/
│   │   └── components/
│   │       ├── AnimateOnScroll.svelte    # Scroll-triggered animations
│   │       ├── Footer.svelte             # Site footer
│   │       ├── Header.svelte             # Navigation header
│   │       ├── Main.svelte               # Main content wrapper
│   │       └── SimpleBackground.svelte   # Canvas particle effects
│   ├── routes/
│   │   ├── +layout.js                    # Layout configuration
│   │   ├── +layout.svelte                # Global layout
│   │   └── +page.svelte                  # Main portfolio page
│   ├── app.css                           # Global styles
│   └── app.html                          # HTML template
├── static/
│   ├── documents/
│   │   └── resume.pdf                    # Resume download
│   ├── images/
│   │   └── profile.png                   # Profile image
│   └── assets/
│       └── particles.json                # Particle configuration
├── package.json                          # Dependencies
├── svelte.config.js                      # SvelteKit configuration
├── tailwind.config.js                    # TailwindCSS configuration
├── vite.config.js                        # Vite configuration
└── vercel.json                           # Vercel deployment config
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** 20.x or higher
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/all3n2601/Allens-Portfolio.git
   cd Allens-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
npm run preview
```

## 🎯 Key Sections

### **Hero Section**
- Dynamic particle background with mouse interaction
- Professional introduction with call-to-action buttons
- Resume download functionality
- Responsive profile image

### **Projects Showcase**
- **8+ Featured Projects** including:
  - Production Flutter POS system (70+ daily users)
  - Award-winning ride-sharing platform (2nd place, 72 teams)
  - IEEE-published IoT emergency system
  - Patent-filed environmental monitoring solution
- Advanced filtering by category and technology
- Real-time search functionality
- GitHub integration with external links

### **Skills & Expertise**
- **4 Major Categories**:
  - Frontend Mastery (React, Svelte, Flutter, TailwindCSS)
  - Backend Architecture (Node.js, Express, MongoDB, Firebase)
  - IoT & Hardware (Arduino, LoRaWAN, Sensor Integration)
  - AI & Machine Learning (LangChain, HuggingFace, Python)
- Interactive skill cards with experience metrics
- Technology badges with project counts

### **About Section**
- Academic background (Northeastern University, VIT-AP)
- Professional experience (Siga Infotech, IIT Guwahati)
- Key achievements and certifications
- Personal philosophy and approach

### **Contact Section**
- Interactive contact form with validation
- Multiple contact methods (email, phone, social)
- Copy-to-clipboard functionality
- Professional networking links

## 🎨 Design Features

### **Color Palette**
- **Primary**: Violet (#8b5cf6)
- **Background**: Slate (#0f172a, #1e293b)
- **Accent**: Purple gradients
- **Text**: White with gray variants

### **Typography**
- **Headings**: Poppins (Google Fonts)
- **Body**: Roboto (Google Fonts)
- **Icons**: Font Awesome 6.4.2

### **Animations**
- Scroll-triggered fade-in effects
- 3D card hover transformations
- Smooth page transitions
- Particle system interactions

## 📊 Performance Optimizations

- **Static Site Generation** - Pre-rendered pages for fast loading
- **Image Optimization** - Optimized profile and asset images
- **Code Splitting** - Automatic bundle optimization
- **Lazy Loading** - Components loaded on demand
- **CDN Delivery** - Global content delivery via Vercel

## 🔧 Customization

### **Adding New Projects**
Edit the `steps` array in `src/routes/+page.svelte`:

```javascript
{
  name: "Project Name",
  icon: "fa-solid fa-icon-name",
  description: "Project description",
  href: "https://github.com/username/repo",
  technologies: ["Tech1", "Tech2"],
  category: "Category Name",
  status: "Completed",
  featured: true
}
```

### **Updating Skills**
Modify the `skillCategories` array in the same file to add or update skills.

### **Styling Changes**
- Global styles: `src/app.css`
- Component styles: Individual `.svelte` files
- Tailwind config: `tailwind.config.js`

## 🌐 Deployment

### **Vercel (Recommended)**
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `build`
   - Install Command: `npm ci`
3. Deploy automatically on push to main branch

### **Other Platforms**
- **Netlify**: Compatible with SvelteKit
- **GitHub Pages**: Requires adapter-static
- **Docker**: Create Dockerfile for containerized deployment

## 📱 Browser Support

- **Chrome** 90+
- **Firefox** 88+
- **Safari** 14+
- **Edge** 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 About the Developer

**M A Allen Febi** is a passionate Full Stack Developer and MS Computer Science student at Northeastern University with:

- **11 months** of professional industry experience
- **70+ daily users** served through production applications
- **IEEE publication** in ICCCSMD'24
- **Patent filed** for innovative IoT solutions
- **2nd place** in competitive hackathons

### **Connect with Allen**
- 📧 **Email**: [allsurej@gmail.com](mailto:allsurej@gmail.com)
- 📱 **Phone**: (617) 606-8268
- 💼 **LinkedIn**: [all3n-f3bi](https://www.linkedin.com/in/all3n-f3bi/)
- 🐙 **GitHub**: [all3n2601](https://github.com/all3n2601)

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

*Built with ❤️ by M A Allen Febi*

</div>
