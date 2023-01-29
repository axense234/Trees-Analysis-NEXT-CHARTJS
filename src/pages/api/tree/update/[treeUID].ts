// TS
import TreeClient from "@/db/postgres";
import { ResData } from "@/index";
import { deleteCache, setCache } from "@/utils/redis";
// Other
import { StatusCodes } from "http-status-codes";
// Next
import { NextApiRequest, NextApiResponse } from "next";

const updateTreeByUID = async (
  req: NextApiRequest,
  res: NextApiResponse<ResData>
) => {
  const { treeUID } = req.query;
  const treeBody = req.body;

  if (!treeUID) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ msg: "Please enter an treeUID!", tree: {} });
  }

  const updatedTree = await TreeClient.update({
    where: { tree_uid: treeUID as string },
    data: { ...treeBody },
  });

  if (!updatedTree) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      msg: "Please enter a valid uid or a valid tree body!",
      tree: {},
    });
  }

  await deleteCache("trees");
  await setCache(`trees:${treeUID}`, updatedTree);

  return res.status(StatusCodes.OK).json({
    msg: `Successfully updated tree with uid:${treeUID}.`,
    tree: updatedTree,
  });
};

export default updateTreeByUID;
