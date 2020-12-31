export function getHeaders(part: string) {
  if (part.startsWith("\r\n")) {
    return {};
  }

  const [headerField] = part.split("\r\n\r\n");

  return headerField
    .split("\r\n")
    .reduce<{ [fieldName: string]: string }>((acc, row) => {
      const [name, value] = row.split(":");
      return { ...acc, [name.trim().toLowerCase()]: value.trim() };
    }, {});
}
