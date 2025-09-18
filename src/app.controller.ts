import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
} from '@nestjs/swagger';
import { AppService } from './app.service';
import { ImageDto } from './common/dto/image.dto';
import { ApiResponseDto } from './common/dto/api-response.dto';

@ApiTags('api')
@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Get hello message' })
  @ApiResponse({
    status: 200,
    description: 'Returns a hello message',
    type: String,
  })
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('images')
  @ApiOperation({ summary: 'Get list of all images' })
  @ApiResponse({
    status: 200,
    description: 'Returns list of all images',
    type: [ImageDto],
  })
  async getImageList(): Promise<ImageDto[]> {
    return this.appService.getImageList();
  }

  @Get('images/:id')
  @ApiOperation({ summary: 'Get image details by ID' })
  @ApiParam({
    name: 'id',
    description: 'Image ID',
    type: 'number',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Returns image details',
    type: ImageDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Image not found',
  })
  async getImageDetail(@Param('id', ParseIntPipe) id: number): Promise<ImageDto> {
    return this.appService.getImageDetail(id);
  }
}
