import React from "react";
import logo from'./img/logo-min.png';

function Stat({ label, value }) {

  async function onSubmit(e) {
  e.preventDefault();
  const form = new FormData(e.currentTarget);
  const payload = {
    name: form.get('name'),
    email: form.get('email'),
    message: form.get('message'),
  };

  const res = await fetch('/api/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (res.ok) {
    alert('¡Gracias! Te contactaremos en breve.');
    e.currentTarget.reset();
  } else {
    const err = await res.json().catch(() => ({}));
    alert('No se pudo enviar. Inténtalo de nuevo.');
    console.error('Send error:', err);
  }
}

  return (
    <div className="rounded-2xl border p-4">
      <p className="text-xs text-neutral-500">{label}</p>
      <p className="mt-1 text-2xl font-bold">{value}</p>
    </div>
  );
}

function Card({ title, price, bullets, cta }) {
  return (
    <div className="rounded-3xl bg-white border shadow-sm p-6 flex flex-col">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-1 text-sm text-neutral-500">
        Entrega 2–6 semanas · Soporte 30 días
      </p>
      <p className="mt-4 text-2xl font-extrabold">{price}</p>
      <ul className="mt-4 space-y-2 text-sm text-neutral-700">
        {bullets.map((b, i) => (
          <li key={i}>• {b}</li>
        ))}
      </ul>
      <a
        href="#contact"
        className="mt-6 rounded-xl bg-black text-white px-4 py-2 text-center text-sm font-semibold hover:bg-black/90"
      >
        {cta}
      </a>
    </div>
  );
}

function Step({ no, title, text }) {
  return (
    <div className="rounded-3xl border p-6 bg-white">
      <div className="text-xs text-neutral-500">Paso {no}</div>
      <div className="mt-1 text-lg font-bold">{title}</div>
      <p className="mt-2 text-neutral-600 text-sm">{text}</p>
    </div>
  );
}

function Diff({ title, text }) {
  return (
    <div className="rounded-2xl border p-5 bg-white">
      <div className="font-semibold">{title}</div>
      <p className="mt-1 text-neutral-600 text-sm">{text}</p>
    </div>
  );
}

