import { N as reactExports, G as jsxRuntimeExports } from "./server-CoAeSUMu.js";
import { L as Link } from "./router-BUnO4HPk.js";
import { P as PhoneFrame } from "./PhoneFrame-iZZy-YZp.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const C = {
  bg: "#0a0e1a",
  surface: "rgba(254,252,232,0.06)",
  border: "rgba(254,252,232,0.12)",
  gold: "#f0d78c",
  goldDeep: "#c9a84c",
  lavender: "#c4b5fd",
  cream: "#fefce8",
  muted: "rgba(254,252,232,0.6)",
  faint: "rgba(254,252,232,0.35)"
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
  fontFamily: "'Playfair Display', serif"
};
const mono = {
  fontFamily: "'JetBrains Mono', monospace"
};
function Cosmos() {
  const [active, setActive] = reactExports.useState("splash");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", style: {
    background: `radial-gradient(ellipse at top, #11172a 0%, #020408 80%)`,
    color: C.cream,
    fontFamily: "Inter, system-ui, sans-serif"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "max-w-5xl mx-auto px-6 pt-10 pb-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "text-xs uppercase tracking-widest opacity-60 hover:opacity-100", style: mono, children: "← Volver" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] tracking-[0.3em] uppercase opacity-50", style: mono, children: "Dirección B" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: serif, className: "text-3xl italic", children: "Cosmos Biodinámico" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto px-6 pb-8 flex flex-wrap gap-2 justify-center", children: screens.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActive(s.id), className: "px-3 py-1.5 rounded-full text-xs transition-all", style: {
      ...mono,
      background: active === s.id ? C.gold : "rgba(255,255,255,0.05)",
      color: active === s.id ? C.bg : C.muted,
      border: `1px solid ${active === s.id ? C.gold : C.border}`
    }, children: [
      String(i).padStart(2, "0"),
      " · ",
      s.label
    ] }, s.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex justify-center px-6 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PhoneFrame, { bezel: "#000", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full animate-[fadeIn_0.4s_ease-out]", style: {
      background: C.bg,
      color: C.cream
    }, children: render(active, setActive) }, active) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `@keyframes fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}@keyframes orbit{from{transform:rotate(0)}to{transform:rotate(360deg)}}` })
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
      return /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarHome, { onDay: () => set("day"), setTab: set });
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full relative overflow-hidden flex flex-col items-center justify-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
      background: `radial-gradient(circle at 50% 35%, ${C.lavender}22 0%, transparent 60%)`
    } }),
    Array.from({
      length: 40
    }).map((_, i) => {
      const x = i * 37 % 100;
      const y = i * 71 % 100;
      const s = i % 3 + 1;
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute rounded-full", style: {
        left: `${x}%`,
        top: `${y}%`,
        width: s,
        height: s,
        background: C.cream,
        opacity: 0.3 + i % 5 * 0.1
      } }, i);
    }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-32 h-32 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full", style: {
        background: `radial-gradient(circle at 35% 35%, #fff8d4, ${C.goldDeep})`,
        boxShadow: `0 0 60px ${C.gold}66`
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-[-12px] rounded-full border", style: {
        borderColor: `${C.gold}33`,
        animation: "orbit 30s linear infinite"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-1 left-1/2 w-2 h-2 rounded-full", style: {
        background: C.lavender
      } }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: serif, className: "text-4xl italic mb-2 z-10", children: "Alma Calenda" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: mono, className: "text-[10px] tracking-[0.4em] uppercase z-10", children: "Sincronía Astral" })
  ] });
}
function Auth() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full p-7 pt-16 flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: mono, className: "text-[10px] tracking-widest uppercase mb-2", children: "Bienvenido" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { style: serif, className: "text-4xl italic leading-tight", children: [
        "El cielo",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "te espera."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Btn, { children: "Continuar con Apple" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Btn, { children: "Continuar con Google" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 my-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px", style: {
        background: C.border
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: mono, className: "text-[10px] uppercase tracking-widest", children: "o" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px", style: {
        background: C.border
      } })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Inp, { label: "Email", ph: "campo@tierra.com" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Inp, { label: "Contraseña", ph: "••••••••" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full h-13 mt-5 rounded-2xl py-4 text-sm font-semibold", style: {
      background: C.gold,
      color: C.bg
    }, children: "Acceder" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: mono, className: "text-[10px] uppercase tracking-widest text-center mt-auto pt-4", children: [
      "¿Sin cuenta? ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
        color: C.gold
      }, children: "Regístrate" })
    ] })
  ] });
}
function Btn({
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full h-12 rounded-2xl text-sm font-medium", style: {
    background: C.surface,
    border: `1px solid ${C.border}`,
    color: C.cream
  }, children });
}
function Inp({
  label,
  ph
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: mono, className: "text-[10px] uppercase tracking-widest", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 rounded-2xl px-4 flex items-center", style: {
      background: C.surface,
      border: `1px solid ${C.border}`
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: ph, className: "bg-transparent outline-none text-sm w-full", style: {
      color: C.cream
    } }) })
  ] });
}
function Calendars() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full overflow-y-auto pt-14 pb-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: mono, className: "text-[10px] uppercase tracking-widest mb-2", children: "Tu acceso" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: serif, className: "text-3xl italic", children: "Calendarios" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(YearCard, { year: "2025", status: "active" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(YearCard, { year: "2024", status: "owned" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(YearCard, { year: "2026", status: "locked", price: "$14.99" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(YearCard, { year: "2027", status: "locked", price: "$14.99" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-6 mt-6 pt-5 border-t", style: {
      borderColor: C.border
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: mono, className: "text-[10px] uppercase tracking-widest mb-3", children: "¿Tienes un código?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-12 rounded-2xl flex items-center px-4 text-sm tracking-widest", style: {
          ...mono,
          background: C.surface,
          border: `1px solid ${C.border}`,
          color: C.faint
        }, children: "XXXX–XXXX" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-5 rounded-2xl text-sm font-semibold", style: {
          background: C.gold,
          color: C.bg
        }, children: "Aplicar" })
      ] })
    ] })
  ] });
}
function YearCard({
  year,
  status,
  price
}) {
  const isActive = status === "active";
  const isLocked = status === "locked";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 rounded-3xl backdrop-blur", style: {
    background: isActive ? `linear-gradient(135deg, ${C.gold}22, ${C.lavender}11)` : C.surface,
    border: `1px solid ${isActive ? C.gold : C.border}`,
    opacity: isLocked ? 0.65 : 1
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: mono, className: "text-[10px] uppercase tracking-widest", children: [
        year,
        " · ",
        isActive ? "Activo" : status === "owned" ? "Adquirido" : "Bloqueado"
      ] }),
      isActive && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full", style: {
        background: C.gold,
        boxShadow: `0 0 10px ${C.gold}`
      } }),
      isLocked && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🔒" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { style: serif, className: "text-lg italic", children: [
      "Cosecha estelar ",
      year
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] mt-1", style: {
      color: C.muted
    }, children: "Ciclos lunares, agenda biodinámica y constelaciones del año." }),
    isLocked && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "mt-3 text-[10px] uppercase tracking-widest font-bold", style: {
      ...mono,
      color: C.gold
    }, children: [
      "Desbloquear · ",
      price,
      " →"
    ] })
  ] });
}
function Interests() {
  const all = ["Apicultura", "Agronomía", "Cuidado personal", "Arbóreo", "Herbóreo", "Biodinámica", "Huerto", "Agricultura", "Frutales"];
  const sel = /* @__PURE__ */ new Set(["Biodinámica", "Apicultura", "Frutales", "Huerto"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full pt-14 px-6 flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: mono, className: "text-[10px] uppercase tracking-widest mb-2", children: "Paso 2 de 3" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: serif, className: "text-3xl italic mb-2", children: "Tu camino" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-6", style: {
      color: C.muted
    }, children: "Personalizamos los ciclos y consejos según tus prácticas." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-6", children: all.map((i) => {
      const on = sel.has(i);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-4 py-2.5 rounded-full text-xs font-medium", style: {
        background: on ? `${C.gold}22` : C.surface,
        color: on ? C.gold : C.cream,
        border: `1px solid ${on ? C.gold : C.border}`
      }, children: [
        on && "✦ ",
        i
      ] }, i);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full py-4 rounded-2xl text-sm font-semibold", style: {
      background: C.gold,
      color: C.bg
    }, children: "Continuar →" }) })
  ] });
}
function CalendarHome({
  onDay,
  setTab
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 pt-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: mono, className: "text-[10px] uppercase tracking-widest", children: "Mayo 2026" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: serif, className: "text-2xl italic", children: "Luna creciente" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full flex items-center justify-center", style: {
          border: `1px solid ${C.border}`,
          color: C.gold
        }, children: "☽" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 gap-1 text-center mb-2", children: ["L", "M", "X", "J", "V", "S", "D"].map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] opacity-50", style: mono, children: d }, d)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 gap-1", children: Array.from({
        length: 35
      }).map((_, i) => {
        const day = i - 3;
        const valid = day > 0 && day <= 31;
        const isToday = day === 15;
        const dot = day === 4 ? C.gold : day === 11 ? C.lavender : day === 18 ? C.gold : day === 25 ? C.lavender : null;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: isToday ? onDay : void 0, className: "aspect-square flex flex-col items-center justify-center rounded-xl", style: {
          background: isToday ? C.gold : "transparent",
          color: isToday ? C.bg : valid ? C.cream : C.faint,
          border: dot && !isToday ? `1px solid ${C.border}` : "none"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium", children: valid ? day : "" }),
          dot && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1 h-1 rounded-full mt-0.5", style: {
            background: isToday ? C.bg : dot
          } })
        ] }, i);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 px-6 overflow-y-auto pb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: mono, className: "text-[10px] uppercase tracking-widest mb-3", children: "Hoy · Día de fruto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onDay, className: "w-full p-4 rounded-2xl mb-2 flex items-center gap-3 text-left backdrop-blur", style: {
        background: C.surface,
        border: `1px solid ${C.border}`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl flex items-center justify-center", style: {
          background: `${C.gold}22`,
          color: C.gold
        }, children: "✿" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: mono, className: "text-[9px] uppercase tracking-widest", children: "08:00" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Siembra de tomates" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "w-full p-4 rounded-2xl flex items-center gap-3 text-left backdrop-blur", style: {
        background: C.surface,
        border: `1px solid ${C.border}`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl flex items-center justify-center", style: {
          background: `${C.lavender}22`,
          color: C.lavender
        }, children: "☁" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: mono, className: "text-[9px] uppercase tracking-widest", children: "11:30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Riego biodinámico" })
        ] })
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
    icon: "☀",
    color: C.gold
  }, {
    time: "08:00",
    title: "Siembra de tomates",
    icon: "✿",
    color: C.gold,
    primary: true
  }, {
    time: "11:30",
    title: "Riego biodinámico",
    icon: "☁",
    color: C.lavender
  }, {
    time: "16:00",
    title: "Poda de frutales",
    icon: "✂",
    color: C.lavender
  }, {
    time: "19:30",
    title: "Bitácora del día",
    icon: "✒",
    color: C.gold
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 pt-14 pb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: mono, className: "text-[10px] uppercase tracking-widest", children: "15 mayo · viernes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: serif, className: "text-3xl italic", children: "Agenda" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 px-6 overflow-y-auto pb-3 space-y-2", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onA, className: "w-full p-4 rounded-2xl flex items-center gap-4 text-left backdrop-blur", style: {
      background: it.primary ? `linear-gradient(135deg, ${C.gold}33, ${C.lavender}11)` : C.surface,
      border: `1px solid ${it.primary ? C.gold : C.border}`
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right w-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: mono, className: "text-[10px] tracking-tight", children: it.time }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full flex items-center justify-center", style: {
        background: `${it.color}22`,
        color: it.color
      }, children: it.icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: it.title }) })
    ] }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BottomNav, { active: "agenda", setTab })
  ] });
}
function Blog({
  setTab
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 pt-14 pb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: mono, className: "text-[10px] uppercase tracking-widest", children: "Lecturas" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: serif, className: "text-3xl italic", children: "Crónicas" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 px-6 overflow-y-auto pb-3 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "rounded-3xl overflow-hidden", style: {
        border: `1px solid ${C.border}`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-32 relative", style: {
          background: `radial-gradient(circle at 30% 40%, ${C.gold}88, ${C.bg})`
        }, children: Array.from({
          length: 15
        }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute rounded-full", style: {
          left: `${i * 23 % 100}%`,
          top: `${i * 41 % 100}%`,
          width: 2,
          height: 2,
          background: C.cream,
          opacity: 0.5
        } }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", style: {
          background: C.surface
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: mono, className: "text-[10px] uppercase tracking-widest", children: "Destacado · 12 min" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: serif, className: "text-lg italic mt-1", children: "La savia y la sinodía lunar" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] mt-2", style: {
            color: C.muted
          }, children: "Lee en almacalenda.com →" })
        ] })
      ] }),
      [{
        tag: "Biodinámica",
        title: "Silicio y calcio: el balance"
      }, {
        tag: "Apicultura",
        title: "Colmenas en primavera"
      }, {
        tag: "Lunar",
        title: "Calendario sideral, paso a paso"
      }].map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "p-4 rounded-2xl flex gap-3", style: {
        background: C.surface,
        border: `1px solid ${C.border}`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl shrink-0", style: {
          background: `linear-gradient(135deg, ${i % 2 ? C.lavender : C.gold}33, transparent)`
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: mono, className: "text-[9px] uppercase tracking-widest", children: p.tag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: serif, className: "text-sm italic mt-0.5", children: p.title })
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 pt-14 pb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: mono, className: "text-[10px] uppercase tracking-widest", children: "Constelación humana" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: serif, className: "text-3xl italic", children: "Comunidad" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 px-6 overflow-y-auto pb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-3xl text-center mb-3 relative overflow-hidden", style: {
        background: `linear-gradient(135deg, ${C.gold}22, ${C.lavender}22)`,
        border: `1px solid ${C.gold}55`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center text-2xl", style: {
          background: C.gold,
          color: C.bg
        }, children: "✦" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: serif, className: "text-2xl italic mb-2", children: "Círculo Alma" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-4", style: {
          color: C.muted
        }, children: "5,000+ agricultores compartiendo el ritmo de la tierra." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full py-3 rounded-2xl font-semibold text-sm", style: {
          background: C.gold,
          color: C.bg
        }, children: "Unirme al WhatsApp" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: [{
        n: "Carmen",
        p: "La Mancha",
        m: "Sembramos zanahorias bajo Tauro 🌾"
      }, {
        n: "Tomás",
        p: "Aburrá",
        m: "Las abejas más activas que nunca."
      }].map((u, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl flex items-center gap-3", style: {
        background: C.surface,
        border: `1px solid ${C.border}`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full", style: {
          background: `linear-gradient(135deg, ${C.gold}, ${C.lavender})`
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold", children: [
            u.n,
            " · ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              color: C.muted
            }, children: u.p })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px]", style: {
            color: C.muted
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-44 relative overflow-hidden", style: {
      background: `radial-gradient(circle at 50% 60%, ${C.gold}55, ${C.bg})`
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "absolute top-12 left-5 text-cream opacity-70", children: "← Atrás" }),
      Array.from({
        length: 25
      }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute rounded-full", style: {
        left: `${i * 29 % 100}%`,
        top: `${i * 47 % 100}%`,
        width: 2,
        height: 2,
        background: C.cream,
        opacity: 0.4
      } }, i)),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-12 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full", style: {
        background: `radial-gradient(circle at 30% 30%, #fff8d4, ${C.goldDeep})`,
        boxShadow: `0 0 50px ${C.gold}88`
      } })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 -mt-10 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 rounded-3xl backdrop-blur", style: {
      background: C.surface,
      border: `1px solid ${C.border}`
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: mono, className: "text-[10px] uppercase tracking-widest", children: "15 mayo · libra" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: serif, className: "text-3xl italic mt-1", children: "Día de fruto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2 mt-4", children: [{
        l: "Luna",
        v: "Crec."
      }, {
        l: "Energía",
        v: "Asc."
      }, {
        l: "Elemento",
        v: "Aire"
      }].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl text-center", style: {
        background: "rgba(255,255,255,0.04)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: mono, className: "text-[9px] uppercase tracking-widest", children: s.l }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold mt-1", children: s.v })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 mt-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: mono, className: "text-[10px] uppercase tracking-widest mb-3", children: "Recomendado" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onA, className: "w-full p-4 rounded-2xl mb-2 flex items-center gap-3 text-left", style: {
        background: C.surface,
        border: `1px solid ${C.border}`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl flex items-center justify-center", style: {
          background: `${C.gold}22`,
          color: C.gold
        }, children: "✿" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Siembra de tomates" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px]", style: {
            color: C.muted
          }, children: "Día óptimo" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "w-full p-4 rounded-2xl flex items-center gap-3 text-left mb-4", style: {
        background: C.surface,
        border: `1px solid ${C.border}`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl flex items-center justify-center", style: {
          background: `${C.lavender}22`,
          color: C.lavender
        }, children: "✂" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Poda de frutales" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 rounded-2xl", style: {
        background: C.surface,
        border: `1px solid ${C.border}`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: serif, className: "text-base italic mb-2", children: '"El cosmos respira con la tierra."' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: mono, className: "text-[10px] uppercase tracking-widest", children: "Tránsito del día" })
      ] })
    ] })
  ] });
}
function Activity() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full overflow-y-auto pb-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-44 relative overflow-hidden", style: {
      background: `radial-gradient(circle at 50% 50%, ${C.gold}66, ${C.bg})`
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "absolute top-12 left-5 w-9 h-9 rounded-full flex items-center justify-center", style: {
        background: "rgba(0,0,0,0.4)",
        color: C.cream
      }, children: "←" }),
      Array.from({
        length: 20
      }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute rounded-full", style: {
        left: `${i * 23 % 100}%`,
        top: `${i * 53 % 100}%`,
        width: 1.5,
        height: 1.5,
        background: C.cream,
        opacity: 0.5
      } }, i)),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-6 right-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: mono, className: "text-[10px] uppercase tracking-widest", children: "08:00 · día de fruto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: serif, className: "text-3xl italic", children: "Siembra de tomates" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 pt-5 -mt-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2 mb-5", children: [{
        l: "Duración",
        v: "1h 30"
      }, {
        l: "Dificultad",
        v: "Media"
      }, {
        l: "Luna",
        v: "Óptima"
      }].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl text-center", style: {
        background: C.surface,
        border: `1px solid ${C.border}`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: mono, className: "text-[9px] uppercase tracking-widest", children: s.l }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold mt-1", children: s.v })
      ] }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sec, { title: "Descripción", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed", style: {
        color: C.muted
      }, children: "Siembra directa en suelo trabajado. La luna creciente en signo de fruto favorece tomates jugosos y bien formados." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sec, { title: "Beneficios", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: ["Mayor germinación", "Frutos más dulces", "Resistencia natural"].map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full", style: {
          background: C.gold
        } }),
        b
      ] }, i)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sec, { title: "Notas", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed p-3 rounded-xl", style: {
        background: `${C.lavender}15`,
        color: C.cream
      }, children: "Evita el mediodía. Riega con agua reposada al menos 24h." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full py-4 mt-2 rounded-2xl text-sm font-semibold", style: {
        background: C.gold,
        color: C.bg
      }, children: "Marcar como hecho ✓" })
    ] })
  ] });
}
function Sec({
  title,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: mono, className: "text-[10px] uppercase tracking-widest mb-2", children: title }),
    children
  ] });
}
function BottomNav({
  active,
  setTab
}) {
  const tabs = [{
    id: "calendar",
    label: "Calendario",
    icon: "☽"
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
    icon: "✶"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t backdrop-blur", style: {
    borderColor: C.border,
    background: "rgba(10,14,26,0.7)"
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-around items-center px-2 py-2 pb-4", children: tabs.map((t) => {
    const on = active === t.id;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setTab(t.id), className: "flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl", style: {
      color: on ? C.gold : C.muted
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base leading-none", children: t.icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: mono, className: "text-[9px] tracking-wide", children: t.label })
    ] }, t.id);
  }) }) });
}
export {
  Cosmos as component
};
