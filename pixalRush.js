function aboutMe(){
  document.getElementById("magic").innerHTML="Welcome to the professional portfolio of Dr. Snortley Von Giggleton, the world’s Chief Laughter Optimization Engineer. With a triple PhD in Giggle Dynamics, Pun-Based Therapy, and Algorithmic Chuckle Induction, Dr. Giggleton has spent the last 5 years reverse-engineering the human sense of humor — one meme at a time.<br>Whether it's evaluating the historical impact of ancient Vine compilations or conducting real-time laugh audits in corporate boardrooms, no joke escapes his scientific scrutiny.<br><br>🎉 Know This Jolly<br>Behind every chuckle is a strategy. Behind every meme — a mission. This is engineered joy, precision comedy, and yes, the occasional pun so bad it resets your brain.<br>From getting AI to crack genuinely terrible dad jokes, to transforming lifeless Zoom calls into unexpected comedy roasts — Dr. Giggleton is the system bug that makes your corporate monotony crash in a blaze of laughter.<br>Scroll on if you're ready to laugh, learn, and question how your job title ever felt normal.";
}

function whyMe(){
  document.getElementById("magic").innerHTML="AI Expert in Happiness. Freelance | 2020 – Present. <br>Worked with 3 emotionally bankrupt companies and helped them reach World Happiness Index ranks of 1, 4, and 7 — mostly by injecting sarcasm into Slack and replacing ASAP with LOL. <br>Built an AI bot that replies to complaints with dad jokes and dancing llama GIFs (ROI: Smiles Per Hour = ∞). <br>Introduced Mood-as-a-Service (MaaS) — because emotional stability should be SaaS-based. <br>Conducted mandatory laugh-yoga in quarterly reviews (nobody remembers the revenue, but they still giggle). <br>Left teams in shackles of laughter — not responsible for giggle-induced abs workouts.<br>“He didn’t fix our KPIs, but our KPIs laughed back.” — Anonymous HR Director";
}

function meSkill(){
  document.getElementById("magic").innerHTML="How I Make People Laugh (Seriously)<br>*Reverse Psychology Therapy* – I claim no one’s funny here until laughter proves me wrong.<br>*Error 404: Sadness Not Found* – Auto-memes triggered by frowns.<br>PowerPoint *Karaoke* – Presentations on topics like How Penguins Invented Wi-Fi.<br>*Emoji-Only Comedy* – Just 🤡💻💥😵🤣. Laugh or decode it.<br>*Corporate Roast Fridays* – Roasting the Wi-Fi and sometimes myself.<br>*LaughGPT™* – AI that turns stress into sarcasm and GIFs.<br>*Sadness Firewall* – Replaces urgent emails with Take a nap and vibe.<br>*The Chuckle Challenge™* – Make someone laugh so hard they forget their job title.";
}

const testimonials = [
  {
    quote: "After Yash’s Mood-as-a-Service integration, our Monday stand-ups turned into actual stand-ups. Productivity is up, but more importantly — so are the corners of our mouths.",
    author: "— Riya Sharma, HR Head, Laughingstock Pvt. Ltd."
  },
  {
    quote: "I came to complain about system errors, but left giggling about penguins inventing Wi-Fi. I don’t know what happened. 10/10 confusion, 12/10 experience.",
    author: "— Rajeev Malhotra, CTO, StressCorp Ltd."
  },
  {
    quote: "Woof. Since Yash joined, my human laughs so much he drops snacks. Best hire ever. Also, tell him to add belly rubs to the onboarding process.",
    author: "— Bruno, CPO (Chief Pet Officer), Verified Talking Dog"
  },
  {
    quote: "As a representative of Zorblatt Prime, I was tasked with evaluating Earth's emotional resilience. Yash’s use of sarcastic automation and dancing cat GIFs has convinced our council that humanity might be worth saving.",
    author: "— Glarnok-7, Galactic Sentience Auditor, Zorblatt Interplanetary Committee"
  }
];

let current = 0;
const box = document.getElementById("testimonial-box");

function showTestimonial(index) {
  const t = testimonials[index];
  box.innerHTML = `
    <blockquote>"${t.quote}"</blockquote>
    <footer>${t.author}</footer>
  `;
}

// Initial load
showTestimonial(current);

// Rotate every 4 seconds
setInterval(() => {
  current = (current + 1) % testimonials.length;
  showTestimonial(current);
}, 4000);
