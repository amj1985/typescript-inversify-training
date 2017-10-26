import 'reflect-metadata';
import { HeroService } from '../src/domain/implementation/service/heroService';
import * as chai from 'chai';


const expect = chai.expect;
const should = require('chai').should();

describe('GET api/heroes', () => {
    var service;

    beforeEach(() => {
        service = new HeroService();
    });

    it('should not to be undefined', () => {
        should.exist(service);
    });

    it('should get back all heroes', () => {
        let heroes = service.getAllHeroes();
        should.exist(heroes).to.be.an('array');


    });
    it('should get hero by id', () => {
        let service = new HeroService();
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
        ])
    });
})

