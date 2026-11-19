// =========================================
// SISTEMA DE TRADUCCIÓN (ES / EN)
// =========================================
const translations = {
    es: {
        'logo.sub': 'Veracruz',
        'nav.destinos': 'Destinos',
        'nav.experiencias': 'Experiencias',
        'nav.gastronomia': 'Gastronomía',
        'nav.cultura': 'Cultura',
        'nav.galeria': 'Galería',
        'nav.cta': 'Planifica tu Viaje',
        'hero.subtitle': 'Bienvenido a la Suiza Veracruzana',
        'hero.title.line1': 'Los Tuxtlas',
        'hero.title.line2': 'Mágicos',
        'hero.desc': 'Selva, magia y tradición en un solo lugar. Descubre Santiago Tuxtla, San Andrés y Catemaco.',
        'hero.btn1': 'Explorar Destinos',
        'hero.btn2': 'Planificar Viaje',
        'hero.stat1': 'Pueblos Mágicos',
        'hero.stat2': 'Sitios Naturales',
        'hero.stat3': 'Días de Aventura',
        'marquee.1': 'Cascadas Escondidas',
        'marquee.2': 'Selva Tropical',
        'marquee.3': 'Lagunas Místicas',
        'marquee.4': 'Tradición Olmeca',
        'marquee.5': 'Café de Altura',
        'marquee.6': 'Gastronomía Única',
        'destinos.tag': 'Explora',
        'destinos.title': 'Tres Mundos, Una Región',
        'destinos.subtitle': 'Cada rincón de Los Tuxtlas guarda una historia única.',
        'destinos.btn': 'Descubrir más',
        'destinos.santiago.tag': 'Historia',
        'destinos.santiago.name': 'Santiago Tuxtla',
        'destinos.santiago.desc': 'La cuna de la civilización Olmeca. Siente el peso de la historia frente a las cabezas colosales.',
        'destinos.sanandres.tag': 'Naturaleza',
        'destinos.sanandres.name': 'San Andrés Tuxtla',
        'destinos.sanandres.desc': 'Cascadas, tabaco y selva. El pulmón verde de Veracruz.',
        'destinos.catemaco.tag': 'Magia',
        'destinos.catemaco.name': 'Catemaco',
        'destinos.catemaco.desc': 'La laguna encantada. Brujos, monos y aguas termales.',
        'exp.tag': 'Vive',
        'exp.title': 'Experiencias Inolvidables',
        'exp.subtitle': 'Aventuras que se convierten en historias para contar.',
        'exp.1.title': 'Paseo en Lancha',
        'exp.1.desc': 'Navega por la Laguna de Catemaco y visita la Isla de los Monos.',
        'exp.2.title': 'Senderismo',
        'exp.2.desc': 'Recorre la Reserva de la Biosfera y descubre cascadas ocultas.',
        'exp.3.title': 'Rituales Ancestrales',
        'exp.3.desc': 'Sumérgete en la tradición de los brujos de Catemaco.',
        'exp.4.title': 'Ruta del Café',
        'exp.4.desc': 'Conoce el proceso del café de altura en San Andrés.',
        'gastro.tag': 'Saborea',
        'gastro.title': 'Gastronomía Local',
        'gastro.subtitle': 'Sabores que cuentan historias de la selva y el mar.',
        'gastro.1.badge': 'Imperdible',
        'gastro.1.title': 'Pescado Frito',
        'gastro.1.desc': 'Fresco de la laguna, crujiente y lleno de sabor.',
        'gastro.2.badge': 'Tradicional',
        'gastro.2.title': 'Tamales de Chipilín',
        'gastro.2.desc': 'El desayuno tradicional por excelencia.',
        'gastro.3.badge': 'Premium',
        'gastro.3.title': 'Café de Altura',
        'gastro.3.desc': 'Aroma y cuerpo de las montañas tuxtlecas.',
        'cultura.tag': 'Tradición',
        'cultura.title': 'Cultura Viva',
        'cultura.desc': 'Los Tuxtlas no es solo un destino natural; es un crisol de culturas. Desde la herencia Olmeca en Santiago hasta la mística de los brujos en Catemaco, cada pueblo tiene su propio latido.',
        'cultura.item1': 'Zona Arqueológica de Tres Zapotes',
        'cultura.item2': 'Fiesta de la Candelaria',
        'cultura.item3': 'Artesanías en barro y madera',
        'cultura.item4': 'Danza de los Tocotines',
        'cultura.cta': 'Descubre más',
        'galeria.tag': 'Visualiza',
        'galeria.title': 'Galería Visual',
        'galeria.subtitle': 'Postales que te enamorarán de Los Tuxtlas.',
        'plan.tag': 'Comienza',
        'plan.title': '¿Listo para la aventura?',
        'plan.desc': 'Déjanos tus datos y te enviaremos una guía personalizada con los mejores lugares, rutas y consejos para tu viaje a Los Tuxtlas.',
        'plan.location': 'Los Tuxtlas, Veracruz, México',
        'plan.name': 'Tu Nombre',
        'plan.email': 'Tu Correo',
        'plan.select': '¿Qué te interesa más?',
        'plan.opt1': 'Naturaleza y Aventura',
        'plan.opt2': 'Cultura e Historia',
        'plan.opt3': 'Gastronomía',
        'plan.opt4': 'Relax y Bienestar',
        'plan.btn': 'Enviar Guía de Viaje',
        'footer.brand': 'Tu guía definitiva para explorar la magia de Veracruz.',
        'footer.explore': 'Explorar',
        'footer.legal': 'Legal',
        'footer.privacy': 'Aviso de Privacidad',
        'footer.terms': 'Términos y Condiciones',
        'footer.contact': 'Contacto',
        'footer.follow': 'Síguenos',
        'footer.copy': '© 2026 Los Tuxtlas Travel Guide. Hecho con pasión en Veracruz.'
    },
    en: {
        'logo.sub': 'Veracruz',
        'nav.destinos': 'Destinations',
        'nav.experiencias': 'Experiences',
        'nav.gastronomia': 'Gastronomy',
        'nav.cultura': 'Culture',
        'nav.galeria': 'Gallery',
        'nav.cta': 'Plan Your Trip',
        'hero.subtitle': 'Welcome to the Veracruz Switzerland',
        'hero.title.line1': 'Los Tuxtlas',
        'hero.title.line2': 'Magical',
        'hero.desc': 'Jungle, magic and tradition in one place. Discover Santiago Tuxtla, San Andrés and Catemaco.',
        'hero.btn1': 'Explore Destinations',
        'hero.btn2': 'Plan Your Trip',
        'hero.stat1': 'Magic Towns',
        'hero.stat2': 'Natural Sites',
        'hero.stat3': 'Days of Adventure',
        'marquee.1': 'Hidden Waterfalls',
        'marquee.2': 'Tropical Jungle',
        'marquee.3': 'Mystic Lagoons',
        'marquee.4': 'Olmec Tradition',
        'marquee.5': 'High Altitude Coffee',
        'marquee.6': 'Unique Gastronomy',
        'destinos.tag': 'Explore',
        'destinos.title': 'Three Worlds, One Region',
        'destinos.subtitle': 'Every corner of Los Tuxtlas holds a unique story.',
        'destinos.btn': 'Discover more',
        'destinos.santiago.tag': 'History',
        'destinos.santiago.name': 'Santiago Tuxtla',
        'destinos.santiago.desc': 'The cradle of the Olmec civilization. Feel the weight of history before the colossal heads.',
        'destinos.sanandres.tag': 'Nature',
        'destinos.sanandres.name': 'San Andrés Tuxtla',
        'destinos.sanandres.desc': 'Waterfalls, tobacco and jungle. The green lung of Veracruz.',
        'destinos.catemaco.tag': 'Magic',
        'destinos.catemaco.name': 'Catemaco',
        'destinos.catemaco.desc': 'The enchanted lagoon. Witches, monkeys and hot springs.',
        'exp.tag': 'Live',
        'exp.title': 'Unforgettable Experiences',
        'exp.subtitle': 'Adventures that become stories worth telling.',
        'exp.1.title': 'Boat Ride',
        'exp.1.desc': 'Sail across Catemaco Lagoon and visit Monkey Island.',
        'exp.2.title': 'Hiking',
        'exp.2.desc': 'Explore the Biosphere Reserve and discover hidden waterfalls.',
        'exp.3.title': 'Ancient Rituals',
        'exp.3.desc': 'Immerse yourself in the tradition of Catemaco witches.',
        'exp.4.title': 'Coffee Route',
        'exp.4.desc': 'Learn about high-altitude coffee in San Andrés.',
        'gastro.tag': 'Taste',
        'gastro.title': 'Local Gastronomy',
        'gastro.subtitle': 'Flavors that tell stories of jungle and sea.',
        'gastro.1.badge': 'Must-Try',
        'gastro.1.title': 'Fried Fish',
        'gastro.1.desc': 'Fresh from the lagoon, crispy and full of flavor.',
        'gastro.2.badge': 'Traditional',
        'gastro.2.title': 'Chipilín Tamales',
        'gastro.2.desc': 'The traditional breakfast par excellence.',
        'gastro.3.badge': 'Premium',
        'gastro.3.title': 'High Altitude Coffee',
        'gastro.3.desc': 'Aroma and body from the Tuxtlas mountains.',
        'cultura.tag': 'Tradition',
        'cultura.title': 'Living Culture',
        'cultura.desc': "Los Tuxtlas is not just a natural destination; it's a melting pot of cultures. From the Olmec heritage in Santiago to the mystique of the witches in Catemaco, every town has its own heartbeat.",
        'cultura.item1': 'Tres Zapotes Archaeological Zone',
        'cultura.item2': 'Candelaria Festival',
        'cultura.item3': 'Clay and Wood Crafts',
        'cultura.item4': 'Tocotines Dance',
        'cultura.cta': 'Discover more',
        'galeria.tag': 'Visualize',
        'galeria.title': 'Visual Gallery',
        'galeria.subtitle': 'Postcards that will make you fall in love with Los Tuxtlas.',
        'plan.tag': 'Start',
        'plan.title': 'Ready for the adventure?',
        'plan.desc': 'Leave your details and we will send you a personalized guide with the best places, routes and tips for your trip to Los Tuxtlas.',
        'plan.location': 'Los Tuxtlas, Veracruz, Mexico',
        'plan.name': 'Your Name',
        'plan.email': 'Your Email',
        'plan.select': 'What interests you most?',
        'plan.opt1': 'Nature and Adventure',
        'plan.opt2': 'Culture and History',
        'plan.opt3': 'Gastronomy',
        'plan.opt4': 'Relax and Wellness',
        'plan.btn': 'Send Travel Guide',
        'footer.brand': 'Your definitive guide to explore the magic of Veracruz.',
        'footer.explore': 'Explore',
        'footer.legal': 'Legal',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms & Conditions',
        'footer.contact': 'Contact',
        'footer.follow': 'Follow Us',
        'footer.copy': '© 2026 Los Tuxtlas Travel Guide. Made with passion in Veracruz.'
    }
};

