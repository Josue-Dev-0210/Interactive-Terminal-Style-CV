const ICONS = {

  email: `<svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="6" width="24" height="18" rx="2" stroke="#00ff88" stroke-width="1.5"/>
    <rect x="4" y="6" width="24" height="4" fill="#00ff88" opacity="0.15"/>
    <line x1="9" y1="15" x2="23" y2="15" stroke="#00ff88" stroke-width="1"/>
    <line x1="9" y1="18" x2="19" y2="18" stroke="#00ff88" stroke-width="1" opacity="0.5"/>
    <rect x="2" y="8" width="3" height="2" fill="#00cfff" opacity="0.7"/>
    <rect x="27" y="14" width="4" height="1" fill="#ff4f4f" opacity="0.6"/>
  </svg>`,

  github: `<svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 4C9.37 4 4 9.37 4 16c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C24.56 25.8 28 21.3 28 16c0-6.63-5.37-12-12-12z" stroke="#00cfff" stroke-width="1.2"/>
    <rect x="0" y="10" width="2" height="1" fill="#00ff88" opacity="0.8"/>
    <rect x="30" y="18" width="2" height="1" fill="#ff4f4f" opacity="0.6"/>
  </svg>`,

  linkedin: `<svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="24" height="24" rx="4" stroke="#00cfff" stroke-width="1.5"/>
    <rect x="9" y="13" width="3" height="10" fill="#00cfff" opacity="0.9"/>
    <circle cx="10.5" cy="10" r="2" fill="#00cfff" opacity="0.9"/>
    <path d="M14 13h3v2.5c.5-1.5 2-2.8 4-2.5 3 .4 3 3 3 5v5h-3v-5c0-1-0.5-2-1.5-2s-2 1-2 2.5v4.5h-3.5V13z" fill="#00cfff" opacity="0.9"/>
    <rect x="1" y="15" width="2" height="1" fill="#00ff88" opacity="0.7"/>
    <rect x="28" y="9" width="3" height="1" fill="#ffd600" opacity="0.5"/>
  </svg>`,

  whatsapp: `<svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 4C9.37 4 4 9.37 4 16c0 2.1.54 4.08 1.49 5.8L4 28l6.35-1.66A11.93 11.93 0 0 0 16 28c6.63 0 12-5.37 12-12S22.63 4 16 4z" stroke="#00ff88" stroke-width="1.5"/>
    <path d="M20.5 18.5c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.19-.24-.57-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.47 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.27.49 1.7.62.72.23 1.37.2 1.88.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" fill="#00ff88" opacity="0.8"/>
    <rect x="28" y="7" width="3" height="1" fill="#ff4f4f" opacity="0.5"/>
  </svg>`,

  cert: `<svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="16,4 20,12 29,13 22,20 24,29 16,25 8,29 10,20 3,13 12,12" stroke="#ffd600" stroke-width="1.5"/>
    <polygon points="16,8 19,14 25,15 20,19 22,25 16,22 10,25 12,19 7,15 13,14" fill="#ffd600" opacity="0.15"/>
    <rect x="0" y="16" width="2" height="1" fill="#00cfff" opacity="0.8"/>
    <rect x="14" y="1" width="1" height="3" fill="#ff4f4f" opacity="0.6"/>
    <rect x="30" y="14" width="2" height="1" fill="#00ff88" opacity="0.7"/>
  </svg>`,

  user: `<svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="12" r="6" stroke="#00cfff" stroke-width="1.5"/>
    <path d="M6 28c0-5.52 4.48-10 10-10s10 4.48 10 10" stroke="#00cfff" stroke-width="1.5" stroke-linecap="round"/>
    <rect x="0" y="11" width="3" height="1" fill="#00ff88" opacity="0.7"/>
    <rect x="29" y="20" width="3" height="1" fill="#ff4f4f" opacity="0.5"/>
    <rect x="14" y="0" width="1" height="2" fill="#ffd600" opacity="0.6"/>
  </svg>`,

  location: `<svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 4C11.58 4 8 7.58 8 12c0 6 8 16 8 16s8-10 8-16c0-4.42-3.58-8-8-8z" stroke="#ff4f4f" stroke-width="1.5"/>
    <circle cx="16" cy="12" r="2.5" fill="#ff4f4f" opacity="0.7"/>
    <rect x="0" y="12" width="4" height="1" fill="#00cfff" opacity="0.6"/>
    <rect x="28" y="6" width="4" height="1" fill="#ffd600" opacity="0.5"/>
  </svg>`,

  code: `<svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="8" width="16" height="6" rx="1" stroke="#ffd600" stroke-width="1.5"/>
    <rect x="4" y="18" width="10" height="6" rx="1" stroke="#ffd600" stroke-width="1.5"/>
    <line x1="20" y1="11" x2="26" y2="11" stroke="#ffd600" stroke-width="1.5"/>
    <line x1="14" y1="21" x2="26" y2="21" stroke="#ffd600" stroke-width="1.5"/>
    <circle cx="27" cy="11" r="2" stroke="#ffd600" stroke-width="1"/>
    <circle cx="27" cy="21" r="2" stroke="#00cfff" stroke-width="1"/>
    <rect x="0" y="10" width="2" height="1" fill="#ff4f4f" opacity="0.6"/>
  </svg>`,

  web: `<svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="11" height="11" rx="2" stroke="#00cfff" stroke-width="1.5"/>
    <rect x="17" y="4" width="11" height="11" rx="2" stroke="#00cfff" stroke-width="1.5"/>
    <rect x="4" y="17" width="11" height="11" rx="2" stroke="#00cfff" stroke-width="1.5"/>
    <rect x="17" y="17" width="11" height="11" rx="2" stroke="#00cfff" stroke-width="1.5" stroke-dasharray="2 1.5"/>
    <rect x="0" y="8" width="2" height="1" fill="#00ff88" opacity="0.7"/>
    <rect x="30" y="22" width="2" height="1" fill="#ffd600" opacity="0.6"/>
  </svg>`,

  shield: `<svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="10" stroke="#ff4f4f" stroke-width="1.5"/>
    <circle cx="16" cy="16" r="6" stroke="#ff4f4f" stroke-width="1" opacity="0.5"/>
    <circle cx="16" cy="16" r="2" fill="#ff4f4f"/>
    <line x1="16" y1="4" x2="16" y2="8" stroke="#ff4f4f" stroke-width="1.5"/>
    <line x1="16" y1="24" x2="16" y2="28" stroke="#ff4f4f" stroke-width="1.5"/>
    <line x1="4" y1="16" x2="8" y2="16" stroke="#ff4f4f" stroke-width="1.5"/>
    <line x1="24" y1="16" x2="28" y2="16" stroke="#ff4f4f" stroke-width="1.5"/>
    <rect x="0" y="9" width="2" height="1" fill="#00cfff" opacity="0.7"/>
    <rect x="30" y="22" width="2" height="1" fill="#00ff88" opacity="0.6"/>
  </svg>`,

  network: `<svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="8" width="22" height="16" rx="2" stroke="#00ff88" stroke-width="1.5"/>
    <line x1="9" y1="24" x2="9" y2="27" stroke="#00ff88" stroke-width="1.5"/>
    <line x1="23" y1="24" x2="23" y2="27" stroke="#00ff88" stroke-width="1.5"/>
    <line x1="7" y1="27" x2="25" y2="27" stroke="#00ff88" stroke-width="1.5"/>
    <rect x="9" y="12" width="5" height="3" rx="1" fill="#00ff88" opacity="0.2" stroke="#00ff88" stroke-width="1"/>
    <rect x="18" y="12" width="5" height="3" rx="1" fill="#00ff88" opacity="0.2" stroke="#00ff88" stroke-width="1"/>
    <rect x="0" y="15" width="3" height="1" fill="#ff4f4f" opacity="0.6"/>
    <rect x="29" y="10" width="3" height="1" fill="#ffd600" opacity="0.5"/>
  </svg>`,

};

