// Prisma
import TreeClient from "@/db/postgres";
// TS
import { ResData } from "@/index";
// Redis
import { deleteCache, setCache } from "@/utils/redis";
// Other
import { StatusCodes } from "http-status-codes";
// Next
import { NextApiRequest, NextApiResponse } from "next";

const createTree = async (
  req: NextApiRequest,
  res: NextApiResponse<ResData>
) => {
  const treeBody = req.body;

  console.log(treeBody);

  const createdTree = await TreeClient.create({ data: { ...treeBody } });

  await deleteCache("trees");
  await setCache(`trees:${createdTree.tree_uid}`, createdTree);

  return res.status(StatusCodes.CREATED).json({
    msg: `Successfully created tree with uid:${createdTree.tree_uid}!`,
    tree: createdTree,
  });
};

export default createTree;
