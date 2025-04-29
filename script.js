// Countdown al 30 maggio 2025 ore 11:10
const countdown = document.getElementById("countdown");
const departureDate = new Date("2025-05-30T11:10:00");

function updateCountdown() {
  const now = new Date();
  const diff = departureDate - now;

  if (diff <= 0) {
    countdown.textContent = "🎉 È il momento di partire!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdown.textContent = `${days}g ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

function addToCalendar() {
  alert("Funzione calendario in arrivo :)");
}

