const FORMSPREE_ENDPOINT = "https://formspree.io/f/mpqndjbl";
const CRM_LEAD_ENDPOINT = "https://crm-suites-o7.vercel.app/api/public/o7digital/leads";

const KABIN_TENANT_ID = "7c6ee9bd-d811-426e-a5c4-d8d3fbb38c13";
const KABIN_TENANT_NAME = "KABIN CONSULTORES";
const COPY_EMAILS = ["octavio.mondragon@kabinconsultores.com", "octaviomc67@gmail.com"];

const readBody = async (request) => {
  const chunks = [];
  for await (const chunk of request) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString("utf8");
  return raw ? JSON.parse(raw) : {};
};

const clean = (value) => (typeof value === "string" ? value.trim() : value);

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    const body = await readBody(request);
    const firstName = clean(body.nombre);
    const lastName = clean(body.apellido);
    const email = clean(body.email);
    const phone = clean(body.telefono);
    const industry = clean(body.tipo_industria);
    const message = clean(body.mensaje);
    const packageTitle = clean(body.forfait_seleccionado);
    const packagePrice = body.precio_forfait;
    const packageTotal = body.total_forfait;
    const language = clean(body.idioma) || "es";

    if (!firstName || !lastName || !email || !phone || !industry || !message) {
      return response.status(400).json({ ok: false, error: "Missing required fields" });
    }

    const formspreePayload = {
      _subject: `Nueva cotización Kabin: ${packageTitle || "Forfait"}`,
      _replyto: email,
      _cc: COPY_EMAILS.join(","),
      tenant: KABIN_TENANT_NAME,
      forfait_seleccionado: packageTitle,
      precio_forfait: packagePrice,
      total_forfait: packageTotal,
      nombre: firstName,
      apellido: lastName,
      email,
      telefono: phone,
      tipo_industria: industry,
      mensaje: message,
      origen: "kabin-ecommerce",
    };

    const crmPayload = {
      tenantId: KABIN_TENANT_ID,
      tenantName: KABIN_TENANT_NAME,
      firstName,
      lastName,
      email,
      phone,
      industry,
      message,
      source: "Kabin ecommerce",
      siteCode: "kabin",
      language,
      packageTitle,
      packagePrice,
      packageTotal,
      currency: "MXN",
    };

    const [formspreeResult, crmResult] = await Promise.allSettled([
      fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formspreePayload),
      }),
      fetch(CRM_LEAD_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-o7-webhook-secret": process.env.O7_PUBLIC_LEADS_SECRET || "",
        },
        body: JSON.stringify(crmPayload),
      }),
    ]);

    const formspreeOk = formspreeResult.status === "fulfilled" && formspreeResult.value.ok;
    const crmOk = crmResult.status === "fulfilled" && crmResult.value.ok;

    if (!formspreeOk || !crmOk) {
      return response.status(502).json({
        ok: false,
        formspreeOk,
        crmOk,
        error: "Lead delivery failed",
      });
    }

    return response.status(200).json({ ok: true });
  } catch (error) {
    return response.status(500).json({ ok: false, error: "Unexpected server error" });
  }
}
