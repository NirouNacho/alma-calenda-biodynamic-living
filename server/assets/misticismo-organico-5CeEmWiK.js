import { N as reactExports, G as jsxRuntimeExports } from "./server-CoAeSUMu.js";
import { L as Link } from "./router-BUnO4HPk.js";
import { P as PhoneFrame } from "./PhoneFrame-iZZy-YZp.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const C = {
  bg: "#fcfbf7",
  sage: "#5b7c5b",
  sageLight: "#e3eae3",
  ink: "#2d362d",
  inkSoft: "#5e6b5e",
  clay: "#d4a373",
  clayDeep: "#bc8a5f",
  moon: "#fefae0",
  accent: "#606c38"
};
const screens = [{
  id: "splash",
  label: "Splash"
}, {
  id: "auth",
  label: "Auth"
}, {
  id: "calendars",
  label: "Calendarios"
}, {
  id: "interests",
  label: "Intereses"
}, {
  id: "calendar",
  label: "Calendario"
}, {
  id: "agenda",
  label: "Agenda"
}, {
  id: "blog",
  label: "Blog"
}, {
  id: "community",
  label: "Comunidad"
}, {
  id: "day",
  label: "Día"
}, {
  id: "activity",
  label: "Actividad"
}];
const serif = {
  fontFamily: "Fraunces, serif"
};
function Mistico() {
  const [active, setActive] = reactExports.useState("splash");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", style: {
    background: `linear-gradient(180deg, ${C.bg} 0%, ${C.sageLight} 100%)`,
    color: C.ink,
    fontFamily: "Outfit, system-ui, sans-serif"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "max-w-5xl mx-auto px-6 pt-10 pb-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "text-xs uppercase tracking-widest opacity-60 hover:opacity-100", children: "← Volver" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] tracking-[0.3em] uppercase opacity-50", children: "Dirección C" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: serif, className: "text-3xl italic", children: "Misticismo Orgánico" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto px-6 pb-8 flex flex-wrap gap-2 justify-center", children: screens.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActive(s.id), className: "px-3 py-1.5 rounded-full text-xs transition-all font-medium", style: {
      background: active === s.id ? C.accent : "white",
      color: active === s.id ? C.moon : C.inkSoft,
      boxShadow: active === s.id ? `0 4px 12px ${C.accent}33` : "0 1px 0 rgba(0,0,0,0.04)"
    }, children: [
      String(i).padStart(2, "0"),
      " · ",
      s.label
    ] }, s.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex justify-center px-6 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PhoneFrame, { bezel: "#2d362d", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full animate-[fadeIn_0.4s_ease-out] relative", style: {
      background: C.bg,
      color: C.ink
    }, children: render(active, setActive) }, active) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `@keyframes fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}` })
  ] });
}
function render(id, set) {
  switch (id) {
    case "splash":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Splash, {});
    case "auth":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Auth, {});
    case "calendars":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Calendars, {});
    case "interests":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Interests, {});
    case "calendar":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(CalHome, { onDay: () => set("day"), setTab: set });
    case "agenda":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Agenda, { onA: () => set("activity"), setTab: set });
    case "blog":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Blog, { setTab: set });
    case "community":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Community, { setTab: set });
    case "day":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Day, { onA: () => set("activity") });
    case "activity":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, {});
  }
}
function Splash() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full flex flex-col items-center justify-center relative overflow-hidden p-10", style: {
    background: `radial-gradient(ellipse at top, ${C.moon}, ${C.bg})`
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "absolute -top-10 -right-10 w-60 h-60 opacity-20", viewBox: "0 0 200 200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M100 30 Q60 80 100 100 Q140 80 100 30 Z", fill: C.sage }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M100 100 Q60 150 100 170 Q140 150 100 100 Z", fill: C.sage })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-28 h-28 mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 100 100", className: "w-full h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "50", r: "38", fill: C.moon, stroke: C.accent, strokeWidth: "1" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "50", r: "38", fill: C.sage, opacity: "0.15" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M50 25 Q60 50 50 75 Q40 50 50 25", fill: C.accent }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "50", r: "3", fill: C.clay })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: serif, className: "text-4xl italic mb-3", children: "Alma Calenda" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-center", style: {
      color: C.inkSoft
    }, children: "Ritmos de la tierra · Tu compañero biodinámico" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-12 flex gap-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-6 h-1 rounded-full", style: {
        background: C.accent
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1 h-1 rounded-full opacity-30", style: {
        background: C.accent
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1 h-1 rounded-full opacity-30", style: {
        background: C.accent
      } })
    ] })
  ] });
}
function Auth() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full p-7 pt-14 flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest font-bold mb-2", style: {
        color: C.clayDeep
      }, children: "Bienvenido" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { style: serif, className: "text-3xl italic leading-tight", children: [
        "Crea tu",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "biblioteca natural."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full h-13 py-3.5 rounded-2xl bg-white shadow-sm flex items-center justify-center gap-3 text-sm font-semibold", children: "🍎 Continuar con Apple" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full h-13 py-3.5 rounded-2xl bg-white shadow-sm flex items-center justify-center gap-3 text-sm font-semibold", children: "🌐 Continuar con Google" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 my-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px", style: {
        background: `${C.sage}33`
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-widest", style: {
        color: C.inkSoft
      }, children: "o con email" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px", style: {
        background: `${C.sage}33`
      } })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Inp, { label: "Correo", ph: "campo@tierra.com" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Inp, { label: "Contraseña", ph: "••••••••" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full py-4 mt-5 rounded-2xl text-sm font-semibold shadow-lg", style: {
      background: C.accent,
      color: C.moon,
      boxShadow: `0 8px 20px ${C.accent}33`
    }, children: "Entrar a Alma Calenda" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-xs mt-auto pt-4", style: {
      color: C.inkSoft
    }, children: [
      "¿Olvidaste tu contraseña? ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", style: {
        color: C.clayDeep
      }, children: "Recupérala" })
    ] })
  ] });
}
function Inp({
  label,
  ph
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] font-bold uppercase tracking-wider", style: {
      color: C.inkSoft
    }, children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-13 py-3.5 px-4 rounded-2xl bg-white shadow-sm flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: ph, className: "w-full bg-transparent outline-none text-sm" }) })
  ] });
}
function Calendars() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full overflow-y-auto pt-12 pb-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest font-bold mb-2", style: {
        color: C.clayDeep
      }, children: "Tu biblioteca" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: serif, className: "text-3xl italic", children: "Calendarios" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(YC, { year: "2025", status: "active" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(YC, { year: "2024", status: "owned" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(YC, { year: "2026", status: "locked", price: "$14.99" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(YC, { year: "2027", status: "locked", price: "$14.99" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-6 mt-6 p-5 rounded-3xl", style: {
      background: C.moon
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest font-bold mb-3", style: {
        color: C.clayDeep
      }, children: "¿Tienes un código?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-12 rounded-2xl bg-white flex items-center px-4 text-sm tracking-widest", style: {
          color: C.inkSoft
        }, children: "XXXX–XXXX" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-5 rounded-2xl text-sm font-semibold shadow-lg", style: {
          background: C.clay,
          color: "white",
          boxShadow: `0 6px 14px ${C.clay}55`
        }, children: "Canjear" })
      ] })
    ] })
  ] });
}
function YC({
  year,
  status,
  price
}) {
  const isActive = status === "active";
  const isLocked = status === "locked";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-3xl flex items-center gap-4", style: {
    background: isActive ? C.accent : "white",
    color: isActive ? C.moon : C.ink,
    opacity: isLocked ? 0.7 : 1,
    border: isLocked ? `1.5px dashed ${C.sage}55` : "none",
    boxShadow: isActive ? `0 8px 20px ${C.accent}33` : "0 1px 0 rgba(0,0,0,0.04)"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl flex items-center justify-center shrink-0", style: {
      background: isActive ? "rgba(255,255,255,0.18)" : `${C.sage}1a`,
      color: isActive ? C.moon : C.accent,
      ...serif
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl italic font-semibold", children: year.slice(-2) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: serif, className: "text-lg italic", children: [
        "Anual ",
        year
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] opacity-70", children: isActive ? "Activo · En uso" : status === "owned" ? "Adquirido" : "Bloqueado" })
    ] }),
    isLocked ? /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-3 py-2 rounded-full text-xs font-semibold shadow", style: {
      background: C.clay,
      color: "white"
    }, children: price }) : isActive ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: "●" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-40", children: "→" })
  ] });
}
function Interests() {
  const all = ["Apicultura", "Agronomía", "Cuidado personal", "Arbóreo", "Herbóreo", "Biodinámica", "Huerto", "Agricultura", "Frutales", "Compostaje"];
  const sel = /* @__PURE__ */ new Set(["Biodinámica", "Huerto", "Apicultura", "Frutales"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full pt-12 px-6 flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest font-bold mb-2", style: {
      color: C.clayDeep
    }, children: "Paso 2 de 3" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: serif, className: "text-3xl italic mb-2", children: "¿Qué cultivas?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-6 leading-relaxed", style: {
      color: C.inkSoft
    }, children: "Personalizamos tu agenda según tus prácticas habituales." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-6", children: all.map((i) => {
      const on = sel.has(i);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-4 py-2.5 rounded-full text-xs font-semibold", style: {
        background: on ? C.accent : "white",
        color: on ? C.moon : C.ink,
        boxShadow: on ? `0 4px 10px ${C.accent}33` : "0 1px 0 rgba(0,0,0,0.04)"
      }, children: [
        on && "✓ ",
        i
      ] }, i);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full py-4 rounded-2xl text-sm font-semibold shadow-lg", style: {
      background: C.accent,
      color: C.moon,
      boxShadow: `0 8px 20px ${C.accent}33`
    }, children: "Continuar →" }) })
  ] });
}
function CalHome({
  onDay,
  setTab
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 pt-12 pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest font-bold", style: {
          color: C.clayDeep
        }, children: "Hola, Martín" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: serif, className: "text-2xl italic", children: "Mayo 2026" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-full flex items-center justify-center text-xl", style: {
        background: C.moon
      }, children: "🌒" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-6 mb-4 p-5 rounded-[2rem] relative overflow-hidden text-white shadow-xl", style: {
      background: `linear-gradient(135deg, ${C.accent}, ${C.sage})`,
      boxShadow: `0 12px 24px ${C.accent}33`
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-6 -top-6 w-24 h-24 rounded-full opacity-20", style: {
        background: "white"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-widest font-bold opacity-80", children: "Día de fruto · Tauro" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: serif, className: "text-2xl italic mt-1", children: "Viernes 15" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs opacity-80 max-w-[200px] mt-1", children: "Ideal para sembrar tomates, pimientos y cereales de ciclo corto." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 gap-1 text-center mb-1.5", children: ["L", "M", "X", "J", "V", "S", "D"].map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold opacity-50", children: d }, d)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 gap-1", children: Array.from({
        length: 14
      }).map((_, i) => {
        const day = i + 12;
        const isToday = day === 15;
        const dot = day === 14 ? C.clay : day === 18 ? C.accent : day === 22 ? C.clay : null;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: isToday ? onDay : void 0, className: "aspect-square flex flex-col items-center justify-center rounded-2xl transition-all", style: {
          background: isToday ? C.clay : day < 32 ? "white" : "transparent",
          color: isToday ? "white" : C.ink,
          boxShadow: isToday ? `0 6px 14px ${C.clay}55` : "none"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold", children: day < 32 ? day : "" }),
          dot && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1 h-1 rounded-full mt-0.5", style: {
            background: isToday ? "white" : dot
          } })
        ] }, i);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 px-6 pt-4 overflow-y-auto pb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest font-bold mb-2", style: {
        color: C.clayDeep
      }, children: "Sugerencias" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onDay, className: "w-full p-3 rounded-2xl bg-white flex items-center gap-3 mb-2 text-left shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-2xl flex items-center justify-center text-base", style: {
          background: C.sageLight
        }, children: "🌱" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Siembra de tomates" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px]", style: {
            color: C.inkSoft
          }, children: "08:00" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-40", children: "→" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "w-full p-3 rounded-2xl bg-white flex items-center gap-3 text-left shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-2xl flex items-center justify-center text-base", style: {
          background: C.moon
        }, children: "💧" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Riego con compost" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px]", style: {
            color: C.inkSoft
          }, children: "11:30" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-40", children: "→" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BottomNav, { active: "calendar", setTab })
  ] });
}
function Agenda({
  onA,
  setTab
}) {
  const items = [{
    time: "07:00",
    title: "Observación matinal",
    tag: "Rutina",
    icon: "☀️"
  }, {
    time: "08:00",
    title: "Siembra de tomates",
    tag: "Día de fruto",
    icon: "🌱",
    primary: true
  }, {
    time: "11:30",
    title: "Riego con té de compost",
    tag: "Cuidado",
    icon: "💧"
  }, {
    time: "16:00",
    title: "Poda de frutales",
    tag: "Mantenimiento",
    icon: "✂️"
  }, {
    time: "19:30",
    title: "Bitácora",
    tag: "Notas",
    icon: "📔"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 pt-12 pb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest font-bold", style: {
        color: C.clayDeep
      }, children: "Hoy · 15 mayo" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: serif, className: "text-3xl italic", children: "Tu día" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 px-6 overflow-y-auto pb-3", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onA, className: "w-full mb-2 p-4 rounded-3xl flex items-center gap-3 text-left", style: {
      background: it.primary ? C.accent : "white",
      color: it.primary ? C.moon : C.ink,
      boxShadow: it.primary ? `0 8px 20px ${C.accent}33` : "0 1px 0 rgba(0,0,0,0.04)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-2xl flex items-center justify-center text-lg shrink-0", style: {
        background: it.primary ? "rgba(255,255,255,0.18)" : C.sageLight
      }, children: it.icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] uppercase tracking-widest font-bold opacity-70", children: [
          it.time,
          " · ",
          it.tag
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold mt-0.5", children: it.title })
      ] })
    ] }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BottomNav, { active: "agenda", setTab })
  ] });
}
function Blog({
  setTab
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 pt-12 pb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest font-bold", style: {
        color: C.clayDeep
      }, children: "Lecturas" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: serif, className: "text-3xl italic", children: "Bitácora" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 px-6 overflow-y-auto pb-3 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "rounded-[2rem] overflow-hidden shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-32", style: {
          background: `linear-gradient(135deg, ${C.sage}, ${C.clay})`
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest font-bold", style: {
            color: C.clayDeep
          }, children: "Destacado" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: serif, className: "text-lg italic mt-1 leading-tight", children: "El ritmo de la luna y la savia" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] mt-2", style: {
            color: C.inkSoft
          }, children: "12 min · Lee en almacalenda.com →" })
        ] })
      ] }),
      [{
        tag: "Biodinámica",
        title: "Silicio y calcio en la huerta",
        read: "5 min"
      }, {
        tag: "Apicultura",
        title: "Cuidados de la colmena en primavera",
        read: "7 min"
      }, {
        tag: "Lunar",
        title: "Cómo leer un calendario sideral",
        read: "9 min"
      }].map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "p-4 rounded-3xl bg-white flex gap-3 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl shrink-0", style: {
          background: i % 2 ? C.moon : C.sageLight
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest font-bold", style: {
            color: C.clayDeep
          }, children: p.tag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: serif, className: "text-sm italic mt-0.5", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] mt-1", style: {
            color: C.inkSoft
          }, children: p.read })
        ] })
      ] }, i))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BottomNav, { active: "blog", setTab })
  ] });
}
function Community({
  setTab
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 pt-12 pb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest font-bold", style: {
        color: C.clayDeep
      }, children: "Juntos" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: serif, className: "text-3xl italic", children: "Comunidad" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 px-6 overflow-y-auto pb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-[2.5rem] text-center mb-3", style: {
        background: C.sageLight
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center text-2xl", style: {
          background: C.accent,
          color: C.moon
        }, children: "💬" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: serif, className: "text-2xl italic mb-2", children: "Comunidad Alma" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-4", style: {
          color: C.inkSoft
        }, children: "Únete a más de 5,000 agricultores biodinámicos." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full py-3.5 rounded-2xl font-semibold text-sm shadow-lg", style: {
          background: C.ink,
          color: "white",
          boxShadow: `0 8px 20px ${C.ink}33`
        }, children: "Entrar al WhatsApp" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: [{
        n: "Carmen",
        p: "La Mancha",
        m: "Sembramos zanahorias bajo Tauro 🌾",
        c: C.clay
      }, {
        n: "Tomás",
        p: "Aburrá",
        m: "Las abejas más activas que nunca.",
        c: C.sage
      }].map((u, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-3xl bg-white flex items-center gap-3 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full", style: {
          background: `${u.c}55`
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold", children: [
            u.n,
            " · ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-normal opacity-60", children: u.p })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px]", style: {
            color: C.inkSoft
          }, children: u.m })
        ] })
      ] }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BottomNav, { active: "community", setTab })
  ] });
}
function Day({
  onA
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full overflow-y-auto pb-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 pt-12 pb-6 relative", style: {
      background: `linear-gradient(135deg, ${C.accent}, ${C.sage})`
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-xs text-white/80 mb-3", children: "← Calendario" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest font-bold text-white/80", children: "Día de fruto · Tauro" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { style: serif, className: "text-4xl italic text-white leading-tight", children: [
        "Viernes 15",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "de mayo"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-4 -top-4 w-32 h-32 rounded-full opacity-15", style: {
        background: "white"
      } })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 -mt-4 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2 mb-5", children: [{
      l: "Luna",
      v: "Creciente",
      icon: "🌒"
    }, {
      l: "Energía",
      v: "Asc.",
      icon: "↑"
    }, {
      l: "Color",
      v: "Cálido",
      icon: "🟠"
    }].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-2xl bg-white shadow-sm text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base", children: s.icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] uppercase tracking-widest font-bold mt-1", style: {
        color: C.clayDeep
      }, children: s.l }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold", children: s.v })
    ] }, i)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest font-bold mb-2", style: {
        color: C.clayDeep
      }, children: "Recomendado" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onA, className: "w-full p-4 rounded-3xl bg-white flex items-center gap-3 mb-2 shadow-sm text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-2xl flex items-center justify-center text-base", style: {
          background: C.sageLight
        }, children: "🌱" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Siembra de tomates" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px]", style: {
            color: C.inkSoft
          }, children: "Día óptimo" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-40", children: "→" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "w-full p-4 rounded-3xl bg-white flex items-center gap-3 mb-4 shadow-sm text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-2xl flex items-center justify-center text-base", style: {
          background: C.moon
        }, children: "🍯" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Revisión de colmenas" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px]", style: {
            color: C.inkSoft
          }, children: "Tarde tranquila" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-40", children: "→" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 rounded-3xl", style: {
        background: C.moon
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: serif, className: "text-base italic mb-2", children: '"La savia sube. Las raíces escuchan."' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest font-bold", style: {
          color: C.clayDeep
        }, children: "Consejo del día" })
      ] })
    ] })
  ] });
}
function Activity() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full overflow-y-auto pb-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-44 relative", style: {
      background: `linear-gradient(135deg, ${C.sage}, ${C.clay})`
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "absolute top-12 left-5 w-9 h-9 rounded-full bg-white/40 backdrop-blur flex items-center justify-center text-white", children: "←" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-6 right-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest font-bold text-white/80", children: "Día de fruto · 08:00" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: serif, className: "text-3xl italic text-white", children: "Siembra de tomates" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 pt-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2 mb-5", children: [{
        l: "Duración",
        v: "1h 30"
      }, {
        l: "Dificultad",
        v: "Media"
      }, {
        l: "Luna",
        v: "Óptima"
      }].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-2xl text-center bg-white shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] uppercase tracking-widest font-bold", style: {
          color: C.clayDeep
        }, children: s.l }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold mt-1", children: s.v })
      ] }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sec, { title: "Descripción", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed", style: {
        color: C.inkSoft
      }, children: "Siembra directa en suelo trabajado. La luna creciente en signo de fruto favorece tomates jugosos y bien formados." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sec, { title: "Beneficios", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: ["Mayor germinación", "Frutos más dulces", "Resistencia natural a plagas"].map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full", style: {
          background: C.clay
        } }),
        b
      ] }, i)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sec, { title: "Notas importantes", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed p-3 rounded-2xl", style: {
        background: C.moon
      }, children: "Evita siembras al mediodía. Riega con agua reposada al menos 24h." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full py-4 mt-2 rounded-2xl text-sm font-semibold shadow-lg", style: {
        background: C.accent,
        color: C.moon,
        boxShadow: `0 8px 20px ${C.accent}33`
      }, children: "Marcar como hecho ✓" })
    ] })
  ] });
}
function Sec({
  title,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest font-bold mb-2", style: {
      color: C.clayDeep
    }, children: title }),
    children
  ] });
}
function BottomNav({
  active,
  setTab
}) {
  const tabs = [{
    id: "calendar",
    label: "Luna",
    icon: "🌙"
  }, {
    id: "agenda",
    label: "Agenda",
    icon: "✦"
  }, {
    id: "blog",
    label: "Blog",
    icon: "❋"
  }, {
    id: "community",
    label: "Comunidad",
    icon: "❀"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 pb-3 pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-[2rem] flex justify-around items-center px-2 py-2 shadow-lg", style: {
    boxShadow: `0 8px 24px ${C.ink}1a`
  }, children: tabs.map((t) => {
    const on = active === t.id;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setTab(t.id), className: "flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-2xl transition-all", style: {
      background: on ? C.sageLight : "transparent",
      color: on ? C.accent : C.inkSoft
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base leading-none", children: t.icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold tracking-wide", children: t.label })
    ] }, t.id);
  }) }) });
}
export {
  Mistico as component
};
