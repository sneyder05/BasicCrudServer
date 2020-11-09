import { GetPagedCharactersController } from 'modules/character/controller/GetPagedCharactersController';
import { Context, Service as MolecularService } from 'moleculer';
import { GetPagedCharactersRequestIn, GetPagedCharactersValidator } from 'requests/character/GetPagedCharactersRequest';
import Container from 'typedi';
import { AppError, ResponseMessage } from 'types';
import { ResponseMsg } from 'utils/ResponseMsg';

const { Service, Action } = require('moleculer-decorators');
const responseMsg = Container.get(ResponseMsg);

@Service({
    name: 'character',
    version: 1
})
export default class CharacterEntry extends MolecularService {
    @Action({
        rest: {
            method: 'GET',
            path: '/list'
        },
        params: GetPagedCharactersValidator
    })
    public async list(ctx: Context<GetPagedCharactersRequestIn>): Promise<ResponseMessage> {
        try {
            const { name, originPlanet, page, records } = ctx.params;

            const result = await Container.get(GetPagedCharactersController).get(name, originPlanet, page, records);

            return responseMsg.withData(responseMsg.Success, result);
        } catch (error) {
            throw AppError.get(error);
        }

    }
}