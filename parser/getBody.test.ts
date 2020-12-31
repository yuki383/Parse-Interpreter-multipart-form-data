import { getBody } from "./getBody";

test("partのbody部分を返す", () => {
  const part = `content-disposition: form-data; name="field1"

body
`.replace(/\n/g, "\r\n");

  expect(getBody(part)).toBe("body\r\n");
});

// TODO: multipart/form-dataはContent-DispositionがMUSTなのでヘッダーがない場合はない
test("headerがない場合もbodyを返す", () => {
  const part = `
body
`.replace(/\n/g, "\r\n");

  expect(getBody(part)).toBe("body\r\n");
});
