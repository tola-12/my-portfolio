/**
 * Hor Tola - Full-Stack Software Engineer & Tech Mentor Portfolio
 * Application Script & Interactive Logic
 */

// -----------------------------------------------------------------------------
// 1. Tailwind CSS Configuration
// -----------------------------------------------------------------------------
window.tailwind = window.tailwind || {};
window.tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        brand: {
          dark: '#08090C',
          card: '#0E1117',
          border: 'rgba(255, 255, 255, 0.08)',
          cyan: '#00F0FF',
          emerald: '#10B981',
          accent: '#3B82F6',
        }
      },
      animation: {
        'glow-pulse': 'glow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.85' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    }
  }
};
// Also expose directly as tailwind.config for Tailwind CDN compatibility
if (typeof tailwind !== 'undefined') {
  tailwind.config = window.tailwind.config;
}

// -----------------------------------------------------------------------------
// 2. Confetti & Celebration Trigger
// -----------------------------------------------------------------------------
function fireCelebration() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00F0FF', '#10B981', '#F59E0B', '#3B82F6']
    });
  }
  showToast("🎉 Happy 21st Birthday, Hor Tola! Cheers to big milestones!");
}

// -----------------------------------------------------------------------------
// 3. Clipboard & Toast Notification System
// -----------------------------------------------------------------------------
function copyToClipboard(text, customMessage) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    showToast(customMessage || 'Copied to clipboard!');
  } catch (err) {
    showToast('Could not copy to clipboard.');
  }
  document.body.removeChild(textarea);
}

function showToast(message) {
  const box = document.getElementById('toast-box');
  if (!box) return;

  const toast = document.createElement('div');
  toast.className = 'px-4 py-3 rounded-xl bg-slate-900 border border-cyan-500/40 text-cyan-300 text-xs font-mono shadow-2xl transition-all duration-300 translate-y-2 opacity-0 pointer-events-auto flex items-center gap-2';
  toast.innerHTML = `<span>⚡</span><span>${message}</span>`;
  
  box.appendChild(toast);

  // Animate in
  setTimeout(() => {
    toast.classList.remove('translate-y-2', 'opacity-0');
  }, 10);

  // Dismiss after 3.5 seconds
  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// -----------------------------------------------------------------------------
// 4. Interactive Terminal Logic
// -----------------------------------------------------------------------------
const commands = {
  help: `Available commands:
• <span class="text-cyan-300">skills</span>   : Output core languages, frameworks & platforms
• <span class="text-cyan-300">projects</span> : Show key production systems & GitHub builds
• <span class="text-cyan-300">awards</span>   : Grant wins, A-SASSY, & UNIPRENEUR awards
• <span class="text-cyan-300">specs</span>    : Developer machine hardware & setup
• <span class="text-cyan-300">whoami</span>   : Bio and education credentials
• <span class="text-cyan-300">party</span>    : Fire birthday confetti celebratory burst
• <span class="text-cyan-300">clear</span>    : Wipe the terminal buffer`,

  skills: `Frontend : Tailwind CSS, Responsive Web Design, JavaScript, React basics
Backend  : Laravel (PHP), Python, REST APIs, Microservices
Mobile   : Flutter, Dart, Cross-Platform Architecture
Database : MySQL, SQLite, TablePlus
DevOps   : Docker, Git, GitHub Actions, Linux (Ubuntu/Debian), ServBay`,

  projects: `1. Grow2Growth - Agricultural rice seed traceability platform (Award winner)
2. FLC Attendance PWA - Automated QR check-in & student ops portal
3. Campus Mobile Hub - Cross-platform Flutter course assistant
4. Power Platform Bots - Automated reporting for educational institutions`,

  awards: `• 1st Place - DYNAMIC & UNIPRENEUR Season 2 (Grow2Growth)
• €4,000 Grant Recipient - A-SASSY Youth-Led Innovation Fund
• National University of Battambang (NUBB) Outstanding IT Candidate`,

  specs: `Hardware: 16-inch Apple MacBook Pro
Chip    : Apple M1 Max (High-Core GPU & CPU)
Memory  : 32 GB Unified RAM
Storage : 1 TB Fast NVMe SSD
OS      : macOS Sequoia / Linux CLI workflows
Editor  : VS Code + JetBrains + Warp Terminal`,

  whoami: `Name     : Hor Tola
Status   : 4th-Year Senior IT Scholar @ National University of Battambang (NUBB)
Role     : Computer Trainer & Curriculum Developer @ Future Leader Center
Location : Krong Battambang, Cambodia`,

  party: () => {
    fireCelebration();
    return `<span class="text-emerald-400 font-bold">Party routine initiated! Happy 21st Birthday, Tola! 🎂🎉</span>`;
  }
};

function executeTerminalCommand() {
  const terminalInput = document.getElementById('terminal-input');
  const terminalBody = document.getElementById('terminal-body');
  if (!terminalInput || !terminalBody) return;

  const rawCmd = terminalInput.value.trim();
  if (!rawCmd) return;

  const cmd = rawCmd.toLowerCase();
  terminalInput.value = '';

  // Print prompt echo
  const echoLine = document.createElement('div');
  echoLine.className = 'text-slate-400';
  echoLine.innerHTML = `<span class="text-emerald-400 font-bold">ht@battambang:~$</span> ${escapeHTML(rawCmd)}`;
  terminalBody.appendChild(echoLine);

  if (cmd === 'clear') {
    terminalBody.innerHTML = '';
    return;
  }

  const responseLine = document.createElement('div');
  responseLine.className = 'pl-2 text-slate-200 leading-relaxed';

  if (commands[cmd]) {
    if (typeof commands[cmd] === 'function') {
      responseLine.innerHTML = commands[cmd]();
    } else {
      responseLine.innerHTML = commands[cmd].replace(/\n/g, '<br/>');
    }
  } else {
    responseLine.innerHTML = `<span class="text-rose-400">Command not recognized: '${escapeHTML(rawCmd)}'. Type <span class="text-cyan-300">help</span> for available commands.</span>`;
  }

  terminalBody.appendChild(responseLine);
  terminalBody.scrollTop = terminalBody.scrollHeight;
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}

// -----------------------------------------------------------------------------
// 5. Project Filtering
// -----------------------------------------------------------------------------
function filterProjects(filter) {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    if (btn.getAttribute('data-filter') === filter) {
      btn.classList.remove('bg-white/5', 'text-slate-300');
      btn.classList.add('bg-white', 'text-black', 'font-semibold');
    } else {
      btn.classList.remove('bg-white', 'text-black', 'font-semibold');
      btn.classList.add('bg-white/5', 'text-slate-300');
    }
  });

  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    const categories = card.getAttribute('data-category');
    if (filter === 'all' || (categories && categories.includes(filter))) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

