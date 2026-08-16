import { useTranslation } from "react-i18next";

interface ValueItem {
  title: string;
  text: string;
}

interface TeamItem {
  role: string;
  bio: string;
}

// Lo que NO cambia con el idioma: nombre, ícono, foto.
const teamMeta = [
  {
    name: "Mariana Silva",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpsopBJOfUnTCjbH66eYwuWdsPrSQ2sVw52FTmf-TBt56_Tu2pKeh5mupAdhAdm5J2aRfbDr-e7057FaTHK1db_p61FRlQPWm5MmGC5mKb4miBpifRocSiNtchtFIlp5aIANmq2QPUEIJdQaiuDTYnW7ydDdsgBrjCzXrHpYH5BaA3vayGwIrfCUk5HKknlswhKG-qqE2KWWpiDPH217oM8K9yacKpRKvwW_FQX0srX938mHNi9Plp",
  },
  {
    name: "João Pereira",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGNiLcSG0Wky-CugqeGr_aDCMeyhWKOjrp8v2xNn-GfFdHi2bzIqcWzOL0Mnm0sePqnrHtEoppX2XpBy8g0AQEsPiB363DqNFiRYcb0M2LqdZteX6fzQP2RJjizrDS24eK6v2EV9rM_mUYNv1SW_ekSap_M38bJGBUtb0Dftmhlk4SRRauzioELb4VISovBPkhWrsUWf9kKOttV5fSBfAMyDwQDRfoB9s5JzXRb64BXq2kWDM1uZxf",
  },
  {
    name: "Inês Costa",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3w_UKH4EJx-KU6e00OYa9CS3dNwvazlQjUVeuXu1MIg0GRRyoS5YfvdMNjU_NIV4UUsnNEK4UqZvrpa_0FDnCrofs05ImlgxpJpIQfjytT4eE9Nz8QBEemfqbjrtItjF8fP072WcA2rLKYXubvmP5lVEcfIY3KhqhiCNcpPH7N9kE9Mi70PHSroI6U2jD6GVaeLKcrNAPh9CqQk9wult_YqPwHfW8n7LpLwKzYUHOLj4qeoG1YoEF",
  },
  {
    name: "Tiago Mendes",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgUfpmwE7NO1V0AlHarC0xH6LQ4hqbB7_962n-hGD7QtOXsDkHX-XwhkRG2_w64GmANwHpGJaiLy0dp_uRfePT4RmwI3Hc3AU2yIb4EJh7wNqazWRysN_K4iHfNfHBVkERqleGBc-w7ApL7MWpf_0ZEtLrK_US1UIlCw2oDQttD8x5mY6WB7Np8blSFfHgdjuzuLAjCHrKIl2--qZzUVN4Q4ZnpQwarxDZnsWIY88ZDAx0YDQCDADQ",
  },
];

const valueIcons = ["explore", "workspace_premium", "groups"];

export default function About() {
  const { t } = useTranslation();
  const values = t("about.values", { returnObjects: true }) as ValueItem[];
  const team = t("about.team", { returnObjects: true }) as TeamItem[];

  return (
    <>
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
        <h1 className="font-headline-h1-mobile md:font-headline-h1 text-headline-h1-mobile md:text-headline-h1 text-on-surface mb-stack-sm max-w-4xl mx-auto tracking-tight">
          {t("about.heroTitle")}
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          {t("about.heroSubtitle")}
        </p>
      </section>

      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-t border-outline-variant">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md items-center">
          <div className="space-y-stack-sm">
            <h2 className="font-headline-h2 text-headline-h2 text-on-surface">
              {t("about.heritageTitle")}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {t("about.heritageP1")}
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {t("about.heritageP2")}
            </p>
          </div>
          <div className="relative h-[500px] w-full rounded overflow-hidden">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4HyEfCHr_PcLExp0GzjhwiazdI6CKThqIz9ToryBUOywOqELKtdYHVD8PDsbTpsAvYnQkkdi1CIRZbpMIGuFTb25AbLNT8BSlLw_r5-NX3O3mvt0LT37rBZhfmaUKK9C7c2z__MLeVgmd5eNPz8b1Hvaif60W_xdYbG7jYOYo0RztlFkK5RUIW9qQtPaQXO0JmptFTgjzd6h8psPiQODMNujQMynB53UVBpm9IYptx1ngzhhMZtSx"
              alt="Portuguese pastry chef at work"
            />
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-stack-lg px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto text-center mb-stack-md">
          <h2 className="font-headline-h2 text-headline-h2 text-on-surface">
            {t("about.philosophyTitle")}
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mt-4" />
        </div>
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="flex flex-col items-center text-center p-6 border border-outline-variant bg-surface rounded"
            >
              <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center mb-4 text-on-primary-container">
                <span className="material-symbols-outlined">
                  {valueIcons[i]}
                </span>
              </div>
              <h3 className="font-headline-h3 text-headline-h3 text-on-surface mb-2">
                {v.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {v.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-stack-md">
          <h2 className="font-headline-h2 text-headline-h2 text-on-surface">
            {t("about.guidesTitle")}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            {t("about.guidesSubtitle")}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-gutter">
          {teamMeta.map((member, i) => (
            <div
              key={member.name}
              className="border border-outline-variant rounded overflow-hidden flex flex-col bg-surface"
            >
              <div className="h-64 relative">
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  src={member.img}
                  alt={member.name}
                />
              </div>
              <div className="p-6 pt-8 text-center flex-grow flex flex-col">
                <h4 className="font-headline-h3 text-headline-h3 text-on-surface">
                  {member.name}
                </h4>
                <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase mb-4">
                  {team[i]?.role}
                </span>
                <p className="font-body-md text-body-md text-on-surface-variant flex-grow">
                  {team[i]?.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface-container-high py-stack-lg px-margin-mobile md:px-margin-desktop text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline-h2 text-headline-h2 text-on-surface mb-stack-sm">
            {t("about.ctaTitle")}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md">
            {t("about.ctaText")}
          </p>
          <button className="bg-ink text-on-ink font-button text-button px-8 py-4 rounded hover:opacity-90 transition-opacity uppercase tracking-widest">
            {t("about.ctaButton")}
          </button>
        </div>
      </section>
    </>
  );
}