import { splitToParts } from "./splitToParts";

type File = {
  fieldName: string;
  fileName?: string;
};

export function parse(args: { boundary: string; body: string }) {
  const parts = splitToParts(args);
  // const headers = getHeaders(body);
}

function getBody(part: string) {
  const splitted = part.split("\r\n");
}

const example = `Header: hogefuga

これはヘッダ`;
