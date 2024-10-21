export function substringText(text: string) {
  if (text.length > 150) {
    return text.substring(0, 150) + "...";
  }
  return text;
}
