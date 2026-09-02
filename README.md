# XSeven Company Profile

Website profil perusahaan untuk **XSeven Company** — agensi kreatif digital yang menyediakan layanan UI/UX Design, Web Development, Graphic Design, dan Digital Solutions.

---

## Apa Aplikasi Ini

Situs web company profile modern untuk menampilkan:
- **Layanan** yang ditawarkan (4 kategori utama)
- **Portofolio/Proyek** yang sudah dikerjakan
- **Tentang kami** (visi, misi, tim, proses kreatif)
- **Testimoni klien**
- **Form kontak**
- Animasi interaktif & smooth scroll

---

## Dibuat Dengan

| Teknologi | Versi | Kegunaan |
|-----------|-------|----------|
| **React** | 19.2.7 | UI library |
| **Vite** | 8.1.1 | Build tool & dev server |
| **Tailwind CSS** | 4.3.3 | Styling (utility-first) |
| **Framer Motion** | 12.42.2 | Animasi & transisi |
| **AOS** | 2.3.4 | Scroll animations |
| **React Icons** | 5.7.0 | Icon set (Feather Icons) |
| **Oxlint** | 1.71.0 | Linter cepat |

---

## Fitur Utama

- **Hero Section** — Headline animasi, CTA, statistik
- **Stats Counter** — Angka animasi (proyek, klien, tim, dll)
- **About** — Visi, misi, gambar tim & proses kreatif
- **Services** — 4 layanan dengan tab interaktif & gambar hover
- **Why Choose Us** — Keunggulan/kelebihan perusahaan
- **Projects/Portfolio** — Showcase proyek dengan filter
- **Work Process** — Alur kerja (discovery → design → develop → launch)
- **Testimonials** — Carousel testimoni klien
- **Contact** — Form kontak + info kontak
- **Footer** — Navigasi, sosial media, newsletter
- **Dark/Light Mode** — Toggle tema dengan persistensi localStorage
- **Responsive** — Mobile-first, breakpoints: sm/md/lg/xl
- **Accessible** — Semantic HTML, focus states, ARIA labels

---

## Cara Menjalankan

### Prasyarat
- Node.js ≥ 18
- npm / pnpm / yarn

### Install & Development
```bash
# Install dependencies
npm install

# Jalankan dev server (http://localhost:5173)
npm run dev
```

### Build Production
```bash
# Build ke folder dist/
npm run build

# Preview hasil build
npm run preview
```

### Lint
```bash
npm run lint
```

---

## Struktur Project

```
xseven-company/
├── public/                 # Static assets (logo, favicon, icons)
├── src/
│   ├── assets/             # Gambar & media
│   │   ├── about/          # Gambar halaman About
│   │   ├── logo/           # Logo variations
│   │   ├── projects/       # Thumbnail proyek
│   │   └── services/       # Gambar layanan
│   ├── components/
│   │   ├── ui/             # Komponen UI reusable
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Container.jsx
│   │   │   ├── DoubleHoverText.jsx
│   │   │   └── SectionTitle.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── Services.jsx
│   │   ├── Stats.jsx
│   │   ├── Testimonials.jsx
│   │   ├── WhyChooseUs.jsx
│   │   └── WorkProcess.jsx
│   ├── context/
│   │   └── ThemeContext.jsx   # Dark/Light mode provider
│   ├── data/
│   │   └── index.js           # (Kosong - data di komponen)
│   ├── App.jsx                # Root component, compose sections
│   ├── main.jsx               # Entry point, ThemeProvider wrapper
│   └── index.css              # Global styles + Tailwind imports
├── index.html                 # HTML template
├── package.json
├── vite.config.js             # Vite config + Tailwind plugin
└── .oxlintrc.json             # Oxlint config
```

---

## Kontribusi

Project personal — dikerjakan sendiri langsung di branch `main`. Tidak ada alur fork/branch fitur/PR. Perubahan langsung di-commit ke `main` dan otomatis ter-deploy.

---

## Deploy

Website otomatis deploy ke **GitHub Pages** via GitHub Actions:
- Trigger: push ke branch `main`
- Node.js v20
- Hasil build di folder `dist/`
- URL: https://.`github.io/xseven-company/`

Konfigurasi `base: "/xseven-company/"` di `vite.config.js` untuk subpath deployment.

---

## Lisensi

Proyek internal XSeven Company. Hak cipta dilindungi.