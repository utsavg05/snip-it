// "use client";

// import Link from "next/link";
// import { X, Lock } from "lucide-react";
// import { CoolMode } from "@/components/ui/cool-mode";

// type MobileDrawerProps = {
//   open: boolean;
//   onClose: () => void;
//   isAuthenticated: boolean;
// };

// export default function MobileDrawer({
//   open,
//   onClose,
//   isAuthenticated,
// }: MobileDrawerProps) {
//   if (!open) return null;

//   return (
//     <>
//       {/* Backdrop */}
//       <div
//         onClick={onClose}
//         // className="fixed inset-0 z-40 bg-black"
//       />

//       {/* Drawer (half page) */}
//       <div className="absolute right-0 mt-4 w-72 rounded-2xl border border-white/10 bg-[#0b0f0e] p-4 shadow-2xl backdrop-blur">
//         {/* Header */}
//         <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
//           <span className="text-base font-semibold text-white">
//             Menu
//           </span>
//           <button
//             onClick={onClose}
//             className="rounded-md p-2 text-slate-400 hover:bg-white/10 hover:text-white"
//           >
//             <X size={18} />
//           </button>
//         </div>

//         {/* Nav items */}
//         <nav className="flex flex-col gap-1 px-5 py-5 text-sm">
//           <Link onClick={onClose} href="/" className="drawer-link">
//             Home
//           </Link>
//           <Link onClick={onClose} href="#features" className="drawer-link">
//             Features
//           </Link>
//           <Link onClick={onClose} href="/pricing" className="drawer-link">
//             Pricing
//           </Link>
//           <Link onClick={onClose} href="#examples" className="drawer-link">
//             Demo
//           </Link>

//           {isAuthenticated && (
//             <>
//               <div className="my-3 h-px bg-white/10" />
//               <Link onClick={onClose} href="/dashboard" className="drawer-link">
//                 Dashboard
//               </Link>
//               <Link onClick={onClose} href="/explore" className="drawer-link">
//                 Explore
//               </Link>
//             </>
//           )}
//         </nav>

//         {/* Login CTA (only logged out) */}
//         {!isAuthenticated && (
//           <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 p-5">
//             <CoolMode>
//               <Link href="/auth" onClick={onClose}>
//                 <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3 text-sm font-semibold text-black hover:bg-emerald-400">
//                   Login
//                   <Lock size={16} />
//                 </button>
//               </Link>
//             </CoolMode>
//           </div>
//         )}
//       </div>

//       {/* Small helper styles */}
//       <style jsx>{`
//         .drawer-link {
//           border-radius: 0.5rem;
//           padding: 0.6rem 0.75rem;
//           font-weight: 500;
//           color: rgb(203 213 225);
//         }
//         .drawer-link:hover {
//           background: rgba(255, 255, 255, 0.05);
//           color: white;
//         }
//       `}</style>
//     </>
//   );
// }



// "use client";

// import Link from "next/link";
// import { X } from "lucide-react";
// import { CoolMode } from "@/components/ui/cool-mode";

// type MobileDrawerProps = {
//   open: boolean;
//   onClose: () => void;
//   isAuthenticated: boolean;
// };

// export default function MobileDrawer({
//   open,
//   onClose,
//   isAuthenticated,
// }: MobileDrawerProps) {
//   if (!open) return null;

//   return (
//     <>
//       {/* Backdrop with blur */}
//       <div
//         onClick={onClose}
//         className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
//       />

//       {/* Drawer - positioned below navbar */}
//       <div className="fixed left-0 right-0 top-16 z-50 mx-4 animate-in slide-in-from-top-2 duration-300">
//         <div className="rounded-2xl border border-white/10 bg-[#0a0f0e]/95 backdrop-blur-xl shadow-2xl overflow-hidden">
//           {/* Header with close button */}
//           <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
//             <span className="text-lg font-semibold text-white">
//               Menu
//             </span>
//             <button
//               onClick={onClose}
//               className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
//               aria-label="Close menu"
//             >
//               <X size={20} />
//             </button>
//           </div>

//           {/* Nav items */}
//           <nav className="flex flex-col gap-2 px-4 py-6">
//             <Link 
//               onClick={onClose} 
//               href="/" 
//               className="drawer-link"
//             >
//               Home
//             </Link>
//             <Link 
//               onClick={onClose} 
//               href="#features" 
//               className="drawer-link"
//             >
//               Features
//             </Link>
//             <Link 
//               onClick={onClose} 
//               href="/pricing" 
//               className="drawer-link"
//             >
//               Premium
//             </Link>
//             <Link 
//               onClick={onClose} 
//               href="#examples" 
//               className="drawer-link"
//             >
//               Demo
//             </Link>

//             {isAuthenticated && (
//               <>
//                 <Link 
//                   onClick={onClose} 
//                   href="/dashboard" 
//                   className="drawer-link"
//                 >
//                   Dashboard
//                 </Link>
//                 <Link 
//                   onClick={onClose} 
//                   href="/explore" 
//                   className="drawer-link"
//                 >
//                   Explore
//                 </Link>
//               </>
//             )}
            
