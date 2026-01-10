// import ExploreGrid from "./ExploreGrid";
// import SnippetCard from "@/app/components/snippets/SnippetCard";
// import { getExploreSnippetsPaginated } from "@/drizzle/src/snippets/action";
// import ExplorePagination from "../pagination";
// import Link from "next/link";
// import { RainbowButton } from "@/components/ui/rainbow-button";
// import ExploreResultsClient from "./ExploreResultsClient";

// type Props = {
//     page: number;
// };

// export default async function ExploreResults({
//     page,
// }: Props) {
//     const { items, totalPages } = await getExploreSnippetsPaginated({
//         page,
//         limit: 12,
//         // lang: lang ?? undefined,
//         // query: query || undefined,
//     });


//     return (
//         <>
//             <Link href="/snippets/new">
//                 <RainbowButton variant={"outline"} className="fixed rounded-xl text-md bottom-10 right-6 px-4 py-5 cursor-pointer ">Create</RainbowButton>
//             </Link>
//             <ExploreResultsClient>
//                 {items.map((snippet) => (
//                     <SnippetCard
//                         key={snippet.id}
//                         id={snippet.id}
//                         title={snippet.title}
//                         code={snippet.content.code}
//                         language={snippet.content.language}
//                         isPublic
//                         createdAt={
//                             snippet.createdAt
//                                 ? snippet.createdAt.toLocaleDateString()
//                                 : "—"
//                         }
//                         likesCount={snippet.likesCount}
//                         isLiked={snippet.isLiked}
//                         // author={snippet.author}
//                         author={{
//                             username: snippet.author?.username ?? null,
//                             avatar: snippet.author?.avatar ?? null,
//                         }}
//                     />
//                 ))}
//             </ExploreResultsClient>
//             <div className="mt-10 flex justify-center">
//                 <ExplorePagination currentPage={page} totalPages={totalPages} />
//             </div>
//         </>
//     );
// }




import ExploreGrid from "./ExploreGrid";
import SnippetCard from "@/app/components/snippets/SnippetCard";
import { getExploreSnippetsPaginated } from "@/drizzle/src/snippets/action";
import ExplorePagination from "../pagination";
import Link from "next/link";
import { RainbowButton } from "@/components/ui/rainbow-button";
import ExploreResultsClient from "./ExploreResultsClient";

type Props = {
    page: number;
};

export default async function ExploreResults({ page }: Props) {
    const { items, totalPages } = await getExploreSnippetsPaginated({
        page,
        limit: 12,
    });

    return (
        <>
            {/* Responsive Create Button */}
            <Link href="/snippets/new">
                <RainbowButton
                    variant={"outline"}
                    className="fixed rounded-xl text-sm sm:text-md bottom-6 sm:bottom-10 right-4 sm:right-6 px-3 sm:px-4 py-4 sm:py-5 cursor-pointer z-50 shadow-2xl"
                >
                    <span className="hidden sm:inline">Create</span>
                    <span className="sm:hidden">+</span>
                </RainbowButton>
            </Link>

            <ExploreResultsClient>
                {items.map((snippet) => (
                    <SnippetCard
                        key={snippet.id}
                        id={snippet.id}
                        title={snippet.title}
                        code={snippet.content.code}
                        language={snippet.content.language}
                        isPublic
                        createdAt={
                            snippet.createdAt
                                ? snippet.createdAt.toLocaleDateString()
                                : "—"
                        }
                        likesCount={snippet.likesCount}
                        isLiked={snippet.isLiked}
                        author={{
                            username: snippet.author?.username ?? null,
                            avatar: snippet.author?.avatar ?? null,
                        }}
                    />
                ))}
            </ExploreResultsClient>

            <div className="mt-8 sm:mt-10 flex justify-center">
                <ExplorePagination currentPage={page} totalPages={totalPages} />
            </div>
        </>
    );
}