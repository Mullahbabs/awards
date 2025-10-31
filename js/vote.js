// Initialize EmailJS with your credentials
emailjs.init("FO2RWy5Ovnsvs1Qvk");

// Updated nomineesData structure with Startups and Existing Businesses
const nomineesData = {
  // Startups Categories
  "tech-startup": [
    {
      id: 1,
      name: "TechGen Startup",
      description:
        "AI-powered business analytics platform for emerging businesses.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 2,
      name: "InnoSoft Labs",
      description: "Custom software solutions for startup ventures.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 3,
      name: "Digital Bridge Startup",
      description: "Fintech solutions tailored for new financial ventures.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 4,
      name: "CloudFirst Startup",
      description: "Cloud infrastructure for scaling startups.",
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
  ],
  "sme-startup": [
    {
      id: 1,
      name: "CraftWorks Startup",
      description: "Artisanal crafts with modern entrepreneurial approach.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 2,
      name: "FreshFarm Startup",
      description: "Organic produce delivery for urban communities.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 3,
      name: "TechTutors Startup",
      description: "Digital skills training for startup ecosystem.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
  ],
  "sustainability-startup": [
    {
      id: 1,
      name: "GreenFuture Startup",
      description: "Renewable energy solutions for new businesses.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 2,
      name: "EcoWaste Startup",
      description: "Sustainable waste management for new ventures.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 3,
      name: "CleanWater Startup",
      description: "Water solutions for startup communities.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
  ],
  "innovation-startup": [
    {
      id: 1,
      name: "Innovate Labs",
      description: "Cutting-edge technology solutions for startups.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 2,
      name: "Future Tech Startup",
      description: "Next-generation business solutions.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
    {
      id: 3,
      name: "Smart Solutions Startup",
      description: "AI-driven innovation for new businesses.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "startup",
    },
  ],

  // Existing Businesses Categories
  "tech-existing": [
    {
      id: 1,
      name: "TechGen Enterprise",
      description: "Enterprise-level AI and analytics solutions.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 2,
      name: "InnoSoft Enterprise",
      description: "Large-scale software development solutions.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 3,
      name: "Digital Bridge Enterprise",
      description: "Enterprise fintech solutions.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
  ],
  retail: [
    {
      id: 1,
      name: "Urban Mart Enterprise",
      description: "Established retail chain with nationwide presence.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 2,
      name: "StyleHub Enterprise",
      description: "Premium fashion retailer with multiple locations.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 3,
      name: "QuickBuy Stores",
      description: "Convenience retail franchise network.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
  ],
  hospitality: [
    {
      id: 1,
      name: "Calabar Grand Hotel",
      description: "Luxury accommodation and events venue.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 2,
      name: "RiverView Resort",
      description: "Premium waterfront hospitality experience.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 3,
      name: "Taste of Calabar",
      description: "Authentic local cuisine restaurant.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
  ],
  manufacturing: [
    {
      id: 1,
      name: "Prime Manufacturing",
      description: "Industrial equipment manufacturing leader.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 2,
      name: "BuildMat Industries",
      description: "Construction materials manufacturing expert.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 3,
      name: "AgroProcess Ltd",
      description: "Agricultural processing solutions.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
  ],
  "sustainability-existing": [
    {
      id: 1,
      name: "GreenFuture Enterprise",
      description: "Large-scale renewable energy solutions.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 2,
      name: "EcoWaste Enterprise",
      description: "Comprehensive waste management services.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
    {
      id: 3,
      name: "Sustainable Farms Enterprise",
      description: "Large-scale organic agriculture.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      type: "existing",
    },
  ],
};

// -------------------------------------------------
//  Global variables
// -------------------------------------------------
let userVotes = {};
let currentCategory = "tech-startup";
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
    "tech-startup": "Technology Innovation",
    "sme-startup": "SME of the Year",
    "sustainability-startup": "Sustainability Champion",
    "innovation-startup": "Most Innovative Startup",
    "tech-existing": "Technology Excellence",
    retail: "Retail Excellence",
    hospitality: "Hospitality & Tourism",
    manufacturing: "Manufacturing",
    "sustainability-existing": "Sustainability Leader",
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

  // 1. Store locally (same as before)
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

  // 2. SEND **individual** email
  const userId = generateUserIdentifier();
  const params = {
    to_email: "bennybeshel@gmail.com",
    from_name: "Calabar Awards Voting",
    voter_id: userId,
    category: getCategoryName(cat),
    nominee_name: nom.name,
    nominee_type: nom.type,
    nominee_description: nom.description,
    vote_time: new Date().toLocaleString(),
  };

  // Show progress modal immediately
  showIndividualProgressModal();

  emailjs
    .send("service_btnfset", "template_individual_vote", params) // <-- NEW TEMPLATE
    .then(() => {
      // mark this *single* vote as sent
      userVotes[cat].submitted = true;
      saveVotesToStorage();
      updateVoteStatus();
      loadCategory(currentCategory);
      finishIndividualModal(true, `Your vote for **${nom.name}** was sent!`);
    })
    .catch(() => {
      finishIndividualModal(
        false,
        "Failed to send this vote. You can try again."
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
    to_email: "bennybeshel@gmail.com",
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
    .send("service_btnfset", "template_3sbuxvb", params) // <-- ORIGINAL TEMPLATE
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
