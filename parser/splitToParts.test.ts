import { splitToParts } from "./splitToParts";

describe("splitToParts", () => {
  const boundary = "foobar";
  const body = `--${boundary}
content-disposition: form-data; name="field1"

here is body.
--${boundary}
content-disposition: form-data; name="field2"; filename="test.txt"
content-type: text/plain

Hello World.

--${boundary}--`.replace(/\n/g, "\r\n");

  const result = splitToParts({ boundary, body });

  test("デリミタで区切られたpartを配列にする", () => {
    expect(splitToParts({ boundary, body }).length).toBe(2);
  });

  describe("先頭・末尾にCRLFが付加されない", () => {
    test("body partがCRLFで終わらない場合、両端にCRLFが存在しない", () => {
      expect(result[0]).toBe(
        'content-disposition: form-data; name="field1"\r\n\r\nhere is body.'
      );
    });

    test("body partがCRLFで終わる場合、body partのCRLFは残っている", () => {
      expect(result[1]).toBe(
        'content-disposition: form-data; name="field2"; filename="test.txt"\r\ncontent-type: text/plain\r\n\r\nHello World.\r\n'
      );
    });
  });
});
