// FEATURES SECTION
// Js for Tabs
function openDay(evt, dayName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(dayName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Fetch schedule data
document.addEventListener("DOMContentLoaded", function() {
  fetch('schedule.json')
  .then(response => response.json())
  .then(data => {
      for (let day in data) {
          const scheduleContent = document.getElementById(`schedule-${day}`);
          scheduleContent.innerHTML = data[day].map(session => `
              <p>${session.time} - ${session.activity}</p>
          `).join('');
      }
      // Default to Monday
      document.querySelector('.tablinks').click();
  });
});

// MEMBERSHIP SECTION

document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const closeBtn = document.querySelector(".close-btn");
  const form = document.getElementById("membershipForm");
  const planName = document.getElementById("plan-name");
  const membershipInput = document.getElementById("membership");

  // Open popup and set plan name when a card button is clicked
  document.querySelectorAll(".card button").forEach(button => {
      button.addEventListener("click", () => {
          const plan = button.dataset.plan; 
          planName.textContent = plan;
          membershipInput.value = plan;
          popup.style.display = "flex";
      });
  });

  // Close popup when close button is clicked
  closeBtn.addEventListener("click", () => {
      popup.style.display = "none";
  });

  // Close popup when clicking outside of the popup
  window.addEventListener("click", event => {
      if (event.target === popup) {
          popup.style.display = "none";
      }
  });

  // Handle form submission
  form.addEventListener("submit", event => {
      event.preventDefault();
      // Handle form submission here
      alert("Form submitted!");
      popup.style.display = "none";
  });
});





// EXPLORE SECTION
  // Get modal element
const modal = document.getElementById("trainerModal");
const modalImg = document.getElementById("modalTrainerImage");
const modalName = document.getElementById("modalTrainerName");
const modalBio = document.getElementById("modalTrainerBio");

// Get close button
const closeBtn = document.getElementsByClassName("close-btn")[0];

// Add event listeners to each trainer
document.querySelectorAll('.trainer').forEach(trainer => {
    trainer.addEventListener('click', function() {
        const trainerImg = this.querySelector('.trainer-avatar img').src;
        const trainerName = this.querySelector('.trainer-info h3').textContent;
        const trainerBio = this.querySelector('.trainer-info p').textContent;

        // Set modal content
        modalImg.src = trainerImg;
        modalName.textContent = trainerName;
        modalBio.textContent = trainerBio;

        // Show modal
        modal.style.display = "flex";
    });
});

// Close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
};

// Close modal if clicked outside content
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
