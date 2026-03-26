// ========== DADOS GLOBAIS EXPANDIDOS ==========
const WEAPONS=[
  {n:'⚔️ Espada Simples',r:'C',atk:1,wp:8},
  {n:'🗡️ Espada Forjada',r:'I',atk:1.3,wp:15},
  {n:'🏹 Arco de Yuji',r:'R',atk:1.6,wp:22},
  {n:'🔱 Tridente Amaldiçoado',r:'E',atk:2.0,wp:32},
  {n:'⚡ Claymore Divina',r:'L',atk:2.5,wp:45},
  {n:'🗝️ Katana de Yuji',r:'L',atk:2.3,wp:40},
  {n:'🌙 Foice Celestial',r:'E',atk:1.9,wp:30},
];

const ENEMIES_PROGRESSION=[
  {n:'👻 Grau 4',hp:50,atk:8,def:2,emoji:'👻',rarity:'C',energy:80,level:1,exp:10},
  {n:'👹 Grau 3 — Inferior',hp:75,atk:12,def:3,emoji:'👹',rarity:'I',energy:120,level:2,exp:25},
  {n:'🐺 Grau 2 — Intermediário',hp:120,atk:18,def:6,emoji:'🐺',rarity:'R',energy:160,level:3,exp:50},
  {n:'🦑 Grau 1 — Superior',hp:160,atk:28,def:10,emoji:'🦑',rarity:'E',energy:200,level:4,exp:80},
  {n:'🕷️ Semi-Especial',hp:220,atk:38,def:15,emoji:'🕷️',rarity:'E',energy:240,level:5,exp:120},
  {n:'🐲 Especial',hp:300,atk:50,def:22,emoji:'🐲',rarity:'L',energy:280,level:6,exp:180},
  {n:'👑 Sukuna — Fase 1',hp:400,atk:70,def:28,emoji:'👑',rarity:'L',energy:320,level:7,exp:250},
  {n:'👹 Maldição Ancestral',hp:350,atk:65,def:25,emoji:'👹',rarity:'L',energy:300,level:8,exp:220},
  {n:'🌑 Hanami',hp:280,atk:55,def:18,emoji:'🌿',rarity:'E',energy:260,level:9,exp:200},
  {n:'⚫ Mahito',hp:300,atk:60,def:20,emoji:'⚫',rarity:'E',energy:270,level:10,exp:210},
  {n:'💜 Jogo',hp:320,atk:58,def:22,emoji:'🔥',rarity:'E',energy:265,level:11,exp:215},
  {n:'🩸 Choso',hp:310,atk:62,def:19,emoji:'🩸',rarity:'E',energy:275,level:12,exp:225},
  {n:'👤 Yuji (Possesso)',hp:380,atk:68,def:26,emoji:'💀',rarity:'L',energy:310,level:13,exp:240},
  {n:'🌙 Geto',hp:350,atk:66,def:24,emoji:'🌙',rarity:'L',energy:300,level:14,exp:230},
  {n:'🎭 Kenjaku',hp:420,atk:72,def:30,emoji:'🎭',rarity:'L',energy:330,level:15,exp:260},
  {n:'👁️ Gojo (Limitado)',hp:500,atk:85,def:35,emoji:'👁️',rarity:'M',energy:350,level:16,exp:300},
  {n:'🌌 Sukuna Total',hp:600,atk:95,def:40,emoji:'👑',rarity:'M',energy:400,level:20,exp:400},
  {n:'💫 Yuta',hp:370,atk:70,def:28,emoji:'💫',rarity:'L',energy:310,level:17,exp:245},
  {n:'⚡ Toji',hp:340,atk:72,def:25,emoji:'⚡',rarity:'L',energy:305,level:18,exp:235},
  {n:'🔮 Kamo Choso',hp:330,atk:64,def:23,emoji:'🔮',rarity:'E',energy:285,level:19,exp:220},
];

const TECH_SETS={
  shadowClones:{
    name:'🌑 Dez Sombras — Ten Shadows',
    group:'M',
    description:'Invoca 10 divindades das sombras',
    options:[
      {n:'🐺 Nue — Besta Divina',r:'M',dmg:2.8,cost:45,crit:0.32,desc:'Ataque rápido e furtivo'},
      {n:'🕷 Toad — Sapo Maldito',r:'M',dmg:2.6,cost:42,crit:0.25,desc:'Suporta com defesa'},
      {n:'🐸 Serpent — Serpente',r:'M',dmg:2.9,cost:48,crit:0.35,desc:'Veneno corrosivo'},
      {n:'🦅 Eagle — Águia Celeste',r:'M',dmg:2.7,cost:44,crit:0.28,desc:'Ataque aéreo'},
      {n:'🐢 Tortoise — Tartaruga',r:'M',dmg:2.4,cost:40,crit:0.2,desc:'Escudo invulnerável'},
      {n:'🦌 Deer — Cervo Sagrado',r:'M',dmg:2.5,cost:41,crit:0.22,desc:'Fuga rápida'},
      {n:'🦁 Lion — Leão Dourado',r:'M',dmg:3.0,cost:50,crit:0.38,desc:'Rugido devastador'},
      {n:'🐘 Elephant — Elefante',r:'M',dmg:2.6,cost:43,crit:0.24,desc:'Carga massiva'},
      {n:'⚡ Phoenix — Fênix',r:'M',dmg:3.1,cost:52,crit:0.4,desc:'Ressurreição flamejante'},
      {n:'👹 Divine Beast — Besta Primordial',r:'M',dmg:3.2,cost:55,crit:0.42,desc:'Forma final'},
    ]
  },
  limitless:{
    name:'✨ Ilimitado — Limitless',
    group:'M',
    description:'Técnicas matemáticas definitivas',
    options:[
      {n:'🔵 Blue — Azul (Atração)',r:'M',dmg:2.9,cost:48,crit:0.3,desc:'Puxa tudo para si'},
      {n:'🔴 Red — Vermelho (Repulsão)',r:'M',dmg:2.8,cost:46,crit:0.28,desc:'Afasta com força'},
      {n:'🟣 Purple — Roxo (Convergência)',r:'M',dmg:3.3,cost:60,crit:0.45,desc:'Explosão gravitacional'},
      {n:'⚪ Infinity — Infinito (Defesa)',r:'M',dmg:2.5,cost:40,crit:0.15,desc:'Barreira impenetrável'},
    ]
  }
};

