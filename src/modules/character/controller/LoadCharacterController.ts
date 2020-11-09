import { Character } from 'domain/models';
import { Inject, Service } from 'typedi';
import { LoadCharacterRepository } from '../repository';

@Service()
export class LoadCharacterController {
    @Inject()
    private loadCharacterRepository!: LoadCharacterRepository;

    public async load(id: string): Promise<Character> {
        return this.loadCharacterRepository.load(id);
    }
}