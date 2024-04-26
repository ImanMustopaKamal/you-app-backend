import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserService } from '@services/user/user.service';
import { AuthGuard } from '@guards/auth.guard';
import {
  ApiBearerAuth,
  ApiExtraModels,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Users')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  
  @UseGuards(AuthGuard)
  @Get()
  getHello(): string {
    return this.userService.getHello();
  }
}
