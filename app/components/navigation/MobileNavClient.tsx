// "use client";

// import { useState } from "react";
// import MobileDrawer from "./MobileDrawer";

// export default function MobileNavClient({
//   isAuthenticated,
// }: {
//   isAuthenticated: boolean;
// }) {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <button
//         onClick={() => setOpen(true)}
//         aria-label="Open menu"
//         className="rounded-md p-2 text-slate-300 hover:bg-white/5 hover:text-white"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <path d="M4 6h16" />
//           <path d="M4 12h16" />
//           <path d="M4 18h16" />
//         </svg>
//       </button>

//       <MobileDrawer
//         open={open}
//         onClose={() => setOpen(false)}
//         isAuthenticated={isAuthenticated}
//       />
//     </>
//   );
// }



"use client";

import { useState } from "react";
import MobileDrawer from "./MobileDrawer";
import { Menu, X } from "lucide-react";
import AlignCenterIcon from "@/components/ui/align-center-icon";

export default function MobileNavClient({
  isAuthenticated,
}: {
  isAuthenticated: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        className="rounded-md p-2 text-slate-300 hover:bg-white/5 hover:text-white transition-colors"
      >
        {open ? <X size={24} /> : <AlignCenterIcon className="text-neutral-400" />}
      </button>

      <MobileDrawer
        open={open}
        onClose={() => setOpen(false)}
        isAuthenticated={isAuthenticated}
      />
    </>
  );
}