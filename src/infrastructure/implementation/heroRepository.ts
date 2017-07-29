import Hero from '../../domain/entities/hero';
import { IHeroRepository } from '../../domain/interface/repository/IHeroRepository';
import { injectable } from 'inversify';
const HeroesContext = require('../context/data');

@injectable()
export class HeroRepository implements IHeroRepository {

    getAllHeroes(): Hero[] {
        return HeroesContext;
    }
    getHero(id: number): Hero {
        return HeroesContext.find(hero => hero.id == id);
    }
    addHero(hero: Hero) {
        HeroesContext.push(hero);
    }
    updateHero(hero: Hero) {
        let index = HeroesContext.findIndex(item => item.id === hero.getId());
        HeroesContext.splice(index, 0, hero);
    }
    deleteHero(hero: Hero) {
        let index = HeroesContext.findIndex(item => item.id === hero.getId());
        HeroesContext.splice(index, 1, hero);
    }
}
