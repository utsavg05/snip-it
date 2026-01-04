import { getExploreSnippets } from "@/drizzle/src/snippets/action";
import SnippetCard from "@/app/components/snippets/SnippetCard";

export default async function ExplorePage() {
    const snippets = await getExploreSnippets();

    return (
        <main className="mx-auto max-w-7xl px-6 py-20 text-white">
            {/* Header */}
            <div className="mb-12">
                <h1 className="text-4xl font-semibold">Explore Snippets</h1>
                <p className="mt-3 max-w-2xl text-slate-400">
                    Discover useful code snippets shared by the community.
                    Copy, learn, and reuse instantly.
                </p>
            </div>

            {/* Empty state */}
            {snippets.length === 0 ? (
                <div className="rounded-2xl border border-white/10 bg-white/5 p-10 text-center text-slate-400">
                    No public snippets yet.
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {snippets.map((snippet) => (
                        <SnippetCard
                            key={`explore-${snippet.id}`}
                            id={snippet.id}
                            title={snippet.title}
                            code={snippet.content.code}
                            language={snippet.content.language}
                            isPublic={true}
                            createdAt={snippet.createdAt
                                ? snippet.createdAt.toLocaleDateString()
                                : "—"}
                            likesCount={snippet.likesCount}
                            isLiked={snippet.isLiked}
                            isOwner={false}
                            author={snippet.author}
                        />
                    ))}
                </div>
            )}
        </main>
    );
}
