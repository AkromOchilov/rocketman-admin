import { Store } from "src/modules/store/entities/store.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  category_name: string;

  @Column()
  status: boolean;

  @OneToMany(() => Store, (store: Store) => store.category)
  stores: Store[]
}
