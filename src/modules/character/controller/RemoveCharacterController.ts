import { Inject, Service } from 'typedi';
import { RemoveCharacterRepository } from '../repository';

@Service()
export class RemoveCharacterController {
    @Inject()
    private removeCharacterRepository!: RemoveCharacterRepository;

    public async remove(id: string): Promise<void> {
        await this.removeCharacterRepository.remove(id);
    }
}