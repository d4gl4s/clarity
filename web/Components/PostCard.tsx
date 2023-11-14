import { calculateReadTime } from "@/lib/calculateReadTime"
import { generateLink } from "@/lib/generateLink"
import { limitTextSize } from "@/lib/limitTextSize"
import { postType, userType } from "@/types/types"
import Link from "next/link"

interface Component {
  post: postType
  gridColSpan: boolean
}
const PostCard = ({ post, gridColSpan }: Component) => {
  return (
    <article className={"flex flex-col justify-between bg-white p-8 col-span-1 min-h-[250px]" + (gridColSpan && " col-span-2")}>
      <Link href={"../posts/" + post.postId}>
        <h2 className="font-bold text-[1.2em] leading-[1.3em]">{post.title}</h2>
        <div className="mb-4  text-[0.9em] text-slate-400 mt-1">{calculateReadTime(post.contentBlocks)} min</div>
        <p>{limitTextSize(post.description, gridColSpan ? 600 : 200)}</p>
      </Link>
      <div className="flex justify-between items-end">
        <div className="flex">
          {post.authors.map((user: userType, i: number) => (
            <div className="text-slate-400" key={i}>
              <div className="block">{user.firstName + " " + user.lastName}</div>
              {i != post.authors.length - 1 && <span>,&nbsp;</span>}
              {/* <Link href={"../users/" + user.userId}>{user.firstName + " " + user.lastName}</Link> */}
            </div>
          ))}
        </div>
        <p className="mt-8 text-slate-400">{post.dateCreated}</p>
      </div>
    </article>
  )
}

export default PostCard
