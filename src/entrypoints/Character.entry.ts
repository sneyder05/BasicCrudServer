import {
    AddCharacterController, GetPagedCharactersController, LoadCharacterController
} from 'modules/character/controller';
import { Context, Service as MolecularService } from 'moleculer';
import {
    AddCharacterRequestIn, AddCharacterValidator, GetPagedCharactersRequestIn,
     GetPagedCharactersValidator, LoadCharacterRequestIn, LoadCharacterValidator
} from 'requests';
import Container from 'typedi';
import { AppError, ResponseMessage } from 'types';
import { ResponseMsg } from 'utils';

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

    @Action({
        rest: {
            method: 'POST',
            path: '/add'
        },
        params: AddCharacterValidator
    })
    public async add(ctx: Context<AddCharacterRequestIn>): Promise<ResponseMessage> {
        try {
            const characterData = ctx.params;

            const character = await Container.get(AddCharacterController).add(characterData);

            return responseMsg.withData(responseMsg.Success, character);
        } catch (error) {
            throw AppError.get(error);
        }
    }

    @Action({
        rest: {
            method: 'GET',
            path: '/load/:id'
        },
        params: LoadCharacterValidator
    })
    public async load(ctx: Context<LoadCharacterRequestIn>): Promise<ResponseMessage> {
        try {
            const { id } = ctx.params;

            const character = await Container.get(LoadCharacterController).load(id);

            return responseMsg.withData(responseMsg.Success, character);
        } catch (error) {
            throw AppError.get(error);
        }
    }
}