import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Calculator,
  Facebook,
  FileText,
  HeartHandshake,
  Instagram,
  Landmark,
  Menu,
  MessageCircle,
  Music2,
  PiggyBank,
  Scale,
  ShieldCheck,
  Sparkles,
  UsersRound,
  X,
} from "lucide-react";

const servicesEs = [
  {
    icon: Calculator,
    title: "Contabilidad",
    text: "Procesos contables claros y ordenados para mantener una operación confiable.",
    details:
      "Ordenamos y damos seguimiento a tus registros contables para que cada movimiento tenga respaldo, trazabilidad y sentido financiero. Incluye revisión de información, apoyo en cierres, organización documental y reportes útiles para entender cómo se comporta tu operación.",
  },
  {
    icon: FileText,
    title: "Auditorías e informes financieros",
    text: "Revisión e información financiera para tomar decisiones con datos sólidos.",
    details:
      "Analizamos estados financieros, movimientos clave y documentación soporte para detectar inconsistencias, oportunidades de mejora y puntos de control. El objetivo es entregar información clara, explicada y accionable para socios, dirección o administración.",
  },
  {
    icon: ShieldCheck,
    title: "Claridad operativa",
    text: "Visibilidad sobre tus números y procesos para mejorar el control del negocio.",
    details:
      "Convertimos información dispersa en una lectura ordenada de tu negocio: ingresos, costos, obligaciones, flujos y procesos internos. Esto ayuda a identificar cuellos de botella, decisiones pendientes y áreas donde conviene mejorar el control.",
  },
  {
    icon: FileText,
    title: "Fiscal / impuestos",
    text: "Acompañamiento fiscal responsable para cumplir obligaciones y cuidar tu patrimonio.",
    details:
      "Te acompañamos en el cumplimiento de obligaciones fiscales, revisión de declaraciones, seguimiento de criterios aplicables y organización de información para reducir errores. La intención es cumplir correctamente sin perder de vista el impacto patrimonial.",
  },
  {
    icon: ShieldCheck,
    title: "Estrategia y cumplimiento",
    text: "Planeación fiscal y seguimiento normativo para operar con mayor certidumbre.",
    details:
      "Diseñamos una ruta fiscal alineada con tu actividad, tus objetivos y tu nivel de riesgo. Revisamos escenarios, obligaciones recurrentes, fechas clave y medidas preventivas para que la operación avance con mayor certidumbre.",
  },
  {
    icon: ShieldCheck,
    title: "Mitigación de riesgos",
    text: "Identificación y prevención de riesgos fiscales, financieros y operativos.",
    details:
      "Detectamos riesgos antes de que se vuelvan problemas: omisiones, documentación incompleta, procesos frágiles, exposición fiscal o decisiones financieras sin respaldo. Proponemos acciones concretas para disminuir contingencias y proteger la operación.",
  },
  {
    icon: Landmark,
    title: "Gestión patrimonial",
    text: "Organización integral del patrimonio para proteger tus activos y objetivos.",
    details:
      "Acompañamos la organización de activos, obligaciones, estructuras y objetivos familiares o empresariales. Buscamos que el patrimonio tenga orden, lectura clara y una estrategia coherente con el presente y el futuro.",
  },
  {
    icon: PiggyBank,
    title: "Protección y crecimiento de activos",
    text: "Estrategias para resguardar recursos y orientar su crecimiento sostenible.",
    details:
      "Revisamos la composición de tus recursos, su exposición y las oportunidades para fortalecerlos. La asesoría combina protección, liquidez, planeación y crecimiento sostenible según el perfil y las metas del cliente.",
  },
  {
    icon: PiggyBank,
    title: "Seguridad del legado",
    text: "Planeación patrimonial para cuidar lo construido y dar continuidad al futuro.",
    details:
      "Trabajamos en la continuidad de lo construido mediante orden patrimonial, prevención de conflictos y claridad sobre objetivos de largo plazo. Es un acompañamiento pensado para proteger decisiones familiares, empresariales y sucesorias.",
  },
  {
    icon: Building2,
    title: "Legal / corporativo",
    text: "Estructura legal y corporativa para dar solidez a personas y empresas.",
    details:
      "Apoyamos en la revisión y organización de estructuras societarias, documentos corporativos, acuerdos y obligaciones formales. El objetivo es que la empresa tenga una base legal congruente con su operación y etapa de crecimiento.",
  },
  {
    icon: Building2,
    title: "Gobierno corporativo",
    text: "Orden, reglas y procesos para fortalecer la toma de decisiones empresariales.",
    details:
      "Definimos prácticas de gobierno, roles, reglas de decisión, documentación de acuerdos y mecanismos de control. Esto permite que la empresa funcione con mayor transparencia, continuidad y responsabilidad entre socios o directivos.",
  },
  {
    icon: Building2,
    title: "Integridad estructural",
    text: "Base corporativa sólida para operar con transparencia, control y continuidad.",
    details:
      "Revisamos si la estructura fiscal, financiera, operativa y corporativa está alineada. Cuando hay piezas desconectadas, proponemos ajustes para que la empresa opere con más coherencia, control interno y estabilidad.",
  },
];

