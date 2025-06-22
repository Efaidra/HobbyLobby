const chatBox = document.getElementById('chatBox');
const userInput = document.getElementById('userInput');

const responses = {
  "hello": "ur an asshole",
  "how are u": "choke on an apple",
  "fuck u": "bett",
  "die": "okayy love uu",
  "i love u": "i love me too",
  "im 30 times hotter than jenna ortega": "a mosquito is way hotter",
  "name ur best quotes": "i only love the money #fuckppl, im a gift to evolution, a gift to revolution, a gift to humanity, bigger number=better, rl mysterious, rl hot , DADD, a 17 year old told me to lick herr,Blue+shiny=eatable,i am a higher level asshole with actual standards (so i dont like sushi), picky eaters are ppl with good food standars, sparkling water is for psychos, the only thing i love more than men are gay men, im a fitness coach, life coach, lifestyle coach, positivity coach, tennis coach,brioche is just the shittier version of bread with sugar,since men and lesbians like the same gender, why dont they get lesbians?,#wasbornagenious,i think i gave myself a hickey when i was 5",

  }

function sendMessage() {
  const msg = userInput.value.trim().toLowerCase();
  if (!msg) return;

  appendMessage("You", msg);
  userInput.value = "";

  setTimeout(() => {
    const reply = responses[msg] || "are u a fucking asshole u cant say that shit";
    appendMessage("InstaBot", reply);
  }, 500);
}

function appendMessage(sender, text) {
  const msgDiv = document.createElement('div');
  msgDiv.textContent = `${sender}: ${text}`;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}
