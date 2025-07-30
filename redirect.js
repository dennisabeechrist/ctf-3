function checkInput() {
  const input = document.getElementById("inputBox").value.trim().toLowerCase();
  const result = document.getElementById("result");

  // SHA-256 hash of the word "mirror"
  const correctHash = "2e7d2c03a9507ae265ecf5b5356885a5c3f6e2a8eab5b2394e25e9f2c4091e8e";

  if (!input) {
    result.textContent = "Say something first!";
    return;
  }

  // Perform SHA-256 hashing
  const encoder = new TextEncoder();
  const data = encoder.encode(input);
  crypto.subtle.digest("SHA-256", data).then(buffer => {
    const hashArray = Array.from(new Uint8Array(buffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join("");

    if (hashHex === correctHash) {
      window.location.href = "flag.html";
    } else {
      result.textContent = `"${input}" echoed back into the void...`;
    }
  });
}
