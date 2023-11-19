import { getPost } from "@/data/posts"
import PostComponent from "@/Components/post/PostComponent"

export default async function page({ params }: { params: { id: number } }) {
  return <PostComponent postData={await getPost(params.id)} />
}
