"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const iocContainer_1 = require("./ioc/iocContainer");
const inversify_express_utils_1 = require("inversify-express-utils");
// Creates and configures an ExpressJS web server.
let containerBuilder = new iocContainer_1.default();
// start the server
let container = containerBuilder.build();
let server = new inversify_express_utils_1.InversifyExpressServer(container);
server.setConfig((app) => {
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
});
let app = server.build();
app.listen(3000);
console.log('Server started on port 3000 :)');
