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
  @PrimaryGeneratedColumn()
  id: string;
}
>>>>>>> 1bc6971668506751182d21f5fdb99052e7f7cd60
