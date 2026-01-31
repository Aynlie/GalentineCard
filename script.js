// Galentine's Card Script - Enhanced Version 

// Map lowercase name -> Image/GIF file path
const customGifs = {
  "marga": "image/Marga.png",
  "jem": "image/Jem.png",
  "chleo": "image/Chleo.png",
  // add more: "lowercasename": "image/filename.png"
};

//  DOM Elements
const input = document.getElementById('name');
const button = document.getElementById('messageButton');
const messageDiv = document.getElementById('message');
const userNameSpan = document.getElementById('userName');
const gifImg = document.getElementById('cardGif');

//  Personalized messages for each person
const messages = {
  "marga": 
    "Hi Marga! 💕 Keep shining with that same energy and positivity that lights up every room you’re in. Continue to love yourself — even more than those from your past who couldn’t see your true worth. Surround yourself with people who value you for who you are — not as a tool, not as a thing, but as someone whose smile heals and strengthens others. Keep being radiant and happy, because you deserve all the love and peace you give. 🌸 Happy lang, always!",
  
  "jem": 
    "Hi Jem! 💖 I adore your enthusiastic yet calm personality — it makes people feel seen, understood, and valued. You connect with others so genuinely, and that’s what makes you truly special. Your chill and comforting vibe brings ease to everyone around you, including me. This Valentine’s Day, I hope you enjoy every moment with your loved ones. Keep smiling, stay radiant, and remember — happy lang, always! 🌷",
  
  "chleo": 
    "Hi Chleo! 💗 Ikaw talaga yung pinaka-unexpected kong magiging close ngayong 2026! Akala ko dati ma-tu-turn off ka na sa’kin dahil sa pagiging weird at random ko, pero ayun—hindi pala! 😆 Mas lalo tuloy akong naging thankful at appreciated sa ganitong klaseng unexpected friendship. Always stay active and let your kindness keep on blooming, ha? At syempre, keep being pakak mhiema! 💕"
};

//  Default message if name not found
const defaultMessage = 
  "Wishing you a day filled with love, laughter, and sweet memories. You are cherished beyond words! 💝";

//  Normalize the name (e.g. “  jAYmee ” → “Jaymee”)
function normalizeName(str) {
  const trimmed = (str || '').trim().toLowerCase();
  return trimmed;
}

//  Choose the right image/GIF
function chooseGifFor(nameNormalized) {
  if (!nameNormalized) return 'Gif/output.gif';
  return customGifs[nameNormalized] || 'Gif/output.gif';
}

//  Show personalized message
function showPersonalMessage() {
  const raw = input.value.trim();

  if (raw === "") {
    input.classList.add("shake");
    setTimeout(() => input.classList.remove("shake"), 400);
    return;
  }

  const normalized = normalizeName(raw);
  const displayName = raw[0].toUpperCase() + raw.slice(1).toLowerCase();

  // Get the custom message or use the default
  const messageText = messages[normalized] || defaultMessage;

  //  Update message section
  userNameSpan.textContent = displayName;
  messageDiv.querySelector("p:nth-of-type(2)").textContent = messageText;

  //  Update image if exists
  gifImg.src = chooseGifFor(normalized);

  //  Show the message with animation
  messageDiv.style.display = "block";
  void messageDiv.offsetWidth;
  messageDiv.classList.add("show");

  //  Save name to localStorage
  try {
    localStorage.setItem('lastGalName', normalized);
  } catch (e) { /* ignore */ }
}

//  Load last entered name if available
window.addEventListener('DOMContentLoaded', () => {
  try {
    const last = localStorage.getItem('lastGalName');
    if (last) input.value = last;
  } catch (e) { /* ignore */ }
});

//  Allow “Enter” key to trigger message
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') showPersonalMessage();
});

//  Button click event
button.addEventListener('click', showPersonalMessage);
