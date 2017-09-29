import { User } from './user';

export interface Tweet {
  user: User;
  text: string;
  createdAt: string;
}
