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
import OliviaChat from "./src/OliviaChat.jsx";

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
    icon: ShieldCheck,
    title: "Protección financiera y patrimonial",
    text: "Soluciones individuales y colectivas para proteger personas, activos y patrimonio.",
    details:
      "Integramos estrategias de protección financiera y patrimonial mediante seguros de invalidez y fallecimiento, gastos médicos mayores, auto y daños. El objetivo es reducir exposición ante imprevistos y dar mayor estabilidad a familias, socios, colaboradores o empresas.",
  },
  {
    icon: PiggyBank,
    title: "Ahorro e inversión",
    text: "Planes para acumular capital, cumplir metas y fortalecer decisiones financieras.",
    details:
      "Diseñamos estrategias de ahorro e inversión para metas específicas, planes privados de ahorro para el retiro (PPR), educación privada de los hijos, inversión en mercado de valores y mecanismos de ahorro e inversión con visión fiscal para empresas.",
  },
  {
    icon: Landmark,
    title: "Trascendencia y continuidad",
    text: "Planeación para herencias, continuidad de negocios y protección del legado.",
    details:
      "Acompañamos la planeación de herencias con flujo de efectivo inmediato, protocolos para la continuidad de negocios y planeación patrimonial. Buscamos que el patrimonio y la empresa tengan orden, liquidez y continuidad ante escenarios clave.",
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
  {
    icon: ShieldCheck,
    title: "Financial and asset protection",
    text: "Individual and collective solutions to protect people, assets, and wealth.",
    details:
      "We structure protection strategies through disability and life insurance, major medical expenses, auto, and damage coverage. The goal is to reduce exposure to unexpected events and give more stability to families, partners, key employees, or companies.",
  },
  {
    icon: PiggyBank,
    title: "Savings and investment strategies",
    text: "Plans to build capital, reach specific goals, and support financial decisions.",
    details:
      "We design savings and investment strategies for specific goals, private retirement savings plans, private education funding, stock market investment, and tax-aware savings and investment mechanisms for companies.",
  },
  {
    icon: Landmark,
    title: "Legacy and continuity",
    text: "Planning for inheritance, business continuity, and long-term asset protection.",
    details:
      "We support inheritance planning with immediate cash flow, business continuity protocols, and asset planning so families and companies can preserve order, liquidity, and continuity in key scenarios.",
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
  { href: "#nosotros", label: "Nosotros" },
  { href: "#seguros", label: "Seguros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Contacto" },
];

const navLinksEn = [
  { href: "#inicio", label: "Home" },
  { href: "#nosotros", label: "About" },
  { href: "#seguros", label: "Insurance" },
  { href: "#servicios", label: "Services" },
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
  { year: "1980", title: "Fundación y contabilidad core" },
  { year: "2022", title: "Expansión a estrategia fiscal" },
  { year: "2024", title: "Lanzamiento de gestión patrimonial" },
  { year: "2026", title: "Transformación digital e IA" },
];
const journeyEn = [
  { year: "1980", title: "Foundation and core accounting" },
  { year: "2022", title: "Expansion into tax strategy" },
  { year: "2024", title: "Asset management launch" },
  { year: "2026", title: "Digital transformation and AI" },
];

const insuranceHighlightsEs = [
  {
    icon: ShieldCheck,
    title: "Protección financiera",
    text: "Seguros de vida, invalidez, gastos médicos mayores, auto y daños para reducir exposición ante imprevistos.",
  },
  {
    icon: PiggyBank,
    title: "Retiro con visión fiscal",
    text: "Planes personales de retiro y estrategias de ahorro que pueden aprovechar beneficios de los artículos 151 y 185 de la LISR.",
  },
  {
    icon: Landmark,
    title: "Continuidad patrimonial",
    text: "Liquidez para herencias, continuidad de negocios y protección del legado familiar o empresarial.",
  },
];

const insuranceHighlightsEn = [
  {
    icon: ShieldCheck,
    title: "Financial protection",
    text: "Life, disability, major medical, auto, and damage coverage to reduce exposure to unexpected events.",
  },
  {
    icon: PiggyBank,
    title: "Tax-aware retirement",
    text: "Private retirement plans and savings strategies that may use Mexican LISR articles 151 and 185 benefits.",
  },
  {
    icon: Landmark,
    title: "Legacy continuity",
    text: "Liquidity for inheritance, business continuity, and family or company asset protection.",
  },
];

const isrBrackets2024 = [
  { min: 0.01, max: 7735, fixed: 0, rate: 0.0192 },
  { min: 7735.01, max: 65651.07, fixed: 148.51, rate: 0.064 },
  { min: 65651.08, max: 115375.9, fixed: 3855.14, rate: 0.1088 },
  { min: 115375.91, max: 134119.41, fixed: 9265.2, rate: 0.16 },
  { min: 134119.42, max: 160577.65, fixed: 12264.16, rate: 0.1792 },
  { min: 160577.66, max: 323862, fixed: 17005.47, rate: 0.2136 },
  { min: 323862.01, max: 510451, fixed: 51883.01, rate: 0.2352 },
  { min: 510451.01, max: 974535.03, fixed: 95768.74, rate: 0.3 },
  { min: 974535.04, max: 1299380.04, fixed: 234993.95, rate: 0.32 },
  { min: 1299380.05, max: 3898140.12, fixed: 338944.34, rate: 0.34 },
  { min: 3898140.13, max: Infinity, fixed: 1222522.76, rate: 0.35 },
];

const umaAnnual2024 = 39606.36;
const art185Cap = 152000;

const calculateAnnualIsr = (base) => {
  const taxable = Math.max(Number(base) || 0, 0);
  if (taxable <= 0) return 0;
  const bracket = isrBrackets2024.find((item) => taxable >= item.min && taxable <= item.max) || isrBrackets2024[isrBrackets2024.length - 1];
  return Math.max((taxable - bracket.min) * bracket.rate + bracket.fixed, 0);
};

const formatMxn = (value) =>
  new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(Number.isFinite(value) ? value : 0);

export default function KabinConsultoriaMockup() {
  const isEnglishPath = typeof window !== "undefined" && window.location.pathname.startsWith("/en");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lang, setLang] = useState(isEnglishPath ? "en" : "es");
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [insuranceInputs, setInsuranceInputs] = useState({
    income: "850000",
    otherIncome: "0",
    medical: "18000",
    funeral: "0",
    donations: "5000",
    gmm: "22000",
    mortgage: "0",
    transport: "0",
    tuition: "0",
    art151: "65000",
    art185: "40000",
  });

  const t = lang === "es"
    ? {
        navLinks: navLinksEs, badges: badgesEs, heroSlides: heroSlidesEs, services: servicesEs, values: valuesEs, journey: journeyEs, insuranceHighlights: insuranceHighlightsEs,
        consult: "Consultoría Fiscal y Financiera", menuOpen: "Abrir menú", menuClose: "Cerrar menú",
        servicesTitle: "Servicios", servicesHeading: "Servicios contables, fiscales, financieros y patrimoniales desde una perspectiva humana.", readMore: "Ver más",
        about: "Nosotros", pillars: "Cimientos de nuestro éxito.", concept: "KABIN Consultores nació de un concepto claro: brindar servicios profesionales desde una perspectiva humana.",
        aboutText: "Creemos que detrás de cada número hay una historia, una familia, una empresa y una decisión importante. Por eso acompañamos a nuestros clientes con claridad contable, estrategia fiscal, visión financiera y una conversación cercana que permite cuidar su patrimonio y hacerlo crecer.",
        mission: "Nuestra misión", missionTitle: "Acompañamiento cálido y responsable.", missionText: "Brindar asesorías personalizadas y acompañamiento de una manera cálida, humana, responsable y profesional, para que cada cliente entienda su situación y pueda tomar decisiones con tranquilidad.",
        vision: "Nuestra visión", visionTitle: "Proteger y hacer crecer su legado.", visionText: "Ser uno de los consultores contables, fiscales y financieros de referencia para cuidar el patrimonio de nuestros clientes, fortalecer sus operaciones y acompañar su crecimiento con visión de largo plazo.",
        valuesTitle: "Nuestros valores", path: "Nuestro camino",
        insuranceTitle: "Seguros", insuranceHeading: "Protección, ahorro y retiro con estrategia fiscal.", insuranceText: "Integramos seguros y planes de retiro dentro de una conversación patrimonial: qué proteger, cuánto ahorrar y qué beneficio fiscal podría existir según ingresos y deducciones.",
        calculatorTitle: "Calculadora de impuestos 2024", calculatorText: "Herramienta indicativa para personas físicas en sueldos y salarios. Captura los datos del cliente y compara tres escenarios.",
        incomeSection: "① Ingresos", deductionsSection: "② Deducciones personales", retirementSection: "③ Deducciones enfocadas al retiro", resultsSection: "④ Resultados",
        tableConcept: "Concepto", annualAmount: "Monto anual", deductibleAmount: "Monto a deducir", income: "Ingreso anual bruto", otherIncome: "Otros ingresos anuales", totalIncome: "Total de ingresos",
        medical: "Honorarios médicos y dentales", funeral: "Gastos funerarios", donations: "Donativos", gmm: "Primas de gastos médicos mayores", mortgage: "Intereses reales hipotecarios", transport: "Transporte escolar", tuition: "Colegiaturas",
        art151: "Plan Personal de Retiro Art. 151", art185: "Estímulo fiscal Art. 185", withoutDeductions: "Sin deducciones", withPersonal: "Con deducciones personales", withRetirement: "Con deducciones y retiro", isrToPay: "ISR estimado", taxBenefit: "Beneficio fiscal", deductibleApplied: "Deducible aplicado", disclaimer: "Resultado aproximado; no sustituye asesoría fiscal ni representa criterio de autoridad.",
        contactTitle: "Recibe acompañamiento profesional.", contactText: "Completa el formulario y te contactaremos para entender tu situación y proponerte una ruta de trabajo.",
        fullname: "Nombre completo", email: "Correo electrónico", phone: "Teléfono", interest: "Servicio de interés", message: "Mensaje", send: "Enviar solicitud",
        privacy: "Aviso de Privacidad", footerNav: "Navegación", footerContact: "Contacto", mexico: "Atención en México", social: "Redes sociales",
        rights: "© 2026 Kabin Consultoría Fiscal y Financiera. Todos los derechos reservados.", terms: "Términos", serviceDetail: "Detalle del servicio", request: "Solicitar asesoría",
      }
    : {
        navLinks: navLinksEn, badges: badgesEn, heroSlides: heroSlidesEn, services: servicesEn, values: valuesEn, journey: journeyEn, insuranceHighlights: insuranceHighlightsEn,
        consult: "Tax and Financial Consulting", menuOpen: "Open menu", menuClose: "Close menu",
        servicesTitle: "Services", servicesHeading: "Accounting, tax, financial, and asset-planning services from a human perspective.", readMore: "Read more",
        about: "About", pillars: "Foundations of our success.", concept: "KABIN Consultores was born from a clear concept: delivering professional services from a human perspective.",
        aboutText: "We believe that behind every number there is a story, a family, a company, and an important decision.",
        mission: "Our mission", missionTitle: "Warm and responsible support.", missionText: "Provide personalized advisory and support in a warm, human, responsible, and professional way.",
        vision: "Our vision", visionTitle: "Protect and grow your legacy.", visionText: "To become a leading accounting, tax, and financial consulting firm focused on protecting and growing client assets.",
        valuesTitle: "Our values", path: "Our journey",
        insuranceTitle: "Insurance", insuranceHeading: "Protection, savings, and retirement with tax strategy.", insuranceText: "We integrate insurance and retirement plans into an asset-planning conversation: what to protect, how much to save, and which tax benefit may apply.",
        calculatorTitle: "2024 tax calculator", calculatorText: "Indicative tool for individuals under salaries and wages in Mexico. Enter client data and compare three scenarios.",
        incomeSection: "① Income", deductionsSection: "② Personal deductions", retirementSection: "③ Retirement-focused deductions", resultsSection: "④ Results",
        tableConcept: "Concept", annualAmount: "Annual amount", deductibleAmount: "Deductible amount", income: "Annual gross income", otherIncome: "Other annual income", totalIncome: "Total income",
        medical: "Medical and dental fees", funeral: "Funeral expenses", donations: "Donations", gmm: "Major medical insurance premiums", mortgage: "Mortgage real interest", transport: "School transportation", tuition: "Tuition",
        art151: "Private Retirement Plan Art. 151", art185: "Tax incentive Art. 185", withoutDeductions: "No deductions", withPersonal: "With personal deductions", withRetirement: "With deductions and retirement", isrToPay: "Estimated ISR", taxBenefit: "Tax benefit", deductibleApplied: "Applied deductible", disclaimer: "Approximate result; it does not replace tax advice or represent an authority criterion.",
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
  const parsedInsurance = {
    income: Number(insuranceInputs.income) || 0,
    otherIncome: Number(insuranceInputs.otherIncome) || 0,
    medical: Number(insuranceInputs.medical) || 0,
    funeral: Number(insuranceInputs.funeral) || 0,
    donations: Number(insuranceInputs.donations) || 0,
    gmm: Number(insuranceInputs.gmm) || 0,
    mortgage: Number(insuranceInputs.mortgage) || 0,
    transport: Number(insuranceInputs.transport) || 0,
    tuition: Number(insuranceInputs.tuition) || 0,
    art151: Number(insuranceInputs.art151) || 0,
    art185: Number(insuranceInputs.art185) || 0,
  };
  const totalIncome = parsedInsurance.income + parsedInsurance.otherIncome;
  const personalCap = Math.min(totalIncome * 0.15, umaAnnual2024 * 5);
  const donationCap = totalIncome * 0.07;
  const funeralCap = umaAnnual2024;
  const mortgageCap = 750000 * 7.646804;
  const art151Cap = Math.min(totalIncome * 0.1, umaAnnual2024 * 5);
  const personalRows = [
    { field: "medical", label: t.medical, cap: Infinity },
    { field: "funeral", label: t.funeral, cap: funeralCap },
    { field: "donations", label: t.donations, cap: donationCap },
    { field: "gmm", label: t.gmm, cap: Infinity },
    { field: "mortgage", label: t.mortgage, cap: mortgageCap },
    { field: "transport", label: t.transport, cap: Infinity },
    { field: "tuition", label: t.tuition, cap: 24500 },
  ].map((row) => ({
    ...row,
    amount: parsedInsurance[row.field],
    deductible: Math.min(parsedInsurance[row.field], row.cap),
  }));
  const appliedPersonal = Math.min(
    personalRows.reduce((sum, row) => sum + row.deductible, 0),
    personalCap,
  );
  const appliedArt151 = Math.min(parsedInsurance.art151, art151Cap);
  const appliedArt185 = Math.min(parsedInsurance.art185, art185Cap);
  const isrWithoutDeductions = calculateAnnualIsr(totalIncome);
  const isrWithPersonal = calculateAnnualIsr(totalIncome - appliedPersonal);
  const isrWithRetirement = calculateAnnualIsr(totalIncome - appliedPersonal - appliedArt151 - appliedArt185);
  const personalBenefit = Math.max(isrWithoutDeductions - isrWithPersonal, 0);
  const retirementBenefit = Math.max(isrWithoutDeductions - isrWithRetirement, 0);
  const totalAppliedDeductible = appliedPersonal + appliedArt151 + appliedArt185;
  const retirementRows = [
    { field: "art185", label: t.art185, amount: parsedInsurance.art185, deductible: appliedArt185, cap: art185Cap },
    { field: "art151", label: t.art151, amount: parsedInsurance.art151, deductible: appliedArt151, cap: art151Cap },
  ];
  const scenarioRows = [
    { label: t.withoutDeductions, isr: isrWithoutDeductions, benefit: 0, deductible: 0 },
    { label: t.withPersonal, isr: isrWithPersonal, benefit: personalBenefit, deductible: appliedPersonal },
    { label: t.withRetirement, isr: isrWithRetirement, benefit: retirementBenefit, deductible: totalAppliedDeductible },
  ];
  const updateInsuranceInput = (field, value) => {
    setInsuranceInputs((current) => ({
      ...current,
      [field]: value.replace(/[^\d.]/g, ""),
    }));
  };

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

        <section id="seguros" className="bg-[#f9f6ef] py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-900">{t.insuranceTitle}</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
                {t.insuranceHeading}
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                {t.insuranceText}
              </p>

              <div className="mt-8 grid gap-4">
                {t.insuranceHighlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <article key={item.title} className="flex gap-4 rounded-2xl border border-emerald-950/10 bg-white p-5 shadow-sm">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0d2340] text-[#d9ad58]">
                        <Icon size={23} />
                      </div>
                      <div>
                        <h3 className="text-lg font-black text-slate-950">{item.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="overflow-hidden rounded-[1.4rem] border border-slate-300 bg-white shadow-xl shadow-slate-900/10">
              <div className="flex items-center gap-4 border-b border-slate-300 bg-[#17385f] px-5 py-4 text-white">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/12">
                  <Calculator size={23} />
                </div>
                <div>
                  <h3 className="text-2xl font-black tracking-tight">{t.calculatorTitle}</h3>
                  <p className="mt-1 text-sm leading-6 text-white/75">{t.calculatorText}</p>
                </div>
              </div>

              <div className="bg-[#eef2f6] p-4 md:p-5">
                <div className="grid gap-4">
                  <div className="overflow-hidden rounded-xl border border-slate-300 bg-white">
                    <div className="bg-[#d9ad58] px-4 py-2 text-sm font-black uppercase tracking-[0.16em] text-slate-950">
                      {t.incomeSection}
                    </div>
                    <div className="grid grid-cols-[1fr_150px_150px] bg-[#17385f] text-xs font-black uppercase tracking-[0.12em] text-white max-sm:hidden">
                      <div className="px-4 py-2">{t.tableConcept}</div>
                      <div className="px-4 py-2 text-right">{t.annualAmount}</div>
                      <div className="px-4 py-2 text-right">{t.deductibleAmount}</div>
                    </div>
                    {[
                      ["income", t.income, parsedInsurance.income],
                      ["otherIncome", t.otherIncome, parsedInsurance.otherIncome],
                    ].map(([field, label, value]) => (
                      <div key={field} className="grid items-center gap-2 border-t border-slate-200 px-4 py-3 sm:grid-cols-[1fr_150px_150px]">
                        <label htmlFor={`insurance-${field}`} className="text-sm font-bold text-slate-700">{label}</label>
                        <input
                          id={`insurance-${field}`}
                          type="text"
                          inputMode="decimal"
                          value={insuranceInputs[field]}
                          onChange={(event) => updateInsuranceInput(field, event.target.value)}
                          className="w-full border border-slate-300 bg-[#fff7d7] px-3 py-2 text-right text-sm font-black text-slate-950 outline-none focus:border-emerald-800"
                        />
                        <div className="border border-slate-200 bg-slate-100 px-3 py-2 text-right text-sm font-black text-slate-500">
                          {formatMxn(value)}
                        </div>
                      </div>
                    ))}
                    <div className="grid items-center gap-2 border-t border-slate-300 bg-slate-100 px-4 py-3 sm:grid-cols-[1fr_150px_150px]">
                      <div className="text-sm font-black uppercase tracking-[0.12em] text-slate-700">{t.totalIncome}</div>
                      <div className="sm:col-span-2 text-right text-lg font-black text-emerald-950">{formatMxn(totalIncome)}</div>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-xl border border-slate-300 bg-white">
                    <div className="bg-[#d9ad58] px-4 py-2 text-sm font-black uppercase tracking-[0.16em] text-slate-950">
                      {t.deductionsSection}
                    </div>
                    <div className="grid grid-cols-[1fr_150px_150px] bg-[#17385f] text-xs font-black uppercase tracking-[0.12em] text-white max-sm:hidden">
                      <div className="px-4 py-2">{t.tableConcept}</div>
                      <div className="px-4 py-2 text-right">{t.annualAmount}</div>
                      <div className="px-4 py-2 text-right">{t.deductibleAmount}</div>
                    </div>
                    {personalRows.map((row) => (
                      <div key={row.field} className="grid items-center gap-2 border-t border-slate-200 px-4 py-3 sm:grid-cols-[1fr_150px_150px]">
                        <label htmlFor={`insurance-${row.field}`} className="text-sm font-bold text-slate-700">{row.label}</label>
                        <input
                          id={`insurance-${row.field}`}
                          type="text"
                          inputMode="decimal"
                          value={insuranceInputs[row.field]}
                          onChange={(event) => updateInsuranceInput(row.field, event.target.value)}
                          className="w-full border border-slate-300 bg-[#fff7d7] px-3 py-2 text-right text-sm font-black text-slate-950 outline-none focus:border-emerald-800"
                        />
                        <div className="border border-slate-200 bg-slate-100 px-3 py-2 text-right text-sm font-black text-slate-600">
                          {formatMxn(row.deductible)}
                        </div>
                      </div>
                    ))}
                    <div className="grid items-center gap-2 border-t border-slate-300 bg-slate-100 px-4 py-3 sm:grid-cols-[1fr_150px_150px]">
                      <div className="text-sm font-black uppercase tracking-[0.12em] text-slate-700">{t.deductibleApplied}</div>
                      <div className="sm:col-span-2 text-right text-lg font-black text-emerald-950">{formatMxn(appliedPersonal)}</div>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-xl border border-slate-300 bg-white">
                    <div className="bg-[#d9ad58] px-4 py-2 text-sm font-black uppercase tracking-[0.16em] text-slate-950">
                      {t.retirementSection}
                    </div>
                    {retirementRows.map((row) => (
                      <div key={row.field} className="grid items-center gap-2 border-t border-slate-200 px-4 py-3 sm:grid-cols-[1fr_150px_150px]">
                        <label htmlFor={`insurance-${row.field}`} className="text-sm font-bold text-slate-700">{row.label}</label>
                        <input
                          id={`insurance-${row.field}`}
                          type="text"
                          inputMode="decimal"
                          value={insuranceInputs[row.field]}
                          onChange={(event) => updateInsuranceInput(row.field, event.target.value)}
                          className="w-full border border-slate-300 bg-[#fff7d7] px-3 py-2 text-right text-sm font-black text-slate-950 outline-none focus:border-emerald-800"
                        />
                        <div className="border border-slate-200 bg-slate-100 px-3 py-2 text-right text-sm font-black text-slate-600">
                          {formatMxn(row.deductible)}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="overflow-hidden rounded-xl border border-slate-300 bg-white">
                    <div className="bg-[#17385f] px-4 py-2 text-sm font-black uppercase tracking-[0.16em] text-white">
                      {t.resultsSection}
                    </div>
                    <div className="grid grid-cols-[1fr_145px_145px_145px] bg-slate-100 text-xs font-black uppercase tracking-[0.1em] text-slate-600 max-md:hidden">
                      <div className="px-4 py-2">{t.tableConcept}</div>
                      <div className="px-4 py-2 text-right">{t.isrToPay}</div>
                      <div className="px-4 py-2 text-right">{t.taxBenefit}</div>
                      <div className="px-4 py-2 text-right">{t.deductibleApplied}</div>
                    </div>
                    {scenarioRows.map((row) => (
                      <div key={row.label} className="grid gap-2 border-t border-slate-200 px-4 py-3 md:grid-cols-[1fr_145px_145px_145px]">
                        <div className="text-sm font-black text-slate-800">{row.label}</div>
                        <div className="text-right text-sm font-black text-slate-950">{formatMxn(row.isr)}</div>
                        <div className="text-right text-sm font-black text-emerald-800">{formatMxn(row.benefit)}</div>
                        <div className="text-right text-sm font-black text-slate-600">{formatMxn(row.deductible)}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="mt-4 text-xs leading-6 text-slate-500">{t.disclaimer}</p>
              </div>
            </div>
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
      <OliviaChat lang={lang} />
    </div>
  );
}
