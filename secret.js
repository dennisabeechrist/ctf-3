// secret.js - contains secret hash and helper function

const targetHash = "2e7d2c03a9507ae265ecf5b5356885a5c3f6e2a8eab5b2394e25e9f2c4091e8e";

async function isCorrectInput(input) {
  const encoder = new TextEncoder();
  const data = encoder.encode(input.toLowerCase());
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex === targetHash;
}
