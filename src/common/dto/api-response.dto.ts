import { ApiProperty } from '@nestjs/swagger';

export class ApiResponseDto<T = any> {
  @ApiProperty({
    description: 'Response message',
    example: 'Success',
  })
  message: string;

  @ApiProperty({
    description: 'HTTP status code',
    example: 200,
  })
  status: number;

  @ApiProperty({
    description: 'Error message if any',
    required: false,
    example: 'Not Found',
  })
  error?: string;

  @ApiProperty({
    description: 'Response data',
    required: false,
  })
  data?: T;
}