//             {isAuthenticated && (
//               <Link 
//                 onClick={onClose} 
//                 href="#gsoc" 
//                 className="drawer-link"
//               >
//                 GSoC Orgs
//               </Link>
//             )}
//           </nav>

//           {/* Login CTA (only when logged out) */}
//           {!isAuthenticated && (
//             <div className="border-t border-white/10 p-4">
//               <CoolMode>
//                 <Link href="/auth" onClick={onClose}>
//                   <button className="w-full rounded-xl bg-emerald-500 py-3.5 text-base font-semibold text-black transition-all hover:bg-emerald-400 active:scale-95">
//                     Login
//                   </button>
//                 </Link>
//               </CoolMode>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Styles */}
//       <style jsx>{`
//         .drawer-link {
//           display: block;
//           border-radius: 0.75rem;
//           padding: 1rem 1.25rem;
//           font-size: 1rem;
//           font-weight: 500;
//           color: rgb(203 213 225);
//           transition: all 0.2s ease;
//         }
//         .drawer-link:hover {
//           background: rgba(255, 255, 255, 0.08);
//           color: white;
//         }
//         .drawer-link:active {
//           background: rgba(255, 255, 255, 0.12);
//         }
//       `}</style>
//     </>
//   );
// }




"use client";

import Link from "next/link";
import { CoolMode } from "@/components/ui/cool-mode";

type MobileDrawerProps = {
  open: boolean;
  onClose: () => void;
  isAuthenticated: boolean;
};

export default function MobileDrawer({
  open,
  onClose,
  isAuthenticated,
}: MobileDrawerProps) {
  if (!open) return null;

  return (
    <>
      {/* Backdrop - positioned below navbar */}
      <div
        onClick={onClose}
        className="fixed inset-0 top-[60px] z-40 bg-black/60 backdrop-blur-sm"
      />

      {/* Drawer - attached to navbar, no gap */}
      <div className="fixed left-0 right-0 top-[60px] z-50 animate-in slide-in-from-top-2 duration-500 ">
        <div className="border-b border-white/10 bg-[#0b0f0e] shadow-2xl">
          {/* Nav items */}
          <nav className="flex flex-col gap-3 px-6 py-4">
            <Link 
              onClick={onClose} 
              href="/" 
              className="drawer-link w-full hover:text-[#22C55E] text-gray-300 cursor-pointer font-light transition-all duration-300 translate-x-0 opacity-100 delay-150"
            >
              Home
            </Link>
            <Link 
              onClick={onClose} 
              href="#features" 
              className="drawer-link w-full hover:text-[#22C55E] text-gray-300 cursor-pointer font-light transition-all duration-300 translate-x-0 opacity-100 delay-150"
            >
              Features
            </Link>
            <Link 
              onClick={onClose} 
              href="/pricing" 
              className="drawer-link w-full hover:text-[#22C55E] text-gray-300 cursor-pointer font-light transition-all duration-300 translate-x-0 opacity-100 delay-150"
            >
              Premium
            </Link>
            <Link 
              onClick={onClose} 
              href="#examples" 
              className="drawer-link w-full hover:text-[#22C55E] text-gray-300 cursor-pointer font-light transition-all duration-300 translate-x-0 opacity-100 delay-150"
            >
              Demo
            </Link>

            {isAuthenticated && (
              <>
                {/* <div className="my-2 h-px bg-white/10" /> */}
                <Link 
                  onClick={onClose} 
                  href="/dashboard" 
                  className="drawer-link w-full hover:text-[#22C55E] text-gray-300 cursor-pointer font-light transition-all duration-300 translate-x-0 opacity-100 delay-150"
                >
                  Dashboard
                </Link>
                <Link 
                  onClick={onClose} 
                  href="/explore" 
                  className="drawer-link w-full hover:text-[#22C55E] text-gray-300 cursor-pointer font-light transition-all duration-300 translate-x-0 opacity-100 delay-150"
                >
                  Explore
                </Link>
              </>
            )}
          </nav>

          {/* Login CTA (only when logged out) */}
          {!isAuthenticated && (
            <div className="border-t border-white/10 px-6 py-4">
              <CoolMode>
                <Link href="/auth" onClick={onClose}>
                  <button className="w-full rounded-xl bg-emerald-500 py-3 text-base font-semibold text-black transition-all hover:bg-emerald-400 active:scale-95">
                    Login
                  </button>
                </Link>
              </CoolMode>
            </div>
          )}
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .drawer-link {
          display: block;
          border-radius: 0.625rem;
          padding: 0.875rem 1rem;
          font-size: 0.9375rem;
          font-weight: 500;
          color: rgb(203 213 225);
          transition: all 0.15s ease;
        }
        .drawer-link:hover {
          background: rgba(16, 185, 129, 0.1);
          color: rgb(52, 211, 153);
        }
        .drawer-link:active {
          background: rgba(16, 185, 129, 0.15);
        }
      `}</style>
    </>
  );
}