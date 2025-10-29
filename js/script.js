// Initialize EmailJS (you'll need to replace with your actual credentials)
emailjs.init("YOUR_PUBLIC_KEY");

// Sample data for nominees
const nomineesData = {
  tech: [
    {
      id: 1,
      name: "TechGen Solutions",
      description: "AI-powered business analytics platform",
    },
    {
      id: 2,
      name: "InnoSoft Ltd",
      description: "Enterprise software development",
    },
    {
      id: 3,
      name: "Digital Bridge",
      description: "Fintech innovation for SMEs",
    },
    {
      id: 4,
      name: "CloudFirst Technologies",
      description: "Cloud infrastructure solutions",
    },
  ],
  retail: [
    {
      id: 1,
      name: "Urban Mart",
      description: "Modern retail chain with local products",
    },
    { id: 2, name: "StyleHub", description: "Fashion and lifestyle retailer" },
    {
      id: 3,
      name: "QuickBuy Stores",
      description: "Convenience retail franchise",
    },
    { id: 4, name: "EcoMarket", description: "Sustainable products retailer" },
  ],
  hospitality: [
    {
      id: 1,
      name: "Calabar Grand Hotel",
      description: "Luxury accommodation and events",
    },
    {
      id: 2,
      name: "Taste of Calabar",
      description: "Authentic local cuisine restaurant",
    },
    {
      id: 3,
      name: "Heritage Tours",
      description: "Cultural and historical tours",
    },
    {
      id: 4,
      name: "RiverView Resort",
      description: "Eco-friendly waterfront resort",
    },
  ],
  manufacturing: [
    {
      id: 1,
      name: "Prime Manufacturing",
      description: "Industrial equipment production",
    },
    {
      id: 2,
      name: "AgroProcess Ltd",
      description: "Agricultural processing solutions",
    },
    {
      id: 3,
      name: "BuildMat Industries",
      description: "Construction materials manufacturer",
    },
    {
      id: 4,
      name: "PackPro Solutions",
      description: "Sustainable packaging manufacturer",
    },
  ],
  sme: [
    {
      id: 1,
      name: "CraftWorks Studio",
      description: "Artisanal crafts and workshops",
    },
    {
      id: 2,
      name: "FreshFarm Organics",
      description: "Organic produce delivery service",
    },
    {
      id: 3,
      name: "TechTutors",
      description: "Digital skills training for youth",
    },
    {
      id: 4,
      name: "HomeCare Services",
      description: "Professional home maintenance",
    },
  ],
  sustainability: [
    {
      id: 1,
      name: "GreenFuture Energy",
      description: "Renewable energy solutions",
    },
    {
      id: 2,
      name: "EcoWaste Management",
      description: "Recycling and waste management",
    },
    {
      id: 3,
      name: "Sustainable Farms",
      description: "Organic and sustainable agriculture",
    },
    {
      id: 4,
      name: "CleanWater Initiative",
      description: "Water purification and access",
    },
  ],
};

// Track user selections
const userVotes = {};
let currentCategory = "tech";

// DOM Elements
const categoryItems = document.querySelectorAll(".category-item");
const nomineesContainer = document.getElementById("nominees-container");
const categoryTitle = document.querySelector(".category-title");
const prevBtn = document.getElementById("prev-category");
const nextBtn = document.getElementById("next-category");
const submitBtn = document.getElementById("submit-votes");
const confirmation = document.getElementById("confirmation");

// Initialize the app
function init() {
  loadCategory(currentCategory);
  setupEventListeners();
  updateNavigationButtons();
}

// Set up event listeners
function setupEventListeners() {
  // Category selection
  categoryItems.forEach((item) => {
    item.addEventListener("click", () => {
      const category = item.dataset.category;
      selectCategory(category);
    });
  });

  // Navigation buttons
  prevBtn.addEventListener("click", goToPreviousCategory);
  nextBtn.addEventListener("click", goToNextCategory);

  // Submit button
  submitBtn.addEventListener("click", submitVotes);
}

