const express = require("express");
const routers = require("./src/Routers");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use(routers);

app.listen(PORT, () => {
  console.log(`Listening to the door ${PORT}`);
});
