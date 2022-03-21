const { db } = require('../database/config');
const Client = require('../models/client');

const existClientById = async (id) => {
  const client = new Client();
  const result = await client.getById(id);
  if (result.length <= 0) {
    throw new Error('Client not found');
  }
}


module.exports = {
  existClientById
}