// Load nominees for a category
function loadCategory(category) {
  // Update active category in sidebar
  categoryItems.forEach((item) => {
    if (item.dataset.category === category) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  // Update category title
  categoryTitle.textContent = getCategoryName(category);

  // Clear nominees container
  nomineesContainer.innerHTML = "";

  // Add nominees with fade-in effect
  const nominees = nomineesData[category];
  nominees.forEach((nominee, index) => {
    const nomineeCard = document.createElement("div");
    nomineeCard.className = "nominee-card";
    nomineeCard.style.animationDelay = `${index * 0.1}s`;

    // Check if this nominee is already selected
    const isSelected = userVotes[category] === nominee.id;

    nomineeCard.innerHTML = `
                    <div class="nominee-image">${nominee.name.charAt(0)}</div>
                    <div class="nominee-name">${nominee.name}</div>
                    <div class="nominee-description">${
                      nominee.description
                    }</div>
                    <button class="vote-btn ${
                      isSelected ? "selected" : ""
                    }" data-id="${nominee.id}">
                        ${isSelected ? "Voted" : "Vote"}
                    </button>
                `;

    nomineesContainer.appendChild(nomineeCard);

    // Add click event to vote button
    const voteBtn = nomineeCard.querySelector(".vote-btn");
    voteBtn.addEventListener("click", () => {
      selectNominee(category, nominee.id, voteBtn);
    });
  });

  // Apply fade-in animation
  setTimeout(() => {
    const nomineeCards = document.querySelectorAll(".nominee-card");
    nomineeCards.forEach((card) => {
      card.classList.add("fade-in");
    });
  }, 100);
}

// Get display name for category
function getCategoryName(category) {
  const names = {
    tech: "Technology Innovation",
    retail: "Retail Excellence",
    hospitality: "Hospitality & Tourism",
    manufacturing: "Manufacturing",
    sme: "SME of the Year",
    sustainability: "Sustainability Champion",
  };
  return names[category];
}

// Select a category
function selectCategory(category) {
  currentCategory = category;
  loadCategory(category);
  updateNavigationButtons();
  updateSubmitButton();
}

// Select a nominee
function selectNominee(category, nomineeId, button) {
  // Reset all buttons in this category
  const allButtons = document.querySelectorAll(`.nominee-card .vote-btn`);
  allButtons.forEach((btn) => {
    btn.textContent = "Vote";
    btn.classList.remove("selected");
  });

  // Mark selected button
  button.textContent = "Voted";
  button.classList.add("selected");

  // Store the vote
  userVotes[category] = nomineeId;

  // Update submit button state
  updateSubmitButton();
}

// Navigate to previous category
function goToPreviousCategory() {
  const categories = Array.from(categoryItems).map(
    (item) => item.dataset.category
  );
  const currentIndex = categories.indexOf(currentCategory);
  const prevIndex = (currentIndex - 1 + categories.length) % categories.length;
  selectCategory(categories[prevIndex]);
}

// Navigate to next category
function goToNextCategory() {
  const categories = Array.from(categoryItems).map(
    (item) => item.dataset.category
  );
  const currentIndex = categories.indexOf(currentCategory);
  const nextIndex = (currentIndex + 1) % categories.length;
  selectCategory(categories[nextIndex]);
}

// Update navigation buttons state
function updateNavigationButtons() {
  const categories = Array.from(categoryItems).map(
    (item) => item.dataset.category
  );
  const currentIndex = categories.indexOf(currentCategory);

  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === categories.length - 1;
}

// Update submit button state
function updateSubmitButton() {
  const votedCategories = Object.keys(userVotes).length;
  const totalCategories = Object.keys(nomineesData).length;

  submitBtn.disabled = votedCategories < totalCategories;

  if (votedCategories === totalCategories) {
    submitBtn.textContent = `Submit All Votes (${totalCategories}/${totalCategories})`;
  } else {
    submitBtn.textContent = `Submit Votes (${votedCategories}/${totalCategories})`;
  }
}

// Submit votes
function submitVotes() {
  // In a real implementation, this would send data via EmailJS
  // For now, we'll simulate the submission

  submitBtn.disabled = true;
  submitBtn.textContent = "Submitting...";

  // Simulate API call delay
  setTimeout(() => {
    // Show confirmation
    confirmation.classList.add("show");

    // Scroll to confirmation
    confirmation.scrollIntoView({ behavior: "smooth" });

    // Reset form after delay
    setTimeout(() => {
      // In a real app, you might redirect or show a different view
      console.log("Votes submitted:", userVotes);
    }, 3000);
  }, 2000);
}

// Initialize the application
document.addEventListener("DOMContentLoaded", init);
