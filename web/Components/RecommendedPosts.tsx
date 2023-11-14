import { errorResponse, postType, userType } from "@/types/types"
import { calculateReadTime } from "@/lib/calculateReadTime"
import { limitTextSize } from "@/lib/limitTextSize"
import Link from "next/link"

async function getRelatedPosts() {
  try {
    const res = await fetch("http://16.171.225.57:8080/posts/", {
      cache: "no-store",
      headers: {
        "Content-type": "application/json",
      } as HeadersInit,
    })

    if (!res.ok) {
      const e: errorResponse = await res.json()
      throw new Error(e.message)
    }

    const data: postType[] = await res.json()
    return data.slice(0, 3)
  } catch (e: any) {
    return null
  }
}

const RecommendedPosts = async () => {
  const data = await getRelatedPosts()
  return (
    <>
      {data && data.length == 3 && (
        <section className="bg-zinc-100 mt-40 py-20">
          <div className="w-[90%] max-w-[800px] m-auto">
            <h2 className="font-bold text-[1.5em] mb-12">Check Out Some Related Posts ⛰️</h2>
            <div className="grid grid-cols-3 gap-4 mb-24">
              {data!.map((post: postType, i: number) => (
                <article key={i} className="flex flex-col justify-between bg-white p-8 col-span-1 min-h-[250px]">
                  <Link href={"../posts/" + post.postId}>
                    <h2 className="font-bold text-[1.2em] leading-[1.3em]">{post.title}</h2>
                    <div className="mb-4  text-[0.9em] text-slate-400 mt-1">{calculateReadTime(post.contentBlocks)} min</div>
                    <p>{limitTextSize(post.description, 600)}</p>
                  </Link>
                  <div className="flex justify-between items-end">
                    <div className="flex">
                      {post.authors.map((user: userType, i: number) => (
                        <div className="text-slate-400" key={i}>
                          <Link href={"../users/" + user.userId}>{user.firstName + " " + user.lastName}</Link>
                          {i != post.authors.length - 1 && <span>,&nbsp;</span>}
                        </div>
                      ))}
                    </div>
                    <p className="mt-8 text-slate-400">{post.dateCreated}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default RecommendedPosts
