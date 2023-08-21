import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Driver extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  driver_name: string;

  @Column({ type: "date" })
  birth_date: Date;

  @Column({ type: "bigint" })
  phone_number: number

  @Column({ type: "varchar", unique: true })
  car_number: string

  @Column({ type: "varchar" })
  car_type: string

  @Column({ type: "boolean", default: false })
  status: boolean
}