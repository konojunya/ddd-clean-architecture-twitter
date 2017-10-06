import { IConnection } from 'mysql';
import db from './db';
import { User } from '../model/User';

class UserRepository {

  private conn: IConnection;

  constructor() {
    this.conn = db.getConn();
  }

  findAll = async (): User[] => {
    const res = await this.findAllPromise() as any;
    if (res.results.length !== 0) {
      const users: User[] = res.results;
      return users;
    }
  }

  findById = async (userId: string): User => {
    const res = await this.findByIdPromise(userId) as any;
  }

  insert = async (name: string) => {
    const res = await this.insertPromise(name) as any;
  }

  private findAllPromise(): Promise<{}> {
    return new Promise((resolve) => {
      this.conn.query('SELECT * FROM user', (error, results) => {
        if (error) { throw error; }
        resolve(results);
      });
    });
  }

  private findByIdPromise(userId: string): Promise<{}> {
    return new Promise((resolve) => {
      this.conn.query('SELECT * FROM user where id = ?', [userId], (error, results) => {
        if (error) { throw error; }
        resolve(results);
      });
    });
  }

  private insertPromise(name: string): Promise<{}> {
    return new Promise((resolve) => {
      this.conn.query('INSERT INTO (name) values(?)', [name], (error, results) => {
        if (error) { throw error; }
        resolve(results);
      });
    });
  }

}

export default new UserRepository();
