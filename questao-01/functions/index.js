const functions = require("firebase-functions");

const app = require("express")();

app.get("/", (_req, res) => {
  return res.status(200).json({message: "tudo certo"});
});

exports.api = functions.https.onRequest(app);
