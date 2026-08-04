import { resolve } from "node:path";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const seoPages = [
  ["seguros", "es", "Seguros y protección patrimonial en Querétaro | Kabin", "Asesoría en seguros de vida, gastos médicos, retiro y protección patrimonial para personas, socios y empresas en Querétaro y México."],
  ["ecommerce", "es", "Servicios fiscales y contables en México | Kabin", "Cotiza diagnóstico fiscal, declaración anual, contabilidad, auditoría y gobierno corporativo con alcance claro para personas y PyMEs."],
  ["eventos-noticias", "es", "Guías fiscales y financieras para empresas | Kabin", "Artículos prácticos sobre impuestos, contabilidad, flujo de efectivo, seguros, retiro y patrimonio para personas y empresas en México."],
  ["contacto", "es", "Contacto para asesoría fiscal en Querétaro | Kabin", "Agenda asesoría fiscal, contable, financiera, patrimonial o de seguros para personas, emprendedores y empresas en Querétaro y México."],
  ["eventos-noticias/cierre-mes-fiscal", "es", "Qué revisar antes del cierre fiscal mensual | Kabin", "Guía para ordenar facturas, pagos, deducciones, conciliaciones y pendientes antes del cierre contable y fiscal mensual."],
  ["eventos-noticias/indicadores-salud-empresa", "es", "Indicadores financieros para PyMEs | Kabin", "Margen, flujo de efectivo, obligaciones, reservas y señales de riesgo para entender la salud financiera de tu empresa."],
  ["eventos-noticias/retiro-seguros-patrimonio", "es", "Retiro, seguros y patrimonio: por dónde empezar | Kabin", "Cómo integrar protección financiera, ahorro y patrimonio sin perder de vista el impacto fiscal."],
  ["en/insurance", "en", "Insurance and Wealth Protection in Queretaro | Kabin", "Advice on life, medical, retirement, business, and wealth protection for individuals, partners, and companies in Mexico."],
  ["en/ecommerce", "en", "Tax and Accounting Services in Mexico | Kabin", "Quote tax diagnosis, annual filing, accounting, audit, and corporate governance services with clear scope for individuals and SMBs."],
  ["en/events-news", "en", "Tax and Financial Guides for Businesses | Kabin", "Practical articles about taxes, accounting, cash flow, insurance, retirement, and wealth planning for people and companies in Mexico."],
  ["en/contact", "en", "Contact for Tax Advice in Queretaro | Kabin", "Schedule tax, accounting, financial, wealth, or insurance advice for individuals, entrepreneurs, and companies in Queretaro and Mexico."],
  ["en/events-news/monthly-tax-closing", "en", "What to review before monthly tax closing | Kabin", "A practical guide to organize invoices, payments, deductions, and accounting pending items."],
  ["en/events-news/business-health-indicators", "en", "Simple indicators to understand business health | Kabin", "Margin, cash flow, obligations, and reserves to support better business decisions."],
  ["en/events-news/retirement-insurance-wealth", "en", "Retirement, insurance, and wealth: where to start | Kabin", "How to integrate financial protection and savings while keeping tax impact in view."],
];

const alternatePairs = {
  seguros: "en/insurance",
  ecommerce: "en/ecommerce",
  "eventos-noticias": "en/events-news",
  contacto: "en/contact",
  "eventos-noticias/cierre-mes-fiscal": "en/events-news/monthly-tax-closing",
  "eventos-noticias/indicadores-salud-empresa": "en/events-news/business-health-indicators",
  "eventos-noticias/retiro-seguros-patrimonio": "en/events-news/retirement-insurance-wealth",
};

const organizationSchema = {
  "@type": "ProfessionalService",
  "@id": "https://www.kabinconsultores.com/#organization",
  name: "Kabin Consultoría Fiscal y Financiera",
  url: "https://www.kabinconsultores.com/",
  logo: "https://www.kabinconsultores.com/kabin.webp",
  image: "https://www.kabinconsultores.com/kabin.webp",
  email: "contacto@kabinconsultores.com",
  telephone: "+52 1 442 237 1769",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Querétaro",
    addressRegion: "Querétaro",
    addressCountry: "MX",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Querétaro" },
    { "@type": "Country", name: "México" },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+52 1 442 237 1769",
    email: "contacto@kabinconsultores.com",
    contactType: "customer service",
    areaServed: "MX",
    availableLanguage: ["Spanish", "English"],
  },
  knowsLanguage: ["es-MX", "en"],
  sameAs: ["https://www.instagram.com/kabin_consultoria"],
};

