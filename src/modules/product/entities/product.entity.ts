import { ProductCategory } from "src/modules/product_category/entities/product_category.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  product_name: string;

  @Column()
  product_description: string

  @Column()
  product_image: string

  @Column()
  product_price: number;

  @Column()
  status: boolean;

  @ManyToOne(()=> ProductCategory, product_category=>product_category.products)
  @JoinColumn({name: 'product_id'})
  product_category: ProductCategory;
}
