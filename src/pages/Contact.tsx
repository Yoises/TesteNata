import { useState, type FormEvent } from "react";
import { useTranslation } from "react-i18next";
import { socialLinks } from "../components/SocialIcons";

export default function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Wire this up to your backend / email service.
    setSent(true);
  };

  return (
    <>
      <header className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-stack-lg pb-stack-md text-center md:text-left">
        <h1 className="font-headline-h1-mobile md:font-headline-h1 text-headline-h1-mobile md:text-headline-h1 text-on-surface mb-4">
          {t("contact.heroTitle")}
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          {t("contact.heroSubtitle")}
        </p>
      </header>

      <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter mb-stack-lg">
        {/* Contact details */}
        <div className="col-span-1 md:col-span-4 flex flex-col gap-stack-md border border-outline-variant p-8 bg-surface-container-lowest">
          <div>
            <h2 className="font-label-caps text-label-caps text-tertiary mb-6 uppercase tracking-widest">
              {t("contact.getInTouch")}
            </h2>
            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-outline mt-1">
                  mail
                </span>
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">
                    {t("contact.email")}
                  </p>
                  <a
                    className="font-body-md text-body-md text-on-surface hover:text-primary transition-colors"
                    href="mailto:hello@almadelisboa.com"
                  >
                    hello@almadelisboa.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-outline mt-1">
                  call
                </span>
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">
                    {t("contact.phone")}
                  </p>
                  <a
                    className="font-body-md text-body-md text-on-surface hover:text-primary transition-colors"
                    href="tel:+351912345678"
                  >
                    +351 912 345 678
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-outline mt-1">
                  chat
                </span>
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">
                    {t("contact.whatsapp")}
                  </p>
                  <a
                    className="font-body-md text-body-md text-on-surface hover:text-primary transition-colors"
                    href="#"
                  >
                    {t("contact.messageUs")}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <hr className="border-t border-outline-variant" />

          <div>
            <h2 className="font-label-caps text-label-caps text-tertiary mb-6 uppercase tracking-widest">
              {t("contact.meetingPoint")}
            </h2>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-outline mt-1">
                location_on
              </span>
              <p className="font-body-md text-body-md text-on-surface">
                {t("contact.address")}
              </p>
            </div>
          </div>

          <hr className="border-t border-outline-variant" />

          <div>
            <h2 className="font-label-caps text-label-caps text-tertiary mb-6 uppercase tracking-widest">
              {t("contact.followJourney")}
            </h2>
            <div className="flex gap-4">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  title={label}
                  className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="col-span-1 md:col-span-8 p-8 md:p-12 bg-surface-container-lowest border border-outline-variant">
          <form className="flex flex-col gap-8 h-full" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input
                className="editorial-input"
                name="name"
                placeholder={t("contact.nameField")}
                required
                type="text"
                value={form.name}
                onChange={handleChange}
              />
              <input
                className="editorial-input"
                name="email"
                placeholder={t("contact.emailField")}
                required
                type="email"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <select
              className="editorial-input appearance-none bg-transparent rounded-none cursor-pointer"
              name="subject"
              value={form.subject}
              onChange={handleChange}
            >
              <option value="" disabled>
                {t("contact.subjectPlaceholder")}
              </option>
              <option value="booking">{t("contact.subjectBooking")}</option>
              <option value="private">{t("contact.subjectPrivate")}</option>
              <option value="dietary">{t("contact.subjectDietary")}</option>
              <option value="other">{t("contact.subjectOther")}</option>
            </select>

            <textarea
              className="editorial-input resize-none h-full"
              name="message"
              placeholder={t("contact.messageField")}
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
            />

            <div className="flex justify-end items-center gap-4 pt-4">
              {sent && (
                <span className="font-small text-small text-primary">
                  {t("contact.sentConfirmation")}
                </span>
              )}
              <button
                className="bg-ink text-on-ink rounded px-8 py-4 font-button text-button uppercase tracking-widest flex items-center gap-2 hover:opacity-90 transition-opacity"
                type="submit"
              >
                <span>{t("contact.sendMessage")}</span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-stack-lg">
        <div className="w-full h-[400px] border border-outline-variant relative overflow-hidden bg-surface-container">
          <img
            className="w-full h-full object-cover mix-blend-multiply opacity-80"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_t1KQvdF3OEOKko4Y059nDgvI5sPTeonz-dRW5mPaSBgqqoIrSvcHTs8qEKIBlUk48YYMdmKYKVB2W9U8Dyc7kGnRfH7iB9xUCkkwn3U2PHjc7ecZLnAv3WZcIWQh5qXwRxdHa6dg_HpFbYnpFn-J-quADyZcwXFeGG5OvbucHoUvrphuYuLm3UQqwHDPbfCBDXZzJJeC8Kh17GOztpQqB8EINq6ts9it-nFPBYdeAjlCSrDB-ig9"
            alt="Map of Praça do Comércio, Lisbon"
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-surface p-4 rounded-full shadow-lg border border-primary/20 flex items-center justify-center animate-bounce">
              <span className="material-symbols-outlined text-primary text-[32px]">
                location_on
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}