import React, { useMemo, useState } from "react";
import { MessageCircle, X } from "lucide-react";

const CHAT_ENDPOINT = "https://ai-concierge-production-4e92.up.railway.app/chat";
const LEAD_ENDPOINT = "https://www.o7digital.com/api/o7-lead";
const CLIENT_ID = "kabin";

export default function SofiaChat({ lang = "es" }) {
  const isEnglish = lang === "en";
  const copy = useMemo(
    () =>
      isEnglish
        ? {
            launcher: "Need guidance?",
            title: "SOFIA",
            subtitle: "Kabin assistant · Online",
            hello: "Hello, I am Sofia. How can I help you with your accounting, tax, or financial consulting needs?",
            lead: "Leave your details so a Kabin advisor can contact you.",
            firstName: "First name",
            lastName: "Last name",
            email: "Email",
            phone: "Phone",
            sendLead: "Send my details",
            sent: "Thank you. Your details were sent and a Kabin advisor will contact you soon.",
            input: "Write your question...",
            error: "I could not send the message. You can contact Kabin at contacto@kabinconsultores.com.",
          }
        : {
            launcher: "¿Necesitas ayuda?",
            title: "SOFIA",
            subtitle: "Asistente Kabin · En línea",
            hello: "Hola, soy Sofia. ¿En qué puedo ayudarte sobre consultoría contable, fiscal o financiera?",
            lead: "Deja tus datos para que un asesor de Kabin pueda contactarte.",
            firstName: "Nombre",
            lastName: "Apellido",
            email: "Correo",
            phone: "Teléfono",
            sendLead: "Enviar datos",
            sent: "Gracias. Tus datos fueron enviados y un asesor de Kabin te contactará pronto.",
            input: "Escribe tu pregunta...",
            error: "No pude enviar el mensaje. Puedes contactar a Kabin en contacto@kabinconsultores.com.",
          },
    [isEnglish],
  );

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: "bot", text: copy.hello }]);
  const [message, setMessage] = useState("");
  const [lead, setLead] = useState({ firstName: "", lastName: "", email: "", phone: "" });
  const [isSending, setIsSending] = useState(false);

  const addMessage = (role, text) => {
    setMessages((current) => [...current, { role, text }]);
  };

  const sendLead = async () => {
    try {
      await fetch(LEAD_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          siteCode: CLIENT_ID,
          assistantName: "Sofia",
          lead,
          message: messages.map((item) => `${item.role}: ${item.text}`).join("\n"),
        }),
      });
    } catch {
      // The chat remains useful even if lead delivery is temporarily unavailable.
    }
    addMessage("bot", copy.sent);
  };

  const sendMessage = async (event) => {
    event.preventDefault();
    const cleanMessage = message.trim();
    if (!cleanMessage || isSending) return;

    setMessage("");
    setIsSending(true);
    addMessage("user", cleanMessage);

    try {
      const response = await fetch(CHAT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clientId: CLIENT_ID,
          message: cleanMessage,
          metadata: {
            language: lang,
            page: window.location.href,
            lead,
          },
        }),
      });
      if (!response.ok) throw new Error(`Chat failed: ${response.status}`);
      const data = await response.json();
      addMessage("bot", data.reply || copy.error);
    } catch {
      addMessage("bot", copy.error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-[90] font-sans">
      {isOpen ? (
        <section className="flex h-[min(650px,calc(100vh-40px))] w-[min(410px,calc(100vw-28px))] flex-col overflow-hidden rounded-[1.7rem] border border-[#d9ad58]/40 bg-slate-950 shadow-2xl shadow-black/35">
          <header className="flex items-center justify-between gap-4 bg-gradient-to-br from-slate-950 via-[#0d2340] to-emerald-950 px-5 py-5 text-white">
            <div>
              <h2 className="text-2xl font-black tracking-wide text-[#d9ad58]">{copy.title}</h2>
              <p className="mt-1 text-sm font-semibold text-white/75">{copy.subtitle}</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-xl font-black text-white transition hover:bg-white/20"
              aria-label="Cerrar chat"
            >
              <X size={22} />
            </button>
          </header>

          <div className="flex-1 space-y-3 overflow-y-auto bg-[#07111f] px-4 py-5">
            {messages.map((item, index) => (
              <div
                key={`${item.role}-${index}`}
                className={`max-w-[86%] whitespace-pre-wrap rounded-3xl px-4 py-3 text-sm leading-6 ${
                  item.role === "user"
                    ? "ml-auto rounded-br-md bg-[#d9ad58] text-slate-950"
                    : "rounded-bl-md bg-white/10 text-white"
                }`}
              >
                {item.text}
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 bg-slate-950 px-4 py-4">
            <p className="mb-3 text-sm leading-5 text-white/65">{copy.lead}</p>
            <div className="grid grid-cols-2 gap-2">
              {["firstName", "lastName", "email", "phone"].map((field) => (
                <input
                  key={field}
                  value={lead[field]}
                  onChange={(event) => setLead((current) => ({ ...current, [field]: event.target.value }))}
                  placeholder={copy[field]}
                  className="min-w-0 rounded-xl border border-white/15 bg-white/10 px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/45 focus:border-[#d9ad58]"
                />
              ))}
            </div>
            <button
              type="button"
              onClick={sendLead}
              className="mt-3 w-full rounded-xl bg-[#d9ad58] px-4 py-3 text-sm font-black text-slate-950 transition hover:-translate-y-0.5"
            >
              {copy.sendLead}
            </button>
          </div>

          <form onSubmit={sendMessage} className="grid grid-cols-[1fr_54px] gap-2 border-t border-white/10 bg-slate-950 p-4">
            <input
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder={copy.input}
              className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/45 focus:border-[#d9ad58]"
            />
            <button
              type="submit"
              disabled={isSending}
              className="grid place-items-center rounded-2xl bg-white text-xl font-black text-slate-950 transition hover:-translate-y-0.5 disabled:opacity-60"
              aria-label="Enviar"
            >
              ›
            </button>
          </form>
        </section>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-3 rounded-full border border-[#d9ad58]/45 bg-slate-950 px-4 py-3 text-left text-white shadow-2xl shadow-black/25 transition hover:-translate-y-1"
          aria-label="Abrir chat Sofia"
        >
          <span className="grid h-12 w-12 place-items-center rounded-full bg-[#d9ad58] text-2xl font-black text-slate-950">S</span>
          <span className="text-sm font-black leading-tight">
            {copy.launcher}
            <br />
            Sofia
          </span>
          <MessageCircle size={20} className="text-[#d9ad58]" />
        </button>
      )}
    </div>
  );
}
