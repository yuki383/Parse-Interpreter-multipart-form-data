type File = {
  fieldName: string;
  fileName?: string;
};

export function parse(args: { boundary: string; body: string }) {
  const parts = splitToParts(args);
  // const headers = getHeaders(body);
}

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

function getHeaders(part: string) {
  if (part.startsWith("\r\n\r\n")) {
    return [];
  }
  const splitted = part.trim().split("\r\n");

  const delimiterIndex = splitted.findIndex((row) => row === "");
  return splitted
    .slice(0, delimiterIndex)
    .map((part) => part.replace("\r\n", ""));
}

function getBody(part: string) {
  const splitted = part.split("\r\n");
}

const example = `Header: hogefuga

これはヘッダ`;
