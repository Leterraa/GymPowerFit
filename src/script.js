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
document.addEventListener('DOMContentLoaded', function() {
  const trainers = document.querySelectorAll('.trainer-card');
  const modal = document.getElementById('trainerModal');
  const closeBtn = document.querySelector('.close-btn');
  const modalTrainerName = document.getElementById('modalTrainerName');
  const modalTrainerBio = document.getElementById('modalTrainerBio');
  const modalSpecialization = document.getElementById('modalSpecialization');
  const modalCertifications = document.getElementById('modalCertifications');
  const modalExperience = document.getElementById('modalExperience');
  const modalContact = document.getElementById('modalContact');
  const modalTrainerImage = document.getElementById('modalTrainerImage');

  trainers.forEach(trainer => {
      trainer.addEventListener('click', function() {
          const name = this.getAttribute('data-trainer');
          const specialization = this.getAttribute('data-specialization');
          const certifications = this.getAttribute('data-certifications');
          const experience = this.getAttribute('data-experience');
          const contact = this.getAttribute('data-contact');
          const imgSrc = this.querySelector('.trainer-avatar img').src;

          modalTrainerName.textContent = name;
          modalTrainerImage.src = imgSrc;
          modalTrainerBio.textContent = this.querySelector('.trainer-info p').textContent;
          modalSpecialization.textContent = `Specialization: ${specialization}`;
          modalCertifications.textContent = `Certifications: ${certifications}`;
          modalExperience.textContent = `Experience: ${experience}`;
          modalContact.textContent = `Contact: ${contact}`;

          modal.style.display = 'block';
      });
  });

  closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
      if (event.target === modal) {
          modal.style.display = 'none';
      }
  });
});