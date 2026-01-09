# Claude Code Rules for graphext-landing-data-exploration

## Git Workflow
- **NEVER** make git commits without confirming with the user first
- Always show the changes and ask for explicit approval before running `git commit` and `git push` commands
- Wait for user confirmation before any git operations that modify the repository

## Project Context
- This is a Next.js landing page for Graphext
- Uses Bun as the package manager
- Uses Tailwind CSS v4 for styling
- Uses Framer Motion for animations
- Uses Lenis for smooth scrolling

## Content Source of Truth - Notion

**IMPORTANT:** Always reference the Notion workspace for the latest content and specifications before making changes.

### Main Notion Page
`https://www.notion.so/victorianoi/Graphext-2dc358038bc580d19165fc016847ed52`

### Key Pages:

#### 📝 Landing Page Content Reference
URL: `https://www.notion.so/44f47272877b47aeab2fbec0f5b50531`

Contains:
- **Core Focus:** Advanced Data Exploration
- **Key Use Cases:** Survey Analysis, Social Media Analysis, Customer Segmentation, Customer Review Analytics
- **Tone & Voice:** Clear/confident, Empowering, Modern/professional
- **Key Messages:** 
  - "Explore data like never before"
  - "From chaos to clarity"
  - "No code required. No limits imposed."
  - "See the full picture, not just the summary"
- **Target Audience:** Data analysts, Researchers, Marketing teams, Product teams

#### ⚙️ Landing Page Technical Reference
URL: `https://www.notion.so/49a6f5807a2a43919474c58ab1468c8b`

Contains:
- **Stack:** Next.js (App Router), Tailwind CSS, Framer Motion, Lenis
- **Design:** Mobile-first, Dark/Light mode, Clean sans-serif typography
- **Performance Goals:** Lighthouse > 90, CLS ≈ 0, FCP < 1.5s
- **Components Checklist:** Hero, Use cases, Features, Social proof, Pricing/CTA, Footer

### When to Check Notion:
- Before implementing new sections or components
- When updating copy or messaging
- When clarifying design or technical requirements
- To verify alignment with project goals

## Development Commands
```bash
# Install dependencies
bun install

# Run development server
bun dev

# Build for production
bun run build

# Start production server
bun start
```
