import TYPES from '../../constant/types';
import { IHeroService } from '../../interface/service/IHeroService';
import Hero from '../../entities/hero';
import { IHeroRepository } from '../../interface/repository/IHeroRepository';
import { inject, injectable } from 'inversify';
@injectable()
export class HeroService implements IHeroService {
    @inject(TYPES.HeroRepository)
    private _iHeroRepository: IHeroRepository;
    
    getAllHeroes(): Hero[] {
        return this._iHeroRepository.getAllHeroes();
    }
    getHero(id: number): Hero {
        return this._iHeroRepository.getHero(id);
    }
    addHero(hero: Hero) {
        return this._iHeroRepository.addHero(hero);
    }
    updateHero(hero: Hero) {
        return this._iHeroRepository.updateHero(hero);
    }
    deleteHero(hero: Hero) {
        return this._iHeroRepository.deleteHero(hero);
    }

}