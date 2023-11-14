"use client"
import { postType } from "@/types/types"
import { useEffect, useState } from "react"
import PostCard from "./PostCard"

interface Component {
  postList:
    | {
        data: postType[]
        error: null
      }
    | {
        data: null
        error: string
      }
}

const HomeComponent = ({ postList }: Component) => {
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [posts, setPosts] = useState<postType[]>()

  useEffect(() => {
    if (postList.error) setError(postList.error)
    else setPosts(postList.data!)
    setLoading(false)
  }, [postList])
  return (
    <main className="p-24  bg-zinc-100">
      {loading ? (
        <div className="h-[100vh]">Loading..</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <section className="w-[90%] max-w-[800px] m-auto grid grid-cols-2 gap-4">
          <section className="w-[75%]">
            <h1 className="font-bold text-[2em] mb-3">Explore 🌌</h1>
            <p className=" leading-[1.5em]">Find out what is happening in the world today by exploring the latest posts.</p>
          </section>
          {posts!.map((post: postType, i: number) => (
            <PostCard key={i} post={post} gridColSpan={i % 3 == 0 && i != 0} />
          ))}
        </section>
      )}
    </main>
  )
}

export default HomeComponent
