"use client";

import Image from "next/image";
import { Copy, Heart, Lock, Globe } from "lucide-react";
import { useState } from "react";

type SnippetCardProps = {
  title: string;
  code: string;
  language: string;
  tags?: string[];
  isPublic: boolean;
  createdAt: string;
  likesCount: number;
  isLiked?: boolean;
  isOwner?: boolean;
  author: {
    username: string | null;
    avatar?: string | null;
  };
};

export default function SnippetCard({
  title,
  code,
  language,
  tags = [],
  isPublic,
  createdAt,
  likesCount,
  isLiked = false,
  isOwner = false,
  author,
}: SnippetCardProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="group relative rounded-2xl border border-white/10 bg-[#0b0f0e]/80 p-5 backdrop-blur transition hover:border-emerald-500/30">
      {/* Top row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs">
          <span className="rounded-full bg-white/10 px-3 py-1 font-mono text-slate-300">
            {language}
          </span>

          {isPublic ? (
            <span className="flex items-center gap-1 text-emerald-400">
              <Globe size={14} /> Public
            </span>
          ) : (
            <span className="flex items-center gap-1 text-slate-400">
              <Lock size={14} /> Private
            </span>
          )}
        </div>

        {/* Like */}
        <button
          className={`flex items-center gap-1 text-sm transition ${
            isLiked ? "text-emerald-400" : "text-slate-400 hover:text-white"
          }`}
        >
          <Heart size={16} fill={isLiked ? "currentColor" : "none"} />
          {likesCount}
        </button>
      </div>

      {/* Title */}
      <h3 className="mt-3 text-lg font-semibold text-white">
        {title}
      </h3>

      {/* Code preview */}
      <div className="relative mt-3 rounded-xl bg-black/60 p-4 font-mono text-sm text-slate-200">
        <pre className="max-h-32 overflow-hidden whitespace-pre-wrap">
          {code}
        </pre>

        {/* Gradient fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Bottom row */}
      <div className="mt-4 flex items-center justify-between">
        {/* Author */}
        <div className="flex items-center gap-2 text-sm text-slate-400">
          {author.avatar ? (
            <Image
              src={author.avatar}
              alt="avatar"
              width={24}
              height={24}
              className="rounded-full"
            />
          ) : (
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-xs text-emerald-400">
              {author.username?.[0]?.toUpperCase()}
            </div>
          )}
          <span>{author.username ?? "Anonymous"}</span>
          <span className="text-xs">· {createdAt}</span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 text-sm text-slate-400 hover:text-white"
          >
            <Copy size={16} />
            {copied ? "Copied" : "Copy"}
          </button>

          {isOwner && (
            <button className="text-sm text-slate-400 hover:text-red-400">
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
