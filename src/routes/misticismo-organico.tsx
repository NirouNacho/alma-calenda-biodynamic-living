import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PhoneFrame } from "@/components/PhoneFrame";

export const Route = createFileRoute("/misticismo-organico")({
  head: () => ({
    meta: [
      { title: "Misticismo Orgánico · Alma Calenda" },
      {
        name: "description",
        content:
          "Dirección visual fresca y botánica para Alma Calenda — accesible y luminosa.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,500&display=swap",
      },
    ],
  }),
  component: Mistico,
});

const C = {
  bg: "#fcfbf7",
  bgSoft: "#f4f7f4",
  sage: "#5b7c5b",
  sageLight: "#e3eae3",
  ink: "#2d362d",
  inkSoft: "#5e6b5e",
  clay: "#d4a373",
  clayDeep: "#bc8a5f",
  moon: "#fefae0",
  accent: "#606c38",
};

const screens = [
  { id: "splash", label: "Splash" },
  { id: "auth", label: "Auth" },
  { id: "calendars", label: "Calendarios" },
  { id: "interests", label: "Intereses" },
  { id: "calendar", label: "Calendario" },
  { id: "agenda", label: "Agenda" },
  { id: "blog", label: "Blog" },
  { id: "community", label: "Comunidad" },
  { id: "day", label: "Día" },
  { id: "activity", label: "Actividad" },
] as const;
type ScreenId = (typeof screens)[number]["id"];

const serif = { fontFamily: "Fraunces, serif" } as const;

function Mistico() {
  const [active, setActive] = useState<ScreenId>("splash");
  return (
    <div
      className="min-h-screen"
      style={{
        background: `linear-gradient(180deg, ${C.bg} 0%, ${C.sageLight} 100%)`,
        color: C.ink,
        fontFamily: "Outfit, system-ui, sans-serif",
      }}
    >
      <header className="max-w-5xl mx-auto px-6 pt-10 pb-4 flex items-center justify-between">
        <Link to="/" className="text-xs uppercase tracking-widest opacity-60 hover:opacity-100">
          ← Volver
        </Link>
        <div className="text-center">
          <p className="text-[10px] tracking-[0.3em] uppercase opacity-50">Dirección C</p>
          <h1 style={serif} className="text-3xl italic">Misticismo Orgánico</h1>
        </div>
        <div className="w-16" />
      </header>

      <div className="max-w-5xl mx-auto px-6 pb-8 flex flex-wrap gap-2 justify-center">
        {screens.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setActive(s.id)}
            className="px-3 py-1.5 rounded-full text-xs transition-all font-medium"
            style={{
              background: active === s.id ? C.accent : "white",
              color: active === s.id ? C.moon : C.inkSoft,
              boxShadow: active === s.id ? `0 4px 12px ${C.accent}33` : "0 1px 0 rgba(0,0,0,0.04)",
            }}
          >
            {String(i).padStart(2, "0")} · {s.label}
          </button>
        ))}
      </div>

      <main className="flex justify-center px-6 pb-24">
        <PhoneFrame bezel="#2d362d">
          <div
            key={active}
            className="w-full h-full animate-[fadeIn_0.4s_ease-out] relative"
            style={{ background: C.bg, color: C.ink }}
          >
            {render(active, setActive)}
          </div>
        </PhoneFrame>
      </main>

      <style>{`@keyframes fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}`}</style>
    </div>
  );
}

function render(id: ScreenId, set: (s: ScreenId) => void) {
  switch (id) {
    case "splash": return <Splash />;
    case "auth": return <Auth />;
    case "calendars": return <Calendars />;
    case "interests": return <Interests />;
    case "calendar": return <CalHome onDay={() => set("day")} setTab={set} />;
    case "agenda": return <Agenda onA={() => set("activity")} setTab={set} />;
    case "blog": return <Blog setTab={set} />;
    case "community": return <Community setTab={set} />;
    case "day": return <Day onA={() => set("activity")} />;
    case "activity": return <Activity />;
  }
}

