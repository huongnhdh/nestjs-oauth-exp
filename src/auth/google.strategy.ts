import { Injectable, Logger } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import config from '../config';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  private logger: Logger = new Logger(GoogleStrategy.name);
  constructor() {
    super({
      clientID: config.google.appId,
      clientSecret: config.google.appSecret,
      callbackURL: `http://${config.host}:${config.port}/auth/google/redirect`,
      scope: ['email', 'profile'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    this.logger.log('accessToken', accessToken);

    const { name, emails, photos } = profile;

    const user = {
      email: emails[0].value,
      firstName: name.givenName,
      lastName: name.familyName,
      picture: photos[0].value,
      accessToken,
    };
    done(null, user);
  }
}
