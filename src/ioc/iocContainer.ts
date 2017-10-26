import TYPES from '../domain/constant/types';
import TAGS from '../domain/constant/tags';
import 'reflect-metadata';
import { ConnectionOptions } from 'tls';
import { Container } from 'inversify';
import { interfaces, InversifyExpressServer, TYPE } from 'inversify-express-utils';
import { HeroController } from '../restApi/controllers/heroController';
import { HeroService } from '../domain/implementation/service/heroService';
import { IHeroService } from '../domain/interface/service/IHeroService';
import { HeroRepository } from '../infrastructure/implementation/heroRepository';
import { IHeroRepository } from '../domain/interface/repository/IHeroRepository';


class ContainerBuilder {

    private _container: Container;

    constructor() {
        this._container = new Container();
        return this;
    }
    build() {
        this._container.bind<interfaces.Controller>(TYPE.Controller).to(HeroController).whenTargetNamed(TAGS.HeroController);
        this._container.bind<IHeroService>(TYPES.HeroService).to(HeroService);
        this._container.bind<IHeroRepository>(TYPES.HeroRepository).to(HeroRepository);
        return this._container;
    }

}
export default ContainerBuilder;