import { Redis } from "@upstash/redis";

// Support multiple env var naming patterns from Vercel KV Storage
function getRedisUrl(): string {
  return (
    process.env.KV_REST_API_URL ||
    process.env.UPSTASH_REDIS_REST_URL ||
    process.env.nobinobi_redis_KV_REST_API_URL ||
    process.env.nobinobi_redis_REDIS_URL ||
    ""
  );
}

function getRedisToken(): string {
  return (
    process.env.KV_REST_API_TOKEN ||
    process.env.UPSTASH_REDIS_REST_TOKEN ||
    process.env.nobinobi_redis_KV_REST_API_TOKEN ||
    process.env.nobinobi_redis_REDIS_TOKEN ||
    ""
  );
}

export const redis = new Redis({
  url: getRedisUrl(),
  token: getRedisToken(),
});
