"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_express_utils_1 = require("inversify-express-utils");
const inversify_1 = require("inversify");
const types_1 = require("../../domain/constant/types");
let HeroController = class HeroController {
    constructor(_iHeroService) {
        this._iHeroService = _iHeroService;
    }
    getHeroes() {
        return this._iHeroService.getAllHeroes();
    }
    getUser(request) {
        return this._iHeroService.getHero(request.params.id);
    }
    updateHero(request) {
        return this._iHeroService.updateHero(request.params.hero);
    }
    deleteHero(request) {
        return this._iHeroService.deleteHero(request.params.id);
    }
};
__decorate([
    inversify_express_utils_1.httpGet('/')
], HeroController.prototype, "getHeroes", null);
__decorate([
    inversify_express_utils_1.httpGet('/:id')
], HeroController.prototype, "getUser", null);
__decorate([
    inversify_express_utils_1.httpPut('/:hero')
], HeroController.prototype, "updateHero", null);
__decorate([
    inversify_express_utils_1.httpDelete('/:id')
], HeroController.prototype, "deleteHero", null);
HeroController = __decorate([
    inversify_1.injectable(),
    inversify_express_utils_1.controller('/api/hero'),
    __param(0, inversify_1.inject(types_1.default.HeroService))
], HeroController);
exports.HeroController = HeroController;
