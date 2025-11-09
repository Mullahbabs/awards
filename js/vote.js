// Initialize EmailJS with your credentials
emailjs.init("_");
console.log("Init done");

const nomineesData = {
  // ========== STARTUPS CATEGORIES ==========
  "agriculture-startup": [
    {
      id: 1,
      name: "AgriTech Solutions",
      description:
        "Innovative farming technology and supply chain solutions for modern agriculture.",
      image:
        "https://images.unsplash.com/photo-1625246332166-18e2f6a5b9c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 2,
      name: "FreshFarm Connect",
      description:
        "Digital platform connecting local farmers directly with urban markets.",
      image:
        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 3,
      name: "CropGuard Analytics",
      description:
        "AI-powered crop monitoring and yield prediction for small-scale farmers.",
      image:
        "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 4,
      name: "EcoHarvest Ventures",
      description:
        "Sustainable farming practices and organic produce distribution network.",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
  ],
  "retail-startup": [
    {
      id: 1,
      name: "QuickMart Digital",
      description:
        "Mobile-first retail platform for fast consumer goods delivery.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 2,
      name: "LocalSource Hub",
      description:
        "Marketplace connecting local producers with neighborhood retailers.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 3,
      name: "SmartStock Solutions",
      description: "Inventory management AI for small retail businesses.",
      image:
        "https://images.unsplash.com/photo-1556742044-3c6c8b7b1b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 4,
      name: "EcoPack Distributors",
      description:
        "Sustainable packaging and distribution for retail products.",
      image:
        "https://images.unsplash.com/photo-1556742045-3c6c8b7b1b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
  ],
  "fashion-startup": [
    {
      id: 1,
      name: "StyleCanvas Creations",
      description:
        "Custom fashion design platform for emerging African designers.",
      image:
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 2,
      name: "AfroChic Studios",
      description:
        "Contemporary African fashion with modern styling techniques.",
      image:
        "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 3,
      name: "EcoThread Collective",
      description:
        "Sustainable fashion using recycled materials and ethical production.",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 4,
      name: "Digital Runway",
      description:
        "Virtual styling and fashion tech solutions for modern consumers.",
      image:
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
  ],
  "technology-startup": [
    {
      id: 1,
      name: "TechGen Innovations",
      description:
        "Cutting-edge software solutions for emerging market challenges.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 2,
      name: "InnoSoft Labs",
      description:
        "AI and machine learning applications for business optimization.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 3,
      name: "BellaTECH NG",
      description: "Beshel Benjamin.",
      image: "img/me.jpg",
      type: "startup",
    },
    {
      id: 4,
      name: "CloudFirst Startups",
      description: "Cloud infrastructure tailored for African tech startups.",
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
  ],
  "tourism-startup": [
    {
      id: 1,
      name: "ExploreCalabar Tours",
      description: "Curated cultural and adventure tourism experiences.",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 2,
      name: "AfroStay Hospitality",
      description: "Boutique accommodation platform showcasing local culture.",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 3,
      name: "Culinary Journey Co.",
      description: "Food tourism showcasing Calabar's rich culinary heritage.",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 4,
      name: "EcoTourism Ventures",
      description: "Sustainable tourism promoting environmental conservation.",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
  ],
  "entertainment-startup": [
    {
      id: 1,
      name: "AfroBeat Digital",
      description: "Music streaming platform promoting African artists.",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 2,
      name: "Calabar Creative Hub",
      description:
        "Co-working space and studio for entertainment professionals.",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 3,
      name: "Digital Storytellers",
      description: "Content creation and digital media production company.",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 4,
      name: "EventTech Solutions",
      description: "Technology platform for event management and ticketing.",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
  ],
  "transportation-startup": [
    {
      id: 1,
      name: "QuickRide Africa",
      description: "Ride-hailing service optimized for urban African cities.",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 2,
      name: "LogiTech Solutions",
      description: "AI-powered logistics and delivery optimization platform.",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 3,
      name: "EcoMovers",
      description: "Sustainable transportation using electric vehicles.",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 4,
      name: "SmartFleet Management",
      description: "Fleet management software for small transport businesses.",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
  ],
  "artisan-startup": [
    {
      id: 1,
      name: "CraftMaster Collective",
      description: "Platform connecting skilled artisans with global markets.",
      image:
        "https://images.unsplash.com/photo-1583248369069-9d91f5bac537?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 2,
      name: "Heritage Crafts Co.",
      description:
        "Preserving traditional crafts with modern business approach.",
      image:
        "https://images.unsplash.com/photo-1583248369069-9d91f5bac537?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 3,
      name: "SkillBridge Academy",
      description:
        "Training and certification for skilled trade professionals.",
      image:
        "https://images.unsplash.com/photo-1583248369069-9d91f5bac537?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 4,
      name: "Artisan Digital Market",
      description: "E-commerce platform for handmade and custom products.",
      image:
        "https://images.unsplash.com/photo-1583248369069-9d91f5bac537?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
  ],
  "event-startup": [
    {
      id: 1,
      name: "EventPro Africa",
      description: "End-to-end event management and concept development.",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 2,
      name: "Concept Creators Ltd",
      description: "Innovative event concepts and experiential marketing.",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 3,
      name: "Virtual Events NG",
      description: "Hybrid and virtual event solutions for modern audiences.",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 4,
      name: "Cultural Experience Co.",
      description: "Authentic cultural event planning and execution.",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
  ],
  "education-startup": [
    {
      id: 1,
      name: "EduTech Innovations",
      description:
        "Digital learning platforms and educational technology solutions for modern classrooms.",
      image:
        "https://images.unsplash.com/photo-1588072432836-e100327d50a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 2,
      name: "LearnSphere Africa",
      description:
        "Mobile-first educational content and skills development for African youth.",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 3,
      name: "Advocacy Voice Platform",
      description:
        "Digital tools for social advocacy and community awareness campaigns.",
      image:
        "https://images.unsplash.com/photo-1551836026-d5c8c1d20900?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 4,
      name: "SkillBridge Academy",
      description:
        "Vocational training and advocacy for underprivileged communities.",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
  ],
  "health-startup": [
    {
      id: 1,
      name: "HealthTech Solutions NG",
      description:
        "Telemedicine and digital health platforms for accessible healthcare.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 2,
      name: "Wellness Connect Africa",
      description:
        "Mental health and wellness apps with community support features.",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 3,
      name: "FitLife Digital",
      description:
        "AI-powered fitness tracking and personalized wellness programs.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 4,
      name: "MedSupply Chain",
      description:
        "Digital platform for medical supplies distribution in rural areas.",
      image:
        "https://images.unsplash.com/photo-1584467735871-8db9ac8e5e3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
  ],
  "media-startup": [
    {
      id: 1,
      name: "Digital News Hub",
      description:
        "Independent digital journalism platform focusing on investigative reporting.",
      image:
        "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 2,
      name: "Community Voice Media",
      description: "Hyperlocal news and community storytelling platform.",
      image:
        "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 3,
      name: "FactCheck Africa",
      description:
        "Digital media platform dedicated to fact-checking and media literacy.",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 4,
      name: "Youth Journalism Initiative",
      description:
        "Platform training and empowering young journalists across Africa.",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
  ],
  "sports-startup": [
    {
      id: 1,
      name: "SportTech Africa",
      description:
        "Digital platforms for sports management and athlete development.",
      image:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 2,
      name: "FitCommunity App",
      description:
        "Social fitness platform connecting exercise enthusiasts and trainers.",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 3,
      name: "Aerobics Digital Studio",
      description: "Virtual aerobics classes and fitness streaming service.",
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 4,
      name: "Youth Sports Development",
      description:
        "Community-based sports programs and talent development platform.",
      image:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
  ],
  "content-startup": [
    {
      id: 1,
      name: "Creative Storytellers NG",
      description:
        "Digital content creation and storytelling platform for African narratives.",
      image:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 2,
      name: "FilmTech Studios",
      description:
        "Independent film production and digital distribution platform.",
      image:
        "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 3,
      name: "Content Creator Hub",
      description:
        "Platform supporting and monetizing African content creators.",
      image:
        "https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 4,
      name: "Digital Cinema Network",
      description: "Streaming platform for independent African filmmakers.",
      image:
        "https://images.unsplash.com/photo-1489599809505-7c6f0bdbe3e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
  ],

  // ========== EXISTING BUSINESSES CATEGORIES ==========
  "agriculture-existing": [
    {
      id: 1,
      name: "AgroPrime Enterprises",
      description: "Large-scale agricultural production and export company.",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 2,
      name: "FarmTech Corporation",
      description: "Advanced agricultural technology and equipment solutions.",
      image:
        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 3,
      name: "ValueChain Distributors",
      description:
        "Integrated supply chain management for agricultural products.",
      image:
        "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 4,
      name: "GreenHarvest Ltd",
      description: "Sustainable large-scale farming and processing operations.",
      image:
        "https://images.unsplash.com/photo-1625246332166-18e2f6a5b9c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
  ],
  "retail-existing": [
    {
      id: 1,
      name: "MegaMart Chain",
      description: "Nationwide retail chain with multiple store locations.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 2,
      name: "Prime Distributors Ltd",
      description: "Leading wholesale distribution network across regions.",
      image:
        "https://images.unsplash.com/photo-1556742044-3c6c8b7b1b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 3,
      name: "Urban Retail Group",
      description: "Premium retail spaces and shopping center management.",
      image:
        "https://images.unsplash.com/photo-1556742045-3c6c8b7b1b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 4,
      name: "National Supply Co.",
      description: "Comprehensive distribution services for consumer goods.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
  ],
  "fashion-existing": [
    {
      id: 1,
      name: "Elite Fashion House",
      description: "Premium fashion brand with international recognition.",
      image:
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 2,
      name: "Style Empire Ltd",
      description: "Multi-brand fashion retail and styling services.",
      image:
        "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 3,
      name: "Heritage Textiles Co.",
      description: "Traditional fabric production and contemporary design.",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 4,
      name: "Fashion Retail Group",
      description: "National chain of fashion boutiques and outlets.",
      image:
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
  ],
  "technology-existing": [
    {
      id: 1,
      name: "TechSolutions Enterprise",
      description: "Enterprise software and IT infrastructure solutions.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 2,
      name: "Innovation Systems Ltd",
      description: "Advanced technology research and development firm.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 3,
      name: "Digital Transformation Co.",
      description:
        "Comprehensive digital solutions for established businesses.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 4,
      name: "Enterprise Cloud Systems",
      description: "Cloud computing and data management for corporations.",
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
  ],
  "tourism-existing": [
    {
      id: 1,
      name: "Premier Hospitality Group",
      description: "Luxury hotels and resort management company.",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 2,
      name: "Heritage Tours Ltd",
      description: "Established cultural and historical tour operator.",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 3,
      name: "Calabar Resort & Spa",
      description: "Premium hospitality and wellness destination.",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 4,
      name: "Business Travel Solutions",
      description: "Corporate travel and accommodation services.",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
  ],
  "entertainment-existing": [
    {
      id: 1,
      name: "Media Empire Group",
      description: "Multi-platform entertainment and media company.",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 2,
      name: "Lifestyle Brands Ltd",
      description: "Diversified entertainment and lifestyle enterprises.",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 3,
      name: "Creative Production House",
      description: "Film, music, and content production studio.",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 4,
      name: "Entertainment Venues Co.",
      description: "Management of theaters, clubs, and event spaces.",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
  ],
  "transportation-existing": [
    {
      id: 1,
      name: "National Transport Ltd",
      description: "Comprehensive transportation and logistics network.",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 2,
      name: "Logistics Solutions Inc.",
      description: "Supply chain and freight management services.",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 3,
      name: "Fleet Management Corp",
      description: "Large-scale vehicle fleet operations and maintenance.",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 4,
      name: "Cargo Express Ltd",
      description: "International shipping and cargo transportation.",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
  ],
  "artisan-existing": [
    {
      id: 1,
      name: "Master Craftsmen Guild",
      description: "Association of highly skilled trade professionals.",
      image:
        "https://images.unsplash.com/photo-1583248369069-9d91f5bac537?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 2,
      name: "Heritage Artisans Co.",
      description: "Traditional craft preservation and commercial production.",
      image:
        "https://images.unsplash.com/photo-1583248369069-9d91f5bac537?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 3,
      name: "Skilled Works Enterprise",
      description: "Large-scale skilled labor and contracting services.",
      image:
        "https://images.unsplash.com/photo-1583248369069-9d91f5bac537?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 4,
      name: "Professional Trades Ltd",
      description: "Certified trade services and apprenticeship programs.",
      image:
        "https://images.unsplash.com/photo-1583248369069-9d91f5bac537?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
  ],
  "event-existing": [
    {
      id: 1,
      name: "Grand Events Management",
      description: "Full-service event planning and execution company.",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 2,
      name: "Concept Development Group",
      description: "Creative event concepts and brand experiences.",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 3,
      name: "Corporate Events Ltd",
      description: "Business conferences and corporate gathering specialists.",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 4,
      name: "Festival Productions Co.",
      description: "Large-scale public events and festival management.",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
  ],
  "education-existing": [
    {
      id: 1,
      name: "Heritage Educational Group",
      description:
        "Established educational institution with multiple campuses and programs.",
      image:
        "https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 2,
      name: "Advocacy Foundation Ltd",
      description:
        "Long-standing organization driving policy changes and social advocacy.",
      image:
        "https://images.unsplash.com/photo-1551836026-d5c8c1d20900?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 3,
      name: "Professional Training Institute",
      description:
        "Comprehensive professional development and certification programs.",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 4,
      name: "Community Education Network",
      description:
        "Nationwide educational outreach and community empowerment programs.",
      image:
        "https://images.unsplash.com/photo-1588072432836-e100327d50a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
  ],
  "health-existing": [
    {
      id: 1,
      name: "Wellness Medical Group",
      description:
        "Comprehensive healthcare services with multiple specialist facilities.",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 2,
      name: "Prime Healthcare Systems",
      description:
        "Integrated healthcare network with hospitals and wellness centers.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 3,
      name: "Fitness Empire Ltd",
      description: "Chain of premium fitness centers and wellness programs.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 4,
      name: "Community Health Initiative",
      description: "Public health advocacy and community wellness programs.",
      image:
        "https://images.unsplash.com/photo-1584467735871-8db9ac8e5e3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
  ],
  "media-existing": [
    {
      id: 1,
      name: "National Media Network",
      description:
        "Established media house with print, broadcast, and digital platforms.",
      image:
        "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 2,
      name: "Journalism Excellence Group",
      description:
        "Award-winning investigative journalism and media production.",
      image:
        "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 3,
      name: "Broadcast Media Corporation",
      description: "Leading television and radio broadcasting company.",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 4,
      name: "Digital Publishing House",
      description:
        "Established publisher with extensive media reach and influence.",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
  ],
  "sports-existing": [
    {
      id: 1,
      name: "Professional Sports Academy",
      description: "Elite sports training facility with national recognition.",
      image:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 2,
      name: "Fitness Chain Corporation",
      description:
        "National chain of sports and fitness centers with comprehensive programs.",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 3,
      name: "Aerobics Federation Ltd",
      description:
        "National governing body for aerobics and fitness competitions.",
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 4,
      name: "Sports Development Foundation",
      description:
        "Organization promoting sports at grassroots and professional levels.",
      image:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
  ],
  "content-existing": [
    {
      id: 1,
      name: "Media Production Studio",
      description:
        "Established film and content production company with international reach.",
      image:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 2,
      name: "Cinema Distribution Network",
      description:
        "Major film distribution company with nationwide cinema presence.",
      image:
        "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 3,
      name: "Content Creation Empire",
      description:
        "Multi-platform content company with extensive digital presence.",
      image:
        "https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 4,
      name: "Film Production House",
      description:
        "Award-winning film production company with international recognition.",
      image:
        "https://images.unsplash.com/photo-1489599809505-7c6f0bdbe3e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
  ],
};

// -------------------------------------------------
//  Global variables
// -------------------------------------------------
let userVotes = {};
let currentCategory = "agriculture-startup";
let currentTab = "startups";
let selectedNominee = null;
let hasSubmittedAllVotes = false;
let voterEmail = "";

//  DOM Elements
// -------------------------------------------------
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");
const categoryItems = document.querySelectorAll(".category-item");
const nomineesContainer = document.getElementById("nominees-container");
const categoryTitle = document.querySelector(".category-title");
const prevBtn = document.getElementById("prev-category");
const nextBtn = document.getElementById("next-category");
const submitBtn = document.getElementById("submit-votes");
const confirmationModal = document.getElementById("confirmation-modal");
const successModal = document.getElementById("success-modal");
const modalNomineeName = document.getElementById("modal-nominee-name");
const modalCategoryName = document.getElementById("modal-category-name");
const modalNomineeImage = document.getElementById("modal-nominee-image");
const modalNomineeDescription = document.getElementById(
  "modal-nominee-description"
);
const cancelVoteBtn = document.getElementById("cancel-vote");
const confirmVoteBtn = document.getElementById("confirm-vote");
const closeSuccessBtn = document.getElementById("close-success");
const successProgress = document.getElementById("success-progress");
const voterEmailInput = document.getElementById("voter-email");
const emailError = document.getElementById("email-error");

// -------------------------------------------------
//  INITIALISATION
// -------------------------------------------------
function init() {
  loadVotesFromStorage();
  setupTabListeners();
  loadCategory(currentCategory);
  setupEventListeners();
  updateNavigationButtons();
  updateSubmitButton();

  if (hasSubmittedAllVotes) disableAllVoting();
}

// -------------------------------------------------
//  TAB MANAGEMENT
// -------------------------------------------------
function setupTabListeners() {
  tabButtons.forEach((btn) =>
    btn.addEventListener("click", () => switchTab(btn.dataset.tab))
  );
}
function switchTab(tabId) {
  tabButtons.forEach((b) => b.classList.remove("active"));
  document.querySelector(`[data-tab="${tabId}"]`).classList.add("active");
  tabContents.forEach((c) => c.classList.remove("active"));
  document.getElementById(`${tabId}-tab`).classList.add("active");
  currentTab = tabId;
  const firstCat = document.querySelector(`#${tabId}-tab .category-item`)
    .dataset.category;
  selectCategory(firstCat);
}

// -------------------------------------------------
//  EVENT LISTENERS
// -------------------------------------------------
function setupEventListeners() {
  categoryItems.forEach((item) =>
    item.addEventListener("click", () => selectCategory(item.dataset.category))
  );
  prevBtn.addEventListener("click", goToPreviousCategory);
  nextBtn.addEventListener("click", goToNextCategory);
  submitBtn.addEventListener("click", submitAllVotes);
  cancelVoteBtn.addEventListener("click", closeConfirmationModal);
  confirmVoteBtn.addEventListener("click", handleConfirmVote);
  closeSuccessBtn.addEventListener("click", closeSuccessModal);
}

// -------------------------------------------------
//  STORAGE
// -------------------------------------------------
function loadVotesFromStorage() {
  const saved = localStorage.getItem("calabarAwardsVotes");
  const savedEmail = localStorage.getItem("calabarVoterEmail");
  if (saved) {
    userVotes = JSON.parse(saved);
    updateVoteStatus();
    if (localStorage.getItem("calabarAwardsSubmitted") === "true")
      hasSubmittedAllVotes = true;
  }
  if (savedEmail) {
    voterEmail = savedEmail;
    if (voterEmailInput) voterEmailInput.value = voterEmail;
  }
}
function saveVotesToStorage() {
  localStorage.setItem("calabarAwardsVotes", JSON.stringify(userVotes));
}
function saveEmailToStorage() {
  localStorage.setItem("calabarVoterEmail", voterEmail);
}
// -------------------------------------------------
//  CATEGORY / NOMINEE UI
// -------------------------------------------------
function loadCategory(cat) {
  updateActiveCategoryIndicator(cat);
  const isStartup = cat.includes("startup");
  categoryTitle.innerHTML = `
    ${getCategoryName(cat)}
    <span class="category-badge ${
      isStartup ? "badge-startup" : "badge-existing"
    }">
      ${isStartup ? "Startup" : "Existing Business"}
    </span>`;
  nomineesContainer.innerHTML = "";
  const hasVote = !!userVotes[cat]?.nomineeId;
  nomineesData[cat]?.forEach((n, i) =>
    nomineesContainer.appendChild(createNomineeCard(cat, n, hasVote, i))
  );
  setTimeout(
    () =>
      document
        .querySelectorAll(".nominee-card")
        .forEach((c) => c.classList.add("fade-in")),
    100
  );
}
function updateActiveCategoryIndicator(cat) {
  document
    .querySelectorAll(".category-item")
    .forEach((i) => i.classList.remove("active"));
  document.querySelector(`[data-category="${cat}"]`)?.classList.add("active");
}
function createNomineeCard(cat, nom, hasCatVote, idx) {
  const card = document.createElement("div");
  card.className = "nominee-card";
  card.style.animationDelay = `${idx * 0.1}s`;

  const isVoted = userVotes[cat]?.nomineeId === nom.id;
  const isSubmitted = userVotes[cat]?.submitted;
  const disabled = hasCatVote || isSubmitted || hasSubmittedAllVotes;

  card.innerHTML = `
    <div class="nominee-image"><img src="${nom.image}" alt="${nom.name}"></div>
    <div class="nominee-name">${nom.name}</div>
    <div class="nominee-description">${nom.description}</div>
    <button class="vote-btn ${isVoted ? "voted" : ""} ${
    disabled ? "submitted" : ""
  }"
            data-id="${nom.id}" ${disabled ? "disabled" : ""}>
      ${getVoteButtonText(
        hasCatVote,
        isVoted,
        isSubmitted,
        hasSubmittedAllVotes
      )}
    </button>`;

  if (!disabled && !hasSubmittedAllVotes) {
    card.querySelector(".vote-btn").addEventListener("click", () => {
      if (!hasCatVote) showConfirmationModal(cat, nom);
    });
  }
  return card;
}
function getCategoryName(cat) {
  const map = {
    "agriculture-startup": "Agriculture and Value Chain",
    "retail-startup": "Retail, Wholesale and Distributorship",
    "fashion-startup": "Fashion and Styling",
    "technology-startup": "Technology and Innovation",
    "tourism-startup": "Tourism and Hospitality",
    "entertainment-startup": "Entertainment and Lifestyle",
    "transportation-startup": "Transportation and Logistics",
    "artisan-startup": "Artisan and Skilled Works",
    "event-startup": "Event Management and Concept",
    "education-startup": "Education and Advocacy",
    "health-startup": "Health and Wellness",
    "media-startup": "Media and Journalism",
    "sports-startup": "Sports and Aerobics",
    "content-startup": "Content Creation and Filmmaking",

    // Existing Businesses
    "agriculture-existing": "Agriculture and Value Chain",
    "retail-existing": "Retail, Wholesale and Distributorship",
    "fashion-existing": "Fashion and Styling",
    "technology-existing": "Technology and Innovation",
    "tourism-existing": "Tourism and Hospitality",
    "entertainment-existing": "Entertainment and Lifestyle",
    "transportation-existing": "Transportation and Logistics",
    "artisan-existing": "Artisan and Skilled Works",
    "event-existing": "Event Management and Concept",
    "education-existing": "Education and Advocacy",
    "health-existing": "Health and Wellness",
    "media-existing": "Media and Journalism",
    "sports-existing": "Sports and Aerobics",
    "content-existing": "Content Creation and Filmmaking",
  };
  return map[cat] || cat;
}
function getVoteButtonText(hasCatVote, isVoted, isSubmitted, allSubmitted) {
  if (allSubmitted) return "Submitted";
  if (isSubmitted) return "Submitted";
  if (isVoted) return "Voted";
  if (hasCatVote) return "Disabled";
  return "Vote";
}

// CONFIRMATION MODAL
function showConfirmationModal(cat, nom) {
  selectedNominee = { cat, nom };
  modalNomineeName.textContent = nom.name;
  modalCategoryName.textContent = getCategoryName(cat);
  modalNomineeImage.src = nom.image;
  modalNomineeDescription.textContent = nom.description;

  // Pre-fill email if already saved
  if (voterEmail) {
    voterEmailInput.value = voterEmail;
  } else {
    voterEmailInput.value = "";
  }
  emailError.style.display = "none";

  confirmationModal.classList.add("active");
}
function closeConfirmationModal() {
  confirmationModal.classList.remove("active");
  selectedNominee = null;
}

// VALIDATE EMAIL
function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
}

// HANDLE CONFIRM VOTE WITH EMAIL VALIDATION
function handleConfirmVote() {
  const email = voterEmailInput.value.trim();

  if (!email) {
    emailError.textContent = "Email is required.";
    emailError.style.display = "block";
    return;
  }
  if (!validateEmail(email)) {
    emailError.textContent = "Please enter a valid email address.";
    emailError.style.display = "block";
    return;
  }

  emailError.style.display = "none";
  voterEmail = email;
  saveEmailToStorage();

  confirmSingleVote();
}

// -------------------------------------------------
//  SINGLE VOTE CONFIRM → EMAILJS + SUCCESS MODAL
// -------------------------------------------------
function confirmSingleVote() {
  if (!selectedNominee) return;
  const { cat, nom } = selectedNominee;

  // Store vote locally
  userVotes[cat] = {
    nomineeId: nom.id,
    nomineeName: nom.name,
    categoryName: getCategoryName(cat),
    type: nom.type,
    description: nom.description,
    submitted: false,
    timestamp: new Date().toISOString(),
  };

  saveVotesToStorage();
  updateVoteStatus();
  updateSubmitButton();
  closeConfirmationModal();
  loadCategory(currentCategory);

  // Send individual email with proper parameters
  const userId = generateUserIdentifier();

  const templateParams = {
    to_email: "peoplesfirstenterpriseawards@gmail.com",
    from_name: "Calabar Awards Voting System",
    voter_id: userId,
    voter_email: voterEmail,
    category: getCategoryName(cat),
    nominee_name: nom.name,
    nominee_type: nom.type,
    nominee_description: nom.description,
    vote_time: new Date().toLocaleString(),

    subject: `New Vote for ${getCategoryName(cat)}`,
    message: `A new vote has been cast for ${nom.name} in ${getCategoryName(
      cat
    )} category.`,
  };

  console.log("Sending vote with email:", templateParams);
  showIndividualProgressModal();

  emailjs
    .send("service_ipsz5gs", "template_shqjapb", templateParams)
    .then((response) => {
      console.log("EmailJS Success:", response.status, response.text);
      userVotes[cat].submitted = true;
      saveVotesToStorage();
      updateVoteStatus();
      loadCategory(currentCategory);
      finishIndividualModal(
        true,
        `Your vote for ${nom.name} was sent successfully!`
      );
    })
    .catch((error) => {
      console.error("EmailJS Full Error:", error);
      console.error("Error details:", {
        status: error.status,
        text: error.text,
        message: error.message,
      });
      finishIndividualModal(
        false,
        "Failed to send vote. Please check console for details."
      );
    });
}

// -------------------------------------------------
//  INDIVIDUAL MODAL HELPERS
// -------------------------------------------------
function showIndividualProgressModal() {
  successModal.classList.add("active");
  successProgress.style.width = "0%";
  let p = 0;
  const iv = setInterval(() => {
    p += 8;
    successProgress.style.width = `${p}%`;
    if (p >= 100) clearInterval(iv);
  }, 80);
}
function finishIndividualModal(success, message) {
  const icon = document.querySelector(".success-icon");
  const title = document.querySelector(".success-modal .modal-title");
  const desc = document.querySelector(".success-modal .modal-description");

  if (success) {
    icon.innerHTML = '<i class="fas fa-check-circle"></i>';
    icon.style.color = "var(--success)";
    title.textContent = "Vote Sent!";
  } else {
    icon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
    icon.style.color = "var(--danger)";
    title.textContent = "Send Error";
  }
  desc.innerHTML = message;
  successProgress.style.width = "100%";
}
function closeSuccessModal() {
  successModal.classList.remove("active");
  successProgress.style.width = "0%";
}

// -------------------------------------------------
//  NAVIGATION
// -------------------------------------------------
function selectCategory(cat) {
  currentCategory = cat;
  loadCategory(cat);
  updateNavigationButtons();
}
function goToPreviousCategory() {
  const cats = getCurrentTabCategories();
  const idx = cats.findIndex((c) => c.dataset.category === currentCategory);
  const prev = (idx - 1 + cats.length) % cats.length;
  selectCategory(cats[prev].dataset.category);
}
function goToNextCategory() {
  const cats = getCurrentTabCategories();
  const idx = cats.findIndex((c) => c.dataset.category === currentCategory);
  const next = (idx + 1) % cats.length;
  selectCategory(cats[next].dataset.category);
}
function getCurrentTabCategories() {
  return Array.from(
    document.querySelectorAll(`#${currentTab}-tab .category-item`)
  );
}
function updateNavigationButtons() {
  const cats = getCurrentTabCategories();
  const idx = cats.findIndex((c) => c.dataset.category === currentCategory);
  prevBtn.disabled = idx === 0;
  nextBtn.disabled = idx === cats.length - 1;
}

// -------------------------------------------------
//  UI STATUS
// -------------------------------------------------
function updateVoteStatus() {
  categoryItems.forEach((item) => {
    const cat = item.dataset.category;
    const el = item.querySelector(".vote-status");
    if (userVotes[cat]?.nomineeId) {
      if (userVotes[cat].submitted) {
        el.innerHTML =
          '<i class="fas fa-check-circle" style="color:var(--success)"></i>';
        el.title = "Vote submitted";
      } else {
        el.innerHTML =
          '<i class="fas fa-check" style="color:var(--accent)"></i>';
        el.title = "Vote selected";
      }
    } else {
      el.innerHTML = "";
      el.title = "";
    }
  });
}
function getAllCategories() {
  return [
    ...Array.from(
      document.querySelectorAll("#startups-tab .category-item")
    ).map((i) => i.dataset.category),
    ...Array.from(
      document.querySelectorAll("#existing-tab .category-item")
    ).map((i) => i.dataset.category),
  ];
}
function updateSubmitButton() {
  const all = getAllCategories();
  const voted = all.filter((c) => userVotes[c]?.nomineeId).length;
  const total = all.length;

  submitBtn.disabled = voted < total || hasSubmittedAllVotes;

  if (hasSubmittedAllVotes) {
    submitBtn.textContent = "Votes Submitted";
    submitBtn.style.background = "rgba(255,255,255,0.2)";
  } else if (voted === total) {
    submitBtn.textContent = `Submit All Votes (${voted}/${total})`;
  } else {
    submitBtn.textContent = `Submit Votes (${voted}/${total})`;
  }
}

// -------------------------------------------------
//  FINAL “SUBMIT ALL”
// -------------------------------------------------
function submitAllVotes() {
  if (!voterEmail) {
    alert("Please cast at least one vote to provide your email.");
    return;
  }
  submitBtn.disabled = true;
  submitBtn.textContent = "Submitting…";

  const summary = prepareAllVoteSummary();
  sendAllVoteSummary(summary);
}
function prepareAllVoteSummary() {
  const votes = [];
  Object.entries(userVotes).forEach(([cat, v]) => {
    if (v.nomineeId) {
      votes.push({
        category: getCategoryName(cat),
        nominee: v.nomineeName,
        type: v.type,
        description: v.description,
        time: new Date(v.timestamp).toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      });
    }
  });
  return {
    totalVotes: votes.length,
    timestamp: new Date().toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }),
    votes,
  };
}
function sendAllVoteSummary(data) {
  successModal.classList.add("active");
  let prog = 0;
  const iv = setInterval(() => {
    prog += 5;
    successProgress.style.width = `${prog}%`;
    if (prog >= 100) clearInterval(iv);
  }, 100);

  const userId = generateUserIdentifier();
  const params = {
    to_email: "template_individual_vote",
    from_name: "Calabar Awards Voting System",
    voter_email: voterEmail,
    total_votes: data.totalVotes.toString(),
    submission_time: data.timestamp,
    vote_details: formatAllVoteDetails(data.votes),
    user_identifier: userId,
    current_time: new Date().toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }),
  };

  emailjs
    .send("service_ipsz5gs", "template_r6m8lmk", params)
    .then(() => {
      markAllAsSubmitted();
      finishIndividualModal(
        true,
        "All votes have been submitted successfully!"
      );
    })
    .catch(() => {
      finishIndividualModal(
        false,
        "Failed to submit all votes. Please try again."
      );
      submitBtn.disabled = false;
      submitBtn.textContent = "Submit Your Votes";
    });
}
function formatAllVoteDetails(votes) {
  return votes
    .map(
      (v, i) => `
      <div class="vote-item">
        <div class="category-name">${i + 1}. ${v.category}</div>
        <div class="nominee-name">Voted For: ${v.nominee}</div>
        <div class="type">Type: ${v.type}</div>
        <div class="desc">Description: ${v.description}</div>
        <div class="vote-time">Voted at: ${v.time}</div>
      </div>`
    )
    .join("");
}
function markAllAsSubmitted() {
  Object.keys(userVotes).forEach((c) => (userVotes[c].submitted = true));
  saveVotesToStorage();
  localStorage.setItem("calabarAwardsSubmitted", "true");
  hasSubmittedAllVotes = true;
  disableAllVoting();
}
function disableAllVoting() {
  document.querySelectorAll(".vote-btn").forEach((b) => {
    b.disabled = true;
    b.textContent = "Submitted";
    b.style.background = "rgba(255,255,255,0.1)";
    b.style.color = "rgba(255,255,255,0.5)";
  });
  categoryItems.forEach((i) => {
    i.style.pointerEvents = "none";
    i.style.opacity = "0.6";
  });
  prevBtn.disabled = nextBtn.disabled = submitBtn.disabled = true;
  submitBtn.textContent = "Votes Submitted";
  submitBtn.style.background = "rgba(255,255,255,0.2)";
}
function generateUserIdentifier() {
  let id = localStorage.getItem("calabarVoterId");
  if (!id) {
    id = "VOTER_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9);
    localStorage.setItem("calabarVoterId", id);
  }
  return id;
}

// -------------------------------------------------
//  START
// -------------------------------------------------
document.addEventListener("DOMContentLoaded", init);
