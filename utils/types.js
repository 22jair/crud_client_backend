const CLIENT_ERROR_MSG = {
  id: 'Id es requerido',
  id_not_valid: 'Id no es valido',
  name: 'Nombre es requerido',
  surname: 'Apellido es requerido',
  birthdate_empty: 'Fecha de Nacimiento es requerido',
  birthdate_invalid: 'Fecha de Nacimiento no es valida',
}

const DEFAULT_ERROR_MESSAGE_BD = 'Comunicar con el administrador';

module.exports = {
  clientErrorMsg: CLIENT_ERROR_MSG,
  dafaultErrorMsgBD: DEFAULT_ERROR_MESSAGE_BD
}