function icon(name) {
  return ICONS[name] || '';
}

const PROJECTS = [

  {
    id: 'terminal',
    name: 'Terminal Interactiva',
    stack: 'HTML 5 + CSS3 + Vanilla JS',
    desc: 'Terminal interactiva embebible en cualquier sitio web.',
    url: 'https://josue-dev-0210.github.io/Interactive-Terminal-Style-CV/',
  },
  {
    id: 'calculadora',
    name: 'Calculadora de Subredes',
    stack: 'HTML5 + CSS3 + Vanilla JS',
    desc: 'Calculadora de subredes con apartados para el CIDR y la cantidad de subredes a calcular, embebible en cualquier sitio web.',
    url: 'https://josue-dev-0210.github.io/Calculadora-Subredes-JC/'
  },
  {
    id: 'escaner',
    name: 'Simulador de Escaner de red',
    stack: 'HTML5 + CSS3 + Vanilla JS',
    desc: 'Es un simulador de escaneo de redes, en base a que direcciones ingreses te dara los resultados de la cantidad de host, los activos, los puertos abiertos y el tiempo que se tomo el escaneo',
    url: 'https://josue-dev-0210.github.io/Net-Scanner-JC/'
  }
  {
    id: 'tester',
    name: 'Tester de fuerza en contrasenas',
    stack: 'HTML5 + CSS3 + Vanilla JS',
    desc: 'Este es un tester de contrasenas que permite al usuario saber si su contrasena es segura o no junto con un apartado de sugerencias de seguridad para hacer la constrasena mas segura',
    url: 'https://josue-dev-0210.github.io/Password-tester-JC/'
  }
];  

