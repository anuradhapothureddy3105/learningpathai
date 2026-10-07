# Sky Route — AI Learning Path

> **A calm, step-by-step learning companion for engineering students — built for slow networks, built for you.**  
> *Developed with SASI IDEA Lab · Tadepalligudem (2026)*

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18-blue.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3-38B2AC.svg)](https://tailwindcss.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3.svg)](https://getbootstrap.com/)

---

## Overview

Many engineering students, especially in tier-2 and tier-3 colleges and rural institutions, face intense confusion about career choices, roadmaps, and industry expectations. Information overload often paralyzes students before they even write their first line of code or study their first circuit.

**Sky Route** simplifies career preparation into structured, bite-sized learning journeys with step-by-step roadmaps, bilingual support (**English & Telugu**), an AI mentor that understands student context, low-bandwidth optimization, and offline progress persistence.

---

## Features

- **Personalized AI Learning Path**: Generates tailored roadmaps based on the student's chosen career, existing confidence level (Beginner, Intermediate, Advanced), and weekly available study hours.
- **Comprehensive Career Exploration**: 13 carefully curated career paths across **BTech** and **MTech** programs:
  - **CSE / IT**: Data Scientist, Full-Stack Developer, Competitive Programmer / SDE
  - **Core Engineering**: GATE / Core Engineering
  - **ECE**: VLSI & Chip Design, Embedded Systems & IoT
  - **EEE**: Power Systems Engineer
  - **Mechanical**: Design & CAD Engineer, Manufacturing & Robotics
  - **Civil**: Structural & Site Engineer
  - **MTech Tracks**: Research & MS Abroad Track, PSU / Government R&D Track, Industry R&D / Specialist Engineer
- **Bilingual Interface (English + Telugu)**: Seamless instant switching between English and Telugu across all screens, career descriptions, roadmaps, quiz questions, and AI mentor interactions.
- **Visual Roadmap with Progress Tracking**: Interactive step-by-step node path with animated indicators showing completed, available, and locked milestones.
- **Weekly Check-ins & Quizzes**: Automated periodic check-ins testing milestone retention with multiple-choice questions.
- **Adaptive Remedial & Catch-Up Lessons**: If a student faces difficulty in a check-in, the AI mentor automatically generates a targeted, non-judgmental catch-up milestone and injects it into their roadmap.
- **Context-Aware AI Mentor**: An omnipresent mentor that knows the student's name, career goal, current topic, and quiz performance. Students can ask questions in English, Telugu, or conversational mix ("Tanglish").
- **Voice Input**: Integrated speech-to-text allowing hands-free questions in both English and Telugu.
- **Offline / Local Storage Persistence**: Safe storage architecture with multi-layer fallback (`window.storage` &rarr; `localStorage` &rarr; in-memory fallback) to ensure zero data loss and full offline functionality on low-connectivity devices.
- **Zero Heavy Backend Requirement**: Fully client-driven architecture with clean state management, making it light, fast, and easy to run anywhere.

---

## Tech Stack

- **Core**: [React 18](https://react.dev/) + JSX
- **Build Tool & Dev Server**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) + [Bootstrap 5.3](https://getbootstrap.com/) + Custom CSS Design System
- **Fonts**: [Google Fonts](https://fonts.google.com/) (*Baloo 2*, *Inter*, *Noto Sans Telugu*)
- **Storage**: Safe multi-tier client storage (`safeStorage.js`)
- **Speech Recognition**: Web Speech API (`SpeechRecognition`)

---

## Project Structure

```
sky-route/
│
├── public/
│   ├── favicon.svg              # Brand vector logo icon
│   └── assets/
│       └── images/              # Static public images
│
├── src/
│   ├── assets/
│   │   ├── icons/               # SVG icon components (LogoIcon.jsx)
│   │   └── images/              # App images
│   │
│   ├── components/
│   │   ├── common/              # Reusable UI primitives
│   │   │   ├── Button.jsx       # Custom button variants
│   │   │   ├── Card.jsx         # Elevation & card hover containers
│   │   │   ├── Modal.jsx        # Accessible dialog wrapper
│   │   │   ├── Header.jsx       # App header, Logo, and LangSwitch
│   │   │   ├── Footer.jsx       # Standard app footer
│   │   │   └── Loading.jsx      # Spinner and state indicator
│   │   │
│   │   ├── auth/                # Authentication flow (Demo OTP)
│   │   │   ├── Auth.jsx         # Auth coordinator container
│   │   │   ├── SignIn.jsx       # Mobile number input screen
│   │   │   └── OtpVerification.jsx # 6-digit code verification
│   │   │
│   │   ├── onboarding/          # 4-step personalized path builder
│   │   │   ├── Onboarding.jsx   # Multi-step wizard coordinator
│   │   │   ├── NameStep.jsx     # Student name step
│   │   │   ├── CareerStep.jsx   # Career selection step
│   │   │   ├── LevelStep.jsx    # Self-reported confidence step
│   │   │   └── HoursStep.jsx    # Weekly commitment slider
│   │   │
│   │   ├── dashboard/           # Main student dashboard
│   │   │   ├── Dashboard.jsx    # Dashboard screen coordinator
│   │   │   ├── Progress.jsx     # Completion rate & offline badge
│   │   │   ├── LearningPath.jsx # Signature visual roadmap line
│   │   │   ├── LearningNode.jsx # Individual roadmap milestone node
│   │   │   └── TopicModal.jsx   # Milestone detail & external resource links
│   │   │
│   │   ├── explore/             # Career library
│   │   │   ├── ExplorePaths.jsx # Branch-grouped path grid
│   │   │   ├── PathCard.jsx     # Career preview card
│   │   │   ├── PathDetails.jsx  # In-depth career modal with syllabus
│   │   │   └── PathFilters.jsx  # BTech / MTech / All category filters
│   │   │
│   │   ├── quiz/                # Weekly milestone assessments
│   │   │   ├── WeeklyCheckIn.jsx # Dashboard check-in reminder card
│   │   │   ├── QuizModal.jsx    # Assessment dialog coordinator
│   │   │   ├── QuizQuestion.jsx # Multiple choice question renderer
│   │   │   └── QuizResult.jsx   # Pass / Remedial feedback screen
│   │   │
│   │   ├── mentor/              # AI Companion
│   │   │   ├── AIMentor.jsx     # Floating action button + chat drawer
│   │   │   ├── ChatMessage.jsx  # Chat message bubbles
│   │   │   └── VoiceInput.jsx   # Speech recognition mic trigger
│   │   │
│   │   └── landing/             # Initial welcome hero screen
│   │       └── Landing.jsx      # Hero, value props, and quick explore CTA
│   │
│   ├── data/
│   │   ├── paths.js             # Complete 13 career tracks & milestones
│   │   ├── translations.js      # English & Telugu translation strings
│   │   ├── branchThemes.js      # Branch color accents & icons
│   │   └── quizData.js          # Topic check-in question banks
│   │
│   ├── hooks/
│   │   ├── useAuth.js           # Session and user authentication state
│   │   ├── useLanguage.js       # Language selection and localization
│   │   ├── useProgress.js       # Milestone completion and remedial handling
│   │   └── useLocalStorage.js   # SafeStorage-backed reactive state
│   │
│   ├── utils/
│   │   ├── safeStorage.js       # Fallback-safe storage driver
│   │   ├── helpers.js           # Roadmap builder, progress metrics, AI helper
│   │   └── constants.js         # Configuration keys and constants
│   │
│   ├── styles/
│   │   ├── variables.css        # CSS color palette custom properties
│   │   ├── animations.css       # Keyframes & micro-interaction styles
│   │   └── globals.css          # Tailwind base, typography, scrollbars
│   │
│   ├── App.jsx                  # Main view router & state conductor
│   └── main.jsx                 # React root mount
│
├── .env.example                 # Environment variable templates
├── .gitignore                   # Standard git exclusions
├── index.html                   # HTML entry point with fonts
├── package.json                 # Project dependencies & scripts
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Tailwind design tokens
├── vite.config.js               # Vite bundler configuration
└── LICENSE                      # MIT Open Source License
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- `npm` (v9.0.0 or higher)

### Installation

Clone the repository and install the dependencies:

```bash
npm install
```

### Development Server

Run the development server locally:

```bash
npm run dev
```

The app will be available at: `http://localhost:3000` (or the port specified in terminal).

### Production Build

Create an optimized, minified production build:

```bash
npm run build
```

The compiled assets will be in the `dist/` directory.

### Preview Production Build

Preview the built application locally before deploying:

```bash
npm run preview
```

---

## Deployment

The project builds to static HTML/CSS/JS and can be deployed to any static host.

### Deploying to GitHub Pages

1. In `vite.config.js`, add the base repository path if deploying to a project page:
   ```js
   export default defineConfig({
     base: '/repository-name/',
     plugins: [react()],
   });
   ```
2. Build the project:
   ```bash
   npm run build
   ```
3. Deploy the `dist` folder using the `gh-pages` package or GitHub Actions.

### Deploying to Vercel

```bash
npx vercel
```
*Or connect your GitHub repository directly to Vercel. Framework preset: **Vite**.*

### Deploying to Netlify

1. Connect your repository in Netlify.
2. Build command: `npm run build`
3. Publish directory: `dist`

---

## Demo Notice & Features

- **Authentication**: The mobile phone and 6-digit OTP verification flow is currently implemented as an interactive **Demo Experience** (any 6 digits verify successfully). Real SMS OTP integration can be plugged in by attaching an SMS gateway service to `src/components/auth/SignIn.jsx`.
- **AI Mentor**: Works offline with built-in conversational fallbacks. To connect a live backend or direct model provider, configure keys in `.env` (refer to `.env.example`).
- **Data Integrity**: All 13 career tracks and curriculum nodes match the SASI IDEA Lab curriculum specifications.

---

## License

This project is licensed under the [MIT License](LICENSE).
