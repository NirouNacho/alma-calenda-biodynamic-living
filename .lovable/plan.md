# Plan — Alma Calenda: 3 direcciones visuales para presentación al cliente

Construiré las **tres direcciones** como prototipos web navegables (mobile-first, en marco de iPhone) para que tu cliente pueda compararlas y elegir.

## Estructura de rutas

```
/                          → Showcase: portada con las 3 direcciones lado a lado
/huerto-sereno             → Direccion A — flujo completo navegable
/cosmos-biodinamico        → Direccion B — flujo completo navegable
/misticismo-organico       → Direccion C — flujo completo navegable
```

Cada dirección tendrá su propio sub-flujo con las 10 pantallas requeridas accesibles vía navegación interna (tabs + transiciones).

## Pantallas por dirección (las 10 pedidas)

1. Splash / Bienvenida (logo + animación luna/plantas)
2. Auth — Login / Registro / Recuperar (Google, Apple, Email)
3. Acceso a Calendarios (cards desbloqueados/bloqueados + canjear código)
4. Selección de Intereses (chips multi-selección)
5. Home · Calendario (mensual + indicadores lunares + colores biodinámicos)
6. Home · Agenda (timeline del día)
7. Home · Blog (cards de artículos)
8. Home · Comunidad (acceso WhatsApp)
9. Detalle del Día (dashboard biodinámico)
10. Detalle de Actividad (descripción + recomendaciones)

Cada home incluye **Bottom Navigation Bar** consistente.

## Las tres direcciones

**A — Huerto Sereno** (cálido y terrenal)
- Paleta: bone `#f9f7f2`, sage `#7e8d77`, clay `#cc856a`, ink `#2a2c24`
- Tipografía: Fraunces (serif) + Geist (sans)
- Sensación: almanaque del campesino, papel, tierra, calidez

**B — Cosmos Biodinámico** (premium espiritual)
- Paleta: midnight `#0a0e1a`, oro `#f0d78c`, lavanda `#c4b5fd`, crema `#fefce8`
- Tipografía: Playfair Display italic + Inter + JetBrains Mono
- Sensación: constelaciones, glassmorphism ligero, místico-premium

**C — Misticismo Orgánico** (fresco y amigable)
- Paleta: sage `#e3eae3`/`#5b7c5b`, clay `#d4a373`, moon `#fefae0`, accent `#606c38`
- Tipografía: Outfit + Fraunces italic
- Sensación: botánico moderno, luminoso, accesible

## Showcase (página `/`)

Portada que presenta las 3 direcciones en cards grandes con preview en miniatura, descripción corta y CTA "Ver flujo completo →". Pensada para que tu cliente compare de un vistazo y luego entre en cualquiera.

## Detalles técnicos

- TanStack Start con file-based routing en `src/routes/`
- Cada dirección define sus tokens (colores + fuentes) en su propio módulo CSS scoped, sin contaminar el sistema global de `src/styles.css`
- Componentes reutilizables por dirección: `<PhoneFrame>`, `<BottomNav>`, `<ScreenContainer>`
- Las "pantallas" dentro de cada dirección se navegan con tabs/state local (no rutas anidadas) para mantener la sensación de app móvil
- Animaciones suaves con CSS (fade-in, transiciones de tab)
- Imágenes ilustrativas generadas con `imagegen` para splash y headers (luna, hojas, constelaciones) — una set por dirección
- Mobile-first; en desktop se muestra el marco de iPhone centrado sobre fondo neutro

## Lo que NO incluye este prototipo

- Backend / autenticación real (los botones son visuales)
- Pasarela de pago real
- Lógica de calendario dinámica (datos mock)
- Código Flutter (esto es un prototipo web visual de alta fidelidad para validación con el cliente — equivalente a un Figma navegable)

¿Apruebas el plan para que empiece a construir?