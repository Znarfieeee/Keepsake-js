import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    email!: string;

    @Column()
    title!: string;

    @Column()
    firstName!: string;

    @Column()
    lastName!: string;

    @Column()
    passwordHash!: string;

    @Column()
    role!: string;
}