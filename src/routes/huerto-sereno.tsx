import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PhoneFrame } from "@/components/PhoneFrame";

export const Route = createFileRoute("/huerto-sereno")({
  head: () => ({
    meta: [
      { title: "Huerto Sereno · Alma Calenda" },
      {
        name: "description",
        content:
          "Dirección visual cálida y terrenal para Alma Calenda — almanaque biodinámico.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,400&family=Geist:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: HuertoSereno,
});

const C = {
  bone: "#f9f7f2",
  cream: "#f3eee2",
  sage: "#7e8d77",
  sageDark: "#5b6b56",
  clay: "#cc856a",
  ink: "#2a2c24",
  inkSoft: "#5a5d4e",
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

function HuertoSereno() {
  const [active, setActive] = useState<ScreenId>("splash");

  return (
    <div
      className="min-h-screen"
      style={{
        background: `linear-gradient(180deg, ${C.bone} 0%, ${C.cream} 100%)`,
        color: C.ink,
        fontFamily: "Geist, system-ui, sans-serif",
      }}
    >
      <Header />
      <ScreenPicker active={active} setActive={setActive} />

      <main className="flex justify-center px-6 pb-24">
        <PhoneFrame bezel="#3a3a30">
          <div
            key={active}
            className="w-full h-full animate-[fadeIn_0.4s_ease-out]"
            style={{ background: C.bone, color: C.ink }}
          >
            {renderScreen(active, setActive)}
          </div>
        </PhoneFrame>
      </main>

      <style>{`@keyframes fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}`}</style>
    </div>
  );
}

function Header() {
  return (
    <header className="max-w-5xl mx-auto px-6 pt-10 pb-6 flex items-center justify-between">
      <Link to="/" className="text-xs font-mono tracking-widest uppercase opacity-60 hover:opacity-100">
        ← Volver
      </Link>
      <div className="text-center">
        <p className="text-[10px] font-mono tracking-[0.3em] uppercase opacity-50">
          Dirección A
        </p>
        <h1
          className="text-3xl italic"
          style={{ fontFamily: "Fraunces, serif", color: C.ink }}
        >
          Huerto Sereno
        </h1>
      </div>
      <div className="w-16" />
    </header>
  );
}

function ScreenPicker({
  active,
  setActive,
}: {
  active: ScreenId;
  setActive: (s: ScreenId) => void;
}) {
  return (
    <div className="max-w-5xl mx-auto px-6 pb-8 flex flex-wrap gap-2 justify-center">
      {screens.map((s, i) => (
        <button
          key={s.id}
          onClick={() => setActive(s.id)}
          className="px-3 py-1.5 rounded-full text-xs font-medium transition-all"
          style={{
            background: active === s.id ? C.sage : "white",
            color: active === s.id ? C.bone : C.inkSoft,
            boxShadow:
              active === s.id ? "none" : "0 1px 0 rgba(0,0,0,0.04)",
          }}
        >
          {String(i).padStart(2, "0")} · {s.label}
        </button>
      ))}
    </div>
  );
}

const serif = { fontFamily: "Fraunces, serif" } as const;

function renderScreen(id: ScreenId, set: (s: ScreenId) => void) {
  switch (id) {
    case "splash":
      return <Splash />;
    case "auth":
      return <Auth />;
    case "calendars":
      return <Calendars />;
    case "interests":
      return <Interests />;
    case "calendar":
      return <CalendarHome onDay={() => set("day")} setTab={set} />;
    case "agenda":
      return <Agenda onActivity={() => set("activity")} setTab={set} />;
    case "blog":
      return <Blog setTab={set} />;
    case "community":
      return <Community setTab={set} />;
    case "day":
      return <DayDetail onActivity={() => set("activity")} />;
    case "activity":
      return <Activity />;
  }
}

/* ============== SCREENS ============== */

function Splash() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden p-10"
      style={{ background: `radial-gradient(circle at 50% 35%, ${C.cream}, ${C.bone})` }}
    >
      <div className="relative w-32 h-32 mb-8">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `radial-gradient(circle at 35% 35%, #fff8e7, ${C.clay}55)`,
            boxShadow: `0 0 60px ${C.clay}33`,
          }}
        />
        <svg viewBox="0 0 100 100" className="absolute inset-0">
          <circle cx="50" cy="50" r="32" fill="none" stroke={C.sage} strokeWidth="0.5" opacity="0.4" />
          <circle cx="50" cy="50" r="42" fill="none" stroke={C.sage} strokeWidth="0.3" opacity="0.3" />
          <path d="M 50 70 Q 45 60 50 50 Q 55 60 50 70 Z" fill={C.sage} opacity="0.7" />
          <circle cx="50" cy="50" r="3" fill={C.clay} />
        </svg>
      </div>
      <h1 style={serif} className="text-4xl italic mb-3" >Alma Calenda</h1>
      <p className="text-sm text-center max-w-[200px]" style={{ color: C.inkSoft }}>
        Sincroniza tu siembra con el ritmo natural de la tierra.
      </p>
      <div className="absolute bottom-12 flex gap-1.5">
        <span className="w-6 h-1 rounded-full" style={{ background: C.sage }} />
        <span className="w-1 h-1 rounded-full" style={{ background: C.sage, opacity: 0.3 }} />
        <span className="w-1 h-1 rounded-full" style={{ background: C.sage, opacity: 0.3 }} />
      </div>
    </div>
  );
}

function Auth() {
  return (
    <div className="w-full h-full p-7 pt-14 flex flex-col">
      <div className="mb-8">
        <p className="text-[10px] font-mono tracking-widest uppercase mb-2" style={{ color: C.clay }}>
          Bienvenido
        </p>
        <h2 style={serif} className="text-3xl italic leading-tight">
          Entra a tu<br />almanaque
        </h2>
      </div>
      <div className="space-y-3 mb-5">
        <button className="w-full h-12 rounded-2xl bg-white ring-1 ring-black/5 flex items-center justify-center gap-3 text-sm font-medium">
          <AppleIcon /> Continuar con Apple
        </button>
        <button className="w-full h-12 rounded-2xl bg-white ring-1 ring-black/5 flex items-center justify-center gap-3 text-sm font-medium">
          <GoogleIcon /> Continuar con Google
        </button>
      </div>
      <div className="flex items-center gap-3 my-2">
        <div className="flex-1 h-px" style={{ background: `${C.sage}33` }} />
        <span className="text-[10px] uppercase tracking-widest" style={{ color: C.inkSoft }}>o</span>
        <div className="flex-1 h-px" style={{ background: `${C.sage}33` }} />
      </div>
      <div className="space-y-3">
        <Input label="Correo" placeholder="campo@tierra.com" />
        <Input label="Contraseña" placeholder="••••••••" type="password" />
      </div>
      <button
        className="w-full h-13 mt-5 rounded-2xl text-sm font-semibold"
        style={{ background: C.sage, color: C.bone, padding: "14px" }}
      >
        Entrar
      </button>
      <div className="mt-auto text-center pt-4">
        <p className="text-xs" style={{ color: C.inkSoft }}>
          ¿Olvidaste tu contraseña? <span style={{ color: C.clay }} className="font-semibold">Recupérala</span>
        </p>
      </div>
    </div>
  );
}

function Input({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <div className="space-y-1.5">
      <label className="text-[10px] font-medium uppercase tracking-wider" style={{ color: C.inkSoft }}>{label}</label>
      <div className="h-12 rounded-2xl bg-white ring-1 ring-black/5 flex items-center px-4">
        <input type={type} placeholder={placeholder} className="w-full bg-transparent outline-none text-sm" />
      </div>
    </div>
  );
}

function Calendars() {
  return (
    <div className="w-full h-full overflow-y-auto pt-12 pb-6">
      <div className="px-6 mb-6">
        <p className="text-[10px] font-mono uppercase tracking-widest mb-2" style={{ color: C.clay }}>Tu biblioteca</p>
        <h2 style={serif} className="text-3xl italic">Calendarios</h2>
      </div>
      <div className="px-6 space-y-3">
        <CalendarCard year="2025" status="active" />
        <CalendarCard year="2024" status="owned" />
        <CalendarCard year="2026" status="locked" price="$14.99" />
        <CalendarCard year="2027" status="locked" price="$14.99" />
      </div>
      <div className="px-6 mt-6 pt-6 border-t" style={{ borderColor: `${C.sage}22` }}>
        <p className="text-[10px] font-mono uppercase tracking-widest mb-3" style={{ color: C.inkSoft }}>
          ¿Tienes un código?
        </p>
        <div className="flex gap-2">
          <div className="flex-1 h-12 rounded-2xl bg-white ring-1 ring-black/5 flex items-center px-4 text-sm font-mono tracking-widest" style={{ color: C.inkSoft }}>
            XXXX–XXXX
          </div>
          <button className="px-5 rounded-2xl text-sm font-semibold" style={{ background: C.clay, color: "white" }}>
            Canjear
          </button>
        </div>
      </div>
    </div>
  );
}

function CalendarCard({ year, status, price }: { year: string; status: "active" | "owned" | "locked"; price?: string }) {
  const cfg = {
    active: { bg: C.sage, fg: C.bone, label: "Activo · En uso" },
    owned: { bg: "white", fg: C.ink, label: "Adquirido" },
    locked: { bg: "transparent", fg: C.inkSoft, label: "Bloqueado" },
  }[status];
  return (
    <div
      className="p-5 rounded-3xl flex items-center gap-4"
      style={{
        background: cfg.bg,
        color: cfg.fg,
        border: status === "locked" ? `1.5px dashed ${C.sage}55` : "1px solid rgba(0,0,0,0.04)",
      }}
    >
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
        style={{
          background: status === "active" ? "rgba(255,255,255,0.18)" : `${C.clay}1a`,
          color: status === "active" ? C.bone : C.clay,
          ...serif,
        }}
      >
        <span className="text-lg font-semibold">{year.slice(-2)}</span>
      </div>
      <div className="flex-1">
        <p style={serif} className="text-lg italic leading-tight">Anual {year}</p>
        <p className="text-[11px] opacity-70 mt-0.5">{cfg.label}</p>
      </div>
      {status === "locked" ? (
        <button className="px-3 py-2 rounded-full text-xs font-semibold" style={{ background: C.clay, color: "white" }}>
          {price}
        </button>
      ) : status === "active" ? (
        <div className="w-2 h-2 rounded-full bg-white" />
      ) : (
        <span className="text-[10px] opacity-50">→</span>
      )}
    </div>
  );
}

function Interests() {
  const all = ["Apicultura", "Agronomía", "Cuidado personal", "Arbóreo", "Herbóreo", "Biodinámica", "Huerto", "Agricultura", "Frutales", "Compostaje"];
  const selected = new Set(["Biodinámica", "Huerto", "Apicultura", "Frutales"]);
  return (
    <div className="w-full h-full pt-12 px-6 flex flex-col">
      <p className="text-[10px] font-mono uppercase tracking-widest mb-2" style={{ color: C.clay }}>Paso 2 de 3</p>
      <h2 style={serif} className="text-3xl italic mb-2">Tus intereses</h2>
      <p className="text-sm mb-6 leading-relaxed" style={{ color: C.inkSoft }}>
        Personalizamos tu agenda según tus prácticas habituales. Puedes cambiarlo después.
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {all.map((i) => {
          const on = selected.has(i);
          return (
            <span
              key={i}
              className="px-4 py-2.5 rounded-full text-xs font-medium transition-all"
              style={{
                background: on ? C.sage : "white",
                color: on ? C.bone : C.ink,
                border: on ? `1px solid ${C.sage}` : "1px solid rgba(0,0,0,0.06)",
              }}
            >
              {on && "✓ "}{i}
            </span>
          );
        })}
      </div>
      <div className="mt-auto pb-2">
        <button className="w-full h-13 py-4 rounded-2xl text-sm font-semibold" style={{ background: C.sage, color: C.bone }}>
          Continuar →
        </button>
        <button className="w-full mt-2 text-xs font-medium" style={{ color: C.inkSoft }}>Saltar por ahora</button>
      </div>
    </div>
  );
}

function CalendarHome({ onDay, setTab }: { onDay: () => void; setTab: (s: ScreenId) => void }) {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="px-6 pt-12 pb-4" style={{ background: `${C.sage}10` }}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-[10px] font-mono uppercase tracking-widest" style={{ color: C.clay }}>Mayo 2026</p>
            <h2 style={serif} className="text-2xl italic">Luna creciente</h2>
          </div>
          <div className="w-10 h-10 rounded-full ring-1 ring-black/5 bg-white flex items-center justify-center">
            <span className="text-base">🌒</span>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center mb-2">
          {["L", "M", "X", "J", "V", "S", "D"].map((d) => (
            <span key={d} className="text-[10px] font-mono opacity-40">{d}</span>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: 35 }).map((_, i) => {
            const day = i - 3;
            const valid = day > 0 && day <= 31;
            const isToday = day === 15;
            const dot = day === 4 ? C.clay : day === 11 ? C.sage : day === 18 ? C.clay : day === 25 ? C.sage : null;
            return (
              <button
                key={i}
                onClick={isToday ? onDay : undefined}
                className="aspect-square flex flex-col items-center justify-center rounded-xl transition-all"
                style={{
                  background: isToday ? C.sage : "transparent",
                  color: isToday ? C.bone : valid ? C.ink : `${C.inkSoft}55`,
                }}
              >
                <span className="text-xs font-medium">{valid ? day : ""}</span>
                {dot && <div className="w-1 h-1 rounded-full mt-0.5" style={{ background: isToday ? C.bone : dot }} />}
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex-1 px-6 pt-5 overflow-y-auto">
        <p className="text-[10px] font-mono uppercase tracking-widest mb-3" style={{ color: C.inkSoft }}>Hoy · Día de fruto</p>
        <button onClick={onDay} className="w-full p-4 rounded-2xl bg-white ring-1 ring-black/5 flex items-center gap-3 mb-2 text-left">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-base" style={{ background: `${C.clay}1a`, color: C.clay }}>🌱</div>
          <div className="flex-1">
            <p className="text-sm font-semibold">Siembra de tomates</p>
            <p className="text-[11px]" style={{ color: C.inkSoft }}>08:00 — Luna óptima</p>
          </div>
          <span className="opacity-40">→</span>
        </button>
        <button className="w-full p-4 rounded-2xl bg-white ring-1 ring-black/5 flex items-center gap-3 text-left">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-base" style={{ background: `${C.sage}1a`, color: C.sage }}>💧</div>
          <div className="flex-1">
            <p className="text-sm font-semibold">Riego con té de compost</p>
            <p className="text-[11px]" style={{ color: C.inkSoft }}>11:30 — Antes del calor</p>
          </div>
          <span className="opacity-40">→</span>
        </button>
      </div>
      <BottomNav active="calendar" setTab={setTab} />
    </div>
  );
}

function Agenda({ onActivity, setTab }: { onActivity: () => void; setTab: (s: ScreenId) => void }) {
  const items = [
    { time: "07:00", title: "Observación matinal", tag: "Rutina", icon: "☀️", color: C.clay },
    { time: "08:00", title: "Siembra de tomates", tag: "Día de fruto", icon: "🌱", color: C.clay, primary: true },
    { time: "11:30", title: "Riego con té de compost", tag: "Cuidado", icon: "💧", color: C.sage },
    { time: "16:00", title: "Poda de frutales", tag: "Mantenimiento", icon: "✂️", color: C.sage },
    { time: "19:30", title: "Notas del día", tag: "Bitácora", icon: "📔", color: C.clay },
  ];
  return (
    <div className="w-full h-full flex flex-col">
      <div className="px-6 pt-12 pb-4">
        <p className="text-[10px] font-mono uppercase tracking-widest" style={{ color: C.clay }}>Hoy · 15 mayo</p>
        <h2 style={serif} className="text-3xl italic">Tu agenda</h2>
      </div>
      <div className="flex-1 px-6 pb-4 overflow-y-auto">
        <div className="relative pl-12">
          <div className="absolute left-[34px] top-2 bottom-2 w-px" style={{ background: `${C.sage}33` }} />
          {items.map((it, i) => (
            <button key={i} onClick={onActivity} className="block w-full text-left mb-3 relative">
              <div className="absolute -left-12 top-3 w-12 text-right">
                <span className="text-[10px] font-mono" style={{ color: C.inkSoft }}>{it.time}</span>
              </div>
              <div className="absolute -left-[26px] top-4 w-3 h-3 rounded-full ring-4" style={{ background: it.color, ringColor: C.bone } as React.CSSProperties} />
              <div
                className="p-4 rounded-2xl flex items-center gap-3"
                style={{
                  background: it.primary ? C.sage : "white",
                  color: it.primary ? C.bone : C.ink,
                  boxShadow: it.primary ? `0 8px 20px ${C.sage}33` : "0 1px 0 rgba(0,0,0,0.04)",
                }}
              >
                <span className="text-lg">{it.icon}</span>
                <div className="flex-1">
                  <p className="text-[10px] uppercase tracking-widest opacity-70">{it.tag}</p>
                  <p className="text-sm font-semibold">{it.title}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      <BottomNav active="agenda" setTab={setTab} />
    </div>
  );
}

function Blog({ setTab }: { setTab: (s: ScreenId) => void }) {
  const posts = [
    { tag: "Biodinámica", title: "El silicio y el calcio en la huerta", read: "5 min" },
    { tag: "Apicultura", title: "Cuidados de la colmena en primavera", read: "7 min" },
    { tag: "Lunar", title: "Cómo leer un calendario sideral", read: "9 min" },
  ];
  return (
    <div className="w-full h-full flex flex-col">
      <div className="px-6 pt-12 pb-4">
        <p className="text-[10px] font-mono uppercase tracking-widest" style={{ color: C.clay }}>Lecturas</p>
        <h2 style={serif} className="text-3xl italic">Bitácora</h2>
      </div>
      <div className="flex-1 px-6 overflow-y-auto pb-4 space-y-4">
        <article className="rounded-3xl overflow-hidden ring-1 ring-black/5">
          <div className="h-32" style={{ background: `linear-gradient(135deg, ${C.sage}, ${C.clay})` }} />
          <div className="p-4 bg-white">
            <p className="text-[10px] uppercase tracking-widest font-semibold" style={{ color: C.clay }}>Destacado</p>
            <h3 style={serif} className="text-lg italic leading-tight mt-1">El ritmo de la luna y la savia ascendente</h3>
            <p className="text-[11px] mt-2" style={{ color: C.inkSoft }}>12 min · Lee en almacalenda.com →</p>
          </div>
        </article>
        {posts.map((p, i) => (
          <article key={i} className="p-4 rounded-2xl bg-white ring-1 ring-black/5 flex gap-4">
            <div className="w-14 h-14 rounded-xl shrink-0" style={{ background: i % 2 ? `${C.clay}33` : `${C.sage}33` }} />
            <div className="flex-1">
              <p className="text-[10px] uppercase tracking-widest font-semibold" style={{ color: C.clay }}>{p.tag}</p>
              <p style={serif} className="text-sm italic leading-tight mt-1">{p.title}</p>
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
      <div className="px-6 pt-12 pb-4">
        <p className="text-[10px] font-mono uppercase tracking-widest" style={{ color: C.clay }}>Juntos</p>
        <h2 style={serif} className="text-3xl italic">Comunidad</h2>
      </div>
      <div className="flex-1 px-6 overflow-y-auto pb-4">
        <div
          className="p-6 rounded-3xl text-center mb-4"
          style={{ background: C.sage, color: C.bone }}
        >
          <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white/20 flex items-center justify-center text-2xl">💬</div>
          <h3 style={serif} className="text-2xl italic mb-2">Grupo Alma Calenda</h3>
          <p className="text-sm opacity-80 mb-4">Más de 5,000 agricultores compartiendo saberes en tiempo real.</p>
          <button className="w-full py-3 rounded-2xl bg-white font-semibold text-sm" style={{ color: C.sage }}>
            Unirme al grupo de WhatsApp
          </button>
        </div>
        <div className="space-y-3">
          <div className="p-4 rounded-2xl bg-white ring-1 ring-black/5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full" style={{ background: `${C.clay}33` }} />
            <div className="flex-1">
              <p className="text-sm font-semibold">Carmen · La Mancha</p>
              <p className="text-[11px]" style={{ color: C.inkSoft }}>"Hoy sembramos zanahorias bajo Tauro 🌾"</p>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-white ring-1 ring-black/5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full" style={{ background: `${C.sage}33` }} />
            <div className="flex-1">
              <p className="text-sm font-semibold">Tomás · Valle de Aburrá</p>
              <p className="text-[11px]" style={{ color: C.inkSoft }}>"Las abejas más activas que nunca."</p>
            </div>
          </div>
        </div>
      </div>
      <BottomNav active="community" setTab={setTab} />
    </div>
  );
}

function DayDetail({ onActivity }: { onActivity: () => void }) {
  return (
    <div className="w-full h-full overflow-y-auto pb-6">
      <div className="px-6 pt-12 pb-6" style={{ background: `${C.clay}1a` }}>
        <button className="text-xs mb-3 opacity-60">← Calendario</button>
        <p className="text-[10px] font-mono uppercase tracking-widest" style={{ color: C.clay }}>Día de fruto · Tauro</p>
        <h2 style={serif} className="text-4xl italic leading-tight">Viernes 15<br />de mayo</h2>
        <div className="grid grid-cols-3 gap-2 mt-5">
          {[
            { label: "Luna", value: "Creciente", icon: "🌒" },
            { label: "Energía", value: "Ascend.", icon: "↑" },
            { label: "Color", value: "Cálido", icon: "🟠" },
          ].map((s, i) => (
            <div key={i} className="p-3 rounded-2xl bg-white">
              <p className="text-base">{s.icon}</p>
              <p className="text-[9px] uppercase tracking-widest mt-1" style={{ color: C.inkSoft }}>{s.label}</p>
              <p className="text-xs font-semibold">{s.value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="px-6 pt-5">
        <p className="text-[10px] font-mono uppercase tracking-widest mb-3" style={{ color: C.inkSoft }}>Recomendado hoy</p>
        <button onClick={onActivity} className="w-full p-4 rounded-2xl bg-white ring-1 ring-black/5 flex items-center gap-3 mb-2 text-left">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-base" style={{ background: `${C.sage}1a`, color: C.sage }}>🌱</div>
          <div className="flex-1">
            <p className="text-sm font-semibold">Siembra de tomates</p>
            <p className="text-[11px]" style={{ color: C.inkSoft }}>Día óptimo</p>
          </div>
          <span className="opacity-40">→</span>
        </button>
        <button className="w-full p-4 rounded-2xl bg-white ring-1 ring-black/5 flex items-center gap-3 mb-4 text-left">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-base" style={{ background: `${C.clay}1a`, color: C.clay }}>🍯</div>
          <div className="flex-1">
            <p className="text-sm font-semibold">Revisión de colmenas</p>
            <p className="text-[11px]" style={{ color: C.inkSoft }}>Tarde tranquila</p>
          </div>
          <span className="opacity-40">→</span>
        </button>
        <div className="p-5 rounded-2xl" style={{ background: `${C.sage}10` }}>
          <p style={serif} className="text-sm italic mb-2">"La savia sube. Las raíces escuchan."</p>
          <p className="text-[11px]" style={{ color: C.inkSoft }}>Consejo biodinámico del día</p>
        </div>
      </div>
    </div>
  );
}

function Activity() {
  return (
    <div className="w-full h-full overflow-y-auto pb-6">
      <div className="h-44 relative" style={{ background: `linear-gradient(135deg, ${C.sage}, ${C.clay}aa)` }}>
        <button className="absolute top-12 left-5 w-9 h-9 rounded-full bg-white/30 backdrop-blur flex items-center justify-center text-white">←</button>
        <div className="absolute bottom-4 left-6 right-6">
          <p className="text-[10px] font-mono uppercase tracking-widest text-white/80">Día de fruto · 08:00</p>
          <h2 style={serif} className="text-3xl italic text-white leading-tight">Siembra de tomates</h2>
        </div>
      </div>
      <div className="px-6 pt-5">
        <div className="grid grid-cols-3 gap-2 mb-5">
          {[
            { l: "Duración", v: "1h 30" },
            { l: "Dificultad", v: "Media" },
            { l: "Luna", v: "Óptima" },
          ].map((s, i) => (
            <div key={i} className="p-3 rounded-xl text-center" style={{ background: `${C.sage}10` }}>
              <p className="text-[9px] uppercase tracking-widest" style={{ color: C.inkSoft }}>{s.l}</p>
              <p className="text-xs font-semibold mt-1">{s.v}</p>
            </div>
          ))}
        </div>
        <Section title="Descripción">
          <p className="text-sm leading-relaxed" style={{ color: C.inkSoft }}>
            Siembra directa en suelo trabajado. La luna creciente en signo de fruto favorece el desarrollo de tomates jugosos y bien formados.
          </p>
        </Section>
        <Section title="Beneficios">
          <ul className="space-y-2">
            {["Mayor germinación", "Frutos más dulces", "Resistencia natural a plagas"].map((b, i) => (
              <li key={i} className="flex items-center gap-3 text-sm">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: C.clay }} /> {b}
              </li>
            ))}
          </ul>
        </Section>
        <Section title="Notas importantes">
          <p className="text-sm leading-relaxed p-3 rounded-xl" style={{ background: `${C.clay}15`, color: C.ink }}>
            Evita siembras al mediodía. Riega con agua reposada al menos 24h.
          </p>
        </Section>
        <button className="w-full h-13 mt-4 py-4 rounded-2xl text-sm font-semibold" style={{ background: C.sage, color: C.bone }}>
          Marcar como hecho ✓
        </button>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <p className="text-[10px] font-mono uppercase tracking-widest mb-2" style={{ color: C.clay }}>{title}</p>
      {children}
    </div>
  );
}

/* ============== BOTTOM NAV ============== */

function BottomNav({ active, setTab }: { active: ScreenId; setTab: (s: ScreenId) => void }) {
  const tabs: { id: ScreenId; label: string; icon: string }[] = [
    { id: "calendar", label: "Calendario", icon: "🌙" },
    { id: "agenda", label: "Agenda", icon: "✦" },
    { id: "blog", label: "Blog", icon: "❋" },
    { id: "community", label: "Comunidad", icon: "❀" },
  ];
  return (
    <div className="border-t bg-white" style={{ borderColor: `${C.sage}22` }}>
      <div className="flex justify-around items-center px-2 py-2 pb-4">
        {tabs.map((t) => {
          const on = active === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all"
              style={{
                background: on ? `${C.sage}15` : "transparent",
                color: on ? C.sageDark : `${C.inkSoft}aa`,
              }}
            >
              <span className="text-base leading-none">{t.icon}</span>
              <span className="text-[9px] font-semibold tracking-wide">{t.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24"><path fill="#4285F4" d="M22 12c0-.7-.1-1.4-.2-2H12v3.8h5.6a4.8 4.8 0 0 1-2 3.2v2.6h3.3c1.9-1.8 3-4.4 3-7.6z"/><path fill="#34A853" d="M12 22c2.7 0 5-.9 6.7-2.4l-3.3-2.6c-.9.6-2 1-3.4 1-2.6 0-4.8-1.7-5.6-4.1H3v2.6A10 10 0 0 0 12 22z"/><path fill="#FBBC05" d="M6.4 13.9a6 6 0 0 1 0-3.8V7.5H3a10 10 0 0 0 0 9l3.4-2.6z"/><path fill="#EA4335" d="M12 5.9c1.5 0 2.8.5 3.8 1.5l2.9-2.9A10 10 0 0 0 3 7.5l3.4 2.6c.8-2.4 3-4.2 5.6-4.2z"/></svg>
  );
}
function AppleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.86-3.08.43-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.42C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
  );
}
