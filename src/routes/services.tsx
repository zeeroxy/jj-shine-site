import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { services, industries } from "@/lib/services";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | JJ Advanced Pressure Cleaning Sydney" },
      {
        name: "description",
        content:
          "High & low pressure cleaning, steam cleaning, heritage restoration, graffiti removal, EWP access and more across Sydney.",
      },
      { property: "og:title", content: "Pressure Cleaning Services — JJAPC Sydney" },
      {
        property: "og:description",
        content: "Commercial, industrial, heritage & residential pressure cleaning across Sydney.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="bg-ink pt-40 pb-24 text-ink-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand">
            Our services
          </span>
          <h1 className="mt-4 max-w-3xl text-5xl md:text-7xl">
            Pressure cleaning, <span className="text-brand">done properly.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-foreground/70">
            From construction site washdowns to heritage façades, our team brings the
            right equipment, the right pressure and the right people.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-brand/50"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="text-2xl">{title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-muted/40">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand">
              Equipment
            </span>
            <h2 className="mt-3 text-4xl">Built for any job.</h2>
            <ul className="mt-8 space-y-3">
              {[
                "High pressure plants",
                "Industrial scrubbing machines",
                "Clean and capture water systems",
                "Elevated work platforms up to 16m",
                "Steam cleaning units (chemical-free)",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand">
              Industries
            </span>
            <h2 className="mt-3 text-4xl">Trusted across sectors.</h2>
            <div className="mt-8 flex flex-wrap gap-2">
              {industries.map((i) => (
                <span
                  key={i}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium"
                >
                  {i}
                </span>
              ))}
            </div>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-wide text-brand-foreground"
            >
              Request a quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
