'use strict';

// Small data layer for the interactive industry showcase and project map.
const industries = [
  { title: 'نفت، گاز و پتروشیمی', description: 'طراحی و توسعه راهکارهای مهندسی یکپارچه برای تأسیسات، فرآیندها و زیرساخت‌های حیاتی انرژی.', caption: 'زیرساخت انرژی', image: 'images/hero-1.webp', fallback: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1600&q=85', url: 'https://asa-eng.com/services/petrochemical،petroleum-and-gas-industry/', points: ['طراحی فرآیند و تجهیزات صنعتی', 'پایپینگ، تأسیسات و ابزار دقیق', 'مدیریت، نظارت و کنترل پروژه'] },
  { title: 'فولاد', description: 'خدمات مهندسی و پشتیبانی تخصصی برای توسعه صنایع فلزی، خطوط تولید و تأسیسات کارخانه‌ای.', caption: 'صنعت و تولید', image: 'images/hero-2.jpg', fallback: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=85', url: 'https://asa-eng.com/services/steel-industry/', points: ['طراحی سازه و تجهیزات صنعتی', 'بهینه‌سازی فرآیندهای کارخانه‌ای', 'نظارت فنی و کنترل کیفیت'] },
  { title: 'آب و برق', description: 'توسعه و بهینه‌سازی شبکه‌ها و زیرساخت‌های انرژی با تمرکز بر قابلیت اطمینان، بهره‌وری و ایمنی.', caption: 'انرژی و زیرساخت', image: 'images/project-power.jfif', fallback: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=85', url: 'https://asa-eng.com/services/electric-power-industry/', points: ['طراحی و انتقال نیرو', 'برق، مخابرات و ابزار دقیق', 'راهکارهای انرژی و بهره‌وری'] },
  { title: 'ساختمان', description: 'طراحی هماهنگ سازه، معماری و ژئوتکنیک برای فضاهایی ایمن، کارآمد و متناسب با نیاز پروژه.', caption: 'سازه و ساختمان', image: 'images/industry-building-photo.png', fallback: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=85', url: 'https://asa-eng.com/services/building-industry/', points: ['سازه، زلزله و مقاوم‌سازی', 'معماری و ساختمان', 'ژئوتکنیک و مطالعات زمین'] },
  { title: 'راه و راه‌آهن', description: 'خدمات مهندسی برای مسیرهای ارتباطی، راه‌ها و شبکه‌های ریلی با نگاه یکپارچه به ایمنی و دوام.', caption: 'حمل‌ونقل و ارتباطات', image: 'images/hero-3.jpg', url: 'https://asa-eng.com/services/roads-and-railways-industrial/', points: ['راه و راه‌آهن', 'مطالعات و طراحی زیرساخت', 'نظارت و مدیریت اجرا'] }
];

const projects = [
  {
    title: 'شرکت پتروشیمی جم',
    category: 'نفت، گاز و پتروشیمی',
    description: 'در پروژه‌های پتروشیمی، هماهنگی میان فرایند، تجهیزات و زیرساخت نقش مهمی در عملکرد مجموعه دارد. این نمونه، بخشی از تجربه آساکاو در پروژه‌های حوزه نفت، گاز و پتروشیمی را معرفی می‌کند.',
    image: './images/project-jam.jpg',
    fallback: industries[0].fallback,
    city: 'کنگان / بوشهر',
    lat: 27.55,
    lon: 52.61
  },
  {
    title: 'مجتمع فولاد بافق',
    category: 'صنعت فولاد',
    description: 'مجتمع‌های فولادی به زیرساخت‌های صنعتی هماهنگ و قابل اتکا نیاز دارند تا بخش‌های مختلف تولید در کنار هم فعالیت کنند. این پروژه، نمونه‌ای از حضور آساکاو در حوزه صنعت فولاد است.',
    image: './images/project-steel.jpg',
    fallback: industries[1].fallback,
    city: 'بافق / یزد',
    lat: 31.7,
    lon: 55.44
  },
  {
    title: 'برق منطقه‌ای کرمان',
    category: 'آب و برق',
    description: 'شبکه‌های برق منطقه‌ای نقشی اساسی در انتقال انرژی و پایداری زیرساخت‌های برق دارند. این نمونه، بخشی از فعالیت‌های آساکاو در حوزه برق و زیرساخت‌های انرژی را به نمایش می‌گذارد.',
    image: './images/project-power.jpg',
    fallback: industries[2].fallback,
    city: 'کرمان',
    lat: 30.3,
    lon: 57.07
  },
  {
    title: 'شرکت ملی نفت ایران',
    category: 'نفت، گاز و پتروشیمی',
    description: 'پروژه‌های مهندسی و ساختمان نفت، بخشی از توسعه زیرساخت‌های صنعت انرژی را شکل می‌دهند. این نمونه، ارتباط فعالیت‌های آساکاو با حوزه نفت، گاز و پروژه‌های صنعتی مرتبط را برجسته می‌کند.',
    image: './images/project-oil.jpg',
    fallback: industries[0].fallback,
    city: 'تهران',
    lat: 35.69,
    lon: 51.39
  }
];

// Boundary coordinates are reused from the existing Asakaw prototype.
const iranOutline = [
  [53.921598, 37.198918],
  [54.800304, 37.392421],
  [55.511578, 37.964117],
  [56.180375, 37.935127],
  [56.619366, 38.121394],
  [57.330434, 38.029229],
  [58.436154, 37.522309],
  [59.234762, 37.412988],
  [60.377638, 36.527383],
  [61.123071, 36.491597],
  [61.210817, 35.650072],
  [60.803193, 34.404102],
  [60.52843, 33.676446],
  [60.9637, 33.528832],
  [60.536078, 32.981269],
  [60.863655, 32.18292],
  [60.941945, 31.548075],
  [61.699314, 31.379506],
  [61.781222, 30.73585],
  [60.874248, 29.829239],
  [61.369309, 29.303276],
  [61.771868, 28.699334],
  [62.72783, 28.259645],
  [62.755426, 27.378923],
  [63.233898, 27.217047],
  [63.316632, 26.756532],
  [61.874187, 26.239975],
  [61.497363, 25.078237],
  [59.616134, 25.380157],
  [58.525761, 25.609962],
  [57.397251, 25.739902],
  [56.970766, 26.966106],
  [56.492139, 27.143305],
  [55.72371, 26.964633],
  [54.71509, 26.480658],
  [53.493097, 26.812369],
  [52.483598, 27.580849],
  [51.520763, 27.86569],
  [50.852948, 28.814521],
  [50.115009, 30.147773],
  [49.57685, 29.985715],
  [48.941333, 30.31709],
  [48.567971, 29.926778],
  [48.014568, 30.452457],
  [48.004698, 30.985137],
  [47.685286, 30.984853],
  [47.849204, 31.709176],
  [47.334661, 32.469155],
  [46.109362, 33.017287],
  [45.416691, 33.967798],
  [45.64846, 34.748138],
  [46.151788, 35.093259],
  [46.07634, 35.677383],
  [45.420618, 35.977546],
  [44.77267, 37.17045],
  [44.225756, 37.971584],
  [44.421403, 38.281281],
  [44.109225, 39.428136],
  [44.79399, 39.713003],
  [44.952688, 39.335765],
  [45.457722, 38.874139],
  [46.143623, 38.741201],
  [46.50572, 38.770605],
  [47.685079, 39.508364],
  [48.060095, 39.582235],
  [48.355529, 39.288765],
  [48.010744, 38.794015],
  [48.634375, 38.270378],
  [48.883249, 38.320245],
  [49.199612, 37.582874],
  [50.147771, 37.374567],
  [50.842354, 36.872814],
  [52.264025, 36.700422],
  [53.82579, 36.965031],
  [53.921598, 37.198918],
];
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

function latinToPersian(value) { return String(value).replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[Number(d)]); }

// Prefer local assets, but keep the preview useful when image files haven't been copied in yet.
function enableImageFallbacks() {
  $$('img[data-fallback]').forEach(img => {
    img.addEventListener('error', () => {
      const fallback = img.dataset.fallback;
      if (!fallback) return;
      const fallbackUrl = new URL(fallback, document.baseURI).href;
      // Only switch once per failing source; this also supports project images changed later by JS.
      if (img.src !== fallbackUrl) img.src = fallbackUrl;
    });
  });
}

function setupHeader() {
  const header = $('#site-header');
  const menuToggle = $('#menu-toggle');
  const mobileNav = $('#mobile-nav');
  const searchToggle = $('#search-toggle');
  const searchPanel = $('#search-panel');
  const searchInput = $('#site-search');

  const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 35);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  menuToggle.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('hidden') === false;
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'بستن منو' : 'باز کردن منو');
    $('#menu-icon').innerHTML = open ? '<path d="m5 5 14 14M19 5 5 19"/>' : '<path d="M3 6h18M3 12h18M3 18h18"/>';
  });
  $$('#mobile-nav a').forEach(link => link.addEventListener('click', () => {
    mobileNav.classList.add('hidden');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'باز کردن منو');
    $('#menu-icon').innerHTML = '<path d="M3 6h18M3 12h18M3 18h18"/>';
  }));
  searchToggle.addEventListener('click', () => {
    const open = searchPanel.classList.toggle('hidden') === false;
    searchToggle.setAttribute('aria-expanded', String(open));
    if (open) searchInput.focus();
  });
  searchPanel.addEventListener('submit', event => {
    event.preventDefault();
    const q = searchInput.value.trim();
    if (!q) return;
    const target = $$('main h1, main h2, main h3').find(heading => heading.textContent.includes(q));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      searchPanel.classList.add('hidden');
      searchInput.value = '';
    } else {
      showToast('موردی با این عبارت در بخش‌های قابل مشاهده پیدا نشد.');
    }
  });
}

