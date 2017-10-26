"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const heroService_1 = require("../src/domain/implementation/service/heroService");
const chai = require("chai");
const expect = chai.expect;
const should = require('chai').should();
describe('GET api/heroes', () => {
    var service;
    beforeEach(() => {
        service = new heroService_1.HeroService();
    });
    it('should not to be undefined', () => {
        should.exist(service);
    });
    it('should get back all heroes', () => {
        let heroes = service.getAllHeroes();
        should.exist(heroes).to.be.an('array');
    });
    it('should get hero by id', () => {
        let service = new heroService_1.HeroService();
        let hero = service.getHero(1);
        should.exist(hero).to.have.all.keys([
            'id',
            'name',
            'aliases',
            'occupation',
            'gender',
            'height',
            'hair',
            'eyes',
            'powers'
        ]);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYWRyaS9Fc2NyaXRvcmlvL1Byb2plY3RzL215Q2x1Yi9yZXN0QVBJL3Rlc3QvaGVyb1NlcnZpY2UudGVzdC50cyIsInNvdXJjZXMiOlsiL2hvbWUvYWRyaS9Fc2NyaXRvcmlvL1Byb2plY3RzL215Q2x1Yi9yZXN0QVBJL3Rlc3QvaGVyb1NlcnZpY2UudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRCQUEwQjtBQUMxQixrRkFBK0U7QUFDL0UsNkJBQTZCO0FBRzdCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDM0IsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRXhDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRTtJQUN2QixJQUFJLE9BQU8sQ0FBQztJQUVaLFVBQVUsQ0FBQztRQUNQLE9BQU8sR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztJQUNoQyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyw0QkFBNEIsRUFBRTtRQUM3QixNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDRCQUE0QixFQUFFO1FBQzdCLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRzNDLENBQUMsQ0FBQyxDQUFDO0lBQ0gsRUFBRSxDQUFDLHVCQUF1QixFQUFFO1FBQ3hCLElBQUksT0FBTyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO1FBQ2hDLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDaEMsSUFBSTtZQUNKLE1BQU07WUFDTixTQUFTO1lBQ1QsWUFBWTtZQUNaLFFBQVE7WUFDUixRQUFRO1lBQ1IsTUFBTTtZQUNOLE1BQU07WUFDTixRQUFRO1NBQ1gsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAncmVmbGVjdC1tZXRhZGF0YSc7XHJcbmltcG9ydCB7IEhlcm9TZXJ2aWNlIH0gZnJvbSAnLi4vc3JjL2RvbWFpbi9pbXBsZW1lbnRhdGlvbi9zZXJ2aWNlL2hlcm9TZXJ2aWNlJztcclxuaW1wb3J0ICogYXMgY2hhaSBmcm9tICdjaGFpJztcclxuXHJcblxyXG5jb25zdCBleHBlY3QgPSBjaGFpLmV4cGVjdDtcclxuY29uc3Qgc2hvdWxkID0gcmVxdWlyZSgnY2hhaScpLnNob3VsZCgpO1xyXG5cclxuZGVzY3JpYmUoJ0dFVCBhcGkvaGVyb2VzJywgKCkgPT4ge1xyXG4gICAgdmFyIHNlcnZpY2U7XHJcblxyXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XHJcbiAgICAgICAgc2VydmljZSA9IG5ldyBIZXJvU2VydmljZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3Nob3VsZCBub3QgdG8gYmUgdW5kZWZpbmVkJywgKCkgPT4ge1xyXG4gICAgICAgIHNob3VsZC5leGlzdChzZXJ2aWNlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdzaG91bGQgZ2V0IGJhY2sgYWxsIGhlcm9lcycsICgpID0+IHtcclxuICAgICAgICBsZXQgaGVyb2VzID0gc2VydmljZS5nZXRBbGxIZXJvZXMoKTtcclxuICAgICAgICBzaG91bGQuZXhpc3QoaGVyb2VzKS50by5iZS5hbignYXJyYXknKTtcclxuXHJcblxyXG4gICAgfSk7XHJcbiAgICBpdCgnc2hvdWxkIGdldCBoZXJvIGJ5IGlkJywgKCkgPT4ge1xyXG4gICAgICAgIGxldCBzZXJ2aWNlID0gbmV3IEhlcm9TZXJ2aWNlKCk7XHJcbiAgICAgICAgbGV0IGhlcm8gPSBzZXJ2aWNlLmdldEhlcm8oMSk7XHJcbiAgICAgICAgc2hvdWxkLmV4aXN0KGhlcm8pLnRvLmhhdmUuYWxsLmtleXMoW1xyXG4gICAgICAgICAgICAnaWQnLFxyXG4gICAgICAgICAgICAnbmFtZScsXHJcbiAgICAgICAgICAgICdhbGlhc2VzJyxcclxuICAgICAgICAgICAgJ29jY3VwYXRpb24nLFxyXG4gICAgICAgICAgICAnZ2VuZGVyJyxcclxuICAgICAgICAgICAgJ2hlaWdodCcsXHJcbiAgICAgICAgICAgICdoYWlyJyxcclxuICAgICAgICAgICAgJ2V5ZXMnLFxyXG4gICAgICAgICAgICAncG93ZXJzJ1xyXG4gICAgICAgIF0pXHJcbiAgICB9KTtcclxufSlcclxuXHJcbiJdfQ==