import { Controller, Get, Logger, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  private logger: Logger = new Logger(AuthController.name);

  @UseGuards(AuthGuard('google'))
  @Get('google')
  async signInWithGoogle() {
    return 'OK';
  }

  @UseGuards(AuthGuard('google'))
  @Get('google/redirect')
  async signInWithGoogleRedirect(@Req() req) {
    this.logger.log(req.user);
    return req.user;
  }
}
