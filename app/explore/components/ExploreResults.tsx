import ExploreGrid from "./ExploreGrid";
import SnippetCard from "@/app/components/snippets/SnippetCard";
import { getExploreSnippetsPaginated } from "@/drizzle/src/snippets/action";
import Pagination from "../pagination";
import ExplorePagination from "../pagination";
import Link from "next/link";
import { RainbowButton } from "@/components/ui/rainbow-button";

type Props = {
    //   lang: string | null;
    //   query: string;
    page: number;
};

export default async function ExploreResults({
    //   lang,
    //   query,
    page,
}: Props) {
    const { items, totalPages } = await getExploreSnippetsPaginated({
        page,
        limit: 12,
        // lang: lang ?? undefined,
        // query: query || undefined,
    });


    return (
        <>
            <Link href="/snippets/new">
                <RainbowButton variant={"outline"} className="fixed rounded-xl text-md bottom-10 right-6 px-4 py-5 cursor-pointer ">Create</RainbowButton>
            </Link>
            <ExploreGrid isLoading={false}>
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
                        // author={snippet.author}
                        author={{
                            username: snippet.author?.username ?? null,
                            avatar: snippet.author?.avatar ?? null,
                        }}
                    />
                ))}
            </ExploreGrid>
            <div className="mt-10 flex justify-center">
                <ExplorePagination currentPage={page} totalPages={totalPages} />
            </div>
        </>
    );
}
