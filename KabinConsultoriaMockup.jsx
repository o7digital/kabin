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

const services = [
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

const heroSlides = [
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

const badges = [
  "Responsabilidad",
  "Honestidad",
  "Empatía",
  "Trabajo en equipo",
];

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

const values = [
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

const journey = [
  { year: "2020", title: "Fundación y contabilidad core" },
  { year: "2022", title: "Expansión a estrategia fiscal" },
  { year: "2024", title: "Lanzamiento de gestión patrimonial" },
  { year: "2026", title: "Transformación digital e IA" },
];

export default function KabinConsultoriaMockup() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const closeMenu = () => setIsMenuOpen(false);
  const active = heroSlides[currentSlide];

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
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-amber-100">Consultoría Fiscal y Financiera</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-[16.8px] font-semibold text-white/85 lg:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#contacto"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-emerald-950 transition hover:-translate-y-0.5"
            >
              Agenda una asesoría
            </a>
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
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
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
              <nav className="flex flex-col">
                {navLinks.map((link) => (
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
                  href="#contacto"
                  onClick={closeMenu}
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-black text-emerald-950"
                >
                  Agenda una asesoría
                </a>
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

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="#contacto"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-black text-emerald-950 shadow-lg shadow-black/20 transition hover:-translate-y-1"
                  >
                    Agendar asesoría <ArrowRight size={18} />
                  </a>
                  <a
                    href="https://wa.me/"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-4 text-sm font-black text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/20"
                  >
                    <MessageCircle size={18} /> Escríbenos por WhatsApp
                  </a>
                </div>

                <div className="mt-9 flex flex-wrap gap-3">
                  {badges.map((item) => (
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
            {heroSlides.map((_, index) => (
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
            <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-900">Servicios</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Servicios contables, fiscales y financieros desde una perspectiva humana.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
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
                    Ver más <ArrowRight size={15} />
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
                  Nosotros
                </p>
                <h2 className="mt-6 max-w-4xl text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl md:text-6xl">
                  Cimientos de nuestro éxito.
                </h2>
                <p className="mt-6 text-xl font-semibold leading-9 text-white sm:text-2xl">
                  KABIN Consultores nació de un concepto claro: brindar servicios profesionales desde una perspectiva humana.
                </p>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                  Creemos que detrás de cada número hay una historia, una familia, una empresa y una decisión importante.
                  Por eso acompañamos a nuestros clientes con claridad contable, estrategia fiscal, visión financiera y una
                  conversación cercana que permite cuidar su patrimonio y hacerlo crecer.
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
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#d9ad58]">Nuestra misión</p>
                <h3 className="mt-4 text-2xl font-black text-[#d9ad58]">Acompañamiento cálido y responsable.</h3>
                <p className="mt-4 text-base leading-8 text-slate-200">
                  Brindar asesorías personalizadas y acompañamiento de una manera cálida, humana, responsable y
                  profesional, para que cada cliente entienda su situación y pueda tomar decisiones con tranquilidad.
                </p>
              </article>

              <article className="rounded-[1.4rem] border border-[#d9ad58]/30 bg-white/5 p-7 md:p-9">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#d9ad58]">Nuestra visión</p>
                <h3 className="mt-4 text-2xl font-black text-[#d9ad58]">Proteger y hacer crecer su legado.</h3>
                <p className="mt-4 text-base leading-8 text-slate-200">
                  Ser uno de los consultores contables, fiscales y financieros de referencia para cuidar el patrimonio
                  de nuestros clientes, fortalecer sus operaciones y acompañar su crecimiento con visión de largo plazo.
                </p>
              </article>
            </div>

            <div className="mt-14">
              <p className="border-l-4 border-[#d9ad58] pl-5 text-sm font-black uppercase tracking-[0.24em] text-[#d9ad58]">
                Nuestros valores
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {values.map((value) => {
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
                Nuestro camino
              </p>
              <div className="mt-8 grid gap-4 border-t border-[#d9ad58] pt-6 md:grid-cols-4">
                {journey.map((item) => (
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
              Agenda una asesoría y recibe acompañamiento profesional.
            </h2>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href="#" className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 font-black text-emerald-950">
                Agenda una asesoría
              </a>
              <a
                href="https://wa.me/"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 bg-white/10 px-7 py-4 font-black text-white"
              >
                <MessageCircle size={18} /> Escríbenos por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

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
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-800">Detalle del servicio</p>
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
                Solicitar asesoría
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="border-t border-emerald-950/10 bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.4fr_0.8fr_0.8fr_1fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/KABIN LOGO OFICIAL BLANCO-01.png"
                alt="Kabin Consultoría"
                className="h-24 w-24 object-contain"
              />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-amber-100">
                  Consultoría Fiscal y Financiera
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
              Servicios profesionales desde una perspectiva humana.
            </p>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-100">Navegación</p>
            <nav className="mt-4 grid gap-3 text-sm text-white/70">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="transition hover:text-white">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-100">Servicios</p>
            <div className="mt-4 grid gap-3 text-sm text-white/70">
              {services.map((service) => (
                <a key={service.title} href="#servicios" className="transition hover:text-white">
                  {service.title}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-100">Contacto</p>
            <div className="mt-4 grid gap-3 text-sm text-white/70">
              <p>Atención en México</p>
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
            <p className="font-black uppercase tracking-[0.18em] text-amber-100">Redes sociales</p>
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
            <p>© 2026 Kabin Consultoría Fiscal y Financiera. Todos los derechos reservados.</p>
            <div className="flex gap-4">
              <a href="#contacto" className="transition hover:text-white">
                Aviso de privacidad
              </a>
              <a href="#contacto" className="transition hover:text-white">
                Términos
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
