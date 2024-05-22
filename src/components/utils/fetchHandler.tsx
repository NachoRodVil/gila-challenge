import axios from "axios"

export interface PostData {
    body: string;
    id: number;
    title: string;
    userId: number;
}

export const fetchPosts = async () : Promise<PostData[]> => {
    const response =  await axios.get("https://jsonplaceholder.typicode.com/posts")
    return response.data
}