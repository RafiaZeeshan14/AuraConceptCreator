"use client";

import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";

const faqs = [
  {
    question: "Do you offer custom packages?",
    answer: "Yes. Every business has different goals and requirements. We offer flexible and customized packages based on your needs, whether it is branding, social media management, website development, content production, or a complete marketing solution.",
  },
  {
    question: "What services does Aura Concept Creator provide?",
    answer: "We offer complete creative solutions including branding, graphic design, social media management, content production, website development, digital marketing, photography, videography, and corporate event coverage.",
  },
  {
    question: "Do you work with startups as well as established businesses?",
    answer: "Yes. Whether you are launching a new business or looking to refresh an existing brand, we create customized strategies that align with your goals and budget.",
  },
  {
    question: "Do you offer complete social media management?",
    answer: "Absolutely. We handle everything from content strategy and design to scheduling, publishing, community management, and performance reporting.",
  },
  {
    question: "Can you create a brand identity from scratch?",
    answer: "Yes. We can develop your complete brand identity, including logo design, color palette, typography, brand guidelines, and visual direction.",
  },
  {
    question: "Do you build websites?",
    answer: "Yes. We design and develop modern, responsive business websites, landing pages, and e-commerce stores tailored to your brand.",
  },
  {
    question: "How does your project process work?",
    answer: "Our process begins with a discovery meeting to understand your business and goals. From there, we develop your brand strategy, create content, review it with you, and publish it according to a planned content calendar.",
  },
  {
    question: "Do you work with clients outside Pakistan?",
    answer: "Yes. We work with businesses locally and internationally through online collaboration.",
  },
  {
    question: "Do you run paid advertising campaigns?",
    answer: "Yes. We manage Meta (Facebook and Instagram) advertising campaigns focused on increasing brand awareness, engagement, leads, and sales.",
  },
  {
    question: "How do I get started?",
    answer: "Simply contact us through our website, WhatsApp, email, or social media. We will schedule a consultation to understand your requirements and recommend the best solution for your business.",
  },
];

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
