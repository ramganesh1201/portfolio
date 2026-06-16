# TODO - Recruiter-first + Mobile-safe portfolio improvements

## Step 1 — Recruiter-first Hero
- [x] Update text hierarchy in `src/components/HeroSection.tsx` (headline/subheadline/availability) 
- [x] Keep existing animations + background components + CTAs

## Step 2 — Dedicated Tech Stack section
- [x] Add `src/components/TechStackSection.tsx` using existing FadeIn styling
- [x] Insert Tech Stack section into `src/pages/Home.tsx` after `ProfessionalProfileSection` and before `AboutSection`

## Step 3 — Replace Experience content
- [x] Update `src/components/ServicesSection.tsx` heading to “Professional Highlights”
- [x] Replace timeline copy with required recruiter metrics while preserving layout

## Step 4 — Projects card information density
- [x] Extend `src/components/ProjectsSection.tsx` project data with tech/features/type
- [x] Render condensed info on cards without changing card layout or case-study routing

## Step 5 — Mobile audit fixes
- [ ] Tweak Hero/Projects responsive classes only if overflow/touch target issues are found

## Step 6 — Build + verify
- [x] Run `npm run lint` (warnings only)
- [x] Run `npm run build`
- [ ] Manually verify responsive behavior at 320/360/375/390/414/768 and route/case-study/contact safety


