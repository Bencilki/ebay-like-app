import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsString, Length, MinLength } from 'class-validator'
import { Url } from 'url';

@Entity()
export default class Advertisement extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Length(2, 15)
  @Column('text')
  title: string

  @IsString()
  @MinLength(5,{
    message:"Description is too short"
  })
  @Column('text')
  description: string

//   @IsNumber()
  @Column('integer')
  price: String

//   @IsUrl()
  @Column('text', {nullable:true})
  picture: Url
}