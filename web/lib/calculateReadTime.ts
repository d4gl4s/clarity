import { contentBlock } from "@/types/types"

export const calculateReadTime = (blocks: contentBlock[]): number => {
  let length = 0
  for (let block of blocks) {
    length += block.body.length
  }
  //average reading speed is 25 letter per second: https://ask.funtrivia.com/askft/Question145725.html
  return Math.ceil(length / 25 / 60)
}
