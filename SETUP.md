# 🎯 PROJECT SETUP: Survive the AI (Astro + React + Tailwind)

This is a fear-driven content and product site. The design system is modeled on:  
https://demos.wrappixel.com/premium-admin-templates/angular/blog-angular/main/

---

## ⚒️ Tech Stack

- **Astro** (site generator)
- **Tailwind CSS** (styling)
- **React** (for interactive components like quizzes)

---

## 🗂️ Folder Structure

/public → Static assets (images, fonts)
/src/components → Astro + React components (Hero, Navbar, PostCard, QuizStep)
/src/layouts → Layouts using <slot /> (BaseLayout, BlogLayout)
/src/pages → Routes (index.astro, /quiz, /drops, /fear-papers)
/src/content → Markdown content (Fear Papers, Kits)
/src/styles → Tailwind CSS files
/src/data → Static JSON or JS config (fear-index.json, quiz-questions.json)

yaml
Copy
Edit

---

## ⚙️ Core Config Files

- `astro.config.mjs` → Astro setup  
- `tailwind.config.cjs` → Theme, font, spacing, colors  
- `tsconfig.json` → Type safety  
- `package.json` → Scripts, dependencies

---

## 🧠 Component Design Notes for Copilot

### `Navbar.astro`
- White background, border bottom, shadow
- Logo left: "Survive the AI"
- Links right: Home, Quiz, Drops, Fear Papers

### `Hero.astro`
- Full-bleed background image (Unsplash AI/future)
- Overlay text block with title, subtitle, CTA
- Transparent dark layer behind text

### `PostCard.astro`
- Top image
- Category badge (red or blue)
- Date tag (top right overlay)
- Title, excerpt, "Read More →" link
- Uniform width and height
- Hover elevation and smooth transitions

### `PostGrid.astro`
- 2–3 column responsive layout
- Pull from static `posts` array or dynamic content

### `FearIndexPreview.astro`
- Sidebar box with category links
- White background, padding, border, rounded

### `NewsletterSignup.astro`
- Email input + button
- White card style
- Text above input: “Sign up for updates”

### `Footer.astro`
- Left: “© Survive the AI”
- Right: links to Home, Privacy, Terms
- Light background, small font, center aligned on mobile

---

## 🧩 Quiz Logic (WIP)

- Each quiz question = 1 JSON object in `/src/data/quiz-questions.json`
- React component `QuizBox.jsx` will:
  - Load questions
  - Track answers
  - Calculate fear index score
- Results page = `/quiz/results`

---

## 🧠 Copilot Prompt Guidelines

Use this file as the source of truth. When generating new components:

```js
// Match the Wrappixel demo layout
// Use tailwind spacing, shadow, rounded-lg, clean typography
// Import props like { title, excerpt, imageUrl }
// Ensure layout matches other cards