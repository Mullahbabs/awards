// Initialize EmailJS with your credentials
emailjs.init("_");
console.log("Init done");

// Updated nomineesData structure with all 10 categories for Startups and Existing Businesses
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
      name: "Digital Bridge Africa",
      description: "Fintech solutions bridging financial inclusion gaps.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
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
  "entrepreneur-startup": [
    {
      id: 1,
      name: "Visionary Leaders Group",
      description: "Multi-sector entrepreneurial ventures with social impact.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 2,
      name: "Innovation Catalyst",
      description: "Serial entrepreneur with multiple successful startups.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 3,
      name: "Growth Architects",
      description: "Business scaling experts with proven track record.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 4,
      name: "Community Builder Inc.",
      description: "Entrepreneur focused on sustainable community development.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
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
  "entrepreneur-existing": [
    {
      id: 1,
      name: "Business Empire Group",
      description: "Diversified business portfolio across multiple industries.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 2,
      name: "Industry Leader Corp",
      description: "Market leader with significant economic impact.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 3,
      name: "Visionary Holdings",
      description: "Strategic investments and business development.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 4,
      name: "Enterprise Solutions Ltd",
      description: "Comprehensive business services and consulting.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
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

// -------------------------------------------------
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
  confirmVoteBtn.addEventListener("click", confirmSingleVote); // NEW
  closeSuccessBtn.addEventListener("click", closeSuccessModal);
}

// -------------------------------------------------
//  STORAGE
// -------------------------------------------------
function loadVotesFromStorage() {
  const saved = localStorage.getItem("calabarAwardsVotes");
  if (saved) {
    userVotes = JSON.parse(saved);
    updateVoteStatus();
    if (localStorage.getItem("calabarAwardsSubmitted") === "true")
      hasSubmittedAllVotes = true;
  }
}
function saveVotesToStorage() {
  localStorage.setItem("calabarAwardsVotes", JSON.stringify(userVotes));
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
    "entrepreneur-startup": "Overall Entrepreneur of the Year",

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
    "entrepreneur-existing": "Overall Entrepreneur of the Year",
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

// -------------------------------------------------
//  CONFIRMATION MODAL
// -------------------------------------------------
function showConfirmationModal(cat, nom) {
  selectedNominee = { cat, nom };
  modalNomineeName.textContent = nom.name;
  modalCategoryName.textContent = getCategoryName(cat);
  modalNomineeImage.src = nom.image;
  modalNomineeDescription.textContent = nom.description;
  confirmationModal.classList.add("active");
}
function closeConfirmationModal() {
  confirmationModal.classList.remove("active");
  selectedNominee = null;
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

  // CRITICAL: Use the exact parameter names that match your EmailJS template
  const templateParams = {
    to_email: "peoplesfirstenterpriseawards@gmail.com",
    from_name: "Calabar Awards Voting System",
    voter_id: userId,
    category: getCategoryName(cat), // Changed to match likely template variable
    nominee_name: nom.name,
    nominee_type: nom.type,
    nominee_description: nom.description,
    vote_time: new Date().toLocaleString(),
    // Add these common required parameters:
    subject: `New Vote for ${getCategoryName(cat)}`,
    message: `A new vote has been cast for ${nom.name} in ${getCategoryName(
      cat
    )} category.`,
  };

  console.log("Sending email with params:", templateParams);
  showIndividualProgressModal();

  // Use the CORRECT service and template IDs
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
//  INDIVIDUAL MODAL HELPERS (reuse existing #success-modal)
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
//  FINAL “SUBMIT ALL” (unchanged, only renamed)
// -------------------------------------------------
function submitAllVotes() {
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
    .send("service_ipsz5gs", "template_r6m8lmk", params) // <-- ORIGINAL TEMPLATE
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
