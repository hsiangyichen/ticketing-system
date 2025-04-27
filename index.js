import express from "express";
import { connectRedis, subscriber } from "./services/redisClient.js";

const app = express();
const PORT = 8081;

// Connect to Redis
connectRedis().catch(console.error);

// Subscribe to a channel
subscriber.subscribe("Movie Catalog Service", (message) => {
  console.log(
    'Received a message from "Movie Catalog Service" channel:',
    message
  );
});

console.log("Subscriber service is waiting for messages...");

app.get("/", (req, res) => {
  res.send("Welcome to the Ticketing Service!");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
