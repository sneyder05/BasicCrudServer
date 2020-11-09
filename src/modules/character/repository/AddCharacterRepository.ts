import { Character } from 'domain/models';
import { CharacterRepository } from 'repositories';
import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions/decorators/InjectRepository';
import { MongoDuplicateKeyIndex, MongoErrorCode } from 'types';
import { MongoErrorParser } from 'utils/MongoErrorParser';

@Service()
export class AddCharacterRepository {
    @InjectRepository(Character)
    private characterRepository!: CharacterRepository;

    public async add(character: Character): Promise<Character> {
        try {
            return await this.characterRepository.save(character);
        } catch (error) {
            if (MongoErrorParser.isParseable(error) && error.code === MongoErrorCode.DUPLICATE_KEY_INDEX) {
                throw new MongoDuplicateKeyIndex();
            }

            throw error;
        }
    }
}