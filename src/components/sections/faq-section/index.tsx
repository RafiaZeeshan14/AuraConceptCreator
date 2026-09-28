"use client";

import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";
import { faqs } from "@/data/faq";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="faq-section relative overflow-hidden bg-cream text-wine">
      <div className="faq-section__orbit" aria-hidden="true" />
      <div className="mx-auto w-full max-w-[1600px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
        <div className="faq-section__header pt-5">
          <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-wine/45 sm:text-[10px]">07 — Frequently asked</p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-end">
            <h2 className="max-w-3xl text-[clamp(3.7rem,7.4vw,7.4rem)] font-medium leading-[0.82] tracking-[-0.075em]">
              Questions worth
              <span className="about-impact block font-editorial italic">asking.</span>
            </h2>
            <p className="max-w-sm text-sm leading-7 text-wine/62 sm:text-base sm:leading-8 lg:justify-self-end">
              A little clarity before we start building something meaningful together.
            </p>
          </div>
        </div>

        <div className="faq-section__list mt-14 sm:mt-16">
          {faqs.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;

            return (
              <article key={question} className={`faq-section__item ${isOpen ? "is-open" : ""}`}>
                <button type="button" className="faq-section__question" aria-expanded={isOpen} onClick={() => setOpenIndex(isOpen ? -1 : index)}>
                  <span className="faq-section__number">0{index + 1}</span>
                  <span>{question}</span>
                  <span className="faq-section__toggle"><HiChevronDown /></span>
                </button>
                <div className="faq-section__answer">
                  <p>{answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
