import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

enum AdminRole {
  ADMIN = "admin",
  SUPER_ADMIN = "super-admin"
}

@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({
    type: "enum",
    enum: AdminRole,
    default: AdminRole.ADMIN,
  })
  role: AdminRole
}