export const generateLink = (title: string): string => {
  return title.trim().replace(/\W+/g, "-").toLowerCase()
}
