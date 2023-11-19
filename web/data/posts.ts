import { errorResponse, postType } from "@/types/types"
import "server-only"

export async function getPosts() {
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

    return {
      data: (await res.json()) as postType[],
      error: null,
    }
  } catch (e: any) {
    const error: string = "Something went wrong, try again later!"
    return {
      data: null,
      error: error as string,
    }
  }
}

export async function getPost(id: number) {
  try {
    const res = await fetch("http://16.171.225.57:8080/posts/" + id, {
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
      data: (await res.json()) as postType,
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