const pageDetails = {
  seguros: {
    heading: "Asesoría en seguros y protección patrimonial en Querétaro",
    summary: "Acompañamiento para elegir seguros de vida, gastos médicos, retiro y protección empresarial con una visión fiscal y patrimonial integrada para personas, socios y empresas.",
    body: [
      "La contratación de seguros no debería decidirse solo por precio o suma asegurada. Kabin revisa responsabilidades familiares, ingresos, deudas, etapa de vida, obligaciones empresariales y posibles beneficios fiscales para proponer una estructura de protección coherente.",
      "Acompañamos la revisión de seguros de vida, gastos médicos mayores, planes de retiro, protección para socios clave, continuidad empresarial y coberturas patrimoniales.",
    ],
    points: ["Protección financiera familiar", "Retiro con visión fiscal", "Continuidad patrimonial y empresarial"],
  },
  ecommerce: {
    heading: "Servicios fiscales y contables en México",
    summary: "Paquetes claros para diagnóstico fiscal, declaración anual, contabilidad recurrente, auditoría, patrimonio y gobierno corporativo para personas físicas, emprendedores y PyMEs.",
    body: [
      "Los paquetes están pensados para personas físicas, profesionistas independientes, emprendedores y PyMEs que necesitan resolver temas concretos con alcance, entregables y tiempos estimados.",
      "El flujo permite levantar una solicitud con contexto suficiente para entender actividad, régimen, documentos disponibles, urgencia y objetivo antes de proponer una ruta de trabajo.",
    ],
    points: ["Alcances y precios claros", "Soporte fiscal y contable", "Seguimiento profesional para personas y empresas"],
  },
  "eventos-noticias": {
    heading: "Guías fiscales y financieras para empresas",
    summary: "Contenidos prácticos sobre impuestos, finanzas, seguros, patrimonio, cierres mensuales y decisiones empresariales para operar con más claridad en México.",
    body: [
      "La sección reúne guías breves sobre cierres contables, obligaciones fiscales, indicadores financieros, ahorro, seguros y patrimonio.",
      "Los artículos están orientados a personas y empresas que necesitan entender sus números con más claridad y saber cuándo conviene pedir asesoría.",
    ],
    points: ["Guías fiscales", "Indicadores financieros", "Planeación patrimonial"],
  },
  contacto: {
    heading: "Contacto para asesoría fiscal, contable y financiera",
    summary: "Comunicación directa con Kabin para recibir acompañamiento fiscal, contable, financiero, patrimonial o de seguros en Querétaro y México.",
    body: [
      "El primer contacto busca entender la situación del cliente: tipo de actividad, obligaciones actuales, dudas principales, riesgos detectados y metas personales o empresariales.",
      "Atendemos consultas relacionadas con contabilidad, impuestos, auditorías, protección financiera, seguros, retiro, gestión patrimonial y gobierno corporativo.",
    ],
    points: ["Atención personalizada", "Diagnóstico inicial", "Asesoría para personas y empresas"],
  },
  "eventos-noticias/cierre-mes-fiscal": {
    heading: "Qué revisar antes de cerrar el mes fiscal",
    summary: "Recomendaciones para ordenar facturas, pagos, deducciones, conciliaciones y pendientes antes de presentar información contable.",
    points: ["Conciliación de ingresos y egresos", "Revisión de comprobantes", "Seguimiento de obligaciones fiscales"],
  },
  "eventos-noticias/indicadores-salud-empresa": {
    heading: "Indicadores simples para entender la salud de tu empresa",
    summary: "Margen, flujo de efectivo, obligaciones y reservas ayudan a tomar mejores decisiones financieras y operativas.",
    points: ["Margen y rentabilidad", "Flujo de efectivo", "Reservas y exposición al riesgo"],
  },
  "eventos-noticias/retiro-seguros-patrimonio": {
    heading: "Retiro, seguros y patrimonio",
    summary: "Cómo integrar protección financiera, ahorro e inversión sin perder de vista el impacto fiscal y la continuidad familiar.",
    points: ["Protección del ingreso", "Ahorro para el retiro", "Planeación patrimonial"],
  },
  "en/insurance": {
    heading: "Insurance and wealth protection advice",
    summary: "Support for life insurance, medical coverage, retirement, business protection, and wealth continuity with a tax-aware view.",
    body: [
      "Insurance decisions should not be based only on price or coverage amount. Kabin reviews family responsibilities, income, debt, life stage, business obligations, and possible tax considerations.",
      "We support reviews of life insurance, major medical coverage, retirement plans, key-partner protection, business continuity, and wealth-related coverage.",
    ],
    points: ["Family financial protection", "Tax-aware retirement", "Wealth and business continuity"],
  },
  "en/ecommerce": {
    heading: "Tax and accounting services to quote",
    summary: "Clearly scoped packages for tax diagnosis, annual filing, recurring accounting, audits, wealth planning, and corporate governance.",
    body: [
      "The packages are designed for individuals, independent professionals, entrepreneurs, and SMBs that need to solve specific matters with clear deliverables and estimated timing.",
      "The flow gathers enough context to understand activity, tax regime, available documents, urgency, and objective before proposing a work plan.",
    ],
    points: ["Clear scope and pricing", "Tax and accounting support", "Professional follow-up for individuals and businesses"],
  },
  "en/events-news": {
    heading: "Tax and financial events and news",
    summary: "Practical content about taxes, finance, insurance, wealth, monthly closings, and business decisions in Mexico.",
    body: [
      "This section gathers short guides on accounting closes, tax obligations, financial indicators, savings, insurance, and wealth.",
      "The articles are written for individuals and businesses that need clearer financial visibility and practical criteria for requesting advice.",
    ],
    points: ["Tax guides", "Financial indicators", "Wealth planning"],
  },
  "en/contact": {
    heading: "Contact Kabin for professional advice",
    summary: "Direct contact with Kabin for tax, accounting, financial, wealth, or insurance consulting in Mexico.",
    body: [
      "The first contact is used to understand the client's activity, current obligations, main questions, detected risks, and personal or business goals.",
      "We handle questions related to accounting, taxes, audits, financial protection, insurance, retirement, wealth management, and corporate governance.",
    ],
    points: ["Personalized attention", "Initial diagnosis", "Advice for individuals and businesses"],
  },
  "en/events-news/monthly-tax-closing": {
    heading: "What to review before monthly tax closing",
    summary: "Recommendations to organize invoices, payments, deductions, reconciliations, and pending items before accounting close.",
    points: ["Income and expense reconciliation", "Invoice review", "Tax obligation follow-up"],
  },
  "en/events-news/business-health-indicators": {
    heading: "Simple indicators to understand business health",
    summary: "Margin, cash flow, obligations, and reserves help support better financial and operating decisions.",
    points: ["Margin and profitability", "Cash flow", "Reserves and risk exposure"],
  },
  "en/events-news/retirement-insurance-wealth": {
    heading: "Retirement, insurance, and wealth",
    summary: "How to integrate financial protection, savings, and investments while keeping tax impact and family continuity in view.",
    points: ["Income protection", "Retirement savings", "Wealth planning"],
  },
};

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderSeoFallback(route, title, description) {
  const details = pageDetails[route] || { heading: title.replace(/ \| Kabin$/, ""), summary: description, points: [] };
  const body = details.body?.length
    ? details.body.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")
    : "";
  const list = details.points.length
    ? `<ul>${details.points.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}</ul>`
    : "";

  return `<div id="root"><main><h1>${escapeHtml(details.heading)}</h1><p>${escapeHtml(details.summary)}</p>${body}<h2>${escapeHtml(title.replace(/ \| Kabin$/, ""))}</h2><p>${escapeHtml(description)}</p>${list}</main></div>`;
}

