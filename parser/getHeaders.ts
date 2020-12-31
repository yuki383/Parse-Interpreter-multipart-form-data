export function getHeaders(part: string) {
  if (part.startsWith("\r\n")) {
    return [];
  }

  const [headerField] = part.split("\r\n\r\n");

  return headerField.split("\r\n").map((row) => {
    const [name, value] = row.split(":");
    return { [name.trim()]: value.trim() };
  });
}
