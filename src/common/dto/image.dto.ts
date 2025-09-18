import { ApiProperty } from '@nestjs/swagger';

export class ImageDto {
  @ApiProperty({
    description: 'Unique identifier for the image',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Name of the image file',
    example: 'sample1.jpg',
  })
  name: string;

  @ApiProperty({
    description: 'URL of the image',
    example: 'https://example.com/sample1.jpg',
  })
  url: string;
}
