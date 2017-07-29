import {
    controller, httpGet, httpPost, httpPut, httpDelete
} from 'inversify-express-utils';
import { injectable, inject } from 'inversify';
import { IHeroService } from '../../domain/interface/service/IHeroService';
import Hero from '../../domain/entities/hero';
import { Request } from 'express';
import TYPES from '../../domain/constant/types';

@injectable()
@controller('/api/hero')
export class HeroController {
    private _iHeroService: IHeroService;
    constructor( @inject(TYPES.HeroService) _iHeroService: IHeroService) {
        this._iHeroService = _iHeroService;
    }

    @httpGet('/')
    public getHeroes(): Hero[] {
        return this._iHeroService.getAllHeroes();
    }
    @httpGet('/:id')
    public getUser(request: Request): Hero {
        return this._iHeroService.getHero(request.params.id);
    }
    @httpPut('/:hero')
    public updateHero(request: Request): Hero {
        return this._iHeroService.updateHero(request.params.hero);
    }
    @httpDelete('/:id')
    public deleteHero(request: Request): Hero {
        return this._iHeroService.deleteHero(request.params.id);
    }
}
