export function getBody(part: string) {
  const [, body] = part.split("\r\n\r\n");
  return body;
}
