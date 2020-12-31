import { getHeaders } from "./getHeaders";

test("partを渡すとヘッダーの配列が返される", () => {
  const part = `content-disposition: form-data; name="field1"

body`.replace(/\n/g, "\r\n");

  expect(getHeaders(part)).toMatchObject({
    "content-disposition": 'form-data; name="field1"',
  });
});
