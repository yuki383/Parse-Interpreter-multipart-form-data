import { splitToParts } from "./splitToParts";
import { getHeaders } from "./getHeaders";
import { getBody } from "./getBody";

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

const example = `Header: hogefuga

これはヘッダ`;
