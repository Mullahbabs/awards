// Initialize EmailJS with your credentials
emailjs.init("_JHzclbB7XxiSqGDZ");
console.log("Init done");

const nomineesData = {
  // ========== STARTUPS CATEGORIES ==========

  "agriculture-startup": [
    {
      id: 1,
      name: "AA PETANA Services Ltd",
      description: "",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 2,
      name: "Saminahibor Ltd.",
      description: "Inah Ibor Sam",
      image:
        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 3,
      name: "Katye's Delyte Services Ltd",
      description: "",
      image:
        "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 4,
      name: "nawiwi agro",
      description: "Laniyi Stephens",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 5,
      name: "Sat Farms",
      description: "Uzo Eni-abogu",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
  ],
  "agriculture-existing": [
    {
      id: 1,
      name: "Hozzby Concept",
      description: "Ikenna Onyinye Ezem",
      image:
        "https://images.unsplash.com/photo-1625246332166-18e2f6a5b9c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 2,
      name: "Mathias Ejukwa and Son's Ventures",
      description: "",
      image:
        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 3,
      name: "Obudu Farms Ltd.",
      description: "Kechi Mathew Essa",
      image:
        "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 4,
      name: "Alexi Newton",
      description: "Mrs Chimmuanya Alex Ukam",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 5,
      name: "Yutiee Marti",
      description: "Utibe",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
  ],
  "tourism-startup": [
    {
      id: 1,
      name: "Destiny pasteries and food Ltd.",
      description: "Destiny",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 2,
      name: "Green Dishes",
      description: "Ima",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 3,
      name: "Acana's Kitchen",
      description: "Chimsom Achikeh",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 4,
      name: "Luscious Treats",
      description: "Nwaokolo Chinagbanbo",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 5,
      name: "Beuberry",
      description: "",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
  ],
  "media-startup": [
    {
      id: 1,
      name: "Southsouth Digest",
      description: "",
      image:
        "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 2,
      name: "Events in Cross River",
      description: "",
      image:
        "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 3,
      name: "E-Cliques Media",
      description: "",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 4,
      name: "The Leader Ng",
      description: "",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 5,
      name: "Newspec",
      description: "",
      image:
        "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
  ],
  "media-existing": [
    {
      id: 1,
      name: "Calabargist",
      description: "",
      image:
        "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 2,
      name: "Hit FM",
      description: "",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 3,
      name: "Chronicle",
      description: "",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 4,
      name: "Comrade Archibong Bassey",
      description: "",
      image:
        "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 5,
      name: "Comrade Michael Abang",
      description: "",
      image:
        "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
  ],
  "tourism-existing": [
    {
      id: 1,
      name: "Stainless Kitchen and Event Mgt.",
      description: "Clement Ikpa Onah",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 2,
      name: "Zhanga Food",
      description: "Joseph Ewah",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 3,
      name: "Hara's Place",
      description: "",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 4,
      name: "Alyce-Ice",
      description: "",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 5,
      name: "Queenieez Kitchen",
      description: "Queensley Bassey",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
  ],
  "fashion-startup": [
    {
      id: 1,
      name: "Splendour Fashion Home",
      description: "Winifred Uguana Ana",
      image:
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 2,
      name: "MozAfrik fashion and styles",
      description: "Ocheigu Moses Lazarus",
      image:
        "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 3,
      name: "The Milliner Girl",
      description: "Chinenye Ibiam",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 4,
      name: "ENYIQUE.NG",
      description: "Abba Kelechi",
      image:
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 5,
      name: "CouturebyRia",
      description: "Gloria Olinya",
      image:
        "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
  ],
  "fashion-existing": [
    {
      id: 1,
      name: "Hillary Fashion",
      description: "Hilary Adah Udayi",
      image:
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 2,
      name: "Gallery 08 et al Ltd.",
      description: "Dr. Uwana Nnochiri",
      image:
        "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 3,
      name: "Ajeboh Clothing & Branding",
      description: "Ajeboh Krislawrence",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 4,
      name: "Dressaddiction Clothiers",
      description: "",
      image:
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 5,
      name: "SEWFITICATED BY IB",
      description: "",
      image:
        "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
  ],
  "transportation-startup": [
    {
      id: 1,
      name: "Usetu Logistics",
      description: "",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 2,
      name: "Kwik Logistics",
      description: "",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 3,
      name: "Now Now Logistics",
      description: "",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 4,
      name: "Legedis Errands",
      description: "",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 5,
      name: "Mee's Logistics",
      description: "",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
  ],
  "transportation-existing": [
    {
      id: 1,
      name: "GIG Logistics",
      description: "",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 2,
      name: "SeaExpress Travels",
      description: "",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 3,
      name: "Abito Ferry",
      description: "",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 4,
      name: "Brightflow Conglomerate",
      description: "",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 5,
      name: "Joza Global",
      description: "",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
  ],
  "event-startup": [
    {
      id: 1,
      name: "Jossy E Concept",
      description: "",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 2,
      name: "Kamich Event",
      description: "",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 3,
      name: "Sharp Catering and Events",
      description: "",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 4,
      name: "Genie",
      description: "",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 5,
      name: "Jayhnes Touch Eventz",
      description: "",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
  ],
  "event-existing": [
    {
      id: 1,
      name: "Ruvent",
      description: "",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 2,
      name: "Slaishows Ltd.",
      description: "",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 3,
      name: "Vicky Nanky",
      description: "",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 4,
      name: "Yetty Partyaffairs",
      description: "",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 5,
      name: "Uwayen's Events and Bridals",
      description: "",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 6,
      name: "Jayhnes Touch Eventz",
      description: "",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
  ],
  "manufacturing-startup": [
    {
      id: 1,
      name: "Ekeng Duke Nig. Enterprise",
      description: "",
      image:
        "https://images.unsplash.com/photo-1583248369069-9d91f5bac537?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 2,
      name: "Dividonai Confectioneries Ltd",
      description: "",
      image:
        "https://images.unsplash.com/photo-1583248369069-9d91f5bac537?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 3,
      name: "Sure Wash",
      description: "",
      image:
        "https://images.unsplash.com/photo-1583248369069-9d91f5bac537?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 4,
      name: "Abisac ventures",
      description: "",
      image:
        "https://images.unsplash.com/photo-1583248369069-9d91f5bac537?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 5,
      name: "Seekees Footies",
      description: "",
      image:
        "https://images.unsplash.com/photo-1583248369069-9d91f5bac537?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
  ],
  "manufacturing-existing": [
    {
      id: 1,
      name: "Tripple E Footwears",
      description: "",
      image:
        "https://images.unsplash.com/photo-1583248369069-9d91f5bac537?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 2,
      name: "Edigie Furnitures",
      description: "",
      image:
        "https://images.unsplash.com/photo-1583248369069-9d91f5bac537?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 3,
      name: "DeFilas Group (Paint)",
      description: "",
      image:
        "https://images.unsplash.com/photo-1583248369069-9d91f5bac537?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 4,
      name: "Omatech Feed",
      description: "",
      image:
        "https://images.unsplash.com/photo-1583248369069-9d91f5bac537?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 5,
      name: "Ediye by Pdbraide ltd",
      description: "",
      image:
        "https://images.unsplash.com/photo-1583248369069-9d91f5bac537?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
  ],
  "entertainment-startup": [
    {
      id: 1,
      name: "Vogue",
      description: "",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 2,
      name: "Palladium by Gerald",
      description: "",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 3,
      name: "Tipsy Mistress",
      description: "",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 4,
      name: "Romaan Premium",
      description: "",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 5,
      name: "Deluxe",
      description: "",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
  ],
  "entertainment-existing": [
    {
      id: 1,
      name: "Beer hub",
      description: "",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 2,
      name: "Office Pub",
      description: "",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 3,
      name: "Amber",
      description: "",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 4,
      name: "Bays Bar",
      description: "",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 5,
      name: "Voltage",
      description: "",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
  ],
  "retail-startup": [
    {
      id: 1,
      name: "Tessy Ventures",
      description: "",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 2,
      name: "Beefy Koncept",
      description: "",
      image:
        "https://images.unsplash.com/photo-1556742044-3c6c8b7b1b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 3,
      name: "Shakara By Lona",
      description: "",
      image:
        "https://images.unsplash.com/photo-1556742045-3c6c8b7b1b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 4,
      name: "Chika Enterprise",
      description: "",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 5,
      name: "Motema Cherie Udoh",
      description: "",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
  ],
  "retail-existing": [
    {
      id: 1,
      name: "Barbier and More",
      description: "",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 2,
      name: "Birdview Interior Designs",
      description: "",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 3,
      name: "Christy-Mary Ventures",
      description: "",
      image:
        "https://images.unsplash.com/photo-1556742044-3c6c8b7b1b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 4,
      name: "Coslow Stores",
      description: "",
      image:
        "https://images.unsplash.com/photo-1556742045-3c6c8b7b1b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 5,
      name: "Gracelee Global Resources",
      description: "",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
  ],
  "technology-startup": [
    {
      id: 1,
      name: "Bright Light International",
      description: "",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 2,
      name: "Inwang Foods",
      description: "",
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 3,
      name: "Hack51 Africa Ltd.",
      description: "",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 4,
      name: "BellaTECH NG.",
      description: "Beshel Benjamin (Mullahbabs)",
      image: "img/me.jpg",
      type: "startup",
    },
    {
      id: 5,
      name: "Odutoocute Designz",
      description: "",
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
  ],
  "technology-existing": [
    {
      id: 1,
      name: "Gob Media Enterprise",
      description: "",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 2,
      name: "Top Great Computer Academy",
      description: "",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 3,
      name: "Emma's World Ent.",
      description: "",
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 4,
      name: "C. Edison Phones",
      description: "",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 5,
      name: "E2O",
      description: "",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
  ],
  "content-startup": [
    {
      id: 1,
      name: "Kandy Umoh",
      description: "",
      image:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 2,
      name: "Beezy Mouth",
      description: "",
      image:
        "https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 3,
      name: "Sister Becky",
      description: "",
      image:
        "https://images.unsplash.com/photo-1489599809505-7c6f0bdbe3e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 4,
      name: "Abel The Influencer",
      description: "",
      image:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 5,
      name: "Perpetual Ekpo",
      description: "",
      image:
        "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
  ],
  "content-existing": [
    {
      id: 1,
      name: "Patrick Dominic",
      description: "",
      image:
        "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 2,
      name: "Mc Mbakara",
      description: "",
      image:
        "https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 3,
      name: "Celyn Ukam",
      description: "",
      image:
        "https://images.unsplash.com/photo-1489599809505-7c6f0bdbe3e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 4,
      name: "Mc Koboko",
      description: "",
      image:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 5,
      name: "Gina Idor Poetry",
      description: "",
      image:
        "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
  ],
  "health-startup": [
    {
      id: 1,
      name: "Oma Dance Academy",
      description: "",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 2,
      name: "SR Fitness",
      description: "",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 3,
      name: "Hogis Fitness",
      description: "",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 4,
      name: "Romaan Fitness",
      description: "",
      image:
        "https://images.unsplash.com/photo-1584467735871-8db9ac8e5e3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 5,
      name: "Fusion Fitness",
      description: "",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
  ],
  "health-existing": [
    {
      id: 1,
      name: "Profitness",
      description: "",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 2,
      name: "Mikki fitness",
      description: "",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 3,
      name: "Ifiok Fitness",
      description: "",
      image:
        "https://images.unsplash.com/photo-1584467735871-8db9ac8e5e3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 4,
      name: "Andrew Millers Fitness",
      description: "",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 5,
      name: "fit wit gym and spa",
      description: "",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
  ],
  "artisan-startup": [
    {
      id: 1,
      name: "Oratex Limited",
      description: "",
      image:
        "https://images.unsplash.com/photo-1583248369069-9d91f5bac537?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 2,
      name: "Ricrubby Ltd.",
      description: "",
      image:
        "https://images.unsplash.com/photo-1583248369069-9d91f5bac537?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 3,
      name: "Dajieom Concept",
      description: "",
      image:
        "https://images.unsplash.com/photo-1583248369069-9d91f5bac537?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 4,
      name: "New Age Sharp Carpenters Enterprise",
      description: "",
      image:
        "https://images.unsplash.com/photo-1583248369069-9d91f5bac537?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
  ],
  "artisan-existing": [
    {
      id: 1,
      name: "Chris Enterprise",
      description: "",
      image:
        "https://images.unsplash.com/photo-1583248369069-9d91f5bac537?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 2,
      name: "Bullajo Global",
      description: "",
      image:
        "https://images.unsplash.com/photo-1583248369069-9d91f5bac537?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 3,
      name: "Benco Fabrication",
      description: "",
      image:
        "https://images.unsplash.com/photo-1583248369069-9d91f5bac537?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 4,
      name: "Edigie Enterprise",
      description: "",
      image:
        "https://images.unsplash.com/photo-1583248369069-9d91f5bac537?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
  ],
  "education-startup": [
    {
      id: 1,
      name: "Surestar Fun Academy",
      description: "",
      image:
        "https://images.unsplash.com/photo-1588072432836-e100327d50a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 2,
      name: "NAI ART Therapy Studio",
      description: "",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 3,
      name: "Cheriehill School Ltd.",
      description: "",
      image:
        "https://images.unsplash.com/photo-1551836026-d5c8c1d20900?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 4,
      name: "My Business, My Tomorrow with the speaking nightingale",
      description: "",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
  ],
  "education-existing": [
    {
      id: 1,
      name: "Walkathon by Healthy Billionaire Club",
      description: "",
      image:
        "https://images.unsplash.com/photo-1588072432836-e100327d50a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 2,
      name: "The Orange Show by Abenmire",
      description: "",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 3,
      name: "AP Montessori",
      description: "",
      image:
        "https://images.unsplash.com/photo-1551836026-d5c8c1d20900?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 4,
      name: "Blazing Feet Schools",
      description: "",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
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
        "Failed to send vote. Please contact admin."
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
