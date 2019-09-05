// code away!
const server = require("./server.js");

port = 8000;
console.log("Server recognized");
server.listen(port, () => console.log(`Server listening on port ${port}`));