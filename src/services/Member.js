import Sequelize from 'sequelize';
import DB from '../helpers/db';
import Logger from '../helpers/logger';

export default class UserService {
  logger;
  db;
  Models;
  Op;

  async init(router) {
    try {
      this.logger = new Logger();
      await this.logger.init();
    }
    catch(err) {
      throw err;
    }
  }

}
