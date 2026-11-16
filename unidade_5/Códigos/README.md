HTML 
<!DOCTYPE html>
<html lang="pt-PT">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GOTICKET - Plataforma de Eventos</title>
  
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Ícones Lucide -->
  <script src="https://unpkg.com/lucide@latest"></script>
  
  <!-- CSS Personalizado -->
  <link rel="stylesheet" href="style.css">
</head>
<body class="min-h-screen flex flex-col font-sans bg-[#0f172a] text-slate-200 select-none">

  <!-- ================= CABEÇALHO ================= -->
  <header class="bg-slate-900/80 backdrop-blur-md text-white p-4 flex justify-between items-center px-8 border-b border-slate-800 sticky top-0 z-40">
    <div class="text-2xl font-black tracking-tighter bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent italic">
      GO<span class="text-white">TICKET</span>
    </div>
    
    <div class="flex items-center gap-4">
      <!-- Botão do Carrinho com Contador -->
      <button id="btn-open-cart" class="relative bg-slate-800 p-2.5 rounded-full hover:bg-violet-500/20 transition-all flex items-center justify-center">
        <i data-lucide="shopping-cart" class="w-5 h-5"></i>
        <span id="cart-counter" class="absolute -top-1 -right-1 bg-violet-600 text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-lg hidden">0</span>
      </button>

      <!-- Botão de Conta / Entrar -->
      <div id="btn-open-auth" class="flex items-center gap-2 cursor-pointer group">
        <div class="bg-slate-800 p-2 rounded-full group-hover:bg-violet-500/20 transition-all">
          <i data-lucide="user" class="w-5 h-5"></i>
        </div>
        <span class="text-sm font-bold hidden sm:block">Entrar / Registar</span>
      </div>
    </div>
  </header>

  <!-- ================= CONTEÚDO PRINCIPAL ================= -->
  <main class="flex-1 p-6 lg:p-10 flex flex-col max-w-7xl mx-auto w-full overflow-hidden">
    
    <!-- Barra de Pesquisa -->
    <section class="max-w-2xl mb-12 mx-auto w-full">
      <div class="relative flex items-center group">
        <i data-lucide="search" class="absolute left-6 text-slate-500 group-focus-within:text-violet-400 transition-colors w-6 h-6"></i>
        <input 
          id="search-input"
          type="text" 
          placeholder="Pesquise por nome do evento ou categoria..." 
          class="w-full bg-slate-900/50 border border-slate-800 rounded-3xl py-6 pl-16 pr-8 text-white placeholder-slate-600 shadow-2xl focus:ring-2 focus:ring-violet-500/50 outline-none transition-all backdrop-blur-sm"
        />
      </div>
    </section>

    <!-- 1º CARROSSEL: EVENTOS PRINCIPAIS -->
    <section>
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-3xl font-black text-white flex items-center gap-4 italic tracking-tight uppercase">
          <i data-lucide="zap" class="text-violet-500 fill-violet-500 w-7 h-7"></i>
          Eventos Principais
        </h2>
        <div class="flex gap-3">
          <button id="btn-prev" class="bg-slate-800/80 p-3 rounded-2xl hover:bg-slate-700 transition-all disabled:opacity-20">
            <i data-lucide="chevron-left" class="w-5 h-5"></i>
          </button>
          <button id="btn-next" class="bg-slate-800/80 p-3 rounded-2xl hover:bg-slate-700 transition-all disabled:opacity-20">
            <i data-lucide="chevron-right" class="w-5 h-5"></i>
          </button>
        </div>
      </div>

      <div class="relative mb-12">
        <div id="events-carousel" class="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar pb-8 snap-x snap-mandatory"></div>
      </div>
    </section>

    <!-- SEÇÃO DE CATEGORIAS DESLIZANTES -->
    <section class="mt-8 mb-16 relative">
      <div class="flex items-center gap-6 mb-10 px-2">
        <button id="btn-toggle-categories" class="flex items-center gap-4 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] transition-all border animate-glow bg-violet-600 border-violet-400 text-white shadow-[0_0_20px_rgba(139,92,246,0.5)]">
          <span>Navegar por Categoria</span>
          <i id="toggle-icon" data-lucide="chevron-up" class="w-5 h-5"></i>
        </button>
        
        <div id="drag-hint" class="flex items-center gap-3">
          <span class="text-[10px] font-black text-slate-600 uppercase tracking-[0.3em] animate-pulse">Arraste para o lado</span>
          <div class="w-12 h-[1px] bg-slate-800"></div>
        </div>
      </div>

      <div id="categories-wrapper" class="relative transition-all duration-500">
        <div class="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0f172a] to-transparent z-10 pointer-events-none"></div>
        <div class="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0f172a] to-transparent z-10 pointer-events-none"></div>

        <div id="categories-container" class="scroll-container no-scrollbar cursor-grab"></div>
        
        <div class="flex justify-center mt-6">
          <div class="w-64 h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800/50">
            <div class="h-full bg-violet-600 w-1/4 animate-pulse shadow-[0_0_15px_#8b5cf6]"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- SEÇÃO: EM ALTA NA SEMANA (3 CARROSSÉIS EMPILHADOS) -->
    <section class="mt-4 mb-16 space-y-10">
      
      <!-- Cabeçalho + Fileira 1 de Em Alta -->
      <div>
        <div class="flex items-center justify-between mb-8">
          <h2 class="text-3xl font-black text-white flex items-center gap-4 italic tracking-tight uppercase">
            <i data-lucide="flame" class="text-pink-500 fill-pink-500 w-7 h-7"></i>
            Em Alta na Semana
          </h2>
          <div class="flex gap-3">
            <button id="btn-prev-secondary" class="bg-slate-800/80 p-3 rounded-2xl hover:bg-slate-700 transition-all disabled:opacity-20">
              <i data-lucide="chevron-left" class="w-5 h-5"></i>
            </button>
            <button id="btn-next-secondary" class="bg-slate-800/80 p-3 rounded-2xl hover:bg-slate-700 transition-all disabled:opacity-20">
              <i data-lucide="chevron-right" class="w-5 h-5"></i>
            </button>
          </div>
        </div>

        <div class="relative">
          <div id="secondary-events-carousel" class="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar pb-4 snap-x snap-mandatory"></div>
        </div>
      </div>

      <!-- Fileira 2 de Em Alta -->
      <div>
        <div class="flex items-center justify-between mb-6">
          <span class="text-xs font-black text-slate-500 uppercase tracking-[0.3em] ml-2">Mais Procurados</span>
          <div class="flex gap-3">
            <button id="btn-prev-tertiary" class="bg-slate-800/80 p-3 rounded-2xl hover:bg-slate-700 transition-all disabled:opacity-20">
              <i data-lucide="chevron-left" class="w-5 h-5"></i>
            </button>
            <button id="btn-next-tertiary" class="bg-slate-800/80 p-3 rounded-2xl hover:bg-slate-700 transition-all disabled:opacity-20">
              <i data-lucide="chevron-right" class="w-5 h-5"></i>
            </button>
          </div>
        </div>

        <div class="relative">
          <div id="tertiary-events-carousel" class="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar pb-4 snap-x snap-mandatory"></div>
        </div>
      </div>

      <!-- Fileira 3 de Em Alta -->
      <div>
        <div class="flex items-center justify-between mb-6">
          <span class="text-xs font-black text-slate-500 uppercase tracking-[0.3em] ml-2">Últimos Bilhetes</span>
          <div class="flex gap-3">
            <button id="btn-prev-quaternary" class="bg-slate-800/80 p-3 rounded-2xl hover:bg-slate-700 transition-all disabled:opacity-20">
              <i data-lucide="chevron-left" class="w-5 h-5"></i>
            </button>
            <button id="btn-next-quaternary" class="bg-slate-800/80 p-3 rounded-2xl hover:bg-slate-700 transition-all disabled:opacity-20">
              <i data-lucide="chevron-right" class="w-5 h-5"></i>
            </button>
          </div>
        </div>

        <div class="relative">
          <div id="quaternary-events-carousel" class="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar pb-8 snap-x snap-mandatory"></div>
        </div>
      </div>

    </section>

  </main>

  <!-- ================= MODAL CENTRAL (DETALHES / LOGIN) ================= -->
  <div id="modal-overlay" class="fixed inset-0 bg-slate-950/95 backdrop-blur-3xl hidden items-center justify-center z-50 p-4 sm:p-6">
    <div class="bg-slate-900 rounded-[2.5rem] sm:rounded-[3.5rem] w-full max-w-xl p-0 relative shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-slate-800/80 overflow-hidden max-h-[95vh] overflow-y-auto no-scrollbar">
      <button id="btn-close-modal" class="absolute top-6 right-6 sm:top-8 sm:right-8 text-slate-400 hover:text-white p-3 z-20 bg-slate-950/50 rounded-full transition-all border border-white/5">
        <i data-lucide="x" class="w-6 h-6"></i>
      </button>
      <div id="modal-content"></div>
    </div>
  </div>

  <!-- ================= PAINEL LATERAL DO CARRINHO (DRAWER) ================= -->
  <div id="cart-drawer-overlay" class="fixed inset-0 bg-slate-950/80 backdrop-blur-md hidden z-50 transition-opacity">
    <div id="cart-drawer" class="absolute right-0 top-0 bottom-0 w-full max-w-md bg-slate-900 border-l border-slate-800 p-6 sm:p-8 flex flex-col shadow-2xl transform translate-x-full transition-transform duration-300">
      
      <!-- Cabeçalho do Carrinho -->
      <div class="flex items-center justify-between pb-6 border-b border-slate-800">
        <div class="flex items-center gap-3">
          <i data-lucide="shopping-cart" class="text-violet-500 w-6 h-6"></i>
          <h2 class="text-xl font-black text-white italic uppercase tracking-wider">Seu Carrinho</h2>
        </div>
        <button id="btn-close-cart" class="text-slate-400 hover:text-white p-2 rounded-full bg-slate-950/50 border border-white/5">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>
      </div>

      <!-- Lista de Itens no Carrinho -->
      <div id="cart-items-container" class="flex-1 overflow-y-auto py-6 space-y-4 no-scrollbar"></div>

      <!-- Rodapé do Carrinho -->
      <div class="border-t border-slate-800 pt-6 space-y-4">
        <div class="flex justify-between items-center">
          <span class="text-slate-400 text-xs font-bold uppercase tracking-widest">Total Geral:</span>
          <span id="cart-total" class="text-2xl font-black text-white">€ 0,00</span>
        </div>
        <button onclick="checkoutCart()" class="w-full bg-violet-600 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-[0.25em] hover:bg-violet-500 transition-all shadow-xl active:scale-[0.98]">
          Finalizar Reserva
        </button>
      </div>

    </div>
  </div>

  <!-- ================= RODAPÉ ================= -->
  <footer class="py-20 bg-slate-950 flex flex-col items-center justify-center border-t border-slate-900 mt-auto">
    <div class="text-4xl font-black bg-gradient-to-r from-violet-500 via-pink-500 to-violet-500 bg-clip-text text-transparent opacity-20 italic tracking-tighter mb-6 uppercase">
      Go Ticket
    </div>
    <div class="flex gap-10 mb-8 opacity-40">
      <span class="text-[10px] font-black uppercase tracking-widest cursor-pointer hover:text-white transition-colors">Termos</span>
      <span class="text-[10px] font-black uppercase tracking-widest cursor-pointer hover:text-white transition-colors">Privacidade</span>
      <span class="text-[10px] font-black uppercase tracking-widest cursor-pointer hover:text-white transition-colors">Apoio</span>
      <span class="text-[10px] font-black uppercase tracking-widest cursor-pointer hover:text-white transition-colors">Blog</span>
    </div>
    <p class="text-[9px] text-slate-800 font-bold uppercase tracking-[0.6em]">© 2026 feito por João Miguel | Leticia Moreira | Daniel de Medeiros | Lucas Oliveira</p>
  </footer>

  <!-- Script Principal -->
  <script src="script.js"></script>
