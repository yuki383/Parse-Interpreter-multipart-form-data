export function splitToParts({
  boundary,
  body,
}: {
  boundary: string;
  body: string;
}) {
  // boundaryでsplitしやすくするために、最初のデリミタの前にCRLFを追加する
  body = body.startsWith("\r\n") ? body : `\r\n${body}`;
  const delimiter = `\r\n--${boundary}`;

  const partsArea = body.split(`${delimiter}--`)[0];
  const parts = partsArea.split(delimiter);

  return parts.slice(1, parts.length).map((part) => part.replace("\r\n", ""));
}
