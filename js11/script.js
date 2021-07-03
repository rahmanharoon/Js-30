const player = document.querySelector(".player");
const vedio = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

function togglePlay() {
  const method = vedio.paused ? "play" : "pause";
  vedio[method]();
}

function updateButton() {
  toggle.textContent = this.paused ? "►" : "❚ ❚";
}

function skip() {
  vedio.currentTime += parseFloat(this.dataset.skip);
}

function handleRange() {
  vedio[this.name] = this.value;
}

function handleProgress() {
  const percentage = (vedio.currentTime / vedio.duration) * 100;
  progressBar.style.flexBasis = `${percentage}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * vedio.duration;
  vedio.currentTime = scrubTime;
}

vedio.addEventListener("click", togglePlay);
vedio.addEventListener("play", updateButton);
vedio.addEventListener("pause", updateButton);
vedio.addEventListener("timeupdate", handleProgress);

toggle.addEventListener("click", togglePlay);
skipButtons.forEach((button) => button.addEventListener("click", skip));
ranges.forEach((range) => range.addEventListener("change", handleRange));
ranges.forEach((range) => range.addEventListener("mousemove", handleRange));

let mousedown = false;

progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));
