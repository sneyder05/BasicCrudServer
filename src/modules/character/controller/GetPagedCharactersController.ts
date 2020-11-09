import { PaginationResult } from 'dto';
import { Inject, Service } from 'typedi';
import { GetPagedCharactersRepository } from '../repository';

@Service()
export class GetPagedCharactersController {
    @Inject()
    private charactersRepository!: GetPagedCharactersRepository;

    public async get(name: string, originPlanet: string, page: number, records: number): Promise<PaginationResult> {
        const paginatedCharacters = await this.charactersRepository.get(name, originPlanet, page, records);

        return paginatedCharacters;
    }
}