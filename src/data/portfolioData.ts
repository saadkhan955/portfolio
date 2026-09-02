import { Project, Experience, SkillGroup } from '../types';

export const PERSONAL_INFO = {
  name: 'Saad Khan',
  role: 'Frontend Developer & Enterprise Drupal Specialist',
  status: 'Drupal Developer at ThisGainIndia (GAIN)',
  location: 'Mumbai, India',
  email: 'saadkhan955@gmail.com',
  github: 'https://github.com/saadkhan955',
  bio: 'Frontend Developer with 5+ years of experience engineering resilient, high-performance web applications across Drupal and React/TypeScript ecosystems. Specialized in component-driven theming, design systems, Core Web Vitals optimization, GDPR compliance, and offline-first modern applications.',
  experienceYears: '5+',
  enterpriseProjectsCount: '15+',
  productionCommits: '350+',
  performanceFocus: '100% On-Device & CWV Focused',
};

export const PROJECTS: Project[] = [
  {
    id: 'raf-benevolent-fund',
    title: 'RAF Benevolent Fund',
    subtitle: 'Enterprise Charity Platform & Donation Engine',
    category: 'enterprise-drupal',
    clientOrOrg: 'Royal Air Force Benevolent Fund (UK)',
    timeframe: '2026',
    description: 'High-traffic fundraising platform featuring custom donation flows, Google Consent Mode v2, and rigorous Core Web Vitals optimizations.',
    longDescription: 'Engineered mission-critical fundraising features and performance overhauls for the UK’s leading RAF charity. Implemented full donation signpost hero widgets, automated Stripe donor metadata capture with self-healing webform sync, OneTrust cookie banner CLS containment, and dynamic social preview metatags.',
    liveUrl: 'https://rafbf.org',
    techStack: ['Drupal 11', 'PHP 8.3', 'Stripe API', 'Twig', 'Tailwind CSS', 'OneTrust GDPR', 'Google Consent Mode v2', 'DDEV', 'Composer'],
    metrics: [
      { label: 'Payload Reduction', value: '-3MB (Video Facade)' },
      { label: 'Core / PHP', value: 'Drupal 11 / PHP 8.3' },
      { label: 'Donation Engine', value: 'Stripe + Gift Aid' },
      { label: 'Compliance', value: 'GDPR OneTrust v2' }
    ],
    featured: true,
    architectureHighlights: [
      'Engineered YouTube iframe facade with srcdoc attributes, eliminating 3MB of blocking player scripts on initial page load.',
      'Containerized OneTrust/CookiePro banners with CSS layout containment, neutralizing layout shifts (CLS < 0.02).',
      'Synchronized Google Consent Mode v2 defaults with Tag Manager datalayer before script container execution.',
      'Built a self-healing Stripe webhook handler capturing donor metadata and auto-reconciling webform submissions.'
    ],
    keyContributions: [
      'Built donation widget component with dynamic hero variations and responsive card layouts.',
      'Upgraded core from Drupal 10 to Drupal 11 with PHP 8.3 config and custom MySQL 5.7 driver bridge.',
      'Added in-page table-of-contents navigation paragraph across News and Event content types.',
      'Built automated administrative entity usage dashboard with xlsx export.'
    ]
  },
  {
    id: 'adder-technology',
    title: 'Adder Technology',
    subtitle: 'Global KVM Manufacturer Multi-region Platform',
    category: 'enterprise-drupal',
    clientOrOrg: 'Adder Technology (Global)',
    timeframe: '2026',
    description: 'Enterprise multi-region platform featuring custom paragraph design systems, Auto FAQ accordion engines, responsive video embeds, and search tokenization.',
    longDescription: 'Maintained and enhanced Adder Technology’s multi-region digital presence. Built versatile Auto FAQ accordion paragraphs supporting dynamic colour schemes, resolved video autoplay positioning across Vimeo and YouTube, patched search hyphen tokenization, and implemented AI discovery endpoints via llms.txt.',
    liveUrl: 'https://adder.com',
    techStack: ['Drupal 10', 'PHP 8.3', 'Twig', 'SCSS', 'Search API', 'llms.txt', 'Acquia Cloud', 'Composer'],
    metrics: [
      { label: 'Design System', value: 'Auto FAQ Accordions' },
      { label: 'Layout Shift', value: '0 CLS on 360 Spin' },
      { label: 'Video Embeds', value: 'Responsive Autoplay' },
      { label: 'AI Discovery', value: 'llms.txt Standard' }
    ],
    featured: true,
    architectureHighlights: [
      'Implemented CSS mask-image techniques for SVG accordion chevrons to seamlessly inherit theme color variables.',
      'Optimized search tokenizer treating hyphens to ensure precise product model searches succeed.',
      'Stabilized responsive 360-degree product viewport aspect ratios to prevent content reflow during asset download.'
    ],
    keyContributions: [
      'Engineered Auto FAQ accordion paragraph component supporting dynamic high-contrast brand colour schemes.',
      'Applied routine security patches for Entity Browser and Diff modules.',
      'Integrated llms.txt configuration to expose structured site discovery to AI search crawlers.'
    ]
  },
  {
    id: 'leonard-cheshire',
    title: 'Leonard Cheshire',
    subtitle: 'National Disability Charity Web Platform',
    category: 'enterprise-drupal',
    clientOrOrg: 'Leonard Cheshire (UK)',
    timeframe: '2026',
    description: 'UK disability charity platform maintenance including Solr-to-Database Search migration, CleanTalk GDPR session privacy, and Acquia SQL trigger sanitization.',
    longDescription: 'Managed critical platform infrastructure and UI improvements for Leonard Cheshire. Executed a complete search engine migration from external Solr to high-performance database search, updated privacy-first session handling for anti-spam systems, and sanitized legacy database triggers.',
    liveUrl: 'https://leonardcheshire.org',
    techStack: ['Drupal 10', 'PHP 8.3', 'Search API DB', 'CleanTalk', 'Acquia Cloud', 'Sentry', 'Twig'],
    metrics: [
      { label: 'Search Backend', value: 'Search API DB' },
      { label: 'Security / Privacy', value: 'Cookie-Free Sessions' },
      { label: 'Error Monitoring', value: 'Sentry Production' },
      { label: 'Cloud Sync', value: '100% Clean Sync' }
    ],
    featured: true,
    architectureHighlights: [
      'Migrated search indexing pipeline from Apache Solr to search_api_db with custom rendered item view modes, cutting infrastructure costs while retaining search relevancy.',
      'Sanitized Acquia database duplication pipeline by eliminating orphan MySQL trigger routines.'
    ],
    keyContributions: [
      'Configured Sentry error monitoring and alerting for production tracking.',
      'Expanded paragraph library with full-bleed aspect ratio choices.'
    ]
  },
  {
    id: 'clpe',
    title: 'Centre for Literacy in Primary Education',
    subtitle: 'Educational Publishing & Commerce Platform',
    category: 'enterprise-drupal',
    clientOrOrg: 'CLPE (UK)',
    timeframe: '2026',
    description: 'Educational publishing and commerce platform security management, GDPR registration opt-ins, and Commerce 3.3.6 updates.',
    longDescription: 'Maintained CLPE’s digital bookstore and training hub. Performed critical Drupal Core 10.6.13 and Guzzle security updates, refactored user registration to be strictly GDPR-compliant with automated data migration, and resolved commerce order entity schema mismatches.',
    liveUrl: 'https://clpe.org.uk',
    techStack: ['Drupal 10', 'Drupal Commerce 3', 'PHP 8.3', 'Guzzle', 'Twig', 'DDEV', 'Git'],
    metrics: [
      { label: 'Core Version', value: 'Drupal 10.6.13' },
      { label: 'Commerce Engine', value: 'Commerce 3.3.6' },
      { label: 'GDPR Consent', value: '100% Compliant' },
      { label: 'Architecture', value: 'Headless / Hybrid' }
    ],
    featured: false,
    architectureHighlights: [
      'Resolved complex Composer dependency conflicts across core-recommended, Guzzle, and PSR packages to enforce zero-vulnerability builds.'
    ],
    keyContributions: [
      'Executed schema update hooks repairing commerce_order entity definitions.',
      'Standardized user consent capture across checkout and registration forms.'
    ]
  },
  {
    id: 'iws-aquasuite',
    title: 'IWS AquaSuite ERP & Web Platform',
    subtitle: 'Full-Stack Water Treatment Enterprise System',
    category: 'react-fullstack',
    clientOrOrg: 'Icare Water Solutions',
    timeframe: '2026',
    description: 'Modern full-stack web platform and enterprise ERP monorepo built with TanStack Start, React 19, Tailwind CSS, and database-driven PDF document generation.',
    longDescription: 'Architected and developed the digital ecosystem for Icare Water Solutions. Features a high-performance marketing web app built with TanStack Start, an ERP monorepo with quotation generation using React-PDF renderer, LCP hero preloading, and Anti-Slop Oxlint quality enforcement.',
    liveUrl: 'https://icarewatersolution.com',
    githubUrl: 'https://github.com/saadkhan955',
    techStack: ['React 19', 'TanStack Start', 'TypeScript', 'Tailwind CSS', 'Vite', 'React-PDF', 'Oxlint'],
    metrics: [
      { label: 'React Engine', value: 'React 19 Reconciler' },
      { label: 'Lighthouse Score', value: '98+ Performance' },
      { label: 'Architecture', value: 'ERP Monorepo' },
      { label: 'Document Engine', value: 'Live PDF Print' }
    ],
    featured: true,
    architectureHighlights: [
      'Resolved React 19 reconciler conflicts in PDF rendering using custom renderer forks and serverExternalPackages bundling.',
      'Preloaded critical hero assets and configured fetchPriority="high" for sub-second Largest Contentful Paint.',
      'Applied strict Oxlint anti-slop rules and TypeScript strict mode across monorepo packages.'
    ],
    keyContributions: [
      'Designed dynamic document print layout with automated browser print invocation.',
      'Built responsive product catalog with equipment dimension sheets and lead forms.'
    ]
  },
  {
    id: 'mystic-favicon-studio',
    title: 'Mystic Favicon Studio',
    subtitle: 'Web & Hybrid Mobile Favicon Generator (PWA + Android)',
    category: 'react-fullstack',
    clientOrOrg: 'Independent Product',
    timeframe: '2026',
    description: 'Comprehensive vector and bitmap favicon generation studio producing multi-resolution assets (16x16 to 512x512, ICO, Android mipmaps, Apple Touch icons).',
    longDescription: 'Created a developer and designer utility supporting live SVG fill adaptation, squircle shape presets, safe margin rulers, real-time browser tab preview simulations, and one-click ZIP packaging with HTML header code snippet generator.',
    liveUrl: 'https://mysticfavicon.tech',
    githubUrl: 'https://github.com/saadkhan955',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Canvas API', 'Capacitor', 'Android SDK'],
    metrics: [
      { label: 'Resolutions', value: '16x16 to 512x512' },
      { label: 'Formats', value: 'ICO, PNG, SVG, ZIP' },
      { label: 'Mobile App', value: 'Android Signed APK' },
      { label: 'Engine', value: 'Client Canvas API' }
    ],
    featured: true,
    architectureHighlights: [
      'Engineered in-browser Canvas rendering pipeline creating crisp multi-layer ICO binaries without server roundtrips.',
      'Configured Android Capacitor release keystore and automated production APK assembly.'
    ],
    keyContributions: [
      'Implemented Top 10 Web Design System color presets and real-time SVG currentColor replacement.',
      'Built live browser mockup preview showing how icons render in Chrome, Safari, and mobile home screens.'
    ]
  },
  {
    id: 'ainexorium-platform',
    title: 'Ainexorium Platform & Mobile App',
    subtitle: 'EdTech Operations Platform & Android Management App',
    category: 'mobile-native',
    clientOrOrg: 'Ainexorium Digital',
    timeframe: '2026',
    description: 'Full-stack education and staff administration platform with automated employee ID retirement pools, attendance tracking, and hybrid Android mobile app.',
    longDescription: 'Engineered Ainexorium’s institutional dashboard and mobile management client. Features dynamic role filtering, automated staff ID reassignment workflows, daily attendance CSV auditing, and strict component-driven state architecture.',
    liveUrl: 'https://ainexorium.com',
    githubUrl: 'https://github.com/saadkhan955',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Capacitor', 'Android APK', 'Oxlint'],
    metrics: [
      { label: 'Platforms', value: 'Web + Android' },
      { label: 'Release Build', value: 'APK v1.0.6' },
      { label: 'Features', value: 'ID Pool Manager' },
      { label: 'Code Quality', value: 'Anti-Slop Linted' }
    ],
    featured: false,
    architectureHighlights: [
      'Built a resilient ID lifecycle management system that moves deactivated employee IDs to a retired pool and prevents sequence gaps.'
    ],
    keyContributions: [
      'Built TeamScreen mobile administration with role filtering pills and instant sync.',
      'Created attendance logging and automated monthly CSV export system.'
    ]
  },
  {
    id: 'youtube-tabs-to-playlist',
    title: 'TabFlow for YouTube',
    subtitle: 'Chrome Extension (MV3) & Playlist Organizer',
    category: 'chrome-extensions',
    clientOrOrg: 'Open Source / Web Store',
    timeframe: '2026',
    description: 'Manifest V3 Chrome extension and landing page that converts all open YouTube tabs into organized, trackable YouTube playlists with instant theme switching.',
    longDescription: 'Created a tab-organizing browser extension built strictly under Chrome Extension Manifest V3 security requirements (zero inline scripts, CSP-compliant). Features automatic light/dark theme synchronization, live playlist sync, and a Cloudflare-hosted landing page.',
    liveUrl: 'https://tfy.khansaad.dev/',
    githubUrl: 'https://github.com/saadkhan955/youtube-tabs-to-playlist',
    techStack: ['JavaScript (ES6+)', 'Chrome Extension API (MV3)', 'Tailwind CSS', 'HTML5', 'Cloudflare Pages'],
    metrics: [
      { label: 'Extension Spec', value: 'Chrome MV3' },
      { label: 'Security', value: '100% CSP Compliant' },
      { label: 'Theme Support', value: 'Dark / Light / Auto' },
      { label: 'Hosting', value: 'Cloudflare Pages' }
    ],
    featured: false,
    architectureHighlights: [
      'Architected zero-inline-script popup interface complying strictly with Chrome Web Store CSP guidelines.'
    ],
    keyContributions: [
      'Engineered instant playlist dropdown synchronization across tabs with one-click reload.',
      'Designed responsive landing page with privacy policy and Google Search Console verification.'
    ]
  },
  {
    id: 'tab-url-copier',
    title: 'Tab URL Copier',
    subtitle: 'High-Efficiency Browser Extension (MV3)',
    category: 'chrome-extensions',
    clientOrOrg: 'Open Source / Web Store',
    timeframe: '2026',
    description: 'Lightweight browser extension allowing instant batch copying of active browser tabs in Markdown, HTML, Plain Text, or CSV formats.',
    longDescription: 'Engineered a developer productivity tool that formats and exports active window or all-window tab URLs with custom templates and keyboard shortcuts.',
    liveUrl: 'https://tuc.khansaad.dev/',
    githubUrl: 'https://github.com/saadkhan955/tab-url-copier',
    techStack: ['JavaScript', 'Chrome Extension API', 'HTML5', 'CSS3', 'Cloudflare Pages'],
    metrics: [
      { label: 'Export Modes', value: 'Markdown, HTML, CSV, Text' },
      { label: 'Performance', value: '< 10ms Execution' },
      { label: 'Security', value: 'Zero External Calls' },
      { label: 'Hosting', value: 'Cloudflare Pages' }
    ],
    featured: false,
    keyContributions: [
      'Created multi-format clipboard formatting engine with custom template delimiters.',
      'Deployed official landing page with OpenGraph metadata and canonical URL mapping.'
    ]
  },
  {
    id: 'passpic-ai',
    title: 'PassPic AI / PassPhoto',
    subtitle: '100% On-Device Biometric Passport Photo Studio',
    category: 'mobile-native',
    clientOrOrg: 'Mobile Product',
    timeframe: '2026',
    description: 'Privacy-first Flutter mobile application generating compliant biometric passport photos completely offline using on-device ML segmentation.',
    longDescription: 'Developed an Android and iOS application utilizing Google ML Kit Selfie Segmentation to isolate portraits, replace backgrounds with compliant studio white/blue tones, and crop against international passport aspect ratio templates without network calls.',
    techStack: ['Flutter', 'Dart', 'Google ML Kit', 'TFLite', 'CustomPainter', 'Image Processing'],
    metrics: [
      { label: 'Privacy', value: '100% Offline (No Cloud)' },
      { label: 'ML Engine', value: 'Selfie Segmentation' },
      { label: 'Min SDK', value: 'Android SDK 21+' },
      { label: 'Network Calls', value: '0 (Air-Gapped)' }
    ],
    featured: false,
    architectureHighlights: [
      'Strict offline architecture guaranteeing zero user photo telemetry or cloud uploads.',
      'Pixel-level coordinate mapping between CustomPainter viewfinder overlay and camera buffer matrix.'
    ],
    keyContributions: [
      'Built viewport cropping engine with dynamic DPI print grid generator.'
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
    techStack: ['Objective-C', 'Swift', 'macOS Cocoa', 'Universal Binary', 'Code Signing'],
    metrics: [
      { label: 'Architecture', value: 'Apple Silicon + Intel' },
      { label: 'Version', value: 'v1.5.0 Release' },
      { label: 'Resource Impact', value: '< 0.1% CPU Usage' }
    ],
    featured: false,
    keyContributions: [
      'Configured automated universal binary build and DMG packaging script.',
      'Added user-configurable movement interval presets and idle sleep prevention.'
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'ThisGainIndia (GAIN) Pvt. Ltd.',
    role: 'Drupal Developer',
    location: 'Remote',
    period: 'April 2026 – Present',
    current: true,
    description: 'Lead Drupal engineering, core upgrades, security remediation, and custom component development across high-profile enterprise client portfolios.',
    projectsSummary: 'RAF Benevolent Fund (rafbf.org), Adder Technology (adder.com), Leonard Cheshire (leonardcheshire.org), CLPE (clpe.org.uk), Kick It Out (kickitout.org), RCoA CPOC.',
    deliverables: [
      'Architected Drupal 11 upgrades with PHP 8.3 migrations and custom MySQL driver bridges.',
      'Engineered Stripe donation workflows with self-healing webform sync and Gift Aid tax compliance.',
      'Executed Solr-to-Database Search migration (search_api_db) for Leonard Cheshire.',
      'Neutralized Cumulative Layout Shift (CLS) on major portals via OneTrust CSS layout containment.',
      'Integrated Google Consent Mode v2 and eliminated 3MB player payloads with YouTube iframe facades.'
    ],
    technologies: ['Drupal 10/11', 'PHP 8.3', 'Twig', 'Tailwind CSS', 'Search API', 'Stripe', 'OneTrust', 'DDEV', 'Acquia Cloud']
  },
  {
    company: 'BBG Bitbase India',
    role: 'Drupal Frontend Engineer',
    location: 'Remote',
    period: 'May 2025 – Jan 2026',
    description: 'Spearheaded frontend architecture, design system implementation, and component-driven theming for multisite enterprise platforms.',
    projectsSummary: 'Takeda Multisite Healthcare Platform (takeda-gastroenterologie.de, dengue.de, passion-haemostaseologie.de).',
    deliverables: [
      'Developed reusable Twig component libraries (hero cards, CTAs, navigation, modals, event listings) matching Figma specifications.',
      'Implemented responsive design systems across desktop, tablet, and mobile with cross-browser compatibility.',
      'Built JavaScript & jQuery interactive features including dynamic form state management, modals, and AJAX filtering.'
    ],
    technologies: ['Drupal 10', 'PHP 8.3', 'Twig', 'SCSS', 'JavaScript (ES6+)', 'Pattern Lab', 'DDEV']
  },
  {
    company: 'MSOL Technologies Pvt. Ltd.',
    role: 'Drupal Frontend Developer',
    location: 'Remote',
    period: 'April 2024 – Sep 2024',
    description: 'Built custom webforms, template overrides, and responsive themes from Figma designs for Middle Eastern enterprise clients.',
    projectsSummary: 'Wasl Dubai Real Estate Portal (wasl.ae/en).',
    deliverables: [
      'Scaffolded local Lando development environments, Composer workflows, and Drush automation.',
      'Configured Gulp asset compilation pipelines for SCSS and JavaScript minification.',
      'Integrated custom Webforms and preprocessing hooks for localized RTL/LTR experiences.'
    ],
    technologies: ['Drupal 9/10', 'Lando', 'Twig', 'SCSS', 'Gulp', 'PHP', 'Webform']
  },
  {
    company: 'Specbee & QED42',
    role: 'Drupal Frontend Developer',
    location: 'Remote',
    period: 'Mar 2022 – Jan 2023',
    description: 'Engineered component-based themes, Pattern Lab component libraries, and Layout Builder integrations.',
    projectsSummary: 'ETF.com (etf.com), Enterprise Publishing Platforms.',
    deliverables: [
      'Built Drupal themes from scratch with Pattern Lab design systems and atomic components.',
      'Configured Layout Builder templates allowing content teams to construct custom landing pages.'
    ],
    technologies: ['Drupal 9', 'Pattern Lab', 'Layout Builder', 'Sass', 'JavaScript', 'Gulp']
  },
  {
    company: 'Ornate Software Solution (OSSPL)',
    role: 'Web Developer',
    location: 'Navi Mumbai',
    period: 'Dec 2018 – Mar 2022',
    description: 'Developed accessible, high-compliance government portals compliant with W3C and GIGW (Guidelines for Indian Government Websites).',
    projectsSummary: 'Indian Government Portals (maef.nic.in, py.gov.in, plantauthority.gov.in).',
    deliverables: [
      'Ensured strict WCAG 2.1 AA screen-reader accessibility and multilingual translation support.',
      'Built interactive JavaScript data chart widgets and responsive government information dashboards.'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Accessibility (WCAG/GIGW)', 'PHP', 'MySQL']
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    name: 'Drupal & CMS Architecture',
    description: 'Enterprise multisite systems, core upgrades, and headless APIs',
    iconName: 'Layers',
    skills: [
      { name: 'Drupal 10 & 11 Core', level: 'Expert', highlight: true },
      { name: 'Twig & SDC Theming', level: 'Expert', highlight: true },
      { name: 'PHP 8.3 & OOP Architecture', level: 'Expert', highlight: true },
      { name: 'Search API (DB & Solr)', level: 'Expert', highlight: true },
      { name: 'Custom Modules & Preprocessors', level: 'Expert', highlight: true },
      { name: 'Drush & Configuration Management', level: 'Expert', highlight: true },
      { name: 'Sanity Headless CMS', level: 'Advanced' },
      { name: 'Layout Builder & Pattern Lab', level: 'Advanced' }
    ]
  },
  {
    name: 'Modern Frontend & React',
    description: 'Type-safe SPAs, SSR monorepos, and responsive UI engineering',
    iconName: 'Code',
    skills: [
      { name: 'React 19 & React 18', level: 'Expert', highlight: true },
      { name: 'TypeScript', level: 'Expert', highlight: true },
      { name: 'Tailwind CSS (v3 & v4)', level: 'Expert', highlight: true },
      { name: 'TanStack Start & Router', level: 'Advanced', highlight: true },
      { name: 'Vite & Build Tooling', level: 'Expert', highlight: true },
      { name: 'Zustand & State Machines', level: 'Advanced' },
      { name: 'Modern CSS & Flexbox/Grid', level: 'Expert', highlight: true },
      { name: 'Canvas & SVG Manipulation', level: 'Advanced' }
    ]
  },
  {
    name: 'Performance & Compliance',
    description: 'Sub-second loads, zero layout shifts, and strict GDPR privacy',
    iconName: 'Zap',
    skills: [
      { name: 'Core Web Vitals (LCP, CLS, INP)', level: 'Expert', highlight: true },
      { name: 'OneTrust & CookiePro GDPR', level: 'Expert', highlight: true },
      { name: 'Google Consent Mode v2', level: 'Advanced', highlight: true },
      { name: 'Responsive WebP Image Pipelines', level: 'Expert', highlight: true },
      { name: 'Iframe Facade Payload Optimization', level: 'Expert', highlight: true },
      { name: 'WCAG 2.1 AA Accessibility', level: 'Expert', highlight: true }
    ]
  },
  {
    name: 'Tools, DevOps & Mobile',
    description: 'Containerized environments, cloud hosting, and cross-platform builds',
    iconName: 'Terminal',
    skills: [
      { name: 'DDEV & Lando Containers', level: 'Expert', highlight: true },
      { name: 'Composer & NPM Ecosystems', level: 'Expert', highlight: true },
      { name: 'Acquia Cloud & Pantheon Hosting', level: 'Advanced', highlight: true },
      { name: 'Cloudflare Pages & Workers', level: 'Advanced', highlight: true },
      { name: 'Chrome Extensions (MV3)', level: 'Advanced', highlight: true },
      { name: 'Android Capacitor & APK Releases', level: 'Advanced' },
      { name: 'Flutter (Offline ML Kit)', level: 'Proficient' },
      { name: 'Git & Agile Sprint Workflows', level: 'Expert', highlight: true }
    ]
  }
];

export const ARCHITECTURE_CASE_STUDIES = [
  {
    id: 'cwv-opt',
    title: 'Core Web Vitals & 3MB Payload Elimination',
    category: 'Performance Engineering',
    summary: 'Optimized RAF Benevolent Fund portal by converting heavy third-party YouTube embeds into native lightweight facades and containing cookie banner shifts.',
    impact: 'Reduced initial JavaScript transfer by 3MB; achieved CLS < 0.02 and boosted mobile PageSpeed scores significantly.',
    points: [
      'Replaced default iframe players with custom srcdoc facades that only initialize on explicit user intent.',
      'Applied CSS contain: layout size on dynamic OneTrust elements to prevent DOM reflow.',
      'Implemented native loading="lazy" and preconnect hints for donation APIs in html.html.twig.'
    ]
  },
  {
    id: 'search-migration',
    title: 'Solr to Search API DB Migration',
    category: 'Backend & Infrastructure',
    summary: 'Migrated Leonard Cheshire search backend from an external Apache Solr cluster to native Drupal database search (search_api_db).',
    impact: 'Simplified cloud infrastructure, eliminated external search network latency, and resolved indexing warnings.',
    points: [
      'Configured custom search_index view mode for rendered items to optimize token indexing.',
      'Maintained exact fulltext relevance filtering and facet compatibility across content types.'
    ]
  },
  {
    id: 'stripe-self-healing',
    title: 'Self-Healing Stripe Donation Architecture',
    category: 'Payment Integration',
    summary: 'Engineered Stripe donor metadata capture and error recovery mechanism for charity campaign forms.',
    impact: 'Prevented lost donation records due to browser drop-offs or network interruptions; 100% submission reconciliation.',
    points: [
      'Attached structured donor metadata to Stripe payment intent sessions.',
      'Built asynchronous fallback reconciliation hook to automatically create missing webform submission records.'
    ]
  },
  {
    id: 'offline-ml',
    title: '100% On-Device ML Biometric Pipeline',
    category: 'Privacy & Mobile Engineering',
    summary: 'Built PassPic AI Flutter application generating compliant biometric passport photos without sending images to any cloud API.',
    impact: 'Zero cloud latency, zero server hosting costs, and complete privacy compliance for biometric data.',
    points: [
      'Employed Google ML Kit Selfie Segmentation TFLite model running locally on the device GPU/NPU.',
      'Synchronized CustomPainter overlay coordinate bounding boxes with raw camera pixel buffers.'
    ]
  }
];