const TECHS_NORMAL=[
  // COMUNS - 10+
  {n:'🌪 Wind Scythe — Foice do Vento',r:'C',dmg:.7,cost:8,crit:0},
  {n:'🧊 Ice Formation — Gelo',r:'C',dmg:.7,cost:8,crit:0},
  {n:'🧵 Puppet Manipulation — Marionetes',r:'C',dmg:.6,cost:6,crit:0},
  {n:'🌿 Nature Cursing — Natureza',r:'C',dmg:.7,cost:8,crit:0},
  {n:'💀 Bone Manipulation — Ossos',r:'C',dmg:.75,cost:9,crit:0.05},
  {n:'💧 Water Manipulation — Água',r:'C',dmg:.65,cost:7,crit:0},
  {n:'🌱 Plant Cursing — Plantas',r:'C',dmg:.7,cost:8,crit:0},
  {n:'🪨 Stone Manipulation — Pedras',r:'C',dmg:.75,cost:9,crit:0.05},
  {n:'💨 Wind Cutting — Corte de Vento',r:'C',dmg:.7,cost:8,crit:0},
  {n:'🌊 Wave Surge — Onda',r:'C',dmg:.68,cost:8,crit:0},
  // INCOMUNS - 20+
  {n:'⚡ Black Flash — Relâmpago Negro',r:'I',dmg:1.0,cost:15,crit:0.15},
  {n:'✂ Dismantle — Desmembrar',r:'I',dmg:1.0,cost:14,crit:0.08},
  {n:'🌀 Cleave — Devastar',r:'I',dmg:1.0,cost:14,crit:0.08},
  {n:'💢 Hairpin — Grampo',r:'I',dmg:0.95,cost:12,crit:0.1},
  {n:'🔀 Boogie Woogie — Troca',r:'I',dmg:0.9,cost:12,crit:0},
  {n:'📐 Ratio Technique — Proporção',r:'I',dmg:1.05,cost:15,crit:0.12},
  {n:'🧲 Magnetism — Magnética',r:'I',dmg:1.0,cost:13,crit:0.1},
  {n:'🔥 Small Fireball — Pequeno Fogo',r:'I',dmg:0.95,cost:14,crit:0.08},
  {n:'❄️ Icy Wind — Vento Gelado',r:'I',dmg:1.0,cost:13,crit:0.1},
  {n:'⚡ Electrical Surge — Descarga Elétrica',r:'I',dmg:1.05,cost:15,crit:0.12},
  {n:'🌪️ Tornado Technique — Técnica do Tornado',r:'I',dmg:1.0,cost:14,crit:0.08},
  {n:'💫 Stun Strike — Golpe Atordoante',r:'I',dmg:0.98,cost:13,crit:0.15},
  {n:'🗡️ Quick Slash — Corte Rápido',r:'I',dmg:1.02,cost:14,crit:0.1},
  {n:'🎯 Precision Cut — Corte Preciso',r:'I',dmg:1.0,cost:15,crit:0.18},
  {n:'🌊 Whip Water — Chicote de Água',r:'I',dmg:0.95,cost:13,crit:0.08},
  {n:'🔗 Chain Binding — Ligação de Corrente',r:'I',dmg:0.9,cost:12,crit:0.05},
  {n:'💎 Crystal Barrage — Chuva de Cristal',r:'I',dmg:1.0,cost:14,crit:0.12},
  {n:'🌙 Lunar Step — Passo Lunar',r:'I',dmg:0.95,cost:11,crit:0.1},
  {n:'✨ Star Strike — Golpe Estelar',r:'I',dmg:1.05,cost:16,crit:0.15},
  {n:'💥 Explosive Impact — Impacto Explosivo',r:'I',dmg:1.08,cost:17,crit:0.14},
  // RARAS - 25+
  {n:'🩸 Blood Manipulation — Sangue',r:'R',dmg:1.3,cost:22,crit:0.12},
  {n:'🎯 Projection Sorcery — Projeção',r:'R',dmg:1.2,cost:20,crit:0.15},
  {n:'🗣 Cursed Speech — Fala',r:'R',dmg:1.4,cost:25,crit:0.2},
  {n:'😶 Idle Transfiguration — Transfiguração',r:'R',dmg:1.25,cost:23,crit:0.1},
  {n:'🌊 Hollow Blue — Azul Oco',r:'R',dmg:1.35,cost:26,crit:0.18},
  {n:'🔴 Divergent Fist — Punho',r:'R',dmg:1.3,cost:24,crit:0.2},
  {n:'🎪 Clown Tech — Técnica do Palhaço',r:'R',dmg:1.25,cost:21,crit:0.1},
  {n:'🌌 Memory Domain — Domínio da Memória',r:'R',dmg:1.2,cost:20,crit:0.12},
  {n:'⚔️ Sword Slash — Corte de Espada',r:'R',dmg:1.28,cost:23,crit:0.16},
  {n:'🌀 Spiral Attack — Ataque em Espiral',r:'R',dmg:1.32,cost:25,crit:0.18},
  {n:'💥 Blast Technique — Técnica de Explosão',r:'R',dmg:1.35,cost:26,crit:0.15},
  {n:'🔮 Fortune Telling — Adivinhação',r:'R',dmg:1.2,cost:19,crit:0.22},
  {n:'🪶 Feather Cutting — Corte de Pena',r:'R',dmg:1.3,cost:24,crit:0.2},
  {n:'🎨 Paint Technique — Técnica da Pintura',r:'R',dmg:1.25,cost:22,crit:0.13},
  {n:'🌲 Forest Creation — Criação de Floresta',r:'R',dmg:1.3,cost:24,crit:0.11},
  {n:'💫 Void Strike — Golpe do Vazio',r:'R',dmg:1.38,cost:27,crit:0.19},
  {n:'⚡ Lightning Bolt — Raio',r:'R',dmg:1.32,cost:25,crit:0.17},
  {n:'❄️ Ice Spear — Lança de Gelo',r:'R',dmg:1.3,cost:24,crit:0.14},
  {n:'🌡️ Temperature Control — Controle de Temperatura',r:'R',dmg:1.28,cost:23,crit:0.12},
  {n:'🎭 Illusion Technique — Técnica da Ilusão',r:'R',dmg:1.2,cost:21,crit:0.1},
  {n:'💎 Gem Summon — Invocação de Gemas',r:'R',dmg:1.33,cost:25,crit:0.16},
  {{n:'🌸 Flower Burst — Explosão de Flores',r:'R',dmg:1.31,cost:24,crit:0.14},
  {n:'🔥 Inferno — Inferno',r:'R',dmg:1.4,cost:28,crit:0.18},
  {n:'🌊 Tsunami Strike — Golpe Tsunami',r:'R',dmg:1.36,cost:26,crit:0.15},
  {n:'🌪️ Whirlwind — Redemoinh',r:'R',dmg:1.34,cost:25,crit:0.14},
  // ÉPICAS - 20+
  {n:'💫 Reverse Cursed Technique — Reversa',r:'E',dmg:1.65,cost:32,crit:0.15},
  {n:'🧿 Soul Manipulation — Alma',r:'E',dmg:1.7,cost:34,crit:0.18},
  {n:'⚗ Poison Manipulation — Veneno',r:'E',dmg:1.6,cost:30,crit:0.2},
  {n:'🌀 Teleportation — Teleporte',r:'E',dmg:1.5,cost:28,crit:0.1},
  {n:'🌟 Shikigami Summoning — Invocação',r:'E',dmg:1.75,cost:36,crit:0.22},
  {n:'🔥 Lava Flow — Fluxo de Lava',r:'E',dmg:1.68,cost:33,crit:0.19},
  {n:'❄️ Absolute Zero — Zero Absoluto',r:'E',dmg:1.72,cost:35,crit:0.21},
  {n:'⚡ Electric Cage — Gaiola Elétrica',r:'E',dmg:1.65,cost:31,crit:0.17},
  {n:'🌊 Aqua Prison — Prisão Aquática',r:'E',dmg:1.62,cost:30,crit:0.16},
  {n:'🌪️ Vortex — Vórtice',r:'E',dmg:1.68,cost:32,crit:0.18},
  {n:'💀 Death Mark — Marca da Morte',r:'E',dmg:1.75,cost:37,crit:0.23},
  {n:'🌙 Moon Slash — Corte Lunar',r:'E',dmg:1.7,cost:33,crit:0.2},
  {n:'✨ Starburst — Explosão Estelar',r:'E',dmg:1.72,cost:34,crit:0.21},
  {n:'💫 Void Shatter — Fragmentação do Vazio',r:'E',dmg:1.78,cost:38,crit:0.24},
  {n:'🔮 Crystal Spike — Espinho de Cristal',r:'E',dmg:1.68,cost:32,crit:0.18},
  {n:'🎪 Grand Finale — Grande Finale',r:'E',dmg:1.75,cost:36,crit:0.22},
  {n:'🌺 Petal Whirlwind — Redemoinh de Pétalas',r:'E',dmg:1.65,cost:31,crit:0.16},
  {n:'⚡ Thunder Storm — Tempestade Elétrica',r:'E',dmg:1.72,cost:34,crit:0.2},
  {n:'🔥 Flame Tornado — Tornado de Chamas',r:'E',dmg:1.7,cost:33,crit:0.19},
  {n:'🌊 Tidal Wave — Onda de Maré',r:'E',dmg:1.68,cost:32,crit:0.17},
  // LENDÁRIAS - 15+
  {n:'👁 Six Eyes — Seis Olhos',r:'L',dmg:2.2,cost:45,crit:0.25},
  {n:'🔮 Hollow Purple — Roxo Oco',r:'L',dmg:2.5,cost:52,crit:0.3},
  {n:'⏱ Overtime — Limite',r:'L',dmg:2.0,cost:40,crit:0.18},
  {n:'🌩 Thunder God — Trovão',r:'L',dmg:2.2,cost:45,crit:0.28},
  {n:'🌙 Crescent Moon — Lua Crescente',r:'L',dmg:2.1,cost:43,crit:0.25},
  {n:'💎 Diamond Barrier — Barreira de Diamante',r:'L',dmg:2.0,cost:42,crit:0.2},
  {n:'🌊 Tidal Destruction — Destruição de Maré',r:'L',dmg:2.35,cost:49,crit:0.28},
  {n:'🔥 Hellfire Inferno — Inferno das Chamas',r:'L',dmg:2.4,cost:50,crit:0.3},
  {n:'❄️ Absolute Blizzard — Blizzard Absoluto',r:'L',dmg:2.3,cost:48,crit:0.27},
  {n:'⚡ Divine Lightning — Raio Divino',r:'L',dmg:2.25,cost:46,crit:0.26},
  {n:'👑 Malevolent Shrine — Santuário Malévolo',r:'L',dmg:2.4,cost:50,crit:0.29},
  {n:'🌌 Limitless Void — Vazio Ilimitado',r:'L',dmg:2.5,cost:52,crit:0.32},
  {n:'💫 Astral Projection — Projeção Astral',r:'L',dmg:2.2,cost:44,crit:0.24},
  {n:'🔮 Cursed Orb — Orbe Amaldiçoada',r:'L',dmg:2.15,cost:43,crit:0.23},
  {n:'🎭 Kenjaku Technique — Técnica Kenjaku',r:'L',dmg:2.3,cost:47,crit:0.26},
];

const DOMAINS=[
  {n:'🌌 Unlimited Void — Vazio Ilimitado',u:'Gojo Satoru',dmg:2.8,cost:50},
  {n:'⛩ Malevolent Shrine — Santuário',u:'Ryomen Sukuna',dmg:2.8,cost:50},
  {n:'🌑 Chimera Shadow Garden — Sombras',u:'Megumi',dmg:2.0,cost:35},
  {n:'⚖ Idle Death Gamble — Aposta',u:'Hakari',dmg:2.2,cost:40},
  {n:'🌿 Botanical Garden — Jardim Botânico',u:'Hanami',dmg:1.9,cost:34},
  {n:'🔥 Fire Mountain — Montanha de Fogo',u:'Jogo',dmg:2.1,cost:38},
  {n:'🌊 Aqua Sanctuary — Santuário Aquático',u:'Mahito',dmg:2.0,cost:36},
  {n:'💫 Star Palace — Palácio Estelar',u:'Yuta',dmg:2.3,cost:45},
  {n:'🎭 Theatre of Souls — Teatro de Almas',u:'Kenjaku',dmg:2.4,cost:48},
  {n:'⚡ Lightning Citadel — Cidadela de Raios',u:'Geto',dmg:2.2,cost:42},
  {n:'🌙 Lunar Fortress — Fortaleza Lunar',u:'Yuta Okkotsu',dmg:2.1,cost:40},
  {n:'❄️ Frozen Kingdom — Reino Congelado',u:'Cold User',dmg:2.0,cost:38},
  {n:'🌪️ Storm Vortex — Vórtice de Tempestade',u:'Wind Mage',dmg:2.15,cost:41},
  {n:'💎 Crystal Realm — Reino de Cristal',u:'Gem Master',dmg:2.05,cost:39},
  {n:'🌲 Primordial Forest — Floresta Primordial',u:'Ancient One',dmg:2.1,cost:40},
  {n:'👁️ All-Seeing Eye — Olho que Tudo Vê',u:'Oracle',dmg:2.25,cost:43},
  {n:'🔮 Mystic Plane — Plano Místico',u:'Seer',dmg:2.2,cost:42},
  {n:'💀 Death\'s Domain — Domínio da Morte',u:'Reaper',dmg:2.3,cost:45},
  {n:'🌸 Blossom Paradise — Paraíso de Flores',u:'Spring Spirit',dmg:1.95,cost:37},
  {n:'⚫ Void Nexus — Nexo do Vazio',u:'Dark Lord',dmg:2.4,cost:47},
];

const TRAITS=[
  {v:'— Sem traço especial',w:50,heavenly:false,bonus:0},
  {v:'⚡ Heavenly Restriction — Ten\'yoku',w:13,heavenly:true,bonus:1},
  {v:'🌟 Awakening — Despertar',w:11,heavenly:false,bonus:0.25},
  {v:'💥 Black Flash Mastery',w:9,heavenly:false,bonus:0.2},
  {v:'👁 Six Eyes Lesser',w:4,heavenly:false,bonus:0.3},
  {v:'👑 Sukuna Vessel — Recipiente',w:2,heavenly:false,bonus:0.4},
  {v:'💎 Inherited Technique — Técnica Hereditária',w:7,heavenly:false,bonus:0.15},
  {v:'🌀 Innate Domain — Domínio Inato',w:5,heavenly:false,bonus:0.18},
  {v:'⚡ Speed Demon — Demônio da Velocidade',w:6,heavenly:false,bonus:0.12},
  {v:'💪 Enhanced Strength — Força Aumentada',w:8,heavenly:false,bonus:0.14},
  {v:'🛡️ Damage Reduction — Redução de Dano',w:6,heavenly:false,bonus:0.1},
  {v:'🔥 Cursed Fire Affinity',w:5,heavenly:false,bonus:0.13},
  {v:'❄️ Ice Affinity',w:4,heavenly:false,bonus:0.12},
  {v:'⚡ Lightning Affinity',w:5,heavenly:false,bonus:0.13},
  {v:'🌊 Water Affinity',w:4,heavenly:false,bonus:0.11},
];

const CURSE_FORMS=[
  {n:'🌿 Floresta Ancestral',g:2,emoji:'🌿'},
  {n:'🌊 Oceano Profundo',g:2,emoji:'🌊'},
  {n:'🔥 Chamas Eternas',g:1,emoji:'🔥'},
  {n:'🌑 Sombras Primordiais',g:1,emoji:'🌑'},
  {n:'💀 Ódio Puro',g:5,emoji:'💀'},
  {n:'👁 Ancestral',g:4,emoji:'👁'},
  {n:'⚡ Tempestade Eterna',g:2,emoji:'⚡'},
  {n:'❄️ Gelo Eterno',g:2,emoji:'❄️'},
  {n:'💎 Cristal Vivo',g:2,emoji:'💎'},
  {n:'🌙 Lua Negra',g:3,emoji:'🌙'},
  {n:'🐲 Dragão Primordial',g:3,emoji:'🐲'},
  {n:'👹 Abominação Humana',g:4,emoji:'👹'},
];

const TECH_COUNTS=[
  {v:'1 Técnica',r:'C',w:40,n:1},
  {v:'2 Técnicas',r:'I',w:25,n:2},
  {v:'3 Técnicas',r:'R',w:20,n:3},
  {v:'4 Técnicas',r:'E',w:10,n:4},
  {v:'5 Técnicas 🔥',r:'L',w:4.5,n:5},
  {v:'🌑 Dez Sombras LENDÁRIA',r:'M',w:0.3,n:1},
  {v:'✨ Ilimitado LENDÁRIO',r:'M',w:0.2,n:1},
];

const RANK_COLORS={D:'#9e9e9e',C:'#66bb6a',B:'#64b5f6',A:'#ce93d8',S:'#ffca28',SS:'#ff9800','SSS+':'#ff6090'};
const TITLES={D:'Aprendiz',C:'⚡ Exorcista',B:'🌑 Caçador',A:'✨ Mestre',S:'🔥 Rei',SS:'👁 Supremo','SSS+':'👑 Transcendente'};
const CURSE_TITLES={D:'Espectro',C:'⚠ Ameaça',B:'💀 Perigoso',A:'🔥 Terror',S:'🌑 Flagelo',SS:'👁 Divindade','SSS+':'👑 Caos'};

let G={
  type:'',char:{},phase:0,techNum:1,techDone:0,techs:[],domPhase:0,hist:[],battleState:null,
  legendaryChoice:null,currentEnemyIndex:0,enemiesDefeated:0,multiMode:false,
  player1:{},player2:{},multiState:null
};

try{G.hist=JSON.parse(localStorage.getItem('jjk8_hist')||'[]')}catch(e){}

// ========== FUNÇÕES UTILITÁRIAS ==========
function wRand(arr){
  const tot=arr.reduce((s,i)=>s+(i.w||1),0);let r=Math.random()*tot;
  for(const x of arr){r-=(x.w||1);if(r<=0)return x;}return arr[arr.length-1];
}

function show(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0,0);
}

