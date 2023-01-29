// Next
import { NextApiRequest, NextApiResponse } from "next";
// TS
import { ResData, Tree } from "@/index";
// Prisma
import TreeClient from "@/db/postgres";
// Redis
import { getOrSetCache } from "@/utils/redis";
// Other
import { StatusCodes } from "http-status-codes";

const getTreeByUID = async (
  req: NextApiRequest,
  res: NextApiResponse<ResData>
) => {
  const { treeUID } = req.query;

  if (!treeUID) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ msg: "Could not find treeUID!", tree: {} });
  }

  const foundTree = await getOrSetCache(`trees:${treeUID}`, async () => {
    const tree = await TreeClient.findUnique({
      where: { tree_uid: treeUID as string },
    });
    return tree as Tree;
  });

  if (!foundTree) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ msg: `Could not find any trees with uid:${treeUID}.`, tree: {} });
  }

  return res.status(StatusCodes.OK).json({
    msg: `Succesfully found tree with uid:${treeUID}`,
    tree: foundTree,
  });
};

export default getTreeByUID;
