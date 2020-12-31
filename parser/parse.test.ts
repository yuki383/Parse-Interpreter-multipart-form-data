import { splitToParts } from "./parse";

describe("splitToParts", () => {
  const boundary = "foobar";
  const body = `--${boundary}
content-disposition: form-data; name="field1"

here is body.
--${boundary}
content-disposition: form-data; name="field2"; filename="test.txt"
content-type: text/plain

Hello World.

--${boundary}

No Header
--${boundary}--`.replace(/\n/g, "\r\n");

  test("partごとの文字列を返す", () => {
    const parts = splitToParts({ boundary, body });

    expect(parts).toStrictEqual([
      'content-disposition: form-data; name="field1"\r\n\r\nhere is body.',
      'content-disposition: form-data; name="field2"; filename="test.txt"\r\ncontent-type: text/plain\r\n\r\nHello World.\r\n',
      '\r\nNo Header',
    ]);
  });
});
