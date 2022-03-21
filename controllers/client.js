const { response } = require('express');
const { db } = require('../database/config');
const { dafaultErrorMsgBD } = require('../utils/types');
const Client = require('../models/client');

const clientGetAll =  async (req, res) => {
  
  const { limit = 5, skip = 0 } = req.query // ?id=2&name=jair&lastname=arsa
  const client = new Client();
  
  try {
    const result = await client.getAll(limit, skip);
    res.status(200).json({ data: result });
  } catch (error) {
    console.log("Client - GetAll: ********* ", error);
    return  res.status(500).json({ msg: dafaultErrorMsgBD });
  }

}

const clientPost =  async (req, res) => {  
  
  const data = { name, surname, email, phone, birthdate } = req.body;
  const client = new Client();

  try {    
    const result = await client.save(data);
    return  res.status(201).json({ data: result });
  } catch (error) {
    console.log("Client - Save: ********* ", error);
    return  res.status(500).json({ msg: dafaultErrorMsgBD });
  }
}

const clientPut = async (req, res) => {
  
  const id = req.params.id;
  const data = { name, surname, email, phone, birthdate } = req.body;
  const client = new Client();
  
  try {
    const result = await client.update(id, data);
    return  res.status(200).json({ msg: 'Client updated' });
  } catch (error) {
    console.log("Client - Update: ********* ", error);
    return  res.status(500).json({ msg: dafaultErrorMsgBD });
  }
  
}

const clientDelete = async (req, res) => {  
  
  const id = req.params.id;
  const client = new Client(); 

  try {
    const result = await client.delete(id);
    return  res.status(200).json({ msg: 'Client deleted' });
  } catch (error) {
    console.log("Client - Delete: ********* ", error);
    return  res.status(500).json({ msg: dafaultErrorMsgBD });
  }
  
  res.json({ ok: true });

}

const getStatistics = async (req, res) => {
  const client = new Client();
  try {    
    const result = await client.getStatistics();
    const data = (result && result.length == 1) ? result[0] : 0;
    res.status(200).json({ data });
  } catch (error) {
    console.log("Client - GetAVG: ********* ", error);
    return  res.status(500).json({ msg: dafaultErrorMsgBD });
  }
}

const restoreStatus = async (req, res) => {
  
  const id = req.params.id;  
  const client = new Client();
  
  try {
    const result = await client.restoreStatus(id);
    return  res.status(200).json({ msg: 'Client Restored' });
  } catch (error) {
    console.log("Client - Update: ********* ", error);
    return  res.status(500).json({ msg: dafaultErrorMsgBD });
  }
  
}

module.exports = {
  clientGetAll,
  clientPost,
  clientPut,
  clientDelete,
  getStatistics,
  restoreStatus
}