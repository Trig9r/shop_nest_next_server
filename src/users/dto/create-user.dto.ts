import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Кирилл' })
  @IsNotEmpty()
  readonly username: string;

  @ApiProperty({ example: 'zx5002' })
  @IsNotEmpty()
  readonly password: string;

  @ApiProperty({ example: 'debil@gmail.com' })
  @IsNotEmpty()
  readonly email: string;
}
