# Kundhana Sai IT Solutions Pvt. Ltd. — Enterprise Corporate Website

Enterprise-grade corporate website for **Kundhana Sai IT Solutions Pvt. Ltd.** (Brand: Kundhana Sai Technologies), an IT services and consulting enterprise established in 2018.

Built according to the **Product Requirements Document (PRD)** specifications, combining Accenture-inspired visual storytelling and bold typography with TCS-inspired enterprise structure and credibility.

---

## 🌟 Strategic Highlights & Brand Architecture

- **Corporate Headline:** *"Engineering Intelligence. Enabling Transformation."*
- **Primary Objective:** High-value enterprise lead generation and establishing credibility as a strategic IT consulting partner.
- **Design Language:** Deep corporate navy (`#050E1D` / `#0A192F`), electric cyan (`#00D2FF` / `#38BDF8`), and cobalt blue (`#2563EB`) balanced with generous white space and high-contrast typography.
- **Verified Corporate Details:**
  - Company: Kundhana Sai IT Solutions Pvt. Ltd.
  - Established: 2018 (Incorporated under Ministry of Corporate Affairs, RoC Hyderabad)
  - CIN: `U72200TG2018PTC126276` (Verified MCA registration)
  - Hyderabad Headquarters: Plot No. 45, KPHB 9th Phase, Nexus Mall Road, Lakshmi Krishna Plaza, Kukatpally, Hyderabad – 500072, Telangana
  - Regional Office: 1st Floor, D.No. 59A-8/10-2, Guru Nanak Colony, Vijayawada – 520007, Andhra Pradesh
  - Corporate Hotlines: `+91 91000 87899` & `+91 88866 57899`
  - Inquiries: `info@kundhanasai.in`

---

## 🗺️ Sitemap & Page Directory

| Route | Page | Purpose & Components |
|---|---|---|
| `/` | **Home** | Hero section with neural intelligence graphics, Est. 2018 corporate narrative, 7 enterprise practice cards, 4-pillar technology matrix, business value propositions, verified industries, and *"Let's Build What's Next"* CTA. |
| `/about` | **About Us** | Corporate heritage, approved mission & vision, 4 core capability pillars, corporate governance & MCA Director verification notes, executive consultation booking. |
| `/services` | **Services Catalog** | Comprehensive index of all 7 practices, enterprise engagement models (*Strategic Advisory*, *Turnkey Pods*, *SLA Managed Services*), architecture consultation requests. |
| `/services/:slug` | **7 Service Detail Pages** | Reusable template with hero, operational bottlenecks eliminated, capabilities, stack matrix, illustrative domain use cases, 4-phase delivery lifecycle (*01 Discovery* to *04 Handover*), technical FAQs, and service consultation form. |
| `/expertise` | **Technology Expertise** | Deep dive into client-specified technologies: AI & Data, Data Platforms, Enterprise Applications, Cloud & Operations. |
| `/industries` | **Verified Industries** | Domain focus architectures across: Financial Services, Healthcare, Retail & E-Commerce, Manufacturing & Supply Chain, Energy & Utilities, and Digital Platforms. |
| `/contact` | **Contact Us** | Verified Hyderabad HQ and Vijayawada Regional Center, hotlines, corporate email, and enterprise contact form. |
| `/privacy` | **Privacy Policy** | Enterprise data governance, client data sovereignty (on-prem/VPC zero-retention AI), NDA compliance, DPDP / IT Act standards. |

---

## 🚀 7 Core Enterprise Practice Lines

1. **Generative AI & Agentic AI Development** (`/services/generative-ai-agentic-development`)
2. **Data Engineering & Cloud Data Solutions** (`/services/data-engineering-cloud-solutions`)
3. **Data Science & AI/ML** (`/services/data-science-ai-ml`)
4. **Enterprise Application Development** (`/services/enterprise-application-development`)
5. **SAP Integration & Data Warehousing** (`/services/sap-integration-data-warehousing`)
6. **DevOps & Cloud Infrastructure** (`/services/devops-cloud-infrastructure`)
7. **ServiceNow Implementation & Support** (`/services/servicenow-implementation-support`)

---

## 🛡️ Lead Capture & Contact Management

- **Validation:** Full Name, Organization, Business Email (RFC regex), Phone (8–15 digits), Practice Domain selector, Project Description (≥15 chars), and Privacy Consent.
- **Bot Defense:** Hidden honeypot anti-spam protection.
- **Tracking:** Real consultation reference ID generation (e.g. `KS-2026-XXXXX`) with one-click clipboard copying.
- **Persistence:** Submissions saved locally in browser storage (`ks_enterprise_leads`).
- **Backend Configuration Notice:** Transparent in-app banner explaining how to configure live PostgreSQL / Supabase (`VITE_SUPABASE_URL`) or transactional email webhooks (Resend / SendGrid).

---

## 💻 Tech Stack

- **Framework:** React 19 + TypeScript
- **Bundler:** Vite 8
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Routing:** React Router DOM v7
- **Icons:** Lucide React
- **Typography:** Plus Jakarta Sans & Inter (Google Fonts)
- **SEO & Social:** Open Graph, Twitter Cards, Schema.org `Corporation` JSON-LD, XML Sitemap, and `robots.txt`

---

## 🛠️ Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build production bundle (typecheck + minification)
npm run build

# 4. Preview production build locally
npm run preview
```