function goMenu(){show('s-menu')}
function goReveal(){show('s-reveal')}

// ========== GACHA PRINCIPAL ==========
function startGame(type){
  G.type=type;
  G.phase=0;
  G.char={type};
  G.techs=[];
  G.techDone=0;
  G.techNum=1;
  G.domPhase=0;
  G.legendaryChoice=null;
  G.currentEnemyIndex=0;
  G.enemiesDefeated=0;
  show('s-gacha');
  buildPhases();
  renderGacha();
}

function buildPhases(){
  const phases=G.type==='sorcerer'?['Qtd','Técnicas','Domínio','Traços','Arma','Inimigo','Extra']:['Forma','Técnicas','Domínio','Traços','Arma','Inimigo','Extra'];
  document.getElementById('phDots').innerHTML=phases.map((_,i)=>`<div class="ph${i===0?' active':''}" id="ph${i}"></div>`).join('');
}

function updatePhases(){
  for(let i=0;i<7;i++){
    const el=document.getElementById('ph'+i);
    if(!el)continue;
    el.className='ph'+(i<G.phase?' done':i===G.phase?' active':'');
  }
}

function makeDrum(items,label){
  const id='d'+Date.now()+Math.random().toString(36).slice(2);
  return `<div class="panel">
    <div class="section-label">${label}</div>
    <div class="drum-wrap" id="dw_${id}"><div class="sel-line"></div>
      <div class="drum-inner" id="di_${id}">${items.map(x=>`<div class="ditem">${typeof x==='string'?x:(x.v||x.n||x)}</div>`).join('')}</div>
    </div></div>`;
}

