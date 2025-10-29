// Initialize EmailJS with your credentials
emailjs.init("FO2RWy5Ovnsvs1Qvk");

// Sample data for nominees with images
const nomineesData = {
  tech: [
    {
      id: 1,
      name: "TechGen Solutions",
      description:
        "AI-powered business analytics platform transforming how companies leverage data for strategic decisions.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      name: "InnoSoft Ltd",
      description:
        "Enterprise software development company creating custom solutions for businesses of all sizes.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      name: "Digital Bridge",
      description:
        "Fintech innovation for SMEs, providing accessible financial services and payment solutions.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 4,
      name: "CloudFirst Technologies",
      description:
        "Cloud infrastructure solutions helping businesses scale efficiently and securely.",
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
  ],
  retail: [
    {
      id: 1,
      name: "Urban Mart",
      description:
        "Modern retail chain with a focus on locally sourced products and sustainable practices.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      name: "StyleHub",
      description:
        "Fashion and lifestyle retailer offering curated collections from emerging designers.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      name: "QuickBuy Stores",
      description:
        "Convenience retail franchise with locations across major urban centers.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 4,
      name: "EcoMarket",
      description:
        "Sustainable products retailer committed to environmental responsibility.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
  ],
  hospitality: [
    {
      id: 1,
      name: "Calabar Grand Hotel",
      description:
        "Luxury accommodation and events venue with world-class amenities.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      name: "Taste of Calabar",
      description:
        "Authentic local cuisine restaurant showcasing regional culinary traditions.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      name: "Heritage Tours",
      description:
        "Cultural and historical tours offering immersive experiences of local heritage.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 4,
      name: "RiverView Resort",
      description:
        "Eco-friendly waterfront resort with sustainable tourism practices.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
  ],
  manufacturing: [
    {
      id: 1,
      name: "Prime Manufacturing",
      description:
        "Industrial equipment production with cutting-edge technology and precision engineering.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      name: "AgroProcess Ltd",
      description:
        "Agricultural processing solutions enhancing food production and distribution.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      name: "BuildMat Industries",
      description:
        "Construction materials manufacturer with innovative and sustainable products.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 4,
      name: "PackPro Solutions",
      description:
        "Sustainable packaging manufacturer reducing environmental impact.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
  ],
  sme: [
    {
      id: 1,
      name: "CraftWorks Studio",
      description:
        "Artisanal crafts and workshops preserving traditional techniques with modern designs.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      name: "FreshFarm Organics",
      description:
        "Organic produce delivery service connecting local farmers with urban consumers.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      name: "TechTutors",
      description:
        "Digital skills training for youth, bridging the technology education gap.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 4,
      name: "HomeCare Services",
      description:
        "Professional home maintenance and repair services with certified technicians.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
  ],
  sustainability: [
    {
      id: 1,
      name: "GreenFuture Energy",
      description:
        "Renewable energy solutions provider specializing in solar and wind power installations.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      name: "EcoWaste Management",
      description:
        "Recycling and waste management company promoting circular economy principles.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      name: "Sustainable Farms",
      description:
        "Organic and sustainable agriculture practice advocates and implementers.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 4,
      name: "CleanWater Initiative",
      description:
        "Water purification and access solutions for underserved communities.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
  ],
};

// Global variables
let userVotes = {};
let currentCategory = "tech";
let selectedNominee = null;
let hasSubmittedAllVotes = false;

// DOM Elements
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

// ==================== INITIALIZATION ====================

function init() {
  loadVotesFromStorage();
  loadCategory(currentCategory);
  setupEventListeners();
  updateNavigationButtons();
  updateSubmitButton();

  if (hasSubmittedAllVotes) {
    disableAllVoting();
  }
}

// ==================== EVENT LISTENERS ====================

function setupEventListeners() {
  categoryItems.forEach((item) => {
    item.addEventListener("click", () => {
      const category = item.dataset.category;
      selectCategory(category);
    });
  });

  prevBtn.addEventListener("click", goToPreviousCategory);
  nextBtn.addEventListener("click", goToNextCategory);
  submitBtn.addEventListener("click", submitVotes);
  cancelVoteBtn.addEventListener("click", closeConfirmationModal);
  confirmVoteBtn.addEventListener("click", confirmVote);
  closeSuccessBtn.addEventListener("click", closeSuccessModal);
}

// ==================== STORAGE MANAGEMENT ====================

function loadVotesFromStorage() {
  const savedVotes = localStorage.getItem("calabarAwardsVotes");
  if (savedVotes) {
    userVotes = JSON.parse(savedVotes);
    updateVoteStatus();

    const submitted = localStorage.getItem("calabarAwardsSubmitted");
    if (submitted === "true") {
      hasSubmittedAllVotes = true;
    }
  }
}

function saveVotesToStorage() {
  localStorage.setItem("calabarAwardsVotes", JSON.stringify(userVotes));
}

// ==================== CATEGORY & VOTE MANAGEMENT ====================

function loadCategory(category) {
  categoryItems.forEach((item) => {
    item.classList.toggle("active", item.dataset.category === category);
  });

  categoryTitle.textContent = getCategoryName(category);
  nomineesContainer.innerHTML = "";

  const hasCategoryVote = userVotes[category] && userVotes[category].nomineeId;
  const nominees = nomineesData[category];

  nominees.forEach((nominee, index) => {
    const nomineeCard = createNomineeCard(
      category,
      nominee,
      hasCategoryVote,
      index
    );
    nomineesContainer.appendChild(nomineeCard);
  });

  setTimeout(() => {
    document.querySelectorAll(".nominee-card").forEach((card) => {
      card.classList.add("fade-in");
    });
  }, 100);
}

function createNomineeCard(category, nominee, hasCategoryVote, index) {
  const nomineeCard = document.createElement("div");
  nomineeCard.className = "nominee-card";
  nomineeCard.style.animationDelay = `${index * 0.1}s`;

  const isVoted =
    userVotes[category] && userVotes[category].nomineeId === nominee.id;
  const isSubmitted = userVotes[category] && userVotes[category].submitted;
  const shouldBeDisabled =
    hasCategoryVote || isSubmitted || hasSubmittedAllVotes;

  nomineeCard.innerHTML = `
        <div class="nominee-image">
            <img src="${nominee.image}" alt="${nominee.name}">
        </div>
        <div class="nominee-name">${nominee.name}</div>
        <div class="nominee-description">${nominee.description}</div>
        <button class="vote-btn ${isVoted ? "voted" : ""} ${
    shouldBeDisabled ? "submitted" : ""
  }" 
                data-id="${nominee.id}" 
                ${shouldBeDisabled ? "disabled" : ""}>
            ${getVoteButtonText(
              hasCategoryVote,
              isVoted,
              isSubmitted,
              hasSubmittedAllVotes
            )}
        </button>
    `;

  if (!shouldBeDisabled && !hasSubmittedAllVotes) {
    const voteBtn = nomineeCard.querySelector(".vote-btn");
    voteBtn.addEventListener("click", () => {
      if (!hasCategoryVote) {
        showConfirmationModal(category, nominee);
      }
    });
  }

  return nomineeCard;
}

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

function getVoteButtonText(
  hasCategoryVote,
  isVoted,
  isSubmitted,
  hasSubmittedAll
) {
  if (hasSubmittedAll) return "Submitted";
  if (isSubmitted) return "Submitted";
  if (isVoted) return "Voted";
  if (hasCategoryVote) return "Disabled";
  return "Vote";
}

// ==================== MODAL MANAGEMENT ====================

function showConfirmationModal(category, nominee) {
  selectedNominee = { category, nominee };
  modalNomineeName.textContent = nominee.name;
  modalCategoryName.textContent = getCategoryName(category);
  modalNomineeImage.src = nominee.image;
  modalNomineeDescription.textContent = nominee.description;
  confirmationModal.classList.add("active");
}

function closeConfirmationModal() {
  confirmationModal.classList.remove("active");
  selectedNominee = null;
}

function confirmVote() {
  if (selectedNominee) {
    const { category, nominee } = selectedNominee;

    userVotes[category] = {
      nomineeId: nominee.id,
      nomineeName: nominee.name,
      categoryName: getCategoryName(category),
      submitted: false,
      timestamp: new Date().toISOString(),
    };

    saveVotesToStorage();
    updateVoteStatus();
    submitVotes();
    sendVotesToEmail(prepareVoteDataForEmail());
    updateSubmitButton();
    closeConfirmationModal();
    loadCategory(currentCategory);
  }
}

// ==================== NAVIGATION ====================

function selectCategory(category) {
  currentCategory = category;
  loadCategory(category);
  updateNavigationButtons();
}

function goToPreviousCategory() {
  const categories = Array.from(categoryItems).map(
    (item) => item.dataset.category
  );
  const currentIndex = categories.indexOf(currentCategory);
  const prevIndex = (currentIndex - 1 + categories.length) % categories.length;
  selectCategory(categories[prevIndex]);
}

function goToNextCategory() {
  const categories = Array.from(categoryItems).map(
    (item) => item.dataset.category
  );
  const currentIndex = categories.indexOf(currentCategory);
  const nextIndex = (currentIndex + 1) % categories.length;
  selectCategory(categories[nextIndex]);
}

function updateNavigationButtons() {
  const categories = Array.from(categoryItems).map(
    (item) => item.dataset.category
  );
  const currentIndex = categories.indexOf(currentCategory);
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === categories.length - 1;
}

// ==================== UI UPDATES ====================

function updateVoteStatus() {
  categoryItems.forEach((item) => {
    const category = item.dataset.category;
    const statusElement = item.querySelector(".vote-status");

    if (userVotes[category] && userVotes[category].nomineeId) {
      if (userVotes[category].submitted) {
        statusElement.innerHTML =
          '<i class="fas fa-check-circle" style="color: var(--success);"></i>';
        statusElement.title = "Vote submitted";
      } else {
        statusElement.innerHTML =
          '<i class="fas fa-check" style="color: var(--accent);"></i>';
        statusElement.title = "Vote selected (not submitted)";
      }
    } else {
      statusElement.innerHTML = "";
      statusElement.title = "";
    }
  });
}

function updateSubmitButton() {
  const votedCategories = Object.keys(userVotes).length;
  const totalCategories = Object.keys(nomineesData).length;

  submitBtn.disabled =
    votedCategories < totalCategories || hasSubmittedAllVotes;

  if (hasSubmittedAllVotes) {
    submitBtn.textContent = "Votes Submitted";
    submitBtn.style.background = "rgba(255, 255, 255, 0.2)";
  } else if (votedCategories === totalCategories) {
    submitBtn.textContent = `Submit All Votes (${totalCategories}/${totalCategories})`;
  } else {
    submitBtn.textContent = `Submit Votes (${votedCategories}/${totalCategories})`;
  }
}

// ==================== EMAILJS INTEGRATION ====================

function submitVotes() {
  submitBtn.disabled = true;
  submitBtn.textContent = "Submitting...";
  const voteData = prepareVoteDataForEmail();
  sendVotesToEmail(voteData);
}

function prepareVoteDataForEmail() {
  const voteSummary = {
    totalVotes: Object.keys(userVotes).length,
    timestamp: new Date().toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }),
    votes: [],
  };

  Object.keys(userVotes).forEach((category) => {
    const vote = userVotes[category];
    voteSummary.votes.push({
      category: getCategoryName(category),
      nominee: vote.nomineeName,
      time: new Date(vote.timestamp).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    });
  });

  return voteSummary;
}

function sendVotesToEmail(voteData) {
  successModal.classList.add("active");

  let progress = 0;
  const progressInterval = setInterval(() => {
    progress += 5;
    successProgress.style.width = `${progress}%`;

    if (progress >= 100) {
      clearInterval(progressInterval);
      const userIdentifier = generateUserIdentifier();

      const adminTemplateParams = {
        to_email: "bennybeshel@gmail.com",
        from_name: "Calabar Awards Voting System",
        total_votes: voteData.totalVotes.toString(),
        submission_time: voteData.timestamp,
        vote_details: formatVoteDetailsForAdmin(voteData.votes),
        user_identifier: userIdentifier,
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
        .send("service_btnfset", "template_3sbuxvb", adminTemplateParams)
        .then(function (response) {
          markVotesAsSubmitted();
          updateSuccessModal(
            true,
            "Your votes have been successfully submitted! Thank you for participating in the Calabar Enterprise Awards."
          );
        })
        .catch(function (error) {
          updateSuccessModal(
            false,
            "There was an issue submitting your votes. Please try again or contact support."
          );
          submitBtn.disabled = false;
          submitBtn.textContent = "Submit Your Votes";
        });
    }
  }, 100);
}

function formatVoteDetailsForAdmin(votes) {
  let details = "";
  votes.forEach((vote, index) => {
    details += `
        <div class="vote-item">
            <div class="category-name">${index + 1}. ${vote.category}</div>
            <div class="nominee-name">✅ Voted For: ${vote.nominee}</div>
            <div class="vote-time">⏰ Voted at: ${vote.time}</div>
        </div>`;
  });
  return details;
}

function generateUserIdentifier() {
  let identifier = localStorage.getItem("calabarVoterId");
  if (!identifier) {
    identifier =
      "VOTER_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9);
    localStorage.setItem("calabarVoterId", identifier);
  }
  return identifier;
}

// ==================== FINAL SUBMISSION HANDLING ====================

function markVotesAsSubmitted() {
  Object.keys(userVotes).forEach((category) => {
    userVotes[category].submitted = true;
  });

  saveVotesToStorage();
  localStorage.setItem("calabarAwardsSubmitted", "true");
  hasSubmittedAllVotes = true;
  disableAllVoting();
}

function disableAllVoting() {
  document.querySelectorAll(".vote-btn").forEach((button) => {
    button.disabled = true;
    button.textContent = "Submitted";
    button.style.background = "rgba(255, 255, 255, 0.1)";
    button.style.color = "rgba(255, 255, 255, 0.5)";
  });

  categoryItems.forEach((item) => {
    item.style.pointerEvents = "none";
    item.style.opacity = "0.6";
  });

  prevBtn.disabled = true;
  nextBtn.disabled = true;
  submitBtn.disabled = true;
  submitBtn.textContent = "Votes Submitted";
  submitBtn.style.background = "rgba(255, 255, 255, 0.2)";
}

// ==================== SUCCESS MODAL MANAGEMENT ====================

function updateSuccessModal(success, message) {
  const successIcon = document.querySelector(".success-icon");
  const modalTitle = document.querySelector(".success-modal .modal-title");
  const modalDescription = document.querySelector(
    ".success-modal .modal-description"
  );

  if (success) {
    successIcon.innerHTML = '<i class="fas fa-check-circle"></i>';
    successIcon.style.color = "var(--success)";
    modalTitle.textContent = "Vote Submitted Successfully!";
  } else {
    successIcon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
    successIcon.style.color = "var(--danger)";
    modalTitle.textContent = "Submission Error";
  }

  modalDescription.textContent = message;
}

function closeSuccessModal() {
  successModal.classList.remove("active");
  successProgress.style.width = "0%";

  if (!hasSubmittedAllVotes) {
    submitBtn.disabled = false;
    submitBtn.textContent = "Submit Your Votes";
  }
}

// ==================== INITIALIZE APPLICATION ====================

document.addEventListener("DOMContentLoaded", init);
