export function parseContentDisposition(fieldValue: string) {
  const [, ...values] = fieldValue.split(";");

  // TODO: 型の改善
  return values.reduce<{ [key: string]: string }>((acc, kv) => {
    const [key, value] = kv.split("=");
    return {
      ...acc,
      [key.trim()]: value.trim().slice(1, -1),
    };
  }, {});
}
