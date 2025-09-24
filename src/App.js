import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Check, Globe, Shield, Zap, Hammer, Settings, ArrowRight, Mail, Phone, Stars } from "lucide-react";
import logo from './img/logo-min.png'

import beanz from './img/cafe.png'
import lex from './img/lex.png'
import burger from './img/burger.png'

// --- Lightweight UI Primitives (Tailwind) ---
const Button = ({ asChild, children, variant = "solid", size = "md", className = "", ...props }) => {
  const sizes = { sm: "px-3 py-1.5 text-sm", md: "px-4 py-2", lg: "px-5 py-2.5 text-base" };
  const variants = {
    solid: "bg-black text-white hover:bg-black/90",
    outline: "border border-gray-300 hover:bg-gray-50",
    ghost: "hover:bg-gray-100",
  };
  const base = "inline-flex items-center justify-center cursor-pointer select-none rounded-xl transition";
  const cn = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...props, // <-- reenvía onClick, href, etc.
      className: `${children.props.className ?? ""} ${cn}`.trim(),
    });
  }
  return <button className={cn} {...props}>{children}</button>;
};


const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl border border-gray-200 bg-white shadow-sm ${className}`}>{children}</div>
);
const CardHeader = ({ children, className = "" }) => (
  <div className={`p-5 border-b border-gray-100 ${className}`}>{children}</div>
);
const CardTitle = ({ children, className = "" }) => (
  <h3 className={`font-semibold tracking-tight ${className}`}>{children}</h3>
);
const CardContent = ({ children, className = "" }) => (
  <div className={`p-5 ${className}`}>{children}</div>
);
const Badge = ({ children, variant = "solid", className = "" }) => (
  <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${variant === "outline" ? "border border-gray-300 text-gray-700" : "bg-gray-900 text-white"} ${className}`}>{children}</span>
);

