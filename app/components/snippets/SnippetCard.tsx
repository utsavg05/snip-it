// "use client";

// import Image from "next/image";
// import { Copy, Heart, Lock, Globe } from "lucide-react";
// import { useEffect, useOptimistic, useState, useTransition } from "react";
// import { likeSnippet, unlikeSnippet } from "@/drizzle/src/snippets/likes";

// type SnippetCardProps = {
//     id: string; // ✅ REQUIRED now
//     title: string;
//     code: string;
//     language: string;
//     tags?: string[];
//     isPublic: boolean;
//     createdAt: string;
//     likesCount: number;
//     isLiked?: boolean;
//     isOwner?: boolean;
//     author: {
//         username: string | null;
//         avatar?: string | null;
//     };
// };

// export default function SnippetCard({
//     id,
//     title,
//     code,
//     language,
//     tags = [],
//     isPublic,
//     createdAt,
//     likesCount,
//     isLiked = false,
//     isOwner = false,
//     author,
// }: SnippetCardProps) {
//     const [copied, setCopied] = useState(false);
//     const [isPending, startTransition] = useTransition();
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

//     async function handleLikeToggle() {
//         if (isPending) return;

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


//     return (
//         <div className="group relative rounded-2xl border border-white/10 bg-[#0b0f0e]/80 p-5 backdrop-blur transition hover:border-emerald-500/30">
//             {/* Top row */}
//             <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2 text-xs">
//                     <span className="rounded-full bg-white/10 px-3 py-1 font-mono text-slate-300">
//                         {language}
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
//                 </div>

//                 {/* ❤️ Like */}
//                 <button
//                     onClick={handleLikeToggle}
//                     disabled={isPending}
//                     className={`flex items-center gap-1 text-sm transition ${liked
//                         ? "text-red-500"
//                         : "text-slate-400 hover:text-white"
//                         }`}
//                 >
//                     <Heart
//                         size={16}
//                         fill={liked ? "currentColor" : "none"}
//                     />
//                     {count}
//                 </button>
//             </div>

//             {/* Title */}
//             <h3 className="mt-3 text-lg font-semibold text-white">
//                 {title}
//             </h3>

//             {/* Code preview */}
//             <div className="relative mt-3 rounded-xl bg-black/60 p-4 font-mono text-sm text-slate-200">
//                 <pre className="max-h-32 overflow-hidden whitespace-pre-wrap">
//                     {code}
//                 </pre>
//                 <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/80 to-transparent" />
//             </div>

//             {/* Tags */}
//             {tags.length > 0 && (
//                 <div className="mt-3 flex flex-wrap gap-2">
//                     {tags.map((tag) => (
//                         <span
//                             key={tag}
//                             className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400"
//                         >
//                             #{tag}
//                         </span>
//                     ))}
//                 </div>
//             )}

//             {/* Bottom row */}
//             <div className="mt-4 flex items-center justify-between">
//                 {/* Author */}
//                 <div className="flex items-center gap-2 text-sm text-slate-400">
//                     {author.avatar ? (
//                         <Image
//                             src={author.avatar}
//                             alt="avatar"
//                             width={24}
//                             height={24}
//                             className="rounded-full"
//                         />
//                     ) : (
//                         <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-xs text-emerald-400">
//                             {author.username?.[0]?.toUpperCase()}
//                         </div>
//                     )}
//                     <span>{author.username ?? "Anonymous"}</span>
//                     <span className="text-xs">· {new Date(createdAt).toISOString().split("T")[0]}</span>
//                 </div>

//                 {/* Actions */}
//                 <div className="flex items-center gap-3">
//                     <button
//                         onClick={handleCopy}
//                         className="flex items-center gap-1 text-sm text-slate-400 hover:text-white"
//                     >
//                         <Copy size={16} />
//                         {copied ? "Copied" : "Copy"}
//                     </button>

//                     {isOwner && (
//                         <button className="text-sm text-slate-400 hover:text-red-400">
//                             Delete
//                         </button>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }



// "use client";

// import Image from "next/image";
// import { Copy, Heart, Lock, Globe, Delete, DeleteIcon, Trash2 } from "lucide-react";
// import { useEffect, useState, useTransition } from "react";
// import { likeSnippet, unlikeSnippet } from "@/drizzle/src/snippets/likes";
// import SnippetModal from "./SnippetModal";
// import { deleteSnippet } from "@/drizzle/src/snippets/action";
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog"
// import { toast } from "react-toastify";
// import CopyIcon from "@/components/ui/copy-icon";
// import WorldIcon from "@/components/ui/world-icon";

