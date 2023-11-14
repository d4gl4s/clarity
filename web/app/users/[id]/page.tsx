import { getPosts } from "@/data/posts"
import { errorResponse, postType, userPageResponse } from "@/types/types"
import { generateLink } from "@/lib/generateLink"
import PostComponent from "@/Components/post/PostComponent"
import UserComponent from "@/Components/user/UserComponent"

async function getUserInfo(id: number) {
  try {
    const res = await fetch("http://16.171.225.57:8080/users/" + id, {
      cache: "no-store",
      headers: {
        "Content-type": "application/json",
      } as HeadersInit,
    })

    if (!res.ok) {
      const e: errorResponse = await res.json()
      throw new Error(e.message)
    }

    return {
      data: (await res.json()) as userPageResponse,
      error: null,
    }
  } catch (e: any) {
    let error: string = "Something went wrong, try again later!"
    if (e.message == "No value present") error = "Ups.. No such post found!"
    return {
      data: null,
      error: error as string,
    }
  }
}
/* 
export async function generateStaticParams() {
  const { data } = await getPosts()
  return data!.map((post: postType) => ({
    title: generateLink(post.title),
  }))
} */

export default async function page({ params }: { params: { title: string; id: number } }) {
  const data = await getUserInfo(params.id)
  return <UserComponent userData={data} />
}
