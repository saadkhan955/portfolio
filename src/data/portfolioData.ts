import { Project, Experience, SkillGroup } from '../types';

export const PERSONAL_INFO = {
  name: 'Saad Khan',
  role: 'Frontend Developer & Enterprise Drupal Specialist',
  status: 'Drupal Developer at ThisGainIndia (GAIN)',
  location: 'Mumbai, India',
  email: 'saadkhan955@gmail.com',
  github: 'https://github.com/saadkhan955',
  bio: 'Frontend Developer with 5+ years of experience building responsive, scalable, and user-centric web applications across Drupal and ReactJS ecosystems. Specialized in Drupal theming, component-driven design systems, Core Web Vitals optimization, and modern frontend engineering.',
  experienceYears: '5+',
  enterpriseProjectsCount: '15+',
  productionCommits: '350+',
  performanceFocus: 'Performance & Accessibility Focused',
};

export const PROJECTS: Project[] = [
  // --- GAIN ENTERPRISE DRUPAL PROJECTS ---
  {
    id: 'raf-benevolent-fund',
    title: 'RAF Benevolent Fund',
    subtitle: 'Enterprise Charity Web Platform & Content Experience',
    category: 'enterprise-drupal',
    clientOrOrg: 'ThisGainIndia / RAFBF',
    timeframe: '2026',
    description: 'High-traffic enterprise web platform featuring responsive component-driven theming, dynamic content views, and Core Web Vitals optimizations.',
    longDescription: 'Collaborated on frontend development, theme styling, and user interface enhancements for a major UK charity platform. Built reusable Twig components, optimized asset loading for fast page speeds, and ensured accessible, cross-browser compatible layouts.',
    liveUrl: 'https://rafbf.org',
    techStack: ['Drupal 11', 'PHP 8.3', 'Twig', 'Tailwind CSS', 'JavaScript', 'HTML5', 'DDEV', 'Composer'],
    metrics: [
      { label: 'Role', value: 'Frontend / Drupal' },
      { label: 'Platform', value: 'Drupal 11' },
      { label: 'Focus', value: 'Performance & UI' },
      { label: 'Standards', value: 'WCAG 2.1 AA' }
    ],
    featured: true,
    keyContributions: [
      'Developed responsive hero and card components using custom Twig templates and modern CSS.',
      'Created and customized Drupal Views to fetch and display dynamic content sections and media listings.',
      'Implemented frontend performance improvements to optimize Core Web Vitals and user experience.',
      'Ensured cross-browser compatibility and mobile responsiveness across devices.'
    ]
  },
  {
    id: 'adder-technology',
    title: 'Adder Technology',
    subtitle: 'Global Technology Manufacturer Multi-Region Platform',
    category: 'enterprise-drupal',
    clientOrOrg: 'ThisGainIndia / Adder',
    timeframe: '2026',
    description: 'Global multi-region website featuring custom UI components, responsive accordion layouts, video embeds, and accessible design system styling.',
    longDescription: 'Implemented frontend features and UI component styling for a global technology manufacturer. Built customizable accordion layouts, streamlined responsive media presentations, and ensured seamless design consistency across regions.',
    liveUrl: 'https://adder.com',
    techStack: ['Drupal 10', 'PHP 8.3', 'Twig', 'SCSS', 'JavaScript', 'HTML5', 'Acquia Cloud'],
    metrics: [
      { label: 'Role', value: 'Frontend Developer' },
      { label: 'Scope', value: 'Multi-Region' },
      { label: 'UI Focus', value: 'Design System' },
      { label: 'Components', value: 'Interactive UI' }
    ],
    featured: true,
    keyContributions: [
      'Built reusable accordion and content paragraph components supporting flexible colour variations.',
      'Enhanced responsive video presentation and interactive media elements across product pages.',
      'Refactored styles for maintainability and alignment with brand design guidelines.',
      'Maintained theme styling adherence to agreed development processes and timelines.'
    ]
  },
  {
    id: 'leonard-cheshire',
    title: 'Leonard Cheshire',
    subtitle: 'National Non-Profit Digital Presence',
    category: 'enterprise-drupal',
    clientOrOrg: 'ThisGainIndia / Leonard Cheshire',
    timeframe: '2026',
    description: 'Large-scale accessibility-first digital presence delivering structured content navigation, search discovery, and responsive page layouts.',
    longDescription: 'Maintained and developed user interface components and content structures for a leading non-profit organization. Focused on high-contrast accessibility standards, search page enhancements, and clean component theming.',
    liveUrl: 'https://leonardcheshire.org',
    techStack: ['Drupal 10', 'PHP 8.3', 'Twig', 'Search API', 'CSS3', 'JavaScript', 'Acquia Cloud'],
    metrics: [
      { label: 'Role', value: 'Drupal Developer' },
      { label: 'Focus', value: 'Accessibility' },
      { label: 'Theming', value: 'Component-Driven' },
      { label: 'Navigation', value: 'Dynamic Menus' }
    ],
    featured: true,
    keyContributions: [
      'Maintained responsive themes and layout templates ensuring accessibility compliance.',
      'Customized search results pages and content listing views.',
      'Integrated Webforms and custom layout blocks for campaign initiatives.'
    ]
  },
  {
    id: 'clpe',
    title: 'Centre for Literacy in Primary Education',
    subtitle: 'Educational Publishing & Literacy Platform',
    category: 'enterprise-drupal',
    clientOrOrg: 'ThisGainIndia / CLPE',
    timeframe: '2026',
    description: 'Educational publishing hub providing digital learning resources, book listings, and streamlined user account journeys.',
    longDescription: 'Contributed to website maintenance, module integration, and user interface improvements. Focused on form validation, user registration journeys, and reliable template rendering.',
    liveUrl: 'https://clpe.org.uk',
    techStack: ['Drupal 10', 'PHP 8.3', 'Twig', 'Commerce', 'HTML5', 'CSS3', 'Git'],
    metrics: [
      { label: 'Role', value: 'Drupal Developer' },
      { label: 'Domain', value: 'Education' },
      { label: 'Modules', value: 'Custom & Contrib' },
      { label: 'Journeys', value: 'User Experience' }
    ],
    featured: false,
    keyContributions: [
      'Integrated and configured Drupal modules and custom Webforms.',
      'Customized user registration and account interaction flows.',
      'Ensured reliable template rendering and clean frontend code standards.'
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
    longDescription: 'Maintained frontend UI components and resolved cross-browser layout bugs on mobile Safari and modern rendering engines.',
    liveUrl: 'https://kickitout.org',
    techStack: ['Drupal', 'PHP', 'Twig', 'CSS3', 'JavaScript', 'Flexbox'],
    metrics: [
      { label: 'Role', value: 'Frontend Developer' },
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
    techStack: ['Drupal 10', 'Twig', 'SCSS', 'JavaScript', 'jQuery', 'Pattern Lab', 'DDEV', 'Composer'],
    metrics: [
      { label: 'Role', value: 'Frontend Engineer' },
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
      { label: 'Role', value: 'Frontend Developer' },
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

  // --- REACTJS PROJECTS (FROM RESUME & MONOREPOS) ---
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
    liveUrl: 'https://icarewatersolutions.com',
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
    id: 'youtube-tabs-to-playlist',
    title: 'TabFlow for YouTube',
    subtitle: 'Chrome Extension & Playlist Organizer',
    category: 'chrome-extensions',
    clientOrOrg: 'Open Source / Web Store',
    timeframe: '2026',
    description: 'Manifest V3 browser extension and modern landing page that converts open YouTube tabs into organized, trackable YouTube playlists with instant theme switching.',
    longDescription: 'Created a tab-organizing browser extension built under Chrome Extension Manifest V3 security standards. Features automatic light/dark theme switching, live playlist synchronization, and a dedicated landing page.',
    liveUrl: 'https://tfy.khansaad.dev/',
    githubUrl: 'https://github.com/saadkhan955/youtube-tabs-to-playlist',
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
    keyContributions: [
      'Configured universal binary build pipeline supporting both Apple Silicon and Intel Macs.',
      'Added user-configurable movement interval presets and idle sleep prevention options.'
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
    description: 'Gather and analyse requirements, produce technical designs, and build web applications using Drupal CMS.',
    projectsSummary: 'Enterprise client projects including rafbf.org, adder.com, leonardcheshire.org, clpe.org.uk, kickitout.org.',
    deliverables: [
      'Creating and customizing Views to fetch and display dynamic content sections, blocks, and media listings.',
      'Integrating and configuring custom Drupal modules, Webforms, and third-party services.',
      'Performing routine Drupal core and module security updates, maintenance, and bug fixes.',
      'Maintaining website adherence to development processes, agreed timelines, and coding standards.',
      'Testing and debugging functionality to ensure reliable, error-free pages.'
    ],
    technologies: ['Drupal 10/11', 'PHP 8.3', 'Twig', 'Tailwind CSS', 'JavaScript', 'Webform', 'DDEV', 'Composer']
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
    name: 'Drupal & CMS Architecture',
    description: 'Enterprise multisite systems, custom theming, and layout builders',
    iconName: 'Layers',
    skills: [
      { name: 'Drupal (7/8/10/11)', level: 'Expert', highlight: true },
      { name: 'Twig Templating & SDC', level: 'Expert', highlight: true },
      { name: 'PHP 8.3 & Preprocessors', level: 'Expert', highlight: true },
      { name: 'Drush & Configuration Management', level: 'Expert', highlight: true },
      { name: 'Views & Media Configurations', level: 'Expert', highlight: true },
      { name: 'Webforms & Custom Blocks', level: 'Expert', highlight: true },
      { name: 'Layout Builder & Pattern Lab', level: 'Advanced' },
      { name: 'Sanity Headless CMS', level: 'Advanced' }
    ]
  },
  {
    name: 'Frontend & Modern Web',
    description: 'Component-driven user interfaces, SPAs, and responsive design',
    iconName: 'Code',
    skills: [
      { name: 'ReactJS & TypeScript', level: 'Expert', highlight: true },
      { name: 'HTML5 & Semantic Markup', level: 'Expert', highlight: true },
      { name: 'CSS3 / SCSS / PostCSS', level: 'Expert', highlight: true },
      { name: 'Tailwind CSS', level: 'Expert', highlight: true },
      { name: 'JavaScript (ES6+) & jQuery', level: 'Expert', highlight: true },
      { name: 'TanStack Start & Vite', level: 'Advanced', highlight: true },
      { name: 'Responsive Mobile-First Design', level: 'Expert', highlight: true },
      { name: 'Canvas API & SVG Manipulation', level: 'Advanced' }
    ]
  },
  {
    name: 'Performance & Quality',
    description: 'Core Web Vitals, accessibility, and cross-browser reliability',
    iconName: 'Zap',
    skills: [
      { name: 'Core Web Vitals Optimization', level: 'Expert', highlight: true },
      { name: 'WCAG 2.1 AA Accessibility', level: 'Expert', highlight: true },
      { name: 'Cross-Browser Compatibility', level: 'Expert', highlight: true },
      { name: 'Image Optimization & WebP', level: 'Expert', highlight: true },
      { name: 'Code Standards (PHPCS / ESLint)', level: 'Expert', highlight: true }
    ]
  },
  {
    name: 'Tools & Workflow',
    description: 'Local development environments, build systems, and Agile collaboration',
    iconName: 'Terminal',
    skills: [
      { name: 'Git & Version Control', level: 'Expert', highlight: true },
      { name: 'DDEV & Lando Containers', level: 'Expert', highlight: true },
      { name: 'Composer & NPM / Vite', level: 'Expert', highlight: true },
      { name: 'Cloudflare Pages & Workers', level: 'Advanced', highlight: true },
      { name: 'Chrome Extension Development (MV3)', level: 'Advanced', highlight: true },
      { name: 'Jira & ClickUp Sprint Management', level: 'Expert', highlight: true }
    ]
  }
];

export const ARCHITECTURE_CASE_STUDIES = [
  {
    id: 'component-theming',
    title: 'Component-Driven Theming & Design Systems',
    category: 'Frontend Architecture',
    summary: 'Standardizing UI building blocks across enterprise platforms using reusable Twig templates, modern SCSS/Tailwind, and component-first architectures.',
    impact: 'Accelerates feature delivery, maintains brand consistency across multi-page portals, and minimizes styling regressions.',
    points: [
      'Encapsulates markup, styles, and behaviors into modular, reusable UI components.',
      'Implements flexible layout variations (hero sections, cards, modals, navigation) from Figma specifications.',
      'Ensures semantic HTML5 structure with strict accessibility compliance.'
    ]
  },
  {
    id: 'cwv-performance',
    title: 'Core Web Vitals & Asset Optimization',
    category: 'Performance Engineering',
    summary: 'Optimizing high-traffic enterprise portals for fast loading times, responsive interactions, and zero visual layout shifts.',
    impact: 'Substantially boosts Lighthouse performance scores and improves search engine ranking signals.',
    points: [
      'Implements modern image loading strategies (WebP formats, responsive picture elements, native lazy-loading).',
      'Minimizes parser-blocking JavaScript payloads and defers non-critical assets.',
      'Neutralizes Cumulative Layout Shift (CLS) by reserving dimensional aspect ratios for dynamic embeds.'
    ]
  },
  {
    id: 'accessible-forms',
    title: 'Responsive & Accessible Form Journeys',
    category: 'User Experience',
    summary: 'Designing intuitive, accessible form interfaces, interactive filters, and client-side validation workflows.',
    impact: 'Enhances form conversion rates and guarantees full keyboard navigation and screen-reader usability.',
    points: [
      'Builds multi-step Webforms with clear error feedback and instant validation.',
      'Ensures full WCAG 2.1 AA keyboard navigation, high color contrast, and proper ARIA labels.',
      'Integrates smooth client-side filtering and dynamic modal handling.'
    ]
  }
];
