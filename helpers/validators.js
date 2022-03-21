const moment = require('moment');

const isValidDate = (date) => {
  return moment(date, 'YYYY-MM-DD', true).isValid();
}

module.exports = { isValidDate };