function renderGacha(){
  updatePhases();
  const area=document.getElementById('gachaArea');
  const btn=document.getElementById('spinBtn');
  btn.style.display='block';
  btn.disabled=false;
  
  if(G.type==='sorcerer'){
    if(G.phase===0){area.innerHTML=makeDrum(TECH_COUNTS.map(x=>x.v+' — '+x.r),'⚡ Quantidade');btn.onclick=spinTechCount;}
    else if(G.phase===1){renderTechDrum(area);btn.onclick=spinTech;}
    else if(G.phase===2){renderDomainDrum(area);}
    else if(G.phase===3){area.innerHTML=makeDrum(TRAITS.map(x=>x.v),'🌟 Traço');btn.onclick=spinTrait;}
    else if(G.phase===4){area.innerHTML=makeDrum(WEAPONS.map(x=>x.n),'🔱 Arma');btn.onclick=spinWeapon;}
    else if(G.phase===5){area.innerHTML=makeDrum(ENEMIES_PROGRESSION.map(x=>x.n),'💀 Inimigo');btn.onclick=spinEnemy;}
    else if(G.phase===6){finishGacha();}
    else finishGacha();
  } else {
    if(G.phase===0){area.innerHTML=makeDrum(CURSE_FORMS.map(x=>x.n),'👹 Forma');btn.onclick=spinCurseForm;}
    else if(G.phase===1){renderTechDrum(area);btn.onclick=spinTech;}
    else if(G.phase===2){renderDomainDrum(area);}
    else if(G.phase===3){area.innerHTML=makeDrum(TRAITS.map(x=>x.v),'🌟 Traço');btn.onclick=spinTrait;}
    else if(G.phase===4){area.innerHTML=makeDrum(WEAPONS.map(x=>x.n),'🔱 Arma');btn.onclick=spinWeapon;}
    else if(G.phase===5){area.innerHTML=makeDrum(ENEMIES_PROGRESSION.map(x=>x.n),'💀 Inimigo');btn.onclick=spinEnemy;}
    else finishGacha();
  }
}

