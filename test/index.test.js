const request = require("supertest");
const express = require("express");

// Mock Express app
const app = express();
app.get("/", (req, res) => {
  res.send("Hello from Node.js!");
});

describe("GET /", () => {
  it("should respond with 'Hello from Node.js!'", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello from Node.js!");
  });
});
