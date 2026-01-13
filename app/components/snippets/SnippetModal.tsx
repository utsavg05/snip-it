// "use client";
// import {Dialog, DialogContent, DialogHeader, DialogTitle,} from "@/components/ui/dialog";
// import { Copy, Heart, Globe, Lock } from "lucide-react";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { likeSnippet, unlikeSnippet } from "@/drizzle/src/snippets/likes";
// import CodeBlock from "./CodeBlock";
// import CopyIcon from "@/components/ui/copy-icon";

// type SnippetModalProps = {
//     open: boolean;
//     onOpenChange: (open: boolean) => void;
//     id: string;
//     title: string;
//     code: string;
//     language: string;
//     isPublic: boolean;
//     createdAt: string;
//     tags?: string[];
//     likesCount: number;
//     isLiked: boolean;
//     author: {
//         username: string | null;
//         avatar?: string | null;
//     };
//     onCopy: () => void;
//     onLikeToggle: () => void;
// };

// export default function SnippetModal({
//     open,
//     onOpenChange,
//     id,
//     title,
//     code,
//     language,
//     isPublic,
//     createdAt,
//     tags = [],
//     likesCount,
//     isLiked,
//     author,
//     onCopy,
//     onLikeToggle
// }: SnippetModalProps) {
//     const [copied, setCopied] = useState(false);
//     const [liked, setLiked] = useState(isLiked);
//     const [count, setCount] = useState(likesCount);

//     useEffect(() => {
//         setLiked(isLiked);
//         setCount(likesCount);
//     }, [isLiked, likesCount]);

//     async function handleCopy() {
//         await navigator.clipboard.writeText(code);
//         setCopied(true);
//         setTimeout(() => setCopied(false), 1500);
//     }

//     async function handleLike() {
//         if (liked) {
//             setLiked(false);
//             setCount((prev) => Math.max(0, Number(prev) - 1));
//             await unlikeSnippet(id);
//         } else {
//             setLiked(true);
//             setCount((prev) => Number(prev) + 1);
//             await likeSnippet(id);
//         }
//     }

//     const SHIKI_LANG_MAP: Record<string, string> = {
//         js: "javascript",
//         javascript: "javascript",
//         ts: "typescript",
//         tsx: "tsx",
//         jsx: "jsx",
//         react: "tsx",     
//         node: "javascript",
//         nodejs: "javascript",
//         python: "python",
//         java: "java",
//         cpp: "cpp",
//         c: "c",
//         rust: "rust",
//         go: "go",
//         sql: "sql",
//         typescript: "typescript",
//         bash: "bash",
//         shell: "bash",
//         plaintext: "plaintext",
//         csharp: "csharp",
//         php: "php",
//         ruby: "ruby",
//         swift: "swift",
//         kotlin: "kotlin",
//         docker: "dockerfile",
//         html: "html",
//         css: "css",
//         linux: "bash",
//     };

//     const resolvedLanguage = SHIKI_LANG_MAP[language.toLowerCase()] ?? "plaintext";

//     return (
//         <Dialog open={open} onOpenChange={onOpenChange}>
//             <DialogContent className="max-w-3xl border border-white/10 bg-[#0b0f0e] text-white">
//                 <DialogHeader>
//                     <DialogTitle className="text-xl font-semibold">
//                         {title}
//                     </DialogTitle>
//                 </DialogHeader>

//                 {/* Meta */}
//                 <div className="flex items-center gap-4 text-sm text-slate-400">
//                     <span className="rounded-full bg-white/10 px-3 py-1 font-mono">
//                         {resolvedLanguage}
//                     </span>
//                     {isPublic ? (
//                         <span className="flex items-center gap-1 text-emerald-400">
//                             <Globe size={14} /> Public
//                         </span>
//                     ) : (
//                         <span className="flex items-center gap-1 text-slate-400">
//                             <Lock size={14} /> Private
//                         </span>
//                     )}
//                     <span>· {createdAt}</span>
//                 </div>

//                 {/* Code */}
//                 <div className="relative mt-4 max-h-[400px] overflow-auto scrollbar-hide rounded-xl bg-black/70">
//                     <div
//                         className="max-h-[400px] overflow-auto scrollbar-hide p-4"
//                     >
//                         <CodeBlock code={code} language={resolvedLanguage} />
//                     </div>
//                 </div>


//                 {/* Tags */}
//                 {tags.length > 0 && (
//                     <div className="mt-4 flex flex-wrap gap-2">
//                         {tags.map((tag) => (
//                             <span
//                                 key={tag}
//                                 className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400"
//                             >
//                                 #{tag}
//                             </span>
//                         ))}
//                     </div>
//                 )}

//                 {/* Footer */}
//                 <div className="mt-6 flex items-center justify-between">
//                     {/* Author */}
//                     <div className="flex items-center gap-2 text-sm text-slate-400">
//                         {author.avatar ? (
//                             <Image
//                                 src={author.avatar}
//                                 alt="avatar"
//                                 width={28}
//                                 height={28}
//                                 className="rounded-full"
//                             />
//                         ) : (
//                             <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/20 text-xs text-emerald-400">
//                                 {author.username?.[0]?.toUpperCase()}
//                             </div>
//                         )}
//                         <span>{author.username ?? "Anonymous"}</span>
//                     </div>

//                     {/* Actions */}
//                     <div className="flex items-center gap-4">
//                         <button
//                             onClick={onLikeToggle}
//                             className={`flex items-center gap-1 text-sm ${liked ? "text-red-500" : "text-slate-400 hover:text-white"
//                                 }`}
//                         >
//                             <Heart size={16} fill={liked ? "currentColor" : "none"} />
//                             {likesCount}
//                         </button>

