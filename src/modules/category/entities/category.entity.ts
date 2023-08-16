import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Store } from "../../store/entities/store.entity";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  category_name: string;

  @Column()
  status: boolean;

  @Column()
  category_image: string;

  @Column()
  category_image_link: string;

  @OneToMany(()=>Store, store=>store.category)
  stores: Store[]
}
