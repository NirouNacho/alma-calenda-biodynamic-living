import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alma Calenda — 3 Direcciones de Diseño" },
      {
        name: "description",
        content:
          "Tres direcciones visuales para la app de agricultura biodinámica Alma Calenda. Elige la que más te conecte.",
      },
    ],
  }),
  component: Showcase,
});

const directions = [
  {
    slug: "huerto-sereno",
    name: "Huerto Sereno",
    tagline: "Cálido · Terrenal · Almanaque",
    description:
      "Paleta de hueso, salvia y arcilla. Tipografía Fraunces. Sensación de papel y campo al amanecer.",
    bg: "linear-gradient(135deg, #f9f7f2 0%, #e8e2d5 100%)",
    fg: "#2a2c24",
    accent: "#7e8d77",
    chip: "#cc856a",
  },
  {
    slug: "cosmos-biodinamico",
    name: "Cosmos Biodinámico",
    tagline: "Premium · Espiritual · Constelación",
    description:
      "Midnight con oro y lavanda. Glassmorphism ligero. Tipografía Playfair italic. Sensación cósmica y mística.",
    bg: "linear-gradient(135deg, #0a0e1a 0%, #1a1f3a 100%)",
    fg: "#fefce8",
    accent: "#f0d78c",
    chip: "#c4b5fd",
  },
  {
    slug: "misticismo-organico",
    name: "Misticismo Orgánico",
    tagline: "Fresco · Botánico · Amigable",
    description:
      "Sage y oliva con detalles cálidos. Outfit + Fraunces. Botánico moderno, luminoso y muy accesible.",
    bg: "linear-gradient(135deg, #fcfbf7 0%, #e3eae3 100%)",
    fg: "#2d362d",
    accent: "#606c38",
    chip: "#d4a373",
  },
];

function Showcase() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <p className="text-xs font-mono tracking-[0.3em] text-neutral-500 uppercase mb-4">
          Prototipo · Mobile UI · iOS + Android
        </p>
        <h1 className="text-5xl md:text-6xl font-serif italic tracking-tight mb-4">
          Alma Calenda
        </h1>
        <p className="max-w-2xl text-lg text-neutral-600 leading-relaxed">
          Tres direcciones visuales completas para la app de agricultura
          biodinámica. Cada una incluye el flujo de 10 pantallas: splash,
          autenticación, calendarios, intereses, home con bottom nav, detalle de
          día y de actividad. Elige una para presentar a tu cliente.
        </p>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-24 grid md:grid-cols-3 gap-6">
        {directions.map((d) => (
          <Link
            key={d.slug}
            to={`/${d.slug}` as "/huerto-sereno"}
            className="group block rounded-3xl overflow-hidden ring-1 ring-black/5 hover:ring-black/20 transition-all hover:-translate-y-1 hover:shadow-2xl"
          >
            <div
              className="aspect-[4/5] p-8 flex flex-col justify-between"
              style={{ background: d.bg, color: d.fg }}
            >
              <div className="flex items-start justify-between">
                <span
                  className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full"
                  style={{ background: `${d.accent}22`, color: d.accent }}
                >
                  Dirección
                </span>
                <div
                  className="w-10 h-10 rounded-full"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${d.accent}, ${d.chip})`,
                  }}
                />
              </div>
              <div>
                <h2 className="text-3xl font-serif italic mb-2">{d.name}</h2>
                <p className="text-sm opacity-70 mb-6">{d.tagline}</p>
                <p className="text-sm leading-relaxed opacity-80">
                  {d.description}
                </p>
                <div className="mt-8 flex items-center gap-2 text-sm font-medium">
                  Ver flujo completo
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </main>

      <footer className="border-t border-neutral-200 py-8 text-center text-xs text-neutral-500 font-mono tracking-widest uppercase">
        Alma Calenda · Prototipo de presentación · 2026
      </footer>
    </div>
  );
}
