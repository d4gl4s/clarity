"use client"

import { contentBlock, postType, userType } from "@/types/types"
import { playfair } from "@/app/fonts"
import { useEffect, useState, useRef } from "react"

interface Post {
  postData:
    | {
        data: postType
        error: null
      }
    | {
        data: null
        error: string
      }
}

const PostComponent = ({ postData }: Post) => {
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [post, setPost] = useState<postType>()
  useEffect(() => {
    if (postData.error) setError(postData.error)
    else setPost(postData.data!)
    setLoading(false)
  }, [postData])
  const referencesRef = useRef<HTMLDivElement>(null)

  return (
    <div>
      {loading ? (
        <div className="h-[100vh]">loading...</div>
      ) : error ? (
        error
      ) : (
        <article className="w-[90%] max-w-[650px] m-auto mt-32 mb-48">
          <div className="text-[0.85em] font-semibold mb-2 text-blue-400 uppercase">{post?.category}</div>
          <h1 className={"font-bold text-[2.2em] leading-[42px] mb-16 " + playfair.className}>{post?.title}</h1>

          {post?.contentBlocks.map((block: contentBlock, i: number) =>
            block.type == "heading" ? (
              <h2 className="font-semibold mb-6 text-[1.3em] capitalize mt-16" key={i}>
                {block.body}
              </h2>
            ) : block.type == "paragraph" ? (
              <div className="leading-6 capitalize inline" key={i}>
                {block.body}
              </div>
            ) : block.type == "reference" ? (
              <div className="cursor-pointer w-fit h-fit inline text-emerald-400 font-semibold" key={i} onClick={() => referencesRef.current?.scrollIntoView({ behavior: "smooth" })}>
                {" "}
                [{block.refNumber}]{" "}
              </div>
            ) : block.type == "lineBreak" ? (
              <div className="h-8" key={i}></div>
            ) : (
              <>
                <span> </span>
                <a className="underline text-indigo-400 inline-block" href={block.ref} key={i}>
                  {block.body}
                </a>
                <span> </span>
              </>
            )
          )}

          <section ref={referencesRef} className="pt-20">
            <h2 className="mb-8 text-[1.7em] font-bold">References</h2>
            <ol>
              {post?.contentBlocks.map(
                (block: contentBlock, i: number) =>
                  block.type == "reference" && (
                    <li className="text-[0.95em]" key={i}>
                      <span>[{block.refNumber}] &nbsp;</span>
                      <span>{block.author}. &nbsp;</span>
                      <span>{block.title}. &nbsp;</span>
                      <span>{block.year}. &nbsp;</span>
                      <span>
                        <span className="text-[0.8em]">URL: &nbsp;</span>{" "}
                        <a href={block.url} className="italic underline text-indigo-400">
                          {block.url}
                        </a>
                      </span>
                      {block.body}
                    </li>
                  )
              )}
            </ol>
          </section>

          <section className="flex mt-20 text-[0.85em] flex-wrap">
            {post?.topics.map((topic: string, i: number) => (
              <div className="px-7 py-2 bg-[#f1eff4] mr-3 mb-3 text-[#837f9e] rounded-[50px] flex items-center" key={i}>
                {topic}
              </div>
            ))}
          </section>

          <section className="flex flex-col md:flex-row mt-20">
            <section className="mb-20 w-fit mr-48">
              <h2 className="mb-7 text-[1.7em] font-bold">Written By</h2>
              {post?.authors.map((author: userType, i: number) => (
                <div key={i} className="font-semibold flex items-center mb-2 text-[1.2em] ">
                  <span>✍️ {author.firstName + " " + author.lastName}</span> <br></br>
                </div>
              ))}

              <p className="mt-6 text-emerald-400 font-semibold text-[1.4em]">{post?.dateCreated}</p>
            </section>
          </section>
        </article>
      )}
    </div>
  )
}

export default PostComponent
