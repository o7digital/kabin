import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Calculator,
  Facebook,
  FileText,
  Instagram,
  Menu,
  MessageCircle,
  Music2,
  PiggyBank,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Servicios contables",
    text: "Informes, estados financieros y procesos contables para dar claridad a tu operación.",
  },
  {
    icon: FileText,
    title: "Servicios fiscales",
    text: "Estrategia, cumplimiento y acompañamiento fiscal responsable para cuidar tu patrimonio.",
  },
  {
    icon: ShieldCheck,
    title: "Servicios financieros",
    text: "Asesoría para tomar decisiones financieras claras y orientar el crecimiento de tus recursos.",
  },
  {
    icon: PiggyBank,
    title: "Acompañamiento profesional",
    text: "Atención cercana, humana y personalizada para personas y empresas.",
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
  "Responsabilidad",
  "Honestidad",
  "Empatía",
];

export default function KabinConsultoriaMockup() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      setParallaxOffset(Math.min(y * 0.2, 120));
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
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-slate-950/45 backdrop-blur-xl">
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

          <nav className="hidden items-center gap-7 text-sm font-semibold text-white/85 lg:flex">
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

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="group rounded-[1.8rem] border border-emerald-900/10 bg-white p-6 shadow-sm transition hover:-translate-y-1.5 hover:shadow-xl"
                >
                  <div className="mb-5 inline-flex rounded-2xl bg-emerald-50 p-3.5 text-emerald-950 transition group-hover:bg-emerald-950 group-hover:text-white">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-black text-slate-900">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{service.text}</p>
                  <a href="#contacto" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-emerald-900">
                    Ver más <ArrowRight size={15} />
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        <section id="nosotros" className="bg-emerald-950 py-16 text-white lg:py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-amber-200">Nosotros</p>
            <h2 className="mt-3 max-w-4xl text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
              Misión y visión con trato humano y responsabilidad profesional.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-emerald-50/85 sm:text-lg">
              Nuestra misión es brindar asesorías personalizadas y acompañamiento de una manera cálida, humana, responsable y
              profesional. Nuestra visión es ser unos de los mejores consultores contables, fiscales y financieros para cuidar el
              patrimonio de nuestros clientes y hacerlo crecer.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-4 md:grid-cols-3">
            {values.map((value) => (
              <article key={value} className="rounded-[1.8rem] bg-white p-6 shadow-sm">
                <div className="mb-7 h-28 rounded-3xl bg-gradient-to-br from-emerald-100 to-amber-100" />
                <p className="text-xs font-black uppercase tracking-[0.14em] text-emerald-800">Valores</p>
                <h3 className="mt-2 text-xl font-black text-slate-900">{value}</h3>
              </article>
            ))}
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
