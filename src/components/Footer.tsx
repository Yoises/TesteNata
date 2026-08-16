import { socialLinks } from "./SocialIcons";
import { useTranslation } from "react-i18next";

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


export default function Footer() {
   const { t } = useTranslation();
  return (
    <footer className="w-full bg-surface-container-low border-t border-outline-variant">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-stack-md px-margin-mobile md:px-margin-desktop py-stack-lg max-w-container-max mx-auto">
        <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
          <div className="font-headline-h2 text-headline-h2 text-primary">
            ALMA DE LISBOA
          </div>
          <p className="font-body-md text-body-md text-tertiary mt-2 max-w-sm">
            ({t("footer.tagline")})
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="font-label-caps text-label-caps text-on-surface-variant mb-4 tracking-widest">
            {t("footer.legal")}
          </h4>
          <a
            className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors w-fit"
            href="#"
          >
            {t("footer.privacy")}
          </a>
          <a
            className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors w-fit"
            href="#"
          >
            {t("footer.terms")}
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="font-label-caps text-label-caps text-on-surface-variant mb-4 tracking-widest">
            {t("footer.social")}
          </h4>
          <div className="flex items-center gap-3">
    {socialLinks.map(({ label, href, Icon }) => (
      <a
        key={label}
        href={href}
        aria-label={label}
        title={label}
        className="w-9 h-9 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-colors duration-300"
      >
        <Icon className="w-4 h-4" />
      </a>
    ))}
  </div>
        </div>
      </div>
    </footer>
  );
}
