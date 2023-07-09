import { faker } from '@faker-js/faker';
import { ApiProperty } from '@nestjs/swagger';
import { Op } from 'sequelize';

class BoilerParts {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: faker.lorem.sentence(2) })
  boiler_manufacturer: string;

  @ApiProperty({ example: 12345 })
  price: number;

  @ApiProperty({ example: faker.lorem.sentence(2) })
  parts_manufacturer: string;

  @ApiProperty({ example: faker.internet.password() })
  vendor_code: string;

  @ApiProperty({ example: faker.lorem.word() })
  name: string;

  @ApiProperty({ example: faker.lorem.sentence() })
  description: string;

  @ApiProperty({ example: faker.lorem.sentence() })
  compatibility: string;

  @ApiProperty({ example: faker.image.urlLoremFlickr({ category: 'city' }) })
  images: string;

  @ApiProperty({ example: 5 })
  in_stock: number;

  @ApiProperty({ example: true })
  bestseller: boolean;

  @ApiProperty({ example: false })
  new: boolean;

  @ApiProperty({ example: 445 })
  popularity: number;

  @ApiProperty({ example: '2023-06-27T13:54:41.000Z' })
  createdAt: string;

  @ApiProperty({ example: '2023-06-27T13:54:41.000Z' })
  updatedAt: string;
}

export class PaginateAndFilterResponse {
  @ApiProperty({ example: 33 })
  count: number;

  @ApiProperty({ type: BoilerParts, isArray: true })
  rows: BoilerParts;
}

export class Bestsellers extends BoilerParts {
  @ApiProperty({ example: true })
  bestseller: boolean;
}

export class GetBestsellersResponse extends PaginateAndFilterResponse {
  @ApiProperty({ example: 11 })
  count: number;

  @ApiProperty({ type: Bestsellers, isArray: true })
  rows: Bestsellers;
}

export class NewParts extends BoilerParts {
  @ApiProperty({ example: true })
  new: boolean;
}

export class GetNewResponse extends PaginateAndFilterResponse {
  @ApiProperty({ example: 11 })
  count: number;

  @ApiProperty({ type: NewParts, isArray: true })
  rows: NewParts;
}

class SearchByLetterResponse extends BoilerParts {
  @ApiProperty({ example: 'Lelogher' })
  search: string;
}
export class SearchResponse extends PaginateAndFilterResponse {
  @ApiProperty({ type: SearchByLetterResponse, isArray: true })
  rows: SearchByLetterResponse;
}
export class SearchRequest {
  @ApiProperty({ example: 'le' })
  search: string;
}

export class GetByNameResponse extends BoilerParts {
  @ApiProperty({ example: 'Bosh' })
  name: string;
}
export class GetByNameRequest {
  @ApiProperty({ example: 'Bosh' })
  name: string;
}

export class FindOneResponse extends BoilerParts {}

export interface BoilerPartsQueryProps {
  limit: string;
  offset: string;
  boiler: string | undefined;
  parts: string | undefined;
  priceFrom: string | undefined;
  priceTo: string | undefined;
}

export interface BoilerPartsFilterProps {
  boiler_manufacturer: string | undefined;
  parts_manufacturer: string | undefined;
  price: { [Op.between]: number[] };
}