// Datos de los destinos (bilingües)
const destinosData = {
    es: {
        santiago: {
            titulo: 'Santiago Tuxtla',
            contenido: `
                <p>Conocida como la "Cuna de la Cultura Olmeca", Santiago Tuxtla es un destino que respira historia en cada esquina.</p>
                <ul>
                    <li><strong>Cabeza Olmeca:</strong> Monumento de 40 toneladas, símbolo de la región.</li>
                    <li><strong>Museo Tuxteco:</strong> Alberga piezas arqueológicas de incalculable valor.</li>
                    <li><strong>Parque Central:</strong> Ideal para probar el café local y observar la vida cotidiana.</li>
                    <li><strong>Iglesia de Santiago Apóstol:</strong> Arquitectura colonial que data del siglo XVII.</li>
                </ul>
                <p><strong>Consejo:</strong> Visita la zona arqueológica de Tres Zapotes, a solo 30 minutos.</p>
            `
        },
        sanandres: {
            titulo: 'San Andrés Tuxtla',
            contenido: `
                <p>El corazón verde de Los Tuxtlas. Aquí la naturaleza y la producción de tabaco se entrelazan.</p>
                <ul>
                    <li><strong>Salto de Eyipantla:</strong> Una cascada impresionante de 50 metros, rodeada de selva.</li>
                    <li><strong>Laguna Encantada:</strong> Un remanso de paz ideal para nadar.</li>
                    <li><strong>Fábricas de Puros:</strong> Conoce el arte de la elaboración de puros artesanales.</li>
                    <li><strong>Reserva de la Biosfera:</strong> Explora la biodiversidad más rica de Veracruz.</li>
                </ul>
                <p><strong>No te pierdas:</strong> Un recorrido por una finca cafetalera para probar el café de altura.</p>
            `
        },
        catemaco: {
            titulo: 'Catemaco',
            contenido: `
                <p>Misticismo, naturaleza y tradición se dan cita en este pueblo mágico a orillas de su famosa laguna.</p>
                <ul>
                    <li><strong>Laguna de Catemaco:</strong> Pasea en lancha y visita la Isla de los Monos.</li>
                    <li><strong>Nanciyaga:</strong> Reserva ecológica con aguas termales y selva virgen.</li>
                    <li><strong>Rituales de Brujería:</strong> Una tradición ancestral que atrae a visitantes de todo el mundo.</li>
                    <li><strong>Cascada de la Xoteapan:</strong> Un paraíso escondido entre la vegetación.</li>
                </ul>
                <p><strong>Imperdible:</strong> Disfruta de un pescado frito a la orilla de la laguna al atardecer.</p>
            `
        }
    },
    en: {
        santiago: {
            titulo: 'Santiago Tuxtla',
            contenido: `
                <p>Known as the "Cradle of the Olmec Culture", Santiago Tuxtla is a destination that breathes history on every corner.</p>
                <ul>
                    <li><strong>Olmec Head:</strong> A 40-ton monument, symbol of the region.</li>
                    <li><strong>Tuxteco Museum:</strong> Houses archaeological pieces of incalculable value.</li>
                    <li><strong>Central Park:</strong> Ideal for tasting local coffee and observing daily life.</li>
                    <li><strong>Santiago Apóstol Church:</strong> Colonial architecture dating from the 17th century.</li>
                </ul>
                <p><strong>Tip:</strong> Visit the Tres Zapotes archaeological zone, just 30 minutes away.</p>
            `
        },
        sanandres: {
            titulo: 'San Andrés Tuxtla',
            contenido: `
                <p>The green heart of Los Tuxtlas. Here nature and tobacco production intertwine.</p>
                <ul>
                    <li><strong>Eyipantla Falls:</strong> An impressive 50-meter waterfall, surrounded by jungle.</li>
                    <li><strong>Enchanted Lagoon:</strong> A haven of peace ideal for swimming.</li>
                    <li><strong>Cigar Factories:</strong> Learn the art of making handmade cigars.</li>
                    <li><strong>Biosphere Reserve:</strong> Explore the richest biodiversity in Veracruz.</li>
                </ul>
                <p><strong>Don't miss:</strong> A tour of a coffee farm to taste high-altitude coffee.</p>
            `
        },
        catemaco: {
            titulo: 'Catemaco',
            contenido: `
                <p>Mysticism, nature and tradition meet in this magic town on the shores of its famous lagoon.</p>
                <ul>
                    <li><strong>Catemaco Lagoon:</strong> Take a boat ride and visit Monkey Island.</li>
                    <li><strong>Nanciyaga:</strong> Ecological reserve with hot springs and virgin jungle.</li>
                    <li><strong>Witchcraft Rituals:</strong> An ancestral tradition that attracts visitors from all over the world.</li>
                    <li><strong>Xoteapan Waterfall:</strong> A hidden paradise among the vegetation.</li>
                </ul>
                <p><strong>Must-do:</strong> Enjoy fried fish on the lagoon shore at sunset.</p>
            `
        }
    }
};

