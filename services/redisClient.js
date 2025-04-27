import { createClient } from "redis";

export const subscriber = createClient();

/* ---------------------------- Connect to Redis ---------------------------- */
export async function connectRedis() {
  try {
    await subscriber.connect();
    console.log("Connected to Redis.");
  } catch (error) {
    console.error("Redis connection error:", error);
  }
}
