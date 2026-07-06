import { resolve } from "node:path";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const seoPages = [
  ["seguros", "es", "Seguros y protección patrimonial | Kabin", "Seguros de vida, gastos médicos, retiro, protección empresarial y patrimonial con acompañamiento profesional."],
  ["ecommerce", "es", "Servicios fiscales y contables para cotizar | Kabin", "Cotiza servicios fiscales, contables y empresariales con alcance y precios claros."],
  ["eventos-noticias", "es", "Eventos y noticias fiscales y financieras | Kabin", "Noticias, eventos y contenidos sobre impuestos, finanzas, seguros y patrimonio en México."],
  ["contacto", "es", "Contacto y asesoría profesional | Kabin", "Contacta a Kabin para recibir asesoría fiscal, contable, financiera, patrimonial o de seguros."],
  ["eventos-noticias/cierre-mes-fiscal", "es", "Que revisar antes de cerrar el mes fiscal | Kabin", "Guía práctica para ordenar facturas, pagos, deducciones y pendientes antes del cierre fiscal."],
  ["eventos-noticias/indicadores-salud-empresa", "es", "Indicadores simples para entender la salud de tu empresa | Kabin", "Margen, flujo, obligaciones y reservas para tomar mejores decisiones financieras."],
  ["eventos-noticias/retiro-seguros-patrimonio", "es", "Retiro, seguros y patrimonio: por dónde empezar | Kabin", "Cómo integrar protección financiera, ahorro y patrimonio sin perder de vista el impacto fiscal."],
  ["en/insurance", "en", "Insurance and Wealth Protection | Kabin", "Life, medical, retirement, business, and wealth protection solutions with professional support."],
  ["en/ecommerce", "en", "Tax and Accounting Services to Quote | Kabin", "Quote clearly scoped tax, accounting, and business services in Mexico."],
  ["en/events-news", "en", "Tax and Financial Events & News | Kabin", "News, events, and insights about tax, finance, insurance, and wealth in Mexico."],
  ["en/contact", "en", "Contact and Professional Advice | Kabin", "Contact Kabin for tax, accounting, financial, wealth, or insurance advice in Mexico."],
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
        const structuredData = article
          ? { "@context": "https://schema.org", "@type": "Article", headline: title.replace(/ \| Kabin$/, ""), description, url, inLanguage: lang === "es" ? "es-MX" : "en", publisher: { "@type": "Organization", name: "Kabin Consultoría Fiscal y Financiera", url: "https://www.kabinconsultores.com/" } }
          : service
            ? { "@context": "https://schema.org", "@type": "Service", name: title.replace(/ \| Kabin$/, ""), description, url, areaServed: "México", provider: { "@type": "ProfessionalService", name: "Kabin Consultoría Fiscal y Financiera", url: "https://www.kabinconsultores.com/" } }
            : { "@context": "https://schema.org", "@type": "WebPage", name: title.replace(/ \| Kabin$/, ""), description, url, inLanguage: lang === "es" ? "es-MX" : "en" };
        const html = templates[lang]
          .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
          .replace(/<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${description}" />`)
          .replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${url}" />`)
          .replace(/<link rel="alternate" hreflang="es-MX" href="[^"]*"\s*\/?>/, `<link rel="alternate" hreflang="es-MX" href="${esUrl}" />`)
          .replace(/<link rel="alternate" hreflang="en" href="[^"]*"\s*\/?>/, `<link rel="alternate" hreflang="en" href="${enUrl}" />`)
          .replace(/<link rel="alternate" hreflang="x-default" href="[^"]*"\s*\/?>/, `<link rel="alternate" hreflang="x-default" href="${esUrl}" />`)
          .replace(/<meta property="og:type" content="[^"]*"\s*\/?>/, `<meta property="og:type" content="${article ? "article" : "website"}" />`)
          .replace(/<meta property="og:title" content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${title}" />`)
          .replace(/<meta property="og:description" content="[^"]*"\s*\/?>/, `<meta property="og:description" content="${description}" />`)
          .replace(/<meta property="og:url" content="[^"]*"\s*\/?>/, `<meta property="og:url" content="${url}" />`)
          .replace(/<meta name="twitter:title" content="[^"]*"\s*\/?>/, `<meta name="twitter:title" content="${title}" />`)
          .replace(/<meta name="twitter:description" content="[^"]*"\s*\/?>/, `<meta name="twitter:description" content="${description}" />`)
          .replace("</head>", `<script type="application/ld+json">${JSON.stringify(structuredData)}</script></head>`)
          .replace(/<div id="root">[\s\S]*?<\/div>/, `<div id="root"><main><h1>${title.replace(/ \| Kabin$/, "")}</h1><p>${description}</p></main></div>`);
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