// --- Segmented Toggle (animado) ---
function Segmented({ options, value, onChange, layoutId = "seg-pill" }) {
  return (
    <div className="relative inline-flex bg-gray-100 rounded-full p-1">
      {options.map(opt => {
        const active = value === opt.value;
        return (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className={`relative px-3 py-1 text-xs font-medium rounded-full transition-colors ${active ? "text-white" : "text-gray-700 hover:text-black"}`}
          >
            {active && (
              <motion.span
                layoutId={layoutId}
                className="absolute inset-0 rounded-full bg-black"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            <span className="relative z-10">{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}

const copy = {
  en: {
    nav: { features: "Features", pricing: "Pricing", process: "Process", work: "Work", faq: "FAQ", contact: "Contact" },
    hero: {
      badge: "Fully-Managed Websites",
      title: "You won't even notice you have a website",
      subtitle: "We build, host and maintain blazing-fast sites. Simple pricing, proactive care, zero headaches.",
      ctaPrimary: "Get a proposal",
      ctaSecondary: "See pricing",
      trust: "Built for startups and SMBs",
    },
    features: {
      title: "Built for speed, simplicity and growth",
      items: [
        { icon: <Zap className="h-5 w-5" />, title: "Performance by default", desc: "React + Vercel for instant loads, modern DX, and best-practice SEO foundations." },
        { icon: <Shield className="h-5 w-5" />, title: "Managed hosting & security", desc: "Monitoring, updates, backups and SSL—handled. We keep your site healthy." },
        { icon: <Hammer className="h-5 w-5" />, title: "Ongoing improvements", desc: "Small changes included. Roadmaps for larger features and integrations." },
        { icon: <Settings className="h-5 w-5" />, title: "Automation when it matters", desc: "From lead capture to simple workflows—only where it adds real value." },
      ],
    },
    pricing: {
      title: "Transparent pricing",
      subtitle: "Choose the plan style you prefer. Toggle currency below.",
      groups: [
        {
          label: "Subscription (WaaS)",
          footnote: "Prices exclude taxes. 12-month term on subscription plans. Launch promo may waive setup.",
          plans: [
            {
              name: "WaaS Lite",
              tagline: "Start strong with essentials",
              setupEUR: 0, setupGBP: 0,
              monthlyEUR: 129, monthlyGBP: 129,
              term: "12-month term",
              includes: ["Up to 4 pages", "Customised template", "Core SEO & Analytics", "Up to 30 min/month changes"],
              highlight: false,
            },
            {
              name: "WaaS Standard",
              tagline: "Marketing-ready foundation",
              setupEUR: 0, setupGBP: 0,
              monthlyEUR: 199, monthlyGBP: 199,
              term: "12-month term",
              includes: ["Up to 8 pages + blog", "On-page SEO & tracking", "Quarterly performance reviews", "Up to 2 h/month changes"],
              highlight: true,
            },
            {
              name: "WaaS Pro",
              tagline: "Scale with CMS & automations",
              setupEUR: 0, setupGBP: 0,
              monthlyEUR: 329, monthlyGBP: 329,
              term: "12-month term",
              includes: ["Pages unlimited (fair use)", "Headless CMS + automations", "Priority support", "Up to 4 h/month changes"],
              highlight: false,
            },
          ],
        },
        {
          label: "Low setup + monthly",
          footnote: "Prices exclude VAT where applicable. Setup is one-time; management billed monthly.",
          plans: [
            {
              name: "Starter",
              tagline: "Serious presence, fast",
              setupEUR: 690, setupGBP: 690,
              monthlyEUR: 69, monthlyGBP: 69,
              includes: ["Up to 3 pages", "Core SEO & Analytics", "1 review round", "Up to 30 min/month changes"],
              highlight: false,
            },
            {
              name: "Essential",
              tagline: "Solid web, ready to convert",
              setupEUR: 990, setupGBP: 990,
              monthlyEUR: 99, monthlyGBP: 99,
              includes: ["Up to 5 pages (React) + Vercel", "Core SEO + performance baseline", "2 review rounds", "Up to 1 h/month changes"],
              highlight: true,
            },
            {
              name: "Grow",
              tagline: "Marketing-ready with blog",
              setupEUR: 1800, setupGBP: 1800,
              monthlyEUR: 180, monthlyGBP: 180,
              includes: ["Up to 10 pages + blog", "Advanced on-page SEO + tracking", "Semi-annual performance audit", "Up to 2–3 h/month changes"],
              highlight: false,
            },
          ],
        },
      ],
    },
    process: {
      title: "A clear, calm delivery",
      steps: [
        { title: "Contact", desc: "Tell us your goals and constraints." },
        { title: "Interview", desc: "Short discovery to align scope and outcomes." },
        { title: "Offer", desc: "Formal proposal with scope, cost, and timeline." },
        { title: "Contract", desc: "We proceed with a simple service agreement." },
        { title: "Draft", desc: "First version for review and feedback." },
        { title: "Changes", desc: "We refine quickly—no fuss." },
        { title: "Go-Live", desc: "Launch on Vercel, monitoring begins." },
      ],
    },
    work: {
      title: "Starter demos",
      subtitle: "Show your style before the first client—ship beautiful demos.",
      examples: [
        { name: "Smash Burger", tag: "Restaurant", image: burger},
        { name: "Lex Lawyers", tag: "Lawyer", image: lex },
        { name: "Beanz Coffee", tag: "E-commerce", image: beanz },
      ],
    },
    faq: {
      title: "Questions, answered",
      items: [
        { q: "What's included in the managed plan?", a: "Hosting, monitoring, updates, backups, and a monthly bucket of small changes. Bigger features are scoped and quoted." },
        { q: "Can you help with SEO?", a: "Yes—core SEO is included. Advanced SEO and content strategy are available in Grow/Scale or as add-ons." },
        { q: "How fast is delivery?", a: "A standard project ships in 2–4 weeks depending on scope and content readiness." },
      ],
    },
    cta: { title: "Let's make your website disappear (in a good way)", subtitle: "We handle it end-to-end so you can focus on the business.", primary: "Get a proposal", secondary: "Email us" },
    footer: { rights: "All rights reserved." },
  },
  es: {
    nav: { features: "Características", pricing: "Precios", process: "Proceso", work: "Trabajo", faq: "FAQ", contact: "Contacto" },
    hero: {
      badge: "Webs totalmente gestionadas",
      title: "No te enterarás de que tienes una web",
      subtitle: "Diseñamos, alojamos y mantenemos webs. Precios simples, cuidado proactivo y cero complicaciones.",
      ctaPrimary: "Pide una propuesta",
      ctaSecondary: "Ver precios",
      trust: "Hecho para startups y pymes",
    },
    features: {
      title: "Velocidad, simplicidad y crecimiento",
      items: [
        { icon: <Zap className="h-5 w-5" />, title: "Rendimiento por defecto", desc: "React + Vercel para cargas instantáneas, DX moderna y bases SEO sólidas." },
        { icon: <Shield className="h-5 w-5" />, title: "Hosting y seguridad gestionados", desc: "Monitorización, actualizaciones, copias y SSL—nos encargamos de todo." },
        { icon: <Hammer className="h-5 w-5" />, title: "Mejoras continuas", desc: "Cambios pequeños incluidos. Hoja de ruta para funciones e integraciones mayores." },
        { icon: <Settings className="h-5 w-5" />, title: "Automatización con sentido", desc: "De la captura de leads a flujos simples—solo donde aporte valor real." },
      ],
    },
    pricing: {
      title: "Precios transparentes",
      subtitle: "Elige el estilo de plan que prefieras. Cambia de moneda abajo.",
      groups: [
        {
          label: "Suscripción (WaaS)",
          footnote: "Precios sin impuestos. Compromiso de 12 meses en suscripción. La promo de lanzamiento puede incluir el setup.",
          plans: [
            {
              name: "WaaS Lite",
              tagline: "Empieza bien con lo esencial",
              setupEUR: 0, setupGBP: 0,
              monthlyEUR: 129, monthlyGBP: 129,
              term: "Compromiso 12 meses",
              includes: ["Hasta 4 páginas", "Plantilla personalizada", "SEO básico y Analytics", "Hasta 30 min/mes de cambios"],
              highlight: false,
            },
            {
              name: "WaaS Standard",
              tagline: "Base lista para marketing",
              setupEUR: 0, setupGBP: 0,
              monthlyEUR: 199, monthlyGBP: 199,
              term: "Compromiso 12 meses",
              includes: ["Hasta 8 páginas + blog", "SEO on-page y tracking", "Revisiones de rendimiento trimestrales", "Hasta 2 h/mes de cambios"],
              highlight: true,
            },
            {
              name: "WaaS Pro",
              tagline: "Escala con CMS y automatizaciones",
              setupEUR: 0, setupGBP: 0,
              monthlyEUR: 329, monthlyGBP: 329,
              term: "Compromiso 12 meses",
              includes: ["Páginas ilimitadas (uso razonable)", "Headless CMS + automatizaciones", "Soporte prioritario", "Hasta 4 h/mes de cambios"],
              highlight: false,
            },
          ],
        },
        {
          label: "Setup bajo + mensual",
          footnote: "Precios sin IVA donde aplique. Setup único; gestión con cobro mensual.",
          plans: [
            {
              name: "Starter",
              tagline: "Presencia seria, rápida",
              setupEUR: 690, setupGBP: 690,
              monthlyEUR: 69, monthlyGBP: 69,
              includes: ["Hasta 3 páginas", "SEO básico y Analytics", "1 ronda de revisión", "Hasta 30 min/mes de cambios"],
              highlight: false,
            },
            {
              name: "Essential",
              tagline: "Web sólida lista para convertir",
              setupEUR: 990, setupGBP: 990,
              monthlyEUR: 99, monthlyGBP: 99,
              includes: ["Hasta 5 páginas (React) + Vercel", "SEO básico + base de rendimiento", "2 rondas de revisión", "Hasta 1 h/mes de cambios"],
              highlight: true,
            },
            {
              name: "Grow",
              tagline: "Lista para marketing con blog",
              setupEUR: 1800, setupGBP: 1800,
              monthlyEUR: 180, monthlyGBP: 180,
              includes: ["Hasta 10 páginas + blog", "SEO on-page avanzado + tracking", "Auditoría de rendimiento semestral", "Hasta 2–3 h/mes de cambios"],
              highlight: false,
            },
          ],
        },
      ],
    },
    process: {
      title: "Entrega clara y tranquila",
      steps: [
        { title: "Contacto", desc: "Cuéntanos objetivos y limitaciones." },
        { title: "Entrevista", desc: "Descubrimiento corto para alinear alcance y resultados." },
        { title: "Oferta", desc: "Propuesta formal con alcance, coste y tiempos." },
        { title: "Contrato", desc: "Procedemos con un acuerdo de servicio simple." },
        { title: "Draft", desc: "Primera versión para revisar." },
        { title: "Cambios", desc: "Afinamos rápido—sin líos." },
        { title: "Go-Live", desc: "Lanzamos en Vercel y activamos monitorización." },
      ],
    },
    work: {
      title: "Demos iniciales",
      subtitle: "Muestra tu estilo antes del primer cliente—lanza demos cuidadas.",
      examples: [
        { name: "Smash Burger", tag: "Restaurante", image: burger},
        { name: "Lex Abogados", tag: "Abogados", image: lex },
        { name: "Beanz Coffee", tag: "E-commerce", image: beanz },
      ],
    },
    faq: {
      title: "Preguntas frecuentes",
      items: [
        { q: "¿Qué incluye el plan gestionado?", a: "Hosting, monitorización, actualizaciones, copias y un paquete mensual de cambios pequeños. Las funciones grandes se cotizan." },
        { q: "¿Podéis ayudar con SEO?", a: "Sí—el SEO básico está incluido. SEO avanzado y estrategia de contenido en Grow/Scale o como add-on." },
        { q: "¿En qué plazo entregáis?", a: "Un proyecto estándar se entrega en 2–4 semanas, según alcance y contenido disponible." },
      ],
    },
    cta: { title: "Hagamos que tu web desaparezca (en el buen sentido)", subtitle: "Nos encargamos de todo para que te centres en el negocio.", primary: "Pide una propuesta", secondary: "Escríbenos" },
    footer: { rights: "Todos los derechos reservados." },
  },
};

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-10">
      {eyebrow && (
        <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs tracking-wide uppercase">
          <Stars className="h-3.5 w-3.5" /> {eyebrow}
        </div>
      )}
      <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground text-lg">{subtitle}</p>}
    </div>
  );
}

function formatMoney(currency, amount) {
  const symbol = currency === "EUR" ? "€" : "£";
  return `${symbol}${amount.toLocaleString("en-GB", { maximumFractionDigits: 0 })}`;
}

export default function App() {
  const [lang, setLang] = useState("en");
  const [currency, setCurrency] = useState("EUR"); // EUR | GBP
  const t = useMemo(() => copy[lang], [lang]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <header className="sticky top-0 z-40 backdrop-blur bg-background/70 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div><img className="h-8" src={logo} alt="Logo" /></div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:opacity-70">{t.nav.features}</a>
            <a href="#pricing" className="hover:opacity-70">{t.nav.pricing}</a>
            <a href="#process" className="hover:opacity-70">{t.nav.process}</a>
            <a href="#work" className="hover:opacity-70">{t.nav.work}</a>
            <a href="#faq" className="hover:opacity-70">{t.nav.faq}</a>
            <a href="#contact" className="hover:opacity-70">{t.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <Segmented
              options={[{ label: "EN", value: "en" }, { label: "ES", value: "es" }]}
              value={lang}
              onChange={setLang}
              layoutId="lang-pill"
            />
            <Button asChild>
              <a href="#contact">{lang === "en" ? "Talk to us" : "Hablemos"}</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="max-w-6xl mx-auto px-4 py-20">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center">
            <Badge className="gap-2 px-3 py-1 text-xs" variant="outline">
              <Globe className="h-3.5 w-3.5" /> {t.hero.badge}
            </Badge>
            <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight">{t.hero.title}</h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">{t.hero.subtitle}</p>
            <div className="mt-8 flex items-center justify-center gap-3">
<Button size="lg" asChild>
  <a href="#contact">{t.hero.ctaPrimary}</a>
</Button>

<Button size="lg" variant="outline" asChild>
  <a href="#pricing">{t.hero.ctaSecondary}</a>
</Button>




            </div>
            <p className="mt-6 text-sm text-muted-foreground">{t.hero.trust}</p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 border-t">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading title={t.features.title} />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.features.items.map((f, i) => (
              <Card key={i} className="h-full">
                <CardHeader>
                  <div className="h-10 w-10 rounded-xl bg-primary/10 grid place-items-center mb-3">{f.icon}</div>
                  <CardTitle className="text-lg">{f.title}</CardTitle>
                </CardHeader>
                <CardContent><p className="text-sm text-muted-foreground">{f.desc}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 border-t">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading title={t.pricing.title} subtitle={t.pricing.subtitle} />

          {/* Currency toggle */}
          <div className="flex items-center justify-center mb-8">
            <Segmented
              options={[{ label: "EUR €", value: "EUR" }, { label: "GBP £", value: "GBP" }]}
              value={currency}
              onChange={setCurrency}
              layoutId="currency-pill"
            />
          </div>

          {/* Groups */}
          <div className="space-y-10">
            {t.pricing.groups.map((group, idx) => (
              <div key={idx}>
                <h3 className="text-xl font-semibold mb-4">{group.label}</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {group.plans.map((p, i) => {
                    const setup = currency === "EUR" ? p.setupEUR : p.setupGBP;
                    const monthly = currency === "EUR" ? p.monthlyEUR : p.monthlyGBP;
                    const setupText = `${formatMoney(currency, setup)} ${setup === 0 ? (lang === "en" ? "setup (launch)" : "de setup (lanzamiento)") : (lang === "en" ? "one-time" : "único")}`;
                    const monthlyText = `${formatMoney(currency, monthly)} / ${lang === "en" ? "mo" : "mes"}${p.term ? ` (${p.term})` : ""}`;

                    return (
                      <Card key={i} className={`${p.highlight ? "border-primary shadow-lg" : ""}`}>
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div>
                              <CardTitle className="text-2xl">{p.name}</CardTitle>
                              <p className="text-sm text-muted-foreground mt-1">{p.tagline}</p>
                            </div>
                            {p.highlight && <Badge>{lang === "en" ? "Recommended" : "Recomendado"}</Badge>}
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-1">
                            <p className="text-sm">{setupText}</p>
                            <p className="text-sm text-muted-foreground">{monthlyText}</p>
                          </div>
                          <ul className="mt-4 space-y-2">
                            {p.includes.map((it, j) => (
                              <li key={j} className="flex items-start gap-2 text-sm">
                                <Check className="h-4 w-4 mt-0.5" /> {it}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
                <p className="text-xs text-muted-foreground mt-4">{group.footnote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-16 border-t">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading title={t.process.title} />
          <ol className="grid md:grid-cols-4 gap-6 counter-reset">
            {t.process.steps.map((s, i) => (
              <li key={i} className="relative rounded-2xl border p-5 bg-card">
                <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-primary text-primary-foreground grid place-items-center font-semibold">
                  {i + 1}
                </div>
                <h3 className="font-medium">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="py-16 border-t">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading title={t.work.title} subtitle={t.work.subtitle} />
          <div className="grid md:grid-cols-3 gap-6">
            {t.work.examples.map((ex, i) => (
              <Card key={i} className="overflow-hidden group">
                <div className="aspect-[16/10] bg-muted grid place-items-center text-muted-foreground text-sm">
                  <img src={ex.image} />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{ex.name}</CardTitle>
                    <Badge variant="outline">{ex.tag}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{ex.note}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 border-t">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading title={t.faq.title} />
          <div className="grid md:grid-cols-3 gap-6">
            {t.faq.items.map((f, i) => (
              <Card key={i}>
                <CardHeader><CardTitle className="text-base">{f.q}</CardTitle></CardHeader>
                <CardContent><p className="text-sm text-muted-foreground">{f.a}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="py-16 border-t border-zinc-200">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_200px_at_100%_0%,rgba(0,0,0,0.06),transparent_70%)]" />
            <CardHeader className="relative z-10">
              <CardTitle className="text-2xl">{t.cta.title}</CardTitle>
              <p className="text-zinc-600 mt-2">{t.cta.subtitle}</p>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="grid gap-6 md:grid-cols-2">
                {/* Left: phone & email */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-zinc-900" />
                    <a href="tel:+34609552327" className="text-lg md:text-xl font-medium hover:underline" aria-label={lang === "en" ? "Call us" : "Llámanos"}>
                      +34 609 552 327
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-zinc-900" />
                    <a href="mailto:info@bonsaiistudio.com" className="text-lg md:text-xl font-medium hover:underline break-all" aria-label={lang === "en" ? "Email us" : "Escríbenos"}>
                      info@bonsaiistudio.com
                    </a>
                  </div>
                </div>

                {/* Right: actions */}
                <div className="flex flex-col sm:flex-row md:flex-col gap-3">
                  <Button size="lg" asChild>
                    <a
                      href="mailto:info@bonsaiistudio.com?subject=Bonsaii%20Studio%20—%20Project%20Inquiry"
                      aria-label={lang === "en" ? "Send an email" : "Enviar un correo"}
                      target="_blank"
                    >
                      <Mail className="h-4 w-4 mr-2 inline" />
                      {lang === "en" ? "Send an email" : "Enviar correo"}
                    </a>
                  </Button>

                  <Button size="lg" variant="ghost" asChild>
                    <a href="tel:+34609552327" aria-label={lang === "en" ? "Call by phone" : "Llamar por teléfono"}>
                      <Phone className="h-4 w-4 mr-2 inline" />
                      {lang === "en" ? "Call by phone" : "Llamar por teléfono"}
                    </a>
                  </Button>
                </div>
              </div>

              <p className="text-xs text-zinc-500 mt-6">
                {lang === "en" ? "Prefer WhatsApp? Add the phone above and say hi." : "¿Prefieres WhatsApp? Guarda el número y salúdanos."}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-10 border-t">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Bonsaii Studio. {t.footer.rights}</p>
          <div className="text-xs text-muted-foreground">
            {lang === "en" ? (
              <span>Deployed on Vercel • Built with React • Cookies only if needed</span>
            ) : (
              <span>Desplegado en Vercel • Hecho con React • Cookies solo si son necesarias</span>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