</body>
</html>

CSS
/* Esconder barras de rolagem padrão */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Animação de brilho (Glow) */
@keyframes glow {
  0%, 100% {
    box-shadow: 0 0 10px rgba(139, 92, 246, 0.4), 0 0 20px rgba(139, 92, 246, 0.2);
  }
  50% {
    box-shadow: 0 0 25px rgba(139, 92, 246, 0.7), 0 0 45px rgba(139, 92, 246, 0.4);
  }
}

.animate-glow {
  animation: glow 3s infinite ease-in-out;
}

/* Container de rolagem horizontal das categorias */
.scroll-container {
  display: flex;
  gap: 2.5rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
  padding: 1rem 2rem 2.5rem 2rem;
}

.category-item {
  scroll-snap-align: center;
  flex-shrink: 0;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.category-item:hover {
  transform: translateY(-8px) scale(1.1);
}

.category-circle {
  transition: all 0.4s ease;
  border: 2px solid rgba(30, 41, 59, 1);
}

.category-item:hover .category-circle {
  border-color: #8b5cf6;
  color: #8b5cf6;
  box-shadow: 0 0 30px rgba(139, 92, 246, 0.5), inset 0 0 15px rgba(139, 92, 246, 0.2);
}

.category-label {
  transition: color 0.3s ease;
}

.category-item:hover .category-label {
  color: #8b5cf6;
}

.social-btn {
  transition: all 0.3s ease;
}
.social-btn:hover {
  transform: translateY(-2px);
  filter: brightness(1.2);
}

JAVA SCRIPT

// ==========================================
// 1. BANCO DE DADOS E ESTADO DO CARRINHO (VALORES EM REAIS - R$)
// ==========================================
const allEvents = [
  {
    id: 1,
    title: "Conferência Tech 2024",
    category: "Tecnologia",
    price: 120.00,
    image: "https://storage.googleapis.com/techsauce-prod/ugc/uploads/2024/4/1713844557_1692263684_S__13025327_0_%282%29.jpg",
    description: "O maior evento de tecnologia do ano com palestrantes internacionais e workshops práticos sobre IA e futuro do trabalho."
  },
  {
    id: 2,
    title: "Noite Eletrônica: Deep House",
    category: "Eletrônica",
    price: 150.00,
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800",
    description: "Uma noite inesquecível com os melhores DJs da cena atual, sistemas de som de alta fidelidade e show de luzes laser."
  },
  {
    id: 3,
    title: "Bazar de Inverno Comunitário",
    category: "Bazar",
    price: 35.00,
    image: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&q=80&w=800",
    description: "Produtos artesanais, brechós selecionados e gastronomia local no coração da cidade."
  },
  {
    id: 4,
    title: "Championship Gaming Finals",
    category: "Game",
    price: 200.00,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800",
    description: "Assista aos melhores jogadores do mundo competindo pela taça mundial de eSports em uma arena lotada."
  },
  {
    id: 5,
    title: "Maratona do Sol",
    category: "Esporte",
    price: 90.00,
    image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&q=80&w=800",
    description: "Junte-se a milhares de corredores nesta maratona icônica pela costa. Prêmios para os 10 primeiros colocados."
  },
  {
    id: 6,
    title: "Festival Gastronômico",
    category: "Gastronomia",
    price: 60.00,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800",
    description: "Experimente sabores de todo o mundo em um só lugar. Mais de 50 food trucks e música ao vivo."
  },
  {
    id: 7,
    title: "Noite da Comédia Stand-up",
    category: "Comédia",
    price: 100.00,
    image: "https://super.abril.com.br/wp-content/uploads/2018/07/521cdf00865be2789f000479mundoestranho-140-40-per1.png?quality=70&strip=info",
    description: "Os maiores nomes do humor nacional em uma noite de risadas garantidas no Teatro Central."
  },
  {
    id: 8,
    title: "Rock in the Park",
    category: "Rock",
    price: 180.00,
    image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&q=80&w=800",
    description: "Festival de rock clássico com bandas tributo e convidados especiais. Diversão para toda a família."
  },
  {
    id: 9,
    title: "Cosplay World Expo",
    category: "Cosplay",
    price: 110.00,
    image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&q=80&w=800",
    description: "O maior encontro de cultura pop do país. Concursos, painéis com dubladores e mercado de quadrinhos."
  },
  {
    id: 10,
    title: "Jazz under the Stars",
    category: "Música",
    price: 140.00,
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80&w=800",
    description: "Uma noite sofisticada com quartetos de jazz renomados em um terraço com vista para a cidade."
  },
  {
    id: 11,
    title: "Fórum de Liderança Corporativa",
    category: "Corporativo",
    price: 450.00,
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800",
    description: "Networking de alto nível para CEOs e gestores. Discutindo as novas tendências de mercado."
  },
  {
    id: 12,
    title: "Teatro: O Fantasma Moderno",
    category: "Teatro",
    price: 160.00,
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80&w=800",
    description: "Uma releitura contemporânea do clássico, com efeitos especiais imersivos e trilha sonora original."
  },
  {
    id: 13,
    title: "Workshop de Fotografia Urbana",
    category: "T.I",
    price: 220.00,
    image: "https://images.unsplash.com/photo-1452784444945-3f422708fe5e?auto=format&fit=crop&q=80&w=800",
    description: "Aprenda técnicas de captura e edição digital com profissionais premiados. Inclui saída de campo."
  }
];

const categories = [
  { name: "MÚSICA", icon: "music" },
  { name: "GAME", icon: "gamepad-2" },
  { name: "ESPORTE", icon: "trophy" },
  { name: "TECNOLOGIA", icon: "cpu" },
  { name: "COSPLAY", icon: "sparkles" },
  { name: "T.I", icon: "monitor" },
  { name: "COMÉDIA", icon: "theater" },
  { name: "ELETRÔNICA", icon: "zap" },
  { name: "ROCK", icon: "guitar" },
  { name: "CORPORATIVO", icon: "user" },
  { name: "POP", icon: "star" },
  { name: "PODCAST", icon: "mic-2" }
];

let cart = [];

// ==========================================
// 2. ELEMENTOS DO DOM
// ==========================================
const eventsCarousel = document.getElementById('events-carousel');
const secondaryEventsCarousel = document.getElementById('secondary-events-carousel');
const tertiaryEventsCarousel = document.getElementById('tertiary-events-carousel');
const quaternaryEventsCarousel = document.getElementById('quaternary-events-carousel');

const categoriesContainer = document.getElementById('categories-container');
const searchInput = document.getElementById('search-input');

// Botões dos Carrosséis
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnPrevSecondary = document.getElementById('btn-prev-secondary');
const btnNextSecondary = document.getElementById('btn-next-secondary');
const btnPrevTertiary = document.getElementById('btn-prev-tertiary');
const btnNextTertiary = document.getElementById('btn-next-tertiary');
const btnPrevQuaternary = document.getElementById('btn-prev-quaternary');
const btnNextQuaternary = document.getElementById('btn-next-quaternary');

// Modais e Carrinho
const modalOverlay = document.getElementById('modal-overlay');
const modalContent = document.getElementById('modal-content');
const cartDrawerOverlay = document.getElementById('cart-drawer-overlay');
const cartDrawer = document.getElementById('cart-drawer');
const btnOpenCart = document.getElementById('btn-open-cart');
const btnCloseCart = document.getElementById('btn-close-cart');
const cartCounter = document.getElementById('cart-counter');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartTotal = document.getElementById('cart-total');

let showCategories = true;

// ==========================================
// 3. RENDERIZAÇÃO DOS CARROSSÉIS DE EVENTOS
// ==========================================
function renderCarousel(containerElement, eventsList, badgeColorClass = "bg-violet-600/90") {
  containerElement.innerHTML = '';

  if (eventsList.length === 0) {
    containerElement.innerHTML = `<p class="text-slate-500 text-lg py-10">Nenhum evento encontrado.</p>`;
    return;
  }

  eventsList.forEach(event => {
    const card = document.createElement('div');
    card.className = "min-w-[90%] md:min-w-[48%] lg:min-w-[32%] snap-start bg-slate-900/40 rounded-[2.5rem] overflow-hidden border border-slate-800/60 hover:border-violet-500/40 transition-all duration-500 group/card backdrop-blur-sm";
    
    card.innerHTML = `
      <div class="relative h-60 overflow-hidden">
        <img src="${event.image}" alt="${event.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" />
        <div class="absolute top-4 left-4 ${badgeColorClass} backdrop-blur-md text-[10px] text-white px-4 py-1.5 rounded-full font-black uppercase tracking-widest">${event.category}</div>
      </div>
      <div class="p-8">
        <h3 class="font-bold text-2xl text-white mb-6 italic leading-tight group-hover/card:text-violet-400 transition-colors">${event.title}</h3>
        <div class="flex items-center justify-between border-t border-slate-800/50 pt-6">
          <div class="flex flex-col">
            <span class="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Bilhetes desde</span>
            <span class="text-xl font-black text-white">R$ ${event.price.toFixed(2).replace('.', ',')}</span>
          </div>
          <button onclick="openEventModal(${event.id})" class="bg-white/5 hover:bg-violet-600 text-white px-6 py-3 rounded-2xl text-xs font-black uppercase transition-all flex items-center gap-2 border border-white/10">
            Ver Info <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      </div>
    `;
    containerElement.appendChild(card);
  });

  lucide.createIcons();
}

// ==========================================
// 4. CONTROLE REUTILIZÁVEL DE NAVEGAÇÃO DOS CARROSSÉIS
// ==========================================
function setupCarouselControls(container, prevBtn, nextBtn) {
  let currentIndex = 0;

  function updateButtons() {
    const totalItems = container.querySelectorAll('.snap-start').length;
    prevBtn.disabled = currentIndex <= 0;
    nextBtn.disabled = currentIndex >= totalItems - 1;
  }

  function goTo(index) {
    const items = container.querySelectorAll('.snap-start');
    if (items[index]) {
      const itemWidth = items[index].offsetWidth + 32;
      container.scrollTo({ left: index * itemWidth, behavior: 'smooth' });
      currentIndex = index;
      updateButtons();
    }
  }

  prevBtn.addEventListener('click', () => goTo(currentIndex - 1));
  nextBtn.addEventListener('click', () => goTo(currentIndex + 1));

  return {
    reset: () => {
      currentIndex = 0;
      container.scrollTo({ left: 0 });
      updateButtons();
    }
  };
}

const mainCarouselControl = setupCarouselControls(eventsCarousel, btnPrev, btnNext);
const secondaryCarouselControl = setupCarouselControls(secondaryEventsCarousel, btnPrevSecondary, btnNextSecondary);
const tertiaryCarouselControl = setupCarouselControls(tertiaryEventsCarousel, btnPrevTertiary, btnNextTertiary);
const quaternaryCarouselControl = setupCarouselControls(quaternaryEventsCarousel, btnPrevQuaternary, btnNextQuaternary);

// Filtro de pesquisa
searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = allEvents.filter(ev => 
    ev.title.toLowerCase().includes(query) || 
    ev.category.toLowerCase().includes(query)
  );
  renderCarousel(eventsCarousel, filtered);
  mainCarouselControl.reset();
});

