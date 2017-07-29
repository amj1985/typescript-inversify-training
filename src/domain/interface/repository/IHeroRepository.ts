import Hero from '../../entities/hero';

export interface IHeroRepository {
    getAllHeroes() : Hero[];
    getHero(id:number) : Hero;
    addHero(hero: Hero);
    updateHero(hero: Hero);
    deleteHero(hero: Hero);
}