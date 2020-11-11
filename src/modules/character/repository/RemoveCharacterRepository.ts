import { Character } from 'domain/models';
import { CharacterRepository } from 'repositories';
import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions/decorators/InjectRepository';
import { CharacterNotFoundError } from 'types';

@Service()
export class RemoveCharacterRepository {
    @InjectRepository(Character)
    private characterRepository!: CharacterRepository;

    public async remove(id: string): Promise<void> {
        try {
            const character = await this.characterRepository.findOneOrFail(id);

            await this.characterRepository.remove(character);
        } catch (error) {
            throw new CharacterNotFoundError();
        }
    }
}