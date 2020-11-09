import { Character } from 'domain/models';
import { AddCharacterRequestIn } from 'requests';
import { Inject, Service } from 'typedi';
import { SaveCharacterRepository } from '../repository';

@Service()
export class AddCharacterController {
    @Inject()
    private addCharacterRepository!: SaveCharacterRepository;

    public async add(data: AddCharacterRequestIn): Promise<Character> {
        return this.addCharacterRepository.save(this.tranformDataToCharacter(data));
    }

    private tranformDataToCharacter(data: AddCharacterRequestIn): Character {
        return new Character(null, data.name, data.weight, data.colorHair, data.originPlanet);
    }
}