function Case({ title, metric }) {
  return (
    <div className="rounded-3xl border p-6 bg-white">
      <div className="text-sm text-neutral-500">{title}</div>
      <div className="mt-1 text-2xl font-bold">{metric}</div>
      <p className="mt-2 text-neutral-600 text-sm">
        Descripción breve del caso, reto y solución. Sustituye con datos reales
        al publicar.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Bonsaii Studio" className="h-7 w-auto" />
            <span className="sr-only">Bonsaii Studio</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:opacity-70">Servicios</a>
            <a href="#process" className="hover:opacity-70">Proceso</a>
            <a href="#work" className="hover:opacity-70">Casos</a>
            <a href="#about" className="hover:opacity-70">Nosotros</a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-black text-white px-4 py-2 text-sm hover:bg-black/90"
          >
            Solicitar propuesta
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-block rounded-full bg-neutral-100 px-3 py-1 text-xs tracking-wide">
              Transformación digital simple y eficiente
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">
              Webs y automatización que{" "}
              <span className="inline-block bg-gradient-to-r from-neutral-900 to-neutral-600 bg-clip-text text-transparent">
                hacen crecer
              </span>{" "}
              tu negocio
            </h1>
            <p className="mt-5 text-neutral-600 text-lg">
              En Bonsaii Studio diseñamos sistemas digitales limpios: sitios web,
              ecommerce y flujos de automatización que ahorran tiempo y convierten mejor.
              Ideal para pymes con ambición internacional.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="rounded-xl bg-black text-white px-5 py-3 text-sm font-semibold hover:bg-black/90">
                Pide una propuesta
              </a>
              <a href="#services" className="rounded-xl border px-5 py-3 text-sm font-semibold hover:bg-neutral-50">
                Ver paquetes
              </a>
            </div>
            <ul className="mt-6 grid grid-cols-2 gap-4 text-sm text-neutral-600">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-black" />Entrega en 2–6 semanas</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-black" />Enfoque en ROI y eficiencia</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-black" />Integraciones sin fricción</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-black" />Soporte claro y medible</li>
            </ul>
          </div>
          <div className="relative">
            <div className="rounded-3xl border shadow-sm p-6 bg-white">
              <div className="grid gap-4">
                <Stat label="Carga + rápida" value="< 2s" />
                <Stat label="Mejor conversión" value="+20%" />
                <Stat label="Automatizaciones" value="Email · CRM · Zapier" />
                <Stat label="Mercados" value="ES · UK · EU" />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:block w-40 h-40 rounded-3xl bg-neutral-100" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold">Servicios paquetizados</h2>
          <p className="mt-3 text-neutral-600 max-w-2xl">
            Paquetes claros, precios transparentes y entregables definidos. Pensados para obtener resultados sin complicaciones.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <Card
              title="Web Esencial Inteligente"
              price="1.200–2.500 €"
              bullets={[
                "Diseño responsive y rápido",
                "Copy y estructura orientada a conversión",
                "Integración WhatsApp/Email y analítica",
                "SEO técnico básico",
              ]}
              cta="Solicitar propuesta"
            />
            <Card
              title="Kit Ecommerce & Automatización"
              price="2.500–4.500 €"
              bullets={[
                "Tienda online optimizada",
                "Pasarelas de pago y logística",
                "Automatización de emails y abandonos",
                "Dashboards de ventas",
              ]}
              cta="Quiero este kit"
            />
            <Card
              title="Optimización Express"
              price="800–1.500 €"
              bullets={[
                "Auditoría de rendimiento y UX",
                "Mejoras de velocidad (Core Web Vitals)",
                "Arquitectura y SEO on-page",
                "Informe con acciones prioritarias",
              ]}
              cta="Mejorar mi web"
            />
          </div>
          <p className="mt-6 text-sm text-neutral-500">
            * Precios orientativos. Propuesta final según alcance, integraciones y plazos.
          </p>
        </div>
      </section>

      {/* Process */}
      <section id="process">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold">Nuestro proceso, sin fricción</h2>
          <div className="mt-8 grid md:grid-cols-4 gap-6">
            <Step no="01" title="Diagnóstico" text="Reunimos objetivos, datos y limitaciones. Priorizamos impacto y tiempos." />
            <Step no="02" title="Arquitectura" text="Definimos la estructura, UX y el sistema de contenidos que convierte." />
            <Step no="03" title="Ejecución" text="Diseño, desarrollo y automatizaciones con entregas semanales." />
            <Step no="04" title="Medición" text="Deploy en Vercel, analítica y mejoras continuas orientadas a ROI." />
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="bg-neutral-50 border-y">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold">Casos de estudio</h2>
          <p className="mt-3 text-neutral-600">Al lanzar tu primera versión, publica 2–3 casos: antes/después, métricas, aprendizajes.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <Case title="B2B SaaS – Web + CRM" metric="+32% leads" />
            <Case title="Academia online – Ecommerce" metric="+24% ventas" />
            <Case title="Consultora – Optimización" metric="-40% tiempo de carga" />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-3xl border p-8">
            <h3 className="text-2xl font-bold">Filosofía Bonsaii</h3>
            <p className="mt-3 text-neutral-600">
              Cuidamos lo esencial. Sistemas simples, medibles y mantenibles. Preferimos entregar menos, mejor, y seguir optimizando con datos.
            </p>
            <ul className="mt-6 space-y-2 text-neutral-700">
              <li>• Código moderno (React + Vite) y deploy en Vercel</li>
              <li>• Integraciones: Stripe, Shopify, Airtable, Make/Zapier</li>
              <li>• SEO técnico, rendimiento y accesibilidad</li>
              <li>• Enfoque internacional (ES/EN)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Qué nos hace distintos</h3>
            <div className="mt-6 grid gap-4">
              <Diff title="Orientados a ROI" text="Cada decisión se conecta a métricas de negocio: captación, conversión y retención." />
              <Diff title="Velocidad sin drama" text="Sprints cortos, entregas semanales y backlog priorizado. Nada de proyectos eternos." />
              <Diff title="Simplicidad elegante" text="Diseños limpios, copy claro y flujos que la gente entiende." />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-neutral-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">¿Hablamos de tu proyecto?</h2>
            <p className="mt-3 text-neutral-300">Cuéntanos objetivos, plazos y herramientas. En 48h recibirás una propuesta simple y cerrada.</p>
          </div>
          <div className="rounded-3xl bg-white text-neutral-900 p-6">
<form onSubmit={onSubmit} className="grid gap-4">
  <input name="name" placeholder="Nombre" className="border rounded-xl px-4 py-3" />
  <input name="email" type="email" placeholder="Email" className="border rounded-xl px-4 py-3" />
  <textarea name="message" placeholder="Mensaje" className="border rounded-xl px-4 py-3 min-h-[120px]" />
  <button type="submit" className="rounded-xl bg-black text-white px-5 py-3 text-sm font-semibold hover:bg-black/90">
    Enviar
  </button>
</form>


          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Bonsaii Studio. Minimal. Eficiente. Internacional.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-neutral-800">Privacidad</a>
            <a href="#" className="hover:text-neutral-800">Términos</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
