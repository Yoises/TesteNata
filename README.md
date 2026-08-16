# Alma de Lisboa — React + TSX + Tailwind

Conversión de las 5 páginas HTML/Tailwind-CDN a un proyecto real de **Vite + React + TypeScript**, usando **Tailwind** compilado (no el CDN) y con **modo oscuro real en todas las páginas** (el HTML original solo traía dark mode en el Home).

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`.

## Estructura

```
src/
  components/
    Navbar.tsx        Nav compartido, con el botón de tema
    Footer.tsx         Footer compartido
    ThemeToggle.tsx     Botón sol/luna que cambia entre light/dark
  context/
    ThemeContext.tsx   Estado del tema (persistido en localStorage +
                        respeta prefers-color-scheme del sistema)
  pages/
    Home.tsx
    About.tsx
    Contact.tsx
    Gallery.tsx
    Booking.tsx
  index.css            Variables CSS con la paleta de colores
  App.tsx               Rutas (react-router-dom)
  main.tsx
```

## Cómo se resolvió el dark mode

El HTML original solo tenía una versión oscura del **Home**; el resto de páginas
(About, Contact, Gallery, Booking) no la tenían. En vez de duplicar clases
`dark:` página por página, se definió cada color del sistema de diseño como
**variable CSS** (`--color-primary`, `--color-surface`, etc.) en `src/index.css`:

- `:root` → valores del tema claro (tomados de los 5 HTML).
- `.dark` → valores del tema oscuro (tomados de la versión dark del Home),
  extendidos para cubrir también los tokens que esa página no sobreescribía.

`tailwind.config.ts` mapea cada color de Tailwind (`bg-primary`, `text-on-surface`,
etc.) a su variable CSS correspondiente. Como resultado, **toda la app** —no
solo el Home— responde al toggle de modo oscuro, sin duplicar componentes.

El toggle vive en `Navbar.tsx` (icono sol/luna) y usa `ThemeContext`, que:
- aplica/quita la clase `.dark` en `<html>`,
- recuerda la preferencia en `localStorage`,
- si no hay preferencia guardada, respeta `prefers-color-scheme` del sistema.

## Notas de la conversión

- Los estilos inline (`background-image: url(...)`) se pasaron a `style={{}}`.
- Los botones sólidos hardcodeados como `#1A1A1A` se unificaron en un token
  `ink` / `on-ink`, que en modo oscuro cambia al dorado `primary` (igual que
  hacía el HTML oscuro del Home con sus botones).
- El formulario de Contact y el stepper de Booking ahora son componentes
  controlados de React (`useState`) en vez de HTML estático.
- Se usó `react-router-dom` para las rutas: `/`, `/about`, `/contact`,
  `/gallery`, `/booking`.
- Las imágenes de Google (`lh3.googleusercontent.com`) se dejaron con la URL
  original; puedes reemplazarlas por tus propios assets en `public/` o un CDN.
