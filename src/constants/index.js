export const navLinks = [
  {
    id: 1,
    name: 'Accueil',
    href: '#home',
  },
  {
    id: 2,
    name: 'À propos',
    href: '#about',
  },
  {
    id: 3,
    name: 'Expérience professionnel',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const Schools = [
  {
    id: 1,
    etablissement: 'Université de la Nouvelle-Calédonie',
    annees: '2025',
    position: 'Etudiante en 3ème année de Licence Informatique',
    logo_etablissement: '/assets/logo/UNC-LOGO-RVB-bleu.png',
    matieres:
      '',
    animation: 'clapping'
  },
  {
    id: 2,
    etablissement: 'Lycée Dick Ukeiwe',
    annees: '2022',
    position: 'Etudiante en 1ère année de Diplôme de Comptabilité & Gestion',
    logo_etablissement: '/assets/logo/lycee_dick_ukeiwe.png',
    matieres:
      '',
    animation: 'salute'
  },
  {
    id: 3,
    etablissement: 'Lycée Lapérouse',
    annees: '2021',
    position: 'Baccalauréat STMG option Gestion & Finance, obtenu avec Mention Assez Bien',
    logo_etablissement: '/assets/logo/logo-laperouse.png',
    matieres:
      '',
    animation: 'victory'
  }
];

export const myProjects = [
  {
      title: 'Les Pizzaiolas - Pizzeria Ambulante au Feu de Bois',
      desc: 'Les Pizzaiolas est une pizzeria ambulante moderne qui allie tradition et technologie. Grâce à une plateforme de commande web et mobile intuitive, elle propose une expérience client unique et des pizzas cuites au feu de bois, personnalisables et de qualité supérieure.',
      subdesc: 
        'Développée avec des technologies modernes comme React Native, Tailwind CSS, TypeScript, et Framer Motion, la plateforme Les Pizzaiolas est conçue pour offrir une performance optimale et une expérience fluide aux utilisateurs.',
      href: '',
      texture: '/textures/project/les pizzaiolas project.mp4',
      logo: '/assets/logo/Les_Pizzaiolas_Logo_Branding.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        { id: 1, name: 'React.js', path: '/assets/logo/react.svg' },
        { id: 2, name: 'TailwindCSS', path: 'assets/logo/tailwindcss.png' },
        { id: 3, name: 'TypeScript', path: '/assets/logo/typescript.png' },
        { id: 4, name: 'Framer Motion', path: '/assets/logo/framer.png' },
      ],
    }

    /*

    {
      title: "ePacific - Un ecommerce AI-driven et Écoresponsable",
      desc: "ePacific révolutionne le commerce en ligne en alliant intelligence artificielle, personnalisation avancée et engagement écoresponsable. Grâce à son espace communautaire interactif, elle permet aux utilisateurs d'acheter, vendre et collaborer dans un écosystème conçu pour promouvoir une consommation plus durable.",
      subdesc: "Propulsée par des technologies de pointe telles que FastAPI, PostgreSQL, Redis et Docker pour l’infrastructure backend, ainsi que React.js, Next.js, Tailwind CSS et TypeScript pour le frontend, ePacific intègre des solutions avancées en IA/ML pour une expérience utilisateur fluide, intelligente et ultra-personnalisée.",
      href: "https://www.epacific.com",
      texture: "/textures/project/project1.mp4",
      logo: "/assets/logo/ePacific_Logo_Branding.png",
      logoStyle: {
        backgroundColor: "#1F2937",
        border: "0.2px solid #2D3748",
        boxShadow: "0px 0px 60px 0px #4A5568B3"
      },
      spotlight: "/assets/spotlight2.png",
      tags: [
        { id: 1, "name": "Reactjs", "path": "/assets/logo/react.svg" },
        { id: 2, "name": "Postgre", "path": "/assets/logo/postgre.png" },
        { id: 3, "name": "Machine Learning", "path": "/assets/logo/machine-learning.png" },
        { id: 4, "name": "AI/ML", "path": "/assets/logo/python-logo-only.svg" }
      ]
    },
    {
      title: "Elysian Unity - Un site internet pour ma marque de vêtement ",
      desc: "Elysian Unity est une marque de vêtement écoresponsable, de streetwear moderne inspirant l'unité, l'inclusion et l'excellence. Le site web Elysian Unity est conçu pour offrir une expérience utilisateur immersive et interactive, tout en mettant en avant les valeurs de la marque.",
      subdesc: "Développé avec des technologies modernes telles que Next.js, Tailwind CSS, TypeScript et Python, le site intègre des fonctionnalités avancées de personnalisation des vêtements et de recommandations basées sur l’IA, offrant une expérience unique et sur mesure aux utilisateurs.",
      href: "https://www.epacific.com",
      texture: "/textures/project/project1.mp4",
      logo: "/assets/logo/logo_Elysian_Unity.png",
      logoStyle: {
        backgroundColor: "#1F2937",
        border: "0.2px solid #2D3748",
        boxShadow: "0px 0px 60px 0px #4A5568B3"
      },
      spotlight: "/assets/spotlight3.png",
      tags: [
        { id: 1, "name": "Next.js", "path": "/assets/logo/react.svg" },
        { id: 2, "name": "TailwindCSS", "path": "/assets/logo/tailwindcss.png" },
        { id: 3, "name": "TypeScript", "path": "/assets/logo/typescript.png" },
        { id: 4, "name": "AI/ML", "path": "/assets/logo/python-logo-only.svg" }
      ]
    }
      */
    
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    duckPosition: isSmall ? [-5, -5, 0] : isMobile ? [2, 0, -2] : isTablet ? [10, -9.5, 0] : [10, -9.5, 0]  // Ajusté pour tablette

  };
};

