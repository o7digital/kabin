import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Calculator,
  CalendarDays,
  CheckCircle2,
  Clock3,
  CreditCard,
  Facebook,
  FileText,
  HeartHandshake,
  Instagram,
  Landmark,
  Menu,
  MessageCircle,
  Music2,
  Newspaper,
  PackageCheck,
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

const seoKeywordsEs = [
  "consultoría fiscal México Querétaro",
  "asesoría fiscal para empresas México Querétaro",
  "consultoría contable México Querétaro",
  "servicios contables para empresas México Querétaro",
  "contador para PyME México Querétaro",
  "estrategia fiscal para empresas México Querétaro",
  "planeación fiscal México Querétaro",
  "auditoría financiera México Querétaro",
  "cumplimiento fiscal empresarial México Querétaro",
  "consultoría financiera para empresas México Querétaro",
  "gestión patrimonial México Querétaro",
  "protección patrimonial México Querétaro",
  "planeación financiera personal México Querétaro",
  "plan privado de retiro PPR México Querétaro",
  "gobierno corporativo México Querétaro",
];

const seoKeywordsEn = [
  "tax consulting Mexico Queretaro",
  "tax advisory for businesses Mexico Queretaro",
  "accounting consulting Mexico Queretaro",
  "accounting services for businesses Mexico Queretaro",
  "accountant for small businesses Mexico Queretaro",
  "corporate tax strategy Mexico Queretaro",
  "tax planning Mexico Queretaro",
  "financial audit Mexico Queretaro",
  "corporate tax compliance Mexico Queretaro",
  "financial consulting for businesses Mexico Queretaro",
  "wealth management Mexico Queretaro",
  "asset protection Mexico Queretaro",
  "personal financial planning Mexico Queretaro",
  "private retirement plan Mexico Queretaro",
  "corporate governance Mexico Queretaro",
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

function OfflineOliviaChat() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-5 right-5 z-[9999] font-sans">
      {open && (
        <section className="mb-3 w-[min(390px,calc(100vw-28px))] overflow-hidden rounded-2xl border border-amber-300/60 bg-emerald-950 text-white shadow-2xl">
          <header className="flex items-center justify-between px-5 py-4">
            <div><strong className="block text-xl text-amber-200">Olivia AI</strong><small className="font-bold text-red-300">Offline</small></div>
            <button type="button" onClick={() => setOpen(false)} className="text-3xl">×</button>
          </header>
          <div className="min-h-48 space-y-3 bg-emerald-50 p-5 text-emerald-950"><p className="w-fit rounded-xl bg-white px-4 py-3 shadow">Offline</p></div>
          <div className="flex gap-2 p-3"><input disabled placeholder="Offline" className="min-w-0 flex-1 rounded-xl bg-white px-4 py-3 text-emerald-950 opacity-60"/><button disabled className="rounded-xl bg-amber-200 px-4 font-black text-emerald-950 opacity-60">Send</button></div>
        </section>
      )}
      <button type="button" onClick={() => setOpen(true)} className="ml-auto flex items-center gap-2 rounded-full border border-amber-300/60 bg-emerald-950 px-4 py-3 text-white shadow-xl"><b className="grid h-8 w-8 place-items-center rounded-full bg-amber-200 text-emerald-950">O</b>Offline</button>
    </div>
  );
}

const navLinksEs = [
  { href: "/", label: "Inicio" },
  { href: "/seguros/", label: "Seguros" },
  { href: "/ecommerce/", label: "Ecommerce" },
  { href: "/eventos-noticias/", label: "Eventos y Noticias" },
  { href: "/contacto/", label: "Contacto" },
];

