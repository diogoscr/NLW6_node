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

/** 
 * Tipos de params
 * 
 * Route params (produtos/123123)
 * Query params (produtos?name=teclado&description=nice)
 * Body params (post,put,patch)
 * 
 */

app.get("/test", (request, response) => {

  // Request -> entrando
  // Response -> saindo
  return response.send("Olá NLW get_test");
});

app.post("/test-post", (request, response) => {
  return response.send("Olá NLW method post test");
});

// http://localhost:3000
app.listen(3000, () => console.log("Server is running NLW"));