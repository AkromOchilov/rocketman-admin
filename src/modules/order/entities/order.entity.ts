import { IsEnum } from "class-validator";
import { Driver } from "src/modules/driver/entities/driver.entity";
import { Product } from "src/modules/product/entities/product.entity";
import { Users } from "src/modules/user/entities/user.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

enum order_status {
  BUYURTMA = "buyurtma",
  QABUL = "qabul",
  YETKAZISH = "yetkazish",
  YAKUN = "yakun",
  BEKOR = "bekor"
}
@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @IsEnum(order_status)
  status: order_status

  @Column()
  payment_type: string;

  @Column()
  longitude: string;

  @Column()
  latitude: string;

  @Column()
  created_at: Date

  @ManyToOne(()=>Users, user=>user.orders)
  @JoinColumn({name: 'user_id'})
  user: Users

  @ManyToOne(() => Driver, driver => driver.orders)
  @JoinColumn({ name: 'driver_id' })
  driver: Driver;

  @ManyToMany(() => Product, product => product.orders)
  @JoinTable()
  products: Product[];
}
