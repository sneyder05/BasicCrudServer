import { Character } from 'domain/models';
import { UpdateCharacterRequestIn } from 'requests';
import { Inject, Service } from 'typedi';
import { Utilities } from 'utils';
import { SaveCharacterRepository } from '../repository';

@Service()
export class UpdateCharacterController {
    @Inject()
    private addCharacterRepository!: SaveCharacterRepository;

    @Inject()
    private utilities!: Utilities;

    public async update(data: UpdateCharacterRequestIn): Promise<Character> {
        return this.addCharacterRepository.save(this.tranformDataToCharacter(data));
    }

    private tranformDataToCharacter(data: UpdateCharacterRequestIn): Character {
        return new Character(
            this.utilities.toObjectId(data.id),
            data.name,
            data.weight,
            data.colorHair,
            data.originPlanet
        );
    }
}