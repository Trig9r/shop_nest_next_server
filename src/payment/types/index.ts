import { ApiProperty } from '@nestjs/swagger';

export class MakePaymentResponse {
  @ApiProperty({ example: '2c2e2d1c-000f-5000-a000-110d11c21c41' })
  id: string;

  @ApiProperty({ example: 'pending' })
  status: string;

  @ApiProperty({ example: { value: '100', currency: 'RUB' } })
  amount: {
    value: string;
    currency: string;
  };

  @ApiProperty({ example: 'Заказ №1' })
  description: string;

  @ApiProperty({
    example: {
      type: 'redirect',
      confirmation_url:
        'https://yoomoney.ru/checkout/payments/v2/contract?orderId=2b',
    },
  })
  confirmation: {
    type: string;
    confirmation_url: string;
  };

  @ApiProperty({
    example: {
      account_id: '224959',
      gateway_id: '2094454',
    },
  })
  recipient: {
    account_id: string;
    gateway_id: string;
  };

  @ApiProperty({ example: true })
  test: boolean;

  @ApiProperty({ example: false })
  paid: boolean;

  @ApiProperty({ example: false })
  refundable: boolean;

  @ApiProperty({ example: {} })
  metadata: object;
}