function seoPagesPlugin() {
  return {
    name: "generate-seo-pages",
    apply: "build",
    async closeBundle() {
      const templates = {
        es: await readFile(resolve(import.meta.dirname, "dist/index.html"), "utf8"),
        en: await readFile(resolve(import.meta.dirname, "dist/en/index.html"), "utf8"),
      };
      for (const [route, lang, title, description] of seoPages) {
        const url = `https://www.kabinconsultores.com/${route}/`;
        const article = route.includes("events-news/") || route.includes("eventos-noticias/");
        const service = ["seguros", "ecommerce", "en/insurance", "en/ecommerce"].includes(route);
        const esRoute = lang === "es" ? route : Object.entries(alternatePairs).find(([, enRoute]) => enRoute === route)?.[0];
        const enRoute = lang === "en" ? route : alternatePairs[route];
        const esUrl = `https://www.kabinconsultores.com/${esRoute}/`;
        const enUrl = `https://www.kabinconsultores.com/${enRoute}/`;
        const breadcrumbSchema = {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: lang === "es" ? "Inicio" : "Home",
              item: lang === "es" ? "https://www.kabinconsultores.com/" : "https://www.kabinconsultores.com/en/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: title.replace(/ \| Kabin$/, ""),
              item: url,
            },
          ],
        };
        const structuredData = article
          ? { "@context": "https://schema.org", "@type": "Article", headline: title.replace(/ \| Kabin$/, ""), description, url, inLanguage: lang === "es" ? "es-MX" : "en", publisher: { "@type": "Organization", name: "Kabin Consultoría Fiscal y Financiera", url: "https://www.kabinconsultores.com/" }, mainEntityOfPage: url }
          : service
            ? { "@context": "https://schema.org", "@type": "Service", name: title.replace(/ \| Kabin$/, ""), description, url, areaServed: ["Querétaro", "México"], provider: organizationSchema }
            : { "@context": "https://schema.org", "@type": "WebPage", name: title.replace(/ \| Kabin$/, ""), description, url, inLanguage: lang === "es" ? "es-MX" : "en" };
        const html = templates[lang]
          .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
          .replace(/<meta\s+name="description"[\s\S]*?\/>/, `<meta name="description" content="${escapeHtml(description)}" />`)
          .replace(/<link\s+rel="canonical"[\s\S]*?\/>/, `<link rel="canonical" href="${url}" />`)
          .replace(/<link\s+rel="alternate"\s+hreflang="es-MX"[\s\S]*?\/>/, `<link rel="alternate" hreflang="es-MX" href="${esUrl}" />`)
          .replace(/<link\s+rel="alternate"\s+hreflang="en"[\s\S]*?\/>/, `<link rel="alternate" hreflang="en" href="${enUrl}" />`)
          .replace(/<link\s+rel="alternate"\s+hreflang="x-default"[\s\S]*?\/>/, `<link rel="alternate" hreflang="x-default" href="${esUrl}" />`)
          .replace(/<meta\s+property="og:type"[\s\S]*?\/>/, `<meta property="og:type" content="${article ? "article" : "website"}" />`)
          .replace(/<meta\s+property="og:title"[\s\S]*?\/>/, `<meta property="og:title" content="${escapeHtml(title)}" />`)
          .replace(/<meta\s+property="og:description"[\s\S]*?\/>/, `<meta property="og:description" content="${escapeHtml(description)}" />`)
          .replace(/<meta\s+property="og:url"[\s\S]*?\/>/, `<meta property="og:url" content="${url}" />`)
          .replace(/<meta\s+name="twitter:title"[\s\S]*?\/>/, `<meta name="twitter:title" content="${escapeHtml(title)}" />`)
          .replace(/<meta\s+name="twitter:description"[\s\S]*?\/>/, `<meta name="twitter:description" content="${escapeHtml(description)}" />`)
          .replace(
            "</head>",
            () => `<script type="application/ld+json">${JSON.stringify(structuredData)}</script><script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script></head>`,
          )
          .replace(/<div id="root">[\s\S]*?<\/div>/, renderSeoFallback(route, title, description));
        const outputDir = resolve(import.meta.dirname, "dist", route);
        await mkdir(outputDir, { recursive: true });
        await writeFile(resolve(outputDir, "index.html"), html);
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), seoPagesPlugin()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        en: resolve(import.meta.dirname, "en/index.html"),
      },
    },
  },
});
