import TYPES from '../../constant/types';
import { IHeroService } from '../../interface/service/IHeroService';
import Hero from '../../entities/hero';
import { IHeroRepository } from '../../interface/repository/IHeroRepository';
import { inject, injectable } from 'inversify';
@injectable()
export class HeroService implements IHeroService {
    @inject(TYPES.HeroRepository)
    private _iHeroRepository: IHeroRepository;

    public getAllHeroes(): Hero[] {
        return this._iHeroRepository.getAllHeroes();
    }
    public getHero(id: number): Hero {
        return this._iHeroRepository.getHero(id);
    }
    public addHero(hero: Hero) {
        return this._iHeroRepository.addHero(hero);
    }
    public updateHero(hero: Hero) {
        return this._iHeroRepository.updateHero(hero);
    }
    public deleteHero(hero: Hero) {
        return this._iHeroRepository.deleteHero(hero);
    }

}