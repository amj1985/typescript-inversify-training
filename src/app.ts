import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import ContainerBuilder from './ioc/iocContainer';
import { InversifyExpressServer } from 'inversify-express-utils';
// Creates and configures an ExpressJS web server.



let containerBuilder = new ContainerBuilder();
// start the server
let container = containerBuilder.build();
let server = new InversifyExpressServer(container);
server.setConfig((app) => {
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
});
let app = server.build();
app.listen(3000);
console.log('Server started on port 3000 :)');

