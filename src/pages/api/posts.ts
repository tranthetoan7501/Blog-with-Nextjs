import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { method } = req;
  switch (method) {
    case "GET":
      res.status(200).json({ name: "Toan" });
    default:
      res.status(404).send("Not found");
  }
}
