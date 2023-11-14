"use client"

import { postType, userPageResponse, userType } from "@/types/types"
import { useState, useEffect } from "react"
import PostCard from "../PostCard"
import ProfilePicture from "./ProfilePicture"

interface UserComponent {
  userData:
    | {
        data: userPageResponse
        error: null
      }
    | {
        data: null
        error: string
      }
}

const UserComponent = ({ userData }: UserComponent) => {
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [user, setUser] = useState<userType>()
  const [posts, setPosts] = useState<postType[]>()
  useEffect(() => {
    if (userData.error) setError(userData.error)
    else {
      setUser(userData.data?.user)
      setPosts(userData.data?.posts)
    }
    setLoading(false)
  }, [userData])
  return (
    <div>
      {loading ? (
        "loading..."
      ) : error ? (
        error
      ) : (
        <article>
          <section className="h-[50vh] py-16 w-[90%] max-w-[800px] mt-20 m-auto">
            <div className="flex items-center mb-8">
              <ProfilePicture src="/profile.jpeg" size={80} />

              <h1 className="font-bold text-[3em] ml-6">
                {user?.firstName} {user?.lastName}
              </h1>
            </div>
            <p className="mb-4 text-[1.2em]"> {user?.bio}</p>
            <p>
              {" "}
              email: <strong>{user?.email}</strong>
            </p>
          </section>
          <section className="bg-zinc-100 py-20">
            <section className="w-[90%] max-w-[800px] m-auto grid grid-cols-2 gap-4">
              <section className="w-[75%]">
                <h1 className="font-bold text-[2em] mb-3">{user?.firstName + "'s posts"} 🎆</h1>
                <p className=" leading-[1.5em]">Check out the latest posts by {user?.firstName}.</p>
              </section>
              {posts!.map((post: postType, i: number) => (
                <PostCard key={i} post={post} gridColSpan={i % 3 == 0 && i != 0} />
              ))}
            </section>
          </section>
        </article>
      )}
    </div>
  )
}

export default UserComponent
