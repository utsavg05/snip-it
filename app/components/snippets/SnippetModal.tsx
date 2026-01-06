"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Copy, Heart, Globe, Lock } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { likeSnippet, unlikeSnippet } from "@/drizzle/src/snippets/likes";

type SnippetModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;

  id: string;
  title: string;
  code: string;
  language: string;
  isPublic: boolean;
  createdAt: string;
  tags?: string[];
  likesCount: number;
  isLiked: boolean;

  author: {
    username: string | null;
    avatar?: string | null;
  };
};

export default function SnippetModal({
  open,
  onOpenChange,
  id,
  title,
  code,
  language,
  isPublic,
  createdAt,
  tags = [],
  likesCount,
  isLiked,
  author,
}: SnippetModalProps) {
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(isLiked);
  const [count, setCount] = useState(likesCount);

  useEffect(() => {
    setLiked(isLiked);
    setCount(likesCount);
  }, [isLiked, likesCount]);

  async function handleCopy() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  async function handleLike() {
    if (liked) {
      setLiked(false);
      setCount((c) => Math.max(0, c - 1));
      await unlikeSnippet(id);
    } else {
      setLiked(true);
      setCount((c) => c + 1);
      await likeSnippet(id);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl border border-white/10 bg-[#0b0f0e] text-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            {title}
          </DialogTitle>
        </DialogHeader>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-slate-400">
          <span className="rounded-full bg-white/10 px-3 py-1 font-mono">
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
          <span>· {createdAt}</span>
        </div>

        {/* Code */}
        <div className="relative mt-4 max-h-[400px] overflow-auto rounded-xl bg-black/70 p-4 font-mono text-sm">
          <pre className="whitespace-pre-wrap">{code}</pre>
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
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

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between">
          {/* Author */}
          <div className="flex items-center gap-2 text-sm text-slate-400">
            {author.avatar ? (
              <Image
                src={author.avatar}
                alt="avatar"
                width={28}
                height={28}
                className="rounded-full"
              />
            ) : (
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/20 text-xs text-emerald-400">
                {author.username?.[0]?.toUpperCase()}
              </div>
            )}
            <span>{author.username ?? "Anonymous"}</span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleLike}
              className={`flex items-center gap-1 text-sm ${
                liked ? "text-red-500" : "text-slate-400 hover:text-white"
              }`}
            >
              <Heart size={16} fill={liked ? "currentColor" : "none"} />
              {count}
            </button>

            <button
              onClick={handleCopy}
              className="flex items-center gap-1 text-sm text-slate-400 hover:text-white"
            >
              <Copy size={16} />
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