function setupIndustryExplorer() {
  const tabs = $$('.industry-tab');
  const title = $('#industry-title');
  const description = $('#industry-description');
  const caption = $('#industry-image-caption');
  const image = $('#industry-image');
  const link = $('#industry-link');
  const count = $('#industry-count');
  const points = $('#industry-points');
  let active = 0;

  function setIndustry(index) {
    active = index;
    const item = industries[index];
    tabs.forEach((tab, i) => {
      const selected = i === index;
      tab.classList.toggle('is-active', selected);
      tab.setAttribute('aria-selected', String(selected));
    });
    title.textContent = item.title;
    description.textContent = item.description;
    caption.textContent = item.caption;
    count.textContent = `${latinToPersian(String(index + 1).padStart(2, '0'))} / ۰۵`;
    link.href = item.url;
    image.alt = item.title;
    image.dataset.fallback = item.fallback;
    image.style.opacity = '.3';
    const nextImage = new Image();
    nextImage.onload = () => { image.src = item.image; image.style.opacity = '1'; };
    nextImage.onerror = () => { image.src = item.fallback; image.style.opacity = '1'; };
    nextImage.src = item.image;
    points.innerHTML = item.points.map(point => `<li class="flex items-start gap-3"><span class="mt-[10px] h-1.5 w-1.5 shrink-0 bg-asa-orange"></span><span>${point}</span></li>`).join('');
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => setIndustry(index));
    tab.addEventListener('keydown', event => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        const next = (index + (event.key === 'ArrowLeft' ? 1 : -1) + tabs.length) % tabs.length;
        tabs[next].focus();
        setIndustry(next);
      }
    });
  });
  setIndustry(active);
}

