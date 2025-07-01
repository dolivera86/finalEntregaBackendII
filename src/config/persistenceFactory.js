import dotenv from 'dotenv';
dotenv.config();

import MongoUserDAO from '../dao/mongo/MongoUserDAO.js';
import MongoProductDAO from '../dao/mongo/MongoProductDAO.js';
import MongoCartDAO from '../dao/mongo/MongoCartDAO.js';

import MemoryUserDAO from '../dao/memory/MemoryUserDAO.js';
import MemoryProductDAO from '../dao/memory/MemoryProductDAO.js';
import MemoryCartDAO from '../dao/memory/MemoryCartDAO.js';

class PersistenceFactory {
  static getUserDao() {
    if (process.env.PERSISTENCE === 'memory') {
      console.log('Persistencia en memoria: UserDAO');
      return new MemoryUserDAO();
    }
    console.log('Persistencia en MongoDB: UserDAO');
    return new MongoUserDAO();
  }

  static getProductDao() {
    if (process.env.PERSISTENCE === 'memory') {
      console.log('Persistencia en memoria: ProductDAO');
      return new MemoryProductDAO();
    }
    console.log('Persistencia en MongoDB: ProductDAO');
    return new MongoProductDAO();
  }

  static getCartDao() {
    if (process.env.PERSISTENCE === 'memory') {
      console.log('Persistencia en memoria: CartDAO');
      return new MemoryCartDAO();
    }
    console.log('Persistencia en MongoDB: CartDAO');
    return new MongoCartDAO();
  }
}

export default PersistenceFactory;