// ==========================================
// 5. CONTROLE DO CARRINHO DE COMPRAS
// ==========================================
function addToCart(eventId) {
  const event = allEvents.find(e => e.id === eventId);
  if (!event) return;

  const existingItem = cart.find(item => item.id === eventId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...event, quantity: 1 });
  }

  updateCartUI();
  closeModal();
  openCart();
}

function removeFromCart(eventId) {
  cart = cart.filter(item => item.id !== eventId);
  updateCartUI();
}

function updateCartUI() {
  cartItemsContainer.innerHTML = '';

  if (cart.length === 0) {
    cartCounter.classList.add('hidden');
    cartItemsContainer.innerHTML = `
      <div class="text-center py-16 text-slate-600 space-y-3">
        <i data-lucide="shopping-cart" class="w-12 h-12 mx-auto opacity-30"></i>
        <p class="text-xs font-bold uppercase tracking-widest">O seu carrinho está vazio</p>
      </div>
    `;
    cartTotal.textContent = "R$ 0,00";
    lucide.createIcons();
    return;
  }

  const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCounter.textContent = totalItemsCount;
  cartCounter.classList.remove('hidden');

  let totalPrice = 0;

  cart.forEach(item => {
    totalPrice += item.price * item.quantity;

    const cartItemEl = document.createElement('div');
    cartItemEl.className = "flex items-center gap-4 bg-slate-950/40 p-4 rounded-2xl border border-slate-800/60";
    cartItemEl.innerHTML = `
      <img src="${item.image}" alt="${item.title}" class="w-16 h-16 object-cover rounded-xl" />
      <div class="flex-1">
        <h4 class="font-bold text-sm text-white leading-snug">${item.title}</h4>
        <span class="text-xs text-violet-400 font-bold">R$ ${item.price.toFixed(2).replace('.', ',')} x ${item.quantity}</span>
      </div>
      <button onclick="removeFromCart(${item.id})" class="text-slate-600 hover:text-red-400 p-2 transition-colors">
        <i data-lucide="trash-2" class="w-4 h-4"></i>
      </button>
    `;
    cartItemsContainer.appendChild(cartItemEl);
  });

  cartTotal.textContent = `R$ ${totalPrice.toFixed(2).replace('.', ',')}`;
  lucide.createIcons();
}