function projectMapPoint(lat, lon) {
  return { x: 78 + ((lon - 44.0) / (63.5 - 44.0)) * 606, y: 38 + ((40.0 - lat) / (40.0 - 24.8)) * 484 };
}
function iranMapPath() {
  return iranOutline.map(([lon, lat], index) => {
    const p = projectMapPoint(lat, lon);
    return `${index === 0 ? 'M' : 'L'}${p.x.toFixed(2)} ${p.y.toFixed(2)}`;
  }).join(' ') + ' Z';
}
function setupProjectMap() {
  const path = iranMapPath();
  $('#iran-map-land').setAttribute('d', path);
  $('#iran-map-shadow').setAttribute('d', path);
  $('#iran-map-shadow').setAttribute('transform', 'translate(7 9)');
  $('#iran-map-outline').setAttribute('d', path);
  const markers = $('#map-project-markers');
  markers.innerHTML = projects.map((project, index) => {
    const p = projectMapPoint(project.lat, project.lon);
    return `<g class="map-project-point ${index === 0 ? 'active' : ''}" data-project="${index}" transform="translate(${p.x} ${p.y})" tabindex="0" role="button" aria-label="نمایش پروژه ${project.title}" aria-pressed="${index === 0}"><circle class="map-point-halo" r="17"></circle><circle class="map-point-ring" r="7.5"></circle><circle class="map-point-dot" r="3.5"></circle><text class="map-project-label" x="0" y="25" text-anchor="middle">${project.city}</text></g>`;
  }).join('');
  const markerNodes = $$('.map-project-point', markers);
  
  function activate(index) {
    const p = projects[index];

    markerNodes.forEach((node, i) => {
      node.classList.toggle('active', i === index);
      node.setAttribute('aria-pressed', String(i === index));
    });

    // Update the project details that still exist in the HTML.
    const title = $('#project-card-title');
    if (title) title.textContent = p.title;

    const category = $('#project-card-category');
    if (category) category.textContent = p.category;

    const description = $('#project-card-description');
    if (description) description.textContent = p.description;

    const location = $('#project-card-location');
    if (location) location.textContent = p.city;

    // Update the image and its fallback for the selected project.
    const img = $('#project-card-image');

    if (img) {
      img.dataset.fallback = p.fallback;
      img.alt = `تصویر ${p.title}`;
      img.src = p.image;
    }
  }

  markerNodes.forEach((node, index) => {
    node.addEventListener('click', () => activate(index));
    node.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); activate(index); }
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        const next = (index + (event.key === 'ArrowLeft' ? 1 : -1) + projects.length) % projects.length;
        markerNodes[next].focus(); activate(next);
      }
    });
  });
  let current = 0;
  $('#project-next').addEventListener('click', () => { current = (current + 1) % projects.length; activate(current); });
}

