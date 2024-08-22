
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



// Script for handling popup form functionality on a membership page
document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("membership-popup");
    const closeBtn = document.querySelector(".close-btn");
    const form = document.getElementById("membership-form");
  
    document.querySelectorAll(".card button").forEach(button => {
      button.addEventListener("click", () => {
        const plan = button.dataset.plan; // Get the plan name from a data attribute
        document.getElementById("plan").value = plan;
        popup.style.display = "flex";
      });
    });
  
    closeBtn.addEventListener("click", () => {
      popup.style.display = "none";
    });
  
    window.addEventListener("click", event => {
      if (event.target === popup) {
        popup.style.display = "none";
      }
    });
  
    form.addEventListener("submit", event => {
      event.preventDefault();
      // Handle form submission here
      alert("Form submitted!");
      popup.style.display = "none";
    });
  });
  