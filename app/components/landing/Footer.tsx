import Link from "next/link";
import { Github, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0b0f0e]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Top grid */}
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-white">
              SnipHUB
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Save, organize, and reuse your best code snippets without
              losing context.
            </p>

            <div className="mt-6 flex items-center gap-4 text-slate-300">
              <Link href="https://x.com/0xdevug" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <Twitter size={18} />
              </Link>
              <Link href="https://github.com/utsavg05" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <Github size={18} />
              </Link>
              <Link href="mailto:utsav.gp1204@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <Mail size={18} />
              </Link>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              Product
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-white">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-white">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="#examples" className="hover:text-white">
                  Examples
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <Link href="mailto:utsav.gp1204@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="https://x.com/0xdevug" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="https://github.com/utsavg05" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  GitHub
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              Resources
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <span className="cursor-not-allowed text-slate-500">
                  Careers (soon)
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-white/5 pt-8 text-sm text-slate-300 sm:flex-row">
          <p className="text-slate-400 tracking-[0.1em]">
            Built for developers, by <Link href="https://x.com/0xdevug" target="_blank" rel="noopener noreferrer" className=" border-b-1 border-slate-400 hover:border-white hover:text-white">Utsav</Link>.
          </p>
          <p>
            © {new Date().getFullYear()} SnipHUB. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
