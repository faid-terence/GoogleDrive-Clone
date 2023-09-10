import { type NextApiRequest, type NextApiResponse } from "next";

const firestore = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ text: "Welcome to Terence Faid JABO" });
};

export default firestore;
