// import Link from "next/link";
// import { Github, Twitter, Mail } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="border-t border-white/5 bg-[#0b0f0e]">
//       <div className="mx-auto max-w-7xl px-6 py-16">
//         {/* Top grid */}
//         <div className="grid gap-12 md:grid-cols-4">
//           {/* Brand */}
//           <div>
//             <h3 className="text-lg font-bold text-white">
//               SnipHUB
//             </h3>
//             <p className="mt-4 text-sm leading-relaxed text-neutral-300">
//               Save, organize, and reuse your best code snippets without
//               losing context.
//             </p>

//             <div className="mt-6 flex items-center gap-4 text-neutral-300">
//               <Link href="https://x.com/0xdevug" target="_blank" rel="noopener noreferrer" className="hover:text-white">
//                 <Twitter size={18} />
//               </Link>
//               <Link href="https://github.com/utsavg05" target="_blank" rel="noopener noreferrer" className="hover:text-white">
//                 <Github size={18} />
//               </Link>
//               <Link href="mailto:utsav.gp1204@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
//                 <Mail size={18} />
//               </Link>
//             </div>
//           </div>

//           {/* Product */}
//           <div>
//             <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
//               Product
//             </h4>
//             <ul className="space-y-3 text-sm text-neutral-400">
//               <li>
//                 <Link href="/" className="hover:text-white">
//                   Overview
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/dashboard" className="hover:text-white">
//                   Dashboard
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#examples" className="hover:text-white">
//                   Examples
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/pricing" className="hover:text-white">
//                   Pricing
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Company */}
//           <div>
//             <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
//               Company
//             </h4>
//             <ul className="space-y-3 text-sm text-neutral-400">
//               <li>
//                 <Link href="mailto:utsav.gp1204@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
//                   Contact
//                 </Link>
//               </li>
//               <li>
//                 <Link href="https://x.com/0xdevug" target="_blank" rel="noopener noreferrer" className="hover:text-white">
//                   Twitter
//                 </Link>
//               </li>
//               <li>
//                 <Link href="https://github.com/utsavg05" target="_blank" rel="noopener noreferrer" className="hover:text-white">
//                   GitHub
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Resources */}
//           <div>
//             <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
//               Resources
//             </h4>
//             <ul className="space-y-3 text-sm text-neutral-400">
//               <li>
//                 <Link href="/privacy" className="hover:text-white">
//                   Privacy Policy
//                 </Link>
//               </li>
//               <li>
//                 <span className="cursor-not-allowed text-neutral-600">
//                   Careers (soon)
//                 </span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom bar */}
//         <div className="mt-8 flex flex-col items-center justify-between gap-4 border-white/5 pt-8 text-sm text-neutral-300 sm:flex-row">
//           <p className="text-neutral-400 tracking-[0.1em]">
//             Built for developers, by <Link href="https://x.com/0xdevug" target="_blank" rel="noopener noreferrer" className=" border-b-1 border-neutral-400 hover:border-white hover:text-white">Utsav</Link>.
//           </p>
//           <p>
//             © {new Date().getFullYear()} SnipHUB. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }




import Link from "next/link";
import { Github, Twitter, Mail, Linkedin } from "lucide-react";
import LinkedinIcon from "@/components/ui/linkedin-icon";
import GithubIcon from "@/components/ui/github-icon";
import TwitterXIcon from "@/components/ui/twitter-x-icon";
import MailFilledIcon from "@/components/ui/mail-filled-icon";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0b0f0e]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-12 sm:py-14 md:py-16">
        {/* Top grid */}
        <div className="grid gap-8 sm:gap-10 md:gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              SnipHUB
            </h3>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-neutral-300 max-w-xs">
              Save, organize, and reuse your best code snippets without
              losing context.
            </p>

            <div className="mt-5 sm:mt-6 flex items-center gap-4 text-neutral-300">
              <Link 
                href="https://x.com/0xdevug" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
                aria-label="Twitter"
              >
                {/* <Twitter size={20} /> */}
                <TwitterXIcon size={25} />
              </Link>
              <Link 
                href="https://github.com/utsavg05" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
                aria-label="GitHub"
              >
                {/* <Github size={20} /> */}
                <GithubIcon size={25} />
              </Link>
              <Link 
                href="mailto:utsav.gp1204@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
                aria-label="Email"
              >
                <MailFilledIcon size={25} />
              </Link>
              <Link 
                href="https://www.linkedin.com/in/utsav-gupta-3443a0324/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={25} />
              </Link>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-3 sm:mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              Product
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-neutral-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors inline-block">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-white transition-colors inline-block">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="#demo" className="hover:text-white transition-colors inline-block">
                  Demo
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors inline-block">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-3 sm:mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              Company
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-neutral-400">
              <li>
                <Link 
                  href="mailto:utsav.gp1204@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors inline-block"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  href="https://x.com/0xdevug" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors inline-block"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link 
                  href="https://github.com/utsavg05" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors inline-block"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link 
                  href="https://www.linkedin.com/in/utsav-gupta-3443a0324/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors inline-block"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-3 sm:mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              Resources
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-neutral-400">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors inline-block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <span className="cursor-not-allowed text-neutral-600">
                  Careers (soon)
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col items-center justify-between gap-3 sm:gap-4 border-t border-white/5 pt-6 sm:pt-8 text-xs sm:text-sm text-neutral-300 sm:flex-row">
          <p className="text-neutral-400 tracking-[0.1em] text-center sm:text-left">
            Built for developers, by{" "}
            <Link 
              href="https://x.com/0xdevug" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="border-b border-neutral-400 hover:border-white hover:text-white transition-colors"
            >
              Utsav
            </Link>
            .
          </p>
          <p className="text-center sm:text-right">
            © {new Date().getFullYear()} SnipHUB. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
