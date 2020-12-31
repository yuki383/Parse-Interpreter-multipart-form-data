import { splitToParts } from "./splitToParts";
import { getHeaders } from "./getHeaders";

type File = {
  fieldName: string;
  fileName?: string;
};

export function parse(args: { boundary: string; body: string }) {
  const parts = splitToParts(args);
  parts.map((part) => {
    const headers = getHeaders(part);
    const bodyPart = getBody(part);
  });
}

function getBody(part: string) {
  const splitted = part.split("\r\n");
}

const example = `Header: hogefuga

これはヘッダ`;
