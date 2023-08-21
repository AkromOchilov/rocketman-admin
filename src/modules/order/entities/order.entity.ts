import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  payment_type: string;

  @Column()
  longitude: string;

  @Column()
  latitude: string;
}
