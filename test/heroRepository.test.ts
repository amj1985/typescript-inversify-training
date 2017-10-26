import 'reflect-metadata';
import { HeroRepository } from '../src/infrastructure/implementation/heroRepository';
import * as mocha from 'mocha';
import * as chai from 'chai';


const expect = chai.expect;
var should = chai.should();
describe('GET api/heroes', () => {
    var repository;

    beforeEach(() => {
        repository = new HeroRepository();
    });

    it('should not to be undefined', () => {
        should.exist(repository);
    });
})

