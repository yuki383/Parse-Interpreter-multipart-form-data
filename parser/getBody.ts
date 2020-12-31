
export function getBody(part: string) {
  if (part.startsWith("\r\n")) {
    return part.replace("\r\n", "");
  }

  const [, body] = part.split("\r\n\r\n");
  return body;
}
