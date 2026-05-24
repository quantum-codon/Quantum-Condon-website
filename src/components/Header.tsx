import * as React from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { navLinks } from "../data/site";

export function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-codon-black/72 backdrop-blur-2xl">
      <div className="section-wrap flex min-h-24 items-center justify-between gap-6">
        <a href="/" className="group flex items-center" aria-label="Quantum Codon home">
          <img src="/brand_logo.png" alt="Quantum Codon" className="brand-logo-header h-20 w-auto object-contain md:h-28" />
        </a>

        <nav className="hidden items-center gap-5 text-sm text-slate-300 xl:gap-8 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="group relative">
                <a
                  href={link.href}
                  className="inline-flex items-center gap-1.5 transition duration-300 hover:text-white focus:text-white focus:outline-none"
                  aria-haspopup="true"
                >
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5 transition duration-300 group-hover:rotate-180" aria-hidden="true" />
                </a>
                <div className="pointer-events-none invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-5 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100">
                  <div className="overflow-hidden rounded-xl border border-white/10 bg-codon-black/95 p-2 shadow-2xl shadow-codon-blue/10 backdrop-blur-2xl">
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block rounded-lg px-4 py-3 text-sm text-slate-300 transition duration-300 hover:bg-white/[0.06] hover:text-white focus:bg-white/[0.06] focus:text-white focus:outline-none"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a key={link.label} href={link.href} className="transition duration-300 hover:text-white">
                {link.label}
              </a>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#partner"
            className="group inline-flex min-h-11 items-center gap-3 rounded-lg border border-codon-blue/60 bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:bg-codon-blue/15 focus:outline-none focus:ring-2 focus:ring-codon-cyan/80"
          >
            Partner With Us
            <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-white/[0.04] text-white lg:hidden"
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-white/10 bg-codon-black/95 px-4 py-5 lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-xl gap-2">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="grid gap-1">
                  <a
                    href={link.href}
                    className="rounded-lg px-4 py-3 text-base text-slate-200 transition hover:bg-white/[0.06] hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                  <div className="grid gap-1 border-l border-codon-cyan/20 pl-4">
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="rounded-lg px-4 py-2.5 text-sm text-slate-400 transition hover:bg-white/[0.06] hover:text-white"
                        onClick={() => setOpen(false)}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-lg px-4 py-3 text-base text-slate-200 transition hover:bg-white/[0.06] hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              )
            )}
            <a
              href="#partner"
              className="mt-3 inline-flex min-h-12 items-center justify-center rounded-lg border border-codon-blue bg-codon-blue px-5 py-3 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Partner With Us
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
