import type { Localized } from "../i18n";
import type { CaseStudy } from "./types";

// Copy source: Juan's case study doc "Matica Estudio — caso de estudio" (Oct 2026).
// Never invent metrics: the studio launched in October 2026 and has no results to show yet.
// Kept out on purpose: the revenue goal, and screenshots (Juan will add them later).

const en: CaseStudy = {
  slug: "matica-estudio",
  title: "Matica Estudio",
  year: "2026",
  summary: "A design studio by subscription, from business model to client app, launched in one week.",
  eyebrow: "Matica Estudio · Own product: business, brand, design & build · 2026",
  headline: "A design studio by subscription, from business model to client app, launched in one week",
  intro:
    "Matica Estudio is my monthly design subscription for startups, small businesses and agencies in Spain and Latin America. For a fixed fee, a company requests all the design it needs and gets each piece in 48 business hours. I designed it, launched it and run it: the brand, the landing page, the pricing and the app where clients request and approve their work.",
  illustration: {
    kind: "matica-app",
    caption: "Illustration of the client app with sample data.",
  },
  link: { label: "maticaestudio.com", href: "https://maticaestudio.com/?utm_source=juanperozo&utm_medium=portfolio" },
  metrics: [
    { label: "landing and client app, live", value: "1 week" },
    { label: "per delivered piece", value: "48 h" },
    { label: "fixed monthly cost", value: "Near zero" },
  ],
  facts: [
    { label: "Role", value: "Business, brand, design & build" },
    { label: "Duration", value: "1 week" },
    { label: "Sector", value: "Design services" },
    { label: "Built with", value: "Claude Code, Cloudflare Workers" },
  ],
  glance: {
    problem:
      "Companies that publish, sell and present every week need design all the time, and in-house hires, freelancers and agencies all charge a lot for that continuity.",
    whatIDid:
      "A design studio by subscription: the business model, the brand, a landing page with pricing by country, and a client app to request, review and approve every piece.",
    result:
      "The whole system went live in one week with a near-zero fixed cost. It launched in October 2026, so there are no results to show yet.",
  },
  problem: {
    heading: "Companies need design every week, and every usual option makes that continuity expensive.",
    body: [
      "A client doesn't buy a piece: they buy not having to think about who does their design. An in-house designer means a salary, payroll taxes and an employment contract. A freelancer depends on their own schedule, and the brand has to be explained every time. A traditional agency charges high retainers and takes weeks per project.",
    ],
  },
  findings: [
    {
      title: "Clients pay for continuity, not for pieces",
      body: "A fixed fee, short turnaround times and the brand always on file solve what the usual options make expensive.",
    },
    {
      title: "A cap is what makes the promise keepable",
      body: "With a maximum of 8 brands at a time, 48 hours is a promise I can keep. It also gives me predictable income and a clear limit on work.",
    },
    {
      title: "Not everything fits a monthly rhythm",
      body: "Building a full website doesn't fit a 48-hour cycle, so it's sold as a project with a fixed price and timeline. The rule: all the design in your plan, development as a project.",
    },
  ],
  decisions: [
    {
      title: "An animated studio instead of a 3D hero",
      body: "The hero shows a request arriving by chat and the piece designing itself, in an 18-second loop with three examples (a presentation, a carousel, a landing page) that end with “Delivered in 39 / 44 / 47 h”.",
      why: "I first tried a 3D hero with Three.js. The animated studio explains the service instead of decorating it, and it weighs much less.",
    },
    {
      title: "One price, picked by the server",
      body: "Each visitor sees a single price, chosen by the server from their country: no region selector and no number changing as the page loads. Both plans share one card, with the open slots and the guarantee in view. Esencial (one active request) is USD 390 a month in Latin America, €790 in Spain and USD 790 in the US; Pro (two requests with priority, plus full branding, apps, animation and a monthly call) is USD 890, €1,490 and USD 1,490. The one-off project sits in a quiet strip, without the action color, so it doesn't compete with the plans.",
      why: "I ruled out a country selector and redirecting by language: the price arrives right from the server, and English is a link, not a redirect.",
    },
    {
      title: "Its own client app, instead of Notion and a Slack bot",
      body: "After paying, a client signs in with an email link, no password, and uploads their brand kit. They request each piece with an assistant that only asks for what's missing, or with a short form, then review, ask for changes or approve. Approving starts the next request in their list on its own. On my side, I see what's due today, billing and the business numbers.",
      why: "Notion and a Slack bot worked for taking requests, but they spread the experience across other companies' tools. One app keeps the whole relationship in one place.",
    },
    {
      title: "A warm identity with fixed color roles",
      body: "A single light theme on a cream background with near-black text. Green is for the brand and calm; mango is only for actions, always with dark text on top. Unbounded for headings, Onest for text. Glass only in the hero and the closing section; the middle uses solid cards so it reads without effort. Animations are slow, have a reason, and turn off for visitors who ask for less motion.",
      why: "I dropped dark mode to keep one warm identity, and Webflow and Framer to keep full control of the code and the cost.",
    },
  ],
  results: {
    heading: "A complete system, live in one week, with a near-zero fixed cost.",
    body: [
      "The landing page and the client app shipped in one week, from October 11 to 18, 2026, with 123 published changes. I built it with Claude Code under my direction: I defined the design, the rules and the scope of each part, and reviewed every screen before publishing it. It runs on Cloudflare Workers with a D1 database, the request assistant uses the Claude API at about USD 0.001 per request, and payments go through Payoneer because Stripe doesn't accept Argentine accounts without a US company.",
      "Matica is very new, so there are no visits, inquiries or clients worth publishing yet.",
    ],
    next: "Measurement is ready: analytics track visits and clicks on each plan, and the app counts inquiries, on-time deliveries and what clients ask for. This case will be updated with real client work.",
  },
};