// type SnippetCardProps = {
//   id: string;
//   title: string;
//   code: string;
//   language: string;
//   tags?: string[];
//   isPublic: boolean;
//   createdAt: string;
//   likesCount: number;
//   isLiked?: boolean;
//   isOwner?: boolean;
//   author: {
//     username: string | null;
//     avatar?: string | null;
//   };
// };

// export default function SnippetCard({
//   id,
//   title,
//   code,
//   language,
//   tags = [],
//   isPublic,
//   createdAt,
//   likesCount,
//   isLiked = false,
//   isOwner = false,
//   author,
// }: SnippetCardProps) {
//   const [copied, setCopied] = useState(false);
//   const [isPending, startTransition] = useTransition();
//   const [liked, setLiked] = useState(isLiked);
//   const [count, setCount] = useState(likesCount);
//   const [open, setOpen] = useState(false);

//   // 🔄 Sync when props change (important for dashboard/explore)
//   useEffect(() => {
//     setLiked(isLiked);
//     setCount(likesCount);
//   }, [isLiked, likesCount]);

//   async function handleCopy() {
//     // e.stopPropagation(); 
//     await navigator.clipboard.writeText(code);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 1500);
//   }

//   async function handleLikeToggle() {
//     // e.stopPropagation(); 
//     if (isPending) return;

//     startTransition(async () => {
//       if (liked) {
//         setLiked(false);
//         setCount((prev) => Math.max(0, Number(prev) - 1));
//         await unlikeSnippet(id);
//       } else {
//         setLiked(true);
//         setCount((prev) => Number(prev) + 1);
//         await likeSnippet(id);
//       }
//     });
//   }

//   async function handleDelete(e: React.MouseEvent) {
//     e.stopPropagation();

//     const toastId = toast.loading("Deleting snippet...");

//     try {
//       await deleteSnippet(id);

//       toast.update(toastId, {
//         render: "Snippet deleted",
//         type: "success",
//         isLoading: false,
//         autoClose: 2000,
//       });

//       setOpen(false);
//     } catch (err) {
//       console.error(err);

//       toast.update(toastId, {
//         render:"Failed to delete snippet",
//         type: "error",
//         isLoading: false,
//         autoClose: 3000,
//       });
//     }
//   }

//   return (
//     <div
//       onClick={() => setOpen(true)}
//       className="group relative cursor-pointer rounded-xl border border-white/10 bg-[#0d1117] p-4 transition hover:border-white/20"
//     >
//       {/* Top row */}
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-2 text-xs">
//           {/* Language badge */}
//           <span className="rounded-md bg-[#234152] px-2.5 py-1 font-mono text-[11px] tracking-wide text-slate-200">
//             {language}
//           </span>

//           {isPublic ? (
//             <Globe size={14} className="text-slate-400" />
//             // <WorldIcon size={18} className="text-slate-400"/>
//           ) : (
//             <Lock size={14} className="text-slate-500" />
//           )}
//         </div>

//         {/* Like */}
//         <button
//           onClick={(e) => {
//             e.stopPropagation();
//             handleLikeToggle();
//           }}
//           disabled={isPending}
//           className={`flex items-center gap-1 text-sm ${liked
//             ? "text-red-500"
//             : "text-slate-400 hover:text-white"
//             }`}
//         >
//           <Heart size={16} fill={liked ? "currentColor" : "none"} />
//           {count > 0 && count}
//         </button>
//       </div>

//       {/* Title */}
//       <h3 className="mt-3 line-clamp-1 text-sm font-medium text-white">
//         {title}
//       </h3>

//       {/* Code preview (FIXED HEIGHT) */}
//       <div className="mt-3 rounded-md border border-white/5 bg-[#010409] p-3 font-mono text-[13px] leading-relaxed text-slate-300">
//         <pre className="line-clamp-3 whitespace-pre-wrap">
//           {code}
//         </pre>
//       </div>

//       {/* Tags */}
//       {tags.length > 0 && (
//         <div className="mt-3 flex flex-wrap gap-1.5">
//           {tags.slice(0, 3).map((tag) => (
//             <span
//               key={tag}
//               className="rounded-md bg-[#161b22] px-2 py-0.5 text-[11px] text-slate-400"
//             >
//               #{tag}
//             </span>
//           ))}
//           {tags.length > 3 && (
//             <span className="text-[11px] text-slate-500">
//               +{tags.length - 3}
//             </span>
//           )}
//         </div>
//       )}