function Splash() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden p-10" style={{ background: `radial-gradient(ellipse at top, ${C.moon}, ${C.bg})` }}>
      <svg className="absolute -top-10 -right-10 w-60 h-60 opacity-20" viewBox="0 0 200 200">
        <path d="M100 30 Q60 80 100 100 Q140 80 100 30 Z" fill={C.sage} />
        <path d="M100 100 Q60 150 100 170 Q140 150 100 100 Z" fill={C.sage} />
      </svg>
      <div className="relative w-28 h-28 mb-8">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="38" fill={C.moon} stroke={C.accent} strokeWidth="1" />
          <circle cx="50" cy="50" r="38" fill={C.sage} opacity="0.15" />
          <path d="M50 25 Q60 50 50 75 Q40 50 50 25" fill={C.accent} />
          <circle cx="50" cy="50" r="3" fill={C.clay} />
        </svg>
      </div>
      <h1 style={serif} className="text-4xl italic mb-3" >Alma Calenda</h1>
      <p className="text-sm text-center" style={{ color: C.inkSoft }}>
        Ritmos de la tierra · Tu compañero biodinámico
      </p>
      <div className="absolute bottom-12 flex gap-1.5">
        <span className="w-6 h-1 rounded-full" style={{ background: C.accent }} />
        <span className="w-1 h-1 rounded-full opacity-30" style={{ background: C.accent }} />
        <span className="w-1 h-1 rounded-full opacity-30" style={{ background: C.accent }} />
      </div>
    </div>
  );
}

function Auth() {
  return (
    <div className="w-full h-full p-7 pt-14 flex flex-col">
      <div className="mb-8">
        <p className="text-[10px] uppercase tracking-widest font-bold mb-2" style={{ color: C.clayDeep }}>Bienvenido</p>
        <h2 style={serif} className="text-3xl italic leading-tight">Crea tu<br />biblioteca natural.</h2>
      </div>
      <div className="space-y-3 mb-4">
        <button className="w-full h-13 py-3.5 rounded-2xl bg-white shadow-sm flex items-center justify-center gap-3 text-sm font-semibold">
          🍎 Continuar con Apple
        </button>
        <button className="w-full h-13 py-3.5 rounded-2xl bg-white shadow-sm flex items-center justify-center gap-3 text-sm font-semibold">
          🌐 Continuar con Google
        </button>
      </div>
      <div className="flex items-center gap-3 my-3">
        <div className="flex-1 h-px" style={{ background: `${C.sage}33` }} />
        <span className="text-[10px] uppercase tracking-widest" style={{ color: C.inkSoft }}>o con email</span>
        <div className="flex-1 h-px" style={{ background: `${C.sage}33` }} />
      </div>
      <div className="space-y-3">
        <Inp label="Correo" ph="campo@tierra.com" />
        <Inp label="Contraseña" ph="••••••••" />
      </div>
      <button className="w-full py-4 mt-5 rounded-2xl text-sm font-semibold shadow-lg" style={{ background: C.accent, color: C.moon, boxShadow: `0 8px 20px ${C.accent}33` }}>
        Entrar a Alma Calenda
      </button>
      <p className="text-center text-xs mt-auto pt-4" style={{ color: C.inkSoft }}>
        ¿Olvidaste tu contraseña? <span className="font-semibold" style={{ color: C.clayDeep }}>Recupérala</span>
      </p>
    </div>
  );
}

function Inp({ label, ph }: { label: string; ph: string }) {
  return (
    <div className="space-y-1.5">
      <label className="text-[10px] font-bold uppercase tracking-wider" style={{ color: C.inkSoft }}>{label}</label>
      <div className="h-13 py-3.5 px-4 rounded-2xl bg-white shadow-sm flex items-center">
        <input placeholder={ph} className="w-full bg-transparent outline-none text-sm" />
      </div>
    </div>
  );
}

