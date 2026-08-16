import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ThemeToggle from "./ThemeToggle";



// ⬇️ NUEVO: la función del selector, ARRIBA de Navbar
function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const languages = [
    { code: "en", label: "EN" },
    { code: "es", label: "ES" },
    { code: "pt", label: "PT" },
    { code: "fr", label: "FR" },
  ];

  return (
    <select
      value={i18n.language}
      onChange={(e) => i18n.changeLanguage(e.target.value)}
      className="bg-transparent text-on-surface-variant font-label-caps text-label-caps border border-outline-variant rounded px-2 py-1 cursor-pointer"
    >
      {languages.map((l) => (
        <option key={l.code} value={l.code}>
          {l.label}
        </option>
      ))}
    </select>
  );
}
// ⬆️ FIN de lo nuevo

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

   const links = [
  { to: "/", label: t("nav.home") },
  { to: "/gallery", label: t("nav.gallery") },
  { to: "/about", label: t("nav.about") },
  { to: "/contact", label: t("nav.contact") },
  { to: "/booking", label: t("nav.book") },
];

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/95 border-b border-outline-variant backdrop-blur-md">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto h-20">
        <NavLink
          to="/"
          onClick={() => setOpen(false)}
          className="font-headline-h3 text-headline-h3 text-primary tracking-tighter shrink-0"
        >
          ALMA DE LISBOA
        </NavLink>

        <div className="hidden md:flex gap-gutter items-center">
          {links.slice(0, 4).map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                [
                  "font-label-caps text-label-caps transition-colors duration-300",
                  isActive
                    ? "text-primary font-bold border-b-2 border-primary pb-1"
                    : "text-on-surface-variant hover:text-primary",
                ].join(" ")
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-stack-sm shrink-0">
          <LanguageSwitcher /> {/* ⬅️ NUEVO */}
          <ThemeToggle />
          <NavLink
            to="/booking"
            className="font-button text-button bg-ink text-on-ink px-6 py-2 rounded uppercase hover:opacity-90 transition-opacity duration-300"
          >
            {t("nav.book")}
          </NavLink>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher /> {/* ⬅️ NUEVO, así también se ve en mobile */}
          <ThemeToggle />
          <button
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="p-2 text-on-surface-variant hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined">
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out border-t border-outline-variant bg-surface ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-margin-mobile py-6 gap-6">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                [
                  "font-label-caps text-label-caps uppercase tracking-widest transition-colors duration-300",
                  isActive
                    ? "text-primary font-bold"
                    : "text-on-surface-variant hover:text-primary",
                ].join(" ")
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}