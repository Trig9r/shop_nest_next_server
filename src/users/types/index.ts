import { ApiProperty } from '@nestjs/swagger';

export class LoginUserRequest {
  @ApiProperty({ example: 'Кирилл' })
  username: string;

  @ApiProperty({ example: 'zxc5002' })
  password: string;
}

export class LoginUserResponse {
  @ApiProperty({
    example: {
      user: {
        userId: 2,
        username: 'Кирилл2',
        email: 'debil2@gmail.com',
      },
    },
  })
  user: {
    userId: number;
    username: string;
    email: string;
  };

  @ApiProperty({ example: 'Logged in' })
  msg: string;
}

export class LogoutUserResponse {
  @ApiProperty({ example: 'Session has ended' })
  msg: string;
}

export class LogingCheckResponse {
  @ApiProperty({ example: 2 })
  userId: string;

  @ApiProperty({ example: 'Кирилл' })
  username: string;

  @ApiProperty({ example: 'debil2@gmail.com' })
  email: string;
}

// {
//   "id": 3,
//   "username": "Вася",
//   "email": "vasya@gmail.com",
//   "password": "$2b$10$YBhoqxkX2CXB4lGHMRAnjeU9i0fONxSKP4pMcuegVjotrar/qcgxO",
//   "updatedAt": "2023-06-27T10:35:58.903Z",
//   "createdAt": "2023-06-27T10:35:58.903Z"
// }

export class SignupResponse {
  @ApiProperty({ example: 3 })
  id: string;

  @ApiProperty({ example: 'Вася' })
  username: string;

  @ApiProperty({ example: 'vasya@gmail.com' })
  email: string;

  @ApiProperty({
    example: '$2b$10$YBhoqxkX2CXB4lGHMRAnjeU9i0fONxSKP4pMcuegVjotrar/qcgxO',
  })
  password: string;

  @ApiProperty({ example: '2023-06-27T10:35:58.903Z' })
  updatedAt: string;

  @ApiProperty({ example: '2023-06-27T10:35:58.903Z' })
  createdAt: string;
}