const SKILLS = {
  lenguajes: { icon: 'code',    items: ['Python', 'JavaScript', 'Java', 'C++', 'Bash', 'SQL'] },
  web:       { icon: 'web',     items: ['HTML/CSS', 'Astro', 'Flask', 'Git'] },
  sistemas:  { icon: 'network', items: ['Linux','TCP/IP', 'Cisco', 'UFW'] },
  seguridad: { icon: 'shield',  items: ['Kali Linux', 'Nmap', 'Metasploit', 'ClamAV'] },
};

const CERTS = [
  { icon: 'cert', text: 'Python Developer          — freeCodeCamp' },
  { icon: 'cert', text: 'Relational Database       — freeCodeCamp' },
  { icon: 'cert', text: 'AI Development            — BIG School' },
  { icon: 'cert', text: 'Ethical Hacking & CySec   — BIG School' },
  { icon: 'cert', text: 'Robotics Workshop         — REDCOLSI 2025 - Nodo de Cordoba' },
];

const CONTACT = [
  { icon: 'email',    text: 'josue.dev.0210@gmail.com' },
  { icon: 'github',   text: 'github.com/josue-dev-0210' },
  { icon: 'linkedin', text: 'linkedin.com/in/josué cáceres' },
];

const WHOAMI = [
  { v: ' Josue — Técnico en Sistemas & Redes  ' },
  { v: ' Instituto Tecnológico San Agustín    ' },
  { v: ` ${icon('location')}<span style="vertical-align:middle"> Montería, Colombia</span>               `, html: true },
  { v: '' },
  { v: ` ${icon('user')}<span style="vertical-align:middle">  Estudiante + Freelancer Web & Content</span>`, html: true },
  { v: ' Apasionado por Linux, ciberseguridad' },
  { v: ' y construir programas, paginas web u otros proyectos que me permitan demostrar mis habilidades.' },
];

const CMDS = {

  help: () => [
    { t: 'info',  v: 'Comandos disponibles:' },
    { t: 'muted', v: '─────────────────────────────────────' },
    { t: 'out',   v: '  whoami          →  sobre mí' },
    { t: 'out',   v: '  ls projects/    →  listar proyectos' },
    { t: 'out',   v: '  cat project/<id>→  detalle de proyecto' },
    { t: 'out',   v: '  skills          →  stack técnico' },
    { t: 'out',   v: '  certs           →  certificaciones' },
    { t: 'out',   v: '  contact         →  cómo contactarme' },
    { t: 'out',   v: '  clear           →  limpiar pantalla' },
    { t: 'muted', v: '─────────────────────────────────────' },
    { t: 'muted', v: 'Tip: Tab autocompleta, ↑↓ navega historial' },
  ],

  whoami: () => WHOAMI.map(({ v, html }) => ({ t: 'out', v, html })),

  'ls projects/': () => [
    { t: 'info', v: 'total ' + PROJECTS.length },
    ...PROJECTS.map(p => ({ t: 'out', v: `  ${p.id.padEnd(14)} ${p.name}` })),
    { t: 'muted', v: '' },
    { t: 'muted', v: "usa 'cat project/<id>' para ver detalles" },
  ],

  skills: () => [
    { t: 'info',  v: 'Stack técnico:' },
    { t: 'muted', v: '─────────────────────────────────────' },
    ...Object.entries(SKILLS).flatMap(([cat, { icon: ic, items }]) => [
      { t: 'warn', v: `${icon(ic)}<span style="vertical-align:middle;margin-left:6px">${cat.toUpperCase()}</span>`, html: true },
      { t: 'out',  v: '    ' + items.join(' · ') },
    ]),
  ],

  certs: () => [
    { t: 'info',  v: 'Certificaciones:' },
    { t: 'muted', v: '─────────────────────────────────────' },
    ...CERTS.map(c => ({
      t: 'out',
      v: `${icon(c.icon)}<span style="vertical-align:middle;margin-left:6px">${c.text}</span>`,
      html: true,
    })),
  ],

  contact: () => [
    { t: 'info',  v: 'Contacto:' },
    { t: 'muted', v: '─────────────────────────────────────' },
    ...CONTACT.map(c => ({
      t: 'success',
      v: `${icon(c.icon)}<span style="vertical-align:middle;margin-left:6px">${c.text}</span>`,
      html: true,
    })),
    { t: 'muted', v: '' },
    { t: 'muted', v: '  Disponible para proyectos freelance remotos.' },
  ],

  clear: () => '__CLEAR__',
};


