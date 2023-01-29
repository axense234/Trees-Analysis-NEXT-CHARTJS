// Redis
import redisClient from "@/db/redis";
// TS
import { Tree } from "..";

const DEFAULT_EXP = 7200;

interface IgetOrSetCache {
  (key: string, cb: () => Promise<Tree[]> | Promise<Tree>): Promise<any>;
}

interface IsetCache {
  (key: string, data: Tree[] | Tree): Promise<void>;
}

// GET OR SET CACHE
const getOrSetCache: IgetOrSetCache = async (key, cb) => {
  const data = await redisClient.get(key);
  if (data !== null) {
    console.log("Cache Hit");
    return JSON.parse(data);
  }
  const freshData = await cb();
  redisClient.setEx(key, DEFAULT_EXP, JSON.stringify(freshData));
  return freshData;
};

// SET CACHE
const setCache: IsetCache = async (key, data) => {
  await redisClient.setEx(key, DEFAULT_EXP, JSON.stringify(data));
};

// DELETE CACHE
const deleteCache = async (key: string) => {
  await redisClient.del(key);
};

export { deleteCache, setCache, getOrSetCache };
