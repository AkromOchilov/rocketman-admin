import { Complains } from "src/modules/complain/entities/complain.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", unique: true })
  username: string;

  @Column({ type: "varchar" })
  lastname: string;

  @Column({ type: "bigint" })
  phone_number: number

  @OneToMany(() => Complains, (complain)=> complain.user)
  complains: Complains[]
}

