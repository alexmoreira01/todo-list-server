"use strict";

require("dotenv/config");
var _app = require("./app");
const port = process.env.PORT || 3333;
_app.app.listen(port, () => console.log("Server is running!", port));