//       {/* Bottom row */}
//       <div className="mt-4 flex items-center justify-between">
//         {/* Author */}
//         <div className="flex items-center gap-2 text-xs text-slate-400">
//           {author.avatar ? (
//             <Image
//               src={author.avatar}
//               alt="avatar"
//               width={20}
//               height={20}
//               className="rounded-full"
//             />
//           ) : (
//             <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#161b22] text-[10px] text-slate-300">
//               {author.username?.[0]?.toUpperCase()}
//             </div>
//           )}
//           <span>{author.username ?? "Anonymous"}</span>
//           <span className="text-slate-500">· {createdAt}</span>
//         </div>

//         {/* Actions */}
//         <div className="flex items-center gap-2">
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               handleCopy();
//             }}
//             className="flex h-7 w-7 items-center justify-center rounded-md text-slate-400 hover:bg-white/5 hover:text-white"
//           >
//             {/* <Copy size={15} /> */}
//             <CopyIcon size={15}/>
//           </button>

//           {isOwner && (
//             <AlertDialog>
//               <AlertDialogTrigger asChild>
//                 <button
//                   onClick={(e) => e.stopPropagation()}
//                   className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-md text-slate-400 hover:bg-red-500/10 hover:text-red-400"
//                 >
//                   {/* Delete */}
//                   <Trash2 size={15} />
//                 </button>
//               </AlertDialogTrigger>

//               {/* Alert dialog */}
//               <AlertDialogContent className="border border-white/10 bg-[#0d1117] text-slate-200">
//                 <AlertDialogHeader>
//                   <AlertDialogTitle className="text-white">
//                     Delete snippet?
//                   </AlertDialogTitle>
//                   <AlertDialogDescription className="text-slate-400">
//                     This action cannot be undone.
//                   </AlertDialogDescription>
//                 </AlertDialogHeader>
//                 <AlertDialogFooter>
//                   <AlertDialogCancel className="border-white/10 bg-transparent cursor-pointer">
//                     Cancel
//                   </AlertDialogCancel>
//                   <AlertDialogAction
//                     onClick={handleDelete}
//                     className="bg-red-500/10 cursor-pointer text-red-400 hover:bg-red-500/20"
//                   >
//                     Delete
//                   </AlertDialogAction>
//                 </AlertDialogFooter>
//               </AlertDialogContent>
//             </AlertDialog>
//           )}
//         </div>
//       </div>

//       <SnippetModal
//         open={open}
//         onOpenChange={setOpen}
//         id={id}
//         title={title}
//         code={code}
//         language={language}
//         createdAt={createdAt}
//         likesCount={count}
//         isLiked={liked}
//         author={author}
//         onCopy={handleCopy}
//         isPublic={isPublic}
//         onLikeToggle={handleLikeToggle}
//       />
//     </div>

//   );
// }




// Claude UI
"use client";

import Image from "next/image";
import { Copy, Heart, Lock, Globe, Delete, DeleteIcon, Trash2 } from "lucide-react";
import { useEffect, useState, useTransition } from "react";
import { likeSnippet, unlikeSnippet } from "@/drizzle/src/snippets/likes";
import SnippetModal from "./SnippetModal";
import { deleteSnippet } from "@/drizzle/src/snippets/action";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { toast } from "react-toastify";
import CopyIcon from "@/components/ui/copy-icon";
import WorldIcon from "@/components/ui/world-icon";

