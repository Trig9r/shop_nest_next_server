import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class MakePaymentDto {
  @ApiProperty({ example: 120 })
  @IsNotEmpty()
  readonly amount: number;
}
