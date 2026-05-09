import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { services, industries } from "@/lib/services";
import { ArrowRight, CheckCircle2, Phone, ShieldCheck, Leaf, Award, Clock } from "lucide-react";
import hero from "@/assets/hero-pressure.jpg";
import heritage from "@/assets/heritage.jpg";
import ewp from "@/assets/ewp.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JJ Advanced Pressure Cleaning | Sydney Pressure Cleaning Specialists" },
      {
        name: "description",
        content:
          "Sydney's pressure cleaning specialists since 1998. Commercial, industrial, heritage & residential pressure cleaning. EPA & WorkSafe compliant. Call 1300 853 253.",
      },
      { property: "og:title", content: "JJ Advanced Pressure Cleaning — Sydney" },
      {
        property: "og:description",
        content: "In time. On budget. In a whisper. Pressure cleaning specialists since 1998.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={hero}
          alt="Pressure washing a commercial facade at dusk"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/75 to-ink/30" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-6 pt-32 pb-20">
          <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Sydney · Established 1998
          </span>
          <h1 className="max-w-4xl text-5xl leading-[0.95] text-white md:text-7xl lg:text-8xl">
            In time. On budget.{" "}
            <span className="text-brand">In a whisper.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
            Sydney's trusted pressure cleaning specialists for commercial, industrial,
            heritage and residential properties. Environmentally friendly. Fully compliant.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-semibold uppercase tracking-wide text-brand-foreground shadow-[var(--shadow-brand)] transition-transform hover:scale-105"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:1300853253"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-4 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              <Phone className="h-4 w-4" /> 1300 853 253
            </a>
          </div>

          <div className="mt-16 grid max-w-3xl grid-cols-2 gap-6 md:grid-cols-4">
            {[
              ["25+", "Years experience"],
              ["16m", "EWP reach"],
              ["EPA", "Compliant"],
              ["24/7", "Available"],
            ].map(([n, l]) => (
              <div key={l} className="border-l-2 border-brand pl-4">
                <div className="text-3xl font-bold text-white">{n}</div>
                <div className="text-xs uppercase tracking-wider text-white/60">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-around gap-6 px-6 py-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {["EPA Clean Water Compliant", "WorkSafe Certified", "WorkCover Compliant", "Licensed 88254C", "Public Liability Insured"].map(
            (t) => (
              <div key={t} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand" />
                {t}
              </div>
            ),
          )}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand">
              What we do
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl">A complete cleaning service</h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-foreground hover:text-brand"
          >
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-brand/50"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Heritage feature */}
      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={heritage}
              alt="Heritage sandstone restoration"
              loading="lazy"
              width={1280}
              height={896}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand">
              Specialist craft
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl">
              Heritage cleaning, done with care.
            </h2>
            <p className="mt-5 text-ink-foreground/70">
              Heritage façades demand a different touch. Our team combines low-pressure
              techniques, steam, and clean-and-capture systems to restore historic
              surfaces without damaging original detail.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Chemical-free steam cleaning options",
                "Clean and capture water management",
                "EPA Clean Water Policy compliant",
                "Trained operators with heritage experience",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <span className="text-ink-foreground/85">{p}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/services"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-wide text-brand-foreground"
            >
              Explore services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand">
            Why JJAPC
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl">
            EWP elevating platform specialists.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Committed to customer service excellence and truly focused on delivering
            superior results — from the ground floor to 16 metres up.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Award, t: "Since 1998", d: "Over 25 years cleaning Sydney's toughest jobs." },
            { icon: ShieldCheck, t: "Fully compliant", d: "EPA, WorkSafe, WorkCover & licensed." },
            { icon: Leaf, t: "Eco friendly", d: "Chemical-free steam and clean-capture systems." },
            { icon: Clock, t: "Always on", d: "Open 24/7 to fit around your operations." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-border p-6">
              <Icon className="h-7 w-7 text-brand" />
              <h3 className="mt-4 text-lg">{t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <figure className="rounded-3xl border-l-4 border-brand bg-muted/40 p-8 md:p-12">
            <blockquote className="text-2xl leading-snug text-foreground md:text-3xl">
              "Does a very good job. They are the best — always on time and the staff are
              very good."
            </blockquote>
            <figcaption className="mt-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              — Jimbo, Client
            </figcaption>
          </figure>
          <div>
            <h3 className="text-2xl">Industries we serve</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {industries.map((i) => (
                <span
                  key={i}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden">
        <img src={ewp} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 to-ink/70" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 text-center text-white">
          <h2 className="mx-auto max-w-3xl text-4xl md:text-6xl">
            Ready for a <span className="text-brand">spotless result?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/75">
            Free quotes across Greater Sydney. Tell us about your property and we'll
            recommend the right approach.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-semibold uppercase tracking-wide text-brand-foreground shadow-[var(--shadow-brand)]"
            >
              Request a free quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:0417200705"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur"
            >
              <Phone className="h-4 w-4" /> 0417 200 705
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
