import express, { response } from "express";

// @types/express
const app = express();

/**
 get
 post
 put
 patch
 delete
*/

app.get("/test", (request, response) => {
  return response.send("Olá NLW get_test");
});

app.post("/test-post", (request, response) => {
  return response.send("Olá NLW method post test");
});

// http://localhost:3000
app.listen(3000, () => console.log("Server is running NLW"));