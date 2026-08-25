"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { ArrowRight, Check } from "@/components/ui/Primitives";
import type { Dictionary } from "@/content";
import { submitContact, type ContactState } from "@/lib/contact-action";
import type { Locale } from "@/lib/routes";

const fieldClass =
  "w-full rounded-xl border border-ink-800 bg-ink-950 px-4 py-3 text-bone-50 placeholder:text-ink-600 transition-colors focus:border-signal-500 focus:outline-none";

const labelClass =
  "font-mono text-xs uppercase tracking-[0.16em] text-ink-400";

type FormCopy = Dictionary["contact"]["form"];

function SubmitButton({ t }: { t: FormCopy }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-signal-500 px-6 py-3 text-sm font-medium text-ink-950 transition-colors hover:bg-signal-400 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? t.submitting : t.submit}
      {pending ? null : <ArrowRight />}
    </button>
  );
}

export function ContactForm({
  locale,
  t,
}: {
  locale: Locale;
  t: FormCopy;
}) {
  const [state, formAction] = useActionState<ContactState, FormData>(
    submitContact,
    { status: "idle" },
  );

  if (state.status === "success") {
    return (
      <div className="rounded-2xl border border-ink-800 bg-ink-900 p-10">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-signal-500 text-ink-950">
          <Check />
        </span>
        <h3 className="mt-6 font-display text-3xl text-bone-50">
          {t.successTitle}
        </h3>
        <p className="mt-3 leading-relaxed text-ink-300">{t.successBody}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-6">
      <input type="hidden" name="locale" value={locale} />
      {/* Honungsfälla — dold för människor, lockande för botar. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="name">
            {t.name}
          </label>
          <input
            id="name"
            name="name"
            required
            maxLength={200}
            autoComplete="name"
            placeholder={t.namePlaceholder}
            className={fieldClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="email">
            {t.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            placeholder={t.emailPlaceholder}
            className={fieldClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="company">
            {t.company}
          </label>
          <input
            id="company"
            name="company"
            maxLength={200}
            autoComplete="organization"
            placeholder={t.companyPlaceholder}
            className={fieldClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="phone">
            {t.phone}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            maxLength={40}
            autoComplete="tel"
            placeholder={t.phonePlaceholder}
            className={fieldClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="projectType">
            {t.projectType}
          </label>
          <select
            id="projectType"
            name="projectType"
            defaultValue=""
            className={fieldClass}
          >
            <option value="" disabled>
              {t.selectPlaceholder}
            </option>
            {t.projectTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="budget">
            {t.budget}
          </label>
          <select id="budget" name="budget" defaultValue="" className={fieldClass}>
            <option value="" disabled>
              {t.selectPlaceholder}
            </option>
            {t.budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className={labelClass} htmlFor="message">
          {t.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          maxLength={5000}
          placeholder={t.messagePlaceholder}
          className={`${fieldClass} resize-y`}
        />
      </div>

      {state.status === "error" ? (
        <p
          role="alert"
          className="rounded-xl border border-signal-600 bg-signal-600/10 px-4 py-3 text-sm text-signal-400"
        >
          <strong className="font-medium">{t.errorTitle}</strong> {state.message}
        </p>
      ) : null}

      <div className="flex flex-wrap items-center gap-4">
        <SubmitButton t={t} />
        <p className="text-xs text-ink-400">{t.privacy}</p>
      </div>
    </form>
  );
}
