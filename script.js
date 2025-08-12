// Mobile menu toggle
const menuToggle = document.getElementById("mobile-menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  if (mobileMenu.classList.contains("hidden"))
    mobileMenu.classList.remove("hidden");
  else mobileMenu.classList.add("hidden");
});

// Countdown timer to specific wedding date
(function countdown() {
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  // Wedding date considering the example Nov 15, 2022
  const weddingDate = new Date("2025-08-17T00:00:00");

  function updateCountdown() {
    const now = new Date();
    const diff = weddingDate - now;

    if (diff <= 0) {
      daysEl.textContent = "00";
      hoursEl.textContent = "00";
      minutesEl.textContent = "00";
      secondsEl.textContent = "00";
      clearInterval(interval);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    daysEl.textContent = days < 10 ? "0" + days : days;
    hoursEl.textContent = hours < 10 ? "0" + hours : hours;
    minutesEl.textContent = minutes < 10 ? "0" + minutes : minutes;
    secondsEl.textContent = seconds < 10 ? "0" + seconds : seconds;
  }

  updateCountdown();
  const interval = setInterval(updateCountdown, 1000);
})();

// RSVP form submission (fake handler with alert)
const rsvpForm = document.getElementById("rsvp-form");
rsvpForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const fullName = rsvpForm.fullName.value.trim();
  const attending = rsvpForm.attending.value;
  if (!fullName || !attending) {
    alert("Please fill in the required fields.");
    return;
  }

  // This is where you could integrate with backend or email service
  alert(
    `Thank you, ${fullName}. Your RSVP has been received. We look forward to seeing you!`
  );

  // Optionally reset form
  rsvpForm.reset();
});


// Animatin scripts

let tl = gsap.timeline({
	// yes, we can add it to an entire timeline!
	scrollTrigger: {
		trigger: '#home',
		pin: true, // pin the trigger element while active
		start: 'top top', // when the top of the trigger hits the top of the viewport
		end: '+=500', // end after scrolling 500px beyond the start
		scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
		snap: {
			snapTo: 'labels', // snap to the closest label in the timeline
			duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
			delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
			ease: 'power1.inOut' // the ease of the snap animation ("power3" by default)
		}
	}
});

// add animations and labels to the timeline
tl.addLabel('start')
	.from('.box p', { scale: 0.3, rotation: 45, autoAlpha: 0 })
	.addLabel('color')
	.from('.box', { backgroundColor: '#28a92b' })
	.addLabel('spin')
	.to('.box', { rotation: 360 })
	.addLabel('end');