const es: CaseStudy = {
  slug: "matica-estudio",
  title: "Matica Estudio",
  year: "2026",
  summary: "Un estudio de diseño por suscripción, del modelo de negocio a la app de clientes, lanzado en una semana.",
  eyebrow: "Matica Estudio · Producto propio: negocio, marca, diseño y desarrollo · 2026",
  headline: "Un estudio de diseño por suscripción, del modelo de negocio a la app de clientes, lanzado en una semana",
  intro:
    "Matica Estudio es mi estudio de diseño por suscripción mensual para startups, pymes y agencias de España y Latinoamérica. Por una cuota fija, la empresa pide todo el diseño que necesita y recibe cada pieza en 48 horas hábiles. Lo diseñé, lo puse en marcha y lo opero yo: la marca, la landing, los precios y la app donde los clientes piden y aprueban su trabajo.",
  illustration: {
    kind: "matica-app",
    caption: "Ilustración de la app de clientes con datos de ejemplo.",
  },
  link: { label: "maticaestudio.com", href: "https://maticaestudio.com/?utm_source=juanperozo&utm_medium=portfolio" },
  metrics: [
    { label: "landing y app de clientes, publicadas", value: "1 semana" },
    { label: "por pieza entregada", value: "48 h" },
    { label: "de costo fijo mensual", value: "Casi cero" },
  ],
  facts: [
    { label: "Rol", value: "Negocio, marca, diseño y desarrollo" },
    { label: "Duración", value: "1 semana" },
    { label: "Sector", value: "Servicios de diseño" },
    { label: "Hecho con", value: "Claude Code, Cloudflare Workers" },
  ],
  glance: {
    problem:
      "Las empresas que publican, venden y presentan todas las semanas necesitan diseño continuo, y un diseñador interno, un freelance o una agencia les cobran caro esa continuidad.",
    whatIDid:
      "Un estudio de diseño por suscripción: el modelo de negocio, la marca, una landing con precio por país y una app de clientes para pedir, revisar y aprobar cada pieza.",
    result:
      "Todo el sistema salió en una semana, con un costo fijo de casi cero. Se lanzó en octubre de 2026, así que todavía no hay resultados que mostrar.",
  },
  problem: {
    heading: "Las empresas necesitan diseño todas las semanas, y cada opción habitual les cobra caro esa continuidad.",
    body: [
      "El cliente no compra una pieza: compra dejar de pensar en quién le hace el diseño. Un diseñador interno implica sueldo, cargas y un contrato laboral. Un freelance depende de su agenda y hay que explicarle la marca cada vez. Una agencia tradicional cobra retainers altos y tarda semanas por proyecto.",
    ],
  },
  findings: [
    {
      title: "El cliente paga la continuidad, no las piezas",
      body: "Una cuota fija, plazos cortos y la marca siempre cargada resuelven lo que las opciones habituales hacen caro.",
    },
    {
      title: "Un cupo es lo que hace cumplible la promesa",
      body: "Con un máximo de 8 marcas a la vez, las 48 horas son una promesa que puedo cumplir. Además me da ingresos previsibles y un límite claro de trabajo.",
    },
    {
      title: "No todo entra en un ritmo mensual",
      body: "Desarrollar una web completa no entra en un ciclo de 48 horas, así que se vende como proyecto con precio y plazo cerrados. La regla: todo el diseño, en tu plan; el desarrollo, como proyecto.",
    },
  ],
  decisions: [
    {
      title: "Un estudio animado en lugar de un hero 3D",
      body: "El hero muestra un pedido que llega por chat y una pieza que se diseña sola, en un ciclo de 18 segundos con tres ejemplos (una presentación, un carrusel, una landing) que cierran con «Entregado en 39 / 44 / 47 h».",
      why: "Primero probé un hero 3D con Three.js. El estudio animado explica el servicio en vez de decorarlo, y pesa mucho menos.",
    },
    {
      title: "Un solo precio, elegido por el servidor",
      body: "Cada visitante ve un único precio, elegido en el servidor según su país: sin selector de región y sin que el número cambie al cargar la página. Los dos planes van en una tarjeta con los cupos y la garantía a la vista. Esencial (un pedido activo) cuesta USD 390 al mes en Latinoamérica, 790 € en España y USD 790 en EE. UU.; Pro (dos pedidos con prioridad, más branding completo, apps, animación y una llamada mensual) cuesta USD 890, 1.490 € y USD 1.490. El proyecto puntual va en una franja discreta, sin color de acción, para no competir con los planes.",
      why: "Descarté un selector de país y redirigir por idioma: el precio llega correcto desde el servidor y el inglés es un link, no una redirección.",
    },
    {
      title: "Una app de clientes propia, en lugar de Notion y un bot de Slack",
      body: "Al pagar, el cliente entra con un link por correo, sin contraseña, y carga su kit de marca. Pide cada pieza con un asistente que le pregunta solo lo que falta, o con un formulario corto, y después revisa, pide cambios o aprueba. Al aprobar, arranca solo el siguiente pedido de su lista. De mi lado, veo lo que vence hoy, la facturación y los números del negocio.",
      why: "Notion y un bot de Slack servían para recibir pedidos, pero repartían la experiencia en herramientas ajenas. Una app propia deja toda la relación en un solo lugar.",
    },
    {
      title: "Una identidad cálida con colores de función fija",
      body: "Un único tema claro sobre fondo crema y texto casi negro. El verde es para la marca y la calma; el mango, solo para las acciones y siempre con texto oscuro encima. Unbounded para títulos y Onest para texto. Vidrio solo en el hero y en el cierre; las secciones del medio usan tarjetas sólidas para que se lean sin esfuerzo. Animaciones lentas y con motivo, que se apagan si el visitante pide menos movimiento.",
      why: "Descarté el modo oscuro para sostener una sola identidad cálida, y Webflow y Framer para tener control total del código y del costo.",
    },
  ],
  results: {
    heading: "Un sistema completo, publicado en una semana, con un costo fijo de casi cero.",
    body: [
      "La landing y la app de clientes salieron en una semana, del 11 al 18 de octubre de 2026, con 123 cambios publicados. La construí con Claude Code bajo mi dirección: yo definía el diseño, las reglas y el alcance de cada parte, y revisaba cada pantalla antes de publicarla. Corre en Cloudflare Workers con una base de datos D1, el asistente de pedidos usa la API de Claude a unos USD 0,001 por pedido, y el cobro va por Payoneer porque Stripe no acepta cuentas de Argentina sin una empresa en EE. UU.",
      "Matica es muy nueva, así que todavía no hay cifras de visitas, consultas ni clientes que valga la pena publicar.",
    ],
    next: "La medición ya está lista: la analítica registra visitas y clics en cada plan, y la app cuenta las consultas, las entregas a tiempo y lo que piden los clientes. Este caso se va a actualizar con trabajos reales de clientes.",
  },
};

export const maticaEstudio: Localized<CaseStudy> = { en, es };