function renderTechDrum(area){
  const avail=TECHS_NORMAL.filter(t=>!G.techs.find(g=>g.n===t.n));
  const done=G.techs.length>0?`<div class="tags">${G.techs.map(t=>{
    const rcls=`rarity-${t.r.toLowerCase()}`;
    return `<span class="tag ${rcls}">${t.n.slice(0,24)} <span class="rb rb-${t.r}">${t.r}</span></span>`;
  }).join('')}</div>`:'';
  area.innerHTML=`<div class="panel"><div class="section-label">⚔ ${G.techDone+1} de ${G.techNum}</div>${done}
    <div class="drum-wrap" id="dw_dt"><div class="sel-line"></div>
    <div class="drum-inner" id="di_dt">${avail.map(t=>`<div class="ditem">${t.n}</div>`).join('')}</div></div></div>`;
}

function renderDomainDrum(area){
  if(G.domPhase===0){
    area.innerHTML=makeDrum(['🚫 Sem','🌀 Incompleto','💥 Completo'],'🌌 Domínio');
    document.getElementById('spinBtn').onclick=spinHasDomain;
  } else {
    area.innerHTML=makeDrum(DOMAINS.map(x=>x.n),'🌌 Qual?');
    document.getElementById('spinBtn').onclick=spinDomainName;
  }
}

function animDrum(innId,items,finalTxt,dur,cb){
  const inner=document.getElementById(innId);if(!inner){cb&&cb();return;}
  const pool=typeof items[0]==='string'?items:items.map(x=>x.v||x.n||x);
  let rows=[];
  for(let i=0;i<48;i++)rows.push(pool[Math.floor(Math.random()*pool.length)]);
  rows.push(finalTxt);
  inner.innerHTML=rows.map((t,i)=>`<div class="ditem${i===rows.length-1?' sel':''}">${t}</div>`).join('');
  const tgt=-((rows.length-1)*36-18);
  let start=null;
  function ease(t){return 1-Math.pow(1-t,3)}
  function step(ts){
    if(!start)start=ts;
    const p=Math.min((ts-start)/dur,1);
    inner.style.transform=`translateY(${tgt*ease(p)}px)`;
    if(p<1)requestAnimationFrame(step);
    else{inner.style.transform=`translateY(${tgt}px)`;cb&&cb();}
  }
  requestAnimationFrame(step);
}

function spinTechCount(){
  document.getElementById('spinBtn').disabled=true;
  const id=document.querySelector('.drum-inner')?.id;
  if(!id)return;
  const result=wRand(TECH_COUNTS);
  animDrum(id,TECH_COUNTS.map(x=>x.v),result.v,1500,()=>{
    G.char.techCount=result.v;
    G.char.techCountR=result.r;
    if(result.v.includes('Dez Sombras')||result.v.includes('Ilimitado')){
      G.legendaryChoice=result;
      G.phase=1;
      showLegendaryChoice();
    } else {
      G.techNum=result.n;
      G.phase=1;
      renderGacha();
    }
  });
}

