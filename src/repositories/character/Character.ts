import { Character } from 'domain/models';
import { Service } from 'typedi';
import { EntityRepository, Repository } from 'typeorm';

@Service()
@EntityRepository(Character)
export class CharacterRepository extends Repository<Character> {}