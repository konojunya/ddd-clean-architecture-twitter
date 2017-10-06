import * as mysql from 'mysql';
import dbconfig from '../../config/dbconfig';
const conn = mysql.createConnection(dbconfig);

class DB {
  getConn() {
    return conn;
  }
}

export default new DB();
