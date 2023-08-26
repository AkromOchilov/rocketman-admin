import { Complains } from "src/modules/complain/entities/complain.entity";
import { Order } from "src/modules/order/entities/order.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users extends BaseEntity {
  @PrimaryColumn({type:  "bigint"})
  id: number;

  @Column({ type: "varchar", unique: true })
  username: string;

  @Column({ type: "varchar" })
  lastname: string;

  @Column({ type: "bigint" })
  phone_number: number

  @OneToMany(() => Complains, (complain)=> complain.user)
  complains: Complains[]

  @OneToMany(() => Order, order=>order.user)
  orders: Order[]
}

