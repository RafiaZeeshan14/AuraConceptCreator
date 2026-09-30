"use client";

import { useState, type FormEvent } from "react";
import {
  HiArrowRight,
  HiCheck,
  HiOutlineExclamationTriangle,
  HiOutlineInformationCircle,
} from "react-icons/hi2";
import { cn } from "@/lib/utils";
import {
  contactDetails,
  formServices,
  messageMaxLength,
} from "@/data/contact-page";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

const field =
  "w-full rounded-xl border border-wine/12 bg-white/70 px-4 py-3.5 text-sm text-wine outline-none transition-colors duration-300 placeholder:text-wine/32 focus:border-accent/70 focus:bg-white";

const label = "text-[9px] font-semibold uppercase tracking-[0.18em] text-wine/50";

interface Errors {
  name?: string;
  email?: string;
  phone?: string;
  services?: string;
  message?: string;
}

type Status = "idle" | "sending" | "sent" | "error";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+\d][\d\s()-]{6,}$/;

export function ContactForm() {
  const [selected, setSelected] = useState<string[]>([]);
  const [errors, setErrors] = useState<Errors>({});
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [failureNote, setFailureNote] = useState("");

  const toggleService = (label: string) => {
    setSelected((current) =>
      current.includes(label)
        ? current.filter((item) => item !== label)
        : [...current, label],
    );

    setErrors((current) => ({ ...current, services: undefined }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (status === "sending") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const details = String(data.get("message") ?? "").trim();

    const nextErrors: Errors = {};

    if (!name) nextErrors.name = "Please tell us your name.";
    if (!email) nextErrors.email = "An email address is required.";
    else if (!emailPattern.test(email))
      nextErrors.email = "That email address doesn't look right.";
    if (!phone) nextErrors.phone = "A phone number helps us reply faster.";
    else if (!phonePattern.test(phone))
      nextErrors.phone = "Use digits, spaces, + or ( ) only.";
    if (selected.length === 0)
      nextErrors.services = "Select at least one service.";
    if (details.length < 12)
      nextErrors.message = "A few more details would help us respond well.";

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("sending");
    setFailureNote("");

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `New enquiry from ${name}`,
          from_name: name,
          replyto: email,
          name,
          company,
          email,
          phone,
          services: selected.join(", "),
          message: details,
          botcheck: String(data.get("botcheck") ?? ""),
        }),
      });

      const result = (await response.json().catch(() => null)) as {
        success?: boolean;
        message?: string;
      } | null;

      if (!response.ok || !result?.success) {
        setFailureNote(
          result?.message ||
            "We couldn't send your message. Please try again in a moment.",
        );
        setStatus("error");
        return;
      }

      // Confirmed by the API — clear the form for the next enquiry.
      form.reset();
      setSelected([]);
      setMessage("");
      setErrors({});
      setStatus("sent");
    } catch {
      setFailureNote(
        "We couldn't reach the server. Check your connection and try again — your details are still here.",
      );
      setStatus("error");
    }
  };

  return (
    <div
      id="contact-form"
      className="scroll-mt-28 rounded-[1.75rem] border border-wine/12 bg-white/70 p-5 shadow-[0_28px_70px_rgba(93,16,17,0.08)] sm:p-8 lg:p-10"
    >
      <div className="flex items-center gap-4">
        <span className="h-px w-10 bg-accent" />
        <h2 className="text-[clamp(1.5rem,2.6vw,2.1rem)] font-medium tracking-[-0.04em] text-wine">
          Send Us a Message
        </h2>
      </div>

      {status === "sent" && (
        <div
          role="status"
          className="mt-6 flex gap-3 rounded-xl border border-accent/25 bg-accent/[0.07] p-4"
        >
          <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-accent text-cream">
            <HiCheck className="size-3.5" />
          </span>

          <div>
            <p className="text-[13px] font-medium leading-6 text-wine">
              Message sent. Thank you.
            </p>
            <p className="mt-1 text-[12px] leading-6 text-wine/60">
              Your enquiry is on its way to us — we reply within one business
              day. Need it sooner? Call{" "}
              <a
                href={`tel:${contactDetails.phoneLink}`}
                className="font-medium text-accent underline underline-offset-2"
              >
                {contactDetails.phone}
              </a>
              .
            </p>
          </div>
        </div>
      )}

      {status === "error" && (
        <div
          role="alert"
          className="mt-6 flex gap-3 rounded-xl border border-wine/15 bg-wine/[0.05] p-4"
        >
          <HiOutlineExclamationTriangle className="mt-0.5 size-5 shrink-0 text-accent" />

          <div>
            <p className="text-[13px] font-medium leading-6 text-wine">
              Message not sent.
            </p>
            <p className="mt-1 text-[12px] leading-6 text-wine/60">
              {failureNote} You can also reach us at{" "}
              <a
                href={`mailto:${contactDetails.email}`}
                className="font-medium text-accent underline underline-offset-2"
              >
                {contactDetails.email}
              </a>
              .
            </p>
          </div>
        </div>
      )}

      {!ACCESS_KEY && status === "idle" && (
        <div
          role="status"
          className="mt-6 flex gap-3 rounded-xl border border-wine/12 bg-cream/70 p-4"
        >
          <HiOutlineInformationCircle className="mt-0.5 size-5 shrink-0 text-accent" />

          <div>
            <p className="text-[13px] font-medium leading-6 text-wine">
              This form isn&apos;t connected to an inbox yet.
            </p>
            <p className="mt-1 text-[12px] leading-6 text-wine/60">
              Add <code className="text-wine/80">NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY</code>{" "}
              to <code className="text-wine/80">.env.local</code> to enable
              submissions. Until then please reach us directly on{" "}
              <a
                href={`mailto:${contactDetails.email}`}
                className="font-medium text-accent underline underline-offset-2"
              >
                {contactDetails.email}
              </a>
              .
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="mt-8">
        {/* Honeypot — Web3Forms drops submissions that fill this in. */}
        <input
          type="text"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="sr-only"
        />

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={label}>
              Your Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Full Name"
              aria-invalid={Boolean(errors.name)}
              className={cn(field, "mt-2.5", errors.name && "border-accent/80")}
            />
            {errors.name && (
              <p role="alert" className="mt-2 text-[11px] text-accent">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="company" className={label}>
              Company Name
            </label>
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              placeholder="Your Business"
              className={cn(field, "mt-2.5")}
            />
          </div>

          <div>
            <label htmlFor="email" className={label}>
              Email Address *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="name@company.com"
              aria-invalid={Boolean(errors.email)}
              className={cn(field, "mt-2.5", errors.email && "border-accent/80")}
            />
            {errors.email && (
              <p role="alert" className="mt-2 text-[11px] text-accent">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className={label}>
              Phone Number *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="+92 300 1234567"
              aria-invalid={Boolean(errors.phone)}
              className={cn(field, "mt-2.5", errors.phone && "border-accent/80")}
            />
            {errors.phone && (
              <p role="alert" className="mt-2 text-[11px] text-accent">
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        <fieldset className="mt-7">
          <legend className={label}>Select Services *</legend>

          <div className="mt-3.5 flex flex-wrap gap-2.5">
            {formServices.map((service) => {
              const Icon = service.icon;
              const active = selected.includes(service.label);

              return (
                <button
                  key={service.label}
                  type="button"
                  onClick={() => toggleService(service.label)}
                  aria-pressed={active}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-[11px] font-medium transition-colors duration-300",
                    active
                      ? "border-accent bg-accent text-cream"
                      : "border-wine/12 bg-white/60 text-wine/70 hover:border-accent/45 hover:text-wine",
                  )}
                >
                  <Icon className="size-3.5 shrink-0" />
                  {service.label}
                </button>
              );
            })}
          </div>

          {errors.services && (
            <p role="alert" className="mt-3 text-[11px] text-accent">
              {errors.services}
            </p>
          )}
        </fieldset>

        <div className="mt-7">
          <label htmlFor="message" className={label}>
            Tell Us More
          </label>

          <textarea
            id="message"
            name="message"
            rows={5}
            maxLength={messageMaxLength}
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);

              if (errors.message) {
                setErrors((current) => ({ ...current, message: undefined }));
              }
            }}
            placeholder="Briefly describe your project, goals, ideas or specific requirements..."
            aria-invalid={Boolean(errors.message)}
            className={cn(
              field,
              "mt-2.5 resize-none leading-7",
              errors.message && "border-accent/80",
            )}
          />

          <div className="mt-2 flex items-start justify-between gap-4">
            {errors.message ? (
              <p role="alert" className="text-[11px] text-accent">
                {errors.message}
              </p>
            ) : (
              <span />
            )}

            <p className="shrink-0 text-[11px] tabular-nums text-wine/35">
              {message.length}/{messageMaxLength}
            </p>
          </div>
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          aria-busy={status === "sending"}
          className="group mt-7 flex w-full items-center justify-center gap-3 rounded-xl bg-accent px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-cream transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(182,41,53,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:cursor-wait disabled:opacity-80 disabled:hover:translate-y-0 disabled:hover:shadow-none"
        >
          {status === "sending" ? (
            <>
              <span
                aria-hidden="true"
                className="size-3.5 animate-spin rounded-full border-2 border-cream/40 border-t-cream"
              />
              Sending
            </>
          ) : (
            <>
              Send Message
              <HiArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
