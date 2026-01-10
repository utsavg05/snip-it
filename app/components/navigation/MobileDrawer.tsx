"use client";

import Link from "next/link";
import { X, Lock } from "lucide-react";
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
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/70"
      />

      {/* Drawer (half page) */}
      <div className="fixed right-0 top-0 z-[60] h-full w-[60%] bg-black shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <span className="text-base font-semibold text-white">
            Menu
          </span>
          <button
            onClick={onClose}
            className="rounded-md p-2 text-slate-400 hover:bg-white/10 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex flex-col gap-1 px-5 py-5 text-sm">
          <Link onClick={onClose} href="/" className="drawer-link">
            Home
          </Link>
          <Link onClick={onClose} href="#features" className="drawer-link">
            Features
          </Link>
          <Link onClick={onClose} href="/pricing" className="drawer-link">
            Pricing
          </Link>
          <Link onClick={onClose} href="#examples" className="drawer-link">
            Demo
          </Link>

          {isAuthenticated && (
            <>
              <div className="my-3 h-px bg-white/10" />
              <Link onClick={onClose} href="/dashboard" className="drawer-link">
                Dashboard
              </Link>
              <Link onClick={onClose} href="/explore" className="drawer-link">
                Explore
              </Link>
            </>
          )}
        </nav>

        {/* Login CTA (only logged out) */}
        {!isAuthenticated && (
          <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 p-5">
            <CoolMode>
              <Link href="/auth" onClick={onClose}>
                <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3 text-sm font-semibold text-black hover:bg-emerald-400">
                  Login
                  <Lock size={16} />
                </button>
              </Link>
            </CoolMode>
          </div>
        )}
      </div>

      {/* Small helper styles */}
      <style jsx>{`
        .drawer-link {
          border-radius: 0.5rem;
          padding: 0.6rem 0.75rem;
          font-weight: 500;
          color: rgb(203 213 225);
        }
        .drawer-link:hover {
          background: rgba(255, 255, 255, 0.05);
          color: white;
        }
      `}</style>
    </>
  );
}