function setupCertificateModal() {
  const dialog = $('#certificate-dialog');
  const image = $('#certificate-dialog-image');
  const caption = $('#certificate-dialog-caption');
  $$('.certificate-card').forEach(card => card.addEventListener('click', () => {
    const filename = card.dataset.certificate;
    const title = card.querySelector('.mt-3')?.textContent || 'گواهینامه آساکاو';
    image.src = `./images/${filename}`;
    image.onerror = () => {
      image.onerror = null;
      caption.textContent = `${title} — برای نمایش تصویر کامل، فایل گواهینامه ${filename} را در پوشه images قرار دهید.`;
      image.style.display = 'none';
      if (!dialog.open) dialog.showModal();
    };
    image.style.display = 'block';
    caption.textContent = title;
    if (typeof dialog.showModal === 'function') dialog.showModal();
  }));
  dialog.addEventListener('close', () => { image.style.display = 'block'; image.onerror = null; });
}

function setupRevealAndStats() {
  const nodes = $$('[data-reveal]');
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    nodes.forEach(node => node.classList.add('is-visible'));
    return;
  }
  const seenStats = new WeakSet();
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    if (entry.target.classList.contains('stats-panel') && !seenStats.has(entry.target)) {
      seenStats.add(entry.target);
      animateStats();
    }
    observer.unobserve(entry.target);
  }), { threshold: .12, rootMargin: '0px 0px -5% 0px' });
  nodes.forEach(node => observer.observe(node));
}
function animateStats() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  $$('.stat-number[data-count]').forEach(el => {
    const target = Number(el.dataset.count);
    const prefix = el.dataset.prefix || '';
    if (reduced) { el.textContent = `${prefix}${latinToPersian(target)}`; return; }
    const start = performance.now();
    const duration = 850;
    const step = now => {
      const t = Math.min((now - start) / duration, 1);
      const value = Math.round(target * (1 - Math.pow(1 - t, 3)));
      el.textContent = `${prefix}${latinToPersian(value)}`;
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}
function setupHeroVideo() {
  const video = $('#hero-video');
  if (!video) return;
  video.addEventListener('playing', () => video.classList.add('is-playing'));
  video.addEventListener('error', () => video.classList.remove('is-playing'));
  const playAttempt = video.play();
  if (playAttempt && typeof playAttempt.catch === 'function') playAttempt.catch(() => video.classList.remove('is-playing'));
}
function setupToasts() {
  // Static prototype: keep feedback unobtrusive and avoid pretending a backend form exists.
  window.showToast = message => {
    const toast = $('#toast');
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(window.__asaToastTimer);
    window.__asaToastTimer = setTimeout(() => toast.classList.remove('is-visible'), 3200);
  };
}

function boot() {
  enableImageFallbacks();
  setupToasts();
  setupHeader();
  setupIndustryExplorer();
  setupProjectMap();
  setupCertificateModal();
  setupRevealAndStats();
  setupHeroVideo();
}

document.addEventListener('DOMContentLoaded', boot);
