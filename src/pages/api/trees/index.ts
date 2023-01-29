// Next
import { NextApiRequest, NextApiResponse } from "next";
// Other
import { StatusCodes } from "http-status-codes";
// Prisma
import TreeClient from "@/db/postgres";
// Reids
import { getOrSetCache } from "@/utils/redis";

const getAllTrees = async (req: NextApiRequest, res: NextApiResponse) => {
  const foundTrees = await getOrSetCache("trees", async () => {
    const trees = await TreeClient.findMany();
    return trees;
  });

  if (foundTrees.length < 1) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ msg: "Could not find any trees", trees: [] });
  }

  return res
    .status(StatusCodes.OK)
    .json({ msg: "Successfully found trees!", trees: foundTrees });
};

export default getAllTrees;
