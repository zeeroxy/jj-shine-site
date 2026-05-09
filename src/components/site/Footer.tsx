import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/jjapc-logo.svg";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2 space-y-4">
          <img src={logo} alt="JJAPC" className="h-10 w-auto bg-white rounded-md p-2" />
          <p className="max-w-md text-sm text-ink-foreground/70">
            Sydney's pressure cleaning specialists since 1998. Commercial, industrial,
            heritage and residential — in time, on budget, in a whisper.
          </p>
          <p className="text-xs text-ink-foreground/50">
            ABN 24 162 808 264 · NSW High Pressure Cleaning Licence 88254C
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-brand">
            Navigate
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-brand">Home</Link></li>
            <li><Link to="/services" className="hover:text-brand">Services</Link></li>
            <li><Link to="/about" className="hover:text-brand">About</Link></li>
            <li><Link to="/contact" className="hover:text-brand">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-brand">
            Get in touch
          </h4>
          <ul className="space-y-3 text-sm text-ink-foreground/80">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-brand shrink-0" />
              <a href="tel:1300853253" className="hover:text-brand">1300 853 253</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-brand shrink-0" />
              <a href="mailto:enquiries@jjapc.com.au" className="hover:text-brand break-all">
                enquiries@jjapc.com.au
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-brand shrink-0" />
              <span>80 Bundock Street, Randwick NSW 2031</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-ink-foreground/50 md:flex-row">
          <p>© {new Date().getFullYear()} JJ Pressure Cleaning Pty Ltd. All rights reserved.</p>
          <p>EPA · WorkSafe · WorkCover Compliant</p>
        </div>
      </div>
    </footer>
  );
}
