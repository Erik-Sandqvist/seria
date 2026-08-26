import type { ComponentType } from "react";
import type { Dictionary } from "@/content";
import type { Locale, PageKey } from "@/lib/routes";
import { About } from "@/sections/About";
import { ContactPanel } from "@/sections/ContactPanel";
import { CtaBand } from "@/sections/CtaBand";
import { Faq } from "@/sections/Faq";
import { Hero } from "@/sections/Hero";
import { Legal } from "@/sections/Legal";
import { Manifesto } from "@/sections/Manifesto";
import { Pricing } from "@/sections/Pricing";
import { ProcessSteps } from "@/sections/ProcessSteps";
import { Services } from "@/sections/Services";
import { Work } from "@/sections/Work";

export type ViewProps = { locale: Locale; dict: Dictionary };

function HomeView({ locale, dict }: ViewProps) {
  return (
    <>
      <Hero locale={locale} dict={dict} />
      <Manifesto dict={dict} />
      <Services locale={locale} dict={dict} limit={3} showCta />
      <ProcessSteps dict={dict} tone="bone" />
      <Pricing locale={locale} dict={dict} showAddons={false} />
      <Work locale={locale} dict={dict} />
      <Faq dict={dict} />
      <CtaBand locale={locale} dict={dict} />
    </>
  );
}

function ServicesView({ locale, dict }: ViewProps) {
  return (
    <>
      <Services locale={locale} dict={dict} headingAs="h1" />
      <ProcessSteps dict={dict} tone="bone" />
      <CtaBand locale={locale} dict={dict} />
    </>
  );
}

function PricingView({ locale, dict }: ViewProps) {
  return (
    <>
      <Pricing locale={locale} dict={dict} headingAs="h1" />
      <Faq dict={dict} />
      <CtaBand locale={locale} dict={dict} />
    </>
  );
}

function ProcessView({ locale, dict }: ViewProps) {
  return (
    <>
      <ProcessSteps dict={dict} tone="ink" headingAs="h1" />
      <Manifesto dict={dict} />
      <Faq dict={dict} />
      <CtaBand locale={locale} dict={dict} />
    </>
  );
}

function WorkView({ locale, dict }: ViewProps) {
  return (
    <>
      <Work locale={locale} dict={dict} headingAs="h1" />
      <Services locale={locale} dict={dict} limit={3} showCta />
      <CtaBand locale={locale} dict={dict} />
    </>
  );
}

function AboutView({ locale, dict }: ViewProps) {
  return (
    <>
      <About locale={locale} dict={dict} headingAs="h1" />
      <ProcessSteps dict={dict} tone="bone" />
      <CtaBand locale={locale} dict={dict} />
    </>
  );
}

function ContactView({ locale, dict }: ViewProps) {
  return (
    <>
      <ContactPanel locale={locale} dict={dict} />
      <Faq dict={dict} />
    </>
  );
}

function PrivacyView({ dict }: ViewProps) {
  return <Legal dict={dict} doc={dict.legal.privacy} />;
}

function TermsView({ dict }: ViewProps) {
  return <Legal dict={dict} doc={dict.legal.terms} />;
}

export const views: Record<PageKey, ComponentType<ViewProps>> = {
  home: HomeView,
  services: ServicesView,
  pricing: PricingView,
  process: ProcessView,
  work: WorkView,
  about: AboutView,
  contact: ContactView,
  privacy: PrivacyView,
  terms: TermsView,
};
