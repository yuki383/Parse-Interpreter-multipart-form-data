import { parseContentDisposition } from "./parseContentDisposition";

test("Header FieldをパースしてKey: Valueのオブジェクトを返す", () => {
  const fieldValue = 'form-data; name="field1"; filename="test.txt"';
  expect(parseContentDisposition(fieldValue)).toMatchObject({
    name: "field1",
    filename: "test.txt",
  });
});
