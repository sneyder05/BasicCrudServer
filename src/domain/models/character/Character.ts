import { Column, Entity, Index, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity({
    name: 'character'
})
export class Character {
    @ObjectIdColumn()
    public id!: ObjectID;

    @Index({ unique: true })
    @Column()
    public name!: string;

    @Column()
    public weight!: number;

    @Column()
    public colorHair!: string;

    @Column()
    public originPlanet!: string;

    constructor(id: ObjectID | null, name: string, weight: number, colorHair: string, originPlanet: string) {
        if (id) {
            this.id = id;
        }

        this.name = name;
        this.weight = weight;
        this.colorHair = colorHair;
        this.originPlanet = originPlanet;
    }
}