function resolveCmd(raw) {
  const trimmed = raw.trim().toLowerCase();

  if (CMDS[trimmed]) return CMDS[trimmed]();

  const catMatch = trimmed.match(/^cat\s+project\/(\w+)$/);
  if (catMatch) {
    const p = PROJECTS.find(x => x.id === catMatch[1]);
    if (!p) return [{ t: 'error', v: `cat: project/${catMatch[1]}: No such file or directory` }];
    return [
      { t: 'info',  v: '┌─ ' + p.name },
      { t: 'out',   v: '│  stack:  ' + p.stack },
      { t: 'out',   v: '│  desc:   ' + p.desc },
      { t: 'out',   v: '│  url:    ' + p.url },
      { t: 'muted', v: '└──────────────────────────────────' },
    ];
  }

  if (trimmed === '') return [];

  return [
    { t: 'error', v: `bash: ${raw.trim()}: command not found` },
    { t: 'muted', v: "escribe 'help' para ver los comandos disponibles" },
  ];
}

function addLine(text, type, html = false) {
  const classMap = {
    prompt:  'prompt-line',
    out:     'output-line',
    error:   'error-line',
    info:    'info-line',
    success: 'success-line',
    warn:    'warn-line',
    muted:   'muted-line',
  };
  const div = document.createElement('div');
  div.className = 'line ' + (classMap[type] || 'output-line');
  div.style.display = 'flex';
  div.style.alignItems = 'center';
  div.style.gap = '8px';
  if (html) div.innerHTML = text;
  else div.textContent = text;
  output.appendChild(div);
  output.scrollTop = output.scrollHeight;
}

function run(cmd) {
  addLine('josue-dev-0210@terminal:~$ ' + cmd, 'prompt');
  const result = resolveCmd(cmd);
  if (result === '__CLEAR__') { output.innerHTML = ''; return; }
  result.forEach(({ t, v, html }) => addLine(v, t, html));
  addLine('', 'out');
}


const output = document.getElementById('output');
const cmdInput = document.getElementById('cmd-input');
const sugsContainer = document.getElementById('suggestions');

const BOOT = [
  { t: 'muted', v: 'Zorin OS 18.1 — kernel 6.8.0' },
  { t: 'muted', v: 'Last login: ' + new Date().toLocaleString('es-CO', {
      weekday: 'short', month: 'short', day: 'numeric',
      hour: '2-digit', minute: '2-digit',
    })
  },
  { t: 'out',  v: '' },
  { t: 'info', v: '  Bienvenido a mi portafolio' },
  { t: 'muted', v: "escribe 'help' para empezar" },
  { t: 'out',  v: '' },
];
BOOT.forEach(({ t, v }) => addLine(v, t));


const ALL_CMDS = [
  'help', 'whoami', 'ls projects/', 'skills', 'certs', 'contact', 'clear',
  ...PROJECTS.map(p => 'cat project/' + p.id),
];

ALL_CMDS.forEach(cmd => {
  const btn = document.createElement('button');
  btn.className = 'sug-btn';
  btn.textContent = cmd;
  btn.addEventListener('click', () => {
    run(cmd);
    cmdHistory.unshift(cmd);
    histIdx = -1;
    cmdInput.focus();
  });
  sugsContainer.appendChild(btn);
});


const cmdHistory = [];
let histIdx = -1;

cmdInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    const cmd = cmdInput.value;
    if (cmd.trim()) { cmdHistory.unshift(cmd); histIdx = -1; }
    run(cmd);
    cmdInput.value = '';
  }
  if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (histIdx < cmdHistory.length - 1) { histIdx++; cmdInput.value = cmdHistory[histIdx]; }
  }
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    if (histIdx > 0) { histIdx--; cmdInput.value = cmdHistory[histIdx]; }
    else { histIdx = -1; cmdInput.value = ''; }
  }
  if (e.key === 'Tab') {
    e.preventDefault();
    const v = cmdInput.value.toLowerCase();
    const match = ALL_CMDS.find(c => c.startsWith(v) && c !== v);
    if (match) cmdInput.value = match;
  }
});

cmdInput.focus();