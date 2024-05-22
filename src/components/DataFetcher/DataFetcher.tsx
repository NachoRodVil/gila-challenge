import { useCallback, useEffect, useState } from "react";
import { PostData, fetchPosts } from "../utils/fetchHandler";
import PostCard from "./PostCard/PostCard";
import PaginationMenu from "./PaginationMenu/PaginationMenu";

function DataFetcher() {
    const [posts, setPosts] = useState<PostData[]>([])
    const [selectedPage, setSelectedPage] = useState(0)
    const handleFetchPosts = useCallback(async () => {
        setPosts(await fetchPosts())
    }, [])
    useEffect(() => {
        handleFetchPosts()
    }, [handleFetchPosts])
    const previousPage = () => {
        setSelectedPage(selectedPage - 1)
    }
    const nextPage = () => {
        setSelectedPage(selectedPage + 1)
    }

    return (
        <div>
            {posts.length ? posts.slice(selectedPage * 10, (selectedPage * 10) + 9).map((post, i) => {
                return (
                    <PostCard {...post} key={i} />
                )
            }
            ) : null}
            <div>
                <PaginationMenu pagesLength={Math.ceil(posts.length / 10)} previousPage={previousPage} nextPage={nextPage} goToPage={setSelectedPage} currentPage={selectedPage} />
            </div>
        </div>
    );
}

export default DataFetcher;
