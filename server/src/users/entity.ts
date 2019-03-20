import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsString, MinLength, IsEmail } from 'class-validator'

@Entity()
export default class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @MinLength(1)
  @Column('text')
  firstname: string

  @IsString()
  @MinLength(1)
  @Column('text')
  lastname: string

  
  @IsEmail()
  @Column('text', {nullable:false})
  email: string

  @IsString()
  @MinLength(2)
  @Column('text', {nullable:false})
//   @Exclude({toPlainOnly:true})
  password: string

//   @IsMobilePhone()
  @MinLength(1)
  @Column('integer')
  phone: Number

}