import { N as reactExports, G as jsxRuntimeExports } from "./server-CoAeSUMu.js";
import { L as Link } from "./router-BUnO4HPk.js";
import { P as PhoneFrame } from "./PhoneFrame-iZZy-YZp.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const C = {
  bone: "#f9f7f2",
  cream: "#f3eee2",
  sage: "#7e8d77",
  sageDark: "#5b6b56",
  clay: "#cc856a",
  ink: "#2a2c24",
  inkSoft: "#5a5d4e"
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
function HuertoSereno() {
  const [active, setActive] = reactExports.useState("splash");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", style: {
    background: `linear-gradient(180deg, ${C.bone} 0%, ${C.cream} 100%)`,
    color: C.ink,
    fontFamily: "Geist, system-ui, sans-serif"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScreenPicker, { active, setActive }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex justify-center px-6 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PhoneFrame, { bezel: "#3a3a30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full animate-[fadeIn_0.4s_ease-out]", style: {
      background: C.bone,
      color: C.ink
    }, children: renderScreen(active, setActive) }, active) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `@keyframes fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}` })
  ] });
}
function Header() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "max-w-5xl mx-auto px-6 pt-10 pb-6 flex items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "text-xs font-mono tracking-widest uppercase opacity-60 hover:opacity-100", children: "← Volver" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-mono tracking-[0.3em] uppercase opacity-50", children: "Dirección A" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl italic", style: {
        fontFamily: "Fraunces, serif",
        color: C.ink
      }, children: "Huerto Sereno" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16" })
  ] });
}
function ScreenPicker({
  active,
  setActive
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto px-6 pb-8 flex flex-wrap gap-2 justify-center", children: screens.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActive(s.id), className: "px-3 py-1.5 rounded-full text-xs font-medium transition-all", style: {
    background: active === s.id ? C.sage : "white",
    color: active === s.id ? C.bone : C.inkSoft,
    boxShadow: active === s.id ? "none" : "0 1px 0 rgba(0,0,0,0.04)"
  }, children: [
    String(i).padStart(2, "0"),
    " · ",
    s.label
  ] }, s.id)) });
}
const serif = {
  fontFamily: "Fraunces, serif"
};
function renderScreen(id, set) {
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
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Agenda, { onActivity: () => set("activity"), setTab: set });
    case "blog":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Blog, { setTab: set });
    case "community":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Community, { setTab: set });
    case "day":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(DayDetail, { onActivity: () => set("activity") });
    case "activity":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, {});
  }
}
function Splash() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full flex flex-col items-center justify-center relative overflow-hidden p-10", style: {
    background: `radial-gradient(circle at 50% 35%, ${C.cream}, ${C.bone})`
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-32 h-32 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full", style: {
        background: `radial-gradient(circle at 35% 35%, #fff8e7, ${C.clay}55)`,
        boxShadow: `0 0 60px ${C.clay}33`
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 100 100", className: "absolute inset-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "50", r: "32", fill: "none", stroke: C.sage, strokeWidth: "0.5", opacity: "0.4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "50", r: "42", fill: "none", stroke: C.sage, strokeWidth: "0.3", opacity: "0.3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 50 70 Q 45 60 50 50 Q 55 60 50 70 Z", fill: C.sage, opacity: "0.7" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "50", r: "3", fill: C.clay })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: serif, className: "text-4xl italic mb-3", children: "Alma Calenda" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-center max-w-[200px]", style: {
      color: C.inkSoft
    }, children: "Sincroniza tu siembra con el ritmo natural de la tierra." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-12 flex gap-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-6 h-1 rounded-full", style: {
        background: C.sage
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1 h-1 rounded-full", style: {
        background: C.sage,
        opacity: 0.3
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1 h-1 rounded-full", style: {
        background: C.sage,
        opacity: 0.3
      } })
    ] })
  ] });
}
function Auth() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full p-7 pt-14 flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-mono tracking-widest uppercase mb-2", style: {
        color: C.clay
      }, children: "Bienvenido" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { style: serif, className: "text-3xl italic leading-tight", children: [
        "Entra a tu",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "almanaque"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "w-full h-12 rounded-2xl bg-white ring-1 ring-black/5 flex items-center justify-center gap-3 text-sm font-medium", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AppleIcon, {}),
        " Continuar con Apple"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "w-full h-12 rounded-2xl bg-white ring-1 ring-black/5 flex items-center justify-center gap-3 text-sm font-medium", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(GoogleIcon, {}),
        " Continuar con Google"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 my-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px", style: {
        background: `${C.sage}33`
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-widest", style: {
        color: C.inkSoft
      }, children: "o" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px", style: {
        background: `${C.sage}33`
      } })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Correo", placeholder: "campo@tierra.com" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Contraseña", placeholder: "••••••••", type: "password" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full h-13 mt-5 rounded-2xl text-sm font-semibold", style: {
      background: C.sage,
      color: C.bone,
      padding: "14px"
    }, children: "Entrar" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto text-center pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs", style: {
      color: C.inkSoft
    }, children: [
      "¿Olvidaste tu contraseña? ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
        color: C.clay
      }, className: "font-semibold", children: "Recupérala" })
    ] }) })
  ] });
}
function Input({
  label,
  placeholder,
  type = "text"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] font-medium uppercase tracking-wider", style: {
      color: C.inkSoft
    }, children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 rounded-2xl bg-white ring-1 ring-black/5 flex items-center px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type, placeholder, className: "w-full bg-transparent outline-none text-sm" }) })
  ] });
}
function Calendars() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full overflow-y-auto pt-12 pb-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-mono uppercase tracking-widest mb-2", style: {
        color: C.clay
      }, children: "Tu biblioteca" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: serif, className: "text-3xl italic", children: "Calendarios" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarCard, { year: "2025", status: "active" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarCard, { year: "2024", status: "owned" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarCard, { year: "2026", status: "locked", price: "$14.99" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarCard, { year: "2027", status: "locked", price: "$14.99" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 mt-6 pt-6 border-t", style: {
      borderColor: `${C.sage}22`
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-mono uppercase tracking-widest mb-3", style: {
        color: C.inkSoft
      }, children: "¿Tienes un código?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-12 rounded-2xl bg-white ring-1 ring-black/5 flex items-center px-4 text-sm font-mono tracking-widest", style: {
          color: C.inkSoft
        }, children: "XXXX–XXXX" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-5 rounded-2xl text-sm font-semibold", style: {
          background: C.clay,
          color: "white"
        }, children: "Canjear" })
      ] })
    ] })
  ] });
}
function CalendarCard({
  year,
  status,
  price
}) {
  const cfg = {
    active: {
      bg: C.sage,
      fg: C.bone,
      label: "Activo · En uso"
    },
    owned: {
      bg: "white",
      fg: C.ink,
      label: "Adquirido"
    },
    locked: {
      bg: "transparent",
      fg: C.inkSoft,
      label: "Bloqueado"
    }
  }[status];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 rounded-3xl flex items-center gap-4", style: {
    background: cfg.bg,
    color: cfg.fg,
    border: status === "locked" ? `1.5px dashed ${C.sage}55` : "1px solid rgba(0,0,0,0.04)"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl flex items-center justify-center shrink-0", style: {
      background: status === "active" ? "rgba(255,255,255,0.18)" : `${C.clay}1a`,
      color: status === "active" ? C.bone : C.clay,
      ...serif
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-semibold", children: year.slice(-2) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: serif, className: "text-lg italic leading-tight", children: [
        "Anual ",
        year
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] opacity-70 mt-0.5", children: cfg.label })
    ] }),
    status === "locked" ? /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-3 py-2 rounded-full text-xs font-semibold", style: {
      background: C.clay,
      color: "white"
    }, children: price }) : status === "active" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-white" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] opacity-50", children: "→" })
  ] });
}
function Interests() {
  const all = ["Apicultura", "Agronomía", "Cuidado personal", "Arbóreo", "Herbóreo", "Biodinámica", "Huerto", "Agricultura", "Frutales", "Compostaje"];
  const selected = /* @__PURE__ */ new Set(["Biodinámica", "Huerto", "Apicultura", "Frutales"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full pt-12 px-6 flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-mono uppercase tracking-widest mb-2", style: {
      color: C.clay
    }, children: "Paso 2 de 3" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: serif, className: "text-3xl italic mb-2", children: "Tus intereses" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-6 leading-relaxed", style: {
      color: C.inkSoft
    }, children: "Personalizamos tu agenda según tus prácticas habituales. Puedes cambiarlo después." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-6", children: all.map((i) => {
      const on = selected.has(i);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-4 py-2.5 rounded-full text-xs font-medium transition-all", style: {
        background: on ? C.sage : "white",
        color: on ? C.bone : C.ink,
        border: on ? `1px solid ${C.sage}` : "1px solid rgba(0,0,0,0.06)"
      }, children: [
        on && "✓ ",
        i
      ] }, i);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto pb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full h-13 py-4 rounded-2xl text-sm font-semibold", style: {
        background: C.sage,
        color: C.bone
      }, children: "Continuar →" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full mt-2 text-xs font-medium", style: {
        color: C.inkSoft
      }, children: "Saltar por ahora" })
    ] })
  ] });
}
function CalendarHome({
  onDay,
  setTab
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 pt-12 pb-4", style: {
      background: `${C.sage}10`
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-mono uppercase tracking-widest", style: {
            color: C.clay
          }, children: "Mayo 2026" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: serif, className: "text-2xl italic", children: "Luna creciente" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full ring-1 ring-black/5 bg-white flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: "🌒" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 gap-1 text-center mb-2", children: ["L", "M", "X", "J", "V", "S", "D"].map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono opacity-40", children: d }, d)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 gap-1", children: Array.from({
        length: 35
      }).map((_, i) => {
        const day = i - 3;
        const valid = day > 0 && day <= 31;
        const isToday = day === 15;
        const dot = day === 4 ? C.clay : day === 11 ? C.sage : day === 18 ? C.clay : day === 25 ? C.sage : null;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: isToday ? onDay : void 0, className: "aspect-square flex flex-col items-center justify-center rounded-xl transition-all", style: {
          background: isToday ? C.sage : "transparent",
          color: isToday ? C.bone : valid ? C.ink : `${C.inkSoft}55`
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium", children: valid ? day : "" }),
          dot && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1 h-1 rounded-full mt-0.5", style: {
            background: isToday ? C.bone : dot
          } })
        ] }, i);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 px-6 pt-5 overflow-y-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-mono uppercase tracking-widest mb-3", style: {
        color: C.inkSoft
      }, children: "Hoy · Día de fruto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onDay, className: "w-full p-4 rounded-2xl bg-white ring-1 ring-black/5 flex items-center gap-3 mb-2 text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl flex items-center justify-center text-base", style: {
          background: `${C.clay}1a`,
          color: C.clay
        }, children: "🌱" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Siembra de tomates" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px]", style: {
            color: C.inkSoft
          }, children: "08:00 — Luna óptima" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-40", children: "→" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "w-full p-4 rounded-2xl bg-white ring-1 ring-black/5 flex items-center gap-3 text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl flex items-center justify-center text-base", style: {
          background: `${C.sage}1a`,
          color: C.sage
        }, children: "💧" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Riego con té de compost" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px]", style: {
            color: C.inkSoft
          }, children: "11:30 — Antes del calor" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-40", children: "→" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BottomNav, { active: "calendar", setTab })
  ] });
}
function Agenda({
  onActivity,
  setTab
}) {
  const items = [{
    time: "07:00",
    title: "Observación matinal",
    tag: "Rutina",
    icon: "☀️",
    color: C.clay
  }, {
    time: "08:00",
    title: "Siembra de tomates",
    tag: "Día de fruto",
    icon: "🌱",
    color: C.clay,
    primary: true
  }, {
    time: "11:30",
    title: "Riego con té de compost",
    tag: "Cuidado",
    icon: "💧",
    color: C.sage
  }, {
    time: "16:00",
    title: "Poda de frutales",
    tag: "Mantenimiento",
    icon: "✂️",
    color: C.sage
  }, {
    time: "19:30",
    title: "Notas del día",
    tag: "Bitácora",
    icon: "📔",
    color: C.clay
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 pt-12 pb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-mono uppercase tracking-widest", style: {
        color: C.clay
      }, children: "Hoy · 15 mayo" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: serif, className: "text-3xl italic", children: "Tu agenda" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 px-6 pb-4 overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative pl-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-[34px] top-2 bottom-2 w-px", style: {
        background: `${C.sage}33`
      } }),
      items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onActivity, className: "block w-full text-left mb-3 relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-12 top-3 w-12 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono", style: {
          color: C.inkSoft
        }, children: it.time }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-[26px] top-4 w-3 h-3 rounded-full ring-4", style: {
          background: it.color,
          ringColor: C.bone
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl flex items-center gap-3", style: {
          background: it.primary ? C.sage : "white",
          color: it.primary ? C.bone : C.ink,
          boxShadow: it.primary ? `0 8px 20px ${C.sage}33` : "0 1px 0 rgba(0,0,0,0.04)"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg", children: it.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest opacity-70", children: it.tag }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: it.title })
          ] })
        ] })
      ] }, i))
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BottomNav, { active: "agenda", setTab })
  ] });
}
function Blog({
  setTab
}) {
  const posts = [{
    tag: "Biodinámica",
    title: "El silicio y el calcio en la huerta",
    read: "5 min"
  }, {
    tag: "Apicultura",
    title: "Cuidados de la colmena en primavera",
    read: "7 min"
  }, {
    tag: "Lunar",
    title: "Cómo leer un calendario sideral",
    read: "9 min"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 pt-12 pb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-mono uppercase tracking-widest", style: {
        color: C.clay
      }, children: "Lecturas" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: serif, className: "text-3xl italic", children: "Bitácora" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 px-6 overflow-y-auto pb-4 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "rounded-3xl overflow-hidden ring-1 ring-black/5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-32", style: {
          background: `linear-gradient(135deg, ${C.sage}, ${C.clay})`
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest font-semibold", style: {
            color: C.clay
          }, children: "Destacado" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: serif, className: "text-lg italic leading-tight mt-1", children: "El ritmo de la luna y la savia ascendente" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] mt-2", style: {
            color: C.inkSoft
          }, children: "12 min · Lee en almacalenda.com →" })
        ] })
      ] }),
      posts.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "p-4 rounded-2xl bg-white ring-1 ring-black/5 flex gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-xl shrink-0", style: {
          background: i % 2 ? `${C.clay}33` : `${C.sage}33`
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest font-semibold", style: {
            color: C.clay
          }, children: p.tag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: serif, className: "text-sm italic leading-tight mt-1", children: p.title }),
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 pt-12 pb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-mono uppercase tracking-widest", style: {
        color: C.clay
      }, children: "Juntos" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: serif, className: "text-3xl italic", children: "Comunidad" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 px-6 overflow-y-auto pb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-3xl text-center mb-4", style: {
        background: C.sage,
        color: C.bone
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 mx-auto mb-3 rounded-full bg-white/20 flex items-center justify-center text-2xl", children: "💬" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: serif, className: "text-2xl italic mb-2", children: "Grupo Alma Calenda" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm opacity-80 mb-4", children: "Más de 5,000 agricultores compartiendo saberes en tiempo real." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full py-3 rounded-2xl bg-white font-semibold text-sm", style: {
          color: C.sage
        }, children: "Unirme al grupo de WhatsApp" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-white ring-1 ring-black/5 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full", style: {
            background: `${C.clay}33`
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Carmen · La Mancha" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px]", style: {
              color: C.inkSoft
            }, children: '"Hoy sembramos zanahorias bajo Tauro 🌾"' })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-white ring-1 ring-black/5 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full", style: {
            background: `${C.sage}33`
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Tomás · Valle de Aburrá" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px]", style: {
              color: C.inkSoft
            }, children: '"Las abejas más activas que nunca."' })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BottomNav, { active: "community", setTab })
  ] });
}
function DayDetail({
  onActivity
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full overflow-y-auto pb-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 pt-12 pb-6", style: {
      background: `${C.clay}1a`
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-xs mb-3 opacity-60", children: "← Calendario" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-mono uppercase tracking-widest", style: {
        color: C.clay
      }, children: "Día de fruto · Tauro" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { style: serif, className: "text-4xl italic leading-tight", children: [
        "Viernes 15",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "de mayo"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2 mt-5", children: [{
        label: "Luna",
        value: "Creciente",
        icon: "🌒"
      }, {
        label: "Energía",
        value: "Ascend.",
        icon: "↑"
      }, {
        label: "Color",
        value: "Cálido",
        icon: "🟠"
      }].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-2xl bg-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base", children: s.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] uppercase tracking-widest mt-1", style: {
          color: C.inkSoft
        }, children: s.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold", children: s.value })
      ] }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 pt-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-mono uppercase tracking-widest mb-3", style: {
        color: C.inkSoft
      }, children: "Recomendado hoy" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onActivity, className: "w-full p-4 rounded-2xl bg-white ring-1 ring-black/5 flex items-center gap-3 mb-2 text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl flex items-center justify-center text-base", style: {
          background: `${C.sage}1a`,
          color: C.sage
        }, children: "🌱" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Siembra de tomates" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px]", style: {
            color: C.inkSoft
          }, children: "Día óptimo" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-40", children: "→" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "w-full p-4 rounded-2xl bg-white ring-1 ring-black/5 flex items-center gap-3 mb-4 text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl flex items-center justify-center text-base", style: {
          background: `${C.clay}1a`,
          color: C.clay
        }, children: "🍯" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Revisión de colmenas" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px]", style: {
            color: C.inkSoft
          }, children: "Tarde tranquila" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-40", children: "→" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 rounded-2xl", style: {
        background: `${C.sage}10`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: serif, className: "text-sm italic mb-2", children: '"La savia sube. Las raíces escuchan."' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px]", style: {
          color: C.inkSoft
        }, children: "Consejo biodinámico del día" })
      ] })
    ] })
  ] });
}
function Activity() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full overflow-y-auto pb-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-44 relative", style: {
      background: `linear-gradient(135deg, ${C.sage}, ${C.clay}aa)`
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "absolute top-12 left-5 w-9 h-9 rounded-full bg-white/30 backdrop-blur flex items-center justify-center text-white", children: "←" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-6 right-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-mono uppercase tracking-widest text-white/80", children: "Día de fruto · 08:00" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: serif, className: "text-3xl italic text-white leading-tight", children: "Siembra de tomates" })
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
      }].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl text-center", style: {
        background: `${C.sage}10`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] uppercase tracking-widest", style: {
          color: C.inkSoft
        }, children: s.l }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold mt-1", children: s.v })
      ] }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Descripción", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed", style: {
        color: C.inkSoft
      }, children: "Siembra directa en suelo trabajado. La luna creciente en signo de fruto favorece el desarrollo de tomates jugosos y bien formados." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Beneficios", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: ["Mayor germinación", "Frutos más dulces", "Resistencia natural a plagas"].map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full", style: {
          background: C.clay
        } }),
        " ",
        b
      ] }, i)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Notas importantes", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed p-3 rounded-xl", style: {
        background: `${C.clay}15`,
        color: C.ink
      }, children: "Evita siembras al mediodía. Riega con agua reposada al menos 24h." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full h-13 mt-4 py-4 rounded-2xl text-sm font-semibold", style: {
        background: C.sage,
        color: C.bone
      }, children: "Marcar como hecho ✓" })
    ] })
  ] });
}
function Section({
  title,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-mono uppercase tracking-widest mb-2", style: {
      color: C.clay
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
    label: "Calendario",
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t bg-white", style: {
    borderColor: `${C.sage}22`
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-around items-center px-2 py-2 pb-4", children: tabs.map((t) => {
    const on = active === t.id;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setTab(t.id), className: "flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all", style: {
      background: on ? `${C.sage}15` : "transparent",
      color: on ? C.sageDark : `${C.inkSoft}aa`
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base leading-none", children: t.icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-semibold tracking-wide", children: t.label })
    ] }, t.id);
  }) }) });
}
function GoogleIcon() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#4285F4", d: "M22 12c0-.7-.1-1.4-.2-2H12v3.8h5.6a4.8 4.8 0 0 1-2 3.2v2.6h3.3c1.9-1.8 3-4.4 3-7.6z" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#34A853", d: "M12 22c2.7 0 5-.9 6.7-2.4l-3.3-2.6c-.9.6-2 1-3.4 1-2.6 0-4.8-1.7-5.6-4.1H3v2.6A10 10 0 0 0 12 22z" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#FBBC05", d: "M6.4 13.9a6 6 0 0 1 0-3.8V7.5H3a10 10 0 0 0 0 9l3.4-2.6z" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#EA4335", d: "M12 5.9c1.5 0 2.8.5 3.8 1.5l2.9-2.9A10 10 0 0 0 3 7.5l3.4 2.6c.8-2.4 3-4.2 5.6-4.2z" })
  ] });
}
function AppleIcon() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17.05 20.28c-.98.95-2.05.86-3.08.43-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.42C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" }) });
}
export {
  HuertoSereno as component
};