const servicesEn = [
  {
    icon: Calculator,
    title: "Accounting",
    text: "Clear and organized accounting processes to keep your operation reliable.",
    details:
      "We organize and track your accounting records so every transaction has support, traceability, and financial logic. This includes data review, closing support, document organization, and useful reporting to understand your operation.",
  },
  {
    icon: FileText,
    title: "Audits and financial reports",
    text: "Financial review and reporting for data-driven decisions.",
    details:
      "We analyze financial statements, key movements, and supporting documents to detect inconsistencies, improvement opportunities, and control points.",
  },
  {
    icon: ShieldCheck,
    title: "Operational clarity",
    text: "Visibility over your numbers and processes to improve control.",
    details: "We turn scattered information into an ordered view of your business: income, costs, obligations, cash flow, and internal processes.",
  },
];

const heroSlidesEs = [
  {
    eyebrow: "Consultoría Estratégica",
    title: "KABIN Consultoría Fiscal y Financiera",
    text: "Servicios profesionales desde una perspectiva humana.",
    image: "/carlos-muza-hpjSkU2UYSU-unsplash.webp",
  },
  {
    eyebrow: "Trato humano",
    title: "Acompañamiento cálido, responsable y profesional.",
    text: "Brindamos asesorías personalizadas para cuidar el patrimonio de nuestros clientes y hacerlo crecer.",
    image: "/jakub-zerdzicki-LNnmSumlwO4-unsplash.webp",
  },
  {
    eyebrow: "Consultoría Fiscal y Financiera",
    title: "Detrás de cada número hay una historia humana.",
    text: "Integramos claridad contable, visión fiscal y apoyo genuino para personas y empresas.",
    image: "/blake-wisz-GFrBMipOd_E-unsplash.webp",
  },
];

const heroSlidesEn = [
  {
    eyebrow: "Strategic Consulting",
    title: "KABIN Tax and Financial Consulting",
    text: "Professional services from a human perspective.",
    image: "/carlos-muza-hpjSkU2UYSU-unsplash.webp",
  },
  {
    eyebrow: "Human approach",
    title: "Warm, responsible, and professional support.",
    text: "We provide personalized guidance to protect and grow our clients' assets.",
    image: "/jakub-zerdzicki-LNnmSumlwO4-unsplash.webp",
  },
  {
    eyebrow: "Tax and Financial Consulting",
    title: "Behind every number there is a human story.",
    text: "We integrate accounting clarity, tax vision, and genuine support for people and businesses.",
    image: "/blake-wisz-GFrBMipOd_E-unsplash.webp",
  },
];

const badgesEs = [
  "Responsabilidad",
  "Honestidad",
  "Empatía",
  "Trabajo en equipo",
];

const badgesEn = ["Responsibility", "Honesty", "Empathy", "Teamwork"];

const navLinksEs = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

const navLinksEn = [
  { href: "#inicio", label: "Home" },
  { href: "#servicios", label: "Services" },
  { href: "#nosotros", label: "About" },
  { href: "#contacto", label: "Contact" },
];