// Galería (nombres bilingües)
const galeriaData = [
    { url: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?q=80&w=800', titulo: { es: 'Cabeza Olmeca', en: 'Olmec Head' } },
    { url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800', titulo: { es: 'Salto de Eyipantla', en: 'Eyipantla Falls' } },
    { url: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=800', titulo: { es: 'Laguna de Catemaco', en: 'Catemaco Lagoon' } },
    { url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800', titulo: { es: 'Selva de Los Tuxtlas', en: 'Los Tuxtlas Jungle' } },
    { url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800', titulo: { es: 'Cascada Natural', en: 'Natural Waterfall' } },
    { url: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=800', titulo: { es: 'Paisaje Costero', en: 'Coastal Landscape' } },
    { url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800', titulo: { es: 'Montañas Verdes', en: 'Green Mountains' } },
    { url: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=800', titulo: { es: 'Sendero Selvático', en: 'Jungle Trail' } }
];

// =========================================
// ESTADO GLOBAL
// =========================================
let currentLang = 'es';

// =========================================
// FUNCIÓN DE TRADUCCIÓN
// =========================================
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('preferredLang', lang);
    document.documentElement.lang = lang;

    // Animar elementos traducidos
    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.classList.add('translating');
        setTimeout(() => el.classList.remove('translating'), 300);
    });

    // Traducir textos
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Traducir placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // Actualizar botones de idioma
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Re-renderizar galería con nuevo idioma
    renderGaleria();
}

// =========================================
// RENDERIZAR GALERÍA
// =========================================
function renderGaleria() {
    const grid = document.getElementById('galeriaGrid');
    if (!grid) return;

    grid.innerHTML = '';
    galeriaData.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'galeria-item';
        div.innerHTML = `
            <img src="${item.url}" alt="${item.titulo[currentLang]}" loading="lazy">
            <div class="galeria-overlay">
                <h4>${item.titulo[currentLang]}</h4>
            </div>
        `;
        div.style.animation = `fadeInUp 0.6s ease ${index * 0.08}s both`;
        grid.appendChild(div);
    });
}

// =========================================
// SLIDER AUTOMÁTICO (SOLO AUTOPLAY)
// =========================================
function initSlider() {
    const slides = document.querySelectorAll('.slide');
    if (!slides.length) return;

    let currentSlide = 0;
    const AUTO_PLAY_DELAY = 5000; // Cambia cada 5 segundos

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    // Iniciar autoplay
    setInterval(nextSlide, AUTO_PLAY_DELAY);
}

// =========================================
// INICIALIZACIÓN
// =========================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. Cargar idioma preferido
    const savedLang = localStorage.getItem('preferredLang') || 'es';
    setLanguage(savedLang);

    // 2. Selector de idioma
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });

    // 3. Slider
    initSlider();

    // 4. Barra de progreso + navbar + back to top
    const progressBar = document.getElementById('progressBar');
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';

        navbar.classList.toggle('scrolled', scrollTop > 50);
        backToTop.classList.toggle('visible', scrollTop > 500);
    });

    // 5. Back to top
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 6. Menú móvil
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    // 7. Intersection Observer para animaciones
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.fade-in-scroll').forEach(el => observer.observe(el));

    // 8. Partículas flotantes
    const particlesContainer = document.getElementById('particles');
    if (particlesContainer) {
        for (let i = 0; i < 25; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDuration = (8 + Math.random() * 12) + 's';
            particle.style.animationDelay = Math.random() * 10 + 's';
            particle.style.width = (2 + Math.random() * 4) + 'px';
            particle.style.height = particle.style.width;
            particlesContainer.appendChild(particle);
        }
    }

    // 9. Formulario
    const formPlan = document.getElementById('formPlan');
    formPlan.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = formPlan.querySelector('button');
        const originalHTML = btn.innerHTML;

        btn.disabled = true;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + (currentLang === 'es' ? 'Enviando...' : 'Sending...');

        setTimeout(() => {
            const msg = currentLang === 'es'
                ? '¡Gracias! Hemos recibido tu solicitud. Pronto recibirás tu guía personalizada.'
                : 'Thank you! We received your request. You will soon receive your personalized guide.';
            alert(msg);
            formPlan.reset();
            btn.innerHTML = originalHTML;
            btn.disabled = false;
        }, 1500);
    });
});

// =========================================
// FUNCIONES DEL MODAL
// =========================================
function mostrarInfo(destinoKey) {
    const data = destinosData[currentLang][destinoKey];
    if (!data) return;

    const modal = document.getElementById('modal');
    const title = document.getElementById('modal-title');
    const body = document.getElementById('modal-body');

    title.innerText = data.titulo;
    body.innerHTML = data.contenido;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function cerrarModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

document.getElementById('modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'modal') cerrarModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') cerrarModal();
});