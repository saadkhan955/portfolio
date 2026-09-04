import { Project, Experience, SkillGroup } from '../types';

export const PERSONAL_INFO = {
  name: 'Saad Khan',
  role: 'Drupal & Full-Stack Engineer',
  headline: 'Drupal & Full-Stack Engineer building enterprise web platforms',
  status: 'Drupal Developer at ThisGainIndia (GAIN)',
  location: 'Mumbai, India',
  email: 'contact@khansaad.dev',
  github: 'https://github.com/saadkhan955',
  linkedin: 'https://linkedin.com/in/saadkhan955',
  resumePdfUrl: '/Saad-Khan-Drupal-Full-Stack-Engineer-Resume.pdf',
  bio: 'I engineer scalable Drupal 10/11 platforms, custom PHP backend systems, and modern React applications with a focus on maintainability, performance, and production reliability.',
  experienceYears: '5+',
  enterpriseProjectsCount: '15+',
  productionCommits: '350+',
  performanceFocus: 'Enterprise Architecture & Core Web Vitals',
};

export const PROJECTS: Project[] = [
  // --- GAIN ENTERPRISE DRUPAL & BACKEND PROJECTS ---
  {
    id: 'raf-benevolent-fund',
    title: 'RAF Benevolent Fund',
    subtitle: 'Enterprise Platform, Dynamic Social Preview Engine & Custom Modules',
    category: 'enterprise-drupal',
    clientOrOrg: 'ThisGainIndia / RAFBF',
    timeframe: '2026',
    description: 'High-traffic fundraising platform featuring custom Drupal modules, dynamic Hero-based social share preview engine (OG/Twitter), entity auditing, and Drupal 11 core upgrades.',
    longDescription: 'Architected backend custom modules and full-stack solutions for the UK’s leading RAF charity. Engineered a custom social share module that dynamically inspects page Hero paragraphs and media entities to generate contextual OpenGraph and Twitter preview cards with intelligent fallbacks. Designed an administrative entity usage reporting module with streaming XLSX export, upgraded core to Drupal 11 on PHP 8.3, and implemented Stripe donation workflows.',
    liveUrl: 'https://rafbf.org',
    techStack: ['Drupal 11', 'PHP 8.3 OOP', 'Custom Modules', 'Social Metatag Tokens', 'Stripe API', 'Twig', 'Tailwind CSS', 'DDEV', 'Composer'],
    metrics: [
      { label: 'Architecture', value: 'Drupal 11 / PHP 8.3' },
      { label: 'Custom Module 1', value: 'Hero Social Preview (OG)' },
      { label: 'Custom Module 2', value: 'Entity Usage XLSX Export' },
      { label: 'Donation Engine', value: 'Stripe + Webform Sync' }
    ],
    featured: true,
    keyContributions: [
      'Engineered a custom Social Share module providing dynamic Drupal tokens that extract Hero paragraph media to automatically generate rich OpenGraph (og:image) and Twitter cards with multi-level fallback logic.',
      'Developed an administrative Entity Usage & Reporting module that scans paragraph/media references across all nodes and streams real-time XLSX spreadsheets.',
      'Architected Drupal 11 core upgrade on PHP 8.3, resolving service container deprecations and custom database driver compatibility.',
      'Engineered backend Stripe payment workflows with automated donor metadata capture and self-healing Webform sync.',
      'Implemented responsive Hero components, YouTube iframe facade (saving 3MB initial payload), and OneTrust CLS layout containment.'
    ]
  },
  {
    id: 'adder-technology',
    title: 'Adder Technology',
    subtitle: 'Global Technology Platform & Backend Search Optimization',
    category: 'enterprise-drupal',
    clientOrOrg: 'ThisGainIndia / Adder',
    timeframe: '2026',
    description: 'Enterprise multi-region platform featuring Search API backend tokenizer fixes, contrib module security patching, LLMS integration, and paragraph design systems.',
    longDescription: 'Maintained and resolved critical backend module and search indexing issues for a global technology manufacturer. Resolved Search API hyphen tokenization bugs to ensure exact product model searches, patched and updated contrib modules, configured LLMS discovery integration (llms.txt), and developed reusable Auto FAQ accordion paragraph systems.',
    liveUrl: 'https://adder.com',
    techStack: ['Drupal 10', 'PHP 8.3', 'Search API Backend', 'Contrib Module Patches', 'Twig', 'SCSS', 'Acquia Cloud'],
    metrics: [
      { label: 'Role', value: 'Drupal Developer' },
      { label: 'Search Backend', value: 'Search API Tokenizer Fix' },
      { label: 'Module Health', value: 'Patched Contrib Modules' },
      { label: 'AI Discovery', value: 'LLMS Integration' }
    ],
    featured: true,
    keyContributions: [
      'Diagnosed and resolved Search API tokenizer issues where hyphenated product model numbers were improperly stripped during indexing.',
      'Configured and resolved Drupal Feeds import pipelines, repairing asset mapping and image download synchronization during automated data imports.',
      'Applied critical security patches and Composer updates for Entity Browser, Diff, and Feeds-related modules.',
      'Configured and deployed LLMS module integration to expose structured site discovery (llms.txt) for AI crawlers.',
      'Engineered reusable Auto FAQ accordion paragraph component supporting dynamic brand colour schemes and responsive video embeds.'
    ]
  },
  {
    id: 'leonard-cheshire',
    title: 'Leonard Cheshire',
    subtitle: 'Search Engine Backend Migration & Privacy Architecture',
    category: 'enterprise-drupal',
    clientOrOrg: 'ThisGainIndia / Leonard Cheshire',
    timeframe: '2026',
    description: 'Large-scale non-profit platform maintenance including backend search engine migration from Solr to Database Search, session privacy, and database routine cleanup.',
    longDescription: 'Led backend and architectural improvements for Leonard Cheshire. Executed a complete search pipeline migration from Apache Solr to native Search API Database (search_api_db) with custom indexed view modes, refactored session handling for privacy compliance, and sanitized legacy database triggers.',
    liveUrl: 'https://leonardcheshire.org',
    techStack: ['Drupal 10', 'PHP 8.3', 'Search API DB', 'CleanTalk Privacy', 'Acquia Cloud', 'MySQL', 'Twig'],
    metrics: [
      { label: 'Search Migration', value: 'Solr -> Search API DB' },
      { label: 'Session Privacy', value: 'Cookie-Free Handling' },
      { label: 'Cloud Database', value: 'Cleaned Trigger Routines' },
      { label: 'Error Tracking', value: 'Sentry Production' }
    ],
    featured: true,
    keyContributions: [
      'Migrated search indexing pipeline from Apache Solr to search_api_db with custom rendered item view modes, eliminating external infrastructure overhead while preserving search relevance.',
      'Refactored CleanTalk anti-spam integration to enforce cookie-free session privacy.',
      'Sanitized Acquia Cloud database synchronization by clearing orphan MySQL trigger routines.'
    ]
  },
  {
    id: 'clpe',
    title: 'Centre for Literacy in Primary Education',
    subtitle: 'Commerce Backend Dependency Management & Schema Updates',
    category: 'enterprise-drupal',
    clientOrOrg: 'ThisGainIndia / CLPE',
    timeframe: '2026',
    description: 'Educational publishing and commerce platform security maintenance, Drupal Core 10.6.13 updates, and database schema repairs.',
    longDescription: 'Resolved complex Composer dependency trees and security updates across Drupal Core 10.6.13, Commerce 3.3.6, and Guzzle HTTP client. Executed database schema update hooks repairing commerce_order entity definitions and standardized GDPR consent workflows.',
    liveUrl: 'https://clpe.org.uk',
    techStack: ['Drupal 10', 'Drupal Commerce 3', 'PHP 8.3', 'Guzzle', 'Entity API', 'Composer', 'Git'],
    metrics: [
      { label: 'Core / Security', value: 'Drupal 10.6.13' },
      { label: 'Commerce Engine', value: 'Commerce 3.3.6' },
      { label: 'Schema Fixes', value: 'commerce_order Update Hook' },
      { label: 'Dependencies', value: 'Zero-Vulnerability Build' }
    ],
    featured: false,
    keyContributions: [
      'Resolved complex Composer dependency conflicts across core-recommended, Guzzle, and PSR packages.',
      'Executed custom schema update hooks to repair mismatched commerce_order entity definitions in the database.',
      'Standardized GDPR registration and checkout consent capture workflows.'
    ]
  },
  {
    id: 'kick-it-out',
    title: 'Kick It Out',
    subtitle: 'Campaign & Inclusivity Sports Portal',
    category: 'enterprise-drupal',
    clientOrOrg: 'ThisGainIndia / Kick It Out',
    timeframe: '2026',
    description: 'National equality and inclusion organization web platform featuring responsive campaign layouts, interactive cards, and high-impact media galleries.',
    longDescription: 'Maintained UI components and resolved cross-browser layout bugs on mobile Safari and modern rendering engines.',
    liveUrl: 'https://kickitout.org',
    techStack: ['Drupal', 'PHP', 'Twig', 'CSS3', 'JavaScript', 'Flexbox'],
    metrics: [
      { label: 'Role', value: 'Drupal Developer' },
      { label: 'Layouts', value: 'Campaign Feeds' },
      { label: 'Compatibility', value: 'Cross-Browser' },
      { label: 'Live Site', value: 'kickitout.org' }
    ],
    featured: false,
    keyContributions: [
      'Resolved cross-browser Flexbox rendering anomalies on mobile devices.',
      'Refined campaign card layouts and responsive media embeds.'
    ]
  },

  // --- PREVIOUS COMPANIES (BBG BITBASE, MSOL, SPECBEE, OSSPL) ---
  {
    id: 'takeda-multisite',
    title: 'Takeda Multisite Platform',
    subtitle: 'Healthcare Multisite Design System & Component Library',
    category: 'enterprise-drupal',
    clientOrOrg: 'BBG Bitbase India / Takeda',
    timeframe: '2025 – 2026',
    description: 'Large multisite Drupal platform for Takeda supporting multiple medical and brand portals with a shared design system and reusable component library.',
    longDescription: 'Worked on a large multisite Drupal platform supporting international medical brands (takeda-gastroenterologie.de, dengue.de, passion-haemostaseologie.de). Engineered reusable Twig and SCSS components, interactive JavaScript features, form validation, and dynamic content views.',
    liveUrl: 'https://takeda-gastroenterologie.de',
    techStack: ['Drupal 10', 'PHP 8.3', 'Twig', 'SCSS', 'JavaScript', 'jQuery', 'Pattern Lab', 'DDEV'],
    metrics: [
      { label: 'Role', value: 'Drupal Engineer' },
      { label: 'Scale', value: 'Multisite Platform' },
      { label: 'Sites', value: '3+ Live Portals' },
      { label: 'System', value: 'Shared Design System' }
    ],
    featured: true,
    keyContributions: [
      'Created and customized Twig templates, preprocessors, and SCSS for reusable UI components (hero cards, CTAs, event listings, badges, navigation).',
      'Implemented responsive design for tablet, mobile, and desktop, resolving spacing, alignment, and breakpoint behavior.',
      'Developed interactive JavaScript/jQuery features for modal handling, form state management, and AJAX filtering.',
      'Ensured semantic HTML markup, accessibility compliance, and CSS code quality standards.'
    ]
  },
  {
    id: 'wasl-ae',
    title: 'Wasl Dubai Real Estate',
    subtitle: 'Enterprise Property & Community Management Portal',
    category: 'enterprise-drupal',
    clientOrOrg: 'MSOL Technologies / Wasl',
    timeframe: '2024',
    description: 'High-traffic Middle Eastern real estate portal with custom Webforms, localized UI layouts, and Gulp-automated SCSS pipelines.',
    longDescription: 'Created custom webforms, template overrides, and responsive components based on Figma designs using Twig, HTML, SCSS, PHP, and JavaScript. Maintained asset pipelines with Gulp for production CSS/JS bundling.',
    liveUrl: 'https://wasl.ae/en',
    techStack: ['Drupal 9/10', 'PHP', 'Twig', 'SCSS', 'JavaScript', 'Gulp', 'Lando', 'Webform'],
    metrics: [
      { label: 'Role', value: 'Drupal Developer' },
      { label: 'Client', value: 'Wasl Dubai' },
      { label: 'Design Tool', value: 'Figma to Drupal' },
      { label: 'Environment', value: 'Lando & Drush' }
    ],
    featured: true,
    keyContributions: [
      'Setup local Drupal instances with Lando, Composer, Drush, and enabled Twig debugging.',
      'Built custom Webforms and multi-field property inquiry forms.',
      'Configured Gulp build pipeline to compile SCSS into optimized CSS and minify JS.',
      'Engineered responsive components precisely matching client Figma designs.'
    ]
  },
  {
    id: 'etf-com',
    title: 'ETF.com',
    subtitle: 'Financial Publishing & Fund Analytics Portal',
    category: 'enterprise-drupal',
    clientOrOrg: 'Specbee & QED42 / ETF.com',
    timeframe: '2022 – 2023',
    description: 'Leading financial exchange-traded fund data and publishing platform built with custom themes, Pattern Lab components, and Layout Builder.',
    longDescription: 'Developed a custom Drupal theme from scratch based on Figma designs using HTML, CSS, Sass, JavaScript, template overrides, preprocessing functions, and Gulp. Used Pattern Lab to break down complex financial UI into atomic components.',
    liveUrl: 'https://etf.com',
    techStack: ['Drupal 9', 'Pattern Lab', 'Layout Builder', 'Sass', 'JavaScript', 'Gulp', 'Lando'],
    metrics: [
      { label: 'Role', value: 'Drupal Frontend' },
      { label: 'Architecture', value: 'Pattern Lab' },
      { label: 'Page Builder', value: 'Layout Builder' },
      { label: 'Live Site', value: 'etf.com' }
    ],
    featured: false,
    keyContributions: [
      'Set up theme structures (.info, .libraries, .theme files and template folder hierarchy).',
      'Employed Pattern Lab methodology to build modular atomic UI elements.',
      'Configured Layout Builder allowing editorial teams to construct dynamic pages according to designs.'
    ]
  },
  {
    id: 'indian-government-portals',
    title: 'Indian Government Portals',
    subtitle: 'Accessible Government Websites (GIGW & W3C)',
    category: 'enterprise-drupal',
    clientOrOrg: 'Ornate Software Solution (OSSPL)',
    timeframe: '2018 – 2022',
    description: 'Accessible, responsive public sector web portals for Indian government departments compliant with W3C validation and GIGW guidelines.',
    longDescription: 'Developed accessible, responsive websites for Indian government departments (maef.nic.in, py.gov.in, plantauthority.gov.in). Focused on W3C validation, GIGW guidelines, screen-reader accessibility, multi-language translation, and interactive JavaScript chart widgets.',
    liveUrl: 'https://py.gov.in',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'W3C Accessibility', 'GIGW', 'PHP', 'MySQL'],
    metrics: [
      { label: 'Role', value: 'Web Developer' },
      { label: 'Standard', value: 'GIGW & WCAG' },
      { label: 'Accessibility', value: 'Screen Reader Ready' },
      { label: 'Portals', value: 'maef, py.gov, plant' }
    ],
    featured: false,
    keyContributions: [
      'Enforced strict W3C validation, semantic HTML5, and screen-reader accessibility.',
      'Implemented multi-language translation switchers and RTL/LTR text layouts.',
      'Built interactive JavaScript chart widgets for public data display.'
    ]
  },

  // --- REACTJS & FULL-STACK PROJECTS ---
  {
    id: 'limatech-platform',
    title: 'Limatech Solutions',
    subtitle: 'Enterprise Business & Digital Platform',
    category: 'react-fullstack',
    clientOrOrg: 'Limatech Solutions',
    timeframe: '2025',
    description: 'Scalable enterprise frontend platform built using React, TypeScript, Vite, Zustand, DOMPurify, and Framer Motion.',
    longDescription: 'Engineered a scalable enterprise frontend platform for Limatech Solutions. Implemented type-safe state management with Zustand, sanitization via DOMPurify, fluid responsive animations with Framer Motion, and lightning-fast Vite bundling.',
    liveUrl: 'https://limatechsolution.in',
    techStack: ['React', 'TypeScript', 'Vite', 'Zustand', 'Tailwind CSS', 'Framer Motion', 'DOMPurify'],
    metrics: [
      { label: 'Role', value: 'Frontend Engineer' },
      { label: 'Stack', value: 'React + TypeScript' },
      { label: 'State', value: 'Zustand' },
      { label: 'Live App', value: 'limatechsolution.in' }
    ],
    featured: true,
    keyContributions: [
      'Developed a scalable component architecture using React, TypeScript, and Tailwind CSS.',
      'Implemented centralized client state management using lightweight Zustand stores.',
      'Sanitized dynamic rich content with DOMPurify for security compliance.',
      'Added smooth, accessible micro-interactions with Framer Motion.'
    ]
  },
  {
    id: 'gns-systems',
    title: 'GNS Business Platform',
    subtitle: 'Corporate Digital Presence & Lead Platform',
    category: 'react-fullstack',
    clientOrOrg: 'GNS Systems',
    timeframe: '2025',
    description: 'Corporate digital presence platform focused on technical service showcases, brand communication, and interactive lead capture.',
    longDescription: 'Engineered a modern corporate digital presence platform delivering interactive service showcases, brand storytelling, and high-conversion contact journeys built on modern React tooling.',
    liveUrl: 'https://gns.systems',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Responsive Design'],
    metrics: [
      { label: 'Role', value: 'Frontend Developer' },
      { label: 'Type', value: 'Corporate Platform' },
      { label: 'Focus', value: 'Lead Generation' },
      { label: 'Live App', value: 'gns.systems' }
    ],
    featured: false,
    keyContributions: [
      'Built responsive service showcase layouts and interactive capability cards.',
      'Integrated accessible contact and consultation lead forms.',
      'Optimized asset loading and mobile layout performance.'
    ]
  },
  {
    id: 'mystic-favicon-studio',
    title: 'Mystic Favicon Studio',
    subtitle: 'Vector & Raster Asset Generator Web Application',
    category: 'react-fullstack',
    clientOrOrg: 'Independent Product',
    timeframe: '2026',
    description: 'Interactive web application allowing developers to create, preview, and export multi-resolution favicon assets (16x16 to 512x512, ICO, Apple Touch icons).',
    longDescription: 'Created a developer productivity tool supporting real-time SVG color manipulation, squircle shapes, safe margin guidelines, live browser tab simulations, and one-click ZIP downloads with generated HTML code snippets.',
    liveUrl: 'https://mysticfavicon.tech',
    githubUrl: 'https://github.com/saadkhan955',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Canvas API'],
    metrics: [
      { label: 'Resolutions', value: '16x16 to 512x512' },
      { label: 'Formats', value: 'ICO, PNG, SVG, ZIP' },
      { label: 'Processing', value: 'Client-Side Canvas' },
      { label: 'Live App', value: 'mysticfavicon.tech' }
    ],
    featured: true,
    keyContributions: [
      'Developed real-time canvas rendering pipeline generating multi-format icons in the browser.',
      'Implemented curated modern web design system color palettes and SVG mode selectors.',
      'Built live browser mockup preview simulating tabs, bookmarks, and mobile home screens.'
    ]
  },
  {
    id: 'ainexorium-platform',
    title: 'Ainexorium Platform',
    subtitle: 'EdTech Operations & Administration System',
    category: 'react-fullstack',
    clientOrOrg: 'Ainexorium Digital',
    timeframe: '2026',
    description: 'Component-driven educational management platform with interactive administrative dashboards and data reporting.',
    longDescription: 'Developed an interactive education web platform delivering institutional content, administrative dashboards, and staff management interfaces through a scalable React component system.',
    liveUrl: 'https://ainexorium.com',
    githubUrl: 'https://github.com/saadkhan955',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Modern State'],
    metrics: [
      { label: 'Platform', value: 'React Web Platform' },
      { label: 'Design', value: 'Component-Driven' },
      { label: 'Reporting', value: 'Data Export Tools' },
      { label: 'Live App', value: 'ainexorium.com' }
    ],
    featured: false,
    keyContributions: [
      'Built structured administration dashboards with dynamic role filtering and data views.',
      'Created attendance management and CSV export utilities for institutional records.',
      'Maintained type safety and consistent component styling across all views.'
    ]
  },
  {
    id: 'iws-aquasuite',
    title: 'IWS AquaSuite & Web Platform',
    subtitle: 'Commercial Platform & Business Suite',
    category: 'react-fullstack',
    clientOrOrg: 'Commercial Project',
    timeframe: '2026',
    description: 'Modern full-stack web platform built with TanStack Start, React 19, TypeScript, Tailwind CSS, and automated document print layouts.',
    longDescription: 'Architected and engineered a comprehensive commercial web platform. Built with modern React 19 and TanStack Start, featuring interactive equipment showcases, optimized hero image loading, and dynamic PDF document layout capabilities.',
    liveUrl: 'https://icarewatersolutions.com/',
    githubUrl: 'https://github.com/saadkhan955',
    techStack: ['React 19', 'TanStack Start', 'TypeScript', 'Tailwind CSS', 'Vite', 'React-PDF'],
    metrics: [
      { label: 'React Version', value: 'React 19' },
      { label: 'Performance', value: '98+ Lighthouse' },
      { label: 'Styling', value: 'Tailwind CSS' },
      { label: 'Build Tool', value: 'Vite' }
    ],
    featured: true,
    keyContributions: [
      'Built fast, SEO-optimized page routing using TanStack Start and modern React paradigms.',
      'Implemented responsive product catalogs with detailed specification sheets.',
      'Engineered dynamic print templates and clean document generation layouts.',
      'Applied modern code quality tooling and type-safe component architectures.'
    ]
  },

  // --- CHROME EXTENSIONS & TOOLS ---
  {
    id: 'tabflow',
    title: 'TabFlow',
    subtitle: 'Chrome Extension & Playlist Organizer',
    category: 'chrome-extensions',
    clientOrOrg: 'Open Source / Web Store',
    timeframe: '2026',
    description: 'Manifest V3 browser extension and modern landing page that converts open YouTube tabs into organized, trackable YouTube playlists with instant theme switching.',
    longDescription: 'Created a tab-organizing browser extension built under Chrome Extension Manifest V3 security standards. Features automatic light/dark theme switching, live playlist synchronization, and a dedicated landing page.',
    liveUrl: 'https://tfy.khansaad.dev/',
    githubUrl: 'https://github.com/saadkhan955/tabflow',
    techStack: ['JavaScript (ES6+)', 'Chrome Extension API', 'Tailwind CSS', 'HTML5', 'Cloudflare Pages'],
    metrics: [
      { label: 'Extension Spec', value: 'Chrome MV3' },
      { label: 'Theme Support', value: 'Dark / Light / Auto' },
      { label: 'Live Site', value: 'tfy.khansaad.dev' },
      { label: 'Hosting', value: 'Cloudflare Pages' }
    ],
    featured: false,
    keyContributions: [
      'Engineered tab detection and playlist creation workflows using modern browser extension APIs.',
      'Implemented responsive dark/light theme switching with instant system preference detection.',
      'Designed responsive landing page with full privacy policy documentation.'
    ]
  },
  {
    id: 'tab-url-copier',
    title: 'Tab URL Copier',
    subtitle: 'High-Efficiency Browser Extension',
    category: 'chrome-extensions',
    clientOrOrg: 'Open Source / Web Store',
    timeframe: '2026',
    description: 'Lightweight browser extension allowing instant batch copying of active browser tabs in Markdown, HTML, Plain Text, or CSV formats.',
    longDescription: 'Engineered a developer productivity tool that formats and exports browser tab URLs with customizable templates and keyboard shortcuts.',
    liveUrl: 'https://tuc.khansaad.dev/',
    githubUrl: 'https://github.com/saadkhan955/tab-url-copier',
    techStack: ['JavaScript', 'Chrome Extension API', 'HTML5', 'CSS3', 'Cloudflare Pages'],
    metrics: [
      { label: 'Export Modes', value: 'Markdown, HTML, CSV, Text' },
      { label: 'Performance', value: 'Instant Copy' },
      { label: 'Live Site', value: 'tuc.khansaad.dev' },
      { label: 'Hosting', value: 'Cloudflare Pages' }
    ],
    featured: false,
    keyContributions: [
      'Created multi-format clipboard formatting engine with custom template delimiters.',
      'Deployed official landing page with responsive documentation on Cloudflare Pages.'
    ]
  },
  {
    id: 'automatic-mouse-mover',
    title: 'Automatic Mouse Mover v1.5.0',
    subtitle: 'Native macOS Cocoa Application',
    category: 'tools-oss',
    clientOrOrg: 'Open Source Utility',
    timeframe: '2026',
    description: 'Native macOS menu bar utility built with Objective-C / Swift featuring Universal binary support, configurable motion intervals, and auto-stop timers.',
    longDescription: 'Enhanced and shipped v1.5.0 of the macOS utility, delivering Apple Silicon + Intel Universal binaries, persistent codesigning routines, and low-energy background mouse motion simulation.',
    techStack: ['Objective-C', 'Swift', 'macOS Cocoa', 'Universal Binary'],
    metrics: [
      { label: 'Architecture', value: 'Apple Silicon + Intel' },
      { label: 'Version', value: 'v1.5.0 Release' },
      { label: 'Platform', value: 'macOS Menu Bar' }
    ],
    featured: false,
    liveUrl: 'https://github.com/saadkhan955/automatic-mouse-mover/releases/tag/v1.5.0',
    githubUrl: 'https://github.com/saadkhan955/automatic-mouse-mover',
    keyContributions: [
      'Configured universal binary build pipeline supporting both Apple Silicon and Intel Macs.',
      'Added user-configurable movement interval presets and idle sleep prevention options.'
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'ThisGainIndia (GAIN) Pvt. Ltd.',
    role: 'Drupal Developer & Backend Specialist',
    location: 'Remote',
    period: 'April 2026 – Present',
    current: true,
    description: 'Lead Drupal engineering, custom PHP 8.3 module development, Search API optimization, and Drupal 11 core upgrades across high-profile enterprise client portfolios.',
    projectsSummary: 'Enterprise client projects including rafbf.org, adder.com, leonardcheshire.org, clpe.org.uk, kickitout.org.',
    deliverables: [
      'Designed 2 custom Drupal modules for dynamic social metadata tokens and automated entity usage reporting with XLSX streaming export.',
      'Architected Drupal 11 core upgrades with PHP 8.3 OOP architecture and dependency injection services.',
      'Diagnosed and resolved backend Search API tokenizer and indexing bugs for global product catalogs.',
      'Migrated enterprise search pipelines from Apache Solr to native Search API Database (search_api_db).',
      'Engineered backend Stripe payment integrations with self-healing Webform submission reconciliation.'
    ],
    technologies: ['Drupal 10/11', 'PHP 8.3 OOP', 'Custom Modules', 'Search API', 'Stripe', 'Twig', 'Tailwind CSS', 'DDEV', 'Acquia Cloud']
  },
  {
    company: 'BBG Bitbase India',
    role: 'Drupal Frontend Engineer',
    location: 'Remote',
    period: 'May 2025 – Jan 2026',
    description: 'Gathered and analysed frontend and UI/UX requirements to translate them into Drupal pages, layouts, and components.',
    projectsSummary: 'Takeda multisite platform (takeda-gastroenterologie.de, dengue.de, passion-haemostaseologie.de).',
    deliverables: [
      'Designed and implemented Drupal themes using Twig, SCSS, and JavaScript as per provided designs and style guidelines.',
      'Created reusable Twig templates, preprocessors, and SCSS for components (hero cards, CTAs, navigation, event listings).',
      'Implemented responsive design for mobile, tablet, and desktop with cross-browser compatibility.',
      'Created and enhanced forms with validation including registration forms, modals, and Webform integrations.'
    ],
    technologies: ['Drupal 10', 'PHP 8.3', 'Twig', 'SCSS', 'JavaScript', 'jQuery', 'DDEV']
  },
  {
    company: 'MSOL Technologies Pvt. Ltd.',
    role: 'Drupal Frontend Developer',
    location: 'Remote',
    period: 'April 2024 – Sep 2024',
    description: 'Built custom webforms and components based on Figma design using Twig, HTML, SCSS, PHP, and JavaScript.',
    projectsSummary: 'Wasl Dubai real estate platform (wasl.ae/en).',
    deliverables: [
      'Installed and configured Drupal instances locally using Lando, Composer, and Drush.',
      'Configured Gulp build tools to compile SCSS into CSS and minify JavaScript.',
      'Created custom components and webforms matching Figma design specifications.'
    ],
    technologies: ['Drupal 9/10', 'Lando', 'Twig', 'SCSS', 'Gulp', 'PHP', 'Webform']
  },
  {
    company: 'Specbee & QED42',
    role: 'Drupal Frontend Developer',
    location: 'Remote',
    period: 'Mar 2022 – Jan 2023',
    description: 'Developed Drupal themes from scratch based on Figma designs using HTML, CSS, Sass, JavaScript, template overrides, and Pattern Lab.',
    projectsSummary: 'ETF.com (etf.com), Enterprise publishing platforms.',
    deliverables: [
      'Set up theme structures (.info, .libraries, .theme files and template directories).',
      'Used Pattern Lab to break down UI into smaller reusable components.',
      'Configured Layout Builder to create dynamic pages according to design systems.'
    ],
    technologies: ['Drupal 9', 'Pattern Lab', 'Layout Builder', 'Sass', 'JavaScript', 'Gulp']
  },
  {
    company: 'Ornate Software Solution (OSSPL)',
    role: 'Web Developer',
    location: 'Navi Mumbai',
    period: 'Dec 2018 – Mar 2022',
    description: 'Developed accessible, responsive websites for Indian government departments (maef.nic.in, py.gov.in, plantauthority.gov.in).',
    projectsSummary: 'Indian government department portals.',
    deliverables: [
      'Ensured strict W3C validation, GIGW guidelines, and screen-reader accessibility.',
      'Implemented multi-language translation support and responsive page layouts.',
      'Built interactive JavaScript chart widgets and dynamic data presentation tables.'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'W3C Accessibility', 'PHP', 'MySQL']
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    name: 'Drupal & Backend Architecture',
    description: 'Custom modules, PHP 8.3 OOP, Search API, and core migrations',
    iconName: 'Layers',
    skills: [
      { name: 'Drupal 10 & 11 Core', level: 'Expert', highlight: true },
      { name: 'Custom Module Development', level: 'Expert', highlight: true },
      { name: 'PHP 8.3 & Dependency Injection', level: 'Expert', highlight: true },
      { name: 'Search API (DB & Solr)', level: 'Expert', highlight: true },
      { name: 'Drush & Config Management', level: 'Expert', highlight: true },
      { name: 'Database Schemas & Update Hooks', level: 'Expert', highlight: true },
      { name: 'Stripe & Third-Party APIs', level: 'Expert', highlight: true },
      { name: 'Sanity Headless CMS', level: 'Advanced' }
    ]
  },
  {
    name: 'Frontend & Modern Web',
    description: 'Component-driven user interfaces, SPAs, and responsive design',
    iconName: 'Code',
    skills: [
      { name: 'Twig Templating & SDC', level: 'Expert', highlight: true },
      { name: 'ReactJS & TypeScript', level: 'Expert', highlight: true },
      { name: 'Tailwind CSS & SCSS', level: 'Expert', highlight: true },
      { name: 'TanStack Start & Vite', level: 'Advanced', highlight: true },
      { name: 'JavaScript (ES6+) & jQuery', level: 'Expert', highlight: true },
      { name: 'Pattern Lab & Layout Builder', level: 'Advanced', highlight: true },
      { name: 'Canvas API & SVG Manipulation', level: 'Advanced' },
      { name: 'Responsive Mobile-First UI', level: 'Expert', highlight: true }
    ]
  },
  {
    name: 'Performance & Compliance',
    description: 'Core Web Vitals, accessibility, and GDPR data privacy',
    iconName: 'Zap',
    skills: [
      { name: 'Core Web Vitals (LCP, CLS, INP)', level: 'Expert', highlight: true },
      { name: 'OneTrust & CookiePro GDPR', level: 'Expert', highlight: true },
      { name: 'Google Consent Mode v2', level: 'Advanced', highlight: true },
      { name: 'WCAG 2.1 AA Accessibility', level: 'Expert', highlight: true },
      { name: 'Code Standards (PHPCS / ESLint)', level: 'Expert', highlight: true }
    ]
  },
  {
    name: 'Tools, DevOps & Cloud',
    description: 'Containerized environments, cloud hosting, and CI/CD',
    iconName: 'Terminal',
    skills: [
      { name: 'DDEV & Lando Containers', level: 'Expert', highlight: true },
      { name: 'Composer & NPM / Vite', level: 'Expert', highlight: true },
      { name: 'Acquia Cloud & Pantheon Hosting', level: 'Advanced', highlight: true },
      { name: 'Cloudflare Pages & Workers', level: 'Advanced', highlight: true },
      { name: 'Chrome Extensions (MV3)', level: 'Advanced', highlight: true },
      { name: 'Git & Agile Sprint Workflows', level: 'Expert', highlight: true }
    ]
  }
];

