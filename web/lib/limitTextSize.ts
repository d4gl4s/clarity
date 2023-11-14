export const limitTextSize = (text: string, length: number): string => {
  if (length >= text.length) return text
  let limited = text.substring(0, length - 3) + "..."
  return limited
}
