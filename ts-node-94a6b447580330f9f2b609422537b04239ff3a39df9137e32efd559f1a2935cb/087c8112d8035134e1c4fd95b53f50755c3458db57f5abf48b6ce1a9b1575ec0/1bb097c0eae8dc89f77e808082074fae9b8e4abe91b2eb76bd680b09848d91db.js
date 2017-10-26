"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const HeroesContext = require('../context/data');
let HeroRepository = class HeroRepository {
    getAllHeroes() {
        return HeroesContext;
    }
    getHero(id) {
        return HeroesContext.find(hero => hero.id == id);
    }
    addHero(hero) {
        HeroesContext.push(hero);
    }
    updateHero(hero) {
        let index = HeroesContext.findIndex(item => item.id === hero.getId());
        HeroesContext.splice(index, 0, hero);
    }
    deleteHero(hero) {
        let index = HeroesContext.findIndex(item => item.id === hero.getId());
        HeroesContext.splice(index, 1, hero);
    }
};
HeroRepository = __decorate([
    inversify_1.injectable()
], HeroRepository);
exports.HeroRepository = HeroRepository;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYWRyaS9Fc2NyaXRvcmlvL1Byb2plY3RzL215Q2x1Yi9yZXN0QVBJL3NyYy9pbmZyYXN0cnVjdHVyZS9pbXBsZW1lbnRhdGlvbi9oZXJvUmVwb3NpdG9yeS50cyIsInNvdXJjZXMiOlsiL2hvbWUvYWRyaS9Fc2NyaXRvcmlvL1Byb2plY3RzL215Q2x1Yi9yZXN0QVBJL3NyYy9pbmZyYXN0cnVjdHVyZS9pbXBsZW1lbnRhdGlvbi9oZXJvUmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBLHlDQUF1QztBQUN2QyxNQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUdqRCxJQUFhLGNBQWMsR0FBM0I7SUFFVyxZQUFZO1FBQ2YsTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUN6QixDQUFDO0lBQ00sT0FBTyxDQUFDLEVBQVU7UUFDckIsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUNNLE9BQU8sQ0FBQyxJQUFVO1FBQ3JCLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUNNLFVBQVUsQ0FBQyxJQUFVO1FBQ3hCLElBQUksS0FBSyxHQUFHLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDdEUsYUFBYSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDTSxVQUFVLENBQUMsSUFBVTtRQUN4QixJQUFJLEtBQUssR0FBRyxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ3RFLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQ0osQ0FBQTtBQW5CWSxjQUFjO0lBRDFCLHNCQUFVLEVBQUU7R0FDQSxjQUFjLENBbUIxQjtBQW5CWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZXJvIGZyb20gJy4uLy4uL2RvbWFpbi9lbnRpdGllcy9oZXJvJztcclxuaW1wb3J0IHsgSUhlcm9SZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vZG9tYWluL2ludGVyZmFjZS9yZXBvc2l0b3J5L0lIZXJvUmVwb3NpdG9yeSc7XHJcbmltcG9ydCB7IGluamVjdGFibGUgfSBmcm9tICdpbnZlcnNpZnknO1xyXG5jb25zdCBIZXJvZXNDb250ZXh0ID0gcmVxdWlyZSgnLi4vY29udGV4dC9kYXRhJyk7XHJcblxyXG5AaW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBIZXJvUmVwb3NpdG9yeSBpbXBsZW1lbnRzIElIZXJvUmVwb3NpdG9yeSB7XHJcblxyXG4gICAgcHVibGljIGdldEFsbEhlcm9lcygpOiBIZXJvW10ge1xyXG4gICAgICAgIHJldHVybiBIZXJvZXNDb250ZXh0O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldEhlcm8oaWQ6IG51bWJlcik6IEhlcm8ge1xyXG4gICAgICAgIHJldHVybiBIZXJvZXNDb250ZXh0LmZpbmQoaGVybyA9PiBoZXJvLmlkID09IGlkKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBhZGRIZXJvKGhlcm86IEhlcm8pIHtcclxuICAgICAgICBIZXJvZXNDb250ZXh0LnB1c2goaGVybyk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdXBkYXRlSGVybyhoZXJvOiBIZXJvKSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gSGVyb2VzQ29udGV4dC5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmlkID09PSBoZXJvLmdldElkKCkpO1xyXG4gICAgICAgIEhlcm9lc0NvbnRleHQuc3BsaWNlKGluZGV4LCAwLCBoZXJvKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBkZWxldGVIZXJvKGhlcm86IEhlcm8pIHtcclxuICAgICAgICBsZXQgaW5kZXggPSBIZXJvZXNDb250ZXh0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0uaWQgPT09IGhlcm8uZ2V0SWQoKSk7XHJcbiAgICAgICAgSGVyb2VzQ29udGV4dC5zcGxpY2UoaW5kZXgsIDEsIGhlcm8pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==