type SnippetCardProps = {
  id: string;
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
  id,
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
  const [isPending, startTransition] = useTransition();
  const [liked, setLiked] = useState(isLiked);
  const [count, setCount] = useState(likesCount);
  const [open, setOpen] = useState(false);

  // 🔄 Sync when props change (important for dashboard/explore)
  useEffect(() => {
    setLiked(isLiked);
    setCount(likesCount);
  }, [isLiked, likesCount]);

  async function handleCopy() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  async function handleLikeToggle() {
    if (isPending) return;

    startTransition(async () => {
      if (liked) {
        setLiked(false);
        setCount((prev) => Math.max(0, Number(prev) - 1));
        await unlikeSnippet(id);
      } else {
        setLiked(true);
        setCount((prev) => Number(prev) + 1);
        await likeSnippet(id);
      }
    });
  }

  async function handleDelete(e: React.MouseEvent) {
    e.stopPropagation();

    const toastId = toast.loading("Deleting snippet...");

    try {
      await deleteSnippet(id);

      toast.update(toastId, {
        render: "Snippet deleted",
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });

      setOpen(false);
    } catch (err) {
      console.error(err);

      toast.update(toastId, {
        render: "Failed to delete snippet",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  }

  return (
    <div
      onClick={() => setOpen(true)}
      className="group relative cursor-pointer rounded-xl sm:rounded-2xl border border-white/10 bg-[#0b0f0e] p-4 sm:p-5 transition-all duration-200 hover:border-emerald-500/30 hover:bg-white/[0.02] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/5"
    >
      {/* Top row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs">
          {/* Language badge */}
          <span className="rounded-lg bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 font-mono text-[11px] sm:text-xs tracking-wide text-emerald-400 font-semibold">
            {language}
          </span>

          {isPublic ? (
            <Globe size={14} className="text-slate-400" />
          ) : (
            <Lock size={14} className="text-slate-500" />
          )}
        </div>

        {/* Like */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleLikeToggle();
          }}
          disabled={isPending}
          className={`flex items-center gap-1 text-xs sm:text-sm transition-colors ${
            liked
              ? "text-red-500"
              : "text-slate-400 hover:text-red-400"
          }`}
        >
          <Heart size={15} className="sm:w-4 sm:h-4" fill={liked ? "currentColor" : "none"} />
          {count > 0 && <span className="font-medium">{count}</span>}
        </button>
      </div>

      {/* Title */}
      <h3 className="mt-3 sm:mt-4 line-clamp-2 text-sm sm:text-base font-semibold text-white leading-snug">
        {title}
      </h3>

      {/* Code preview (FIXED HEIGHT) */}
      <div className="mt-3 rounded-lg sm:rounded-xl border border-white/5 bg-[#010409] p-3 sm:p-4 font-mono text-[11px] sm:text-[13px] leading-relaxed text-slate-300">
        <pre className="line-clamp-3 whitespace-pre-wrap overflow-hidden">
          {code}
        </pre>
      </div>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-white/5 border border-white/5 px-2 py-0.5 text-[10px] sm:text-[11px] text-slate-400"
            >
              #{tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span className="text-[10px] sm:text-[11px] text-slate-500">
              +{tags.length - 3}
            </span>
          )}
        </div>
      )}

      {/* Bottom row */}
      <div className="mt-4 flex items-center justify-between gap-2">
        {/* Author */}
        <div className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-400 min-w-0">
          {author.avatar ? (
            <Image
              src={author.avatar}
              alt="avatar"
              width={20}
              height={20}
              className="rounded-full shrink-0"
            />
          ) : (
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] text-emerald-400 font-semibold">
              {author.username?.[0]?.toUpperCase()}
            </div>
          )}
          <span className="truncate font-medium">{author.username ?? "Anonymous"}</span>
          <span className="text-slate-500 shrink-0 hidden sm:inline">· {createdAt}</span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleCopy();
            }}
            className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-emerald-500/10 hover:text-emerald-400 transition-colors"
            title="Copy code"
          >
            <CopyIcon size={14} className="sm:w-[15px] sm:h-[15px]" />
          </button>

          {isOwner && (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <button
                  onClick={(e) => e.stopPropagation()}
                  className="flex h-7 w-7 sm:h-8 sm:w-8 cursor-pointer items-center justify-center rounded-lg text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition-colors"
                  title="Delete snippet"
                >
                  <Trash2 size={14} className="sm:w-[15px] sm:h-[15px]" />
                </button>
              </AlertDialogTrigger>

              {/* Alert dialog */}
              <AlertDialogContent className="border border-white/10 bg-[#0b0f0e] text-slate-200 max-w-[90vw] sm:max-w-md">
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-white text-base sm:text-lg">
                    Delete snippet?
                  </AlertDialogTitle>
                  <AlertDialogDescription className="text-slate-400 text-sm">
                    This action cannot be undone. This will permanently delete your snippet.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="flex-col sm:flex-row gap-2">
                  <AlertDialogCancel className="border-white/10 bg-transparent cursor-pointer hover:bg-white/5 m-0">
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction
                    onClick={handleDelete}
                    className="bg-red-500/10 cursor-pointer text-red-400 hover:bg-red-500/20 border border-red-500/20 m-0"
                  >
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
        </div>
      </div>

      {/* Date on mobile (below author) */}
      <div className="sm:hidden mt-2 text-[10px] text-slate-500">
        {createdAt}
      </div>

      <SnippetModal
        open={open}
        onOpenChange={setOpen}
        id={id}
        title={title}
        code={code}
        language={language}
        createdAt={createdAt}
        likesCount={count}
        isLiked={liked}
        author={author}
        onCopy={handleCopy}
        isPublic={isPublic}
        onLikeToggle={handleLikeToggle}
      />
    </div>
  );
}