# Cultural Hip Hop — Digital Research Platform

> **EDUC 218: Hip Hop Nation Language and Literacy Practices**  
> **University of Massachusetts Amherst**  
> **Final Multimodal Media Project**

**Research Collective:**
- Kellen S.
- Roy K.
- Sophia S.
- Nicholas S.

---

## 🌟 Project Overview

**Cultural Hip Hop** is an evolving multimodal digital research platform and exhibition exploring how Hip Hop connects personal lived experiences to systemic societal issues through music, language, visual art, interviews, and cultural literacies.

### Central Thesis
> *"Hip Hop is more than entertainment. It is a cultural movement that allows individuals and communities to express themselves, develop their identities, build a sense of belonging, and address social and political issues."*

---

## 🏛️ Website Architecture & Sections

1. **Hero & Orientation:** High-contrast editorial hero with audio waveform motifs, course attribution, and quick project navigation.
2. **About Our Project:** The five core research pillars, methodology (multimodal discourse analysis & oral history), and institutional framework.
3. **Music Analysis:** Modular song-analysis framework decomposing tracks across lyrical syntax (HHNL), beat/sample production, music video iconography, sociopolitical critique, and group synthesis.
4. **Interviews & Personal Perspectives:** Oral history platform featuring student and artist voices, key pull-quotes, audio stream players, and transcript archives.
5. **Visual Culture & Media:** Filterable multimedia gallery (Photography, Album Art, Historical Imagery, Video Archives, Regional Expression) with educational fair-use credits.
6. **Hip Hop, Education & Society:** Five dedicated expandable themes (Identity, Belonging, Youth Pedagogy, Social Justice, and Creativity).
7. **Research & Sources:** Filterable, searchable academic bibliography with APA citations, direct links, and scholarly annotations.
8. **Project Team:** Bios, roles, and research focus areas for all four group members.

---

## 🛠️ Technology Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Modern editorial dark theme with warm gold/amber accents)
- **Icons:** Lucide React
- **Architecture:** Decoupled data collections (`src/data/`) for effortless AI-assisted and manual updates.
- **Hosting Target:** Vercel (Compatible with free `.vercel.app` domains and GitHub CI/CD).

---

## 🚀 Getting Started Locally

### 1. Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to explore the website.

### 3. Production Build Test
```bash
npm run build
```

---

## ☁️ Deploying to Vercel (When Ready)

When you are ready to publish the website live under a free `your-project.vercel.app` domain:

### Method 1: Via GitHub & Vercel (Recommended for Continuous Updates)
1. Initialize a git repository and push your project to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial cultural hip hop exhibition v1"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Keep the default settings (Next.js preset) and click **Deploy**.
5. Every time you push updates (or ask Antigravity to commit changes), Vercel will automatically rebuild and deploy your live site!

### Method 2: Via Vercel CLI
```bash
npx vercel
```
Follow the interactive prompts to link and deploy directly.

---

## 📝 Updating Website Content

Refer to [`HOW_TO_UPDATE.md`](./HOW_TO_UPDATE.md) for detailed schemas on adding songs, interviews, media, and sources.
