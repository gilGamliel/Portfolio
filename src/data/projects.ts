import { Project } from '@/types';

/**
 * Portfolio Projects Data
 * This is the single source of truth for all project content.
 * The generic project page renders based on this data.
 */
export const projects: Project[] = [
  // ═══════════════════════════════════════════════════════════════
  // FULL-STACK PROJECTS
  // ═══════════════════════════════════════════════════════════════
  {
    slug: 'ecommerce-platform',
    category: 'fullstack',
    title: 'E-Commerce Platform',
    subtitle: 'Scalable Multi-Tenant Marketplace',
    shortDescription:
      'A full-featured e-commerce platform supporting multiple vendors with real-time inventory management and payment processing.',
    description:
      'Built from the ground up, this platform handles thousands of daily transactions with 99.9% uptime.',
    overview:
      'This enterprise-grade e-commerce solution was designed to support multiple vendors operating under a unified marketplace. The system handles everything from product catalog management to payment processing, inventory tracking, and order fulfillment.',
    problemStatement:
      'The client needed a scalable solution to consolidate multiple vendor storefronts into a single marketplace while maintaining individual vendor autonomy and real-time inventory synchronization.',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    videoPoster: '/images/ecommerce-poster.jpg',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
        alt: 'E-commerce dashboard',
        caption: 'Admin dashboard with real-time analytics',
      },
      {
        src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800',
        alt: 'Product catalog',
        caption: 'Dynamic product catalog with filtering',
      },
      {
        src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
        alt: 'Analytics view',
        caption: 'Comprehensive analytics dashboard',
      },
    ],
    thumbnailUrl:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400',
    features: [
      'Multi-vendor marketplace with independent storefronts',
      'Real-time inventory synchronization across channels',
      'Integrated payment processing (Stripe, PayPal)',
      'Advanced search with Elasticsearch',
      'Automated order fulfillment workflow',
      'Customer review and rating system',
      'Dynamic pricing and promotions engine',
    ],
    architecture:
      'Microservices architecture deployed on AWS with Kubernetes orchestration. Event-driven communication using RabbitMQ for inventory updates and order processing. PostgreSQL for transactional data with Redis caching layer.',
    techStack: [
      'Next.js',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Redis',
      'Elasticsearch',
      'AWS',
      'Kubernetes',
      'Stripe',
      'RabbitMQ',
    ],
    myRole: 'Lead Full-Stack Developer',
    responsibilities: [
      'Designed and implemented the microservices architecture',
      'Built the real-time inventory synchronization system',
      'Integrated payment processing with fraud detection',
      'Led a team of 4 developers',
      'Established CI/CD pipelines and deployment strategies',
    ],
    status: 'live',
    links: [
      { label: 'Live Demo', url: 'https://demo.example.com', type: 'demo' },
      {
        label: 'GitHub',
        url: 'https://github.com/example/ecommerce',
        type: 'github',
      },
    ],
    year: 2024,
    duration: '8 months',
    teamSize: '5 developers',
  },
  {
    slug: 'analytics-dashboard',
    category: 'fullstack',
    title: 'Real-Time Analytics Dashboard',
    subtitle: 'Data Visualization Platform',
    shortDescription:
      'Interactive dashboard for visualizing complex business metrics with real-time data streaming.',
    overview:
      'A comprehensive analytics platform that transforms raw business data into actionable insights through interactive visualizations and automated reporting.',
    problemStatement:
      'Stakeholders needed a unified view of business metrics from multiple data sources with real-time updates and custom report generation.',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
        alt: 'Dashboard overview',
        caption: 'Main dashboard with key metrics',
      },
      {
        src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
        alt: 'Data visualization',
        caption: 'Interactive charts and graphs',
      },
    ],
    thumbnailUrl:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
    features: [
      'Real-time data streaming with WebSocket',
      'Customizable dashboard widgets',
      'Drag-and-drop report builder',
      'Automated PDF report generation',
      'Role-based access control',
      'Data export in multiple formats',
    ],
    architecture:
      'React frontend with D3.js visualizations. Node.js backend with WebSocket for real-time updates. TimescaleDB for time-series data storage.',
    techStack: [
      'React',
      'TypeScript',
      'D3.js',
      'Node.js',
      'WebSocket',
      'TimescaleDB',
      'Docker',
    ],
    myRole: 'Full-Stack Developer',
    responsibilities: [
      'Built the real-time data pipeline',
      'Implemented interactive D3.js visualizations',
      'Designed the drag-and-drop report builder',
    ],
    status: 'live',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/example/analytics',
        type: 'github',
      },
    ],
    year: 2023,
    duration: '5 months',
  },
  {
    slug: 'ai-content-generator',
    category: 'fullstack',
    title: 'AI Content Generator',
    subtitle: 'GPT-Powered Writing Assistant',
    shortDescription:
      'An AI-powered platform for generating marketing content, blog posts, and social media copy.',
    overview:
      'Leveraging large language models, this platform helps marketing teams generate high-quality content at scale while maintaining brand voice consistency.',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400',
    features: [
      'Multiple content templates (blog, social, email)',
      'Brand voice customization',
      'Content calendar integration',
      'A/B testing suggestions',
      'SEO optimization recommendations',
    ],
    techStack: [
      'Next.js',
      'TypeScript',
      'OpenAI API',
      'Prisma',
      'PostgreSQL',
      'Vercel',
    ],
    myRole: 'Solo Developer',
    status: 'live',
    year: 2024,
  },
  {
    slug: 'healthcare-portal',
    category: 'fullstack',
    title: 'Healthcare Patient Portal',
    subtitle: 'HIPAA-Compliant Medical Platform',
    shortDescription:
      'Secure patient portal for appointment scheduling, medical records access, and telehealth consultations.',
    overview:
      'A comprehensive healthcare platform enabling patients to manage their health journey digitally while ensuring strict HIPAA compliance.',
    problemStatement:
      'Healthcare providers needed a secure, user-friendly portal for patient engagement while meeting strict regulatory requirements.',
    features: [
      'Secure patient authentication with MFA',
      'Appointment scheduling and reminders',
      'Medical records access and download',
      'Telehealth video consultations',
      'Prescription management',
      'Insurance verification',
    ],
    architecture:
      'HIPAA-compliant infrastructure on AWS with encrypted data at rest and in transit. Microservices architecture with API gateway for security.',
    techStack: [
      'React',
      'Node.js',
      'PostgreSQL',
      'AWS',
      'Twilio',
      'WebRTC',
    ],
    myRole: 'Backend Lead',
    responsibilities: [
      'Designed HIPAA-compliant data architecture',
      'Implemented secure authentication system',
      'Built telehealth video infrastructure',
    ],
    status: 'live',
    year: 2023,
    teamSize: '8 developers',
  },

  // ═══════════════════════════════════════════════════════════════
  // MOBILE APP PROJECTS
  // ═══════════════════════════════════════════════════════════════
  {
    slug: 'fitness-tracker',
    category: 'apps',
    title: 'FitTrack Pro',
    subtitle: 'Personal Fitness Companion',
    shortDescription:
      'A comprehensive fitness tracking app with workout plans, nutrition logging, and progress analytics.',
    description:
      'FitTrack Pro helps users achieve their fitness goals with personalized workout plans and detailed progress tracking.',
    overview:
      'This mobile application combines workout tracking, nutrition logging, and social features to create an engaging fitness ecosystem.',
    problemStatement:
      'Users needed an all-in-one fitness solution that could track workouts, monitor nutrition, and provide personalized recommendations.',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800',
        alt: 'Workout tracking',
        caption: 'Track your workouts with ease',
      },
      {
        src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800',
        alt: 'Progress charts',
        caption: 'Visualize your progress over time',
      },
    ],
    thumbnailUrl:
      'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=400',
    features: [
      'Custom workout plan builder',
      'Exercise library with video demos',
      'Nutrition tracking with barcode scanner',
      'Progress photos and measurements',
      'Social challenges and leaderboards',
      'Apple Health / Google Fit integration',
      'Offline workout mode',
    ],
    architecture:
      'React Native for cross-platform development. Node.js backend with MongoDB for flexible data storage. Redis for real-time leaderboard updates.',
    techStack: [
      'React Native',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'Redis',
      'Firebase',
      'AWS S3',
    ],
    myRole: 'Lead Mobile Developer',
    responsibilities: [
      'Architected the cross-platform mobile solution',
      'Implemented offline-first data synchronization',
      'Built the social features and leaderboard system',
      'Integrated health platform APIs',
    ],
    status: 'live',
    links: [
      {
        label: 'App Store',
        url: 'https://apps.apple.com/app/fittrack',
        type: 'appstore',
      },
      {
        label: 'Play Store',
        url: 'https://play.google.com/store/apps/fittrack',
        type: 'playstore',
      },
    ],
    year: 2024,
    duration: '6 months',
    teamSize: '4 developers',
  },
  {
    slug: 'expense-manager',
    category: 'apps',
    title: 'SpendWise',
    subtitle: 'Smart Expense Tracking',
    shortDescription:
      'An intelligent expense tracking app with receipt scanning, budget alerts, and financial insights.',
    overview:
      'SpendWise uses AI-powered receipt scanning and smart categorization to help users understand and optimize their spending habits.',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800',
        alt: 'Expense dashboard',
        caption: 'Track spending at a glance',
      },
      {
        src: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800',
        alt: 'Budget overview',
        caption: 'Set and monitor budgets',
      },
    ],
    thumbnailUrl:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400',
    features: [
      'AI-powered receipt scanning (OCR)',
      'Smart expense categorization',
      'Budget creation and alerts',
      'Bank account synchronization',
      'Recurring expense tracking',
      'Financial reports and exports',
    ],
    techStack: [
      'Flutter',
      'Dart',
      'Firebase',
      'Google Cloud Vision',
      'Plaid API',
    ],
    myRole: 'Solo Developer',
    status: 'live',
    links: [
      {
        label: 'App Store',
        url: 'https://apps.apple.com/app/spendwise',
        type: 'appstore',
      },
    ],
    year: 2023,
  },
  {
    slug: 'language-learning',
    category: 'apps',
    title: 'LingoMaster',
    subtitle: 'Gamified Language Learning',
    shortDescription:
      'A gamified language learning app with spaced repetition, speech recognition, and social learning features.',
    overview:
      'LingoMaster makes language learning engaging through gamification, AI-powered pronunciation feedback, and community features.',
    problemStatement:
      'Traditional language learning apps lack engagement and fail to provide effective pronunciation practice.',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400',
    features: [
      'Spaced repetition algorithm',
      'AI speech recognition and feedback',
      'Daily challenges and streaks',
      'Community conversation practice',
      'Offline lesson downloads',
      'Progress synchronization across devices',
    ],
    architecture:
      'Native iOS (Swift) and Android (Kotlin) apps with shared Node.js backend. ML models for speech recognition deployed on device for privacy.',
    techStack: ['Swift', 'Kotlin', 'Node.js', 'TensorFlow Lite', 'Firebase'],
    myRole: 'iOS Developer',
    responsibilities: [
      'Developed the iOS application',
      'Integrated on-device ML for speech recognition',
      'Implemented the gamification system',
    ],
    status: 'live',
    year: 2024,
    teamSize: '6 developers',
  },
  {
    slug: 'task-management',
    category: 'apps',
    title: 'TaskFlow',
    subtitle: 'Minimalist Task Manager',
    shortDescription:
      'A clean, focused task management app with smart lists, reminders, and cross-platform sync.',
    overview:
      'TaskFlow embraces minimalism to help users focus on what matters most without the clutter of complex project management tools.',
    features: [
      'Clean, distraction-free interface',
      'Smart lists with automatic sorting',
      'Natural language date parsing',
      'Location-based reminders',
      'Widget support',
      'Dark mode',
    ],
    techStack: ['React Native', 'TypeScript', 'Realm', 'Firebase'],
    myRole: 'Full-Stack Mobile Developer',
    status: 'in-development',
    year: 2025,
  },
];

/**
 * Get all projects
 */
export function getAllProjects(): Project[] {
  return projects;
}

/**
 * Get projects by category
 */
export function getProjectsByCategory(category: Project['category']): Project[] {
  return projects.filter((project) => project.category === category);
}

/**
 * Get a single project by category and slug
 */
export function getProjectBySlug(
  category: Project['category'],
  slug: string
): Project | undefined {
  return projects.find(
    (project) => project.category === category && project.slug === slug
  );
}

/**
 * Get all project slugs for static generation
 */
export function getAllProjectSlugs(): { category: string; slug: string }[] {
  return projects.map((project) => ({
    category: project.category,
    slug: project.slug,
  }));
}