function Calendars() {
  return (
    <div className="w-full h-full overflow-y-auto pt-12 pb-6">
      <div className="px-6 mb-6">
        <p className="text-[10px] uppercase tracking-widest font-bold mb-2" style={{ color: C.clayDeep }}>Tu biblioteca</p>
        <h2 style={serif} className="text-3xl italic">Calendarios</h2>
      </div>
      <div className="px-6 space-y-3">
        <YC year="2025" status="active" />
        <YC year="2024" status="owned" />
        <YC year="2026" status="locked" price="$14.99" />
        <YC year="2027" status="locked" price="$14.99" />
      </div>
      <div className="mx-6 mt-6 p-5 rounded-3xl" style={{ background: C.moon }}>
        <p className="text-[10px] uppercase tracking-widest font-bold mb-3" style={{ color: C.clayDeep }}>¿Tienes un código?</p>
        <div className="flex gap-2">
          <div className="flex-1 h-12 rounded-2xl bg-white flex items-center px-4 text-sm tracking-widest" style={{ color: C.inkSoft }}>
            XXXX–XXXX
          </div>
          <button className="px-5 rounded-2xl text-sm font-semibold shadow-lg" style={{ background: C.clay, color: "white", boxShadow: `0 6px 14px ${C.clay}55` }}>
            Canjear
          </button>
        </div>
      </div>
    </div>
  );
}

function YC({ year, status, price }: { year: string; status: "active" | "owned" | "locked"; price?: string }) {
  const isActive = status === "active";
  const isLocked = status === "locked";
  return (
    <div className="p-4 rounded-3xl flex items-center gap-4" style={{
      background: isActive ? C.accent : "white",
      color: isActive ? C.moon : C.ink,
      opacity: isLocked ? 0.7 : 1,
      border: isLocked ? `1.5px dashed ${C.sage}55` : "none",
      boxShadow: isActive ? `0 8px 20px ${C.accent}33` : "0 1px 0 rgba(0,0,0,0.04)",
    }}>
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{
        background: isActive ? "rgba(255,255,255,0.18)" : `${C.sage}1a`,
        color: isActive ? C.moon : C.accent,
        ...serif,
      }}>
        <span className="text-xl italic font-semibold">{year.slice(-2)}</span>
      </div>
      <div className="flex-1">
        <p style={serif} className="text-lg italic">Anual {year}</p>
        <p className="text-[11px] opacity-70">
          {isActive ? "Activo · En uso" : status === "owned" ? "Adquirido" : "Bloqueado"}
        </p>
      </div>
      {isLocked ? (
        <button className="px-3 py-2 rounded-full text-xs font-semibold shadow" style={{ background: C.clay, color: "white" }}>
          {price}
        </button>
      ) : isActive ? (
        <span className="text-xs">●</span>
      ) : (
        <span className="opacity-40">→</span>
      )}
    </div>
  );
}

function Interests() {
  const all = ["Apicultura", "Agronomía", "Cuidado personal", "Arbóreo", "Herbóreo", "Biodinámica", "Huerto", "Agricultura", "Frutales", "Compostaje"];
  const sel = new Set(["Biodinámica", "Huerto", "Apicultura", "Frutales"]);
  return (
    <div className="w-full h-full pt-12 px-6 flex flex-col">
      <p className="text-[10px] uppercase tracking-widest font-bold mb-2" style={{ color: C.clayDeep }}>Paso 2 de 3</p>
      <h2 style={serif} className="text-3xl italic mb-2">¿Qué cultivas?</h2>
      <p className="text-sm mb-6 leading-relaxed" style={{ color: C.inkSoft }}>
        Personalizamos tu agenda según tus prácticas habituales.
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {all.map((i) => {
          const on = sel.has(i);
          return (
            <span key={i} className="px-4 py-2.5 rounded-full text-xs font-semibold"
              style={{
                background: on ? C.accent : "white",
                color: on ? C.moon : C.ink,
                boxShadow: on ? `0 4px 10px ${C.accent}33` : "0 1px 0 rgba(0,0,0,0.04)",
              }}>
              {on && "✓ "}{i}
            </span>
          );
        })}
      </div>
      <div className="mt-auto pb-2">
        <button className="w-full py-4 rounded-2xl text-sm font-semibold shadow-lg" style={{ background: C.accent, color: C.moon, boxShadow: `0 8px 20px ${C.accent}33` }}>
          Continuar →
        </button>
      </div>
    </div>
  );
}

