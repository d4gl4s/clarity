import { errorResponse, postType, userPageResponse } from "@/types/types"
import "server-only"

export async function getUsers() {
  try {
    const res = await fetch("http://16.171.225.57:8080/users/", {
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
      data: (await res.json()) as userPageResponse[],
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
