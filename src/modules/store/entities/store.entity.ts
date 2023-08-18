import { Category } from "src/modules/category/entities/category.entity";
import { ProductCategory } from "src/modules/product_category/entities/product_category.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

  @OneToMany(()=>ProductCategory, product_category=>product_category.store)
  product_category: ProductCategory[]
}
