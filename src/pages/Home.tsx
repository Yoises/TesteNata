import { useNavigate } from "react-router-dom";
import Testimonials from "../components/Testimonials";
import { useTranslation } from "react-i18next";



export default function Home() {

  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-[870px] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0 scale-105 transform origin-center animate-[subtleZoom_20s_ease-in-out_infinite_alternate]"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAvlSnjTLaFb3ns7LJEAS1Q_qurqvOJNSMxdlyiDwUxUE4bVlu1xdyCfFNFxXYe-7D1yWg1iawE2J7YXfADA96ki3v26BaOekB8Nfu1Yy4wfWcWMCd2j0LICtPP8Q-DOSj_Mt3CymeSAwKTSW_-tYy01TPEDd0NISha8KqIWH4nZfRZwTXUhKDWDwj-OcZg3XFGeCtPWqB5bGS22ZttnOaS8DhC-vyrV7kHFUKYTQzUaLbkoe0LyZpX')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/40 to-transparent z-10" />

        <div className="relative z-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center w-full mt-24">
          <h1 className="font-headline-h1-mobile md:font-display-lg text-headline-h1-mobile md:text-display-lg text-on-surface mb-stack-md max-w-4xl mx-auto drop-shadow-sm">
           {t("home.heroTitle")}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg max-w-2xl mx-auto drop-shadow-sm">
            {t("home.heroSubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={() => navigate('/Booking')} className="w-full sm:w-auto font-button text-button bg-ink text-on-ink px-8 py-4 rounded uppercase tracking-widest hover:opacity-90 transition-opacity duration-300 shadow-sm">
              {t("home.bookYourTour")}
            </button>
            <button  className="w-full sm:w-auto font-button text-button bg-surface/80 backdrop-blur-sm border border-on-surface text-on-surface px-8 py-4 rounded uppercase tracking-widest hover:bg-surface transition-colors duration-300">
              {t("home.exploreExperience")}
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-70 animate-bounce">
          <span className="font-label-caps text-label-caps text-on-surface-variant">
            Scroll
          </span>
          <span className="material-symbols-outlined text-on-surface-variant">
            arrow_downward
          </span>
        </div>

        <style>{`
          @keyframes subtleZoom {
            0% { transform: scale(1.0); }
            100% { transform: scale(1.08); }
          }
        `}</style>
      </section>

      {/* Video */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto bg-surface text-center">
        <h2 className="font-headline-h1-mobile md:font-headline-h2 text-headline-h1-mobile md:text-headline-h2 text-on-surface mb-stack-lg">
          {t("home.videoTitle")}
        </h2>
        <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-outline-variant group cursor-pointer shadow-[0_12px_32px_rgba(0,0,0,0.04)]">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBS0XRHA42nSKnkDSpg1dHl-nGziF9dLSLrer2KwMy_Mn7LYosl14sWwSvqEN1-PTJw2A2mjhCou5D5lL983pP1Ov5WskyBbkhsMhJ6M_HFwRqkvSMTQ4a8WmqWAPnKiPdfeiCvSd7vj7XhJRSJJB_uC5EGtbqt4hyCpfPGRi6YmF3TA807QtfxU2p88H95cHLIJbGy3CsQanOvxY6GHXtBCjUhfYbNpaTqYuL7Ux5Le4v1QIKG2dgK')",
            }}
          />
          <div className="absolute inset-0 bg-surface/20 group-hover:bg-transparent transition-colors duration-500" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-surface/80 backdrop-blur-md flex items-center justify-center shadow-sm border border-outline-variant group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined text-on-surface text-[32px] ml-1">
                play_arrow
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Bento */}
      <section className="py-stack-lg bg-surface-container-low border-y border-outline-variant">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="mb-stack-lg flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="max-w-xl">
              <span className="font-label-caps text-label-caps text-primary tracking-widest block mb-2">
                {t("home.elementsEyebrow")}
              </span>
              <h2 className="font-headline-h1-mobile md:font-headline-h2 text-headline-h1-mobile md:text-headline-h2 text-on-surface">
                {t("home.elementsTitle")}
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
              {t("home.elementsSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4">
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-lg border border-outline-variant min-h-[400px]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBI1dte2ZLb3mF1OjNF-NyGX8jTVelCn1ak7r_5t3qO5fCB4aWXVnaWVw-ctQzNKYqcScj8C786eoGOX9mqP1JBhd7ru6GO-ylx8r5XnBVNH5_P3dAqeUDgPMTqYNTL4M4PQGiCBqe4V9sLzWc-L6cmtE8VKeH141Lqn08NhUpH-fskA8SecXKDMaqvs2uf80zCQx_MoMFipjOueZsUH-RAKF8Nmmgp_FhhiFZrfAzar8bxe1OviuT7')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-tint/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-stack-md w-full">
                <h3 className="font-headline-h3 text-headline-h3 text-surface mb-2">
                  {t("home.bakeTitle")}
                </h3>
                <p className="font-body-md text-body-md text-surface/90 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                { t(" home.bakeText")}
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg border border-outline-variant bg-surface h-[200px] md:h-auto flex flex-col justify-end p-6">
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-surface-container flex items-center justify-center">
                <span className="material-symbols-outlined text-tertiary text-[20px]">
                  layers
                </span>
              </div>
              <h3 className="font-headline-h3 text-headline-h3 text-on-surface mb-2 relative z-10">
                {t("home.pastryTitle")}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant relative z-10 text-sm">
                {t("home.pastryText")}
              </p>
            </div>

            <div className="relative overflow-hidden rounded-lg border border-outline-variant bg-primary-container h-[200px] md:h-auto flex flex-col justify-end p-6">
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-surface/30 flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary-container text-[20px]">
                  egg_alt
                </span>
              </div>
              <h3 className="font-headline-h3 text-headline-h3 text-on-primary-container mb-2 relative z-10">
                {t("home.custardTitle")}
              </h3>
              <p className="font-body-md text-body-md text-on-primary-container/80 relative z-10 text-sm">
                {t("home.custardText")}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <Testimonials />
    </>
  );
}
