import { PrismaClient } from "@prisma/client";
const prismaClient = new PrismaClient();

const TreeClient = prismaClient.tree;

const connectToPostgres = async () => {
  await prismaClient.$connect();
};

connectToPostgres();

export default TreeClient;
