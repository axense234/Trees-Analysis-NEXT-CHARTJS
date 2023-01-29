// TS
import { ResData } from "@/index";
// Prisma
import TreeClient from "@/db/postgres";
// Other
import { StatusCodes } from "http-status-codes";
// Next
import { NextApiRequest, NextApiResponse } from "next";
import { deleteCache, setCache } from "@/utils/redis";

const deleteTreeByUID = async (
  req: NextApiRequest,
  res: NextApiResponse<ResData>
) => {
  const { treeUID } = req.query;

  if (!treeUID) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ msg: "Please enter a treeUID!", tree: {} });
  }

  const deletedTree = await TreeClient.delete({
    where: { tree_uid: treeUID as string },
  });

  if (!deletedTree) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ msg: `Could not find tree with uid:${treeUID}!`, tree: {} });
  }

  await deleteCache("trees");
  await deleteCache(`trees:${treeUID}`);

  return res.status(StatusCodes.OK).json({
    msg: `Successfully deleted tree with uid:${treeUID}!`,
    tree: deletedTree,
  });
};

export default deleteTreeByUID;
