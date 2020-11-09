import { Character } from 'domain/models';
import { CharacterRepository } from 'repositories';
import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions/decorators/InjectRepository';
import { CharacterNotFoundError } from 'types';

@Service()
export class LoadCharacterRepository {
    @InjectRepository(Character)
    private characterRepository!: CharacterRepository;

    public async load(id: string): Promise<Character> {
        try {
            return await this.characterRepository.findOneOrFail(id);
        } catch (error) {
            throw new CharacterNotFoundError();
        }
    }
}