# Kundhana Sai Technologies — Official Training & IT Solutions Website

Production-quality, responsive website built for **Kundhana Sai Technologies** (Kundhana Sai IT Solutions Pvt. Ltd.), an IT training and enterprise IT solutions company based in Hyderabad.

Built according to the **PRD — Kundhana Sai Technologies Website** specifications.

---

## 🌟 Key Highlights & Architecture

- **Primary Goal:** Lead generation, trust building, course discovery, and demo enrollments.
- **Brand Direction:** Deep professional blue (`#0A2540`), bright blue (`#2563EB`), and amber/yellow accent (`#F59E0B` / `#FACC15`), clean enterprise cards, readable typography, and modern micro-interactions.
- **Tech Stack:**
  - React 19 + TypeScript
  - Vite 8 Bundler
  - Tailwind CSS v4 (`@tailwindcss/vite`)
  - React Router DOM v7
  - Lucide Icons
- **SEO & Social:** Open Graph, Twitter Cards, Google Fonts (`Plus Jakarta Sans` & `Inter`), XML Sitemap, `robots.txt`, and Schema.org `EducationalOrganization` + `Course` JSON-LD structured data.

---

## ⚠️ Client Verification Checklist (Pre-Production)

Per the project instructions, items from the promotional materials with conflicting or unverified entries have been intentionally highlighted and centralized in `src/data/companyData.ts`:

1. **Hyderabad Address / Pincode (`VERIFY_WITH_CLIENT_ADDRESS`):**
   - **Variant A (Brochure):** Plot No. 45, KPHB 9th Phase, Nexus Mall Road, Beside Akruthi, Lakshmi Krishna Plaza, Kukatpally, Hyderabad – 500072, Telangana
   - **Variant B (Poster):** Lakshmikrishnaplaza, 2nd floor, 9th Phase Rd, KPHB Phase 9, Kukatpally, Hyderabad, Telangana 500085
   - *Status:* Both variants are documented in `companyData.ts` and visible in the pre-production Demo Advisory Banner for client sign-off.
2. **Vijayawada Regional Office:**
   - 1st Floor, D.No.59A-8/10-2, behind Ushodaya Super Market, Guru Nanak Colony, Vijayawada, Andhra Pradesh 520007, India (pending client confirmation).
3. **Phone Numbers & WhatsApp:**
   - `+91 91000 87899` & `+91 88866 57899` (centralized in `companyData.ts` for instant updates).
4. **Corporate Identity:**
   - Established: 2018
   - CIN: `U72200TG2018PTC126276` (Verified MCA records)
   - Directors: Venkata Sai Subhashini Naidu & Bhagya Gulgothulu.
5. **Placement Assistance Ethics:**
   - Uses honest **"Dedicated Placement Assistance"** rather than unsubstantiated claims.
   - Student testimonial cards are modeled as clean placeholder slots ready for client-provided verified reviews.

---

## 🗺️ Website Structure & Pages

| Route | Page | Purpose |
|---|---|---|
| `/` | **Home** | Hero, Trust Strip, Featured Courses, Why Choose Us, 7-Step Training Journey, Placement Support, Upcoming Batches, Training Modes, Student Benefits, Tech Cloud, About Snippet, Solutions Snippet, Testimonial Slots, FAQ Accordion, Call to Action |
| `/courses` | **Courses Catalog** | Searchable grid with category filters, key syllabus modules, tools, and batch timings |
| `/courses/:slug` | **Course Detail Pages** | In-depth syllabus modules accordion, real-time enterprise capstone projects, career roles, tools matrix, and sticky demo enrollment card |
| `/placement` | **Placement Assistance** | Detailed 7-stage placement lifecycle: resume ATS optimization, mock interviews, HR prep, job alerts, and post-hire job support |
| `/about` | **About Company** | Company overview, MCA incorporation, vision/mission, and dual training + consulting pillars |
| `/solutions` | **Enterprise IT Solutions** | 7 enterprise service lines: Data Engineering & Cloud, GenAI & Agentic AI, App Dev, Data Science, SAP, DevOps, ServiceNow |
| `/contact` | **Contact & Centres** | Hyderabad (with address verification notes), Vijayawada, hotlines, and instant enquiry form |
| `/enquiry` | **Book Free Demo** | Dedicated high-conversion enrollment page highlighting the *First 4 Sessions FREE* offer |

---

## 🚀 Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build production bundle
npm run build

# 4. Preview production build
npm run preview
```