const valuesEs = [
  {
    icon: ShieldCheck,
    title: "Responsabilidad",
    text: "Cuidamos cada proceso con seguimiento, orden y compromiso profesional.",
  },
  {
    icon: Scale,
    title: "Honestidad",
    text: "Trabajamos con transparencia para que cada decisión tenga sustento claro.",
  },
  {
    icon: HeartHandshake,
    title: "Empatía",
    text: "Escuchamos la historia detrás de los números y adaptamos la asesoría a cada cliente.",
  },
  {
    icon: UsersRound,
    title: "Trabajo en equipo",
    text: "Integramos visión contable, fiscal, financiera y patrimonial para avanzar con coherencia.",
  },
];

const valuesEn = [
  { icon: ShieldCheck, title: "Responsibility", text: "We manage every process with disciplined follow-up and professional commitment." },
  { icon: Scale, title: "Honesty", text: "We work transparently so every decision has clear support." },
  { icon: HeartHandshake, title: "Empathy", text: "We listen to the story behind the numbers and adapt to each client." },
  { icon: UsersRound, title: "Teamwork", text: "We integrate accounting, tax, financial, and asset perspectives." },
];

const journeyEs = [
  { year: "2020", title: "Fundación y contabilidad core" },
  { year: "2022", title: "Expansión a estrategia fiscal" },
  { year: "2024", title: "Lanzamiento de gestión patrimonial" },
  { year: "2026", title: "Transformación digital e IA" },
];
const journeyEn = [
  { year: "2020", title: "Foundation and core accounting" },
  { year: "2022", title: "Expansion into tax strategy" },
  { year: "2024", title: "Asset management launch" },
  { year: "2026", title: "Digital transformation and AI" },
];