function showLegendaryChoice(){
  const result=G.legendaryChoice;
  const area=document.getElementById('gachaArea');
  let choiceSet=null;
  
  if(result.v.includes('Dez Sombras')){
    choiceSet=TECH_SETS.shadowClones;
  } else if(result.v.includes('Ilimitado')){
    choiceSet=TECH_SETS.limitless;
  }
  
  if(!choiceSet){G.techNum=1;G.phase=1;renderGacha();return;}
  
  const grid=choiceSet.options.map((opt,i)=>`
    <div class="choice-card" onclick="selectLegendary(${i})" style="animation-delay:${i*0.05}s">
      <div class="choice-icon">${opt.n.split(' ')[0]}</div>
      <div class="choice-name">${opt.n.split(' — ')[1]||opt.n}</div>
      <div class="choice-desc">${opt.desc}</div>
      <div class="choice-stats">
        <div class="choice-stat-item">Dano: ${Math.round(opt.dmg*100)}%</div>
        <div class="choice-stat-item">Crítico: ${Math.round(opt.crit*100)}%</div>
      </div>
    </div>
  `).join('');
  
  area.innerHTML=`
    <div class="legendary-choice-container">
      <div class="legendary-title">⚡ ${choiceSet.name}</div>
      <div class="legendary-subtitle">${choiceSet.description}</div>
      <div class="choice-grid">${grid}</div>
    </div>
  `;
  document.getElementById('spinBtn').style.display='none';
}

function selectLegendary(idx){
  const result=G.legendaryChoice;
  let choiceSet=null;
  
  if(result.v.includes('Dez Sombras')){
    choiceSet=TECH_SETS.shadowClones;
  } else if(result.v.includes('Ilimitado')){
    choiceSet=TECH_SETS.limitless;
  }
  
  if(!choiceSet)return;
  
  const selected=choiceSet.options[idx];
  G.techs.push(selected);
  G.techDone=1;
  G.char.techniques=[...G.techs];
  
  const isCurse=G.type==='curse';
  const area=document.getElementById('gachaArea');
  area.innerHTML=`
    <div class="domain-reveal" style="border-color:rgba(${isCurse?'200,50,80':'150,80,255'},.6);animation:legendarySpin 1.2s ease-in-out">
      <div style="font-family:var(--font-heading);font-size:11px;letter-spacing:4px;color:var(--txt3);margin-bottom:8px;text-transform:uppercase;font-weight:800">✦ LENDÁRIA ✦</div>
      <div class="domain-name-big" style="color:#ffca28;font-size:clamp(14px,4vw,18px);animation:goldShine 2s ease-in-out infinite">${selected.n}</div>
      <span class="rb rb-${selected.r}" style="margin-right:6px">${selected.r}</span>
      <div class="domain-sub-txt" style="margin-top:6px;color:#ffcc80;font-weight:600">${selected.desc} · Único</div>
    </div>
  `;
  
  setTimeout(()=>{
    G.phase=2;
    G.domPhase=0;
    renderGacha();
  },3000);
}

function spinCurseForm(){
  document.getElementById('spinBtn').disabled=true;
  const id=document.querySelector('.drum-inner')?.id;
  if(!id)return;
  const result=CURSE_FORMS[Math.floor(Math.random()*CURSE_FORMS.length)];
  const numMap={'E':6,'SE':5,1:5,2:3,3:4,4:3,5:5};
  G.techNum=numMap[result.g]||3;
  animDrum(id,CURSE_FORMS.map(x=>x.n),result.n,1500,()=>{
    G.char.curseForm=result;
    G.char.techCount=G.techNum+' Técnicas';
    G.char.techCountR='R';
    G.phase=1;
    renderGacha();
  });
}

function spinTech(){
  document.getElementById('spinBtn').disabled=true;
  const id=document.querySelector('.drum-inner')?.id;
  if(!id)return;
  const avail=TECHS_NORMAL.filter(t=>!G.techs.find(g=>g.n===t.n));
  const result=avail[Math.floor(Math.random()*avail.length)];
  animDrum(id,avail.map(t=>t.n),result.n,1600,()=>{
    G.techs.push(result);
    G.techDone++;
    G.char.techniques=[...G.techs];
    const isCurse=G.type==='curse';
    const area=document.getElementById('gachaArea');
    area.insertAdjacentHTML('beforeend',`<div class="domain-reveal" style="border-color:rgba(${isCurse?'200,50,80':'150,80,255'},.6);margin-top:10px">
      <div style="font-family:var(--font-heading);font-size:9px;letter-spacing:3px;color:var(--txt3);margin-bottom:6px">✦ TÉCNICA ✦</div>
      <div class="domain-name-big" style="color:${isCurse?'#f48fb1':'#b388ff'};font-size:clamp(12px,3.5vw,15px)">${result.n}</div>
      <span class="rb rb-${result.r}" style="margin-right:6px">${result.r}</span>
      <div class="domain-sub-txt" style="margin-top:4px">Dano: ${Math.round(result.dmg*100)}% · Custo: ${result.cost}⚡ · Crítico: ${Math.round(result.crit*100)}%</div>
    </div>`);
    setTimeout(()=>{
      if(G.techDone<G.techNum)renderGacha();
      else{G.phase=2;G.domPhase=0;renderGacha();}
    },2000);
  });
}

function spinHasDomain(){
  document.getElementById('spinBtn').disabled=true;
  const id=document.querySelector('.drum-inner')?.id;
  if(!id)return;
  const opts=['🚫 Sem Domínio','🌀 Domínio Incompleto','💥 Domínio Completo'];
  const wts=[{v:opts[0],w:50},{v:opts[1],w:30},{v:opts[2],w:20}];
  const result=wRand(wts);
  animDrum(id,opts,result.v,1400,()=>{
    G.char.domainType=result.v;
    if(result.v==='💥 Domínio Completo'){G.domPhase=1;renderGacha();}
    else{G.char.domain=null;G.phase=3;renderGacha();}
  });
}

function spinDomainName(){
  document.getElementById('spinBtn').disabled=true;
  const id=document.querySelector('.drum-inner')?.id;
  if(!id)return;
  const result=DOMAINS[Math.floor(Math.random()*DOMAINS.length)];
  animDrum(id,DOMAINS.map(x=>x.n),result.n,1800,()=>{
    G.char.domain=result;
    const area=document.getElementById('gachaArea');
    area.insertAdjacentHTML('beforeend',`<div class="domain-reveal">
      <div style="font-family:var(--font-heading);font-size:9px;letter-spacing:3px;color:var(--txt3);margin-bottom:6px">✦ DOMÍNIO ✦</div>
      <div class="domain-name-big">${result.n}</div>
      <div class="domain-sub-txt">Usuário: ${result.u} · Dano: ${Math.round(result.dmg*100)}%</div>
    </div>`);
    setTimeout(()=>{G.phase=3;renderGacha();},2600);
  });
}

