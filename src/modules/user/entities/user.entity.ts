export class User {}
import { Product } from "src/modules/product/entities/product.entity";
import { Store } from "src/modules/store/entities/store.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProductCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  product_category_name: string;

  @Column()
  product_category_count: string;

  @Column()
  product_category_image: string;

  @Column()
  Product_category_image_link: string;

  @Column()
  status: boolean

  @ManyToOne(()=> Store, store=>store.product_category)
  @JoinColumn({name: 'product_category_id'})
  store: Store;

  @OneToMany(()=>Product, product=>product.product_category)
  products: Product[]
}
