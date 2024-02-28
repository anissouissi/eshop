import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { IdentityService } from '../identity.service';
import { catchError, lastValueFrom } from 'rxjs';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly identityService: IdentityService) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string) {
    return await lastValueFrom(
      this.identityService.validateUser(email, password).pipe(
        catchError((error) => {
          throw new Error(error);
        })
      )
    );
  }
}
