import HomeComponent from "@/Components/HomeComponent"
import { getPosts } from "@/data/posts"

export default async function Home() {
  const posts = await getPosts()
  return <HomeComponent postList={posts} />
}