function CalHome({ onDay, setTab }: { onDay: () => void; setTab: (s: ScreenId) => void }) {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="px-6 pt-12 pb-3">
        <div className="flex items-center justify-between mb-2">
          <div>
            <p className="text-[10px] uppercase tracking-widest font-bold" style={{ color: C.clayDeep }}>Hola, Martín</p>
            <h2 style={serif} className="text-2xl italic">Mayo 2026</h2>
          </div>
          <div className="w-11 h-11 rounded-full flex items-center justify-center text-xl" style={{ background: C.moon }}>🌒</div>
        </div>
      </div>
      {/* Status card */}
      <div className="mx-6 mb-4 p-5 rounded-[2rem] relative overflow-hidden text-white shadow-xl" style={{
        background: `linear-gradient(135deg, ${C.accent}, ${C.sage})`,
        boxShadow: `0 12px 24px ${C.accent}33`,
      }}>
        <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full opacity-20" style={{ background: "white" }} />
        <span className="text-[10px] uppercase tracking-widest font-bold opacity-80">Día de fruto · Tauro</span>
        <h3 style={serif} className="text-2xl italic mt-1">Viernes 15</h3>
        <p className="text-xs opacity-80 max-w-[200px] mt-1">Ideal para sembrar tomates, pimientos y cereales de ciclo corto.</p>
      </div>
      {/* Mini calendar */}
      <div className="px-6">
        <div className="grid grid-cols-7 gap-1 text-center mb-1.5">
          {["L","M","X","J","V","S","D"].map((d) => (
            <span key={d} className="text-[10px] font-bold opacity-50">{d}</span>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: 14 }).map((_, i) => {
            const day = i + 12;
            const isToday = day === 15;
            const dot = day === 14 ? C.clay : day === 18 ? C.accent : day === 22 ? C.clay : null;
            return (
              <button key={i} onClick={isToday ? onDay : undefined} className="aspect-square flex flex-col items-center justify-center rounded-2xl transition-all"
                style={{
                  background: isToday ? C.clay : day < 32 ? "white" : "transparent",
                  color: isToday ? "white" : C.ink,
                  boxShadow: isToday ? `0 6px 14px ${C.clay}55` : "none",
                }}>
                <span className="text-xs font-semibold">{day < 32 ? day : ""}</span>
                {dot && <div className="w-1 h-1 rounded-full mt-0.5" style={{ background: isToday ? "white" : dot }} />}
              </button>
            );
          })}
        </div>
      </div>
      {/* Activities preview */}
      <div className="flex-1 px-6 pt-4 overflow-y-auto pb-3">
        <p className="text-[10px] uppercase tracking-widest font-bold mb-2" style={{ color: C.clayDeep }}>Sugerencias</p>
        <button onClick={onDay} className="w-full p-3 rounded-2xl bg-white flex items-center gap-3 mb-2 text-left shadow-sm">
          <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-base" style={{ background: C.sageLight }}>🌱</div>
          <div className="flex-1">
            <p className="text-sm font-semibold">Siembra de tomates</p>
            <p className="text-[11px]" style={{ color: C.inkSoft }}>08:00</p>
          </div>
          <span className="opacity-40">→</span>
        </button>
        <button className="w-full p-3 rounded-2xl bg-white flex items-center gap-3 text-left shadow-sm">
          <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-base" style={{ background: C.moon }}>💧</div>
          <div className="flex-1">
            <p className="text-sm font-semibold">Riego con compost</p>
            <p className="text-[11px]" style={{ color: C.inkSoft }}>11:30</p>
          </div>
          <span className="opacity-40">→</span>
        </button>
      </div>
      <BottomNav active="calendar" setTab={setTab} />
    </div>
  );
}