function spinTrait(){
  document.getElementById('spinBtn').disabled=true;
  const id=document.querySelector('.drum-inner')?.id;
  if(!id)return;
  const result=wRand(TRAITS);
  animDrum(id,TRAITS.map(x=>x.v),result.v,1400,()=>{
    G.char.trait=result.v;
    G.char.hasHeavenlyRestriction=result.heavenly;
    G.char.traitBonus=result.bonus;
    G.char.attrs=rollAttrs();
    G.phase=4;
    renderGacha();
  });
}

function spinWeapon(){
  document.getElementById('spinBtn').disabled=true;
  const id=document.querySelector('.drum-inner')?.id;
  if(!id)return;
  const result=wRand(WEAPONS.map(w=>({...w,w:1})));
  animDrum(id,WEAPONS.map(x=>x.n),result.n,1400,()=>{
    G.char.weapon=result;
    G.phase=5;
    renderGacha();
  });
}

function spinEnemy(){
  document.getElementById('spinBtn').disabled=true;
  const id=document.querySelector('.drum-inner')?.id;
  if(!id)return;
  G.currentEnemyIndex=Math.floor(Math.random()*ENEMIES_PROGRESSION.length);
  const result=ENEMIES_PROGRESSION[G.currentEnemyIndex];
  animDrum(id,ENEMIES_PROGRESSION.map(x=>x.n),result.n,1400,()=>{
    G.char.enemyData={...result};
    G.phase=6;
    renderGacha();
  });
}

function rollAttrs(){
  return ['⚔ Força','⚡ Velocidade','🌀 Energia','🛡 Defesa','🎯 Técnica','🌟 Potencial']
    .map(n=>({n,v:Math.floor(Math.random()*90)+11}));
}

function calcRank(c){
  const tw={'1 Técnica':0,'2 Técnicas':1,'3 Técnicas':2,'4 Técnicas':3,'5 Técnicas 🔥':4,'✨ Ilimitado LENDÁRIO':6,'🌑 Dez Sombras LENDÁRIA':6}[c.techCount]||2;
  const dw=c.domainType?.includes('Completo')?3:c.domainType?.includes('Incompleto')?1:0;
  const avg=c.attrs?c.attrs.reduce((s,a)=>s+a.v,0)/c.attrs.length:50;
  const sc=tw*10+dw*12+(avg/100)*25+(c.type==='curse'?10:0)+(c.techniques&&c.techniques[0]?.r==='M'?20:0);
  if(sc>=50)return'SSS+';if(sc>=42)return'SS';if(sc>=32)return'S';
  if(sc>=24)return'A';if(sc>=16)return'B';if(sc>=10)return'C';return'D';
}

function calcHP(){const base=G.type==='curse'?180:150;const rm={D:1,C:1.2,B:1.4,A:1.7,S:2,SS:2.4,'SSS+':3}[G.char.rank]||1;return Math.round(base*rm);}
function calcATK(){const base=G.type==='curse'?28:22;const rm={D:1,C:1.2,B:1.5,A:1.8,S:2.2,SS:2.7,'SSS+':3.5}[G.char.rank]||1;const wp=G.char.weapon?.atk||1;return Math.round(base*rm*wp);}
function calcDEF(){const base=G.type==='curse'?12:10;const rm={D:1,C:1.2,B:1.4,A:1.6,S:2,SS:2.5,'SSS+':3}[G.char.rank]||1;return Math.round(base*rm);}

function finishGacha(){
  G.char.rank=calcRank(G.char);
  G.char.title=(G.type==='curse'?CURSE_TITLES:TITLES)[G.char.rank];
  G.char.secret=Math.random()<.04;
  G.char.secretSukuna=G.char.rank==='SSS+'&&Math.random()<.3;
  G.char.hp=calcHP();
  G.char.maxHp=G.char.hp;
  G.char.atk=calcATK();
  G.char.def=calcDEF();
  saveHist();
  document.getElementById('spinBtn').style.display='none';
  const rc=RANK_COLORS[G.char.rank];
  const area=document.getElementById('gachaArea');
  area.innerHTML=`<div class="panel" style="text-align:center;padding:clamp(24px,6vw,36px) 16px">
    <div style="font-family:var(--font-heading);font-size:11px;letter-spacing:4px;color:var(--txt3);margin-bottom:20px;text-transform:uppercase;font-weight:800">✦ INVOCAÇÃO COMPLETA ✦</div>
    <div style="font-size:clamp(40px,13vw,56px);margin-bottom:14px;animation:popIn .8s ease-out">${G.type==='curse'?(G.char.curseForm?G.char.curseForm.emoji:'👹'):'⚔️'}</div>
    <div style="font-family:var(--font-title);font-size:clamp(22px,8vw,32px);font-weight:900;color:${rc};letter-spacing:4px;margin-bottom:8px">RANK ${G.char.rank}</div>
    <div style="font-family:var(--font-heading);font-size:clamp(11px,3vw,13px);letter-spacing:2px;color:var(--purL);font-style:italic;margin-bottom:26px">${G.char.title}</div>
    <button class="btn btn-gold" onclick="revealChar()" style="margin-bottom:0">👁 Ficha Completa</button>
    <button class="btn btn-danger" onclick="startBattle()" style="margin-top:10px">⚔ Combate</button>
    <button class="btn btn-main" onclick="goMenu()" style="margin-top:10px;opacity:.7">↩ Menu</button>
  </div>`;
}

