import { INestApplication } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Test, TestingModule } from '@nestjs/testing';
import * as bcrypt from 'bcrypt';
import * as request from 'supertest';

import { databaseConfig } from 'src/config/configuration';
import { sequilizeConfigService } from 'src/config/sequilizeConfig.service';
import { User } from 'src/users/users.model';
import { UsersModule } from 'src/users/users.module';

describe('Users Controller', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const testModule: TestingModule = await Test.createTestingModule({
      imports: [
        SequelizeModule.forRootAsync({
          imports: [ConfigModule],
          useClass: sequilizeConfigService,
        }),
        ConfigModule.forRoot({
          load: [databaseConfig],
        }),
        UsersModule,
      ],
    }).compile();

    app = testModule.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await User.destroy({ where: { username: 'Test' } });
  });

  it('should create user', async () => {
    const newUser = {
      username: 'Test',
      email: 'test@gmail.com',
      password: 'test123',
    };

    const response = await request(app.getHttpServer())
      .post('/users/signup')
      .send(newUser);

    const isValidPassword = await bcrypt.compare(
      newUser.password,
      response.body.password,
    );

    expect(response.body.username).toBe(newUser.username);
    expect(response.body.email).toBe(newUser.email);
    expect(isValidPassword).toBe(true);
  });
});
