import { User } from '@aso/data-access-graphql';

export function getCurrentUser() {
  const user: User = { email: 'anis@example.com', name: 'Anis', id: '111' };
  return user;
}
