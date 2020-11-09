import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity({
    name: 'tracks'
})
export class Character {
    @ObjectIdColumn()
    public id!: ObjectID;

    @Column()
    public name!: string;

    @Column()
    public weight!: number;

    @Column()
    public colorHair!: string;

    @Column()
    public originPlanet!: string;
}