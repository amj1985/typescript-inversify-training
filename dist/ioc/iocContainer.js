"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../domain/constant/types");
const tags_1 = require("../domain/constant/tags");
require("reflect-metadata");
const inversify_1 = require("inversify");
const inversify_express_utils_1 = require("inversify-express-utils");
const heroController_1 = require("../restApi/controllers/heroController");
const heroService_1 = require("../domain/implementation/service/heroService");
const heroRepository_1 = require("../infrastructure/implementation/heroRepository");
class ContainerBuilder {
    constructor() {
        this._container = new inversify_1.Container();
        return this;
    }
    build() {
        this._container.bind(inversify_express_utils_1.TYPE.Controller).to(heroController_1.HeroController).whenTargetNamed(tags_1.default.HeroController);
        this._container.bind(types_1.default.HeroService).to(heroService_1.HeroService);
        this._container.bind(types_1.default.HeroRepository).to(heroRepository_1.HeroRepository);
        return this._container;
    }
}
exports.default = ContainerBuilder;
