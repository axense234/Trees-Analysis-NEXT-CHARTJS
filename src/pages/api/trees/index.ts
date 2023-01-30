// Next
import { NextApiRequest, NextApiResponse } from "next";
// Other
import { StatusCodes } from "http-status-codes";
// Prisma
import TreeClient from "@/db/postgres";
// Redis
import { deleteCache, getOrSetCache } from "@/utils/redis";
// TS
import { ResData } from "@/index";

const getAllTrees = async (
  req: NextApiRequest,
  res: NextApiResponse<ResData>
) => {
  const foundTrees = await TreeClient.findMany({
    orderBy: { treeName: "asc" },
  });

  await deleteCache("trees");

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
