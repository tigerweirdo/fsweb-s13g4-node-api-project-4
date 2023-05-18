require("dotenv").config();
const server = require("./server");

const port = process.env.PORT || 9001;

server.listen(port, () => {
  console.log(`listening on ${port}`);
});