// -----------------------------------------------------------------------------
// 6. Project Details & Modal System
// -----------------------------------------------------------------------------
const projectDetails = {
  'grow2growth': {
    title: 'Grow2Growth Rice Seed Traceability',
    badge: 'AgriTech • €4,000 A-SASSY Grant & UNIPRENEUR Champion',
    tech: 'Laravel, Flutter, REST APIs, QR Seed Tracking, MySQL',
    desc: `Grow2Growth is an award-winning digital venture built to verify purity and authenticity in agricultural seed distribution across Battambang and greater Cambodia.<br/><br/>
    • <strong>Achievements:</strong> 1st place champion in DYNAMIC & UNIPRENEUR Season 2; secured €4,000 from the A-SASSY Youth-Led Innovation Fund.<br/>
    • <strong>Technical Role:</strong> Architected backend API endpoints using Laravel, designed the mobile prototype in Flutter, and created verifiable QR batch codes.`
  },
  'flc-attendance': {
    title: 'FLC Smart QR Attendance & Management Portal',
    badge: 'Production Web App • Future Leader Center',
    tech: 'Laravel PWA, Tailwind CSS, MySQL, Power Automate',
    desc: `Engineered an automated operational portal replacing paper-based records across student cohorts at Future Leader Center.<br/><br/>
    • <strong>Features:</strong> Single-second QR scanning on student ID cards, automated SMS/Telegram attendance summaries for guardians, and grade evaluation charts.<br/>
    • <strong>Impact:</strong> Cut daily record entry time by 85% for trainers and administration.`
  },
  'campus-hub': {
    title: 'Campus Learner Mobile Hub',
    badge: 'Cross-Platform Mobile Application',
    tech: 'Flutter, Dart, Provider State Management, SQLite',
    desc: `A responsive mobile client enabling students to track curriculum timetables, download lesson resources, and access offline exam reminders.<br/><br/>
    • Built with local SQLite storage for resilient performance in areas with spotty connectivity.`
  }
};

function openModal(projectId) {
  const modal = document.getElementById('project-modal');
  const content = document.getElementById('modal-content');
  const data = projectDetails[projectId];
  if (!modal || !content || !data) return;

  content.innerHTML = `
    <span class="text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-2.5 py-1 rounded-md inline-block">${data.badge}</span>
    <h3 class="text-2xl font-bold text-white">${data.title}</h3>
    <p class="text-sm font-mono text-slate-400 border-b border-white/10 pb-3">Tech: <span class="text-emerald-300">${data.tech}</span></p>
    <div class="text-sm text-slate-300 leading-relaxed space-y-2">${data.desc}</div>
  `;

  modal.classList.remove('opacity-0', 'pointer-events-none');
}

function closeModal() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.add('opacity-0', 'pointer-events-none');
  }
}

// -----------------------------------------------------------------------------
// 7. Form Submission Handler
// -----------------------------------------------------------------------------
function handleMessageSubmit(e) {
  e.preventDefault();
  const nameInput = document.getElementById('sender-name');
  const name = nameInput ? nameInput.value : 'Friend';
  showToast(`Thank you, ${name}! Your transmission has been queued.`);
  e.target.reset();
}

// -----------------------------------------------------------------------------
// 8. Event Listeners & DOM Initialization
// -----------------------------------------------------------------------------
function initEventListeners() {
  const terminalInput = document.getElementById('terminal-input');
  if (terminalInput) {
    terminalInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        executeTerminalCommand();
      }
    });
  }

  const projectModal = document.getElementById('project-modal');
  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target.id === 'project-modal') {
        closeModal();
      }
    });
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initEventListeners);
} else {
  initEventListeners();
}

// -----------------------------------------------------------------------------
// 9. Global Window Exports (for inline HTML onclick/onsubmit attributes)
// -----------------------------------------------------------------------------
window.fireCelebration = fireCelebration;
window.copyToClipboard = copyToClipboard;
window.showToast = showToast;
window.executeTerminalCommand = executeTerminalCommand;
window.filterProjects = filterProjects;
window.openModal = openModal;
window.closeModal = closeModal;
window.handleMessageSubmit = handleMessageSubmit;

