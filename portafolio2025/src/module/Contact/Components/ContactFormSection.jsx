import { useState } from "react";
import { useInView } from "@/shared/motion/useInView";

const FORMSPREE_URL = "https://formspree.io/f/xldvqdor";

export default function ContactFormSection({ t }) {
  const [ref, inView] = useInView({ threshold: 0.25, replay: true });

  const [status, setStatus] = useState("idle"); 
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.target;
    const data = new FormData(form);

    data.append("from_page", "Portafolio Contact Page");

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(t.statusErrorGeneric);
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg(t.statusNetworkError);
    }
  };

  return (
    <section id="contact-form" className="section-shell-narrow">
      <div
        ref={ref}
        className={`reveal ${inView ? "inview" : ""} card-glass-main`}
        style={{ "--reveal-delay": "80ms", "--reveal-dur": "700ms" }}
      >
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1.1fr)] p-8 md:p-10">

          <div className="space-y-4">
            <p className="eyebrow">{t.formTag}</p>
            <h2 className="section-title">{t.formTitle}</h2>
            <p className="section-subtitle">{t.formSubtitle}</p>

            <div className="space-y-1 text-sm text-white/75">
              <p>
                <span className="font-semibold">
                  {t.infoEmailLabel}:&nbsp;
                </span>
                <a
                  href="mailto:isaacjiemmenez@gmail.com"
                  className="underline decoration-dotted"
                >
                  isaacijiemmenez@gmail.com
                </a>
              </p>
              <p>
                <span className="font-semibold">
                  {t.infoPhoneLabel}:&nbsp;
                </span>
                <a
                  href="https://wa.me/50663270092?"
                  className="underline decoration-dotted"
                >
                  +506 6327-0092
                </a>
              </p>
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="form-control">
                <span className="label-text text-xs md:text-sm text-white/70">
                  {t.formNameLabel}
                </span>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder={t.formNamePlaceholder}
                  className="input input-bordered bg-base-100/70 border-white/10
                             focus:border-accent focus:outline-none"
                />
              </label>

              <label className="form-control">
                <span className="label-text text-xs md:text-sm text-white/70">
                  {t.formEmailLabel}
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={t.formEmailPlaceholder}
                  className="input input-bordered bg-base-100/70 border-white/10
                             focus:border-accent focus:outline-none"
                />
              </label>
            </div>

            <label className="form-control">
              <span className="label-text text-xs md:text-sm text-white/70">
                {t.formMessageLabel}
              </span>
              <textarea
                name="message"
                required
                className="textarea textarea-bordered min-h-[160px]
                           bg-base-100/70 border-white/10
                           focus:border-accent focus:outline-none"
                placeholder={t.formMessagePlaceholder}
              />
            </label>

            <label className="flex items-start gap-3 text-xs md:text-sm text-white/70">
              <input
                type="checkbox"
                name="privacy"
                required
                className="checkbox checkbox-xs mt-1"
              />
              <span>{t.formCheckboxText}</span>
            </label>

         
            {status === "success" && (
              <p className="text-xs md:text-sm text-emerald-400">
                {t.statusSuccess}
              </p>
            )}

            {status === "error" && (
              <p className="text-xs md:text-sm text-red-400">
                {errorMsg || t.statusErrorGeneric}
              </p>
            )}

            <button
              type="submit"
              className="btn-cta-main"
              disabled={status === "sending"}
            >
              {status === "sending" ? t.statusSending : t.formSubmit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
