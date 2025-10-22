// --- Parallax-baggrund + 3D-tilt på logo --- //

const hero = document.querySelector(".hero");
const logo = document.querySelector(".logo");

// justér styrken her:
const MAX_TILT_DEG = 12; // hvor meget logoet vipper
const POP_OUT_Z = 30; // hvor meget det "popper ud"
const BG_INTENSITY = 10; // hvor meget baggrunden bevæger sig (jo større = mere bevægelse)

let pending = false;
let targetRotX = 0,
  targetRotY = 0;
let bgX = 50,
  bgY = 50;

function handleMove(e) {
  const rect = hero.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;

  const nx = (e.clientX - cx) / (rect.width / 2); // -1 til 1
  const ny = (e.clientY - cy) / (rect.height / 2);

  // Tilt logo
  targetRotY = nx * MAX_TILT_DEG;
  targetRotX = -ny * MAX_TILT_DEG;

  // Flyt baggrund
  bgX = 50 + nx * BG_INTENSITY;
  bgY = 50 + ny * BG_INTENSITY;

  if (!pending) {
    pending = true;
    requestAnimationFrame(applyEffect);
  }
}

function applyEffect() {
  pending = false;

  // Logo 3D-tilt
  logo.style.transform = `translate(-50%, -50%) rotateX(${targetRotX}deg) rotateY(${targetRotY}deg) translateZ(${POP_OUT_Z}px)`;

  // Baggrund parallax
  hero.style.backgroundPosition = `${bgX}% ${bgY}%`;
}

function resetEffect() {
  logo.style.transform = `translate(-50%, -50%) rotateX(0deg) rotateY(0deg) translateZ(0px)`;
  hero.style.backgroundPosition = "50% 50%";
}

hero.addEventListener("mousemove", handleMove);
hero.addEventListener("mouseleave", resetEffect);
