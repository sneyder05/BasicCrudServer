import { Character } from 'domain/models';
import { AddCharacterRequestIn } from 'requests';
import { Inject, Service } from 'typedi';
import { AddCharacterRepository } from '../repository';

@Service()
export class AddCharacterController {
    @Inject()
    private addCharacterRepository!: AddCharacterRepository;

    public async add(data: AddCharacterRequestIn): Promise<Character> {
        return this.addCharacterRepository.add(this.tranformDataToCharacter(data));
    }

    private tranformDataToCharacter(data: AddCharacterRequestIn): Character {
        return new Character(null, data.name, data.weight, data.colorHair, data.originPlanet);
    }
}