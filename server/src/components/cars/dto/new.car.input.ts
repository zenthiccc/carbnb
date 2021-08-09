import { Field, InputType, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

@InputType()
export class NewCarInput {
  @Field()
  name: string;

  @Field((type) => Int)
  @Max(1000, { message: "Daily price can't be that high!" })
  @Min(10, { message: "Daily price can't be that low!" })
  dailyPrice: number;

  @Field((type) => Int)
  @Max(20000, { message: "Monthly price can't be that high!" })
  @Min(1500, { message: "Monthly price can't be that low!" })
  monthlyPrice: number;

  @Field()
  mileage: string;

  @Field()
  gas: string;

  @Field()
  gearType: string;

  @Field()
  thumbnailUrl: string;
}
