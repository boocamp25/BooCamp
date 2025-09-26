const startDate = new Date("2025-10-01T00:00:00-05:00"); // CDT
function updateCountdown() {
  const now = new Date();
  const total = Math.max(0, startDate.getTime() - now.getTime());
  const days = Math.floor(total / (1000*60*60*24));
  const hours = Math.floor((total / (1000*60*60)) % 24);
  const minutes = Math.floor((total / (1000*60)) % 60);
  const seconds = Math.floor((total / 1000) % 60);
  const countdownEl = document.getElementById('countdown');
  if(total <= 0){
    countdownEl.innerHTML = '<span style="color:#39ff14;font-weight:bold;">LIVE NOW</span>';
  } else {
    countdownEl.textContent = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';
  }
}
setInterval(updateCountdown, 1000);
updateCountdown();
