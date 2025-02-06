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
    logo_etablissement: '/assets/UNC-LOGO-RVB-bleu.png',
    matieres:
      '',
    animation: 'clapping'
  },
  {
    id: 2,
    etablissement: 'Lycée Dick Ukeiwe',
    annees: '2022',
    position: 'Etudiante en 1ère année de Diplôme de Comptabilité & Gestion',
    logo_etablissement: '/assets/lycee_dick_ukeiwe.png',
    matieres:
      '',
    animation: 'salute'
  },
  {
    id: 3,
    etablissement: 'Lycée Lapérouse',
    annees: '2021',
    position: 'Baccalauréat STMG option Gestion & Finance, obtenu avec Mention Assez Bien',
    logo_etablissement: '/assets/logo-laperouse.png',
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
      href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/Les_Pizzaiolas_Logo_Branding.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        { id: 1, name: 'React.js', path: '/assets/react.svg' },
        { id: 2, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
        { id: 3, name: 'TypeScript', path: '/assets/typescript.png' },
        { id: 4, name: 'Framer Motion', path: '/assets/framer.png' },
      ],
    },

    {
      title: "ePacific - Une Plateforme Innovante pour les Textiles Écoresponsables",
      desc: "ePacific est une solution de commerce électronique dédiée aux textiles écoresponsables. Alliant intelligence artificielle, personnalisation avancée, et un espace communautaire interactif, elle permet aux utilisateurs d'acheter, vendre et collaborer dans un environnement conçu pour promouvoir la durabilité.",
      subdesc: "Développée avec des technologies modernes telles que Next.js, Tailwind CSS, TypeScript, et des intégrations avancées en IA/ML, ePacific offre une expérience utilisateur fluide et personnalisée, répondant aux attentes des consommateurs engagés en faveur de l'environnement.",
      href: "https://www.epacific.com",
      texture: "/textures/project/epacific.mp4",
      logo: "/assets/ePacific_Logo_Branding.png",
      logoStyle: {
        backgroundColor: "#1F2937",
        border: "0.2px solid #2D3748",
        boxShadow: "0px 0px 60px 0px #4A5568B3"
      },
      spotlight: "/assets/spotlight1.png",
      tags: [
        { id: 1, "name": "Next.js", "path": "/assets/react.svg" },
        { id: 2, "name": "TailwindCSS", "path": "/assets/tailwindcss.png" },
        { id: 3, "name": "TypeScript", "path": "/assets/typescript.png" },
        { id: 4, "name": "AI/ML", "path": "/assets/python-logo-only.svg" }
      ]
    },
    {
      title: "Elysian Unity - Un site internet pour ma marque de vêtement ",
      desc: "Elysian Unity est une marque de vêtement écoresponsable, de streetwear moderne inspirant l'unité, l'inclusion et l'excellence",
      subdesc: "Développée avec des technologies modernes telles que Next.js, Tailwind CSS, TypeScript, et des intégrations avancées en IA/ML, ePacific offre une expérience utilisateur fluide et personnalisée, répondant aux attentes des consommateurs engagés en faveur de l'environnement.",
      href: "https://www.epacific.com",
      texture: "/textures/project/epacific.mp4",
      logo: "/assets/logo_Elysian_Unity.png",
      logoStyle: {
        backgroundColor: "#1F2937",
        border: "0.2px solid #2D3748",
        boxShadow: "0px 0px 60px 0px #4A5568B3"
      },
      spotlight: "/assets/spotlight1.png",
      tags: [
        { id: 1, "name": "Next.js", "path": "/assets/react.svg" },
        { id: 2, "name": "TailwindCSS", "path": "/assets/tailwindcss.png" },
        { id: 3, "name": "TypeScript", "path": "/assets/typescript.png" },
        { id: 4, "name": "AI/ML", "path": "/assets/python-logo-only.svg" }
      ]
    }
    
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [

  {
    id: 1,
    name: 'ePacific',
    pos: 'Fondatrice et Gérante',
    duration: '2024 - Présent',
    title: "Chez ePacific, j'ai contribué au développement d'une plateforme de commerce électronique innovante pour les textiles écoresponsables, en mettant en œuvre des solutions front-end et back-end avec des technologies modernes comme Next.js, Tailwind CSS, et TypeScript, tout en intégrant l'IA pour améliorer l'expérience utilisateur.",
    icon: '/assets/ePacific_Logo_Branding.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Les Pizzaiolas',
    pos: 'Co-Fondatrice',
    duration: '2024',
    title: "En tant que co-fondatrice et co-gérante de Les Pizzaiolas, j'ai conçu et lancé une pizzeria ambulante au feu de bois, alliant tradition culinaire et innovation technologique, avec une plateforme moderne de commande en ligne et mobile pour offrir une expérience client unique.",
    icon: '/assets/Les_Pizzaiolas_Logo_Branding.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Skazy Data',
    pos: 'Assistante développement Data IA',
    duration: 'Janvier 2025',
    title: "Mon expérience en tant que job d'été chez Skazy au pôle Data : j'ai effectué le processus de labellisation de données, développé des solutions en Python et réalisé des supports techniques afin d’optimiser les workflows et faciliter la compréhension des processus techniques.",
    icon: '/assets/skazy_nc_logo-removebg-preview.png',
    animation: 'salute',
  },
  {
    id: 4,
    name: 'Province Sud',
    pos: 'Assistante du Gestionnaire de Parc Informatique',
    duration: 'Décembre 2023',
    title: "Mon expérience en tant que job d'été au sein de la Province Sud, m'a permis de réaliser des missions telles que la réalisation d'inventaires de matériels provenant des écoles locaux (tableaux intéractifs, tablettes, ordinateurs), de l'installation de postes informatique.",
    icon: '/assets/logo-province-sud.png',
    animation: 'salute',
  },
  // Expériences restantes traduites de manière similaire...
];