function Agenda({ onA, setTab }: { onA: () => void; setTab: (s: ScreenId) => void }) {
  const items = [
    { time: "07:00", title: "Observación matinal", tag: "Rutina", icon: "☀️" },
    { time: "08:00", title: "Siembra de tomates", tag: "Día de fruto", icon: "🌱", primary: true },
    { time: "11:30", title: "Riego con té de compost", tag: "Cuidado", icon: "💧" },
    { time: "16:00", title: "Poda de frutales", tag: "Mantenimiento", icon: "✂️" },
    { time: "19:30", title: "Bitácora", tag: "Notas", icon: "📔" },
  ];
  return (
    <div className="w-full h-full flex flex-col">
      <div className="px-6 pt-12 pb-3">
        <p className="text-[10px] uppercase tracking-widest font-bold" style={{ color: C.clayDeep }}>Hoy · 15 mayo</p>
        <h2 style={serif} className="text-3xl italic">Tu día</h2>
      </div>
      <div className="flex-1 px-6 overflow-y-auto pb-3">
        {items.map((it, i) => (
          <button key={i} onClick={onA} className="w-full mb-2 p-4 rounded-3xl flex items-center gap-3 text-left"
            style={{
              background: it.primary ? C.accent : "white",
              color: it.primary ? C.moon : C.ink,
              boxShadow: it.primary ? `0 8px 20px ${C.accent}33` : "0 1px 0 rgba(0,0,0,0.04)",
            }}>
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-lg shrink-0" style={{
              background: it.primary ? "rgba(255,255,255,0.18)" : C.sageLight,
            }}>{it.icon}</div>
            <div className="flex-1">
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-70">{it.time} · {it.tag}</p>
              <p className="text-sm font-semibold mt-0.5">{it.title}</p>
            </div>
          </button>
        ))}
      </div>
      <BottomNav active="agenda" setTab={setTab} />
    </div>
  );
}

function Blog({ setTab }: { setTab: (s: ScreenId) => void }) {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="px-6 pt-12 pb-3">
        <p className="text-[10px] uppercase tracking-widest font-bold" style={{ color: C.clayDeep }}>Lecturas</p>
        <h2 style={serif} className="text-3xl italic">Bitácora</h2>
      </div>
      <div className="flex-1 px-6 overflow-y-auto pb-3 space-y-3">
        <article className="rounded-[2rem] overflow-hidden shadow-sm">
          <div className="h-32" style={{ background: `linear-gradient(135deg, ${C.sage}, ${C.clay})` }} />
          <div className="p-4 bg-white">
            <p className="text-[10px] uppercase tracking-widest font-bold" style={{ color: C.clayDeep }}>Destacado</p>
            <h3 style={serif} className="text-lg italic mt-1 leading-tight">El ritmo de la luna y la savia</h3>
            <p className="text-[11px] mt-2" style={{ color: C.inkSoft }}>12 min · Lee en almacalenda.com →</p>
          </div>
        </article>
        {[
          { tag: "Biodinámica", title: "Silicio y calcio en la huerta", read: "5 min" },
          { tag: "Apicultura", title: "Cuidados de la colmena en primavera", read: "7 min" },
          { tag: "Lunar", title: "Cómo leer un calendario sideral", read: "9 min" },
        ].map((p, i) => (
          <article key={i} className="p-4 rounded-3xl bg-white flex gap-3 shadow-sm">
            <div className="w-14 h-14 rounded-2xl shrink-0" style={{ background: i % 2 ? C.moon : C.sageLight }} />
            <div className="flex-1">
              <p className="text-[10px] uppercase tracking-widest font-bold" style={{ color: C.clayDeep }}>{p.tag}</p>
              <p style={serif} className="text-sm italic mt-0.5">{p.title}</p>
              <p className="text-[10px] mt-1" style={{ color: C.inkSoft }}>{p.read}</p>
            </div>
          </article>
        ))}
      </div>
      <BottomNav active="blog" setTab={setTab} />
    </div>
  );
}

