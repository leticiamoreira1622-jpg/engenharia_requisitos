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