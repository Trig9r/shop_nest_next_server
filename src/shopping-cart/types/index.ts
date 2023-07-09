import { ApiProperty } from '@nestjs/swagger';

class ShoppingCartItem {
  @ApiProperty({ example: 1 })
  partId: number;

  @ApiProperty({ example: 4442 })
  price: number;

  @ApiProperty({ example: 7 })
  in_stock: number;

  @ApiProperty({ example: 0 })
  count: number;

  @ApiProperty({ example: 4442 })
  total_price: number;

  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Northwest' })
  boiler_manufacturer: string;

  @ApiProperty({ example: 'Sensor' })
  parts_manufacturer: string;

  @ApiProperty({
    example:
      'https://loremflickr.com/640/480/technics?random=546520003235565641442122538398',
  })
  image: string;

  @ApiProperty({ example: 'Quasi ut.' })
  name: string;

  @ApiProperty({ example: '2023-06-28T09:39:19.243Z' })
  updatedAt: string;

  @ApiProperty({ example: '2023-06-28T09:39:19.243Z' })
  createdAt: string;
}

export class GetAllResponse extends ShoppingCartItem {}
export class AddtoCartResponse extends ShoppingCartItem {}

class UpdateCount {
  @ApiProperty({ example: 1 })
  count: number;
}
export class UpdateCountRequest extends UpdateCount {}
export class UpdateCountResponse extends UpdateCount {}

class TotalPrice {
  @ApiProperty({ example: 11000 })
  total_price: number;
}
export class TotalPriceRequest extends TotalPrice {}
export class TotalPriceResponse extends TotalPrice {}
