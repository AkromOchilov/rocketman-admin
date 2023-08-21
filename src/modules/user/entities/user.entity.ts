<<<<<<< HEAD

import { Complains } from "src/modules/complain/entities/complain.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";


@Unique('my_unique_constraint', ['username'])
@Entity()
export class Users extends BaseEntity {
=======
<<<<<<< HEAD
import { Complains } from "src/modules/complain/entities/complain.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
=======
import { Product } from "src/modules/product/entities/product.entity";
import { Store } from "src/modules/store/entities/store.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
>>>>>>> 1bc6971668506751182d21f5fdb99052e7f7cd60

@Unique('my_unique_constraint', ['username'])
@Entity()
<<<<<<< HEAD
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
=======
export class User {
>>>>>>> b4ae96bd243c7026616599269532cc15b2b826e5
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
>>>>>>> 1bc6971668506751182d21f5fdb99052e7f7cd60