export const ARCHITECTURE_CASE_STUDIES = [
  {
    id: 'custom-modules-services',
    title: 'Custom Drupal Modules & Backend Services',
    category: 'Backend Architecture',
    summary: 'Designing object-oriented custom modules, Symfony services, and dependency injection patterns in Drupal 10/11.',
    impact: 'Enables custom business logic, secure API integrations, and streamlined administrative reporting.',
    points: [
      'Encapsulates business logic in testable, injectable PHP 8.3 services registered in services.yml.',
      'Builds custom token processing, controller endpoints, and streaming XLSX export pipelines.',
      'Executes database schema update hooks to maintain entity data integrity across migrations.'
    ]
  },
  {
    id: 'search-api-optimization',
    title: 'Search API Pipelines & Tokenizer Tuning',
    category: 'Search & Indexing',
    summary: 'Configuring Search API backends (Database & Solr) with customized tokenizers and indexed view modes.',
    impact: 'Resolves search drop-offs on technical model numbers and reduces server query latencies.',
    points: [
      'Customizes fulltext search tokenizers to preserve hyphens and alphanumeric model codes.',
      'Optimizes rendered item view modes for indexing only essential search facets.',
      'Delivers reliable, high-relevance search across large multi-category product portfolios.'
    ]
  },
  {
    id: 'cwv-performance',
    title: 'Core Web Vitals & Component Theming',
    category: 'Performance & Frontend',
    summary: 'Pairing component-driven Twig/Tailwind theming with Core Web Vitals optimizations for sub-second speeds.',
    impact: 'Achieves CLS < 0.02, accelerates LCP, and delivers seamless responsive user experiences.',
    points: [
      'Replaces heavy third-party embeds with lightweight iframe facades to save multiple megabytes on initial load.',
      'Neutralizes Cumulative Layout Shift through CSS layout containment and reserved aspect ratios.',
      'Enforces WCAG 2.1 AA accessibility standards and semantic HTML across all components.'
    ]
  }
];