function openCart() {
  cartDrawerOverlay.classList.remove('hidden');
  setTimeout(() => cartDrawer.classList.remove('translate-x-full'), 10);
}

function closeCart() {
  cartDrawer.classList.add('translate-x-full');
  setTimeout(() => cartDrawerOverlay.classList.add('hidden'), 300);
}

function checkoutCart() {
  if (cart.length === 0) {
    alert("Adicione pelo menos um ingresso ao carrinho antes de finalizar!");
    return;
  }
  alert("Reserva efetuada com sucesso! Obrigado por utilizar a GOTICKET.");
  cart = [];
  updateCartUI();
  closeCart();
}

btnOpenCart.addEventListener('click', openCart);
btnCloseCart.addEventListener('click', closeCart);
cartDrawerOverlay.addEventListener('click', (e) => {
  if (e.target === cartDrawerOverlay) closeCart();
});

// ==========================================
// 6. CATEGORIAS E ARRASTE HORIZONTAL
// ==========================================
function renderCategories() {
  categoriesContainer.innerHTML = '';
  categories.forEach(cat => {
    const item = document.createElement('div');
    item.className = "flex flex-col items-center gap-6 category-item group cursor-pointer";
    item.innerHTML = `
      <div class="category-circle w-32 h-32 bg-slate-900/60 rounded-full flex items-center justify-center text-slate-400 backdrop-blur-xl relative overflow-hidden group-hover:bg-slate-800/40">
        <div class="absolute inset-0 bg-gradient-to-tr from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div class="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
          <i data-lucide="${cat.icon}" class="w-8 h-8"></i>
        </div>
      </div>
      <span class="category-label text-[12px] font-black tracking-[0.3em] text-slate-500 uppercase">${cat.name}</span>
    `;
    
    item.addEventListener('click', () => {
      searchInput.value = cat.name;
      searchInput.dispatchEvent(new Event('input'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    categoriesContainer.appendChild(item);
  });
  lucide.createIcons();
}

document.getElementById('btn-toggle-categories').addEventListener('click', () => {
  showCategories = !showCategories;
  const wrapper = document.getElementById('categories-wrapper');
  const hint = document.getElementById('drag-hint');
  const icon = document.getElementById('toggle-icon');

  wrapper.style.display = showCategories ? 'block' : 'none';
  hint.style.display = showCategories ? 'flex' : 'none';
  icon.setAttribute('data-lucide', showCategories ? 'chevron-up' : 'chevron-down');
  lucide.createIcons();
});

let isDragging = false, startX, scrollLeftState;
categoriesContainer.addEventListener('mousedown', (e) => {
  isDragging = true;
  categoriesContainer.classList.add('cursor-grabbing');
  startX = e.pageX - categoriesContainer.offsetLeft;
  scrollLeftState = categoriesContainer.scrollLeft;
});
['mouseup', 'mouseleave'].forEach(evt => {
  categoriesContainer.addEventListener(evt, () => {
    isDragging = false;
    categoriesContainer.classList.remove('cursor-grabbing');
  });
});
categoriesContainer.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - categoriesContainer.offsetLeft;
  const walk = (x - startX) * 2.5;
  categoriesContainer.scrollLeft = scrollLeftState - walk;
});

// ==========================================
// 7. MODAL DE DETALHES & LOGIN
// ==========================================
function openEventModal(eventId) {
  const event = allEvents.find(e => e.id === eventId);
  if (!event) return;

  modalContent.innerHTML = `
    <div class="flex flex-col">
      <div class="h-80 relative">
        <img src="${event.image}" class="h-full w-full object-cover" alt="${event.title}" />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
      </div>
      <div class="p-10 sm:p-12">
        <span class="text-[10px] font-black text-violet-500 uppercase tracking-[0.4em] mb-4 block">Evento Selecionado</span>
        <h2 class="text-3xl sm:text-4xl font-black text-white italic mb-6 leading-tight tracking-tighter uppercase">${event.title}</h2>
        <p class="text-slate-400 text-sm mb-6 leading-relaxed opacity-90">${event.description}</p>
        <div class="mb-10 text-xl font-bold text-white">Preço: <span class="text-violet-400">R$ ${event.price.toFixed(2).replace('.', ',')}</span></div>
        <button onclick="addToCart(${event.id})" class="w-full bg-violet-600 text-white py-6 rounded-3xl font-black uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-violet-500 transition-all shadow-[0_20px_50px_rgba(139,92,246,0.3)]">
          <i data-lucide="ticket" class="w-6 h-6"></i> Reservar Agora
        </button>
      </div>
    </div>
  `;
  
  modalOverlay.classList.remove('hidden');
  modalOverlay.classList.add('flex');
  lucide.createIcons();
}

function renderAuthModal(tab = 'login') {
  const isLogin = tab === 'login';
  
  modalContent.innerHTML = `
    <div class="flex flex-col">
      <div class="flex bg-slate-950/50 p-3 border-b border-slate-800 sticky top-0 z-10 backdrop-blur-xl">
        <button onclick="renderAuthModal('login')" class="flex-1 py-4 text-xs font-black rounded-2xl tracking-[0.3em] transition-all ${isLogin ? 'bg-slate-800 text-violet-400 shadow-lg' : 'text-slate-600 hover:text-slate-400'}">ENTRAR</button>
        <button onclick="renderAuthModal('signin')" class="flex-1 py-4 text-xs font-black rounded-2xl tracking-[0.3em] transition-all ${!isLogin ? 'bg-slate-800 text-violet-400 shadow-lg' : 'text-slate-600 hover:text-slate-400'}">REGISTAR</button>
      </div>
      <div class="p-8 sm:p-12 space-y-6">
        ${!isLogin ? `
          <div class="space-y-1">
            <label class="text-[10px] font-black text-slate-500 tracking-[0.2em] ml-4 uppercase">Nome Completo</label>
            <input type="text" placeholder="Seu Nome" class="w-full bg-slate-950 border border-slate-800 p-4 rounded-2xl text-white outline-none focus:ring-2 focus:ring-violet-500/30 font-bold" />
          </div>
        ` : ''}
        <div class="space-y-1">
          <label class="text-[10px] font-black text-slate-500 tracking-[0.2em] ml-4 uppercase">E-mail</label>
          <input type="email" placeholder="exemplo@hub.com" class="w-full bg-slate-950 border border-slate-800 p-4 rounded-2xl text-white outline-none focus:ring-2 focus:ring-violet-500/30 font-bold" />
        </div>
        <div class="space-y-1">
          <label class="text-[10px] font-black text-slate-500 tracking-[0.2em] ml-4 uppercase">Palavra-passe</label>
          <input type="password" placeholder="••••••••" class="w-full bg-slate-950 border border-slate-800 p-4 rounded-2xl text-white outline-none focus:ring-2 focus:ring-violet-500/30 font-bold" />
        </div>
        <button onclick="closeModal()" class="w-full bg-violet-600 text-white py-5 rounded-2xl font-black text-sm uppercase tracking-[0.25em] hover:bg-violet-500 transition-all shadow-2xl mt-2">
          ${isLogin ? 'Entar na Conta' : 'Criar Minha Conta'}
        </button>
      </div>
    </div>
  `;
  
  modalOverlay.classList.remove('hidden');
  modalOverlay.classList.add('flex');
}

function closeModal() {
  modalOverlay.classList.add('hidden');
  modalOverlay.classList.remove('flex');
}

document.getElementById('btn-open-auth').addEventListener('click', () => renderAuthModal('login'));
document.getElementById('btn-close-modal').addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});

// ==========================================
// 8. INICIALIZAÇÃO DO SITE
// ==========================================
renderCarousel(eventsCarousel, allEvents, "bg-violet-600/90");
mainCarouselControl.reset();

const trendingRow1 = [...allEvents].reverse();
renderCarousel(secondaryEventsCarousel, trendingRow1, "bg-pink-600/90");
secondaryCarouselControl.reset();

const trendingRow2 = [...allEvents.slice(4), ...allEvents.slice(0, 4)];
renderCarousel(tertiaryEventsCarousel, trendingRow2, "bg-pink-600/90");
tertiaryCarouselControl.reset();

const trendingRow3 = [...allEvents.slice(8), ...allEvents.slice(0, 8)];
renderCarousel(quaternaryEventsCarousel, trendingRow3, "bg-pink-600/90");
quaternaryCarouselControl.reset();

renderCategories();
updateCartUI();
