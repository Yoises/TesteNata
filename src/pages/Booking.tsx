import { useState } from "react";
import { useTranslation } from "react-i18next";

const steps = ["booking.steps.selectDate", "booking.steps.chooseTime", "booking.steps.guestDetails", "booking.steps.review"];
const days = Array.from({ length: 10 }, (_, i) => i + 1);
const timeSlots = [
  { label: "booking.timeSection.morningLabel", time: "10:00 AM - 1:30 PM" },
  { label: "booking.timeSection.afternoonLabel", time: "3:00 PM - 6:30 PM" },
];

export default function Booking() {
  const [selectedDay, setSelectedDay] = useState(8);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [guests, setGuests] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { t } = useTranslation();

  const currentStep = !selectedTime ? 2 : !name || !email ? 3 : 4;

  return (
    <div className="w-full flex flex-col items-center pb-24">
      <header className="w-full max-w-container-max px-margin-mobile md:px-margin-desktop mb-stack-lg pt-stack-md">
        <h1 className="font-headline-h2 text-headline-h2 text-primary mb-stack-md text-center">
          {t("booking.heroTitle")}
        </h1>
        <div className="flex items-center justify-center max-w-2xl mx-auto flex-wrap gap-y-6">
          {steps.map((label, i) => {
            const n = i + 1;
            const active = n <= currentStep;
            return (
              <div key={label} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-button text-button mb-2 ${
                      active
                        ? "bg-primary text-on-primary"
                        : "border border-outline-variant text-on-surface-variant opacity-50"
                    }`}
                  >
                    {n}
                  </div>
                  <span
                    className={`font-small text-small ${
                      active ? "text-primary" : "text-on-surface-variant opacity-50"
                    }`}
                  >
                    {t(label)}
                  </span>
                </div>
                {n < steps.length && (
                  <div className="w-10 md:w-16 h-[1px] bg-outline-variant mx-2 md:mx-4 -mt-6" />
                )}
              </div>
            );
          })}
        </div>
      </header>

      <main className="w-full max-w-container-max px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="md:col-span-8 space-y-stack-lg">
          {/* Step 1: Date */}
          <section className="border border-outline-variant rounded p-gutter bg-surface-container-lowest">
            <h2 className="font-headline-h3 text-headline-h3 text-primary mb-stack-md border-b border-outline-variant pb-4">
              {t("booking.dateSection.title")}
            </h2>
            <div className="grid grid-cols-7 gap-2 text-center mb-4">
              {["booking.days.sun", "booking.days.mon", "booking.days.tue", "booking.days.wed", "booking.days.thu", "booking.days.fri", "booking.days.sat"].map((d) => (
                <div
                  key={d}
                  className="font-label-caps text-label-caps text-on-surface-variant"
                >
                  {t(d)}
                </div>
              ))}
              {[28, 29, 30, 31].map((d) => (
                <div key={d} className="py-3 text-on-surface-variant opacity-30">
                  {d}
                </div>
              ))}
              {days.map((d) => (
                <button
                  key={d}
                  onClick={() => setSelectedDay(d)}
                  className={`py-3 rounded transition-colors ${
                    d === selectedDay
                      ? "bg-primary-container text-on-primary-container font-medium shadow-sm"
                      : "hover:bg-surface-container"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </section>

          {/* Step 2: Time */}
          <section className="border border-outline-variant rounded p-gutter bg-surface-container-lowest">
            <h2 className="font-headline-h3 text-headline-h3 text-primary mb-stack-md border-b border-outline-variant pb-4">
              {t("booking.timeSection.title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {timeSlots.map((slot) => (
                <button
                  key={slot.label}
                  onClick={() => setSelectedTime(slot.label)}
                  className={`p-4 border rounded transition-all text-left ${
                    selectedTime === slot.label
                      ? "border-primary bg-surface-container-low"
                      : "border-outline-variant hover:border-primary-container hover:bg-surface-container-low"
                  }`}
                >
                  <div className="font-button text-button text-on-surface mb-1">
                    {t(slot.label)}
                  </div>
                  <div className="font-small text-small text-on-surface-variant">
                    {t(slot.time)}
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* Step 3: Details */}
          <section
            className={`border border-outline-variant rounded p-gutter bg-surface-container-lowest transition-opacity ${
              !selectedTime ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            <h2 className="font-headline-h3 text-headline-h3 text-primary mb-stack-md border-b border-outline-variant pb-4">
              {t("booking.detailsSection.title")}
            </h2>
            <form className="space-y-6">
              <div>
                <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2">
                  {t("booking.detailsSection.guestsLabel")}
                </label>
                <select
                  className="w-full border-b border-outline-variant bg-transparent py-2 focus:ring-0 focus:border-primary-container font-body-md text-body-md text-on-surface transition-colors"
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                >
                  {[1, 2, 3, 4].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2">
                  {t("booking.detailsSection.leadGuestLabel")}
                </label>
                <input
                  className="w-full border-b border-outline-variant bg-transparent py-2 focus:ring-0 focus:border-primary-container font-body-md text-body-md text-on-surface transition-colors"
                  placeholder="e.g. Jane Doe"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2">
                  {t("booking.detailsSection.emailLabel")}
                </label>
                <input
                  className="w-full border-b border-outline-variant bg-transparent py-2 focus:ring-0 focus:border-primary-container font-body-md text-body-md text-on-surface transition-colors"
                  placeholder="jane@example.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2">
                  {t("booking.detailsSection.dietaryRequirementsLabel")}
                </label>
                <textarea
                  className="w-full border-b border-outline-variant bg-transparent py-2 focus:ring-0 focus:border-primary-container font-body-md text-body-md text-on-surface transition-colors resize-none h-24"
                  placeholder={t("booking.detailsSection.dietaryRequirementsPlaceholder")}
                />
              </div>
            </form>
          </section>
        </div>

        {/* Summary */}
        <aside className="md:col-span-4 relative">
          <div className="sticky top-stack-lg border border-outline-variant bg-surface-container-low p-gutter rounded shadow-[0px_12px_32px_rgba(0,0,0,0.04)]">
            <h3 className="font-headline-h3 text-headline-h3 text-primary mb-6 border-b border-outline-variant pb-4">
              {t("booking.summary.title")}
            </h3>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center">
                <span className="font-small text-small text-on-surface-variant">
                  {t("booking.summary.tourLabel")}
                </span>
                <span className="font-button text-button text-on-surface text-right">
                  {t("booking.summary.tourValue")}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-small text-small text-on-surface-variant">
                  {t("booking.summary.dateLabel")}
                </span>
                <span className="font-button text-button text-on-surface text-right">
                  Oct {selectedDay}, 2024
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-small text-small text-on-surface-variant">
                  {t("booking.summary.timeLabel")}
                </span>
                <span
                  className={`font-button text-button text-right ${
                    selectedTime ? "text-on-surface" : "text-on-surface-variant italic"
                  }`}
                >
                  {selectedTime ?? "Pending"}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-small text-small text-on-surface-variant">
                  {t("booking.summary.guestsLabel")}
                </span>
                <span className="font-button text-button text-on-surface text-right">
                  {guests}
                </span>
              </div>
            </div>
            <div className="border-t border-outline-variant pt-4 mb-8">
              <div className="flex justify-between items-end">
                <span className="font-body-md text-body-md text-on-surface">
                  {t("booking.summary.totalLabel")}
                </span>
                <span className="font-headline-h2 text-headline-h2 text-primary">
                  {selectedTime ? `€${45 * guests}` : "€--"}
                </span>
              </div>
            </div>
            <button
              disabled={!selectedTime || !name || !email}
              className="w-full bg-ink text-on-ink py-4 rounded font-button text-button tracking-widest hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed uppercase"
            >
              {t("booking.summary.continueButton")}
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
}
