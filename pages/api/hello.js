// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getToken } from "../../src/utils";

export default function handler(req, res) {
  getToken();
  res.status(200).json({ name: "John Doe" });
}
