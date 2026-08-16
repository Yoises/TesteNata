import { useTranslation } from "react-i18next";

const items = [
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuACbHIJfZWOu_fYe3XFCb0BHuGmL98oS1EM_8t6ZSF8MgnHMeOa5xYCvXnXC-ZJEaRlllJ3JxEsx9MSeevBg3n3soUUcG-f_xnvaH3e6tpGEvqmWUkKYWl34WkymHJFzwdBKGEq8uqVh3jLEu2QC2RJUQ6ZdFfAzj9mvAhDuWFdKwhBLd_S73la6pJD6s-nI09EbKZEu3_dPUkWkAWduJcfI_o4pRODADAkdJB5JcieMEMOeRGPl8oR",
    h: "h-[440px]",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBF77cRcBF2Jjnwnna168Mrszn7i8Kcyes7kLb1rfHHW82v4_KcQmSE01igUecTGNjbMpzOU6iT44osFIVM3sio05q3XtBhCb0NStEj91xRSqw3bnMsSROg8ptG0Zy7JzDxattMx72OI-Cnj5xPY0ueZOSiTujS1eSx9uahnfjG8oV0D8ZNDRNr8kMxK1bmqXxPJdKQIXZ_4OZ1_pD_h4qGVobhFu_qZHt1cefxwunlnUqSe_PrV66L",
    h: "h-[280px]",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDr6g0MkoFZ7dZOb0WRsRPUVKBanhRvJlwVu5UqZNVQRgz46cvX-vrcB3N03QcCDEE6omxqbyuWkxfBC9fuGODSnSVRSJAwPpQH_B8sG_dP9xOCtrUVNDizz2zsaBeweA3K6gJEUyFdmdaJAef2SsNOHocQ9NBwZV7Sx5ImLdzdW2g-9tlg2NnpVhgptqCa7XSoztN2lLrDVj81RJNh5PQXbuCq0hdygm_fLXHMlxblQG0XgFy8FHHV",
    h: "h-[360px]",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6yIrleYZHDlM_eEVT900bu6DbZLmRD-4XM8oQSBC4Ukj_RdC2wcRPrS_Bd8SPKy2dUBds_5fOQQw_a9kLw0gAGb9iQsRAxXKWJuIAWm6QVqXIOm4ZUiy6PQc7qICnEtGusF34TiCG6lSU0jPUpOrPu-jq566ntSNqlBdbtbol9-3g4jGubjgd3pesBJrgH2e977foq9weZGl_Yff2-9LrQkXJCVdGq8bpfcUMt1vYxcJEisvgs2yv",
    h: "h-[440px]",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCajJzWDG_SkD4DpEGXQdz3MBbCGj83PcoV08jQpKaxQvBm5S9hKmlkHViORi321Z6b_jSpDJ5hvke6tJ_pnSaQAkpcVwwQ5yVIFT2NtjOHHXkKEwn6zJMBVH8HpUCcUzypNl5bBjXBhbTG-XqF_fr0jBpnjxVKw5VxAA-XG32w9Oak0oHIYLt0F1GBMd6MC2IchmIPoQs8SxXvxy0aNMXkLtDTiul4fcYePzq3i_GbttBiY9LBzpK6",
    h: "h-[280px]",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSQpLSmNKzZgfsnfeppk0ATg39fmI9gnP8XqNHB9UgQ_5-5NuLtggdHsW9AsaqAYR1RitHXgsj3e5DzEgPK48Cg6yYxLJiyaIDaCpty8X9O77V2vrtiyfUZrtI_gtGWfch2rF5CzaiZvkThWxjCbGTFAgnBS2Fd6i1RIQG0FPZK4diWlAoLsZ4lPEbIrfFR6AT5txwOUzNglGs9wniiIScqqweqPm2FJ3rKubzIv3_Q4JRTwByhQID",
    h: "h-[360px]",
  },
];

export default function Gallery() {
  const { t } = useTranslation();
  const filters = t("gallery.filters", { returnObjects: true }) as string[];
  const itemLabels = t("gallery.itemLabels", {
    returnObjects: true,
  }) as string[];

  return (
    <main className="pb-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
      <section className="text-center mb-stack-lg max-w-3xl mx-auto pt-stack-lg">
        <h1 className="font-headline-h1-mobile md:font-display-lg text-headline-h1-mobile md:text-display-lg text-primary mb-stack-sm">
          {t("gallery.heroTitle")}
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          {t("gallery.heroSubtitle")}
        </p>
      </section>

      <section className="flex flex-wrap justify-center gap-base mb-stack-lg">
        {filters.map((f, i) => (
          <button
            key={f}
            className={
              i === 0
                ? "px-4 py-2 bg-primary text-on-primary font-label-caps text-label-caps tracking-widest uppercase rounded transition-colors"
                : "px-4 py-2 bg-surface text-on-surface-variant font-label-caps text-label-caps tracking-widest uppercase rounded border border-outline-variant transition-colors hover:bg-surface-variant"
            }
          >
            {f}
          </button>
        ))}
      </section>

      <section className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
        {items.map((item, i) => (
          <div
            key={item.img}
            className={`group relative mb-6 overflow-hidden border border-outline-variant bg-surface break-inside-avoid ${item.h}`}
          >
            <img
              src={item.img}
              alt={itemLabels[i]}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-on-surface/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="font-headline-h3 text-headline-h3 text-on-primary">
                {itemLabels[i]}
              </p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}