import { Pipe, PipeTransform } from '@angular/core';
import { CredentialsService } from '@app/auth';

@Pipe({
  name: 'appUsername',
  pure: false,
})
export class UsernamePipe implements PipeTransform {
  constructor(private credentialsService: CredentialsService) {}

  transform(value: string): string {
    const { username } = this.credentialsService.credentials;
    value = username;
    return value;
  }
}
