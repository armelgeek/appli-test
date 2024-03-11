/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BankrollWhereInput } from "./BankrollWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { BankrollOrderByInput } from "./BankrollOrderByInput";

@ArgsType()
class BankrollFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BankrollWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => BankrollWhereInput, { nullable: true })
  @Type(() => BankrollWhereInput)
  where?: BankrollWhereInput;

  @ApiProperty({
    required: false,
    type: [BankrollOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [BankrollOrderByInput], { nullable: true })
  @Type(() => BankrollOrderByInput)
  orderBy?: Array<BankrollOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { BankrollFindManyArgs as BankrollFindManyArgs };
