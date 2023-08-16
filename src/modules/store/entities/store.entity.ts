import { Category } from "src/modules/category/entities/category.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Store {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  store_name: string;

  @Column()
  phone_number: number

  @Column()
  address: string

  @Column()
  status: boolean

  @ManyToOne(()=> Category, category=>category.stores)
  @JoinColumn({name: 'category_id'})
  category: Category;
}
