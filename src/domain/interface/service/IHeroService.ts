import Hero from '../../entities/hero';

export interface IHeroService {
    getAllHeroes() : Hero[];
    getHero(id:number) : Hero;
    addHero(hero: Hero);
    updateHero(hero: Hero);
    deleteHero(hero: Hero);
}