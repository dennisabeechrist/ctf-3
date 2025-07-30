function checkReflection() {
  const input = document.getElementById("userInput").value.trim().toLowerCase();
  const msg = document.getElementById("message");

  if (input === "") {
    msg.textContent = "Say something first.";
    return;
  }

  // Don't reveal this keyword in HTML
  if (input === "mirror") {
    window.location.href = "flag.html";
  } else {
    msg.textContent = `"${input}" echoed into the void... but nothing came back.`;
  }
}
