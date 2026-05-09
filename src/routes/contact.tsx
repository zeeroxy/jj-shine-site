import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | JJ Advanced Pressure Cleaning Sydney" },
      {
        name: "description",
        content:
          "Get a free quote from JJAPC. Call 1300 853 253 or email enquiries@jjapc.com.au. Open 24 hours, 7 days.",
      },
      { property: "og:title", content: "Contact JJ Advanced Pressure Cleaning" },
      {
        property: "og:description",
        content: "Free quotes across Greater Sydney. Call 1300 853 253 or send a message.",
      },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().min(6, "Phone required").max(30),
  message: z.string().trim().min(1, "Message required").max(1000),
});

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      for (const i of result.error.issues) errs[String(i.path[0])] = i.message;
      setErrors(errs);
      setStatus("error");
      return;
    }
    setErrors({});
    setStatus("ok");
    e.currentTarget.reset();
  }

  return (
    <SiteLayout>
      <section className="bg-ink pt-40 pb-24 text-ink-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand">
            Contact
          </span>
          <h1 className="mt-4 max-w-3xl text-5xl md:text-7xl">
            Let's get your <span className="text-brand">free quote.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-foreground/70">
            Tell us a little about your property and we'll get back to you with the right approach.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-6">
          {[
            { icon: Phone, t: "Call us", lines: ["1300 853 253", "0417 200 705", "(02) 8520 3450"] },
            { icon: Mail, t: "Email", lines: ["enquiries@jjapc.com.au", "accounts@jjapc.com.au"] },
            { icon: MapPin, t: "Visit", lines: ["80 Bundock Street", "Randwick NSW 2031"] },
            { icon: Clock, t: "Hours", lines: ["Open 24 hours", "7 days a week"] },
          ].map(({ icon: Icon, t, lines }) => (
            <div key={t} className="flex gap-4 rounded-2xl border border-border bg-card p-6">
              <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg">{t}</h3>
                {lines.map((l) => (
                  <p key={l} className="text-sm text-muted-foreground">{l}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]"
        >
          <h2 className="text-3xl">Send a message</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            We respond to all enquiries within one business day.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <Field label="Name" name="name" error={errors.name} />
            <Field label="Email" name="email" type="email" error={errors.email} />
            <Field label="Cell phone" name="phone" type="tel" error={errors.phone} />
            <Field label="Company (optional)" name="company" />
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              maxLength={1000}
              className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none ring-brand/30 focus:ring-2"
            />
            {errors.message && (
              <p className="mt-1 text-xs text-destructive">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-semibold uppercase tracking-wide text-brand-foreground shadow-[var(--shadow-brand)] transition-transform hover:scale-105"
          >
            Send message <Send className="h-4 w-4" />
          </button>

          {status === "ok" && (
            <p className="mt-5 rounded-lg bg-brand/10 px-4 py-3 text-sm text-foreground">
              Thanks — we've received your message and will be in touch shortly.
            </p>
          )}
        </form>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        maxLength={255}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none ring-brand/30 focus:ring-2"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
