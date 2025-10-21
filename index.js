const bubblesContainer = document.querySelector(".bubbles");
const NUM_BUBBLES = 25;

// Lav boblerne
for (let i = 0; i < NUM_BUBBLES; i++) {
  const bubble = document.createElement("span");
  const size = Math.random() * 60 + 20; // 20–80 px

  const startX = Math.random() * (window.innerWidth - size);
  const startY = Math.random() * (window.innerHeight - size);

  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${startX}px`;
  bubble.style.top = `${startY}px`;
  bubble.style.background = `rgba(173, 216, 230, ${Math.random() * 0.5 + 0.3})`;
  bubble.style.position = "absolute";
  bubble.style.borderRadius = "50%";
  bubble.style.pointerEvents = "none";
  bubble.style.transition = "transform 1s ease-out";

  bubblesContainer.appendChild(bubble);

  floatBubble(bubble, size);
}

// Flydende bevægelse der bliver inden for skærmen
function floatBubble(bubble, size) {
  const moveBubble = () => {
    // Ny tilfældig position inden for vinduets grænser
    const x = Math.random() * (window.innerWidth - size);
    const y = Math.random() * (window.innerHeight - size);
    const scale = Math.random() * 0.6 + 0.7;

    bubble.animate([{ transform: `translate(${x}px, ${y}px) scale(${scale})` }], {
      duration: 5000 + Math.random() * 5000, // 5–10 sekunder
      easing: "ease-in-out",
      fill: "forwards",
    });

    // Flyt igen efter lidt tid
    setTimeout(moveBubble, 5000 + Math.random() * 5000);
  };

  moveBubble();
}
