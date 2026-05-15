import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PhoneFrame } from "@/components/PhoneFrame";

export const Route = createFileRoute("/cosmos-biodinamico")({
  head: () => ({
    meta: [
      { title: "Cosmos Biodinámico · Alma Calenda" },
      {
        name: "description",
        content:
          "Dirección visual premium y espiritual para Alma Calenda — calendario cósmico.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;1,500;1,700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Cosmos,
});

const C = {
  bg: "#0a0e1a",
  bgSoft: "#11172a",
  surface: "rgba(254,252,232,0.06)",
  border: "rgba(254,252,232,0.12)",
  gold: "#f0d78c",
  goldDeep: "#c9a84c",
  lavender: "#c4b5fd",
  cream: "#fefce8",
  muted: "rgba(254,252,232,0.6)",
  faint: "rgba(254,252,232,0.35)",
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

const serif = { fontFamily: "'Playfair Display', serif" } as const;
const mono = { fontFamily: "'JetBrains Mono', monospace" } as const;

function Cosmos() {
  const [active, setActive] = useState<ScreenId>("splash");
  return (
    <div
      className="min-h-screen"
      style={{
        background: `radial-gradient(ellipse at top, #11172a 0%, #020408 80%)`,
        color: C.cream,
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <header className="max-w-5xl mx-auto px-6 pt-10 pb-4 flex items-center justify-between">
        <Link to="/" className="text-xs uppercase tracking-widest opacity-60 hover:opacity-100" style={mono}>
          ← Volver
        </Link>
        <div className="text-center">
          <p className="text-[10px] tracking-[0.3em] uppercase opacity-50" style={mono}>Dirección B</p>
          <h1 style={serif} className="text-3xl italic" >Cosmos Biodinámico</h1>
        </div>
        <div className="w-16" />
      </header>

      <div className="max-w-5xl mx-auto px-6 pb-8 flex flex-wrap gap-2 justify-center">
        {screens.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setActive(s.id)}
            className="px-3 py-1.5 rounded-full text-xs transition-all"
            style={{
              ...mono,
              background: active === s.id ? C.gold : "rgba(255,255,255,0.05)",
              color: active === s.id ? C.bg : C.muted,
              border: `1px solid ${active === s.id ? C.gold : C.border}`,
            }}
          >
            {String(i).padStart(2, "0")} · {s.label}
          </button>
        ))}
      </div>

      <main className="flex justify-center px-6 pb-24">
        <PhoneFrame bezel="#000">
          <div
            key={active}
            className="w-full h-full animate-[fadeIn_0.4s_ease-out]"
            style={{ background: C.bg, color: C.cream }}
          >
            {render(active, setActive)}
          </div>
        </PhoneFrame>
      </main>

      <style>{`@keyframes fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}@keyframes orbit{from{transform:rotate(0)}to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}

function render(id: ScreenId, set: (s: ScreenId) => void) {
  switch (id) {
    case "splash": return <Splash />;
    case "auth": return <Auth />;
    case "calendars": return <Calendars />;
    case "interests": return <Interests />;
    case "calendar": return <CalendarHome onDay={() => set("day")} setTab={set} />;
    case "agenda": return <Agenda onA={() => set("activity")} setTab={set} />;
    case "blog": return <Blog setTab={set} />;
    case "community": return <Community setTab={set} />;
    case "day": return <Day onA={() => set("activity")} />;
    case "activity": return <Activity />;
  }
}

function Splash() {
  return (
    <div className="w-full h-full relative overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0" style={{
        background: `radial-gradient(circle at 50% 35%, ${C.lavender}22 0%, transparent 60%)`,
      }} />
      {/* Stars */}
      {Array.from({ length: 40 }).map((_, i) => {
        const x = (i * 37) % 100;
        const y = (i * 71) % 100;
        const s = (i % 3) + 1;
        return (
          <div key={i} className="absolute rounded-full" style={{
            left: `${x}%`, top: `${y}%`, width: s, height: s,
            background: C.cream, opacity: 0.3 + (i % 5) * 0.1,
          }} />
        );
      })}
      <div className="relative w-32 h-32 mb-8">
        <div className="absolute inset-0 rounded-full" style={{
          background: `radial-gradient(circle at 35% 35%, #fff8d4, ${C.goldDeep})`,
          boxShadow: `0 0 60px ${C.gold}66`,
        }} />
        <div className="absolute inset-[-12px] rounded-full border" style={{ borderColor: `${C.gold}33`, animation: "orbit 30s linear infinite" }}>
          <div className="absolute -top-1 left-1/2 w-2 h-2 rounded-full" style={{ background: C.lavender }} />
        </div>
      </div>
      <h1 style={serif} className="text-4xl italic mb-2 z-10" >Alma Calenda</h1>
      <p style={mono} className="text-[10px] tracking-[0.4em] uppercase z-10" >
        Sincronía Astral
      </p>
    </div>
  );
}

function Auth() {
  return (
    <div className="w-full h-full p-7 pt-16 flex flex-col">
      <div className="mb-10">
        <p style={mono} className="text-[10px] tracking-widest uppercase mb-2" >Bienvenido</p>
        <h2 style={serif} className="text-4xl italic leading-tight">El cielo<br />te espera.</h2>
      </div>
      <div className="space-y-3 mb-5">
        <Btn>Continuar con Apple</Btn>
        <Btn>Continuar con Google</Btn>
      </div>
      <div className="flex items-center gap-3 my-3">
        <div className="flex-1 h-px" style={{ background: C.border }} />
        <span style={mono} className="text-[10px] uppercase tracking-widest" >o</span>
        <div className="flex-1 h-px" style={{ background: C.border }} />
      </div>
      <div className="space-y-3">
        <Inp label="Email" ph="campo@tierra.com" />
        <Inp label="Contraseña" ph="••••••••" />
      </div>
      <button className="w-full h-13 mt-5 rounded-2xl py-4 text-sm font-semibold" style={{ background: C.gold, color: C.bg }}>
        Acceder
      </button>
      <p style={mono} className="text-[10px] uppercase tracking-widest text-center mt-auto pt-4" >
        ¿Sin cuenta? <span style={{ color: C.gold }}>Regístrate</span>
      </p>
    </div>
  );
}

function Btn({ children }: { children: React.ReactNode }) {
  return (
    <button className="w-full h-12 rounded-2xl text-sm font-medium" style={{ background: C.surface, border: `1px solid ${C.border}`, color: C.cream }}>
      {children}
    </button>
  );
}
function Inp({ label, ph }: { label: string; ph: string }) {
  return (
    <div className="space-y-1.5">
      <label style={mono} className="text-[10px] uppercase tracking-widest" >{label}</label>
      <div className="h-12 rounded-2xl px-4 flex items-center" style={{ background: C.surface, border: `1px solid ${C.border}` }}>
        <input placeholder={ph} className="bg-transparent outline-none text-sm w-full" style={{ color: C.cream }} />
      </div>
    </div>
  );
}

function Calendars() {
  return (
    <div className="w-full h-full overflow-y-auto pt-14 pb-6">
      <div className="px-6 mb-6">
        <p style={mono} className="text-[10px] uppercase tracking-widest mb-2" >Tu acceso</p>
        <h2 style={serif} className="text-3xl italic">Calendarios</h2>
      </div>
      <div className="px-6 space-y-3">
        <YearCard year="2025" status="active" />
        <YearCard year="2024" status="owned" />
        <YearCard year="2026" status="locked" price="$14.99" />
        <YearCard year="2027" status="locked" price="$14.99" />
      </div>
      <div className="mx-6 mt-6 pt-5 border-t" style={{ borderColor: C.border }}>
        <p style={mono} className="text-[10px] uppercase tracking-widest mb-3" >¿Tienes un código?</p>
        <div className="flex gap-2">
          <div className="flex-1 h-12 rounded-2xl flex items-center px-4 text-sm tracking-widest" style={{ ...mono, background: C.surface, border: `1px solid ${C.border}`, color: C.faint }}>
            XXXX–XXXX
          </div>
          <button className="px-5 rounded-2xl text-sm font-semibold" style={{ background: C.gold, color: C.bg }}>
            Aplicar
          </button>
        </div>
      </div>
    </div>
  );
}

function YearCard({ year, status, price }: { year: string; status: "active" | "owned" | "locked"; price?: string }) {
  const isActive = status === "active";
  const isLocked = status === "locked";
  return (
    <div className="p-5 rounded-3xl backdrop-blur" style={{
      background: isActive ? `linear-gradient(135deg, ${C.gold}22, ${C.lavender}11)` : C.surface,
      border: `1px solid ${isActive ? C.gold : C.border}`,
      opacity: isLocked ? 0.65 : 1,
    }}>
      <div className="flex items-start justify-between mb-2">
        <span style={mono} className="text-[10px] uppercase tracking-widest" >
          {year} · {isActive ? "Activo" : status === "owned" ? "Adquirido" : "Bloqueado"}
        </span>
        {isActive && <div className="w-2 h-2 rounded-full" style={{ background: C.gold, boxShadow: `0 0 10px ${C.gold}` }} />}
        {isLocked && <span>🔒</span>}
      </div>
      <h3 style={serif} className="text-lg italic" >Cosecha estelar {year}</h3>
      <p className="text-[11px] mt-1" style={{ color: C.muted }}>
        Ciclos lunares, agenda biodinámica y constelaciones del año.
      </p>
      {isLocked && (
        <button className="mt-3 text-[10px] uppercase tracking-widest font-bold" style={{ ...mono, color: C.gold }}>
          Desbloquear · {price} →
        </button>
      )}
    </div>
  );
}

function Interests() {
  const all = ["Apicultura", "Agronomía", "Cuidado personal", "Arbóreo", "Herbóreo", "Biodinámica", "Huerto", "Agricultura", "Frutales"];
  const sel = new Set(["Biodinámica", "Apicultura", "Frutales", "Huerto"]);
  return (
    <div className="w-full h-full pt-14 px-6 flex flex-col">
      <p style={mono} className="text-[10px] uppercase tracking-widest mb-2" >Paso 2 de 3</p>
      <h2 style={serif} className="text-3xl italic mb-2">Tu camino</h2>
      <p className="text-sm mb-6" style={{ color: C.muted }}>
        Personalizamos los ciclos y consejos según tus prácticas.
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {all.map((i) => {
          const on = sel.has(i);
          return (
            <span key={i} className="px-4 py-2.5 rounded-full text-xs font-medium"
              style={{
                background: on ? `${C.gold}22` : C.surface,
                color: on ? C.gold : C.cream,
                border: `1px solid ${on ? C.gold : C.border}`,
              }}>
              {on && "✦ "}{i}
            </span>
          );
        })}
      </div>
      <div className="mt-auto pb-2">
        <button className="w-full py-4 rounded-2xl text-sm font-semibold" style={{ background: C.gold, color: C.bg }}>
          Continuar →
        </button>
      </div>
    </div>
  );
}

function CalendarHome({ onDay, setTab }: { onDay: () => void; setTab: (s: ScreenId) => void }) {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="p-6 pt-14">
        <div className="flex items-end justify-between mb-5">
          <div>
            <p style={mono} className="text-[10px] uppercase tracking-widest" >Mayo 2026</p>
            <h2 style={serif} className="text-2xl italic" >Luna creciente</h2>
          </div>
          <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ border: `1px solid ${C.border}`, color: C.gold }}>☽</div>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center mb-2">
          {["L","M","X","J","V","S","D"].map(d=>(
            <span key={d} className="text-[10px] opacity-50" style={mono}>{d}</span>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: 35 }).map((_, i) => {
            const day = i - 3;
            const valid = day > 0 && day <= 31;
            const isToday = day === 15;
            const dot = day === 4 ? C.gold : day === 11 ? C.lavender : day === 18 ? C.gold : day === 25 ? C.lavender : null;
            return (
              <button key={i} onClick={isToday ? onDay : undefined} className="aspect-square flex flex-col items-center justify-center rounded-xl"
                style={{
                  background: isToday ? C.gold : "transparent",
                  color: isToday ? C.bg : valid ? C.cream : C.faint,
                  border: dot && !isToday ? `1px solid ${C.border}` : "none",
                }}>
                <span className="text-xs font-medium">{valid ? day : ""}</span>
                {dot && <div className="w-1 h-1 rounded-full mt-0.5" style={{ background: isToday ? C.bg : dot }} />}
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex-1 px-6 overflow-y-auto pb-3">
        <p style={mono} className="text-[10px] uppercase tracking-widest mb-3" >Hoy · Día de fruto</p>
        <button onClick={onDay} className="w-full p-4 rounded-2xl mb-2 flex items-center gap-3 text-left backdrop-blur" style={{ background: C.surface, border: `1px solid ${C.border}` }}>
          <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${C.gold}22`, color: C.gold }}>✿</div>
          <div className="flex-1">
            <p style={mono} className="text-[9px] uppercase tracking-widest" >08:00</p>
            <p className="text-sm font-semibold">Siembra de tomates</p>
          </div>
        </button>
        <button className="w-full p-4 rounded-2xl flex items-center gap-3 text-left backdrop-blur" style={{ background: C.surface, border: `1px solid ${C.border}` }}>
          <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${C.lavender}22`, color: C.lavender }}>☁</div>
          <div className="flex-1">
            <p style={mono} className="text-[9px] uppercase tracking-widest" >11:30</p>
            <p className="text-sm font-semibold">Riego biodinámico</p>
          </div>
        </button>
      </div>
      <BottomNav active="calendar" setTab={setTab} />
    </div>
  );
}

function Agenda({ onA, setTab }: { onA: () => void; setTab: (s: ScreenId) => void }) {
  const items = [
    { time: "07:00", title: "Observación matinal", icon: "☀", color: C.gold },
    { time: "08:00", title: "Siembra de tomates", icon: "✿", color: C.gold, primary: true },
    { time: "11:30", title: "Riego biodinámico", icon: "☁", color: C.lavender },
    { time: "16:00", title: "Poda de frutales", icon: "✂", color: C.lavender },
    { time: "19:30", title: "Bitácora del día", icon: "✒", color: C.gold },
  ];
  return (
    <div className="w-full h-full flex flex-col">
      <div className="px-6 pt-14 pb-4">
        <p style={mono} className="text-[10px] uppercase tracking-widest" >15 mayo · viernes</p>
        <h2 style={serif} className="text-3xl italic" >Agenda</h2>
      </div>
      <div className="flex-1 px-6 overflow-y-auto pb-3 space-y-2">
        {items.map((it, i) => (
          <button key={i} onClick={onA} className="w-full p-4 rounded-2xl flex items-center gap-4 text-left backdrop-blur"
            style={{
              background: it.primary ? `linear-gradient(135deg, ${C.gold}33, ${C.lavender}11)` : C.surface,
              border: `1px solid ${it.primary ? C.gold : C.border}`,
            }}>
            <div className="text-right w-12">
              <p style={mono} className="text-[10px] tracking-tight" >{it.time}</p>
            </div>
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: `${it.color}22`, color: it.color }}>{it.icon}</div>
            <div className="flex-1">
              <p className="text-sm font-semibold">{it.title}</p>
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
      <div className="px-6 pt-14 pb-4">
        <p style={mono} className="text-[10px] uppercase tracking-widest" >Lecturas</p>
        <h2 style={serif} className="text-3xl italic" >Crónicas</h2>
      </div>
      <div className="flex-1 px-6 overflow-y-auto pb-3 space-y-3">
        <article className="rounded-3xl overflow-hidden" style={{ border: `1px solid ${C.border}` }}>
          <div className="h-32 relative" style={{ background: `radial-gradient(circle at 30% 40%, ${C.gold}88, ${C.bg})` }}>
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={i} className="absolute rounded-full" style={{ left: `${(i*23)%100}%`, top: `${(i*41)%100}%`, width: 2, height: 2, background: C.cream, opacity: 0.5 }} />
            ))}
          </div>
          <div className="p-4" style={{ background: C.surface }}>
            <p style={mono} className="text-[10px] uppercase tracking-widest" >Destacado · 12 min</p>
            <h3 style={serif} className="text-lg italic mt-1" >La savia y la sinodía lunar</h3>
            <p className="text-[11px] mt-2" style={{ color: C.muted }}>Lee en almacalenda.com →</p>
          </div>
        </article>
        {[
          { tag: "Biodinámica", title: "Silicio y calcio: el balance" },
          { tag: "Apicultura", title: "Colmenas en primavera" },
          { tag: "Lunar", title: "Calendario sideral, paso a paso" },
        ].map((p, i) => (
          <article key={i} className="p-4 rounded-2xl flex gap-3" style={{ background: C.surface, border: `1px solid ${C.border}` }}>
            <div className="w-12 h-12 rounded-xl shrink-0" style={{ background: `linear-gradient(135deg, ${i%2?C.lavender:C.gold}33, transparent)` }} />
            <div className="flex-1">
              <p style={mono} className="text-[9px] uppercase tracking-widest" >{p.tag}</p>
              <p style={serif} className="text-sm italic mt-0.5" >{p.title}</p>
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
      <div className="px-6 pt-14 pb-4">
        <p style={mono} className="text-[10px] uppercase tracking-widest" >Constelación humana</p>
        <h2 style={serif} className="text-3xl italic" >Comunidad</h2>
      </div>
      <div className="flex-1 px-6 overflow-y-auto pb-3">
        <div className="p-6 rounded-3xl text-center mb-3 relative overflow-hidden" style={{
          background: `linear-gradient(135deg, ${C.gold}22, ${C.lavender}22)`,
          border: `1px solid ${C.gold}55`,
        }}>
          <div className="w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center text-2xl" style={{ background: C.gold, color: C.bg }}>✦</div>
          <h3 style={serif} className="text-2xl italic mb-2" >Círculo Alma</h3>
          <p className="text-sm mb-4" style={{ color: C.muted }}>5,000+ agricultores compartiendo el ritmo de la tierra.</p>
          <button className="w-full py-3 rounded-2xl font-semibold text-sm" style={{ background: C.gold, color: C.bg }}>
            Unirme al WhatsApp
          </button>
        </div>
        <div className="space-y-2">
          {[
            { n: "Carmen", p: "La Mancha", m: "Sembramos zanahorias bajo Tauro 🌾" },
            { n: "Tomás", p: "Aburrá", m: "Las abejas más activas que nunca." },
          ].map((u, i) => (
            <div key={i} className="p-4 rounded-2xl flex items-center gap-3" style={{ background: C.surface, border: `1px solid ${C.border}` }}>
              <div className="w-10 h-10 rounded-full" style={{ background: `linear-gradient(135deg, ${C.gold}, ${C.lavender})` }} />
              <div className="flex-1">
                <p className="text-sm font-semibold">{u.n} · <span style={{ color: C.muted }}>{u.p}</span></p>
                <p className="text-[11px]" style={{ color: C.muted }}>{u.m}</p>
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
      <div className="h-44 relative overflow-hidden" style={{ background: `radial-gradient(circle at 50% 60%, ${C.gold}55, ${C.bg})` }}>
        <button className="absolute top-12 left-5 text-cream opacity-70">← Atrás</button>
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className="absolute rounded-full" style={{ left: `${(i*29)%100}%`, top: `${(i*47)%100}%`, width: 2, height: 2, background: C.cream, opacity: 0.4 }} />
        ))}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full" style={{
          background: `radial-gradient(circle at 30% 30%, #fff8d4, ${C.goldDeep})`,
          boxShadow: `0 0 50px ${C.gold}88`,
        }} />
      </div>
      <div className="px-6 -mt-10 relative">
        <div className="p-5 rounded-3xl backdrop-blur" style={{ background: C.surface, border: `1px solid ${C.border}` }}>
          <p style={mono} className="text-[10px] uppercase tracking-widest" >15 mayo · libra</p>
          <h2 style={serif} className="text-3xl italic mt-1" >Día de fruto</h2>
          <div className="grid grid-cols-3 gap-2 mt-4">
            {[
              { l: "Luna", v: "Crec." },
              { l: "Energía", v: "Asc." },
              { l: "Elemento", v: "Aire" },
            ].map((s, i) => (
              <div key={i} className="p-3 rounded-xl text-center" style={{ background: "rgba(255,255,255,0.04)" }}>
                <p style={mono} className="text-[9px] uppercase tracking-widest" >{s.l}</p>
                <p className="text-xs font-semibold mt-1">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-6 mt-5">
        <p style={mono} className="text-[10px] uppercase tracking-widest mb-3" >Recomendado</p>
        <button onClick={onA} className="w-full p-4 rounded-2xl mb-2 flex items-center gap-3 text-left" style={{ background: C.surface, border: `1px solid ${C.border}` }}>
          <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${C.gold}22`, color: C.gold }}>✿</div>
          <div className="flex-1">
            <p className="text-sm font-semibold">Siembra de tomates</p>
            <p className="text-[11px]" style={{ color: C.muted }}>Día óptimo</p>
          </div>
        </button>
        <button className="w-full p-4 rounded-2xl flex items-center gap-3 text-left mb-4" style={{ background: C.surface, border: `1px solid ${C.border}` }}>
          <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${C.lavender}22`, color: C.lavender }}>✂</div>
          <div className="flex-1">
            <p className="text-sm font-semibold">Poda de frutales</p>
          </div>
        </button>
        <div className="p-5 rounded-2xl" style={{ background: C.surface, border: `1px solid ${C.border}` }}>
          <p style={serif} className="text-base italic mb-2" >"El cosmos respira con la tierra."</p>
          <p style={mono} className="text-[10px] uppercase tracking-widest" >Tránsito del día</p>
        </div>
      </div>
    </div>
  );
}

function Activity() {
  return (
    <div className="w-full h-full overflow-y-auto pb-6">
      <div className="h-44 relative overflow-hidden" style={{ background: `radial-gradient(circle at 50% 50%, ${C.gold}66, ${C.bg})` }}>
        <button className="absolute top-12 left-5 w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "rgba(0,0,0,0.4)", color: C.cream }}>←</button>
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="absolute rounded-full" style={{ left: `${(i*23)%100}%`, top: `${(i*53)%100}%`, width: 1.5, height: 1.5, background: C.cream, opacity: 0.5 }} />
        ))}
        <div className="absolute bottom-4 left-6 right-6">
          <p style={mono} className="text-[10px] uppercase tracking-widest" >08:00 · día de fruto</p>
          <h2 style={serif} className="text-3xl italic" >Siembra de tomates</h2>
        </div>
      </div>
      <div className="px-6 pt-5 -mt-2">
        <div className="grid grid-cols-3 gap-2 mb-5">
          {[{l:"Duración",v:"1h 30"},{l:"Dificultad",v:"Media"},{l:"Luna",v:"Óptima"}].map((s,i)=>(
            <div key={i} className="p-3 rounded-xl text-center" style={{ background: C.surface, border: `1px solid ${C.border}` }}>
              <p style={mono} className="text-[9px] uppercase tracking-widest" >{s.l}</p>
              <p className="text-xs font-semibold mt-1">{s.v}</p>
            </div>
          ))}
        </div>
        <Sec title="Descripción">
          <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
            Siembra directa en suelo trabajado. La luna creciente en signo de fruto favorece tomates jugosos y bien formados.
          </p>
        </Sec>
        <Sec title="Beneficios">
          <ul className="space-y-2">
            {["Mayor germinación","Frutos más dulces","Resistencia natural"].map((b,i)=>(
              <li key={i} className="flex items-center gap-3 text-sm">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: C.gold }} />{b}
              </li>
            ))}
          </ul>
        </Sec>
        <Sec title="Notas">
          <p className="text-sm leading-relaxed p-3 rounded-xl" style={{ background: `${C.lavender}15`, color: C.cream }}>
            Evita el mediodía. Riega con agua reposada al menos 24h.
          </p>
        </Sec>
        <button className="w-full py-4 mt-2 rounded-2xl text-sm font-semibold" style={{ background: C.gold, color: C.bg }}>
          Marcar como hecho ✓
        </button>
      </div>
    </div>
  );
}

function Sec({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <p style={mono} className="text-[10px] uppercase tracking-widest mb-2" >{title}</p>
      {children}
    </div>
  );
}

function BottomNav({ active, setTab }: { active: ScreenId; setTab: (s: ScreenId) => void }) {
  const tabs: { id: ScreenId; label: string; icon: string }[] = [
    { id: "calendar", label: "Calendario", icon: "☽" },
    { id: "agenda", label: "Agenda", icon: "✦" },
    { id: "blog", label: "Blog", icon: "❋" },
    { id: "community", label: "Comunidad", icon: "✶" },
  ];
  return (
    <div className="border-t backdrop-blur" style={{ borderColor: C.border, background: "rgba(10,14,26,0.7)" }}>
      <div className="flex justify-around items-center px-2 py-2 pb-4">
        {tabs.map((t) => {
          const on = active === t.id;
          return (
            <button key={t.id} onClick={() => setTab(t.id)}
              className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl"
              style={{ color: on ? C.gold : C.muted }}>
              <span className="text-base leading-none">{t.icon}</span>
              <span style={mono} className="text-[9px] tracking-wide" >{t.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
