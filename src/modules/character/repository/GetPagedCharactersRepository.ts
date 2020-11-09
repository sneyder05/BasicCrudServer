import { Character } from 'domain/models';
import { PaginationResult } from 'dto';
import { GenericObject } from 'moleculer';
import { CharacterRepository } from 'repositories';
import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions/decorators/InjectRepository';

@Service()
export class GetPagedCharactersRepository {
    @InjectRepository(Character)
    private characterRepository!: CharacterRepository;

    public async get(name: string, originPlanet: string, page: number, records: number): Promise<PaginationResult> {
        const filters = [];
        const where: GenericObject = {};

        if (name) {
            filters.push({ name: { '$regex': name, '$options': 'i' } });
        }

        if (originPlanet) {
            filters.push({ uri: { '$regex': originPlanet, '$options': 'i' } });
        }

        if (filters.length) {
            where.$or = filters;
        }

        const [ characters, charactersQty ] = await this.characterRepository.findAndCount({
            where: {
                ...where
            },
            skip: (page - 1) * records,
            take: records
        });

        return new PaginationResult(charactersQty, records, page, characters);
    }
}