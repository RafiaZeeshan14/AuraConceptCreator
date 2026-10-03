import { HiArrowRight } from "react-icons/hi2";
import { SiteFooter } from "@/components/site-footer";
import { ContactForm } from "./contact-form";
import {
  contactChannels,
  mapDirectionsUrl,
  mapEmbedUrl,
  mapQuery,
} from "@/data/contact-page";

export function ContactPageContent() {
  return (
    <>
      {/* ─────────────────────────────────────────────
          HERO
      ───────────────────────────────────────────── */}

      <section className="relative isolate flex min-h-[70svh] items-end overflow-hidden bg-wine px-5 pb-16 pt-36 text-cream sm:px-8 sm:pb-20 sm:pt-44 lg:px-14">
        <div
          aria-hidden="true"
          className="about-hero__grid absolute inset-0 -z-10"
        />
        <div
          aria-hidden="true"
          className="about-hero__halo absolute left-1/2 top-[48%] -z-10 -translate-x-1/2 -translate-y-1/2"
        />

        <div className="mx-auto flex w-full max-w-[1440px] flex-col justify-between">
          <div className="about-page-reveal about-delay-1 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.24em] text-cream/55 sm:text-[10px]">
            <span className="size-1.5 rounded-full bg-accent shadow-[0_0_14px_rgba(214,74,85,0.9)]" />
            Contact Aura Concept Creator
          </div>

          <div className="my-16 max-w-5xl">
            <h1 className="about-page-reveal about-delay-2 text-[clamp(3rem,8.6vw,8rem)] font-medium leading-[0.84] tracking-[-0.075em]">
              Building brands
              <span className="about-impact block font-editorial font-medium italic">
                people remember.
              </span>
            </h1>

            <p className="about-page-reveal about-delay-3 mt-8 max-w-xl text-sm leading-7 text-cream/62 sm:text-base sm:leading-8">
              Bring us the rough idea, the ambitious question or the next big
              move. We&apos;ll bring the clarity and craft to make it real.
            </p>
          </div>

          <div className="about-page-reveal about-delay-4 flex flex-wrap items-center justify-between gap-6 border-t border-cream/15 pt-7 text-[9px] uppercase tracking-[0.2em] text-cream/40">
            <span>Get in touch — 01</span>

            <a
              href="#contact-form"
              className="group inline-flex items-center gap-3 text-cream/70 transition-colors duration-300 hover:text-cream"
            >
              Jump to form
              <HiArrowRight className="size-3.5 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          CONTACT — info + form
      ───────────────────────────────────────────── */}

      <section className="relative overflow-hidden bg-cream px-5 py-20 text-wine sm:px-8 sm:py-28 lg:px-14 lg:py-32">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14 xl:gap-20">
            {/* Left column */}
            <div>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-wine/20 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-wine/70">
                <span className="size-1.5 rotate-45 bg-accent" />
                Contact Us
              </span>

              <h1 className="mt-7 text-[clamp(2.6rem,6.4vw,5.4rem)] font-medium leading-[0.9] tracking-[-0.065em]">
                Ready to Elevate
                <span className="block font-editorial italic text-accent">
                  Your Brand?
                </span>
              </h1>

              <p className="mt-6 max-w-lg text-sm leading-7 text-wine/58 sm:text-base sm:leading-8">
                Have a project in mind? We&apos;d love to hear about it. Connect
                with our team to discuss your goals and explore how we can help
                your brand grow.
              </p>

              <div className="mt-10 grid gap-3.5">
                {contactChannels.map((channel) => {
                  const Icon = channel.icon;

                  return (
                    <div
                      key={channel.label}
                      className="group flex gap-4 rounded-[1.25rem] border border-wine/12 bg-white/55 p-4 transition-colors duration-500 hover:border-wine/25 hover:bg-white/85 sm:gap-5 sm:p-5"
                    >
                      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent transition-colors duration-500 group-hover:bg-accent/15">
                        <Icon className="size-5" />
                      </span>

                      <div className="min-w-0">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-wine/45">
                          {channel.label}
                        </p>

                        <p className="mt-1.5 text-[15px] font-medium leading-6 tracking-[-0.015em]">
                          {channel.href ? (
                            <a
                              href={channel.href}
                              className="transition-colors duration-300 hover:text-accent"
                            >
                              {channel.value}
                            </a>
                          ) : channel.tel ? (
                            <a
                              href={`tel:${channel.tel}`}
                              className="transition-colors duration-300 hover:text-accent"
                            >
                              {channel.value}
                            </a>
                          ) : (
                            channel.value
                          )}
                        </p>

                        <p className="mt-1 text-[11px] leading-5 text-wine/45">
                          {channel.note}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <p className="mt-8 font-editorial text-[clamp(1.4rem,2.4vw,2rem)] italic leading-tight text-accent">
                Let&apos;s build something great.
              </p>
            </div>

            {/* Right column */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          MAP
      ───────────────────────────────────────────── */}

      <section className="relative overflow-hidden bg-cream px-5 py-15 text-wine sm:px-8 sm:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-14 bg-accent sm:w-20" />
                <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-wine/45 sm:text-[10px]">
                  Find us — 02
                </p>
              </div>

              <h2 className="mt-8 text-[clamp(2rem,4.4vw,3.8rem)] font-medium leading-[0.94] tracking-[-0.06em]">
                Visit the{" "}
                <span className="font-editorial italic text-accent">
                  office.
                </span>
              </h2>
            </div>

            <a
              href={mapDirectionsUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-full border border-wine/20 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-wine/65 transition-colors duration-300 hover:border-accent hover:text-wine"
            >
              Get directions
              <HiArrowRight className="size-4 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
            </a>
          </div>

          <div className="mt-10 overflow-hidden rounded-[1.75rem] border border-wine/12 bg-white/60 shadow-[0_28px_70px_rgba(93,16,17,0.08)]">
            <iframe
              title={`Aura Concept Creator location — ${mapQuery}`}
              src={mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[320px] w-full border-0 grayscale-[0.3] contrast-[1.05] sm:h-[420px] lg:h-[480px]"
            />

            <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-7">
              <p className="text-[10px] uppercase tracking-[0.16em] text-wine/50">
                {mapQuery}
              </p>

              <p className="text-[10px] uppercase tracking-[0.16em] text-wine/35">
                Mon – Fri · 09:00 – 18:00
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
