import { G as jsxRuntimeExports } from "./server-CoAeSUMu.js";
import { L as Link } from "./router-BUnO4HPk.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const directions = [{
  slug: "huerto-sereno",
  name: "Huerto Sereno",
  tagline: "Cálido · Terrenal · Almanaque",
  description: "Paleta de hueso, salvia y arcilla. Tipografía Fraunces. Sensación de papel y campo al amanecer.",
  bg: "linear-gradient(135deg, #f9f7f2 0%, #e8e2d5 100%)",
  fg: "#2a2c24",
  accent: "#7e8d77",
  chip: "#cc856a"
}, {
  slug: "cosmos-biodinamico",
  name: "Cosmos Biodinámico",
  tagline: "Premium · Espiritual · Constelación",
  description: "Midnight con oro y lavanda. Glassmorphism ligero. Tipografía Playfair italic. Sensación cósmica y mística.",
  bg: "linear-gradient(135deg, #0a0e1a 0%, #1a1f3a 100%)",
  fg: "#fefce8",
  accent: "#f0d78c",
  chip: "#c4b5fd"
}, {
  slug: "misticismo-organico",
  name: "Misticismo Orgánico",
  tagline: "Fresco · Botánico · Amigable",
  description: "Sage y oliva con detalles cálidos. Outfit + Fraunces. Botánico moderno, luminoso y muy accesible.",
  bg: "linear-gradient(135deg, #fcfbf7 0%, #e3eae3 100%)",
  fg: "#2d362d",
  accent: "#606c38",
  chip: "#d4a373"
}];
function Showcase() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-neutral-50 text-neutral-900", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "max-w-6xl mx-auto px-6 pt-16 pb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-mono tracking-[0.3em] text-neutral-500 uppercase mb-4", children: "Prototipo · Mobile UI · iOS + Android" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl md:text-6xl font-serif italic tracking-tight mb-4", children: "Alma Calenda" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-2xl text-lg text-neutral-600 leading-relaxed", children: "Tres direcciones visuales completas para la app de agricultura biodinámica. Cada una incluye el flujo de 10 pantallas: splash, autenticación, calendarios, intereses, home con bottom nav, detalle de día y de actividad. Elige una para presentar a tu cliente." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "max-w-6xl mx-auto px-6 pb-24 grid md:grid-cols-3 gap-6", children: directions.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/${d.slug}`, className: "group block rounded-3xl overflow-hidden ring-1 ring-black/5 hover:ring-black/20 transition-all hover:-translate-y-1 hover:shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-[4/5] p-8 flex flex-col justify-between", style: {
      background: d.bg,
      color: d.fg
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full", style: {
          background: `${d.accent}22`,
          color: d.accent
        }, children: "Dirección" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full", style: {
          background: `radial-gradient(circle at 30% 30%, ${d.accent}, ${d.chip})`
        } })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-serif italic mb-2", children: d.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm opacity-70 mb-6", children: d.tagline }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed opacity-80", children: d.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center gap-2 text-sm font-medium", children: [
          "Ver flujo completo",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition-transform group-hover:translate-x-1", children: "→" })
        ] })
      ] })
    ] }) }, d.slug)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-neutral-200 py-8 text-center text-xs text-neutral-500 font-mono tracking-widest uppercase", children: "Alma Calenda · Prototipo de presentación · 2026" })
  ] });
}
export {
  Showcase as component
};