function revealChar(){
  show('s-reveal');
  const c=G.char;
  const rc=RANK_COLORS[c.rank];
  const isCurse=c.type==='curse';
  const avatar=isCurse?(c.curseForm?c.curseForm.emoji:'👹'):'⚔️';
  
  let secretHTML='';
  if(c.secretSukuna){
    secretHTML=`<div class="secret-box" style="background:rgba(200,30,60,.18);border:2px solid rgba(255,96,144,.5)">
      <div class="secret-title" style="color:#ff6090">👑 SUKUNA</div>
      <div class="secret-desc" style="color:rgba(255,180,200,.9)">+50% Dano em combate!</div>
    </div>`;
  } else if(c.secret){
    secretHTML=`<div class="secret-box" style="background:rgba(100,50,150,.18);border:2px solid rgba(156,39,176,.5)">
      <div class="secret-title" style="color:#ce93d8">✨ DESPERTAR</div>
      <div class="secret-desc" style="color:rgba(200,180,255,.9)">+30% Dano em combate!</div>
    </div>`;
  }
  
  let heavenlyHTML='';
  if(c.hasHeavenlyRestriction){
    heavenlyHTML=`<div class="heavenly-restriction-badge">
      <div class="title">⚡ RESTRIÇÃO CELESTIAL</div>
      <div class="desc">Sem técnicas! Força +100% em compensação</div>
    </div>`;
  }
  
  const techsHTML=c.techniques?c.techniques.map(t=>{
    if(c.hasHeavenlyRestriction)return `<span class="tag" style="opacity:.3;text-decoration:line-through">${t.n.slice(0,28)} <span class="rb rb-${t.r}">${t.r}</span></span>`;
    const rcls=`rarity-${t.r.toLowerCase()}`;
    return `<span class="tag ${rcls}">${t.n.slice(0,28)} <span class="rb rb-${t.r}">${t.r}</span></span>`;
  }).join(''):'—';
  
  let domHTML='';
  if(c.domain){
    domHTML=`<div class="domain-reveal" style="padding:14px;margin:8px 0">
      <div style="font-family:var(--font-heading);font-size:9px;letter-spacing:3px;color:var(--txt3);margin-bottom:4px;text-transform:uppercase;font-weight:700">✦ Domínio ✦</div>
      <div class="domain-name-big" style="font-size:clamp(12px,3.2vw,14px)">${c.domain.n}</div>
      <div style="font-size:clamp(9px,2.5vw,10px);color:var(--txt3);margin-top:3px;letter-spacing:.5px">${c.domain.u}</div>
    </div>`;
  }
  
  let weaponHTML='';
  if(c.weapon){
    weaponHTML=`<div class="sr"><span class="sr-label">🔱 Arma</span><span class="sr-val" style="color:#ffcc80">${c.weapon.n} <span class="rb rb-${c.weapon.r}">${c.weapon.r}</span></span></div>`;
  }
  
  const attrsHTML=c.attrs?c.attrs.map(a=>{
    const col=a.v>=80?'#ce93d8':a.v>=60?'#64b5f6':a.v>=40?'#66bb6a':'#ffca28';
    return `<div class="bar-row"><div class="bar-label"><span style="font-weight:700">${a.n}</span><span style="color:${col};font-weight:700">${a.v}</span></div>
    <div class="bar-bg"><div class="bar-fill" style="width:${a.v}%;background:${col}"></div></div></div>`;
  }).join(''):'';
  
  document.getElementById('revealContent').innerHTML=`
    <div class="reveal-overlay">
      <div class="reveal-title">✦ Ficha do Personagem ✦</div>
      ${secretHTML}
      <div class="char-header">
        <div class="char-avatar" style="background:linear-gradient(135deg, ${isCurse?'rgba(200,50,80,.25)':'rgba(100,50,180,.25)'} 0%, ${isCurse?'rgba(150,30,60,.35)':'rgba(80,30,140,.35)'} 100%);border-color:${rc}">${avatar}</div>
        <div class="char-rank-big" style="color:${rc}">RANK ${c.rank}</div>
        <div class="char-title-txt">${c.title}</div>
        <div class="char-type-badge" style="background:${isCurse?'rgba(200,50,80,.2)':'rgba(100,50,180,.2)'};border:1.5px solid ${isCurse?'rgba(255,96,144,.5)':'rgba(156,39,176,.5)'};color:${isCurse?'#ff6090':'#ce93d8'}">${isCurse?'💀 Maldição':'⚔️ Feiticeiro'}</div>
        ${isCurse&&c.curseForm?`<div style="font-family:var(--font-body);font-size:clamp(10px,2.8vw,11px);color:var(--txt2);margin-top:5px;font-style:italic;letter-spacing:.5px">${c.curseForm.n}</div>`:''}
      </div>
      ${heavenlyHTML}
      <div class="panel">
        <div class="sr"><span class="sr-label">Técnicas</span><span class="sr-val" style="color:${rc};font-weight:800">${c.techCount}</span></div>
        <div class="tags" style="margin:8px 0">${techsHTML}</div>
        <div class="sr" style="margin-top:8px"><span class="sr-label">🌌 Domínio</span><span class="sr-val">${c.domainType||'Nenhum'}</span></div>
        ${domHTML}
        <div class="sr"><span class="sr-label">🌟 Traço</span><span class="sr-val" style="font-size:clamp(10px,2.8vw,11px);letter-spacing:.5px">${c.trait||'—'}</span></div>
        ${weaponHTML}
        <div class="sr"><span class="sr-label">⚔ Stats</span><span class="sr-val">HP ${c.maxHp} · ATK ${c.atk}${c.hasHeavenlyRestriction?' (+100%)':''} · DEF ${c.def}</span></div>
      </div>
      <div class="panel"><div class="section-label">📊 Atributos</div>${attrsHTML}</div>
      <button class="btn btn-main" onclick="showStatsGacha()">🎲 Customizar Stats</button>
      <button class="btn btn-danger" onclick="startBattle()" style="margin-top:10px">⚔ Ir para Combate</button>
      <button class="reveal-close" onclick="goMenu()">↩ Voltar ao Menu</button>
    </div>`;
}

function showStatsGacha(){
  show('s-stats-gacha');
  const c=G.char;
  let html=`<div class="reveal-overlay" style="animation:fadeUp .5s ease-out">
    <div class="reveal-title">🎲 Customização de Atributos</div>
    <div class="panel" style="margin-bottom:16px">
      <div class="section-label">Gire os Atributos</div>`;
  
  c.attrs.forEach((attr,i)=>{
    html+=`<div class="bar-row" style="margin:12px 0">
      <div class="bar-label">
        <span style="font-weight:700">${attr.n}</span>
        <span style="color:#ffca28;font-weight:700;font-size:clamp(10px,3vw,12px)">${attr.v}</span>
      </div>
      <div class="bar-bg"><div class="bar-fill" style="width:${attr.v}%;background:${attr
