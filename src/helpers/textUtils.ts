/**
 * Truncates a string to a specified number of words and adds an ellipsis if truncated.
 * @param text - The text to truncate.
 * @param wordLimit - The maximum number of words to keep.
 * @returns The truncated text with an ellipsis if applicable.
 */
export function truncateText(text: string, wordLimit: number): string {
  const words = text.split(" ");
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(" ") + "...";
}
