import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { CheckCircle2, ShieldCheck, Leaf, Award, Users, ArrowRight } from "lucide-react";
import driveway from "@/assets/driveway.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | JJ Advanced Pressure Cleaning Sydney" },
      {
        name: "description",
        content:
          "Established in 1998, JJAPC delivers premium pressure cleaning across Sydney with EPA, WorkSafe and WorkCover compliance.",
      },
      { property: "og:title", content: "About JJ Advanced Pressure Cleaning" },
      {
        property: "og:description",
        content: "Sydney pressure cleaning specialists since 1998 — committed to excellence.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="bg-ink pt-40 pb-24 text-ink-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand">
            About JJAPC
          </span>
          <h1 className="mt-4 max-w-4xl text-5xl md:text-7xl">
            Sydney's pressure cleaning specialists since <span className="text-brand">1998.</span>
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <h2 className="text-4xl">Two decades of pressure cleaning experience.</h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              JJ Advanced Pressure Cleaning was established in 1998 to bring a
              professional standard to Sydney's commercial and industrial cleaning
              market. Today we service the Greater Sydney and Sydney Metropolitan areas
              with a complete pressure cleaning and building maintenance offering.
            </p>
            <p>
              We work across construction, corporate, commercial, industrial, heritage
              and residential properties — combining advanced machinery with operators
              who genuinely care about doing the job right.
            </p>
            <p className="text-foreground font-semibold">
              "EWP elevating platform specialists, committed to customer service
              excellence, and truly focused on delivering superior results."
            </p>
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl">
          <img
            src={driveway}
            alt="Driveway before and after pressure cleaning"
            loading="lazy"
            width={1280}
            height={896}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-muted/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="max-w-2xl text-4xl">What we stand for.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Award, t: "Excellence", d: "Customer service excellence in everything we do." },
              { icon: Leaf, t: "Sustainability", d: "Environmentally friendly, EPA-compliant cleaning." },
              { icon: ShieldCheck, t: "Safety", d: "WorkSafe & WorkCover compliant on every site." },
              { icon: Users, t: "People", d: "Licensed operators who take pride in their craft." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-2xl border border-border bg-card p-6">
                <Icon className="h-7 w-7 text-brand" />
                <h3 className="mt-4 text-lg">{t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand">
              Compliance
            </span>
            <h2 className="mt-3 text-4xl">Licensed, insured, compliant.</h2>
            <ul className="mt-8 space-y-3">
              {[
                "NSW High Pressure Cleaning Licence No: 88254C",
                "Public Liability Insurance: ET 2210227/MSA",
                "EPA Clean Water Policy compliant",
                "WorkSafe & WorkCover compliant",
                "OHS001 – OHS012 safety documentation",
                "ABN 24 162 808 264",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-ink p-10 text-ink-foreground">
            <h3 className="text-3xl">Service area</h3>
            <p className="mt-3 text-ink-foreground/70">
              Based in Randwick and servicing Greater Sydney and the Sydney Metropolitan area.
            </p>
            <div className="mt-8 space-y-4 text-sm text-ink-foreground/80">
              <p><span className="text-brand font-semibold">Office:</span> 80 Bundock Street, Randwick NSW 2031</p>
              <p><span className="text-brand font-semibold">Postal:</span> PO Box 299, Randwick NSW 2031</p>
              <p><span className="text-brand font-semibold">Hours:</span> Open 24 hours, 7 days a week</p>
            </div>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-wide text-brand-foreground"
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
