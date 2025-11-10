// Sponsors Data
const sponsorsData = [
  {
    name: "United Bank Of Africa",
    logo: "img/uba.jpg",
    type: "Platinum",
  },
  {
    name: "Bank Of Industry",
    logo: "img/boa.jpg",
    type: "Gold",
  },
  {
    name: "UDUA Premium E-Commerce",
    logo: "img/232.jpg",
    type: "Gold",
  },
  {
    name: "Sterling Bank",
    logo: "img/sterling.jpg",
    type: "Platinum",
  },
  {
    name: "Destination Cross River",
    logo: "img/crs.jpg",
    type: "Silver",
  },
  {
    name: "United Bank Of Africa",
    logo: "img/uba.jpg",
    type: "Gold",
  },
  {
    name: "Bank Of Industry",
    logo: "img/boa.jpg",
    type: "Bronze",
  },
  {
    name: "UDUA Premium E-Commerce",
    logo: "img/232.jpg",
    type: "Gold",
  },
  {
    name: "Sterling Bank",
    logo: "img/sterling.jpg",
    type: "Silver",
  },
  {
    name: "Destination Cross River",
    logo: "img/crs.jpg",
    type: "Bronze",
  },
  {
    name: "United Bank Of Africa",
    logo: "img/uba.jpg",
    type: "Gold",
  },
  {
    name: "Bank Of Industry",
    logo: "img/boa.jpg",
    type: "Bronze",
  },
  {
    name: "UDUA Premium E-Commerce",
    logo: "img/232.jpg",
    type: "Gold",
  },
  {
    name: "Sterling Bank",
    logo: "img/sterling.jpg",
    type: "Silver",
  },
  {
    name: "Destination Cross River",
    logo: "img/crs.jpg",
    type: "Bronze",
  },
];

// Initialize Sponsors Ticker
function initSponsorsTicker() {
  const tickerTrack1 = document.getElementById("ticker-track-1");
  const tickerTrack2 = document.getElementById("ticker-track-2");

  // Clear existing content
  tickerTrack1.innerHTML = "";
  tickerTrack2.innerHTML = "";

  // Duplicate sponsors for seamless looping (3 sets for smooth continuous loop)
  const duplicatedSponsors = [
    ...sponsorsData,
    ...sponsorsData,
    ...sponsorsData,
  ];

  // Create sponsor items for both tracks
  duplicatedSponsors.forEach((sponsor, index) => {
    const sponsorItem = createSponsorItem(sponsor);
    tickerTrack1.appendChild(sponsorItem.cloneNode(true));
    tickerTrack2.appendChild(sponsorItem.cloneNode(true));
  });
}

// Create individual sponsor item
function createSponsorItem(sponsor) {
  const sponsorDiv = document.createElement("div");
  sponsorDiv.className = "sponsor-item";

  // Add sponsor type as data attribute for potential filtering
  sponsorDiv.setAttribute("data-type", sponsor.type.toLowerCase());

  sponsorDiv.innerHTML = `
            <img src="${sponsor.logo}" alt="${sponsor.name}" class="sponsor-logo">
            <div class="sponsor-name" style="display: none;">${sponsor.name}</div>
        `;

  // Add hover effect to show name
  sponsorDiv.addEventListener("mouseenter", function () {
    const logo = this.querySelector(".sponsor-logo");
    const name = this.querySelector(".sponsor-name");
    logo.style.display = "none";
    name.style.display = "block";
  });

  sponsorDiv.addEventListener("mouseleave", function () {
    const logo = this.querySelector(".sponsor-logo");
    const name = this.querySelector(".sponsor-name");
    logo.style.display = "block";
    name.style.display = "none";
  });

  return sponsorDiv;
}

// Enhanced ticker with pause on hover for individual items
function enhanceTickerInteractivity() {
  const sponsorItems = document.querySelectorAll(".sponsor-item");

  sponsorItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      // Add glowing effect for platinum sponsors
      if (this.getAttribute("data-type") === "platinum") {
        this.style.boxShadow = "0 15px 35px rgba(230, 179, 37, 0.4)";
      }
    });

    item.addEventListener("mouseleave", function () {
      // Remove glowing effect
      if (this.getAttribute("data-type") === "platinum") {
        this.style.boxShadow = "0 10px 25px rgba(230, 179, 37, 0.2)";
      }
    });
  });
}

// Add sponsor type badges (optional feature)
function addSponsorTypeBadges() {
  const sponsorItems = document.querySelectorAll(".sponsor-item");

  sponsorItems.forEach((item) => {
    const type = item.getAttribute("data-type");
    const badge = document.createElement("div");
    badge.className = `sponsor-badge sponsor-badge-${type}`;
    badge.textContent = type.charAt(0).toUpperCase() + type.slice(1);
    badge.style.cssText = `
                position: absolute;
                top: -8px;
                right: -8px;
                background: ${getBadgeColor(type)};
                color: white;
                padding: 2px 8px;
                border-radius: 10px;
                font-size: 0.7rem;
                font-weight: bold;
                transform: scale(0);
                transition: transform 0.3s ease;
            `;

    item.style.position = "relative";
    item.appendChild(badge);

    item.addEventListener("mouseenter", function () {
      badge.style.transform = "scale(1)";
    });

    item.addEventListener("mouseleave", function () {
      badge.style.transform = "scale(0)";
    });
  });
}

// Helper function for badge colors
function getBadgeColor(type) {
  const colors = {
    platinum: "#e6b325",
    gold: "#FFD700",
    silver: "#C0C0C0",
    bronze: "#CD7F32",
  };
  return colors[type] || "#666";
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  initSponsorsTicker();
  enhanceTickerInteractivity();
  addSponsorTypeBadges(); // Optional: Remove if you don't want badges
});

// Optional: Function to filter sponsors by type
function filterSponsors(type) {
  const allSponsors = document.querySelectorAll(".sponsor-item");
  allSponsors.forEach((sponsor) => {
    if (type === "all" || sponsor.getAttribute("data-type") === type) {
      sponsor.style.display = "flex";
    } else {
      sponsor.style.display = "none";
    }
  });
}
