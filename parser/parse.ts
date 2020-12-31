import { splitToParts } from "./splitToParts";
import { getHeaders } from "./getHeaders";
import { getBody } from "./getBody";
import { parseContentDisposition } from "./parseContentDisposition";

// TODO: bodyがBufferの場合にもパースできるようにする
export function parse(args: { boundary: string; body: string }) {
  const parts = splitToParts(args);
  return parts.map((part) => {
    const headers = getHeaders(part);
    const bodyPart = getBody(part);

    const contentDisposition = headers["content-disposition"];
    const contentType = headers["content-type"] || "text/plain";
    const { name, filename } = parseContentDisposition(contentDisposition);

    return {
      name,
      filename,
      body: bodyPart,
      contentType,
    };
  });
}