function Community({ setTab }: { setTab: (s: ScreenId) => void }) {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="px-6 pt-12 pb-3">
        <p className="text-[10px] uppercase tracking-widest font-bold" style={{ color: C.clayDeep }}>Juntos</p>
        <h2 style={serif} className="text-3xl italic">Comunidad</h2>
      </div>
      <div className="flex-1 px-6 overflow-y-auto pb-3">
        <div className="p-6 rounded-[2.5rem] text-center mb-3" style={{ background: C.sageLight }}>
          <div className="w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center text-2xl" style={{ background: C.accent, color: C.moon }}>💬</div>
          <h3 style={serif} className="text-2xl italic mb-2">Comunidad Alma</h3>
          <p className="text-sm mb-4" style={{ color: C.inkSoft }}>Únete a más de 5,000 agricultores biodinámicos.</p>
          <button className="w-full py-3.5 rounded-2xl font-semibold text-sm shadow-lg" style={{ background: C.ink, color: "white", boxShadow: `0 8px 20px ${C.ink}33` }}>
            Entrar al WhatsApp
          </button>
        </div>
        <div className="space-y-2">
          {[
            { n: "Carmen", p: "La Mancha", m: "Sembramos zanahorias bajo Tauro 🌾", c: C.clay },
            { n: "Tomás", p: "Aburrá", m: "Las abejas más activas que nunca.", c: C.sage },
          ].map((u, i) => (
            <div key={i} className="p-4 rounded-3xl bg-white flex items-center gap-3 shadow-sm">
              <div className="w-10 h-10 rounded-full" style={{ background: `${u.c}55` }} />
              <div className="flex-1">
                <p className="text-sm font-semibold">{u.n} · <span className="font-normal opacity-60">{u.p}</span></p>
                <p className="text-[11px]" style={{ color: C.inkSoft }}>{u.m}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomNav active="community" setTab={setTab} />
    </div>
  );
}

function Day({ onA }: { onA: () => void }) {
  return (
    <div className="w-full h-full overflow-y-auto pb-6">
      <div className="px-6 pt-12 pb-6 relative" style={{ background: `linear-gradient(135deg, ${C.accent}, ${C.sage})` }}>
        <button className="text-xs text-white/80 mb-3">← Calendario</button>
        <p className="text-[10px] uppercase tracking-widest font-bold text-white/80">Día de fruto · Tauro</p>
        <h2 style={serif} className="text-4xl italic text-white leading-tight">Viernes 15<br />de mayo</h2>
        <div className="absolute -right-4 -top-4 w-32 h-32 rounded-full opacity-15" style={{ background: "white" }} />
      </div>
      <div className="px-6 -mt-4 relative">
        <div className="grid grid-cols-3 gap-2 mb-5">
          {[
            { l: "Luna", v: "Creciente", icon: "🌒" },
            { l: "Energía", v: "Asc.", icon: "↑" },
            { l: "Color", v: "Cálido", icon: "🟠" },
          ].map((s, i) => (
            <div key={i} className="p-3 rounded-2xl bg-white shadow-sm text-center">
              <p className="text-base">{s.icon}</p>
              <p className="text-[9px] uppercase tracking-widest font-bold mt-1" style={{ color: C.clayDeep }}>{s.l}</p>
              <p className="text-xs font-semibold">{s.v}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="px-6">
        <p className="text-[10px] uppercase tracking-widest font-bold mb-2" style={{ color: C.clayDeep }}>Recomendado</p>
        <button onClick={onA} className="w-full p-4 rounded-3xl bg-white flex items-center gap-3 mb-2 shadow-sm text-left">
          <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-base" style={{ background: C.sageLight }}>🌱</div>
          <div className="flex-1">
            <p className="text-sm font-semibold">Siembra de tomates</p>
            <p className="text-[11px]" style={{ color: C.inkSoft }}>Día óptimo</p>
          </div>
          <span className="opacity-40">→</span>
        </button>
        <button className="w-full p-4 rounded-3xl bg-white flex items-center gap-3 mb-4 shadow-sm text-left">
          <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-base" style={{ background: C.moon }}>🍯</div>
          <div className="flex-1">
            <p className="text-sm font-semibold">Revisión de colmenas</p>
            <p className="text-[11px]" style={{ color: C.inkSoft }}>Tarde tranquila</p>
          </div>
          <span className="opacity-40">→</span>
        </button>
        <div className="p-5 rounded-3xl" style={{ background: C.moon }}>
          <p style={serif} className="text-base italic mb-2">"La savia sube. Las raíces escuchan."</p>
          <p className="text-[10px] uppercase tracking-widest font-bold" style={{ color: C.clayDeep }}>Consejo del día</p>
        </div>
      </div>
    </div>
  );
}

function Activity() {
  return (
    <div className="w-full h-full overflow-y-auto pb-6">
      <div className="h-44 relative" style={{ background: `linear-gradient(135deg, ${C.sage}, ${C.clay})` }}>
        <button className="absolute top-12 left-5 w-9 h-9 rounded-full bg-white/40 backdrop-blur flex items-center justify-center text-white">←</button>
        <div className="absolute bottom-4 left-6 right-6">
          <p className="text-[10px] uppercase tracking-widest font-bold text-white/80">Día de fruto · 08:00</p>
          <h2 style={serif} className="text-3xl italic text-white">Siembra de tomates</h2>
        </div>
      </div>
      <div className="px-6 pt-5">
        <div className="grid grid-cols-3 gap-2 mb-5">
          {[{l:"Duración",v:"1h 30"},{l:"Dificultad",v:"Media"},{l:"Luna",v:"Óptima"}].map((s,i)=>(
            <div key={i} className="p-3 rounded-2xl text-center bg-white shadow-sm">
              <p className="text-[9px] uppercase tracking-widest font-bold" style={{ color: C.clayDeep }}>{s.l}</p>
              <p className="text-xs font-semibold mt-1">{s.v}</p>
            </div>
          ))}
        </div>
        <Sec title="Descripción">
          <p className="text-sm leading-relaxed" style={{ color: C.inkSoft }}>
            Siembra directa en suelo trabajado. La luna creciente en signo de fruto favorece tomates jugosos y bien formados.
          </p>
        </Sec>
        <Sec title="Beneficios">
          <ul className="space-y-2">
            {["Mayor germinación","Frutos más dulces","Resistencia natural a plagas"].map((b,i)=>(
              <li key={i} className="flex items-center gap-3 text-sm">
                <span className="w-2 h-2 rounded-full" style={{ background: C.clay }} />{b}
              </li>
            ))}
          </ul>
        </Sec>
        <Sec title="Notas importantes">
          <p className="text-sm leading-relaxed p-3 rounded-2xl" style={{ background: C.moon }}>
            Evita siembras al mediodía. Riega con agua reposada al menos 24h.
          </p>
        </Sec>
        <button className="w-full py-4 mt-2 rounded-2xl text-sm font-semibold shadow-lg" style={{ background: C.accent, color: C.moon, boxShadow: `0 8px 20px ${C.accent}33` }}>
          Marcar como hecho ✓
        </button>
      </div>
    </div>
  );
}

function Sec({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <p className="text-[10px] uppercase tracking-widest font-bold mb-2" style={{ color: C.clayDeep }}>{title}</p>
      {children}
    </div>
  );
}

function BottomNav({ active, setTab }: { active: ScreenId; setTab: (s: ScreenId) => void }) {
  const tabs: { id: ScreenId; label: string; icon: string }[] = [
    { id: "calendar", label: "Luna", icon: "🌙" },
    { id: "agenda", label: "Agenda", icon: "✦" },
    { id: "blog", label: "Blog", icon: "❋" },
    { id: "community", label: "Comunidad", icon: "❀" },
  ];
  return (
    <div className="px-3 pb-3 pt-2">
      <div className="bg-white rounded-[2rem] flex justify-around items-center px-2 py-2 shadow-lg" style={{ boxShadow: `0 8px 24px ${C.ink}1a` }}>
        {tabs.map((t) => {
          const on = active === t.id;
          return (
            <button key={t.id} onClick={() => setTab(t.id)}
              className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-2xl transition-all"
              style={{
                background: on ? C.sageLight : "transparent",
                color: on ? C.accent : C.inkSoft,
              }}>
              <span className="text-base leading-none">{t.icon}</span>
              <span className="text-[9px] font-bold tracking-wide">{t.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