export default function KabinConsultoriaMockup() {
  const isEnglishPath = typeof window !== "undefined" && window.location.pathname.startsWith("/en");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lang, setLang] = useState(isEnglishPath ? "en" : "es");
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const t = lang === "es"
    ? {
        navLinks: navLinksEs, badges: badgesEs, heroSlides: heroSlidesEs, services: servicesEs, values: valuesEs, journey: journeyEs,
        consult: "Consultoría Fiscal y Financiera", menuOpen: "Abrir menú", menuClose: "Cerrar menú",
        servicesTitle: "Servicios", servicesHeading: "Servicios contables, fiscales y financieros desde una perspectiva humana.", readMore: "Ver más",
        about: "Nosotros", pillars: "Cimientos de nuestro éxito.", concept: "KABIN Consultores nació de un concepto claro: brindar servicios profesionales desde una perspectiva humana.",
        aboutText: "Creemos que detrás de cada número hay una historia, una familia, una empresa y una decisión importante. Por eso acompañamos a nuestros clientes con claridad contable, estrategia fiscal, visión financiera y una conversación cercana que permite cuidar su patrimonio y hacerlo crecer.",
        mission: "Nuestra misión", missionTitle: "Acompañamiento cálido y responsable.", missionText: "Brindar asesorías personalizadas y acompañamiento de una manera cálida, humana, responsable y profesional, para que cada cliente entienda su situación y pueda tomar decisiones con tranquilidad.",
        vision: "Nuestra visión", visionTitle: "Proteger y hacer crecer su legado.", visionText: "Ser uno de los consultores contables, fiscales y financieros de referencia para cuidar el patrimonio de nuestros clientes, fortalecer sus operaciones y acompañar su crecimiento con visión de largo plazo.",
        valuesTitle: "Nuestros valores", path: "Nuestro camino",
        contactTitle: "Recibe acompañamiento profesional.", contactText: "Completa el formulario y te contactaremos para entender tu situación y proponerte una ruta de trabajo.",
        fullname: "Nombre completo", email: "Correo electrónico", phone: "Teléfono", interest: "Servicio de interés", message: "Mensaje", send: "Enviar solicitud",
        privacy: "Aviso de Privacidad", footerNav: "Navegación", footerContact: "Contacto", mexico: "Atención en México", social: "Redes sociales",
        rights: "© 2026 Kabin Consultoría Fiscal y Financiera. Todos los derechos reservados.", terms: "Términos", serviceDetail: "Detalle del servicio", request: "Solicitar asesoría",
      }
    : {
        navLinks: navLinksEn, badges: badgesEn, heroSlides: heroSlidesEn, services: servicesEn, values: valuesEn, journey: journeyEn,
        consult: "Tax and Financial Consulting", menuOpen: "Open menu", menuClose: "Close menu",
        servicesTitle: "Services", servicesHeading: "Accounting, tax, and financial services from a human perspective.", readMore: "Read more",
        about: "About", pillars: "Foundations of our success.", concept: "KABIN Consultores was born from a clear concept: delivering professional services from a human perspective.",
        aboutText: "We believe that behind every number there is a story, a family, a company, and an important decision.",
        mission: "Our mission", missionTitle: "Warm and responsible support.", missionText: "Provide personalized advisory and support in a warm, human, responsible, and professional way.",
        vision: "Our vision", visionTitle: "Protect and grow your legacy.", visionText: "To become a leading accounting, tax, and financial consulting firm focused on protecting and growing client assets.",
        valuesTitle: "Our values", path: "Our journey",
        contactTitle: "Receive professional support.", contactText: "Complete the form and we will contact you to understand your needs and propose a work plan.",
        fullname: "Full name", email: "Email", phone: "Phone", interest: "Service of interest", message: "Message", send: "Send request",
        privacy: "Privacy Notice", footerNav: "Navigation", footerContact: "Contact", mexico: "Service in Mexico", social: "Social media",
        rights: "© 2026 Kabin Tax and Financial Consulting. All rights reserved.", terms: "Terms", serviceDetail: "Service details", request: "Request consultation",
      };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % t.heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [t.heroSlides.length]);

  useEffect(() => {
    let lastY = window.scrollY || 0;

    const onScroll = () => {
      const y = window.scrollY || 0;
      setParallaxOffset(Math.min(y * 0.2, 120));
      setIsHeaderHidden(y > 120 && y > lastY + 8);
      lastY = y;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const isEn = lang === "en";
    const base = window.location.origin;
    const esUrl = `${base}/`;
    const enUrl = `${base}/en/`;

    document.documentElement.lang = isEn ? "en" : "es";
    document.title = isEn ? "Kabin Tax and Financial Consulting" : "Kabin Consultoría Fiscal y Financiera";

    const setLink = (rel, href, hreflang) => {
      const key = hreflang ? `${rel}-${hreflang}` : rel;
      let el = document.head.querySelector(`link[data-seo='${key}']`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("data-seo", key);
        document.head.appendChild(el);
      }
      el.setAttribute("rel", rel);
      el.setAttribute("href", href);
      if (hreflang) el.setAttribute("hreflang", hreflang);
    };

    setLink("canonical", isEn ? enUrl : esUrl);
    setLink("alternate", esUrl, "es-MX");
    setLink("alternate", enUrl, "en");
    setLink("alternate", esUrl, "x-default");
  }, [lang]);

  const switchLanguage = (nextLang) => {
    setLang(nextLang);
    const target = nextLang === "en" ? "/en/" : "/";
    if (window.location.pathname !== target) window.history.replaceState({}, "", target);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % t.heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + t.heroSlides.length) % t.heroSlides.length);
  };

  const closeMenu = () => setIsMenuOpen(false);
  const active = t.heroSlides[currentSlide];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f4efe7] text-slate-900">
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-slate-950/45 backdrop-blur-xl transition-transform duration-300 ease-out ${
          isHeaderHidden && !isMenuOpen ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src="/KABIN LOGO OFICIAL BLANCO-01.png"
              alt="Kabin Consultoría"
              className="h-24 w-24 object-contain"
            />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-amber-100">{t.consult}</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-[16.8px] font-semibold text-white/85 lg:flex">
            {t.navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <div className="inline-flex rounded-full border border-white/30 bg-white/10 p-1 text-xs font-bold text-white">
              <button type="button" onClick={() => switchLanguage("es")} className={`rounded-full px-3 py-1 ${lang==="es"?"bg-white text-slate-900":""}`}>ES</button>
              <button type="button" onClick={() => switchLanguage("en")} className={`rounded-full px-3 py-1 ${lang==="en"?"bg-white text-slate-900":""}`}>EN</button>
            </div>
            <a
              href="https://wa.me/"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/20"
            >
              <MessageCircle size={16} /> Escríbenos por WhatsApp
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen((open) => !open)}
            className="rounded-xl border border-white/30 bg-white/10 p-2.5 text-white md:hidden"
            aria-label={isMenuOpen ? t.menuClose : t.menuOpen}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="border-t border-white/15 bg-slate-950/95 px-5 pb-5 pt-3 text-white shadow-2xl md:hidden"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22 }}
            >
              <div className="mb-3 inline-flex rounded-full border border-white/30 bg-white/10 p-1 text-xs font-bold text-white">
                <button
                  type="button"
                  onClick={() => {
                    switchLanguage("es");
                    closeMenu();
                  }}
                  className={`rounded-full px-4 py-2 ${lang === "es" ? "bg-white text-slate-900" : ""}`}
                >
                  ES
                </button>
                <button
                  type="button"
                  onClick={() => {
                    switchLanguage("en");
                    closeMenu();
                  }}
                  className={`rounded-full px-4 py-2 ${lang === "en" ? "bg-white text-slate-900" : ""}`}
                >
                  EN
                </button>
              </div>
              <nav className="flex flex-col">
                {t.navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="border-b border-white/10 py-3 text-base font-bold text-white/90"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="mt-4 grid gap-3">
                <a
                  href="https://wa.me/"
                  onClick={closeMenu}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 bg-white/10 px-5 py-3 text-sm font-black text-white"
                >
                  <MessageCircle size={17} /> Escríbenos por WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        <section id="inicio" className="relative min-h-screen overflow-hidden text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${active.image})` }}
              initial={{ opacity: 0, scale: 1.12, filter: "blur(3px)" }}
              animate={{
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
                y: -parallaxOffset,
              }}
              exit={{ opacity: 0, scale: 0.985, filter: "blur(2px)" }}
              transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/88 via-emerald-950/70 to-slate-950/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-slate-950/55" />

          <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-5 pb-16 pt-32 lg:px-8 lg:pt-36">
            <AnimatePresence mode="wait">
              <motion.div
                key={`hero-copy-${currentSlide}`}
                className="w-full max-w-4xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-amber-100 backdrop-blur-md sm:text-sm">
                  <Sparkles size={15} /> {active.eyebrow}
                </p>

                <h1 className="max-w-4xl text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  {active.title}
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8 md:text-xl">
                  {active.text}
                </p>

                <div className="mt-9 flex flex-wrap gap-3">
                  {t.badges.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white/90 backdrop-blur-md sm:text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={prevSlide}
            aria-label="Slide anterior"
            className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/35 bg-black/25 p-2.5 text-white backdrop-blur-md transition hover:bg-black/40 md:block"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Siguiente slide"
            className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/35 bg-black/25 p-2.5 text-white backdrop-blur-md transition hover:bg-black/40 md:block"
          >
            <ArrowRight size={18} />
          </button>

          <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 gap-2 rounded-full border border-white/20 bg-black/20 p-2 backdrop-blur-lg">
            {t.heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2.5 rounded-full transition-all ${index === currentSlide ? "w-9 bg-white" : "w-2.5 bg-white/45"}`}
                aria-label={`Ver slide ${index + 1}`}
              />
            ))}
          </div>
        </section>

        <section id="servicios" className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-900">{t.servicesTitle}</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              {t.servicesHeading}
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {t.services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="group flex h-full flex-col rounded-[1.8rem] border border-emerald-900/10 bg-white p-6 shadow-sm transition hover:-translate-y-1.5 hover:shadow-xl"
                >
                  <div className="mb-5 inline-flex rounded-2xl bg-emerald-50 p-3.5 text-emerald-950 transition group-hover:bg-emerald-950 group-hover:text-white">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-black text-slate-900">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{service.text}</p>
                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="mt-auto inline-flex w-fit items-center gap-2 pt-5 text-left text-sm font-bold text-emerald-900"
                  >
                    {t.readMore} <ArrowRight size={15} />
                  </button>
                </article>
              );
            })}
          </div>
        </section>

        <section id="nosotros" className="bg-[#0d2340] py-16 text-white lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="border-l-4 border-[#d9ad58] pl-5 text-sm font-black uppercase tracking-[0.24em] text-[#d9ad58]">
                  {t.about}
                </p>
                <h2 className="mt-6 max-w-4xl text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl md:text-6xl">
                  {t.pillars}
                </h2>
                <p className="mt-6 text-xl font-semibold leading-9 text-white sm:text-2xl">
                  {t.concept}
                </p>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                  {t.aboutText}
                </p>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] border border-[#d9ad58]/35" />
                <img
                  src="/kabin.png"
                  alt="Equipo de consultoría trabajando en una mesa de oficina"
                  className="relative aspect-[4/3] w-full rounded-[1.6rem] object-cover shadow-2xl shadow-black/35"
                />
              </div>
            </div>

            <div className="mt-14 grid gap-5 lg:grid-cols-2">
              <article className="rounded-[1.4rem] border border-[#d9ad58]/30 bg-white/5 p-7 md:p-9">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#d9ad58]">{t.mission}</p>
                <h3 className="mt-4 text-2xl font-black text-[#d9ad58]">{t.missionTitle}</h3>
                <p className="mt-4 text-base leading-8 text-slate-200">
                  {t.missionText}
                </p>
              </article>

              <article className="rounded-[1.4rem] border border-[#d9ad58]/30 bg-white/5 p-7 md:p-9">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#d9ad58]">{t.vision}</p>
                <h3 className="mt-4 text-2xl font-black text-[#d9ad58]">{t.visionTitle}</h3>
                <p className="mt-4 text-base leading-8 text-slate-200">
                  {t.visionText}
                </p>
              </article>
            </div>

            <div className="mt-14">
              <p className="border-l-4 border-[#d9ad58] pl-5 text-sm font-black uppercase tracking-[0.24em] text-[#d9ad58]">
                {t.valuesTitle}
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {t.values.map((value) => {
                  const Icon = value.icon;
                  return (
                    <article key={value.title} className="rounded-[1.2rem] bg-white/[0.07] p-6 text-center shadow-sm">
                      <Icon className="mx-auto text-[#d9ad58]" size={42} />
                      <h3 className="mt-6 text-xl font-black text-white">{value.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-200">{value.text}</p>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="mt-14">
              <p className="border-l-4 border-[#d9ad58] pl-5 text-sm font-black uppercase tracking-[0.24em] text-[#d9ad58]">
                {t.path}
              </p>
              <div className="mt-8 grid gap-4 border-t border-[#d9ad58] pt-6 md:grid-cols-4">
                {t.journey.map((item) => (
                  <div key={item.year} className="relative">
                    <span className="absolute -top-[34px] left-0 h-4 w-4 rounded-full border-4 border-white bg-[#d9ad58]" />
                    <p className="text-lg font-black text-[#d9ad58]">{item.year}</p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-slate-200">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
          <div className="rounded-[2.2rem] bg-slate-950 p-8 text-white shadow-2xl md:p-12">
            <h2 className="max-w-3xl text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
              {t.contactTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
              {t.contactText}
            </p>
            <form
              action="https://formspree.io/f/mpqndjbl"
              method="POST"
              className="mt-8 grid gap-4 md:grid-cols-2"
            >
              <label className="grid gap-2">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-amber-100">{t.fullname}</span>
                <input
                  type="text"
                  name="nombre"
                  required
                  className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/55 focus:border-white/45 focus:outline-none"
                  placeholder="Tu nombre"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-amber-100">{t.email}</span>
                <input
                  type="email"
                  name="email"
                  required
                  className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/55 focus:border-white/45 focus:outline-none"
                  placeholder="tu@correo.com"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-amber-100">{t.phone}</span>
                <input
                  type="tel"
                  name="telefono"
                  className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/55 focus:border-white/45 focus:outline-none"
                  placeholder="Tu teléfono"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-amber-100">{t.interest}</span>
                <input
                  type="text"
                  name="servicio"
                  className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/55 focus:border-white/45 focus:outline-none"
                  placeholder="Contabilidad, fiscal, patrimonial..."
                />
              </label>
              <label className="grid gap-2 md:col-span-2">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-amber-100">{t.message}</span>
                <textarea
                  name="mensaje"
                  required
                  rows={5}
                  className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/55 focus:border-white/45 focus:outline-none"
                  placeholder="Cuéntanos brevemente tu necesidad."
                />
              </label>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-black text-emerald-950 transition hover:-translate-y-0.5"
                >
                  {t.send}
                </button>
              </div>
            </form>
            <div className="mt-4 text-xs text-white/55">
              También puedes escribir a{" "}
              <a href="mailto:contacto@kabinconsultores.com" className="font-semibold text-white/80 hover:text-white">
                contacto@kabinconsultores.com
              </a>
            </div>
          </div>
        </section>

      </main>

      <a
        href="/aviso-privacidad.html"
        className="fixed bottom-4 right-4 z-[60] inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-3 text-sm font-black text-white shadow-xl shadow-blue-950/40 transition hover:-translate-y-0.5 hover:bg-blue-500"
      >
        <ShieldCheck size={16} /> {t.privacy}
      </a>

      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/65 px-5 py-8 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="service-modal-title"
              className="w-full max-w-2xl rounded-[1.8rem] bg-white p-7 text-slate-900 shadow-2xl md:p-9"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.22 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-800">{t.serviceDetail}</p>
                  <h3 id="service-modal-title" className="mt-3 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
                    {selectedService.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-950 transition hover:bg-emerald-950 hover:text-white"
                  aria-label="Cerrar detalle del servicio"
                >
                  <X size={20} />
                </button>
              </div>
              <p className="mt-5 text-base leading-8 text-slate-600">{selectedService.details}</p>
              <a
                href="#contacto"
                onClick={() => setSelectedService(null)}
                className="mt-7 inline-flex items-center justify-center rounded-full bg-emerald-950 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5"
              >
                {t.request}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="border-t border-emerald-950/10 bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.4fr_0.9fr_1fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/KABIN LOGO OFICIAL BLANCO-01.png"
                alt="Kabin Consultoría"
                className="h-24 w-24 object-contain"
              />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-amber-100">
                  {t.consult}
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
              {lang === "es" ? "Servicios profesionales desde una perspectiva humana." : "Professional services from a human perspective."}
            </p>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-100">{t.footerNav}</p>
            <nav className="mt-4 grid gap-3 text-sm text-white/70">
              {t.navLinks.map((link) => (
                <a key={link.href} href={link.href} className="transition hover:text-white">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-100">{t.footerContact}</p>
            <div className="mt-4 grid gap-3 text-sm text-white/70">
              <p>{t.mexico}</p>
              <a
                href="https://wa.me/"
                className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 font-black text-emerald-950 transition hover:-translate-y-0.5"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 px-5 py-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-black uppercase tracking-[0.18em] text-amber-100">{t.social}</p>
            <div className="flex flex-wrap gap-5">
              <a
                href="https://www.instagram.com/kabin_consultoria"
                aria-label="Instagram Kabin Consultoría"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:border-white hover:text-white"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/"
                aria-label="Facebook Kabin Consultoría"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:border-white hover:text-white"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.tiktok.com/"
                aria-label="TikTok Kabin Consultoría"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:border-white hover:text-white"
              >
                <Music2 size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 px-5 py-5 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs font-semibold text-white/55 sm:flex-row sm:items-center sm:justify-between">
            <p>{t.rights}</p>
            <div className="flex gap-4">
              <a href="/aviso-privacidad.html" className="transition hover:text-white">
                {t.privacy}
              </a>
              <a href="#contacto" className="transition hover:text-white">
                {t.terms}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