const navLinksEn = [
  { href: "/en/", label: "Home" },
  { href: "/en/insurance/", label: "Insurance" },
  { href: "/en/ecommerce/", label: "Ecommerce" },
  { href: "/en/events-news/", label: "Events & News" },
  { href: "/en/contact/", label: "Contact" },
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

const ecommercePackagesEs = [
  {
    icon: Calculator,
    title: "Diagnóstico fiscal express",
    price: 2900,
    cadence: "Desde",
    tag: "Entrada",
    description: "Revisión inicial para detectar obligaciones, riesgos y oportunidades fiscales.",
    includes: ["Cuestionario guiado", "Revisión de documentos clave", "Resumen ejecutivo", "Ruta de acción inicial"],
    delivery: "Entrega estimada: 3 días hábiles",
  },
  {
    icon: FileText,
    title: "Declaración anual asistida",
    price: 5200,
    cadence: "por ejercicio",
    tag: "Alta demanda",
    description: "Acompañamiento para preparar información, deducciones y soporte de declaración anual.",
    includes: ["Checklist documental", "Carga de deducciones", "Revisión de constancias", "Reporte de resultado"],
    delivery: "Entrega estimada: 5 a 7 días hábiles",
  },
  {
    icon: Building2,
    title: "Paquete empresa ordenada",
    price: 12500,
    cadence: "desde",
    tag: "PyME",
    description: "Soporte recurrente para contabilidad, cumplimiento, reportes y seguimiento operativo.",
    includes: ["Contabilidad mensual", "Calendario fiscal", "Reporte directivo", "Sesión mensual"],
    delivery: "Inicio en 2 días hábiles",
  },
  {
    icon: Scale,
    title: "Auditoría y control interno",
    price: 8900,
    cadence: "desde",
    tag: "Control",
    description: "Revisión focalizada de procesos, soportes y controles para detectar riesgos y áreas de mejora.",
    includes: ["Mapa de riesgos", "Muestra documental", "Hallazgos prioritarios", "Plan de corrección"],
    delivery: "Entrega estimada: 7 días hábiles",
  },
  {
    icon: PiggyBank,
    title: "Plan patrimonial y retiro",
    price: 7500,
    cadence: "por estrategia",
    tag: "Patrimonio",
    description: "Diagnóstico y ruta de ahorro, protección y retiro alineada con tus metas personales.",
    includes: ["Perfil financiero", "Proyección de retiro", "Escenarios de ahorro", "Sesión de estrategia"],
    delivery: "Entrega estimada: 5 días hábiles",
  },
  {
    icon: ShieldCheck,
    title: "Gobierno corporativo esencial",
    price: 9800,
    cadence: "desde",
    tag: "Empresa",
    description: "Estructura inicial para ordenar decisiones, responsabilidades y acuerdos entre socios.",
    includes: ["Diagnóstico societario", "Matriz de roles", "Protocolo de acuerdos", "Ruta de implementación"],
    delivery: "Entrega estimada: 8 días hábiles",
  },
];

const ecommercePackagesEn = [
  {
    icon: Calculator,
    title: "Express tax diagnosis",
    price: 2900,
    cadence: "one-time",
    tag: "Entry",
    description: "Initial review to identify obligations, risks, and tax opportunities.",
    includes: ["Guided questionnaire", "Key document review", "Executive summary", "Initial action plan"],
    delivery: "Estimated delivery: 3 business days",
  },
  {
    icon: FileText,
    title: "Assisted annual filing",
    price: 5200,
    cadence: "per tax year",
    tag: "Popular",
    description: "Support to prepare information, deductions, and annual filing documentation.",
    includes: ["Document checklist", "Deduction review", "Certificate review", "Result report"],
    delivery: "Estimated delivery: 5 to 7 business days",
  },
  {
    icon: Building2,
    title: "Organized company package",
    price: 12500,
    cadence: "monthly",
    tag: "SMB",
    description: "Recurring support for accounting, compliance, reporting, and operating follow-up.",
    includes: ["Monthly accounting", "Tax calendar", "Management report", "Monthly session"],
    delivery: "Start in 2 business days",
  },
  {
    icon: Scale,
    title: "Audit and internal control",
    price: 8900,
    cadence: "from",
    tag: "Control",
    description: "Focused review of processes, supporting documents, and controls to identify risks and improvements.",
    includes: ["Risk map", "Document sample", "Priority findings", "Correction plan"],
    delivery: "Estimated delivery: 7 business days",
  },
  {
    icon: PiggyBank,
    title: "Wealth and retirement plan",
    price: 7500,
    cadence: "per strategy",
    tag: "Wealth",
    description: "Savings, protection, and retirement roadmap aligned with your personal goals.",
    includes: ["Financial profile", "Retirement projection", "Savings scenarios", "Strategy session"],
    delivery: "Estimated delivery: 5 business days",
  },
  {
    icon: ShieldCheck,
    title: "Essential corporate governance",
    price: 9800,
    cadence: "from",
    tag: "Business",
    description: "Initial structure to organize decisions, responsibilities, and agreements among partners.",
    includes: ["Corporate assessment", "Role matrix", "Agreement protocol", "Implementation roadmap"],
    delivery: "Estimated delivery: 8 business days",
  },
];

const blogEventsEs = [
  { day: "25", month: "Mayo", title: "Dia del contador", type: "Efemeride", text: "Reconocimiento al orden, criterio y responsabilidad contable." },
  { day: "15", month: "Mayo", title: "Dia del maestro", type: "Comunidad", text: "Conversacion sobre educacion financiera para familias y docentes." },
  { day: "18", month: "Jun", title: "Webinario fiscal PyME", type: "Webinario", text: "Checklist para cierres mensuales, deducciones y obligaciones clave." },
  { day: "09", month: "Jul", title: "Patrimonio y retiro", type: "Taller", text: "Planeacion de ahorro, proteccion y continuidad familiar." },
];

const blogPostsEs = [
  { slug: "cierre-mes-fiscal", category: "Fiscal", date: "18 Jun 2026", read: "4 min", image: "/carlos-muza-hpjSkU2UYSU-unsplash.webp", title: "Que revisar antes de cerrar el mes fiscal", text: "Una guia practica para ordenar facturas, pagos, deducciones y pendientes antes de presentar informacion contable." },
  { slug: "indicadores-salud-empresa", category: "Finanzas", date: "05 Jun 2026", read: "3 min", image: "/blake-wisz-GFrBMipOd_E-unsplash.webp", title: "Indicadores simples para entender la salud de tu empresa", text: "Margen, flujo, obligaciones y reservas: cuatro lecturas que ayudan a tomar mejores decisiones." },
  { slug: "retiro-seguros-patrimonio", category: "Patrimonio", date: "22 May 2026", read: "5 min", image: "/jakub-zerdzicki-LNnmSumlwO4-unsplash.webp", title: "Retiro, seguros y patrimonio: por donde empezar", text: "Como integrar proteccion financiera y ahorro sin perder de vista el impacto fiscal." },
];

const blogEventsEn = [
  { day: "25", month: "May", title: "Accountant's Day", type: "Date", text: "A recognition of accounting discipline, judgment, and responsibility." },
  { day: "15", month: "May", title: "Teacher's Day", type: "Community", text: "A conversation about financial education for families and teachers." },
  { day: "18", month: "Jun", title: "SMB tax webinar", type: "Webinar", text: "A checklist for monthly closings, deductions, and key obligations." },
  { day: "09", month: "Jul", title: "Wealth and retirement", type: "Workshop", text: "Savings, protection, and family continuity planning." },
];

const blogPostsEn = [
  { slug: "monthly-tax-closing", category: "Tax", date: "Jun 18, 2026", read: "4 min", image: "/carlos-muza-hpjSkU2UYSU-unsplash.webp", title: "What to review before monthly tax closing", text: "A practical guide to organize invoices, payments, deductions, and accounting pending items." },
  { slug: "business-health-indicators", category: "Finance", date: "Jun 5, 2026", read: "3 min", image: "/blake-wisz-GFrBMipOd_E-unsplash.webp", title: "Simple indicators to understand business health", text: "Margin, cash flow, obligations, and reserves: four readings that support better decisions." },
  { slug: "retirement-insurance-wealth", category: "Wealth", date: "May 22, 2026", read: "5 min", image: "/jakub-zerdzicki-LNnmSumlwO4-unsplash.webp", title: "Retirement, insurance, and wealth: where to start", text: "How to integrate financial protection and savings while keeping tax impact in view." },
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

const formatMxnWithDecimals = (value, fractionDigits = 0) =>
  new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(Number.isFinite(value) ? value : 0);

const whatsappUrl = "https://wa.me/5214422371769";

const defaultInsuranceInputs = {
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
};

export default function KabinConsultoriaMockup() {
  const isEnglishPath = typeof window !== "undefined" && window.location.pathname.startsWith("/en");
  const getPageFromPath = () => {
    const path = window.location.pathname.replace(/\/+$/, "") || "/";
    if (/^\/(en\/)?(seguros|insurance)$/.test(path)) return "seguros";
    if (/^\/(en\/)?ecommerce$/.test(path)) return "ecommerce";
    if (/^\/(eventos-noticias|en\/events-news)$/.test(path)) return "noticias";
    if (/^\/(contacto|en\/contact)$/.test(path)) return "contacto";
    if (/^\/(eventos-noticias|en\/events-news)\/.+/.test(path)) return "article";
    return "inicio";
  };
  const [activePage, setActivePage] = useState(getPageFromPath);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lang, setLang] = useState(isEnglishPath ? "en" : "es");
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedPackageIndex, setSelectedPackageIndex] = useState(0);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteSubmitState, setQuoteSubmitState] = useState("idle");
  const [insuranceInputs, setInsuranceInputs] = useState(defaultInsuranceInputs);
  const [calculatedInsuranceInputs, setCalculatedInsuranceInputs] = useState(defaultInsuranceInputs);
  const [hasCalculatedInsurance, setHasCalculatedInsurance] = useState(true);
  const [selectedEventIndex, setSelectedEventIndex] = useState(0);
  const [selectedPost, setSelectedPost] = useState(() => {
    const slug = window.location.pathname.split("/").filter(Boolean).at(-1);
    return [...blogPostsEs, ...blogPostsEn].find((post) => post.slug === slug) || null;
  });

  const t = lang === "es"
    ? {
        navLinks: navLinksEs, badges: badgesEs, heroSlides: heroSlidesEs, services: servicesEs, values: valuesEs, journey: journeyEs, insuranceHighlights: insuranceHighlightsEs, ecommercePackages: ecommercePackagesEs, blogEvents: blogEventsEs, blogPosts: blogPostsEs,
        consult: "Consultoría Fiscal y Financiera", menuOpen: "Abrir menú", menuClose: "Cerrar menú",
        servicesTitle: "Servicios", servicesHeading: "Servicios contables, fiscales, financieros y patrimoniales desde una perspectiva humana.", readMore: "Ver más",
        about: "Nosotros", pillars: "Cimientos de nuestro éxito.", concept: "KABIN Consultores nació de un concepto claro: brindar servicios profesionales desde una perspectiva humana.",
        aboutText: "Creemos que detrás de cada número hay una historia, una familia, una empresa y una decisión importante. Por eso acompañamos a nuestros clientes con claridad contable, estrategia fiscal, visión financiera y una conversación cercana que permite cuidar su patrimonio y hacerlo crecer.",
        mission: "Nuestra misión", missionTitle: "Acompañamiento cálido y responsable.", missionText: "Brindar asesorías personalizadas y acompañamiento de una manera cálida, humana, responsable y profesional, para que cada cliente entienda su situación y pueda tomar decisiones con tranquilidad.",
        vision: "Nuestra visión", visionTitle: "Proteger y hacer crecer su legado.", visionText: "Ser uno de los consultores contables, fiscales y financieros de referencia para cuidar el patrimonio de nuestros clientes, fortalecer sus operaciones y acompañar su crecimiento con visión de largo plazo.",
        valuesTitle: "Nuestros valores", path: "Nuestro camino",
        insuranceTitle: "Seguros", insuranceHeading: "Protección integral para personas, familias y empresas.", insuranceText: "Diseñamos soluciones de protección según tus riesgos reales, responsabilidades, patrimonio y etapa de vida. Comparamos alternativas y te acompañamos desde el diagnóstico hasta la atención de un siniestro.",
        calculatorTitle: "Calculadora de impuestos 2024", calculatorText: "Herramienta indicativa para personas físicas en sueldos y salarios. Captura los datos del cliente y compara tres escenarios.",
        incomeSection: "① Ingresos", deductionsSection: "② Deducciones personales", retirementSection: "③ Deducciones enfocadas al retiro", resultsSection: "④ Resultados",
        tableConcept: "Concepto", annualAmount: "Monto anual", deductibleAmount: "Monto a deducir", income: "Ingreso anual bruto", otherIncome: "Otros ingresos anuales", totalIncome: "Total de ingresos",
        medical: "Honorarios médicos y dentales", funeral: "Gastos funerarios", donations: "Donativos", gmm: "Primas de gastos médicos mayores", mortgage: "Intereses reales hipotecarios", transport: "Transporte escolar", tuition: "Colegiaturas",
        art151: "Plan Personal de Retiro Art. 151", art185: "Estímulo fiscal Art. 185", withoutDeductions: "Sin deducciones", withPersonal: "Con deducciones personales", withRetirement: "Con deducciones y retiro", isrToPay: "ISR estimado", taxBenefit: "Beneficio fiscal", deductibleApplied: "Deducible aplicado", disclaimer: "Resultado aproximado; no sustituye asesoría fiscal ni representa criterio de autoridad.",
        calculateSimulation: "Calcular simulación", calculationReady: "Resultados actualizados", calculationPending: "Hay cambios sin calcular", mainBenefit: "Beneficio estimado con retiro",
        ecommerceTitle: "Ecommerce", ecommerceHeading: "Forfaits listos para comprar, cotizar y convertir en clientes dentro del CRM.", ecommerceText: "Esta sección simula cómo Kabin podría vender servicios cerrados sin fricción: el cliente elige un paquete, deja sus datos, paga o solicita cotización, y el CRM recibe la oportunidad con todo el contexto.",
        choosePackage: "Cotizar", selectedPackage: "Forfait seleccionado", checkoutDemo: "Cotización", subtotal: "Subtotal", vat: "IVA estimado", total: "Total", payNow: "Cotizar", quoteNow: "Cotizar", crmReady: "Listo para backend + CRM", crmFlow: "Orden web → pago/lead → contacto CRM → tarea comercial → expediente del cliente",
        blogTitle: "Eventos y noticias", blogHeading: "Agenda fiscal y financiera para tomar decisiones con contexto.", blogText: "Selecciona una fecha del calendario para destacar efemerides, webinarios y sesiones utiles para clientes y empresas.", calendarTitle: "Calendario editorial", newsTitle: "Ultimas noticias",
        contactTitle: "Recibe acompañamiento profesional.", contactText: "Completa el formulario y te contactaremos para entender tu situación y proponerte una ruta de trabajo.",
        fullname: "Nombre", lastname: "Apellido", email: "Correo electrónico", phone: "Teléfono", industry: "Tipo de industria", interest: "Servicio de interés", message: "Mensaje", send: "Enviar solicitud", sending: "Enviando...", quoteSent: "Solicitud enviada. Kabin recibirá el lead en su CRM y por correo.", quoteError: "No se pudo enviar la solicitud. Inténtalo de nuevo o escríbenos por WhatsApp.",
        privacy: "Aviso de Privacidad", footerNav: "Navegación", footerContact: "Contacto", mexico: "Atención en México", social: "Redes sociales",
        rights: "© 2026 Kabin Consultoría Fiscal y Financiera. Todos los derechos reservados.", terms: "Términos", serviceDetail: "Detalle del servicio", request: "Solicitar asesoría",
      }
    : {
        navLinks: navLinksEn, badges: badgesEn, heroSlides: heroSlidesEn, services: servicesEn, values: valuesEn, journey: journeyEn, insuranceHighlights: insuranceHighlightsEn, ecommercePackages: ecommercePackagesEn, blogEvents: blogEventsEn, blogPosts: blogPostsEn,
        consult: "Tax and Financial Consulting", menuOpen: "Open menu", menuClose: "Close menu",
        servicesTitle: "Services", servicesHeading: "Accounting, tax, financial, and asset-planning services from a human perspective.", readMore: "Read more",
        about: "About", pillars: "Foundations of our success.", concept: "KABIN Consultores was born from a clear concept: delivering professional services from a human perspective.",
        aboutText: "We believe that behind every number there is a story, a family, a company, and an important decision.",
        mission: "Our mission", missionTitle: "Warm and responsible support.", missionText: "Provide personalized advisory and support in a warm, human, responsible, and professional way.",
        vision: "Our vision", visionTitle: "Protect and grow your legacy.", visionText: "To become a leading accounting, tax, and financial consulting firm focused on protecting and growing client assets.",
        valuesTitle: "Our values", path: "Our journey",
        insuranceTitle: "Insurance", insuranceHeading: "Comprehensive protection for individuals, families, and businesses.", insuranceText: "We design protection solutions around your actual risks, responsibilities, assets, and life stage. We compare alternatives and support you from assessment through claims.",
        calculatorTitle: "2024 tax calculator", calculatorText: "Indicative tool for individuals under salaries and wages in Mexico. Enter client data and compare three scenarios.",
        incomeSection: "① Income", deductionsSection: "② Personal deductions", retirementSection: "③ Retirement-focused deductions", resultsSection: "④ Results",
        tableConcept: "Concept", annualAmount: "Annual amount", deductibleAmount: "Deductible amount", income: "Annual gross income", otherIncome: "Other annual income", totalIncome: "Total income",
        medical: "Medical and dental fees", funeral: "Funeral expenses", donations: "Donations", gmm: "Major medical insurance premiums", mortgage: "Mortgage real interest", transport: "School transportation", tuition: "Tuition",
        art151: "Private Retirement Plan Art. 151", art185: "Tax incentive Art. 185", withoutDeductions: "No deductions", withPersonal: "With personal deductions", withRetirement: "With deductions and retirement", isrToPay: "Estimated ISR", taxBenefit: "Tax benefit", deductibleApplied: "Applied deductible", disclaimer: "Approximate result; it does not replace tax advice or represent an authority criterion.",
        calculateSimulation: "Calculate simulation", calculationReady: "Results updated", calculationPending: "Changes not calculated", mainBenefit: "Estimated benefit with retirement",
        ecommerceTitle: "Ecommerce", ecommerceHeading: "Packaged services ready to buy, quote, and convert into CRM clients.", ecommerceText: "This section simulates how Kabin could sell fixed-scope services with less friction: the client picks a package, shares details, pays or requests a quote, and the CRM receives the opportunity with context.",
        choosePackage: "Quote", selectedPackage: "Selected package", checkoutDemo: "Quote", subtotal: "Subtotal", vat: "Estimated VAT", total: "Total", payNow: "Quote", quoteNow: "Quote", crmReady: "Backend + CRM ready", crmFlow: "Web order → payment/lead → CRM contact → sales task → client file",
        blogTitle: "Events and news", blogHeading: "Tax and financial agenda for decisions with context.", blogText: "Select a calendar date to highlight observances, webinars, and useful sessions for clients and companies.", calendarTitle: "Editorial calendar", newsTitle: "Latest news",
        contactTitle: "Receive professional support.", contactText: "Complete the form and we will contact you to understand your needs and propose a work plan.",
        fullname: "First name", lastname: "Last name", email: "Email", phone: "Phone", industry: "Industry type", interest: "Service of interest", message: "Message", send: "Send request", sending: "Sending...", quoteSent: "Request sent. Kabin will receive the lead in its CRM and by email.", quoteError: "The request could not be sent. Please try again or contact us on WhatsApp.",
        privacy: "Privacy Notice", footerNav: "Navigation", footerContact: "Contact", mexico: "Service in Mexico", social: "Social media",
        rights: "© 2026 Kabin Tax and Financial Consulting. All rights reserved.", terms: "Terms", serviceDetail: "Service details", request: "Request consultation",
      };

  useEffect(() => {
    const legacyRoutes = {
      "#inicio": isEnglishPath ? "/en/" : "/",
      "#seguros": isEnglishPath ? "/en/insurance/" : "/seguros/",
      "#ecommerce": isEnglishPath ? "/en/ecommerce/" : "/ecommerce/",
      "#blog": isEnglishPath ? "/en/events-news/" : "/eventos-noticias/",
      "#noticias": isEnglishPath ? "/en/events-news/" : "/eventos-noticias/",
      "#contacto": isEnglishPath ? "/en/contact/" : "/contacto/",
    };
    if (legacyRoutes[window.location.hash]) window.location.replace(legacyRoutes[window.location.hash]);

    const onPopState = () => {
      setActivePage(getPageFromPath());
      setIsMenuOpen(false);
      window.scrollTo({ top: 0, behavior: "auto" });
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

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
    const base = "https://www.kabinconsultores.com";
    const routeSeo = {
      es: {
        inicio: ["Kabin | Consultoría Fiscal, Contable y Financiera", "Consultoría contable, fiscal, financiera y patrimonial en México para personas y empresas.", "/", "/en/"],
        seguros: ["Seguros y protección patrimonial | Kabin", "Seguros de vida, gastos médicos, retiro, protección empresarial y patrimonial con acompañamiento profesional.", "/seguros/", "/en/insurance/"],
        ecommerce: ["Servicios fiscales y contables para cotizar | Kabin", "Cotiza servicios fiscales, contables y empresariales con alcance y precios claros.", "/ecommerce/", "/en/ecommerce/"],
        noticias: ["Eventos y noticias fiscales y financieras | Kabin", "Noticias, eventos y contenidos sobre impuestos, finanzas, seguros y patrimonio en México.", "/eventos-noticias/", "/en/events-news/"],
        contacto: ["Contacto y asesoría profesional | Kabin", "Contacta a Kabin para recibir asesoría fiscal, contable, financiera, patrimonial o de seguros.", "/contacto/", "/en/contact/"],
      },
      en: {
        inicio: ["Kabin | Tax, Accounting and Financial Consulting", "Accounting, tax, financial and wealth consulting in Mexico for individuals and businesses.", "/en/", "/"],
        seguros: ["Insurance and Wealth Protection | Kabin", "Life, medical, retirement, business, and wealth protection solutions with professional support.", "/en/insurance/", "/seguros/"],
        ecommerce: ["Tax and Accounting Services to Quote | Kabin", "Quote clearly scoped tax, accounting, and business services in Mexico.", "/en/ecommerce/", "/ecommerce/"],
        noticias: ["Tax and Financial Events & News | Kabin", "News, events, and insights about tax, finance, insurance, and wealth in Mexico.", "/en/events-news/", "/eventos-noticias/"],
        contacto: ["Contact and Professional Advice | Kabin", "Contact Kabin for tax, accounting, financial, wealth, or insurance advice in Mexico.", "/en/contact/", "/contacto/"],
      },
    };
    const article = selectedPost || t.blogPosts[0];
    const fallback = routeSeo[lang][activePage] || routeSeo[lang].inicio;
    const articlePath = isEn ? `/en/events-news/${article.slug}/` : `/eventos-noticias/${article.slug}/`;
    const counterpartArticle = isEn
      ? `/eventos-noticias/${blogPostsEs[t.blogPosts.indexOf(article)]?.slug || blogPostsEs[0].slug}/`
      : `/en/events-news/${blogPostsEn[t.blogPosts.indexOf(article)]?.slug || blogPostsEn[0].slug}/`;
    const [title, description, routePath, counterpartPath] = activePage === "article"
      ? [`${article.title} | Kabin`, article.text, articlePath, counterpartArticle]
      : fallback;
    const pageUrl = `${base}${routePath}`;
    const esUrl = `${base}${isEn ? counterpartPath : routePath}`;
    const enUrl = `${base}${isEn ? routePath : counterpartPath}`;

    document.documentElement.lang = isEn ? "en" : "es";
    document.title = title;

    const setLink = (rel, href, hreflang) => {
      const key = hreflang ? `${rel}-${hreflang}` : rel;
      const selector = hreflang
        ? `link[rel='${rel}'][hreflang='${hreflang}']`
        : `link[rel='${rel}']:not([hreflang])`;
      let el = document.head.querySelector(selector);
      if (!el) {
        el = document.createElement("link");
        document.head.appendChild(el);
      }
      el.setAttribute("data-seo", key);
      el.setAttribute("rel", rel);
      el.setAttribute("href", href);
      if (hreflang) el.setAttribute("hreflang", hreflang);
    };

    const setMeta = (selector, attribute, value) => {
      const el = document.head.querySelector(selector);
      if (el) el.setAttribute(attribute, value);
    };

    setLink("canonical", pageUrl);
    setLink("alternate", esUrl, "es-MX");
    setLink("alternate", enUrl, "en");
    setLink("alternate", esUrl, "x-default");
    setMeta("meta[name='description']", "content", description);
    setMeta("meta[property='og:locale']", "content", isEn ? "en_US" : "es_MX");
    setMeta("meta[property='og:type']", "content", activePage === "article" ? "article" : "website");
    setMeta("meta[property='og:title']", "content", title);
    setMeta("meta[property='og:description']", "content", description);
    setMeta("meta[property='og:url']", "content", pageUrl);
    setMeta("meta[property='og:image']", "content", activePage === "article" ? `${base}${article.image}` : `${base}/kabin.png`);
    setMeta("meta[name='twitter:title']", "content", title);
    setMeta("meta[name='twitter:description']", "content", description);
    setMeta("meta[name='twitter:image']", "content", activePage === "article" ? `${base}${article.image}` : `${base}/kabin.png`);
  }, [activePage, lang, selectedPost]);

  const switchLanguage = (nextLang) => {
    const routePairs = {
      inicio: ["/", "/en/"],
      seguros: ["/seguros/", "/en/insurance/"],
      ecommerce: ["/ecommerce/", "/en/ecommerce/"],
      noticias: ["/eventos-noticias/", "/en/events-news/"],
      contacto: ["/contacto/", "/en/contact/"],
    };
    if (activePage === "article") {
      const index = t.blogPosts.findIndex((post) => post.slug === (selectedPost || t.blogPosts[0]).slug);
      const targetPost = (nextLang === "en" ? blogPostsEn : blogPostsEs)[Math.max(index, 0)];
      window.location.href = nextLang === "en" ? `/en/events-news/${targetPost.slug}/` : `/eventos-noticias/${targetPost.slug}/`;
      return;
    }
    window.location.href = routePairs[activePage]?.[nextLang === "en" ? 1 : 0] || (nextLang === "en" ? "/en/" : "/");
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % t.heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + t.heroSlides.length) % t.heroSlides.length);
  };

  const closeMenu = () => setIsMenuOpen(false);
  const quotePackage = (index) => {
    setSelectedPackageIndex(index);
    setQuoteSubmitState("idle");
    setIsQuoteModalOpen(true);
  };
  const active = t.heroSlides[currentSlide];
  const parsedInsurance = {
    income: Number(calculatedInsuranceInputs.income) || 0,
    otherIncome: Number(calculatedInsuranceInputs.otherIncome) || 0,
    medical: Number(calculatedInsuranceInputs.medical) || 0,
    funeral: Number(calculatedInsuranceInputs.funeral) || 0,
    donations: Number(calculatedInsuranceInputs.donations) || 0,
    gmm: Number(calculatedInsuranceInputs.gmm) || 0,
    mortgage: Number(calculatedInsuranceInputs.mortgage) || 0,
    transport: Number(calculatedInsuranceInputs.transport) || 0,
    tuition: Number(calculatedInsuranceInputs.tuition) || 0,
    art151: Number(calculatedInsuranceInputs.art151) || 0,
    art185: Number(calculatedInsuranceInputs.art185) || 0,
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
  const selectedPackage = t.ecommercePackages[selectedPackageIndex] || t.ecommercePackages[0];
  const packageSubtotal = selectedPackage.price;
  const packageVat = packageSubtotal * 0.16;
  const packageTotal = packageSubtotal + packageVat;
  const submitQuote = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setQuoteSubmitState("submitting");
    try {
      const response = await fetch("/api/kabin-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          forfait_seleccionado: selectedPackage.title,
          precio_forfait: packageSubtotal,
          total_forfait: packageTotal,
          idioma: lang,
        }),
      });
      if (!response.ok) throw new Error("Quote request failed");
      setQuoteSubmitState("success");
      form.reset();
    } catch (error) {
      setQuoteSubmitState("error");
    }
  };
  const updateInsuranceInput = (field, value) => {
    setInsuranceInputs((current) => ({
      ...current,
      [field]: value.replace(/[^\d.]/g, ""),
    }));
    setHasCalculatedInsurance(false);
  };
  const calculateInsuranceSimulation = () => {
    setCalculatedInsuranceInputs(insuranceInputs);
    setHasCalculatedInsurance(true);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f4efe7] text-slate-900">
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-slate-950/45 backdrop-blur-xl transition-transform duration-300 ease-out ${
          isHeaderHidden && !isMenuOpen ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href={lang === "es" ? "/" : "/en/"} className="flex items-center gap-3">
            <img
              src="/KABIN LOGO OFICIAL BLANCO-01.png"
              alt="Kabin Consultoría"
              width="2360"
              height="2488"
              className="h-24 w-24 object-contain"
            />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-amber-100">{t.consult}</p>
            </div>
          </a>

          <nav className="hidden items-center gap-5 text-[15px] font-semibold text-white/85 xl:gap-6 xl:text-base lg:flex">
            {t.navLinks.map((link) => (
              <a key={link.href} href={link.href} className="whitespace-nowrap transition hover:text-white">
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
              href={whatsappUrl}
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
                  href={whatsappUrl}
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
        {activePage === "inicio" && (
        <>
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
        <section className="bg-[#0d2340] py-16 text-white lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="border-l-4 border-[#d9ad58] pl-5 text-sm font-black uppercase tracking-[0.24em] text-[#d9ad58]">{t.about}</p>
                <h2 className="mt-6 text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl">{t.pillars}</h2>
                <p className="mt-6 text-xl font-semibold leading-9">{t.concept}</p>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200">{t.aboutText}</p>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] border border-[#d9ad58]/35" />
                <img
                  src="/kabin-equipo.webp"
                  alt="Equipo de consultoría trabajando en una mesa de oficina"
                  width="641"
                  height="721"
                  loading="lazy"
                  decoding="async"
                  className="relative aspect-[4/3] w-full rounded-[1.6rem] object-cover shadow-2xl shadow-black/35"
                />
              </div>
            </div>
            <div className="mt-14 grid gap-5 lg:grid-cols-2">
              {[
                [t.mission, t.missionTitle, t.missionText],
                [t.vision, t.visionTitle, t.visionText],
              ].map(([label, title, text]) => (
                <article key={label} className="rounded-[1.4rem] border border-[#d9ad58]/30 bg-white/5 p-7 md:p-9">
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-[#d9ad58]">{label}</p>
                  <h3 className="mt-4 text-2xl font-black text-[#d9ad58]">{title}</h3>
                  <p className="mt-4 text-base leading-8 text-slate-200">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f4efe7] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-3xl">
              <div className="max-w-3xl">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-900">{t.servicesTitle}</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl md:text-5xl">{t.servicesHeading}</h2>
              </div>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {t.services.map((service) => {
                const Icon = service.icon;
                return (
                  <article key={service.title} className="flex flex-col rounded-[1.6rem] border border-emerald-900/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                    <span className="inline-flex rounded-2xl bg-emerald-50 p-3.5 text-emerald-950"><Icon size={24} /></span>
                    <h3 className="mt-5 text-xl font-black text-slate-950">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{service.text}</p>
                    <button type="button" onClick={() => setSelectedService(service)} className="mt-auto inline-flex w-fit items-center gap-2 pt-5 text-left text-sm font-bold text-emerald-900">
                      {t.readMore} <ArrowRight size={15} />
                    </button>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        </>
        )}

        {(activePage === "seguros" || activePage === "inicio") && (
        <section id="seguros" className="min-h-screen bg-[#f9f6ef] pb-16 pt-40 lg:pb-24 lg:pt-44">
          <div className={`mx-auto max-w-7xl gap-10 px-5 lg:px-8 ${activePage === "seguros" ? "grid" : ""}`}>
            {activePage === "seguros" && (
            <div className="w-full">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-900">{t.insuranceTitle}</p>
              <h1 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
                {t.insuranceHeading}
              </h1>
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

              <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {[
                  ["Vida e invalidez", "Protección de ingresos y estabilidad familiar ante fallecimiento, incapacidad o invalidez."],
                  ["Gastos médicos mayores", "Cobertura hospitalaria y médica con análisis de red, deducible, coaseguro y suma asegurada."],
                  ["Auto y daños", "Protección para vehículos, hogar, oficinas, inventario, responsabilidad civil y activos esenciales."],
                  ["Socios y personas clave", "Soluciones para continuidad empresarial, compra de acciones y pérdida de talento estratégico."],
                  ["Ahorro y retiro", "Planes de largo plazo adaptados a metas, horizonte, liquidez y capacidad real de aportación."],
                  ["Beneficios colectivos", "Esquemas para colaboradores que fortalecen retención, bienestar y protección del equipo."],
                ].map(([title, text]) => (
                  <article key={title} className="rounded-2xl border border-emerald-950/10 bg-white p-6 shadow-sm">
                    <CheckCircle2 className="text-emerald-800" size={22} />
                    <h3 className="mt-4 text-lg font-black text-slate-950">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
                  </article>
                ))}
              </div>

              <div className="mt-12 rounded-[1.8rem] bg-[#0d2340] p-7 text-white md:p-10">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#d9ad58]">Cómo trabajamos</p>
                <div className="mt-7 grid gap-6 md:grid-cols-4">
                  {[
                    ["01", "Diagnóstico", "Identificamos riesgos, prioridades, dependientes y coberturas actuales."],
                    ["02", "Comparación", "Revisamos condiciones, exclusiones, costos y alternativas de distintas soluciones."],
                    ["03", "Implementación", "Te ayudamos con solicitud, documentación, contratación y puesta en marcha."],
                    ["04", "Acompañamiento", "Damos seguimiento a renovaciones, cambios de vida y atención de siniestros."],
                  ].map(([number, title, text]) => (
                    <div key={number}>
                      <span className="text-3xl font-black text-[#d9ad58]">{number}</span>
                      <h3 className="mt-3 text-lg font-black">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/70">{text}</p>
                    </div>
                  ))}
                </div>
                <a href={lang === "es" ? "/contacto/" : "/en/contact/"} className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#d9ad58] px-6 py-3 text-sm font-black text-slate-950">
                  Solicitar análisis de protección <ArrowRight size={16} />
                </a>
              </div>

              <div className="mt-12 grid gap-6 lg:grid-cols-2">
                <div className="rounded-[1.8rem] bg-emerald-950 p-8 text-white md:p-10">
                  <ShieldCheck className="text-[#d9ad58]" size={34} />
                  <h2 className="mt-5 text-3xl font-black tracking-tight">{t.insuranceHeading}</h2>
                  <p className="mt-4 leading-7 text-white/75">{t.insuranceText}</p>
                  <a href={lang === "es" ? "/contacto/" : "/en/contact/"} className="mt-6 inline-flex items-center gap-2 font-black text-[#d9ad58]">
                    {lang === "es" ? "Solicitar análisis" : "Request an assessment"} <ArrowRight size={16} />
                  </a>
                </div>
                <div className="rounded-[1.8rem] bg-slate-950 p-8 text-white md:p-10">
                  <MessageCircle className="text-[#d9ad58]" size={34} />
                  <h2 className="mt-5 text-3xl font-black tracking-tight">{t.contactTitle}</h2>
                  <p className="mt-4 leading-7 text-white/75">{t.contactText}</p>
                  <a href={lang === "es" ? "/contacto/" : "/en/contact/"} className="mt-6 inline-flex items-center gap-2 font-black text-[#d9ad58]">
                    {t.request} <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
            )}

            {activePage === "inicio" && (
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

                  <div className="grid gap-4 rounded-xl border border-emerald-900/15 bg-white p-4 md:grid-cols-[1fr_auto] md:items-center">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-900">
                        {hasCalculatedInsurance ? t.calculationReady : t.calculationPending}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {lang === "es"
                          ? "Modifica los montos amarillos y presiona calcular para actualizar deducciones, ISR y beneficio estimado."
                          : "Edit the yellow fields and press calculate to update deductions, ISR, and estimated benefit."}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={calculateInsuranceSimulation}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-950 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-emerald-900"
                    >
                      <Calculator size={17} /> {t.calculateSimulation}
                    </button>
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

                  <div className="flex flex-col gap-3 rounded-xl border border-emerald-900/15 bg-emerald-950 p-4 text-white sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-black uppercase tracking-[0.16em] text-[#d9ad58]">
                        {hasCalculatedInsurance ? t.calculationReady : t.calculationPending}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-white/70">
                        {lang === "es" ? "Presiona calcular para refrescar el resultado final." : "Press calculate to refresh the final result."}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={calculateInsuranceSimulation}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-emerald-950 transition hover:-translate-y-0.5"
                    >
                      <Calculator size={17} /> {t.calculateSimulation}
                    </button>
                  </div>

                  <div className="overflow-hidden rounded-xl border border-slate-300 bg-white">
                    <div className="bg-[#17385f] px-4 py-2 text-sm font-black uppercase tracking-[0.16em] text-white">
                      {t.resultsSection}
                    </div>
                    <div className="grid gap-4 border-t border-slate-200 bg-[#fff7d7] p-4 md:grid-cols-[1fr_auto] md:items-center">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-600">{t.mainBenefit}</p>
                        <p className="mt-1 text-sm font-semibold leading-6 text-slate-700">
                          {lang === "es"
                            ? "Comparado contra un escenario sin deducciones."
                            : "Compared against a scenario with no deductions."}
                        </p>
                      </div>
                      <p className="text-3xl font-black tracking-tight text-emerald-950">{formatMxn(retirementBenefit)}</p>
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
            )}
          </div>
        </section>
        )}

        {activePage === "ecommerce" && (
        <section id="ecommerce" className="min-h-screen bg-white pb-16 pt-40 lg:pb-24 lg:pt-44">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-900">{t.ecommerceTitle}</p>
                <h1 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
                  {t.ecommerceHeading}
                </h1>
                <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                  {t.ecommerceText}
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0d2340] text-[#d9ad58]">
                    <PackageCheck size={23} />
                  </div>
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.16em] text-emerald-900">{t.crmReady}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{t.crmFlow}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 space-y-8">
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {t.ecommercePackages.map((item, index) => {
                  const Icon = item.icon;
                  const isSelected = index === selectedPackageIndex;
                  return (
                    <article
                      key={item.title}
                      className={`flex h-full flex-col rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
                        isSelected ? "border-emerald-900 ring-2 ring-emerald-900/15" : "border-slate-200"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-950">
                          <Icon size={24} />
                        </div>
                        <span className="rounded-full bg-[#d9ad58] px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-slate-950">
                          {item.tag}
                        </span>
                      </div>
                      <h3 className="mt-5 text-xl font-black text-slate-950">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                      <div className="mt-5 flex items-end gap-2">
                        <span className="text-3xl font-black tracking-tight text-slate-950">{formatMxn(item.price)}</span>
                        <span className="pb-1 text-sm font-bold text-slate-500">{item.cadence}</span>
                      </div>
                      <div className="mt-5 grid gap-2">
                        {item.includes.map((feature) => (
                          <div key={feature} className="flex items-start gap-2 text-sm font-semibold leading-6 text-slate-700">
                            <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-800" size={16} />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      <p className="mt-5 text-xs font-bold uppercase tracking-[0.12em] text-slate-500">{item.delivery}</p>
                      <button
                        type="button"
                        onClick={() => quotePackage(index)}
                        className={`mt-auto inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-black transition ${
                          isSelected
                            ? "bg-emerald-950 text-white"
                            : "border border-emerald-950/20 text-emerald-950 hover:bg-emerald-950 hover:text-white"
                        }`}
                      >
                        <FileText size={17} /> {t.choosePackage}
                      </button>
                    </article>
                  );
                })}
              </div>

              <aside className="grid h-fit gap-6 rounded-2xl border border-slate-200 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-900/20 lg:grid-cols-[auto_1.2fr_1fr_auto] lg:items-center">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-emerald-950">
                    <CreditCard size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-[#d9ad58]">{t.checkoutDemo}</p>
                    <h3 className="text-xl font-black">{t.selectedPackage}</h3>
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-lg font-black">{selectedPackage.title}</p>
                  <p className="mt-2 text-sm leading-6 text-white/65">{selectedPackage.description}</p>
                </div>

                <div className="grid gap-3 text-sm">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-white/65">{t.subtotal}</span>
                    <span className="font-black">{formatMxn(packageSubtotal)}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-white/65">{t.vat}</span>
                    <span className="font-black">{formatMxn(packageVat)}</span>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-base font-black">{t.total}</span>
                    <span className="text-2xl font-black text-[#d9ad58]">{formatMxn(packageTotal)}</span>
                  </div>
                </div>

                <div className="grid gap-3">
                  <button
                    type="button"
                    onClick={() => quotePackage(selectedPackageIndex)}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d9ad58] px-5 py-3 text-sm font-black text-slate-950 transition hover:-translate-y-0.5"
                  >
                    <FileText size={17} /> {t.payNow}
                  </button>
                </div>
              </aside>
            </div>
          </div>
        </section>
        )}

        {activePage === "noticias" && (
        <section id="noticias" className="min-h-screen bg-[#f4efe7] px-5 pb-16 pt-40 lg:px-8 lg:pb-24 lg:pt-44">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-900">{t.blogTitle}</p>
                <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl md:text-5xl">{t.blogHeading}</h1>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">{t.blogText}</p>
              </div>
              <div className="rounded-2xl bg-slate-950 p-5 text-white shadow-2xl shadow-slate-900/20">
                <div className="mb-4 flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-[#d9ad58]">
                  <CalendarDays size={18} /> {t.calendarTitle}
                </div>
                <div className="grid gap-3 sm:grid-cols-4">
                  {t.blogEvents.map((event, index) => (
                    <button
                      key={`${event.day}-${event.title}`}
                      type="button"
                      onClick={() => setSelectedEventIndex(index)}
                      className={`rounded-xl border p-4 text-left transition ${
                        selectedEventIndex === index ? "border-[#d9ad58] bg-[#d9ad58] text-slate-950" : "border-white/10 bg-white/5 hover:bg-white/10"
                      }`}
                    >
                      <span className="block text-xs font-black uppercase tracking-[0.16em] opacity-75">{event.month}</span>
                      <span className="mt-1 block text-3xl font-black">{event.day}</span>
                      <span className="mt-3 block text-sm font-black leading-5">{event.title}</span>
                    </button>
                  ))}
                </div>
                <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-[#d9ad58]">{t.blogEvents[selectedEventIndex].type}</p>
                  <h3 className="mt-2 text-2xl font-black">{t.blogEvents[selectedEventIndex].title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">{t.blogEvents[selectedEventIndex].text}</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <div className="mb-5 flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-emerald-900">
                <Newspaper size={18} /> {t.newsTitle}
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {t.blogPosts.map((post) => (
                  <article key={post.title} className="group overflow-hidden rounded-[1.5rem] border border-emerald-950/10 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-950/15">
                    <div className="relative h-56 overflow-hidden">
                      <img src={post.image} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/5 to-transparent" />
                      <span className="absolute left-5 top-5 rounded-full bg-[#d9ad58] px-4 py-2 text-[11px] font-black uppercase tracking-[0.14em] text-slate-950">
                        {post.category}
                      </span>
                      <div className="absolute bottom-5 left-5 flex items-center gap-4 text-xs font-bold text-white/90">
                        <span>{post.date}</span>
                        <span className="inline-flex items-center gap-1.5"><Clock3 size={14} /> {post.read}</span>
                      </div>
                    </div>
                    <div className="flex min-h-[250px] flex-col p-6">
                      <h3 className="text-2xl font-black leading-tight tracking-tight text-slate-950">{post.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-slate-600">{post.text}</p>
                      <a href={`${lang === "es" ? "/eventos-noticias" : "/en/events-news"}/${post.slug}/`} className="mt-auto inline-flex w-fit items-center gap-2 pt-6 text-sm font-black text-emerald-900 transition group-hover:gap-3">
                        {lang === "es" ? "Leer artículo" : "Read article"} <ArrowRight size={16} />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
        )}

        {activePage === "article" && (() => {
          const post = selectedPost || t.blogPosts[0];
          return (
            <article className="min-h-screen bg-[#f4efe7] pb-20 pt-36 lg:pt-40">
              <div className="mx-auto max-w-5xl px-5 lg:px-8">
                <a href={lang === "es" ? "/eventos-noticias/" : "/en/events-news/"} className="mb-7 inline-flex items-center gap-2 text-sm font-black text-emerald-900"><ArrowLeft size={16} /> {lang === "es" ? "Volver a Eventos y Noticias" : "Back to Events & News"}</a>
                <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-slate-900/10">
                  <div className="relative h-72 overflow-hidden sm:h-[430px]">
                    <img src={post.image} alt="" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent" />
                    <div className="absolute bottom-7 left-7 right-7 text-white sm:bottom-10 sm:left-10">
                      <span className="rounded-full bg-[#d9ad58] px-4 py-2 text-[11px] font-black uppercase tracking-[0.14em] text-slate-950">{post.category}</span>
                      <div className="mt-5 flex items-center gap-4 text-sm font-bold text-white/90"><span>{post.date}</span><span className="inline-flex items-center gap-1.5"><Clock3 size={15} /> {post.read}</span></div>
                    </div>
                  </div>
                  <div className="p-7 sm:p-12 lg:p-16">
                    <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">{post.title}</h1>
                    <p className="mt-7 text-xl font-semibold leading-9 text-slate-700">{post.text}</p>
                    <div className="mt-9 space-y-6 text-lg leading-9 text-slate-600">
                      <p>{lang === "es" ? "Tomar decisiones financieras y fiscales con anticipación permite reducir errores, ordenar prioridades y mantener una lectura clara de la situación actual." : "Making financial and tax decisions in advance helps reduce errors, organize priorities, and maintain a clear view of the current situation."}</p>
                      <p>{lang === "es" ? "En Kabin revisamos cada caso de forma integral: documentación, obligaciones, flujo, riesgos y objetivos. El resultado es una ruta práctica, entendible y alineada con las necesidades reales de cada persona o empresa." : "At Kabin, we review each case comprehensively: documentation, obligations, cash flow, risks, and goals. The result is a practical, understandable path aligned with each person or company's actual needs."}</p>
                    </div>
                    <a href={lang === "es" ? "/contacto/" : "/en/contact/"} className="mt-10 inline-flex items-center gap-2 rounded-full bg-emerald-950 px-7 py-3.5 text-sm font-black text-white">{t.request} <ArrowRight size={16} /></a>
                  </div>
                </div>
              </div>
            </article>
          );
        })()}

        {(activePage === "contacto" || activePage === "inicio") && (
        <section id="contacto" className={`mx-auto min-h-screen max-w-7xl px-5 pb-20 lg:px-8 ${activePage === "inicio" ? "pt-16 lg:pt-24" : "pt-40 lg:pt-44"}`}>
          <div className="rounded-[2.2rem] bg-slate-950 p-8 text-white shadow-2xl md:p-12">
            {activePage === "contacto" ? (
              <h1 className="max-w-3xl text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">{t.contactTitle}</h1>
            ) : (
              <h2 className="max-w-3xl text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">{t.contactTitle}</h2>
            )}
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
              {t.contactText}
            </p>
            <form
              onSubmit={submitQuote}
              className="mt-8 grid gap-4 md:grid-cols-2"
            >
              <input type="hidden" name="_subject" value={`Nueva cotización Kabin: ${selectedPackage.title}`} />
              <input type="hidden" name="forfait_seleccionado" value={selectedPackage.title} />
              <input type="hidden" name="precio_forfait" value={formatMxn(packageSubtotal)} />
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
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-amber-100">{t.lastname}</span>
                <input
                  type="text"
                  name="apellido"
                  required
                  className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/55 focus:border-white/45 focus:outline-none"
                  placeholder="Tu apellido"
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
                  required
                  className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/55 focus:border-white/45 focus:outline-none"
                  placeholder="Tu teléfono"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-amber-100">{t.industry}</span>
                <select
                  name="tipo_industria"
                  required
                  className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/55 focus:border-white/45 focus:outline-none"
                  defaultValue=""
                >
                  <option value="" disabled className="text-slate-950">Selecciona una industria</option>
                  <option value="Comercio" className="text-slate-950">Comercio</option>
                  <option value="Servicios profesionales" className="text-slate-950">Servicios profesionales</option>
                  <option value="Construcción / inmobiliario" className="text-slate-950">Construcción / inmobiliario</option>
                  <option value="Restaurantes / alimentos" className="text-slate-950">Restaurantes / alimentos</option>
                  <option value="Tecnología" className="text-slate-950">Tecnología</option>
                  <option value="Salud" className="text-slate-950">Salud</option>
                  <option value="Manufactura" className="text-slate-950">Manufactura</option>
                  <option value="Otro" className="text-slate-950">Otro</option>
                </select>
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
                  disabled={quoteSubmitState === "submitting"}
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-black text-emerald-950 transition hover:-translate-y-0.5"
                >
                  {quoteSubmitState === "submitting" ? t.sending : t.send}
                </button>
              </div>
            </form>
            {quoteSubmitState === "success" && (
              <p className="mt-4 text-sm font-semibold text-emerald-100">{t.quoteSent}</p>
            )}
            {quoteSubmitState === "error" && (
              <p className="mt-4 text-sm font-semibold text-red-200">{t.quoteError}</p>
            )}
            <div className="mt-4 text-xs text-white/55">
              También puedes escribir a{" "}
              <a href="mailto:contacto@kabinconsultores.com" className="font-semibold text-white/80 hover:text-white">
                contacto@kabinconsultores.com
              </a>
            </div>
          </div>
        </section>
        )}

      </main>

      <a
        href="/aviso-privacidad.html"
        className="fixed bottom-4 left-4 z-[60] inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-3 text-sm font-black text-white shadow-xl shadow-blue-950/40 transition hover:-translate-y-0.5 hover:bg-blue-500"
      >
        <ShieldCheck size={16} /> {t.privacy}
      </a>

      <AnimatePresence>
        {false && selectedPost && (
          <motion.div
            className="fixed inset-0 z-[95] flex items-center justify-center bg-slate-950/75 px-4 py-6 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPost(null)}
          >
            <motion.article
              role="dialog"
              aria-modal="true"
              aria-labelledby="article-modal-title"
              className="max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-[1.8rem] bg-[#f4efe7] shadow-2xl"
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.22 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative h-64 overflow-hidden sm:h-80">
                <img src={selectedPost.image} alt="" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent" />
                <button
                  type="button"
                  onClick={() => setSelectedPost(null)}
                  className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-950 shadow-lg transition hover:scale-105"
                  aria-label={lang === "es" ? "Cerrar artículo" : "Close article"}
                >
                  <X size={20} />
                </button>
                <div className="absolute bottom-6 left-6 right-6 text-white sm:bottom-8 sm:left-8">
                  <span className="rounded-full bg-[#d9ad58] px-4 py-2 text-[11px] font-black uppercase tracking-[0.14em] text-slate-950">{selectedPost.category}</span>
                  <div className="mt-4 flex items-center gap-4 text-sm font-bold text-white/85">
                    <span>{selectedPost.date}</span>
                    <span className="inline-flex items-center gap-1.5"><Clock3 size={15} /> {selectedPost.read}</span>
                  </div>
                </div>
              </div>
              <div className="p-7 sm:p-10">
                <h2 id="article-modal-title" className="text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">{selectedPost.title}</h2>
                <p className="mt-6 text-lg font-semibold leading-8 text-slate-700">{selectedPost.text}</p>
                <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                  <p>{lang === "es" ? "Tomar decisiones financieras y fiscales con anticipación permite reducir errores, ordenar prioridades y mantener una lectura clara de la situación actual." : "Making financial and tax decisions in advance helps reduce errors, organize priorities, and maintain a clear view of the current situation."}</p>
                  <p>{lang === "es" ? "En Kabin revisamos cada caso de forma integral: documentación, obligaciones, flujo, riesgos y objetivos. El resultado es una ruta práctica, entendible y alineada con las necesidades reales de cada persona o empresa." : "At Kabin, we review each case comprehensively: documentation, obligations, cash flow, risks, and goals. The result is a practical, understandable path aligned with each person or company's actual needs."}</p>
                </div>
                <a href={lang === "es" ? "/contacto/" : "/en/contact/"} onClick={() => setSelectedPost(null)} className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-950 px-6 py-3 text-sm font-black text-white">
                  {t.request} <ArrowRight size={16} />
                </a>
              </div>
            </motion.article>
          </motion.div>
        )}

        {isQuoteModalOpen && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-slate-950/70 px-4 py-6 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsQuoteModalOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="quote-modal-title"
              className="max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-[1.8rem] bg-slate-950 p-6 text-white shadow-2xl md:p-8"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.22 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#d9ad58]">{t.checkoutDemo}</p>
                  <h3 id="quote-modal-title" className="mt-2 text-2xl font-black tracking-tight md:text-3xl">
                    {selectedPackage.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-white/65">{selectedPackage.description}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsQuoteModalOpen(false)}
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-slate-950"
                  aria-label="Cerrar cotización"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="mt-5 grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm md:grid-cols-3">
                <div>
                  <span className="block text-white/55">{t.subtotal}</span>
                  <strong className="mt-1 block text-lg">{formatMxn(packageSubtotal)}</strong>
                </div>
                <div>
                  <span className="block text-white/55">{t.vat}</span>
                  <strong className="mt-1 block text-lg">{formatMxn(packageVat)}</strong>
                </div>
                <div>
                  <span className="block text-white/55">{t.total}</span>
                  <strong className="mt-1 block text-lg text-[#d9ad58]">{formatMxn(packageTotal)}</strong>
                </div>
              </div>

              <form onSubmit={submitQuote} className="mt-6 grid gap-4 md:grid-cols-2">
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
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-amber-100">{t.lastname}</span>
                  <input
                    type="text"
                    name="apellido"
                    required
                    className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/55 focus:border-white/45 focus:outline-none"
                    placeholder="Tu apellido"
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
                    required
                    className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/55 focus:border-white/45 focus:outline-none"
                    placeholder="Tu teléfono"
                  />
                </label>
                <label className="grid gap-2 md:col-span-2">
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-amber-100">{t.industry}</span>
                  <select
                    name="tipo_industria"
                    required
                    className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white focus:border-white/45 focus:outline-none"
                    defaultValue=""
                  >
                    <option value="" disabled className="text-slate-950">Selecciona una industria</option>
                    <option value="Comercio" className="text-slate-950">Comercio</option>
                    <option value="Servicios profesionales" className="text-slate-950">Servicios profesionales</option>
                    <option value="Construcción / inmobiliario" className="text-slate-950">Construcción / inmobiliario</option>
                    <option value="Restaurantes / alimentos" className="text-slate-950">Restaurantes / alimentos</option>
                    <option value="Tecnología" className="text-slate-950">Tecnología</option>
                    <option value="Salud" className="text-slate-950">Salud</option>
                    <option value="Manufactura" className="text-slate-950">Manufactura</option>
                    <option value="Otro" className="text-slate-950">Otro</option>
                  </select>
                </label>
                <label className="grid gap-2 md:col-span-2">
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-amber-100">{t.message}</span>
                  <textarea
                    name="mensaje"
                    required
                    rows={4}
                    className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/55 focus:border-white/45 focus:outline-none"
                    placeholder="Cuéntanos brevemente tu necesidad."
                  />
                </label>
                <div className="flex flex-col gap-3 md:col-span-2 md:flex-row md:items-center">
                  <button
                    type="submit"
                    disabled={quoteSubmitState === "submitting"}
                    className="inline-flex items-center justify-center rounded-full bg-[#d9ad58] px-7 py-3.5 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {quoteSubmitState === "submitting" ? t.sending : t.send}
                  </button>
                  {quoteSubmitState === "success" && (
                    <p className="text-sm font-semibold text-emerald-100">{t.quoteSent}</p>
                  )}
                  {quoteSubmitState === "error" && (
                    <p className="text-sm font-semibold text-red-200">{t.quoteError}</p>
                  )}
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}

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
                href={lang === "es" ? "/contacto/" : "/en/contact/"}
                onClick={() => setSelectedService(null)}
                className="mt-7 inline-flex items-center justify-center rounded-full bg-emerald-950 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5"
              >
                {t.request}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <OfflineOliviaChat />
      <footer className="border-t border-emerald-950/10 bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.4fr_0.9fr_1fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/KABIN LOGO OFICIAL BLANCO-01.png"
                alt="Kabin Consultoría"
                width="2360"
                height="2488"
                loading="lazy"
                decoding="async"
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
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 px-5 py-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-black uppercase tracking-[0.18em] text-amber-100">{t.social}</p>
            <div className="flex flex-wrap items-center gap-5">
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
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="ml-1 inline-flex items-center gap-2 rounded-full border border-[#d9ad58]/60 px-5 py-2.5 text-sm font-black text-[#d9ad58] transition hover:-translate-y-0.5 hover:border-[#d9ad58] hover:bg-[#d9ad58] hover:text-slate-950"
                aria-label={lang === "es" ? "Volver arriba" : "Back to top"}
              >
                {lang === "es" ? "Volver arriba" : "Back to top"}
                <ArrowRight className="-rotate-90" size={16} />
              </button>
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
              <a href={lang === "es" ? "/contacto/" : "/en/contact/"} className="transition hover:text-white">
                {t.terms}
              </a>
            </div>
          </div>
          <p
            className="mx-auto mt-6 max-w-7xl text-center text-sm font-semibold leading-7 text-white/70"
            aria-label={
              lang === "es"
                ? "Servicios de Kabin en México y Querétaro"
                : "Kabin services in Mexico and Queretaro"
            }
          >
            {(lang === "es" ? seoKeywordsEs : seoKeywordsEn).map((keyword, index) => (
              <React.Fragment key={keyword}>
                {index > 0 && <span aria-hidden="true"> · </span>}
                <span>{keyword}</span>
              </React.Fragment>
            ))}
          </p>
        </div>
      </footer>
    </div>
  );
}
