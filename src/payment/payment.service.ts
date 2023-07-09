import { ForbiddenException, Injectable } from '@nestjs/common';
import { MakePaymentDto } from './dto/make-payment.dto';
import { CheckPaymentDto } from './dto/check-payment.dto';
import axios from 'axios';

@Injectable()
export class PaymentService {
  async makePayment(makePaymentDto: MakePaymentDto) {
    try {
      const { data } = await axios({
        method: 'POST',
        url: 'https://api.yookassa.ru/v3/payments',
        headers: {
          'Content-Type': 'application/json',
          'Idempotence-Key': Date.now(),
        },
        auth: {
          username: '224959',
          password: 'test_jFlOtN_tXYFW9OtWEANN16Ma3Ncja8p_37IS_DkW9ic',
        },
        data: {
          amount: {
            value: makePaymentDto.amount,
            currency: 'RUB',
          },
          capture: true,
          confirmation: {
            type: 'redirect',
            return_url: 'http://localhost:3001/order',
          },
          desription: 'Заказ №1',
        },
      });

      return data;
    } catch (error) {
      throw new ForbiddenException(error);
    }
  }

  async checkPayment(checkPaymentDto: CheckPaymentDto) {
    try {
      const { data } = await axios({
        method: 'GET',
        url: `https://api.yookassa.ru/v3/payments/${checkPaymentDto.paymentId}`,
        auth: {
          username: '224959',
          password: 'test_jFlOtN_tXYFW9OtWEANN16Ma3Ncja8p_37IS_DkW9ic',
        },
      });

      return data;
    } catch (error) {
      throw new ForbiddenException(error);
    }
  }
}
