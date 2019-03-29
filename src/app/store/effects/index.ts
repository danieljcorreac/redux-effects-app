import { UsersEffects } from './users.effects';
import { UserEffects } from './user.effects';

export * from './users.effects';
export * from './user.effects';

export const appEffects: any[] = [UsersEffects, UserEffects];
