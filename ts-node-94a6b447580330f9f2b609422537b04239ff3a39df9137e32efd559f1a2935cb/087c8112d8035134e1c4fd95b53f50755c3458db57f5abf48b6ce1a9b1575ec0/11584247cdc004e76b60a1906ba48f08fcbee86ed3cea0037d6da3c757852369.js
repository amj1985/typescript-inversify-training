"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../constant/types");
const inversify_1 = require("inversify");
let HeroService = class HeroService {
    getAllHeroes() {
        return this._iHeroRepository.getAllHeroes();
    }
    getHero(id) {
        return this._iHeroRepository.getHero(id);
    }
    addHero(hero) {
        return this._iHeroRepository.addHero(hero);
    }
    updateHero(hero) {
        return this._iHeroRepository.updateHero(hero);
    }
    deleteHero(hero) {
        return this._iHeroRepository.deleteHero(hero);
    }
};
__decorate([
    inversify_1.inject(types_1.default.HeroRepository)
], HeroService.prototype, "_iHeroRepository", void 0);
HeroService = __decorate([
    inversify_1.injectable()
], HeroService);
exports.HeroService = HeroService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYWRyaS9Fc2NyaXRvcmlvL1Byb2plY3RzL215Q2x1Yi9yZXN0QVBJL3NyYy9kb21haW4vaW1wbGVtZW50YXRpb24vc2VydmljZS9oZXJvU2VydmljZS50cyIsInNvdXJjZXMiOlsiL2hvbWUvYWRyaS9Fc2NyaXRvcmlvL1Byb2plY3RzL215Q2x1Yi9yZXN0QVBJL3NyYy9kb21haW4vaW1wbGVtZW50YXRpb24vc2VydmljZS9oZXJvU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLGdEQUF5QztBQUl6Qyx5Q0FBK0M7QUFFL0MsSUFBYSxXQUFXLEdBQXhCO0lBSVcsWUFBWTtRQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUNNLE9BQU8sQ0FBQyxFQUFVO1FBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDTSxPQUFPLENBQUMsSUFBVTtRQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQ00sVUFBVSxDQUFDLElBQVU7UUFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUNNLFVBQVUsQ0FBQyxJQUFVO1FBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xELENBQUM7Q0FFSixDQUFBO0FBbEJHO0lBREMsa0JBQU0sQ0FBQyxlQUFLLENBQUMsY0FBYyxDQUFDO3FEQUNhO0FBRmpDLFdBQVc7SUFEdkIsc0JBQVUsRUFBRTtHQUNBLFdBQVcsQ0FvQnZCO0FBcEJZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRZUEVTIGZyb20gJy4uLy4uL2NvbnN0YW50L3R5cGVzJztcclxuaW1wb3J0IHsgSUhlcm9TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL3NlcnZpY2UvSUhlcm9TZXJ2aWNlJztcclxuaW1wb3J0IEhlcm8gZnJvbSAnLi4vLi4vZW50aXRpZXMvaGVybyc7XHJcbmltcG9ydCB7IElIZXJvUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZS9yZXBvc2l0b3J5L0lIZXJvUmVwb3NpdG9yeSc7XHJcbmltcG9ydCB7IGluamVjdCwgaW5qZWN0YWJsZSB9IGZyb20gJ2ludmVyc2lmeSc7XHJcbkBpbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhlcm9TZXJ2aWNlIGltcGxlbWVudHMgSUhlcm9TZXJ2aWNlIHtcclxuICAgIEBpbmplY3QoVFlQRVMuSGVyb1JlcG9zaXRvcnkpXHJcbiAgICBwcml2YXRlIF9pSGVyb1JlcG9zaXRvcnk6IElIZXJvUmVwb3NpdG9yeTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0QWxsSGVyb2VzKCk6IEhlcm9bXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lIZXJvUmVwb3NpdG9yeS5nZXRBbGxIZXJvZXMoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRIZXJvKGlkOiBudW1iZXIpOiBIZXJvIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faUhlcm9SZXBvc2l0b3J5LmdldEhlcm8oaWQpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGFkZEhlcm8oaGVybzogSGVybykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pSGVyb1JlcG9zaXRvcnkuYWRkSGVybyhoZXJvKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyB1cGRhdGVIZXJvKGhlcm86IEhlcm8pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faUhlcm9SZXBvc2l0b3J5LnVwZGF0ZUhlcm8oaGVybyk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVsZXRlSGVybyhoZXJvOiBIZXJvKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lIZXJvUmVwb3NpdG9yeS5kZWxldGVIZXJvKGhlcm8pO1xyXG4gICAgfVxyXG5cclxufSJdfQ==