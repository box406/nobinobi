import Redis from "ioredis";

const redisUrl =
  process.env.nobinobi_redis_REDIS_URL ||
  process.env.REDIS_URL ||
  process.env.KV_URL ||
  "";

export const redis = new Redis(redisUrl, {
  maxRetriesPerRequest: 3,
  lazyConnect: true,
});
