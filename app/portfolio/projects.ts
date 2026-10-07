export type PortfolioProject = {
  slug: string
  title: string
  category: string
  desc: string
  challenge: string
  outcome: string
  tags: string[]
  color: string
  category_color: string
  image: string
  gallery?: Array<{ src: string; alt: string; caption: string }>
  demoSummary: string
  problem: string
  solution: string[]
  metrics: Array<{ label: string; value: string }>
  timeline: string
  clientType: string
  demoHref: string
  codeHref?: string
}

export const projects: PortfolioProject[] = [
  {
    slug: 'ai-knowledge-assistant',
    title: 'AI Workflow Automation Platform',
    category: 'AI Solution',
    desc: 'An AI-powered workflow automation platform for building, monitoring, and improving multi-step business processes across connected tools.',
    challenge: 'Operations teams needed a clear way to automate complex processes without losing visibility, control, or human approval at critical decisions.',
    outcome: 'Delivered a cohesive product experience spanning workflow design, AI-powered processing, integrations, run diagnostics, and performance analytics.',
    tags: ['AI Automation', 'Workflow Builder', 'Integrations', 'Analytics', 'SaaS'],
    color: 'from-cyan-700 to-brand-800',
    category_color: 'bg-cyan-600/20 text-cyan-700',
    image: '/Portfolio/ChatGPT Image Jun 15, 2026, 03_34_23 PM (4).png',
    gallery: [
      { src: '/Portfolio/ChatGPT Image Jun 16, 2026, 07_31_49 AM (8).png', alt: 'FlowForge visual AI workflow builder', caption: 'Visual workflow builder with AI classification, structured data extraction, conditional approval, and connected actions.' },
      { src: '/Portfolio/ChatGPT Image Jun 16, 2026, 07_31_49 AM (7).png', alt: 'FlowForge workflow run monitoring', caption: 'Run monitoring with execution status, task progress, timing, and node-level error diagnostics.' },
      { src: '/Portfolio/ChatGPT Image Jun 16, 2026, 07_31_49 AM (6).png', alt: 'FlowForge automation analytics dashboard', caption: 'Automation analytics covering run volume, success rates, runtime, productivity, and workflow impact.' },
      { src: '/Portfolio/ChatGPT Image Jun 16, 2026, 07_31_49 AM (5).png', alt: 'FlowForge integrations management', caption: 'Integration management for CRM, communication, productivity, and custom webhook connections.' },
    ],
    demoSummary: 'Product walkthrough covering the visual workflow builder, connected apps, execution monitoring, and automation analytics.',
    problem: 'Business automation often becomes fragmented across scripts and tools, making workflows difficult to build, inspect, troubleshoot, and govern.',
    solution: [
      'Designed a visual builder for triggers, AI classification, structured extraction, branching conditions, approvals, and downstream actions.',
      'Unified third-party integrations and connection health in one operational workspace.',
      'Added run-level diagnostics and analytics so teams can monitor reliability, investigate failures, and measure automation performance.',
    ],
    metrics: [
      { label: 'Product Area', value: 'AI + SaaS' },
      { label: 'Core Views', value: '5' },
      { label: 'Integrations Shown', value: '8' },
    ],
    timeline: 'Confidential',
    clientType: 'B2B workflow automation platform',
    demoHref: '/portfolio/demo/ai-knowledge-assistant',
  },
  {
    slug: 'saas-analytics-dashboard',
    title: 'NovaBuild Business Website',
    category: 'Business Website',
    desc: 'A polished, conversion-focused website for a construction and design company, bringing services, project work, expertise, and lead generation into one consistent digital presence.',
    challenge: 'The business needed to communicate credibility quickly while helping prospective clients understand its services, evaluate past work, and make contact without friction.',
    outcome: 'Delivered a complete multi-page business experience with a confident visual identity, clear service architecture, project discovery, editorial content, and focused inquiry paths.',
    tags: ['Business Website', 'Responsive Design', 'UX/UI', 'Content Architecture'],
    color: 'from-slate-800 to-amber-700',
    category_color: 'bg-amber-500/15 text-amber-700',
    image: '/Portfolio/Business Site Portfolio/ChatGPT Image May 21, 2026, 12_43_00 PM (1).png',
    gallery: [
      { src: '/Portfolio/Business Site Portfolio/ChatGPT Image May 21, 2026, 12_43_00 PM (2).png', alt: 'NovaBuild company about page', caption: 'An authority-building About page combining company positioning, team imagery, values, and credibility signals.' },
      { src: '/Portfolio/Business Site Portfolio/ChatGPT Image May 21, 2026, 12_43_00 PM (3).png', alt: 'NovaBuild construction services page', caption: 'A scannable services page organizing six construction and design capabilities into clear customer choices.' },
      { src: '/Portfolio/Business Site Portfolio/ChatGPT Image May 21, 2026, 12_43_00 PM (4).png', alt: 'NovaBuild project portfolio page', caption: 'A visual project portfolio with category navigation and strong imagery for commercial, residential, renovation, and interior work.' },
      { src: '/Portfolio/Business Site Portfolio/ChatGPT Image May 21, 2026, 12_43_01 PM (5).png', alt: 'NovaBuild editorial blog article', caption: 'An editorial article layout supporting expertise, organic discovery, author credibility, and related content exploration.' },
      { src: '/Portfolio/Business Site Portfolio/ChatGPT Image May 21, 2026, 12_43_01 PM (6).png', alt: 'NovaBuild contact and lead generation page', caption: 'A direct lead-generation experience combining contact details, service qualification, inquiry form, and location context.' },
    ],
    demoSummary: 'Multi-page corporate website walkthrough covering brand positioning, services, project proof, editorial content, and lead generation.',
    problem: 'Construction buyers need immediate confidence in a firm’s capabilities, but disconnected service information and weak project presentation can make evaluation difficult.',
    solution: [
      'Created a premium visual system built around architectural imagery, navy surfaces, and a restrained gold accent.',
      'Structured services and project categories so visitors can evaluate capabilities and relevant work quickly.',
      'Connected company proof, editorial expertise, and clear inquiry paths across the complete customer journey.',
    ],
    metrics: [
      { label: 'Page Templates', value: '6' },
      { label: 'Service Areas', value: '6' },
      { label: 'Primary Goal', value: 'Lead Gen' },
    ],
    timeline: 'Confidential',
    clientType: 'Construction and design business',
    demoHref: '/portfolio/demo/saas-analytics-dashboard',
  },
  {
    slug: 'two-sided-marketplace-mvp',
    title: 'Two-Sided Marketplace MVP',
    category: 'Startup MVP',
    desc: 'A marketplace connecting independent consultants with SMB clients. Includes service listings, booking, escrow payments, and review system.',
    challenge: 'First-time founders needed an MVP to validate their concept and attract seed investment.',
    outcome: 'Launched in 8 weeks. Secured $400k seed round using the live product as a demo.',
    tags: ['React', 'Node.js', 'Firebase', 'Stripe', 'Vercel'],
    color: 'from-purple-700 to-brand-700',
    category_color: 'bg-purple-600/20 text-purple-400',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    demoSummary: 'Marketplace demo showcasing consultant onboarding, bookings, escrow checkout, and trust layer workflows.',
    problem: 'Founders needed a polished product experience quickly to test demand and confidently present to investors.',
    solution: [
      'Designed dual-sided onboarding with tailored dashboards for consultants and buyers.',
      'Implemented secure booking and escrow payment releases via Stripe.',
      'Launched social proof loops with verified reviews and repeat booking flows.',
    ],
    metrics: [
      { label: 'Delivery Window', value: '8 weeks' },
      { label: 'Seed Funding', value: '$400k' },
      { label: 'Core Flows', value: '4 shipped' },
    ],
    timeline: '8 weeks',
    clientType: 'Early-stage startup',
    demoHref: '/portfolio/demo/two-sided-marketplace-mvp',
    codeHref: 'https://github.com/tonybrain-dotcom',
  },
  {
    slug: 'healthcare-scheduling-system',
    title: 'Healthcare Scheduling System',
    category: 'Web Application',
    desc: 'Appointment scheduling for a medical group. Includes patient portal, automated reminders, EHR integration, and billing.',
    challenge: 'Legacy scheduling software was causing 200+ missed appointments per month and significant staff overhead.',
    outcome: 'Reduced missed appointments by 60% and cut scheduling admin time in half.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Twilio', 'AWS'],
    color: 'from-emerald-700 to-brand-700',
    category_color: 'bg-emerald-600/20 text-emerald-400',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    demoSummary: 'Healthcare operations demo with provider schedules, patient self-booking, reminders, and intake automation.',
    problem: 'Operations teams were overwhelmed by manual scheduling, no-shows, and fragmented communication between staff and patients.',
    solution: [
      'Delivered a multi-provider scheduling engine with time-zone aware availability.',
      'Integrated automated SMS and email reminders to reduce no-shows.',
      'Connected intake forms and billing checkpoints into one staff-friendly workflow.',
    ],
    metrics: [
      { label: 'Missed Appointment Drop', value: '60%' },
      { label: 'Admin Time Saved', value: '50%' },
      { label: 'Providers Supported', value: '50+' },
    ],
    timeline: '12 weeks',
    clientType: 'Medical group',
    demoHref: '/portfolio/demo/healthcare-scheduling-system',
    codeHref: 'https://github.com/tonybrain-dotcom',
  },
  {
    slug: 'headless-ecommerce-platform',
    title: 'Lumière Home E-Commerce Experience',
    category: 'E-Commerce',
    desc: 'A refined home-goods storefront combining editorial merchandising, collection discovery, detailed product selection, cart management, and a values-led brand story.',
    challenge: 'The shopping experience needed to feel premium and calm while still making a broad home collection easy to browse, compare, configure, and purchase.',
    outcome: 'Delivered a cohesive commerce journey from visual discovery to product evaluation and cart review, supported by a distinctive brand narrative and consistent design system.',
    tags: ['E-Commerce', 'Storefront UX', 'Product Discovery', 'Cart Flow', 'Responsive Design'],
    color: 'from-stone-700 to-emerald-900',
    category_color: 'bg-emerald-600/15 text-emerald-700',
    image: '/Ecomerce/ChatGPT Image May 21, 2026, 10_54_58 AM (1).png',
    gallery: [
      { src: '/Ecomerce/ChatGPT Image May 21, 2026, 10_54_59 AM (2).png', alt: 'Lumière Home living room collection page', caption: 'Collection discovery with category, price, color, and material filtering alongside a clear product grid and sorting controls.' },
      { src: '/Ecomerce/ChatGPT Image May 21, 2026, 10_54_59 AM (3).png', alt: 'Lumière Home product detail page', caption: 'A focused product detail experience with image gallery, variants, quantity controls, reviews, purchase actions, and fulfillment reassurance.' },
      { src: '/Ecomerce/ChatGPT Image May 21, 2026, 10_55_00 AM (4).png', alt: 'Lumière Home shopping cart drawer', caption: 'A full-height cart drawer supporting quantity updates, removals, discounts, shipping qualification, and clear checkout progression.' },
      { src: '/Ecomerce/ChatGPT Image May 21, 2026, 10_55_00 AM (5).png', alt: 'Lumière Home brand story page', caption: 'A warm editorial About page communicating craftsmanship, responsible sourcing, shipping values, and the people behind the brand.' },
    ],
    demoSummary: 'Premium home-goods commerce journey covering collection discovery, product evaluation, cart management, and brand storytelling.',
    problem: 'Home-goods customers need rich visual context and confident product details without the interface competing with the products themselves.',
    solution: [
      'Created an editorial storefront system using calm typography, natural imagery, and restrained commerce controls.',
      'Designed collection filters and product-detail decisions around the way customers browse home categories and variants.',
      'Connected discovery, cart management, fulfillment reassurance, and brand values into one consistent purchase journey.',
    ],
    metrics: [
      { label: 'Core Screens', value: '5' },
      { label: 'Commerce Flow', value: 'End-to-end' },
      { label: 'Primary Goal', value: 'Conversion' },
    ],
    timeline: 'Confidential',
    clientType: 'Premium home-goods retailer',
    demoHref: '/portfolio/demo/headless-ecommerce-platform',
  },
  {
    slug: 'b2b-proposal-automation-saas',
    title: 'Cognify AI Workspace',
    category: 'AI SaaS Platform',
    desc: 'A unified AI productivity workspace combining intelligent chat, document analysis, image generation, knowledge tools, automation, and usage analytics in one subscription product.',
    challenge: 'Users needed a coherent way to access several AI capabilities without switching between disconnected tools, interfaces, and usage dashboards.',
    outcome: 'Delivered a consistent multi-feature SaaS experience with clear navigation, focused workspaces, account-level analytics, and visible upgrade paths.',
    tags: ['AI SaaS', 'Product Design', 'Dashboard', 'Document AI', 'Image Generation'],
    color: 'from-violet-800 to-slate-950',
    category_color: 'bg-violet-600/15 text-violet-700',
    image: '/Cognify/ChatGPT Image May 21, 2026, 09_22_45 PM.png',
    gallery: [
      { src: '/Cognify/ChatGPT Image May 21, 2026, 09_22_54 PM.png', alt: 'Cognify AI chat workspace', caption: 'A focused conversational workspace with chat history, suggested prompts, recent files, and usage context.' },
      { src: '/Cognify/ChatGPT Image May 21, 2026, 09_23_02 PM.png', alt: 'Cognify AI document workspace', caption: 'Document organization and upload experience supporting multiple file formats, filtering, search, and analysis workflows.' },
      { src: '/Cognify/ChatGPT Image May 21, 2026, 09_23_11 PM.png', alt: 'Cognify AI image generator', caption: 'An AI image-generation workspace with prompt controls, style and aspect-ratio options, output count, and generated results.' },
      { src: '/Cognify/ChatGPT Image May 21, 2026, 09_23_20 PM.png', alt: 'Cognify workspace analytics', caption: 'Cross-product analytics for interactions, documents, images, automation activity, use cases, and engagement patterns.' },
    ],
    demoSummary: 'AI SaaS product walkthrough spanning the dashboard, conversational assistant, document intelligence, image generation, and workspace analytics.',
    problem: 'AI workflows become fragmented when chat, document processing, content generation, automation, and reporting live in separate products.',
    solution: [
      'Created a unified navigation and visual system across distinct AI tools and workflows.',
      'Designed focused workspaces for chat, document intelligence, image generation, knowledge, and automation.',
      'Added a central dashboard and analytics layer so users can understand activity and value across the product.',
    ],
    metrics: [
      { label: 'AI Workspaces', value: '5+' },
      { label: 'Core Screens', value: '5' },
      { label: 'Product Model', value: 'SaaS' },
    ],
    timeline: 'Confidential',
    clientType: 'AI productivity SaaS',
    demoHref: '/portfolio/demo/b2b-proposal-automation-saas',
  },
  {
    slug: 'real-time-collaboration-tool',
    title: 'Real-Time Collaboration Tool',
    category: 'Web Application',
    desc: 'A lightweight project management tool with real-time board updates, mentions, file attachments, and Slack/email notifications. Built for remote teams.',
    challenge: 'The client wanted a focused, distraction-free alternative to Jira for their 30-person remote team.',
    outcome: 'Shipped in 12 weeks and adopted company-wide within 2 weeks of launch.',
    tags: ['Next.js', 'Node.js', 'Socket.io', 'PostgreSQL', 'AWS'],
    color: 'from-pink-700 to-brand-700',
    category_color: 'bg-pink-600/20 text-pink-400',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80',
    demoSummary: 'Collaboration demo featuring live board updates, instant mentions, and clean notification routing.',
    problem: 'Teams needed live collaboration and visibility without the complexity of enterprise project tooling.',
    solution: [
      'Implemented low-latency real-time board updates with optimistic UI patterns.',
      'Added comments, mentions, attachments, and digest notifications.',
      'Built simple sprint and backlog workflows to keep execution focused.',
    ],
    metrics: [
      { label: 'Company Adoption', value: '2 weeks' },
      { label: 'Team Size', value: '30 people' },
      { label: 'Build Window', value: '12 weeks' },
    ],
    timeline: '12 weeks',
    clientType: 'Remote product team',
    demoHref: '/portfolio/demo/real-time-collaboration-tool',
    codeHref: 'https://github.com/tonybrain-dotcom',
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
