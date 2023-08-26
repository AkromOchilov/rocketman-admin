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
  phone_number: string

  @Column()
  address: string

  @Column()
  longitude: string;

  @Column()
  latitude: string;

  @Column()
  status: boolean

  @ManyToOne(() => Category, category => category.stores)
  @JoinColumn({ name: "category_id" })
  category: Category;

  @OneToMany(() => ProductCategory, product_category => product_category.store)
  productCategories: ProductCategory[]
}
