import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsString, Length, MinLength, IsNumber, IsUrl } from 'class-validator'
import { Url } from 'url';

@Entity()
export default class Advertisement extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Length(5, 15)
  @Column('text')
  title: string

  @IsString()
  @MinLength(10,{
    message:"Description is too short"
  })
  @Column('text')
  description: string

  @IsNumber()
  @Column('money')
  price: Number

  @IsUrl()
  @Column('text')
  picture: Url
}