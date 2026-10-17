"use client";

import Link from "next/link";
import { useState } from "react";
import { FiCheck } from "react-icons/fi";

import { cn } from "@/lib/utils";
import {
  planTabs,
  pricingReasons,
  servicePlans,
  type PlanTab,
} from "@/data/pricing";

interface CustomPackage {
  title: string;
  heading: readonly [string, string];
  lead: string;
  requirements?: readonly string[];
  items?: readonly { title: string; description: string }[];
  listLabel?: string;
  meta?: readonly { label: string; value: string }[];
  note?: string;
  cta: string;
}

/**
 * Landscape panel for a bespoke package: pitch on the left, the selectable
 * building blocks on the right. Shared by every service that offers one.
 */
function CustomPackagePanel({ data }: { data: CustomPackage }) {
  return (
    <div className="mt-8 overflow-hidden rounded-[28px] border border-[#d8cbc1] bg-[#f8f4f0] shadow-[0_10px_26px_rgba(40,7,9,0.04)]">
      <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[1fr_1fr] lg:gap-12">
        <div className="self-center">
          <span className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#7a4c52]">
            {data.title}
          </span>

          <h3 className="mt-4 max-w-[460px] text-[clamp(1.7rem,3.2vw,2.9rem)] font-medium leading-[0.95] tracking-[-0.055em] text-[#4f1d1f]">
            {data.heading[0]}
            <span className="block font-editorial italic text-[#b73d4d]">
              {data.heading[1]}
            </span>
          </h3>

          <p className="mt-6 max-w-[520px] text-[15px] leading-8 text-[#665459]">
            {data.lead}
          </p>

          {data.meta && (
            <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
              {data.meta.map((row) => (
                <div key={row.label}>
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7a4c52]">
                    {row.label}
                  </dt>
                  <dd className="mt-1 text-[15px] text-[#4f1d1f]">{row.value}</dd>
                </div>
              ))}
            </dl>
          )}

          {data.note && (
            <p className="mt-6 max-w-[520px] text-[15px] leading-8 text-[#4f1d1f]">
              {data.note}
            </p>
          )}

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#6a4f52]/50 px-6 py-3 text-sm font-semibold text-[#5d1011] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[#f1e8e2]"
          >
            {data.cta}
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div>
          {data.listLabel && (
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#7a4c52]">
              {data.listLabel}
            </p>
          )}

          {data.items ? (
            <ul className="space-y-4 rounded-[24px] border border-[#d8cbc1] bg-[#fdfaf7] p-6 sm:p-7">
              {data.items.map((item) => (
                <li
                  key={item.title}
                  className="border-b border-[#eadfd6] pb-4 last:border-0 last:pb-0"
                >
                  <p className="text-[15px] font-semibold text-[#4f1d1f]">
                    {item.title}
                  </p>
                  <p className="mt-0.5 text-[14px] leading-6 text-[#7a6165]">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2">
              {data.requirements?.map((requirement) => (
                <span
                  key={requirement}
                  className="flex items-center gap-3 rounded-2xl border border-[#d8cbc1] bg-[#fdfaf7] px-4 py-3.5 text-[14px] leading-6 text-[#4f1d1f]"
                >
                  <span className="grid size-4 shrink-0 place-items-center rounded-full bg-[#5d1011] text-[10px] font-bold text-white">
                    <FiCheck />
                  </span>
                  {requirement}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function PricingPageContent() {
  const [activeTab, setActiveTab] = useState<PlanTab>("Social Media Management");
  const activePlanSet = servicePlans[activeTab];

  return (
    <main className="min-h-svh bg-[#f1ede8] text-[#4e1b1f]">
      <section className="relative isolate overflow-hidden bg-[#5b0d13] px-5 pb-20 pt-36 text-cream sm:px-8 sm:pt-44 lg:px-14">
        <div aria-hidden="true" className="about-hero__grid absolute inset-0 -z-10" />
        <div aria-hidden="true" className="about-hero__halo absolute left-1/2 top-[48%] -z-10 -translate-x-1/2 -translate-y-1/2" />

        <div className="mx-auto max-w-[1600px]">
          <div>
            <h1 className="about-page-reveal about-delay-2 mx-auto max-w-6xl pb-[0.08em] text-center text-[3.7rem] font-medium leading-[0.82] tracking-[-0.075em] text-cream sm:text-[5.5rem] lg:text-[8rem]">
              <span className="block sm:inline">Transparent</span>{" "}
              <span className="block sm:inline">plans for</span>{" "}
              <span className="block sm:inline">bigger</span>{" "}
              <span className="about-impact block font-editorial font-medium italic sm:inline">ambitions.</span>
            </h1>

            <p className="about-page-reveal about-delay-3 mx-auto mt-10 max-w-xl border-t border-cream/15 pt-7 text-center text-sm leading-7 text-cream/70 sm:text-base sm:leading-8">
              Simple, flexible and value-driven plans designed to help you grow , no hidden costs,
              just real results.
            </p>

            <div className="about-page-reveal about-delay-4 mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#f5efe8] px-7 py-3 text-sm font-semibold text-[#5d1011] shadow-[0_12px_25px_rgba(92,17,20,0.18)] transition-transform hover:-translate-y-0.5"
                >
                  Get a Custom Quote <span className="ml-2">→</span>
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-full border border-cream/35 bg-transparent px-7 py-3 text-sm font-semibold text-cream transition-colors hover:bg-white/5"
                >
                  Talk to Our Team
                </Link>
            </div>

            {/* Static pricing orbit temporarily disabled. */}
            {/* <div className="flex items-center justify-center pt-2">
              <div className="relative aspect-square w-[min(320px,78vw)] md:w-[440px]">
                <div className="absolute inset-[10%] rounded-full border border-[#d9cfc6]/50" />
                <div className="absolute inset-[22%] rounded-full border border-[#dfd5cd]/40" />
                <div className="absolute inset-[32%] rounded-full border border-[#d9cfc6]/45" />
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(214,74,85,0.08),_rgba(214,74,85,0)_60%)]" />

                <div className="pricing-hero__orbit-revolve">
                  {plannerLabels.map((label, index) => (
                    <span
                      key={label}
                      className={`pricing-hero__orbit-word absolute text-[10px] font-semibold uppercase tracking-[0.24em] text-cream/80 ${[
                        "top-2 left-1/2 -translate-x-1/2",
                        "top-1/2 right-0 -translate-y-1/2",
                        "bottom-3 left-1/2 -translate-x-1/2",
                        "top-1/2 left-0 -translate-y-1/2",
                        "top-[28%] right-[12%]",
                      ][index]}`}
                    >
                      {label}
                    </span>
                  ))}
                </div>

                <div className="absolute inset-[38%] rounded-full border border-[#d7c8c0]/80 bg-[#f4efe9]/10 shadow-[0_0_0_18px_rgba(223,201,192,0.2)]" />
                <div className="absolute inset-[43%] rounded-full border border-[#cebbb0]/80 bg-[#f1eae5]/5" />
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 pb-20 pt-8 sm:px-8 lg:px-14 lg:pt-10">
        <div className="mx-auto mt-14 max-w-[1180px] rounded-[26px] border border-[#d4c7be] bg-[#f7f3ef] px-2.5 py-5 shadow-[0_10px_35px_rgba(22,7,9,0.04)]">
          <div className="flex justify-center text-center">
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7b5f63]">
              Switch between services to explore our plans
            </span>
          </div>

          <div className="mx-auto mt-3 grid max-w-[1080px] grid-cols-4 gap-px overflow-hidden rounded-[20px] border border-[#d8cbc1] bg-[#d8cbc1] shadow-[0_14px_34px_rgba(22,7,9,0.07)]">
            {planTabs.map((tab) => {
              const isActive = tab === activeTab;

              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  aria-pressed={isActive}
                  className={cn(
                    "relative cursor-pointer px-1 py-3 text-[9px] font-semibold leading-tight tracking-[0.01em] transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[#b62935]/45 focus-visible:ring-inset sm:px-4 sm:py-4 sm:text-sm",
                    isActive
                      ? "bg-[linear-gradient(150deg,#6d1316,#4d0b0f)] text-[#f5ece6] shadow-[inset_0_1px_0_rgba(245,236,230,0.22)]"
                      : "bg-[#f7f2ed] text-[#5d1011] hover:bg-[#efe6dd]",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-x-0 bottom-0 h-[2px] transition-opacity duration-300",
                      isActive
                        ? "bg-[linear-gradient(90deg,rgba(214,74,85,0),#e0707a,rgba(214,74,85,0))] opacity-100"
                        : "opacity-0",
                    )}
                  />
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-20">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#7a4c52]">
                {activePlanSet.eyebrow}
              </span>
              <h2 className="mt-3 max-w-[700px] text-[clamp(2.25rem,5vw,5rem)] font-medium leading-[0.85] tracking-[-0.07em] text-[#4f1d1f]">
                {activePlanSet.title[0]}
                <span className="block font-editorial italic text-[#b73d4d]">{activePlanSet.title[1]}</span>
              </h2>
            </div>
            <p className="max-w-[420px] text-base leading-8 text-[#665459]">
              {activePlanSet.intro}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {activePlanSet.plans.map((plan) => (
              <article
                key={plan.label}
                className={cn(
                  "flex flex-col rounded-[28px] border p-5 sm:p-7 md:min-h-[600px]",
                  plan.featured
                    ? "border-[#5d1011] bg-[#5d1011] text-[#f2ece7] shadow-[0_16px_30px_rgba(28,3,4,0.18)]"
                    : "border-[#d8cbc1] bg-[#f8f4f0] text-[#4f1d1f] shadow-[0_10px_26px_rgba(40,7,9,0.04)]",
                )}
              >
                <div className="mb-6 flex items-center justify-between gap-2">
                  <span
                    className={[
                      "text-[10px] font-semibold uppercase tracking-[0.26em]",
                      plan.featured ? "text-[#e4c7cb]" : "text-[#7f4d52]",
                    ].join(" ")}
                  >
                    {plan.label}
                  </span>
                  {(plan.badge ?? (plan.featured ? "Most Popular" : undefined)) && (
                    <span className={cn(
                      "rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em]",
                      plan.featured
                        ? "border-[#f0dfe2]/40 bg-[#7c1b22] text-[#f4e6e8]"
                        : "border-[#d8cbc1] text-[#7a4c52]",
                    )}>
                      {plan.badge ?? "Most Popular"}
                    </span>
                  )}
                </div>

                {plan.highlight && (
                  <p className={cn(
                    "mt-5 inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em]",
                    plan.featured
                      ? "bg-[#7c1b22] text-[#f4e6e8]"
                      : "border border-[#b73d4d]/35 bg-[#f6e9ea] text-[#8d2a33]",
                  )}>
                    {plan.highlight}
                  </p>
                )}

                {plan.heading && (
                  <h3
                    className={cn(
                      "mt-5 text-[19px] font-medium leading-[1.15] tracking-[-0.03em] sm:text-[22px]",
                      plan.featured ? "text-[#f2ece7]" : "text-[#4f1d1f]",
                    )}
                  >
                    {plan.heading}
                  </h3>
                )}

                {plan.bestFor && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {plan.bestFor.map((item) => (
                      <li
                        key={item}
                        className={cn(
                          "rounded-full border px-3 py-1.5 text-[11px] leading-4",
                          plan.featured
                            ? "border-[#f0dfe2]/30 text-[#e9cbd1]"
                            : "border-[#d8cbc1] text-[#7a4c52]",
                        )}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {plan.description && (
                  <p className={cn(
                    "mt-5 max-w-xs text-[13px] leading-6 sm:text-sm",
                    plan.featured ? "text-[#f3dfe4]" : "text-[#6e585d]",
                  )}>{plan.description}</p>
                )}

                {plan.price ? (
                  <div className="mt-8">
                    {plan.priceNote && (
                      <p className={cn(
                        "text-[10px] font-semibold uppercase tracking-[0.24em]",
                        plan.featured ? "text-[#e4c7cb]" : "text-[#7f4d52]",
                      )}>
                        {plan.priceNote}
                      </p>
                    )}

                    <div className="mt-1 flex items-end gap-2">
                      <span className="text-[27px] font-medium tracking-[-0.06em] sm:text-[clamp(2.3rem,3vw,4rem)]">
                        {plan.price}
                      </span>
                      {plan.suffix && (
                        <span className={cn(
                          "pb-1.5 text-[12px] font-medium sm:pb-2 sm:text-[14px]",
                          plan.featured ? "text-[#e9c4ca]" : "text-[#6a4d51]",
                        )}>{plan.suffix}</span>
                      )}
                    </div>
                  </div>
                ) : (
                  <p className={cn(
                    "mt-8 text-[clamp(1.6rem,2.4vw,2.4rem)] font-medium tracking-[-0.05em]",
                    plan.featured ? "text-[#f2ece7]" : "text-[#4f1d1f]",
                  )}>
                    Let&apos;s talk
                  </p>
                )}

                {plan.meta && (
                  <dl className="mt-5 space-y-2.5 border-t pt-5 text-[12px] leading-5 sm:mt-6 sm:text-[13px]" style={{ borderColor: plan.featured ? "rgb(240 223 226 / 25%)" : "rgb(216 203 193 / 100%)" }}>
                    {plan.meta.map((row) => (
                      <div key={row.label} className="flex flex-wrap gap-x-3">
                        <dt className={cn(
                          "font-semibold uppercase tracking-[0.12em]",
                          plan.featured ? "text-[#e4c7cb]" : "text-[#7f4d52]",
                        )}>
                          {row.label}
                        </dt>
                        <dd className={plan.featured ? "text-[#f4ece9]" : "text-[#4f1d1f]"}>
                          {row.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                )}

                <ul className="mt-6 space-y-4 sm:mt-7">
                  {plan.featureGroups
                    ? plan.featureGroups.map((group) => (
                        <li key={group.heading}>
                          <h4 className={cn(
                            "mb-2 text-[13px] font-semibold sm:text-sm",
                            plan.featured ? "text-[#f4ece9]" : "text-[#4f1d1f]",
                          )}>
                            {group.heading}
                          </h4>
                          <ul className="space-y-2 sm:space-y-2.5">
                            {group.features.map((feature) => (
                              <li key={feature} className="flex items-start gap-2.5 text-[13.5px] leading-6 sm:gap-3 sm:text-[15px]">
                                <span className={[
                                  "mt-1 grid size-3.5 shrink-0 place-items-center rounded-full text-[9px] font-bold sm:size-4 sm:text-[10px]",
                                  plan.featured ? "bg-[#f4eef0] text-[#5d1011]" : "bg-[#5d1011] text-white",
                                ].join(" ")}>
                                  <FiCheck />
                                </span>
                                <span className={plan.featured ? "text-[#f4ece9]" : "text-[#4f1d1f]"}>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))
                    : plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-[13.5px] leading-6 sm:gap-3 sm:text-[15px]">
                          <span className={[
                            "mt-1 grid size-3.5 shrink-0 place-items-center rounded-full text-[9px] font-bold sm:size-4 sm:text-[10px]",
                            plan.featured ? "bg-[#f4eef0] text-[#5d1011]" : "bg-[#5d1011] text-white",
                          ].join(" ")}>
                            <FiCheck />
                          </span>
                          <span className={plan.featured ? "text-[#f4ece9]" : "text-[#4f1d1f]"}>{feature}</span>
                        </li>
                      ))}
                </ul>

                <div className="mt-auto pt-7 sm:pt-8">
                  <Link
                    href="/contact#contact-form"
                    className={[
                      "block w-full cursor-pointer rounded-full border px-5 py-3 text-center text-[13px] font-semibold transition-transform hover:-translate-y-0.5 sm:text-sm",
                      plan.featured
                        ? "border-[#f2e1e5] bg-[#f3efe9] text-[#5d1011]"
                        : "border-[#6a4f52]/50 bg-transparent text-[#5d1011] hover:bg-[#f1e8e2]",
                    ].join(" ")}
                  >
                    Get Started <span className="ml-2">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {activePlanSet.custom && (
            <CustomPackagePanel data={activePlanSet.custom} />
          )}

          {activePlanSet.note && (
            <p className="mt-8 max-w-[860px] text-[15px] leading-8 text-[#6f5257]">
              {activePlanSet.note}
            </p>
          )}
        </div>

        <div className="mt-20">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#7d4f52]">
            Why work with us
          </span>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {pricingReasons.map((reason) => {
                const Icon = reason.icon;

                return (
                  <div
                    key={reason.title}
                    className="rounded-[24px] border border-[#e9d9cd]/80 bg-[linear-gradient(135deg,rgba(252,248,244,0.82),rgba(243,231,222,0.62))] p-6 text-[#4f1d1f] shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_22px_50px_rgba(93,16,17,0.12)] backdrop-blur-2xl"
                  >
                    <div className="mb-4 grid size-12 place-items-center rounded-full border border-[#e3c9cd]/80 bg-[linear-gradient(145deg,rgba(246,233,235,0.95),rgba(235,214,218,0.7))] text-[#8d2a33] shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-2xl font-medium tracking-[-0.05em]">{reason.title}</h3>
                    <p className="mt-3 text-[15px] leading-7 text-[#66545a]">{reason.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

        {/* <div className="relative mt-20 isolate overflow-hidden rounded-[28px] sm:rounded-[32px]">
          <div className="relative overflow-hidden rounded-[28px] border border-[#e9d9cd]/80 bg-[linear-gradient(135deg,rgba(252,248,244,0.8),rgba(243,231,222,0.62))] px-6 py-9 text-[#4f1d1f] shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_26px_60px_rgba(93,16,17,0.16)] backdrop-blur-2xl sm:rounded-[32px] sm:px-10 lg:px-14 lg:py-12">
            <div aria-hidden="true" className="absolute inset-0">
              <div className="absolute -left-[14%] -top-[42%] size-[260px] rounded-full bg-[radial-gradient(circle,rgba(182,41,53,0.3),rgba(182,41,53,0)_68%)] sm:size-[420px]" />
              <div className="absolute -bottom-[48%] -right-[10%] size-[240px] rounded-full bg-[radial-gradient(circle,rgba(214,74,85,0.28),rgba(214,74,85,0)_70%)] sm:size-[380px]" />
              <div className="absolute left-1/2 top-1/2 size-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(93,16,17,0.1),rgba(93,16,17,0)_72%)] sm:size-[320px]" />
            </div>
            <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#a2646a]">
                  Ready to grow?
                </span>
                <h2 className="mt-4 max-w-[620px] text-[clamp(2rem,6.4vw,6rem)] font-medium leading-[0.86] tracking-[-0.07em] text-[#4f1d1f]">
                  Let&apos;s create something
                  <span className="about-impact block font-editorial italic">extraordinary together.</span>
                </h2>
              </div>

              <div className="flex flex-col items-start gap-5 lg:items-end">
                <p className="max-w-[380px] text-base leading-7 text-[#5c4148] sm:text-lg sm:leading-8">
                  Have a unique requirement? Get a custom plan tailored to your business goals.
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#5d1011] px-7 py-3 text-sm font-semibold text-[#f5efe8] shadow-[0_12px_28px_rgba(93,16,17,0.22)] transition-transform hover:-translate-y-0.5"
                >
                  Get a Custom Quote <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </main>
  );
}