export const workExperiences = [
/* Expériences professionnelles
  {
    id: 1,
    name: 'ePacific',
    pos: 'Fondatrice et Présidente',
    duration: '2024 - Présent',
    title: "J'ai crée ePacific, une plateforme de commerce électronique innovante pour les produits écoresponsables, tout en mettant en œuvre des solutions intégrant l'IA pour améliorer l'expérience utilisateur.",
    icon: '/assets/logo/ePacific_Logo_Branding.png',
    animation: 'victory',
  },
  */
  {
    id: 1,
    name: 'Les Pizzaiolas',
    pos: 'Co-Fondatrice',
    duration: '2024',
    title: "En tant que co-fondatrice de Les Pizzaiolas, j'ai lancé le projet d'une pizzeria ambulante au feu de bois, alliant tradition culinaire italienne et calédonienne. J'ai conçu une plateforme moderne de commande en ligne et mobile pour offrir une expérience client unique.",
    icon: '/assets/logo/Les_Pizzaiolas_Logo_Branding.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Skazy Data',
    pos: 'Assistante développement Data IA',
    duration: 'Janvier 2025',
    title: "Mon expérience en tant que job d'été chez Skazy au pôle Data : j'ai effectué le processus de labellisation de données, développé des solutions en Python et réalisé des supports techniques afin d’optimiser les workflows et faciliter la compréhension des processus techniques.",
    icon: '/assets/logo/skazy_nc_logo-removebg-preview.png',
    animation: 'salute',
  },
  {
    id: 4,
    name: 'Province Sud',
    pos: 'Assistante du Gestionnaire de Parc Informatique',
    duration: 'Décembre 2023',
    title: "Mon expérience en tant que job d'été au sein de la Province Sud, m'a permis de réaliser des missions telles que la réalisation d'inventaires de matériels provenant des écoles locaux (tableaux intéractifs, tablettes, ordinateurs), de l'installation de postes informatique.",
    icon: '/assets/logo/logo-province-sud.png',
    animation: 'salute',
  },
  {
  id: 5,
  name: 'La Foir\'Fouille',
  pos: 'Vendeuse',
  duration: 'Novembre 2023',
  title: "Mon expérience en tant que vendeuse chez La Foir\'Fouille m'a permis de développer des compétences en relation client, et en organisation de l'espace de vente.",
  icon: '/assets/logo/logo-foirfouille.svg',
  animation: 'clapping',
  }

  // Expériences restantes traduites de manière similaire...
];
