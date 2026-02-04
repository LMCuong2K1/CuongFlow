import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('register')
    @UsePipes(new ValidationPipe())
    async register(@Body() registerDto: RegisterDto) {
        const user = await this.authService.register(registerDto);
        return {
            message: 'Đăng ký thành công',
            data: {
                id: user['_id'],
                email: user.email,
                name: user.name
            }
        };
    }
}