//                         <button
//                             onClick={handleCopy}
//                             className="flex items-center gap-1 text-sm text-slate-400 hover:text-white"
//                         >
//                             {/* <Copy size={16} /> */}
//                             <CopyIcon size={16}/>
//                             {copied ? "Copied" : "Copy"}
//                         </button>
//                     </div>
//                 </div>
//             </DialogContent>
//         </Dialog>
//     );
// }




// Claude UI
"use client";
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Copy, Heart, Globe, Lock, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { likeSnippet, unlikeSnippet } from "@/drizzle/src/snippets/likes";
import CodeBlock from "./CodeBlock";
import CopyIcon from "@/components/ui/copy-icon";

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
  onCopy: () => void;
  onLikeToggle: () => void;
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
  onCopy,
  onLikeToggle,
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
      setCount((prev) => Math.max(0, Number(prev) - 1));
      await unlikeSnippet(id);
    } else {
      setLiked(true);
      setCount((prev) => Number(prev) + 1);
      await likeSnippet(id);
    }
  }

  const SHIKI_LANG_MAP: Record<string, string> = {
    js: "javascript",
    javascript: "javascript",
    ts: "typescript",
    tsx: "tsx",
    jsx: "jsx",
    react: "tsx",
    node: "javascript",
    nodejs: "javascript",
    python: "python",
    java: "java",
    cpp: "cpp",
    c: "c",
    rust: "rust",
    go: "go",
    sql: "sql",
    typescript: "typescript",
    bash: "bash",
    shell: "bash",
    plaintext: "plaintext",
    csharp: "csharp",
    php: "php",
    ruby: "ruby",
    swift: "swift",
    kotlin: "kotlin",
    docker: "dockerfile",
    html: "html",
    css: "css",
    linux: "bash",
  };

  const resolvedLanguage =
    SHIKI_LANG_MAP[language.toLowerCase()] ?? "plaintext";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {/* <DialogContent className="max-w-[95vw] sm:max-w-2xl md:max-w-3xl max-h-[90vh] overflow-y-auto border border-white/10 bg-[#0b0f0e] text-white p-4 sm:p-6 [&>button[aria-label='Close']]:hidden
"> */}
      <DialogContent
        className="
                  max-w-[95vw] sm:max-w-2xl md:max-w-3xl
                  max-h-[90vh] overflow-y-auto
                  border border-white/10 bg-[#0b0f0e] text-white
                  p-4 sm:p-6

                  /* style the built-in close button safely */
                  [&_[data-radix-dialog-close]]:text-slate-400
                  [&_[data-radix-dialog-close]]:hover:text-white
                  [&_[data-radix-dialog-close]]:hover:bg-white/10
                  [&_[data-radix-dialog-close]]:rounded-md
                  [&_[data-radix-dialog-close]]:p-1
                "
      >

        {/* <DialogClose asChild >
          <button
            className="absolute right-4 top-4 rounded-md p-1 text-slate-400 hover:text-white hover:bg-white/10 transition"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </DialogClose> */}

        <DialogHeader className="space-y-3 sm:space-y-4">
          {/* Title with close button */}
          <div className="flex items-start justify-between gap-4">
            <DialogTitle className="text-lg sm:text-xl font-semibold leading-tight pr-8">
              {title}
            </DialogTitle>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-400">
            <span className="rounded-lg bg-emerald-500/10 border border-emerald-500/20 px-2.5 sm:px-3 py-1 font-mono text-emerald-400 font-semibold">
              {resolvedLanguage}
            </span>
            {isPublic ? (
              <span className="flex items-center gap-1 text-emerald-400">
                <Globe size={14} /> <span className="hidden sm:inline">Public</span>
              </span>
            ) : (
              <span className="flex items-center gap-1 text-slate-400">
                <Lock size={14} /> <span className="hidden sm:inline">Private</span>
              </span>
            )}
            <span className="hidden sm:inline">·</span>
            <span className="text-slate-500">{createdAt}</span>
          </div>
        </DialogHeader>

        {/* Code */}
        <div className="relative mt-4 max-h-[300px] sm:max-h-[400px] overflow-auto scrollbar-hide rounded-xl border border-white/10 bg-[#010409]">
          <div className="p-3 sm:p-4">
            <CodeBlock code={code} language={resolvedLanguage} />
          </div>
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg border border-white/10 bg-white/5 px-2.5 sm:px-3 py-1 text-xs text-slate-400"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Author */}
          <div className="flex items-center gap-2 text-sm text-slate-400">
            {author.avatar ? (
              <Image
                src={author.avatar}
                alt="avatar"
                width={32}
                height={32}
                className="rounded-full"
              />
            ) : (
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 font-semibold">
                {author.username?.[0]?.toUpperCase()}
              </div>
            )}
            <span className="font-medium">{author.username ?? "Anonymous"}</span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={onLikeToggle}
              className={`flex items-center gap-1.5 text-sm transition-colors ${liked ? "text-red-500" : "text-slate-400 hover:text-red-400"
                }`}
            >
              <Heart
                size={16}
                className="sm:w-[18px] sm:h-[18px]"
                fill={liked ? "currentColor" : "none"}
              />
              <span className="font-medium">{count}</span>
            </button>

            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-emerald-400 transition-colors"
            >
              <CopyIcon size={16} className="sm:w-[18px] sm:h-[18px]" />
              <span>{copied ? "Copied!" : "Copy"}</span>
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}