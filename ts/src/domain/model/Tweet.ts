import { User } from './user';

export interface Tweet {
  id: number;
  user: User;
  text: string;
  createdAt: string;
}
