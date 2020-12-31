import { parse } from "./parser/parse";

const boundary = "----WebKitFormBoundaryoaAilUqm9UGak6Li";
const body = `------WebKitFormBoundaryoaAilUqm9UGak6Li
Content-Disposition: form-data; name="name"

fadf
------WebKitFormBoundaryoaAilUqm9UGak6Li
Content-Disposition: form-data; name="content"; filename="test.txt"
Content-Type: text/plain

hi

------WebKitFormBoundaryoaAilUqm9UGak6Li--`.replace(/\n/g, "\r\n");

const result = parse({ body, boundary });

console.log(result)
